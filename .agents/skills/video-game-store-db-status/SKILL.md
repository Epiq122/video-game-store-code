---
name: video-game-store-db-status
description: Database status workflow for the Video Game Store project. Use as the Codex equivalent of /db-status when Prisma is present.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store DB Status

Use this skill for the Codex equivalent of `/db-status`.

## Workflow

1. Check whether `prisma/schema.prisma` exists.
2. If it does not, report that Prisma is not in use and this command is not applicable.
3. If it does, run `pnpm exec prisma migrate status`.
4. Summarize whether migrations are current, pending, or whether the client likely needs regeneration.

## Rule

Never run `prisma db push`.
