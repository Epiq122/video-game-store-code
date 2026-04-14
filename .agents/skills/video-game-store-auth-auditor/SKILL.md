---
name: video-game-store-auth-auditor
description: Authentication and authorization audit workflow for the Video Game Store project. Use when the user wants the Codex equivalent of /auth-auditor.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Auth Auditor

Use this skill for the Codex equivalent of `/auth-auditor`.

This project currently has no auth, database, or payments. If those systems are absent, do not invent findings. Instead, confirm the current boundary is clean.

## Audit targets

- route handlers
- server actions
- middleware
- auth helpers
- client files that might leak secrets or server-only imports

## Verify

- session lookup happens server-side
- ownership checks scope by both resource and user identity
- client code does not import auth secrets, database code, or server-only helpers
- inputs are validated before privileged work
- sensitive tokens or records are not exposed

## Output

Write the report to `docs/audit-results/auth-security-review.md` with:

- executive summary
- findings by severity
- passed checks
- recommendations summary

Only include real, code-backed issues.
