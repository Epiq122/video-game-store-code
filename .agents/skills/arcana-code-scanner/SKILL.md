---
name: arcana-code-scanner
description: Code quality scanner for Arcana Vault. Use when the user wants the Codex equivalent of /code-scanner on the whole repo or a specific folder.
metadata:
  author: local
  version: "1.0.0"
---

# Arcana Code Scanner

Use this skill for the Codex equivalent of `/code-scanner`.

## Scope

- If the user specifies a folder, scan only that folder.
- Otherwise scan the repo, skipping `node_modules`, `.next`, `dist`, `coverage`, `.git`, and generated output.

## Rules

- Only report issues verified in code.
- Skip features that do not exist yet.
- Every finding needs a file path, line number when possible, and a concrete fix.
- Do not flag Next.js reserved filenames.

## Check for

### Critical

- server-only modules imported into client files
- secrets or private env usage in client code
- `useEffect` data fetching
- dynamic route `params` used without `await`
- route handlers or actions trusting client-supplied identity

### High

- unnecessary `"use client"`
- missing validation on meaningful server entry points
- large client-side trees that should stay server-rendered
- missing loading or error states around async UI

### Medium

- broad `any`
- stale `@ts-ignore` or `@ts-expect-error`
- duplicate logic that should move into `lib/` or shared components
- missing `"use cache"` on clearly static or rare-changing server data helpers

### Low

- stale logs
- smaller accessibility or polish issues

## Output

Start with one line on overall code health, then group findings by severity with file paths, impact, and fixes.
