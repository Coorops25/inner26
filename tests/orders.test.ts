import { describe, it, expect } from 'vitest';
import { createOrderSnapshot, signOrder, verifyOrderToken } from '../api/_lib/orders';
import type { CheckoutItem } from '../api/_lib/catalog';

const item: CheckoutItem = {
  id: 'prod-1',
  name: 'Cristal de Cuarzo',
  type: 'product',
  quantity: 1,
  price: 45000,
  unitPrice: 45000,
  lineTotal: 45000,
};

const makeOrder = () =>
  createOrderSnapshot('wompi', { name: 'Ana', email: 'ana@example.com' }, [item]);

describe('createOrderSnapshot', () => {
  it('deriva amount y amountInCents desde los line totals', () => {
    const order = createOrderSnapshot('mercadopago', { name: 'Ana', email: 'a@b.co' }, [
      { ...item, quantity: 2, lineTotal: 90000 },
    ]);
    expect(order.amount).toBe(90000);
    expect(order.amountInCents).toBe(9000000);
    expect(order.currency).toBe('COP');
  });
});

describe('order token', () => {
  it('firma y verifica un token valido', () => {
    const order = makeOrder();
    const token = signOrder(order);
    expect(verifyOrderToken(token).orderId).toBe(order.orderId);
  });

  it('rechaza una firma manipulada', () => {
    const [payload] = signOrder(makeOrder()).split('.');
    expect(() => verifyOrderToken(`${payload}.firmafalsa`)).toThrow('Firma invalida');
  });

  it('rechaza un token malformado', () => {
    expect(() => verifyOrderToken('sinpunto')).toThrow('Token invalido');
  });

  it('rechaza un token caducado', () => {
    const order = makeOrder();
    order.createdAt = new Date(Date.now() - 200 * 24 * 60 * 60 * 1000).toISOString();
    const token = signOrder(order);
    expect(() => verifyOrderToken(token)).toThrow('Token expirado');
  });
});
