import { buildOrderPdf } from '../_lib/pdf';
import { getOrderById, getOrderPaymentMeta } from '../_lib/db';
import { verifyOrderToken } from '../_lib/orders';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).send('Metodo no permitido');
  }

  try {
    const token = String(req.query?.token || '');
    const tokenOrder = verifyOrderToken(token);
    const [order, meta] = await Promise.all([
      getOrderById(tokenOrder.orderId),
      getOrderPaymentMeta(tokenOrder.orderId),
    ]);
    if (meta.status !== 'paid') {
      return res.status(402).send('Pago pendiente');
    }
    const pdf = buildOrderPdf(order);

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="inner-spirit-${order.orderId}.pdf"`);
    return res.status(200).send(pdf);
  } catch {
    return res.status(400).send('Token invalido');
  }
}
