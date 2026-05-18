import { getOrderById, getOrderPaymentMeta } from '../_lib/db';
import { buildReceiptText } from '../_lib/pdf';
import { verifyOrderToken } from '../_lib/orders';

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const html = (body: string) => `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Confirmacion Inner Spirit</title>
  <style>
    body{margin:0;font-family:Inter,Arial,sans-serif;background:#EAE0CC;color:#1A1A18}
    main{max-width:760px;margin:0 auto;padding:48px 20px}
    section{background:#FAF7F2;border:1px solid rgba(77,106,109,.18);padding:28px}
    h1{font-family:Georgia,serif;font-size:42px;line-height:1;margin:0 0 16px}
    a,button{display:inline-flex;min-height:44px;align-items:center;padding:0 18px;background:#4D6A6D;color:#EAE0CC;text-decoration:none;border:0}
    pre{white-space:pre-wrap;line-height:1.6}
  </style>
</head>
<body><main><section>${body}</section></main></body></html>`;

export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).send('Metodo no permitido');
  }

  try {
    const token = String(req.query?.token || '');
    const tokenOrder = verifyOrderToken(token);
    const order = await getOrderById(tokenOrder.orderId);
    const meta = await getOrderPaymentMeta(order.orderId);
    const paid = meta.status === 'paid';
    const failed = meta.status === 'failed';
    const receipt = escapeHtml(buildReceiptText(order).join('\n'));
    const pdfLink = paid
      ? `<p><a href="/api/orders/pdf?token=${encodeURIComponent(token)}">Abrir PDF / entrada</a></p>`
      : '<p>El PDF, las entradas y el email quedan disponibles cuando el webhook firmado confirme el pago.</p>';
    const body = `
      <p style="letter-spacing:.18em;text-transform:uppercase;color:#4D6A6D;font-weight:700">Inner Spirit Studio</p>
      <h1>${paid ? 'Pago recibido' : failed ? 'Pago no aprobado' : 'Pago pendiente'}</h1>
      <p>Orden <strong>${escapeHtml(order.orderId)}</strong></p>
      <pre>${receipt}</pre>
      <p>Estado: ${escapeHtml(meta.status)}</p>
      ${pdfLink}
      <p><a href="/api/orders/confirm?token=${encodeURIComponent(token)}">Actualizar estado</a></p>
      <p><a href="/">Volver al sitio</a></p>
    `;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(html(body));
  } catch {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(400).send(html('<h1>Error</h1><p>No pudimos validar esta orden.</p>'));
  }
}
