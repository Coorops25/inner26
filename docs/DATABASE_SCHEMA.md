# Database Schema

## Engine

The commerce API uses PostgreSQL through the `pg` package. The schema is created
at runtime by `ensureCommerceSchema()` in `api/_lib/db.ts`.

There are currently no standalone migration files. For production hardening,
move this schema into versioned migrations before adding more commerce features.

## Tables

### `orders`

Stores one checkout/order record.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `text` | Primary key | Internal order ID, for example `IS-...` |
| `status` | `text` | Not null, default `pending_payment` | Payment/order state |
| `provider` | `text` | Not null | `mercadopago` or `wompi` |
| `provider_reference` | `text` | Unique | Provider preference, payment or transaction reference |
| `currency` | `text` | Not null, default `COP` | Order currency |
| `subtotal_amount` | `integer` | Not null | Current subtotal in COP |
| `total_amount` | `integer` | Not null | Current total in COP |
| `amount_in_cents` | `integer` | Not null | Total multiplied by 100 for Wompi |
| `customer_name` | `text` | Not null | Customer full name |
| `customer_email` | `text` | Not null | Customer email |
| `customer_phone` | `text` | Nullable | Customer phone/WhatsApp |
| `fulfillment_type` | `text` | Nullable | `pickup` or `delivery` |
| `delivery_address` | `text` | Nullable | Delivery address when needed |
| `idempotency_key` | `text` | Not null, unique | Checkout idempotency key |
| `payload_hash` | `text` | Not null | Hash of checkout payload |
| `order_token` | `text` | Not null | Signed token for status, confirm and PDF routes |
| `checkout_url` | `text` | Nullable | Provider checkout URL |
| `paid_at` | `timestamptz` | Nullable | First time the order became paid |
| `created_at` | `timestamptz` | Not null, default `now()` | Creation timestamp |
| `updated_at` | `timestamptz` | Not null, default `now()` | Last update timestamp |

### `order_items`

Stores normalized cart lines for an order.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `bigserial` | Primary key | Row ID |
| `order_id` | `text` | Not null, FK `orders(id)` on delete cascade | Parent order |
| `item_id` | `text` | Not null | Product/class/event ID from cart |
| `item_type` | `text` | Not null | `product`, `class` or `event` |
| `title` | `text` | Not null | Server-normalized item name |
| `details` | `text` | Nullable | Slot, source or item details |
| `unit_amount` | `integer` | Not null | Unit price in COP |
| `quantity` | `integer` | Not null | Quantity |
| `line_total` | `integer` | Not null | `unit_amount * quantity` |
| `illustration_name` | `text` | Nullable | UI illustration key |

### `webhook_events`

Tracks processed payment provider events.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `bigserial` | Primary key | Row ID |
| `provider` | `text` | Not null, unique with `event_id` | Payment provider |
| `event_id` | `text` | Not null, unique with `provider` | Provider event identity |
| `payload` | `jsonb` | Not null | Raw webhook payload |
| `processed_at` | `timestamptz` | Not null, default `now()` | Processing timestamp |

### `email_deliveries`

Tracks confirmation email delivery attempts.

| Column | Type | Constraints | Description |
| --- | --- | --- | --- |
| `id` | `bigserial` | Primary key | Row ID |
| `order_id` | `text` | Not null, FK `orders(id)` on delete cascade, unique with `delivery_type` | Parent order |
| `delivery_type` | `text` | Not null, unique with `order_id` | Currently `confirmation` |
| `status` | `text` | Not null | `processing`, `sent`, `skipped` or `failed` |
| `message` | `text` | Nullable | Error or skip reason |
| `created_at` | `timestamptz` | Not null, default `now()` | Last delivery record timestamp |

## Relationships

| Relationship | Behavior |
| --- | --- |
| `orders.id -> order_items.order_id` | Deleting an order deletes its items |
| `orders.id -> email_deliveries.order_id` | Deleting an order deletes delivery records |
| `orders.id -> webhook_events` | No foreign key; webhook event IDs are provider scoped |

## Unique Constraints

| Table | Constraint | Purpose |
| --- | --- | --- |
| `orders` | `provider_reference` unique | Avoid duplicate provider references |
| `orders` | `idempotency_key` unique | Avoid duplicate checkout creation |
| `webhook_events` | unique `(provider, event_id)` | Detect duplicate webhooks |
| `email_deliveries` | unique `(order_id, delivery_type)` | Avoid duplicate confirmation emails |

## Status Values

Observed status values in code:

| Status | Source | Meaning |
| --- | --- | --- |
| `pending_payment` | DB default | Order exists before provider completion |
| `pending` | Checkout API response | Checkout URL created; provider result pending |
| `paid` | Webhook fulfillment | Payment approved and order fulfilled |
| `failed` | Webhook fulfillment | Payment rejected, cancelled, voided or errored |

## Schema Bootstrap

Every DB operation calls `ensureCommerceSchema()`, which runs `create table if
not exists` and two `alter table ... add column if not exists` statements.

This keeps first deploys simple, but it also means schema changes are coupled to
runtime requests. For production, prefer explicit migrations such as:

```bash
# Example direction, not currently implemented
npm run db:migrate
```

## Data Retention Notes

- Webhook payloads are stored as `jsonb`; avoid logging secrets in provider metadata.
- Customer data and delivery addresses are stored directly in `orders`.
- PDF receipts are generated on demand and are not stored as files.
