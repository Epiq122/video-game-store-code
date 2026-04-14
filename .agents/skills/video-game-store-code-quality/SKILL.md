---
name: video-game-store-code-quality
description: Umbrella code-quality workflow for the Video Game Store project. Use when the user wants a broader audit or wants the Codex equivalent of the OpenCode project code-quality skill.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Code Quality

This is the Codex equivalent of the OpenCode project code-quality skill.

Use it when the user wants one of these workflows or a broader code-quality sweep:

- `video-game-store-code-scanner`
- `video-game-store-auth-auditor`
- `video-game-store-refactor-scanner`
- `video-game-store-cleanup`
- `video-game-store-ui-reviewer`

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
