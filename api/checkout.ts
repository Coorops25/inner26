import { normalizeCheckoutItems } from './_lib/catalog';
import { attachCheckoutToOrder, createOrderRecord, getOrderPaymentMeta, hashPayload } from './_lib/db';
import { createOrderSnapshot, getBaseUrl, signOrder, type OrderSnapshot, type PaymentProvider } from './_lib/orders';
import { createMercadoPagoPreference, createWompiCheckout } from './_lib/payments';

const readBody = (req: any) => (typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {});

const cleanCustomer = (customer: any) => {
  const name = String(customer?.name || '').trim();
  const email = String(customer?.email || '').trim().toLowerCase();
  const phone = String(customer?.phone || '').trim();
  if (name.length < 2) throw new Error('Nombre requerido');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Email invalido');
  return phone ? { name, email, phone } : { name, email };
};

const cleanFulfillment = (raw: any, hasProducts: boolean): OrderSnapshot['fulfillment'] => {
  if (!hasProducts) return undefined;
  const type: 'pickup' | 'delivery' = raw?.type === 'delivery' ? 'delivery' : 'pickup';
  const address = String(raw?.address || '').trim().slice(0, 240);
  if (type === 'delivery' && address.length < 8) throw new Error('Direccion de entrega requerida');
  return type === 'delivery' ? { type, address } : { type };
};

const clientMessage = (error: unknown) => {
  const message = error instanceof Error ? error.message : '';
  const allowed = [
    'Nombre requerido',
    'Email invalido',
    'Direccion de entrega requerida',
    'Carrito vacio',
    'Tipo de item invalido',
    'Precio invalido',
    'Proveedor invalido',
    'Proveedor no soportado',
  ];
  if (allowed.includes(message) || message.startsWith('Producto no permitido') || message.startsWith('Reserva no permitida')) {
    return message;
  }
  if (message.includes('Idempotency-Key')) return 'Solicitud de pago duplicada con datos distintos';
  return 'No se pudo crear el pago. Intenta nuevamente.';
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo no permitido' });
  }

  try {
    const body = readBody(req);
    const provider = String(body.provider || 'mercadopago') as PaymentProvider;
    if (!['mercadopago', 'wompi'].includes(provider)) {
      return res.status(400).json({ error: 'Proveedor invalido' });
    }

    const customer = cleanCustomer(body.customer);
    const items = normalizeCheckoutItems(body.items);
    const fulfillment = cleanFulfillment(body.fulfillment, items.some((item) => item.type === 'product'));
    const order = createOrderSnapshot(provider, customer, items, fulfillment);
    const token = signOrder(order);
    const idempotencyKey = String(req.headers['idempotency-key'] || body.idempotencyKey || order.orderId);
    const payloadHash = hashPayload({ provider, customer, fulfillment, items });
    const persistedOrder = await createOrderRecord(order, token, idempotencyKey, payloadHash);
    const persistedToken = signOrder(persistedOrder);
    const baseUrl = getBaseUrl(req);
    const existingPayment = await getOrderPaymentMeta(persistedOrder.orderId);
    if (existingPayment.checkoutUrl) {
      return res.status(200).json({
        orderId: persistedOrder.orderId,
        provider: existingPayment.provider,
        status: existingPayment.status,
        checkoutUrl: existingPayment.checkoutUrl,
        providerReference: existingPayment.providerReference,
      });
    }

    if (provider === 'mercadopago') {
      const preference = await createMercadoPagoPreference(persistedOrder, persistedToken, baseUrl);
      await attachCheckoutToOrder(persistedOrder.orderId, preference.providerReference, preference.checkoutUrl);
      return res.status(200).json({ orderId: persistedOrder.orderId, provider, status: 'pending', ...preference });
    }

    if (provider === 'wompi') {
      const checkout = createWompiCheckout(persistedOrder, persistedToken, baseUrl);
      await attachCheckoutToOrder(persistedOrder.orderId, checkout.providerReference, checkout.checkoutUrl);
      return res.status(200).json({ orderId: persistedOrder.orderId, provider, status: 'pending', ...checkout });
    }
    return res.status(400).json({ error: 'Proveedor no soportado' });
  } catch (error) {
    return res.status(400).json({ error: clientMessage(error) });
  }
}
