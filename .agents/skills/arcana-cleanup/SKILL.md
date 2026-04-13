---
name: arcana-cleanup
description: Cleanup workflow for Arcana Vault. Use as the Codex equivalent of /cleanup for reporting or selectively fixing stale code and repo drift.
metadata:
  author: local
  version: "1.0.0"
---

# Arcana Cleanup

Use this skill for the Codex equivalent of `/cleanup`.

## Check for

1. ordered history in `specs/context/current-feature.md`
2. stale `console.log`
3. unused imports
4. stale TODO comments
5. orphaned files
6. spec drift between `specs/` and actual code
7. env example drift by variable name only
8. stale `@ts-ignore` and `@ts-expect-error`
9. kebab-case naming violations for custom files and folders
10. server-only imports inside client files

## Modes

- `check`: report findings only
- `fix`: report all findings as a numbered list, ask which items to fix, then modify only the approved items

Never make cleanup edits before confirming the selected items in `fix` mode.
