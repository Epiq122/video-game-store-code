# AGENTS.md — PixelVault

## Project
PixelVault is a full-stack video game store.
Next.js 16 · React 19.2 · TypeScript · Prisma · Neon · better-auth
Tailwind v4 · shadcn/ui · Zod v4

## Stack rules
- App Router only. No Pages Router. No exceptions.
- Server Components by default. Add "use client" only when required.
- All database access via Prisma. No raw SQL.
- All mutations via Server Actions. No client-side fetch to API routes for mutations.
- Zod validation in every Server Action before any database call.
- In admin Server Actions, call `requireAdmin()` before any database access or side effect.
- All money stored as integers in cents. Never floats.
- Scope user-owned data by `session.user.id`.
- Use `proxy.ts` for route protection, not `middleware.ts`.

## File structure
- app/ — Next.js App Router pages and layouts
- app/_actions/ — Server Actions (all mutations live here)
- app/api/ — Route Handlers (streaming, webhooks)
- components/ — Shared UI components
- lib/ — Utilities (db.ts, auth.ts, utils.ts)
- prisma/ — Schema and migrations
- specs/ — Feature specifications (read these before building)

## Before writing code
1. Read the relevant spec in `specs/` when one exists.
2. Inspect the current implementation before proposing changes.
3. List the files that will likely be created or modified.
4. Explain the plan in plain language: what changes, why it is needed, and which pattern it follows.
5. Call out assumptions, risks, and tradeoffs.
6. Wait for approval before editing files, changing dependencies, or modifying schema.
7. While implementing, explain the reasoning so the work is educational.

## Never
- Never add NEXT_PUBLIC_ to any secret or API key
- Never skip requireAdmin() in an admin Server Action
- Never use middleware.ts — it is proxy.ts in Next.js 16
- Never filter data in JavaScript arrays — use Prisma WHERE clauses
- Never store money as floats — always integers in cents

## Collaboration style
- Assume the user is learning web development and system design.
- Explain both what is changing and why the pattern is correct.
- Tie explanations to the actual files, request flow, and data flow in this repo.
- For auth, database, and architecture work, explain the boundary between UX checks, application logic, and security enforcement.
- Give the rule first, then the concrete example in this codebase.

## Command aliases
- Interpret repo slash commands as aliases for the matching Codex skill workflow.
- Prefer the short alias in user-facing communication. Keep the existing skill names as the internal mapping.
- `/feature <action>` maps to `video-game-store-feature`.
- Valid feature actions: `load`, `start`, `test`, `review`, `explain`, `complete`.
- `/feature-summary` maps to `video-game-store-feature-summary`.
- `/ui-reviewer` maps to `video-game-store-ui-reviewer`.
- `/lint` maps to `video-game-store-lint`.
- `/run-tests` maps to `video-game-store-run-tests`.
- `/start-dev` maps to `video-game-store-start-dev`.
- `/db-status` maps to `video-game-store-db-status`.
- `/research` maps to `video-game-store-research`.
- `/auth-auditor` maps to `video-game-store-auth-auditor`.
- `/cleanup` maps to `video-game-store-cleanup`.
- `/code-scanner` maps to `video-game-store-code-scanner`.
- `/refactor-scanner` maps to `video-game-store-refactor-scanner`.

## Auth pattern

- Server-side auth is authoritative. `proxy.ts` is only a fast redirect and UX layer.
- Never rely on `proxy.ts` alone for authorization. Always enforce access again in Server Components, Server Actions, and sensitive Route Handlers.
- Use `requireAuth()` when a request must have an authenticated user.
- Use `requireAdmin()` when a request must be restricted to admins.
- Use `getSession()` only when logged-out access is allowed and the code needs optional session state.
- Call `requireAuth()` or `requireAdmin()` before any database access, mutation, or other sensitive side effect.
- Never trust `userId`, `role`, or any ownership signal from request body data, search params, or dynamic route params.
- Always derive identity from the verified session: `session.user.id` and `session.user.role`.
- Scope every user-owned read or write by `session.user.id` using Prisma `where` clauses that match the actual model shape.
- For direct ownership tables, include `userId: session.user.id` in the query predicate.
- For relation-based ownership, join or filter through the owning relation instead of filtering in application code.
- Never perform authorization by loading broad data and filtering in JavaScript after the query.
- If auth logic depends on custom user fields such as `role`, those fields must be declared in `lib/auth.ts` as Better Auth `user.additionalFields` so they are present in the session type and runtime payload.

Examples:
- Authenticated access: `const session = await requireAuth()`
- Admin-only access: `const session = await requireAdmin()`
- Direct ownership filter: `where: { userId: session.user.id }`
- Single-record ownership filter: `where: { id: favoriteId, userId: session.user.id }`
