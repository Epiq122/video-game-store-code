Check database and migration status.

1. If `prisma/schema.prisma` does not exist, report:
   - `No Prisma schema detected. This command is not applicable unless the project uses Prisma.`
2. If Prisma exists, run `pnpm exec prisma migrate status`
3. Summarize clearly:
   - all migrations applied -> `Database is up to date`
   - pending migrations -> `Run pnpm exec prisma migrate dev to apply pending migrations`
   - generated client stale or missing -> `Run pnpm exec prisma generate`
4. If the user wants to confirm the client is current, run `pnpm exec prisma generate`
5. Flag local migration files that exist but have not been applied

## Important Rules

- Never run `prisma db push`
- For schema changes, prefer `prisma migrate dev --name <description>`
- If the project uses a different ORM, say so instead of guessing Prisma commands
