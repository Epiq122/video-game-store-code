---
name: arcana-refactor-scanner
description: Scan Arcana Vault for duplicated logic and extraction opportunities. Use as the Codex equivalent of /refactor-scanner.
metadata:
  author: local
  version: "1.0.0"
---

# Arcana Refactor Scanner

Use this skill for the Codex equivalent of `/refactor-scanner`.

## Scope

- scan the user-specified folder
- default to `app/`, `components/`, and `lib/`

## Principles

- only flag duplication that is clearly repeated
- verify with exact file paths
- do not force abstraction when responsibilities differ
- include the proposed extraction target and how call sites would change

## Focus by area

- `components/`: repeated UI sections, class logic, empty/loading/error states
- `hooks/`: repeated search/filter state or URL sync
- `lib/`: repeated mappers, constants, formatters, schemas
- `app/`: repeated page sections or server data loading patterns

## Output

Group by:

- High Impact
- Moderate Impact
- Optional

Include any naming violations separately.
