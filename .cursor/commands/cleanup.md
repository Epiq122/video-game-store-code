Review the codebase for cleanup tasks.

1. Make sure the history in `specs/context/current-feature.md` is ordered from oldest to newest
2. Find unnecessary `console.log` statements in `app/`, `components/`, `lib/`, `hooks/`, `tests/`, and `app/api/`
3. Find unused imports in `.ts`, `.tsx`, and `.mdx` files
4. Check for stale TODO comments
5. Find orphaned or unused files
6. Check that `specs/` context files still match actual project state
7. Compare `.env.local` against `.env.example` and `.env.production` if present
   - flag missing variable names, never compare secret values
8. Find stale `@ts-ignore` and `@ts-expect-error` comments
9. Check naming conventions
   - all custom files and folders should use kebab-case
   - do not flag Next.js reserved filenames or route segments:
     `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, `[id]`, `[...slug]`, `[[...slug]]`
10. Check for server-only imports inside Client Components
   - flag database imports in files marked `"use client"`
   - flag `fs`, Prisma, server auth helpers, or secrets imported into client code

**Mode: $ARGUMENTS**

If no argument or argument is `check`:
- only report findings
- do not modify anything
- list what should be cleaned up with specific file paths

If the argument is `fix`:
- first report all findings as a numbered list with specific file paths
- then ask: `Which items would you like me to fix? (enter numbers like 1,3,5 or "all" or "none")`
- wait for the response before making changes
- only fix the requested items
- report exactly what changed
