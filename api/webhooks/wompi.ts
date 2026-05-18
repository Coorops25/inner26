import { getOrderById, markOrderStatus, recordWebhookEvent } from '../_lib/db';
import { fulfillPaidOrder } from '../_lib/fulfillment';
import { verifyWompiEvent } from '../_lib/payments';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Metodo no permitido' });
  }

  try {
    const checksum = req.headers['x-event-checksum'];
    if (!verifyWompiEvent(req.body, Array.isArray(checksum) ? checksum[0] : checksum)) {
      return res.status(401).json({ error: 'Checksum invalido' });
    }

    const transaction = req.body?.data?.transaction;
    const status = String(transaction?.status || '');
    const eventName = String(req.body?.event || 'wompi-event');
    if (!transaction?.id || !transaction?.reference) {
      return res.status(202).json({ received: true, processed: false });
    }

    if (!['APPROVED', 'DECLINED', 'VOIDED', 'ERROR'].includes(status)) {
      return res.status(202).json({ received: true, processed: false, status });
    }

    const eventId = `${eventName}:${String(transaction.id)}:${status}`;
    const order = await getOrderById(String(transaction.reference));
    const amountMatches = Number(transaction.amount_in_cents) === order.amountInCents && transaction.currency === 'COP';
    if (!amountMatches) return res.status(409).json({ error: 'Monto no coincide' });

    if (status === 'APPROVED') {
      await fulfillPaidOrder(order.orderId, String(transaction.id));
    } else {
      await markOrderStatus(order.orderId, 'failed', String(transaction.id));
    }

    const fresh = await recordWebhookEvent('wompi', eventId, req.body || {});
    return res.status(200).json({ received: true, processed: true, duplicate: !fresh });
  } catch {
    return res.status(500).json({ error: 'Webhook no procesado' });
  }
}
