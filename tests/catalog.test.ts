import { describe, it, expect } from 'vitest';
import { normalizeCheckoutItems } from '../api/_lib/catalog';

describe('normalizeCheckoutItems', () => {
  it('rechaza un carrito vacio', () => {
    expect(() => normalizeCheckoutItems([])).toThrow('Carrito vacio');
    expect(() => normalizeCheckoutItems(undefined)).toThrow('Carrito vacio');
  });

  it('ignora el precio enviado por el cliente y usa el del catalogo del servidor', () => {
    const [item] = normalizeCheckoutItems([
      { id: 'prod-1', name: 'nombre falsificado', type: 'product', price: 1, quantity: 1 },
    ]);
    expect(item.unitPrice).toBe(45000);
    expect(item.name).toBe('Cristal de Cuarzo');
    expect(item.lineTotal).toBe(45000);
  });

  it('rechaza un producto que no esta en el catalogo', () => {
    expect(() =>
      normalizeCheckoutItems([{ id: 'prod-999', name: 'x', type: 'product', price: 10, quantity: 1 }]),
    ).toThrow(/Producto no permitido/);
  });

  it('limita la cantidad al rango 1..10', () => {
    const [alto] = normalizeCheckoutItems([
      { id: 'prod-1', name: 'x', type: 'product', price: 10, quantity: 999 },
    ]);
    expect(alto.quantity).toBe(10);
    expect(alto.lineTotal).toBe(450000);

    const [bajo] = normalizeCheckoutItems([
      { id: 'prod-1', name: 'x', type: 'product', price: 10, quantity: 0 },
    ]);
    expect(bajo.quantity).toBe(1);
  });

  it('resuelve servicios por nombre normalizado (acentos/mayusculas)', () => {
    const [item] = normalizeCheckoutItems([
      { id: 'svc', name: 'yoga', type: 'class', price: 999, quantity: 1 },
    ]);
    expect(item.unitPrice).toBe(36000);
  });

  it('rechaza una reserva que no existe', () => {
    expect(() =>
      normalizeCheckoutItems([{ id: 'svc', name: 'clase inexistente', type: 'class', price: 10, quantity: 1 }]),
    ).toThrow(/Reserva no permitida/);
  });

  it('rechaza un tipo de item invalido', () => {
    expect(() =>
      normalizeCheckoutItems([{ id: 'x', name: 'x', type: 'foo' as never, price: 10, quantity: 1 }]),
    ).toThrow('Tipo de item invalido');
  });
});
