import { describe, it, expect, beforeEach } from 'vitest';
import crypto from 'crypto';
import {
  createWompiCheckout,
  verifyMercadoPagoSignature,
  verifyWompiEvent,
} from '../api/_lib/payments';
import type { OrderSnapshot } from '../api/_lib/orders';

describe('verifyMercadoPagoSignature', () => {
  beforeEach(() => {
    process.env.MERCADOPAGO_WEBHOOK_SECRET = 'test-secret-mp';
  });

  it('acepta una firma HMAC valida', () => {
    const ts = '1710000000';
    const dataId = 'PAY-1';
    const requestId = 'REQ-1';
    const manifest = `id:${dataId};request-id:${requestId};ts:${ts};`;
    const hash = crypto.createHmac('sha256', 'test-secret-mp').update(manifest).digest('hex');
    const req = {
      headers: { 'x-signature': `ts=${ts},v1=${hash}`, 'x-request-id': requestId },
      query: { 'data.id': dataId },
    };
    expect(verifyMercadoPagoSignature(req)).toBe(true);
  });

  it('rechaza una firma que no coincide', () => {
    const req = {
      headers: { 'x-signature': `ts=1,v1=${'0'.repeat(64)}`, 'x-request-id': 'r' },
      query: { 'data.id': 'PAY-1' },
    };
    expect(verifyMercadoPagoSignature(req)).toBe(false);
  });
});

describe('verifyWompiEvent', () => {
  beforeEach(() => {
    process.env.WOMPI_EVENTS_SECRET = 'test-secret-wompi';
  });

  it('acepta un checksum valido', () => {
    const event = {
      data: { transaction: { id: 'T1', status: 'APPROVED' } },
      signature: { properties: ['transaction.id', 'transaction.status'] },
      timestamp: 1710000000,
    };
    const checksum = crypto
      .createHash('sha256')
      .update(`T1APPROVED${event.timestamp}test-secret-wompi`)
      .digest('hex')
      .toUpperCase();
    expect(verifyWompiEvent(event, checksum)).toBe(true);
  });

  it('rechaza un checksum invalido', () => {
    const event = {
      data: { transaction: { id: 'T1', status: 'APPROVED' } },
      signature: { properties: ['transaction.id'] },
      timestamp: 1,
    };
    expect(verifyWompiEvent(event, 'A'.repeat(64))).toBe(false);
  });
});

describe('createWompiCheckout', () => {
  beforeEach(() => {
    process.env.WOMPI_PUBLIC_KEY = 'pub_test_123';
    process.env.WOMPI_INTEGRITY_KEY = 'integ_test_123';
    delete process.env.WOMPI_CHECKOUT_URL;
  });

  it('genera el signature:integrity determinista sobre orderId+amount+moneda+llave', () => {
    const order = {
      orderId: 'IS-1',
      amountInCents: 4500000,
      customer: { name: 'Ana', email: 'a@b.co' },
    } as OrderSnapshot;
    const checkout = createWompiCheckout(order, 'tok', 'https://innerspirit.co');
    const expected = crypto.createHash('sha256').update('IS-14500000COPinteg_test_123').digest('hex');
    expect(checkout.checkoutUrl).toContain(`signature%3Aintegrity=${expected}`);
    expect(checkout.providerReference).toBe('IS-1');
  });
});
