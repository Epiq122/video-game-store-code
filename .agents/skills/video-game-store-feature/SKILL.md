---
name: video-game-store-feature
description: Full feature workflow for the Video Game Store project. Use for loading a feature spec, planning implementation, building, testing, reviewing, explaining, and completing work under the project's Next.js 16 rules.
metadata:
  author: local
  version: "1.0.0"
---

# Video Game Store Feature

Use this skill when the user wants the Codex equivalent of `/feature`.

## Required context

Read these first:

1. `AGENTS.md`
2. `specs/project-overview.md`
3. `specs/design/design-spec.md`
4. `specs/context/current-feature.md` when it exists

## Actions

Support the same actions as Cursor/OpenCode:

- `load`
- `start`
- `test`
- `review`
- `explain`
- `complete`

## Rules to enforce

- Default to Server Components
- Use `"use client"` only for real interactivity
- Never use `useEffect` for data fetching
- Never import `lib/cards.ts` into a client file
- In dynamic routes, always await `params`
- Use `next/image`, not `<img>`
- Use Tailwind v4 patterns from `app/globals.css`
- Keep custom file and folder names in kebab-case
- Use `pnpm`, never `npm` or `yarn`

## `load`

1. Read `specs/context/features/{name}.md` or `specs/context/fixes/{name}.md` when the user passes a spec name.
2. If the user gives an inline feature description, convert it into goals and notes.
3. Update `specs/context/current-feature.md` with:
   - feature title
   - `Status: Not Started`
   - goals
   - notes
4. Summarize the feature and surface the five planning questions from the existing Cursor workflow before implementation begins.

## `start`

1. Read `specs/context/current-feature.md`.
2. If there are no goals, stop and tell the user to load a feature first.
3. Set status to `In Progress`.
4. Before editing code, present:
   - files to create
   - files to modify
   - server/client split
   - data source
   - likely risks
5. Wait for approval before writing code when the request is explicitly a feature workflow rather than a direct coding request.
6. Implement the feature under the repo rules.
7. After substantial edits, explain:
   - file type
   - what it does
   - key pattern
   - why server or client

## `test`

1. Identify changed utilities, hooks, route handlers, or server actions.
2. Add focused tests where meaningful coverage is missing.
3. Prefer Vitest if present.
4. Run the repo test command if configured.
5. Summarize what is covered, what is not, and the most important test.

## `review`

Review against feature goals and flag:

- incorrect server/client boundaries
- `useEffect` data fetching
- un-awaited `params`
- scope creep
- accessibility gaps
- missing loading or error states
- plain `<img>` usage
- Tailwind v4 mistakes such as `bg-gradient-to-r`

## `explain`

Explain the changed files in plain English:

- what each file does
- the pattern it demonstrates
- why the file type fits
- what would break without it

## `complete`

1. Verify the goals are actually met.
2. Update `current-feature.md` to `Complete`.
3. Append a concise history entry.
4. Summarize the final data flow, server/client boundary, and verification status.
