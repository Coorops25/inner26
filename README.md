# Inner Spirit Studio

Sitio web y flujo de comercio para Inner Spirit Studio, un estudio de yoga,
meditacion, danza y bienestar integral en La Candelaria, Bogota.

El proyecto combina una SPA React/Vite con endpoints serverless en Vercel para
checkout, ordenes, webhooks de pago, PDF de confirmacion y correo transaccional.

## Estado Del Proyecto

El historial reciente del repositorio muestra cuatro lineas principales de trabajo:

- `feat(payments): complete checkout fulfillment flow`: checkout con Mercado Pago y Wompi, persistencia de ordenes, webhooks, PDF y email.
- `feat(ui): expand sanctuary design system`: tokens visuales, primitivas UI y mejoras de experiencia.
- `fix(seo): titulos y meta descripciones por pagina, JSON-LD, 404, cache headers`: SEO por ruta y configuracion de Vercel.
- `refactor: reorganize project structure into src/ with best practices`: separacion de componentes, modulos, contextos y utilidades.

## Funcionalidades

- SPA con rutas internas para inicio, nosotros, clases, eventos, consultorio, tienda, blog y contacto.
- Navegacion sin recarga usando `NavigationContext` y `history.pushState`.
- SEO dinamico por pagina desde `App.tsx`.
- Carrito compartido para productos, clases y eventos.
- Reserva de clases/eventos con slots disponibles y origen de conversion.
- Checkout serverless con Mercado Pago o Wompi.
- Persistencia de ordenes en PostgreSQL.
- Webhooks firmados para confirmar pagos.
- PDF de comprobante/entrada y email transaccional opcional.
- Feed de Instagram por evento con fallback local.
- Sistema visual documentado en `design-system/MASTER.md`.

## Stack

| Capa | Tecnologia | Version |
| --- | --- | --- |
| Frontend | React | 18.3.1 |
| Build | Vite | ^6.2.0 |
| Lenguaje | TypeScript | ~5.8.2 |
| Estilos | Tailwind CSS Vite plugin | ^4.2.2 |
| 3D/WebGL | Three.js, React Three Fiber, Drei, OGL | ver `package.json` |
| API | Vercel Serverless Functions | carpeta `api/` |
| Base de datos | PostgreSQL via `pg` | ^8.20.0 |
| Email | Nodemailer | ^8.0.7 |
| Tests | Vitest + Testing Library | ver `package.json` |

## Documentacion

- [Arquitectura](docs/ARCHITECTURE.md)
- [API endpoints](docs/API_ENDPOINTS.md)
- [Esquema de base de datos](docs/DATABASE_SCHEMA.md)
- [Flujo Git y contribucion](docs/GIT_WORKFLOW.md)
- [Sistema de diseno](design-system/MASTER.md)
- [Ecosistema de eventos e Instagram](docs/ECOSISTEMA_SOLIDO.md)
- [Placeholder WordPress](wp-backend/README.md)

## Estructura

```text
inner/
|-- api/                    # Endpoints serverless y librerias de comercio
|   |-- _lib/               # DB, pagos, ordenes, PDF, email, catalogo
|   |-- orders/             # status, confirmacion HTML y PDF
|   `-- webhooks/           # Mercado Pago y Wompi
|-- docs/                   # Documentacion tecnica del proyecto
|-- design-system/          # Guia del sistema visual
|-- public/                 # Assets publicos
|-- src/
|   |-- components/         # Layout, modales, secciones, UI y efectos
|   |-- context/            # Cart, Toast y Navigation
|   |-- modules/            # Blog, eventos y tienda
|   |-- pages/              # Paginas principales de la SPA
|   |-- hooks/              # Hooks compartidos
|   |-- types/              # Tipos globales
|   `-- utils/              # Utilidades compartidas
|-- tests/                  # Tests existentes
|-- wp-backend/             # Placeholder para CMS headless futuro
|-- App.tsx                 # Componente raiz de la app
|-- index.tsx               # Entry point React
|-- index.css               # CSS global y tokens visuales
|-- vite.config.ts          # Configuracion Vite
`-- vercel.json             # Build, headers y rewrites para Vercel
```

## Requisitos

- Node.js 18 o superior.
- npm.
- PostgreSQL accesible si se quiere probar checkout persistente.
- Credenciales de Mercado Pago o Wompi para pagos reales.
- SMTP opcional para envio de confirmaciones.

## Instalacion

```bash
npm install
cp .env.example .env.local
npm run dev
```

El servidor Vite usa `http://localhost:3000`.

## Variables De Entorno

El frontend usa variables `VITE_*`. Los endpoints de pago usan variables
server-only en Vercel o en el entorno local.

Variables principales:

| Variable | Uso |
| --- | --- |
| `VITE_WHATSAPP_NUMBER` | Numero publico para reservas o contacto |
| `VITE_IG_FEED_ENDPOINT` | Endpoint opcional para feed de Instagram por evento |
| `PUBLIC_SITE_URL` | URL base usada para callbacks de pago |
| `ORDER_TOKEN_SECRET` | Firma HMAC de tokens de orden |
| `DATABASE_URL` | Conexion PostgreSQL |
| `MERCADOPAGO_ACCESS_TOKEN` | Crear preferencias y consultar pagos |
| `MERCADOPAGO_WEBHOOK_SECRET` | Validar webhooks de Mercado Pago |
| `WOMPI_PUBLIC_KEY` | Crear URL de checkout Wompi |
| `WOMPI_INTEGRITY_KEY` | Firmar integridad de checkout Wompi |
| `WOMPI_EVENTS_SECRET` | Validar eventos Wompi |
| `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` | Envio de email con PDF |

Ver [.env.example](.env.example) para la lista completa.

## Scripts

| Comando | Descripcion |
| --- | --- |
| `npm run dev` | Servidor de desarrollo Vite |
| `npm run build` | Build de produccion |
| `npm run preview` | Vista previa de `dist/` |
| `npm run lint` | Type-check con `tsc --noEmit` |
| `npm test` | Vitest en modo watch |
| `npm run test:run` | Vitest una sola vez |
| `npm run test:coverage` | Cobertura con Vitest |

Tambien existe `Makefile` con atajos como `make dev`, `make build`,
`make lint` y `make test:run`.

## Flujo De Comercio

1. El usuario agrega productos, clases o eventos al carrito.
2. `CheckoutModal` envia `POST /api/checkout` con cliente, proveedor, items e idempotency key.
3. La API valida items contra el catalogo permitido y crea la orden en PostgreSQL.
4. Se crea una preferencia de Mercado Pago o una URL firmada de Wompi.
5. La pasarela redirige a `/api/orders/confirm?token=...`.
6. El webhook firmado marca la orden como `paid` o `failed`.
7. Si el pago queda `paid`, se genera PDF y se intenta enviar email.

Detalles completos en [API endpoints](docs/API_ENDPOINTS.md) y
[base de datos](docs/DATABASE_SCHEMA.md).

## Deploy

El despliegue esperado es Vercel:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- `framework`: `vite`
- `api/`: funciones serverless
- `vercel.json`: headers de seguridad, cache para assets y rewrite SPA hacia `index.html`

Antes de publicar, configura las variables server-only en Vercel. No subas `.env`
ni `.env.local`.

## Git

El repo sigue commits tipo Conventional Commits en el historial reciente:

```text
feat(payments): complete checkout fulfillment flow
fix(seo): ...
refactor: ...
chore: ...
ci: ...
```

Antes de abrir un PR o hacer push:

```bash
npm run lint
npm run build
npm run test:run
```

Ver [docs/GIT_WORKFLOW.md](docs/GIT_WORKFLOW.md) y [CONTRIBUTING.md](CONTRIBUTING.md).

## Notas

- `wp-backend/` es un placeholder para una posible integracion headless futura; hoy no es un backend activo.
- El esquema SQL se crea desde `api/_lib/db.ts`; todavia no hay migraciones versionadas separadas.
- `docs/ECOSISTEMA_SOLIDO.md` conserva el estado del modulo de eventos e Instagram.

## Contacto Del Estudio

- Direccion: Transversal 1 # 17-29, La Candelaria, Bogota
- WhatsApp: +57 321 224 8261
- Email: hola@innerspirit.co
- Instagram: @innerspirit_studio
