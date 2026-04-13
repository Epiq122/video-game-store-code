---
name: arcana-code-quality
description: Umbrella code-quality workflow for Arcana Vault. Use when the user wants a broader audit or wants the Codex equivalent of the OpenCode arcana-code-quality skill.
metadata:
  author: local
  version: "1.0.0"
---

# Arcana Code Quality

This is the Codex equivalent of the OpenCode `arcana-code-quality` skill.

Use it when the user wants one of these workflows or a broader code-quality sweep:

- `arcana-code-scanner`
- `arcana-auth-auditor`
- `arcana-refactor-scanner`
- `arcana-cleanup`
- `arcana-ui-reviewer`

## Required context

Read before running a broad review:

1. `AGENTS.md`
2. `specs/project-overview.md`
3. `specs/design/design-spec.md`

## Core rules

- only report verified issues
- avoid false positives
- include file paths and concrete fixes
- do not invent auth, database, or payment findings that are out of scope for this repo
- respect Next.js 16, Tailwind v4, and the server/client boundaries defined in `AGENTS.md`
