# Git Workflow

## Branches

Current active branch:

```text
main
```

Recent history also includes:

```text
events-ig-booking
```

Recommended flow:

1. Branch from `main`.
2. Keep the branch scoped to one feature, fix or doc pass.
3. Run checks locally before pushing.
4. Open a PR into `main`.

Example:

```bash
git checkout main
git pull
git checkout -b docs/project-readme
```

## Commit Style

The repository history uses Conventional Commits. Keep using the same pattern:

```text
feat(payments): complete checkout fulfillment flow
feat(ui): expand sanctuary design system
fix(seo): titulos y meta descripciones por pagina
refactor: reorganize project structure into src
chore: add vercel config
ci: trigger Vercel production deploy
```

Recommended types:

| Type | Use for |
| --- | --- |
| `feat` | New behavior or visible capability |
| `fix` | Bug fixes and regressions |
| `refactor` | Code movement or simplification without behavior change |
| `docs` | README, docs and comments |
| `test` | Test changes |
| `chore` | Tooling, dependencies or repo maintenance |
| `ci` | CI/CD and deployment automation |

## Before Commit

Run:

```bash
npm run lint
npm run build
npm run test:run
```

The Husky pre-commit hook currently runs:

```bash
npx tsc --noEmit
npm run lint
```

That means TypeScript issues will block commits before Git records them.

## Pull Request Checklist

- Scope is clear and limited.
- README/docs updated when behavior, setup, env vars, API or schema changes.
- `.env`, `.env.local`, logs and `dist/` are not committed.
- Payment changes document any required provider dashboard or webhook setting.
- API changes update `docs/API_ENDPOINTS.md`.
- DB changes update `docs/DATABASE_SCHEMA.md`.
- UI system changes update `design-system/MASTER.md`.

## Suggested PR Description

```markdown
## Summary
- What changed
- Why it changed

## Verification
- npm run lint
- npm run build
- npm run test:run

## Notes
- Env vars, migrations, provider setup or follow-up work
```

## Release Notes

For production-impacting changes, mention:

- User-visible behavior.
- Payment or checkout impact.
- Required environment variables.
- Any manual Vercel, Mercado Pago, Wompi, SMTP or database step.
