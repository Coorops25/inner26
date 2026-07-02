import { getOrderById, markOrderStatus, recordWebhookEvent } from '../_lib/db';
import { fulfillPaidOrder } from '../_lib/fulfillment';
import { verifyMercadoPagoSignature } from '../_lib/payments';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo no permitido' });
  }

  try {
    if (!verifyMercadoPagoSignature(req)) {
      return res.status(401).json({ error: 'Firma invalida' });
    }

    const paymentId = String(req.query?.['data.id'] || req.body?.data?.id || '');
    if (!paymentId) return res.status(202).json({ received: true, processed: false });
    if (!process.env.MERCADOPAGO_ACCESS_TOKEN) throw new Error('MERCADOPAGO_ACCESS_TOKEN no configurado');

    const paymentResponse = await fetch(`https://api.mercadopago.com/v1/payments/${encodeURIComponent(paymentId)}`, {
      headers: { Authorization: `Bearer ${process.env.MERCADOPAGO_ACCESS_TOKEN}` },
    });
    if (!paymentResponse.ok) return res.status(503).json({ received: true, processed: false });

    const payment = await paymentResponse.json();
    const status = String(payment?.status || '');
    if (!['approved', 'rejected', 'cancelled', 'canceled'].includes(status)) {
      return res.status(202).json({ received: true, processed: false, status });
    }

    const orderId = String(payment?.external_reference || '');
    let order;
    try {
      order = await getOrderById(orderId);
    } catch {
      // Orden desconocida: responder 2xx para que MercadoPago no reintente indefinidamente.
      return res.status(202).json({ received: true, processed: false, reason: 'orden desconocida' });
    }
    const amountMatches = Number(payment?.transaction_amount) === order.amount && payment?.currency_id === 'COP';
    if (!amountMatches) return res.status(409).json({ error: 'Monto no coincide' });

    if (status === 'approved') {
      await fulfillPaidOrder(order.orderId, String(payment?.id || paymentId));
    } else {
      await markOrderStatus(order.orderId, 'failed', String(payment?.id || paymentId));
    }

    const eventId = `${String(req.body?.type || req.body?.action || 'payment')}:${String(payment?.id || paymentId)}:${status}`;
    const fresh = await recordWebhookEvent('mercadopago', eventId, req.body || {});
    return res.status(200).json({ received: true, processed: true, duplicate: !fresh });
  } catch {
    return res.status(500).json({ error: 'Webhook no procesado' });
  }
}
