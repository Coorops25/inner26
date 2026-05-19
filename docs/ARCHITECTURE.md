# Architecture

## Overview

Inner Spirit Studio is a React/Vite single page application with a Vercel
serverless commerce layer. The browser app owns navigation, content, booking UI,
cart state and SEO updates. The `api/` functions own checkout creation, order
persistence, payment webhook validation, paid-order fulfillment, PDF generation
and optional email delivery.

## Stack

| Layer | Technology | Version / Source |
| --- | --- | --- |
| Frontend runtime | React | 18.3.1 |
| Build tool | Vite | ^6.2.0 |
| Language | TypeScript | ~5.8.2 |
| Styling | Tailwind CSS Vite plugin + global CSS tokens | ^4.2.2 |
| 3D / motion | Three.js, React Three Fiber, Drei, OGL | `package.json` |
| API runtime | Vercel Serverless Functions | `api/` |
| Database | PostgreSQL | `DATABASE_URL` |
| DB driver | `pg` | ^8.20.0 |
| Email | Nodemailer | ^8.0.7 |
| Tests | Vitest + Testing Library | `vitest.config.ts` |

## Runtime Surfaces

| Surface | Entry point | Responsibility |
| --- | --- | --- |
| Browser app | `index.tsx`, `App.tsx` | Render SPA, providers, lazy pages and modals |
| Vite dev server | `vite.config.ts` | Local dev on port 3000 and dev headers |
| Vercel static app | `dist/` | Built frontend assets |
| Vercel API | `api/**/*.ts` | Checkout, orders, webhooks and fulfillment |
| PostgreSQL | `api/_lib/db.ts` | Orders, items, webhook events and email delivery state |

## Directory Structure

```text
inner/
|-- api/
|   |-- _lib/
|   |   |-- catalog.ts       # Allowed checkout catalog and item normalization
|   |   |-- db.ts            # PostgreSQL pool, schema bootstrap and queries
|   |   |-- email.ts         # SMTP delivery with PDF attachment
|   |   |-- fulfillment.ts   # Paid-order workflow
|   |   |-- orders.ts        # Order snapshots and signed order tokens
|   |   |-- payments.ts      # Mercado Pago/Wompi checkout and webhook signatures
|   |   `-- pdf.ts           # Minimal PDF receipt builder
|   |-- checkout.ts          # POST /api/checkout
|   |-- orders/
|   |   |-- confirm.ts       # GET /api/orders/confirm
|   |   |-- pdf.ts           # GET /api/orders/pdf
|   |   `-- status.ts        # GET /api/orders/status
|   `-- webhooks/
|       |-- mercadopago.ts   # POST /api/webhooks/mercadopago
|       `-- wompi.ts         # POST /api/webhooks/wompi
|-- src/
|   |-- components/
|   |   |-- effects/         # Canvas/WebGL visual effects
|   |   |-- layout/          # Header and Footer
|   |   |-- modals/          # BookingModal and CheckoutModal
|   |   |-- sections/        # Home/page sections
|   |   `-- ui/              # Reusable primitives
|   |-- context/             # Cart, Navigation and Toast contexts
|   |-- modules/
|   |   |-- blog/
|   |   |-- events/
|   |   `-- shop/
|   |-- pages/               # SPA page components
|   |-- hooks/
|   |-- types/
|   `-- utils/
|-- docs/
|-- design-system/
|-- public/
`-- wp-backend/
```

## Frontend Flow

1. `index.tsx` mounts React in `#root`.
2. `App.tsx` wraps the app with `NavigationProvider`, `CartProvider` and `ToastProvider`.
3. `NavigationContext` maps browser paths to page names and updates history without a full reload.
4. `PageRenderer` lazy-loads page modules for each route.
5. `AppContent` updates document title, meta description, Open Graph, Twitter tags and canonical URL when `page` changes.
6. Shared modals (`BookingModal`, `CheckoutModal`) render above page content from cart state.

## Booking And Event Flow

1. Pages and sections open `BookingModal` with `BookingDetails`.
2. Event data comes from `src/modules/events/data/events.ts`.
3. Instagram event posts come from `VITE_IG_FEED_ENDPOINT` when configured.
4. If the remote feed is empty or unavailable, the event's local `instagramPosts` are used.
5. Confirming a slot adds a `class` or `event` item to the cart with source metadata.

## Commerce Flow

1. `CheckoutModal` posts customer, provider, fulfillment and cart items to `/api/checkout`.
2. `api/_lib/catalog.ts` rejects unknown products, classes or events and recalculates prices server-side.
3. `api/_lib/orders.ts` creates an order snapshot and signs a token with `ORDER_TOKEN_SECRET`.
4. `api/_lib/db.ts` creates or reuses an idempotent order in PostgreSQL.
5. `api/_lib/payments.ts` creates a Mercado Pago preference or Wompi checkout URL.
6. The user is redirected to the provider checkout.
7. Provider webhooks validate signatures/checksums, verify amount and mark the order `paid` or `failed`.
8. Paid orders call `fulfillPaidOrder`, generate a PDF and attempt SMTP email delivery.

## Configuration

| File | Purpose |
| --- | --- |
| `package.json` | npm scripts and dependency versions |
| `vite.config.ts` | Vite plugins, dev server and alias |
| `tsconfig.json` | strict TypeScript settings |
| `vitest.config.ts` | jsdom test environment and coverage settings |
| `vercel.json` | Vercel build, cache/security headers and SPA rewrites |
| `.env.example` | Frontend and server-side environment template |
| `design-system/MASTER.md` | Visual language and component recipes |

## Deployment

The expected host is Vercel.

```text
installCommand: npm install
buildCommand: npm run build
outputDirectory: dist
framework: vite
```

Vercel serves the SPA from `dist/`, runs `api/` as serverless functions and
uses `vercel.json` to rewrite app paths to `index.html`. Configure server-only
secrets in Vercel project settings, not in committed files.

## Known Gaps

- There are no versioned SQL migration files; `api/_lib/db.ts` bootstraps schema at runtime.
- `wp-backend/` is a placeholder only.
- Payment providers and SMTP need real production credentials before checkout can be tested end to end.
- Vitest includes both root `tests/` files and future colocated tests under `src/`.
