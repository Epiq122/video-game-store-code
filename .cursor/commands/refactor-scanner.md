---
name: refactor-scanner
description: Scans a folder for duplicate code and extraction opportunities in a Next.js 16 codebase.
---

# Refactor Scanner

Scan a specific folder for duplicated logic, repeated patterns, and extraction opportunities.

## Naming Convention

If you find custom PascalCase or inconsistent filenames while scanning, note them separately.
Do not flag Next.js reserved filenames or route segments.

## Input

Folder to scan — examples:
- `app`
- `components`
- `app/api`
- `app/_actions`
- `lib`
- `hooks`

If no folder is specified, default to scanning `app/`, `components/`, and `lib/`.

## Core Principles

1. Do not over-abstract. Only flag patterns that are clearly repeated.
2. Verify duplication with exact file paths.
3. Respect context. Similar code may still have different responsibilities.
4. Every finding should include a suggested extraction and how call sites would change.

## Folder-Specific Scanning

### `app/api/`

- repeated auth checks
- repeated ownership checks
- repeated validation schemas
- repeated response shaping or error handling
- repeated Prisma `select/include/where` patterns

Extract to:
- `lib/validators`
- `lib/auth`
- shared server utilities

### `app/_actions/` or feature `actions.ts`

- repeated form parsing and validation
- repeated result-state shapes
- repeated optimistic mutation patterns

Extract to:
- shared action helpers
- shared schemas
- shared result formatters

### `components/`

- repeated UI sections
- repeated form field wrappers
- duplicated class logic
- repeated loading/empty/error states

Extract to:
- shared components
- slots
- shared primitives

### `hooks/`

- duplicated search/filter/pagination state
- repeated client-side URL sync logic
- repeated fetch state wrappers

Extract to:
- shared hooks
- small utilities in `lib/`

### `lib/`

- duplicated formatting
- duplicated schemas or mappers
- repeated constants or enum-like values

Extract to:
- focused utility modules
- shared types
- central constants

## Output Format

Group findings by impact.

### 🔵 High Impact
Duplication in 3+ places or logic worth extracting now.

### 🟢 Moderate Impact
Duplication in 2 places or moderate maintainability wins.

### ⚪ Optional
Minor patterns with tradeoffs.

For each finding:
- File(s) and lines
- Duplicated code
- Suggested extraction
- Call-site refactor
- Optional tradeoff note

### 📁 Naming Violations
List any custom naming issues found while scanning.

End with:
`Summary: Scanned [folder]; X high, X moderate, X optional.`
