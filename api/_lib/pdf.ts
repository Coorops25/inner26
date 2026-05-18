import type { OrderSnapshot } from './orders';

const ascii = (value: string) =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^\x20-\x7E]/g, '');

const escapePdf = (value: string) =>
  ascii(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

export const buildReceiptText = (order: OrderSnapshot) => {
  const lines = [
    'INNER SPIRIT STUDIO',
    `Orden: ${order.orderId}`,
    `Cliente: ${order.customer.name}`,
    `Email: ${order.customer.email}`,
    `Total: $${order.amount.toLocaleString('es-CO')} COP`,
    ...(order.fulfillment
      ? [
          `Entrega: ${order.fulfillment.type === 'delivery' ? 'Envio' : 'Retiro en estudio'}`,
          ...(order.fulfillment.address ? [`Direccion: ${order.fulfillment.address}`] : []),
        ]
      : []),
    '',
    'Items:',
    ...order.items.map((item) => {
      const kind = item.type === 'product' ? 'Articulo' : 'Entrada';
      const details = item.details ? ` - ${item.details}` : '';
      return `${kind}: ${item.name} x${item.quantity}${details}`;
    }),
    '',
    'Presenta este comprobante al llegar al estudio.',
    'Transversal 1 #17-29, La Candelaria, Bogota.',
  ];
  return lines;
};

export const buildOrderPdf = (order: OrderSnapshot) => {
  const lines = buildReceiptText(order);
  const text = lines
    .map((line, index) => `BT /F1 12 Tf 50 ${760 - index * 18} Td (${escapePdf(line)}) Tj ET`)
    .join('\n');

  const objects = [
    '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj',
    '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj',
    '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj',
    '4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj',
    `5 0 obj << /Length ${Buffer.byteLength(text)} >> stream\n${text}\nendstream endobj`,
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${object}\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return Buffer.from(pdf, 'binary');
};
