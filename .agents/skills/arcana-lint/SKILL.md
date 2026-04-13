---
name: arcana-lint
description: Lint and formatting workflow for Arcana Vault. Use as the Codex equivalent of /lint.
metadata:
  author: local
  version: "1.0.0"
---

# Arcana Lint

Use this skill for the Codex equivalent of `/lint`.

## Workflow

1. Prefer the repo lint script.
2. Summarize lint errors, warnings, and formatting issues by file.
3. If auto-fixes are available, ask before applying them.
4. If type checking is relevant, ask before running `pnpm typecheck`.

## Repo notes

- Use `pnpm lint`
- Do not assume `next lint`
- Respect the existing ESLint and formatting setup
