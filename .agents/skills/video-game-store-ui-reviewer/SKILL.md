---
name: video-game-store-ui-reviewer
description: UI and responsive review workflow for the Video Game Store project using the project spec and source verification. Use as the Codex equivalent of /ui-reviewer.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store UI Reviewer

Use this skill for the Codex equivalent of `/ui-reviewer`.

## Required context

Read before reviewing:

1. `specs/project-overview.md`
2. `specs/design/design-spec.md`
3. `app/globals.css`

## Workflow

1. Identify public routes under `app/**/page.tsx`.
2. Ensure the dev server is running.
3. Review key pages at mobile, tablet, and desktop widths.
4. Confirm issues in source before reporting them.

## Check for

- overlap, overflow, broken spacing, unreadable text
- mobile horizontal scroll
- broken stacking
- weak CTA hierarchy
- missing empty states
- touch targets under 44px
- missing alt text or labels
- missing loading or not-found states
- misuse of client hooks or excessive `"use client"`

## Output

Start with an overall verdict, then report page-specific findings with route, viewport, file path, and a concrete fix.
