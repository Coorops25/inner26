# API Endpoints

## Base URL

In production, endpoints are relative to the deployed site:

```text
https://innerspirit.co/api
```

In local development with Vercel-style routing, use the local host that serves
the API functions. The browser checkout code calls relative paths such as
`/api/checkout`.

## Authentication And Trust

There is no user account authentication in the current API.

| Area | Protection |
| --- | --- |
| Checkout creation | Server-side catalog validation and idempotency key |
| Order status/confirm/PDF | Signed order token generated with `ORDER_TOKEN_SECRET` |
| Mercado Pago webhook | `x-signature`, `x-request-id` and `MERCADOPAGO_WEBHOOK_SECRET` |
| Wompi webhook | Event checksum and `WOMPI_EVENTS_SECRET` |

## Error Format

JSON endpoints return:

```json
{ "error": "Mensaje de error" }
```

HTML/PDF endpoints return plain HTML or text errors.

## Endpoints

### Checkout

#### `POST /api/checkout`

Creates or reuses an idempotent order, then creates a provider checkout URL.

Headers:

| Header | Required | Description |
| --- | --- | --- |
| `Content-Type: application/json` | Yes | JSON request body |
| `Idempotency-Key` | Recommended | Prevents duplicate order creation for the same payload |

Body:

```json
{
  "provider": "mercadopago",
  "customer": {
    "name": "Cliente",
    "email": "cliente@example.com",
    "phone": "+57 300 000 0000"
  },
  "fulfillment": {
    "type": "pickup",
    "address": ""
  },
  "items": [
    {
      "id": "prod-1",
      "name": "Cristal de Cuarzo",
      "price": 45000,
      "quantity": 1,
      "type": "product"
    }
  ],
  "idempotencyKey": "uuid"
}
```

Supported providers:

| Provider | Description |
| --- | --- |
| `mercadopago` | Creates a Mercado Pago Checkout Pro preference |
| `wompi` | Creates a signed Wompi Checkout Web URL |

Supported item types:

| Type | Notes |
| --- | --- |
| `product` | Must match product IDs in `api/_lib/catalog.ts` |
| `class` | Name must match the allowed service catalog |
| `event` | Name must match the allowed service catalog |

Success response:

```json
{
  "orderId": "IS-...",
  "provider": "mercadopago",
  "status": "pending",
  "checkoutUrl": "https://...",
  "providerReference": "..."
}
```

Status codes:

| Code | Meaning |
| --- | --- |
| `200` | Checkout URL created or reused |
| `400` | Invalid customer, provider, cart, fulfillment or idempotency payload |
| `405` | Method other than `POST` |

### Orders

#### `GET /api/orders/status?token=...`

Returns order status and public item details for a signed order token.

Success response:

```json
{
  "orderId": "IS-...",
  "status": "paid",
  "provider": "wompi",
  "amount": 55000,
  "currency": "COP",
  "items": [
    {
      "id": "event-INNER DANCE-Sabado 6:00 PM",
      "name": "INNER DANCE",
      "type": "event",
      "quantity": 1,
      "details": "Sabado 6:00 PM - Cupo general"
    }
  ]
}
```

Status codes:

| Code | Meaning |
| --- | --- |
| `200` | Token valid |
| `400` | Invalid token |
| `405` | Method other than `GET` |

#### `GET /api/orders/confirm?token=...`

Renders an HTML confirmation page for an order token. If the order is `paid`,
the page links to the PDF receipt. If the order is pending or failed, it renders
the current state and an update link.

Status codes:

| Code | Meaning |
| --- | --- |
| `200` | Confirmation page rendered |
| `400` | Invalid token |
| `405` | Method other than `GET` |

#### `GET /api/orders/pdf?token=...`

Returns an inline PDF receipt/entry for a paid order.

Status codes:

| Code | Meaning |
| --- | --- |
| `200` | PDF generated |
| `400` | Invalid token |
| `402` | Payment is not paid yet |
| `405` | Method other than `GET` |

### Webhooks

#### `POST /api/webhooks/mercadopago`

Receives Mercado Pago payment notifications.

Processing:

1. Validates the webhook signature using `MERCADOPAGO_WEBHOOK_SECRET`.
2. Reads `data.id` from query or body.
3. Fetches payment details from Mercado Pago using `MERCADOPAGO_ACCESS_TOKEN`.
4. Uses `external_reference` as the order ID.
5. Verifies amount and currency (`COP`).
6. Marks the order `paid` for `approved`; otherwise marks it `failed`.
7. Records the webhook event for duplicate detection.

Responses:

| Code | Meaning |
| --- | --- |
| `200` | Processed |
| `202` | Received but not processable yet |
| `401` | Invalid signature |
| `409` | Amount mismatch |
| `503` | Mercado Pago payment lookup unavailable |
| `500` | Webhook processing failed |

#### `POST /api/webhooks/wompi`

Receives Wompi transaction events.

Processing:

1. Validates checksum from `x-event-checksum` or event signature.
2. Reads `data.transaction`.
3. Uses transaction `reference` as the order ID.
4. Verifies amount in cents and currency (`COP`).
5. Marks the order `paid` for `APPROVED`; otherwise marks it `failed`.
6. Records the webhook event for duplicate detection.

Responses:

| Code | Meaning |
| --- | --- |
| `200` | Processed |
| `202` | Received but not processable yet |
| `401` | Invalid checksum |
| `409` | Amount mismatch |
| `500` | Webhook processing failed |

## Idempotency

`POST /api/checkout` hashes the normalized payload and stores it with the
idempotency key. Reusing the same key with the same payload returns the existing
order. Reusing it with a different payload returns a client-facing duplicate
request error.

## Fulfillment Side Effects

When a webhook confirms a paid order:

1. `orders.status` becomes `paid`.
2. `paid_at` is set once.
3. `email_deliveries` claims a `confirmation` delivery.
4. `api/_lib/email.ts` sends the customer PDF if SMTP is configured.
5. If SMTP is not configured, the delivery is marked `skipped`.
