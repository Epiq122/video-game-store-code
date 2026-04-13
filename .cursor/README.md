# Cursor Commands
### Quick reference for the project rules and commands

These commands live in `.cursor/commands/` and are invoked by typing `/command-name` followed by any arguments.

---

## Daily Commands

| Command | What it does |
|---------|-------------|
| `/feature-summary` | Shows the current feature status and suggests the next step |
| `/feature load [spec]` | Loads a feature spec or inline feature description |
| `/feature start` | Begins implementing the loaded feature using the Next.js 16 workflow |
| `/feature test` | Writes and runs tests for meaningful feature logic |
| `/feature review` | Reviews the feature against the spec before completion |
| `/feature explain` | Explains the changed files and the patterns they demonstrate |
| `/feature complete` | Finalizes the feature, updates history, and prepares it for merge |

---

## Code Quality Commands

| Command | What it does |
|---------|-------------|
| `/code-scanner` | Scans the codebase for real issues in architecture, quality, and security |
| `/code-scanner app/api` | Scans a specific folder only |
| `/auth-auditor` | Audits authentication and authorization flows in Next.js code |
| `/refactor-scanner components` | Finds duplication and extraction opportunities |
| `/cleanup` | Reports cleanup tasks such as logs, dead imports, stale TODOs, and spec drift |
| `/cleanup fix` | Reports findings, then asks which cleanup items to fix |
| `/lint` | Runs linting and formatting checks, with optional auto-fix |
| `/run-tests` | Runs the configured test suites and summarizes results |
| `/ui-reviewer` | Reviews pages visually across breakpoints and checks source for confirmed UI issues |

---

## Utility Commands

| Command | What it does |
|---------|-------------|
| `/start-dev` | Starts the Next.js dev server |
| `/db-status` | Checks Prisma migration status if Prisma is present |
| `/research [name]` | Runs a research task from `specs/context/research/[name].md` |

---

## The Feature Workflow

```text
1. /feature load [spec-name]
2. /feature start
3. /feature test
4. /feature review
5. /feature complete
```

---

## Stack Reference

- Framework: Next.js 16 App Router
- UI: React 19, Server Components by default, Client Components only when needed
- Styling: Tailwind CSS v4
- Validation: Zod
- Data: Prisma if the project uses a database
- Testing: Vitest and optionally Playwright
- Package manager: pnpm

## Critical Rules

- Keep custom file and folder names in kebab-case
- Do not flag Next.js reserved filenames
- Default to Server Components
- Use `"use client"` only for real interactivity
- Keep server-only code out of Client Components
- Use Server Actions for app-owned form mutations
- Use Route Handlers for public APIs, webhooks, and external integrations
- Never run `prisma db push`
