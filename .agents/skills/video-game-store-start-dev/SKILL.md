---
name: video-game-store-start-dev
description: Development server workflow for the Video Game Store project. Use as the Codex equivalent of /start-dev.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Start Dev

Use this skill for the Codex equivalent of `/start-dev`.

1. Run `pnpm dev`.
2. Confirm the app URL, normally `http://localhost:3000`.
3. If startup fails, check:
   - port conflicts
   - missing env vars
   - generated client issues if Prisma exists
   - cache issues if the error suggests build corruption
4. Surface the useful error output instead of paraphrasing vaguely.
