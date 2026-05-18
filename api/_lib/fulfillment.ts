import { getOrderById, markOrderStatus, recordEmailDelivery, updateEmailDelivery } from './db';
import { sendOrderEmail } from './email';

export const fulfillPaidOrder = async (orderId: string, providerReference?: string) => {
  await markOrderStatus(orderId, 'paid', providerReference);
  const order = await getOrderById(orderId);
  const claimed = await recordEmailDelivery(orderId, 'confirmation', 'processing');
  if (!claimed) return { order, email: { sent: false, reason: 'Email ya procesado' } };

  try {
    const email = await sendOrderEmail(order);
    await updateEmailDelivery(orderId, 'confirmation', email.sent ? 'sent' : 'skipped', email.sent ? undefined : email.reason);
    return { order, email };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error enviando email';
    await updateEmailDelivery(orderId, 'confirmation', 'failed', message);
    throw error;
  }
};
