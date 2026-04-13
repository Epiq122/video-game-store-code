---
name: arcana-start-dev
description: Development server workflow for Arcana Vault. Use as the Codex equivalent of /start-dev.
metadata:
  author: local
  version: "1.0.0"
---

# Arcana Start Dev

Use this skill for the Codex equivalent of `/start-dev`.

1. Run `pnpm dev`.
2. Confirm the app URL, normally `http://localhost:3000`.
3. If startup fails, check:
   - port conflicts
   - missing env vars
   - generated client issues if Prisma exists
   - cache issues if the error suggests build corruption
4. Surface the useful error output instead of paraphrasing vaguely.
