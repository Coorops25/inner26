# WordPress Backend Placeholder

This directory is a placeholder for a possible future WordPress integration. It
is not an active backend in the current project.

## Current State

The production code that exists today is:

- React/Vite frontend in `src/`.
- Vercel serverless commerce API in `api/`.
- PostgreSQL persistence through `api/_lib/db.ts`.

No WordPress runtime, theme, plugin, Docker setup or CMS schema is currently
implemented in this directory.

## Intended Future Purpose

If the project moves toward a headless CMS, WordPress could own:

- Blog posts and editorial content.
- Page copy and media.
- Product catalog content.
- Class/event content.
- User-facing CMS workflows for non-developers.

The React app would consume WordPress through the REST API or GraphQL
(for example WPGraphQL), while keeping the current frontend experience.

## Commerce Note

Checkout, payment webhooks, order persistence, PDF generation and email delivery
already live in `api/`. If WordPress/WooCommerce is introduced later, decide
whether commerce remains in the Vercel API or moves fully into WooCommerce
before wiring both systems together.
