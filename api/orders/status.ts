import { getOrderById, getOrderPaymentMeta } from '../_lib/db';
import { verifyOrderToken } from '../_lib/orders';

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Metodo no permitido' });
  }

  try {
    const tokenOrder = verifyOrderToken(String(req.query?.token || ''));
    const [order, meta] = await Promise.all([
      getOrderById(tokenOrder.orderId),
      getOrderPaymentMeta(tokenOrder.orderId),
    ]);

    return res.status(200).json({
      orderId: order.orderId,
      status: meta.status,
      provider: meta.provider,
      amount: order.amount,
      currency: order.currency,
      items: order.items.map((item) => ({
        id: item.id,
        name: item.name,
        type: item.type,
        quantity: item.quantity,
        details: item.details,
      })),
    });
  } catch {
    return res.status(400).json({ error: 'Token invalido' });
  }
}
