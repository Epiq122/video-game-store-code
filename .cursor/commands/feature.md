## Context

Read the current feature from:
@specs/context/current-feature.md

## Naming Rules — Enforce These Always

- All custom files and folders use kebab-case
- Do not flag Next.js reserved filenames or route segments:
  `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, `[id]`, `[...slug]`, `[[...slug]]`
- Utilities: `format-date.ts` not `formatDate.ts`
- Hooks: `use-project-search.ts` not `useProjectSearch.ts`
- Components: files should still be kebab-case even if component names are PascalCase inside

## Next.js 16 File Structure

```text
app/
  page.tsx
  layout.tsx
  loading.tsx
  error.tsx
  not-found.tsx
  api/**/route.ts         ← Route Handlers
  _actions/               ← Server Actions (project convention)
components/               ← shared UI
lib/                      ← shared utilities, server helpers, schemas
hooks/                    ← client hooks when needed
prisma/                   ← optional Prisma schema/migrations
specs/
  context/
    current-feature.md
    features/
    fixes/
```

## current-feature.md Structure

- `# Current Feature` — H1 heading with active feature name when loaded
- `## Status` — Not Started | In Progress | Complete
- `## Goals` — Bullet points of what success looks like
- `## Notes` — Constraints, context, or implementation warnings
- `## History` — Completed features, append only

## Task

Execute the requested action: $ARGUMENTS

---

### If action is `load`

1. Check `$ARGUMENTS`
   - if it looks like a spec name: read `specs/context/features/{name}.md` or `specs/context/fixes/{name}.md`
   - if it is multiple words: treat it as an inline feature description and generate goals
   - if empty: error with `load requires a spec filename or feature description`
2. Update `current-feature.md`
   - set the heading to include the feature name
   - write clear goals
   - write notes or constraints
   - set status to `Not Started`
3. Confirm the spec was loaded and show the feature summary
4. Always run this after loading — ask these questions before the user opens the Agents Window:

   Before we build this, think through these five questions.
   You do not need to answer them out loud — but you must know the answers
   before running /feature start.

   1. What does this feature do in one sentence?
   2. Which files will be new and which already exist?
   3. For each new component — Server Component or Client Component, and why?
   4. Where does the data come from? (JSON, database, external API)
   5. How will you know it is working? What is the exact done condition?

   If any of these are unclear, re-read the spec before proceeding.

---

### If action is `start`

1. Read `current-feature.md` and verify goals exist
2. If goals are empty, error with `Run feature load first`
3. Set status to `In Progress`
4. If the repo uses feature branches, create and checkout a kebab-case branch

5. Always write this plan before any code is written:

   Before writing any code, here is what I am about to build:

   Files I will CREATE:
   - [each new file with one sentence on what it does]

   Files I will MODIFY:
   - [each existing file with what changes and why]

   Architecture decisions:
   - [for each component: Server Component or Client Component and the reason]
   - [where data comes from]
   - [Server Action or Route Handler choice and why]

   Potential issues to watch for:
   - [anything that could go wrong based on the spec]

   Waiting for approval before writing any code.

   Do not write any code until this plan is acknowledged.

6. Implement goals one by one

   Architecture rules:
   - Default to Server Components
   - Add "use client" only for useState, useEffect, event handlers, or browser APIs
   - Never use useEffect for data fetching — fetch in Server Components directly
   - Prefer Server Actions for app-owned form mutations
   - Prefer Route Handlers for public APIs, webhooks, or third-party integrations
   - Keep server-only code out of Client Components
   - Shared UI belongs in components/
   - Shared logic belongs in lib/ or hooks/
   - If Prisma exists, use it only in server code

   After writing EACH file, immediately explain it in this format:

   File: [filename]
   Type: [Server Component / Client Component / Server Action / Route Handler / Hook / Utility / Schema]
   What it does: [1-2 sentences in plain English, no jargon]
   Key pattern: [the main Next.js or React pattern this file demonstrates]
   Why Server or Client: [the specific reason for this choice]
   TypeScript note: [any interesting type, interface, generic, or pattern worth noting]

   This explanation runs automatically after every single file. No exceptions.

   Testing rules:
   - Write tests for route handlers, server actions, and meaningful utilities
   - Do not write tests for purely presentational components unless the project does so already

7. After ALL files are written, always run this summary:

   Build complete.

   Files created or modified: [count and list]

   Data flow:
   [Plain English. Where does data start? What transforms it? How does it reach the screen?]

   Server/Client boundary:
   [What runs on the server? What runs in the browser? Why was this boundary chosen?]

   The pattern this feature teaches:
   [Name the core pattern and describe when you would use it again]

   What would break if:
   - You added "use client" to [the main Server Component]?
   - You removed the auth check from [the action or handler]?
   - You fetched data with useEffect instead of in a Server Component?

   Checklist before moving on:
   - pnpm lint passes
   - pnpm typecheck passes
   - pnpm test --run passes if tests exist
   - Tested manually in the browser
   - Checked at 375px mobile width

---

### If action is `test`

1. Read `current-feature.md`
2. Identify route handlers, server actions, server utilities, and client hooks changed
3. Check whether relevant tests already exist
4. For testable logic without coverage, write targeted tests
   - prefer Vitest for unit and integration logic
   - use Playwright only if the repo already has E2E coverage and the feature warrants it
   - mock Prisma with vitest-mock-extended — never hit a real database in tests
   - mock requireAuth to return a test session object
   - test: happy path, unauthenticated access, invalid input, ownership violation
5. Run the project test command
6. After tests run, explain the coverage:

   Test coverage for this feature:
   What is tested: [list with one sentence on why each test matters]
   What is not tested: [list with reason — intentional gap or future work]
   The most important test: [name one and explain what real mistake it catches]

---

### If action is `review`

1. Read `current-feature.md`
2. Review code changes against the goals
3. Check for:
   - goals met or missing
   - "use client" on a component that has no useState, useEffect, events, or browser APIs
   - useEffect used for data fetching — this is Critical, it belongs in a Server Component
   - params not awaited in dynamic routes — Next.js 16 requires await params
   - wrong Server Action vs Route Handler choice
   - server-only imports leaking into client code
   - auth or ownership gaps
   - scope creep
   - accessibility and metadata gaps
   - adequate tests for meaningful logic
   - missing loading.tsx or error.tsx next to async pages
4. Final verdict: ready to complete or needs changes
5. If ready, end with:

   Ready to complete.
   Before running /feature complete, confirm:
   - You can explain what every new file does without looking
   - You understand why each component is Server or Client
   - You understand the data flow end to end
   - pnpm lint and pnpm typecheck are clean

---

### If action is `explain`

1. Read `current-feature.md`
2. Get the diff: run `git diff --name-only main...HEAD` if available
3. For each created or modified file, explain it in this format:

   File: [path]
   Type: [Server Component / Client Component / Server Action / Route Handler / Hook / Utility / Schema / Test]
   What it does: [plain English, 2-3 sentences]
   Key pattern: [the core Next.js or React pattern this demonstrates]
   Why this type: [specific reason — why Server not Client, or why a Route Handler not a Server Action]
   TypeScript callout: [any interface, type, generic, or narrowing worth understanding]
   What would break without it: [one specific consequence if this file were missing or wrong]

4. End with:

   How it all connects:
   [A narrative of what happens when the user does X — not a list of files,
    but a plain English description of the full data flow]

   The one thing to remember from this feature:
   [The single most important pattern or decision — the thing that appears again in future projects]

---

### If action is `complete`

1. Run tests, lint, and typecheck
   If any fail: stop and report — do not commit broken code
2. Run a final review against goals
3. Always run this comprehension check before committing:

   Before we commit, answer these without looking at the code.
   Type the number of any question you want to go through first.

   1. What does this feature do in one sentence?
   2. Name every file created or modified. What does each one do?
   3. For each component: why is it Server or Client?
   4. Where does data come from and how does it reach the UI?
   5. What would break if someone added "use client" to the main page?
   6. What security check is in place — auth, ownership, or input validation?

   When you can answer all six: type ready and we will commit.

   Wait for the response before proceeding to the commit.

4. Stage implementation files only
5. Commit with a conventional commit message:
   feat: [what was built]
   fix: [what was fixed]
   refactor: [what was restructured]
6. Push the current branch if using a branch workflow
7. Ask before merging or deleting branches
8. Reset current-feature.md:
   - heading back to # Current Feature
   - clear goals and notes
   - set status to Not Started
9. Append to History:
   - [feature name]: [one sentence — what was built and the key pattern learned]
10. Commit the updated current-feature.md

---

If no action is provided, explain the available options:
load, start, test, review, explain, complete
