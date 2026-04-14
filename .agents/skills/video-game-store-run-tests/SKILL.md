---
name: video-game-store-run-tests
description: Test runner workflow for the Video Game Store project. Use as the Codex equivalent of /run-tests.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Run Tests

Use this skill for the Codex equivalent of `/run-tests`.

## Workflow

1. Prefer the repo's configured test scripts.
2. If no test script exists, say so clearly.
3. Summarize pass, fail, and skipped counts.
4. Include failing test names and the most useful error details.
5. If tests fail, suggest likely causes and ask whether to fix them.

## Common Next.js pitfalls

- missing mocks for `next/navigation`
- browser APIs used without test mocks
- server-only modules imported into the wrong environment
