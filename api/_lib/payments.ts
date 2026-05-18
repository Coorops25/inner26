import crypto from 'crypto';
import type { OrderSnapshot } from './orders';

const safeEqual = (left: string, right: string) => {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  return leftBuffer.length === rightBuffer.length && crypto.timingSafeEqual(leftBuffer, rightBuffer);
};

const missing = (value: string | undefined) => !value || value.startsWith('replace-with-') || value.startsWith('change-me');

export const createMercadoPagoPreference = async (order: OrderSnapshot, token: string, baseUrl: string) => {
  const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
  if (missing(accessToken)) throw new Error('MERCADOPAGO_ACCESS_TOKEN no configurado');

  const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Idempotency-Key': order.orderId,
    },
    body: JSON.stringify({
      items: order.items.map((item) => ({
        id: item.id,
        title: item.name,
        description: item.details,
        quantity: item.quantity,
        unit_price: item.unitPrice,
        currency_id: 'COP',
      })),
      payer: {
        name: order.customer.name,
        email: order.customer.email,
        phone: order.customer.phone ? { number: order.customer.phone } : undefined,
      },
      external_reference: order.orderId,
      metadata: {
        order_id: order.orderId,
      },
      notification_url: `${baseUrl}/api/webhooks/mercadopago`,
      back_urls: {
        success: `${baseUrl}/api/orders/confirm?token=${encodeURIComponent(token)}&provider=mercadopago`,
        failure: `${baseUrl}/api/orders/confirm?token=${encodeURIComponent(token)}&provider=mercadopago&status=failed`,
        pending: `${baseUrl}/api/orders/confirm?token=${encodeURIComponent(token)}&provider=mercadopago&status=pending`,
      },
      auto_return: 'approved',
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.message || 'MercadoPago rechazo la preferencia');
  }

  return {
    checkoutUrl: data.init_point || data.sandbox_init_point,
    providerReference: data.id,
  };
};

export const createWompiCheckout = (order: OrderSnapshot, token: string, baseUrl: string) => {
  const publicKey = process.env.WOMPI_PUBLIC_KEY;
  const integrityKey = process.env.WOMPI_INTEGRITY_KEY || process.env.WOMPI_INTEGRITY_SECRET;
  if (missing(publicKey) || missing(integrityKey)) throw new Error('WOMPI_PUBLIC_KEY/WOMPI_INTEGRITY_KEY no configurado');
  const publicKeyValue = publicKey as string;
  const integrityKeyValue = integrityKey as string;

  const signature = crypto
    .createHash('sha256')
    .update(`${order.orderId}${order.amountInCents}COP${integrityKeyValue}`)
    .digest('hex');

  const params = new URLSearchParams({
    'public-key': publicKeyValue,
    currency: 'COP',
    'amount-in-cents': String(order.amountInCents),
    reference: order.orderId,
    'signature:integrity': signature,
    'redirect-url': `${baseUrl}/api/orders/confirm?token=${encodeURIComponent(token)}&provider=wompi`,
    'customer-data:email': order.customer.email,
    'customer-data:full-name': order.customer.name,
  });

  if (order.customer.phone) {
    params.set('customer-data:phone-number', order.customer.phone.replace(/^\+?57/, ''));
    params.set('customer-data:phone-number-prefix', '+57');
  }

  const checkoutBase = process.env.WOMPI_CHECKOUT_URL || 'https://checkout.wompi.co/p/';
  return {
    checkoutUrl: `${checkoutBase}?${params.toString()}`,
    providerReference: order.orderId,
  };
};

export const verifyMercadoPagoSignature = (req: any) => {
  const secret = process.env.MERCADOPAGO_WEBHOOK_SECRET;
  if (missing(secret)) throw new Error('MERCADOPAGO_WEBHOOK_SECRET no configurado');
  const webhookSecret = secret as string;

  const signature = String(req.headers['x-signature'] || '');
  const requestId = String(req.headers['x-request-id'] || '');
  const [tsPart, hashPart] = signature.split(',');
  const ts = tsPart?.split('=')[1];
  const hash = hashPart?.split('=')[1];
  const dataId = req.query?.['data.id'] || req.body?.data?.id;
  if (!ts || !hash || !dataId) return false;

  const manifest = `id:${dataId};request-id:${requestId};ts:${ts};`;
  const expected = crypto.createHmac('sha256', webhookSecret).update(manifest).digest('hex');
  return safeEqual(hash, expected);
};

const getPath = (source: any, path: string) =>
  path.split('.').reduce((current, key) => current?.[key], source);

export const verifyWompiEvent = (event: any, headerChecksum: string | undefined) => {
  const secret = process.env.WOMPI_EVENTS_SECRET;
  if (missing(secret)) throw new Error('WOMPI_EVENTS_SECRET no configurado');
  const webhookSecret = secret as string;

  const properties = event?.signature?.properties;
  const checksum = headerChecksum || event?.signature?.checksum;
  if (!Array.isArray(properties) || !checksum) return false;

  const values = properties.map((path: string) => String(getPath(event.data, path) ?? '')).join('');
  const expected = crypto
    .createHash('sha256')
    .update(`${values}${event.timestamp}${webhookSecret}`)
    .digest('hex')
    .toUpperCase();

  return safeEqual(expected, String(checksum).toUpperCase());
};
