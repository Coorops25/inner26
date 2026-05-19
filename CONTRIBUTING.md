# Contributing

This repo uses a lightweight GitHub flow around `main`.

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Configure payment, database and SMTP variables only when you need to test the
serverless commerce flow.

## Before Opening A PR

```bash
npm run lint
npm run build
npm run test:run
```

## Commit Messages

Use Conventional Commits:

```text
feat(scope): short description
fix(scope): short description
docs(scope): short description
refactor(scope): short description
```

More details: [docs/GIT_WORKFLOW.md](docs/GIT_WORKFLOW.md).

## Documentation Rules

- Update `README.md` when setup, scripts, deploy or project scope changes.
- Update `docs/API_ENDPOINTS.md` when adding or changing an API route.
- Update `docs/DATABASE_SCHEMA.md` when changing tables, constraints or status values.
- Update `design-system/MASTER.md` when changing shared design tokens or UI primitives.
