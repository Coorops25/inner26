import crypto from 'crypto';
import type { CheckoutItem } from './catalog';

export type PaymentProvider = 'mercadopago' | 'wompi';

export interface CheckoutCustomer {
  name: string;
  email: string;
  phone?: string;
}

export interface OrderSnapshot {
  orderId: string;
  provider: PaymentProvider;
  currency: 'COP';
  amount: number;
  amountInCents: number;
  customer: CheckoutCustomer;
  fulfillment?: {
    type: 'pickup' | 'delivery';
    address?: string;
  };
  items: CheckoutItem[];
  createdAt: string;
}

export interface OrderTokenPayload {
  orderId: string;
  createdAt: string;
}

const base64url = (value: Buffer | string) =>
  Buffer.from(value).toString('base64url');

const getSecret = () => {
  const secret = process.env.ORDER_TOKEN_SECRET;
  if ((!secret || secret.startsWith('change-me') || secret.startsWith('replace-with-')) && process.env.NODE_ENV === 'production') {
    throw new Error('ORDER_TOKEN_SECRET no configurado');
  }
  return secret || 'dev-only-change-order-token-secret';
};

export const makeOrderId = () =>
  `IS-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;

export const signOrder = (order: OrderSnapshot) => {
  const payload = base64url(JSON.stringify({ orderId: order.orderId, createdAt: order.createdAt }));
  const signature = crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
  return `${payload}.${signature}`;
};

export const verifyOrderToken = (token: string): OrderTokenPayload => {
  const [payload, signature] = token.split('.');
  if (!payload || !signature) throw new Error('Token invalido');

  const expected = crypto.createHmac('sha256', getSecret()).update(payload).digest('base64url');
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) {
    throw new Error('Firma invalida');
  }

  const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as Partial<OrderTokenPayload>;
  if (!parsed.orderId) throw new Error('Token invalido');
  return {
    orderId: String(parsed.orderId),
    createdAt: String(parsed.createdAt || ''),
  };
};

export const createOrderSnapshot = (
  provider: PaymentProvider,
  customer: CheckoutCustomer,
  items: CheckoutItem[],
  fulfillment?: OrderSnapshot['fulfillment']
): OrderSnapshot => {
  const amount = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const order: OrderSnapshot = {
    orderId: makeOrderId(),
    provider,
    currency: 'COP',
    amount,
    amountInCents: amount * 100,
    customer,
    items,
    createdAt: new Date().toISOString(),
  };
  if (fulfillment) order.fulfillment = fulfillment;
  return order;
};

export const getBaseUrl = (req: any) => {
  const configured = process.env.PUBLIC_SITE_URL || process.env.VITE_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, '');
  if (process.env.NODE_ENV === 'production') {
    throw new Error('PUBLIC_SITE_URL no configurado');
  }

  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const proto = req.headers['x-forwarded-proto'] || 'https';
  return `${proto}://${host}`;
};
