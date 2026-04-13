Run the linter and formatter.

1. Prefer the repo's lint script:
   - run `pnpm lint` if it exists
   - if not, report that no lint script is configured
2. If Prettier is configured, run a formatting check across the main source folders:
   - `app/**/*.{ts,tsx,mdx}`
   - `components/**/*.{ts,tsx}`
   - `lib/**/*.ts`
   - `hooks/**/*.ts`
   - `tests/**/*.{ts,tsx}`
3. Summarize:
   - lint errors and warnings
   - formatting issues
   - affected files and rules
4. If fixable issues exist, ask:
   - `Would you like me to auto-fix these?`
5. If yes:
   - run `pnpm lint --fix` when supported
   - run Prettier write mode if configured
   - report what was fixed and what still needs manual work
6. If type errors may exist, ask before running typecheck because it can take longer
   - prefer `pnpm typecheck` if configured
   - otherwise use `pnpm exec tsc --noEmit`

## Notes

- Do not assume `next lint` exists; prefer the package scripts actually configured in the repo
- Respect the project's existing formatter and linter setup
