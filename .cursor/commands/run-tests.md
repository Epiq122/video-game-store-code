Run the test suite and report results.

1. Prefer the repo's configured scripts:
   - run `pnpm test` if present
   - if Playwright is configured and E2E coverage matters, also run `pnpm exec playwright test`
2. If coverage is explicitly requested and supported, run the coverage variant of the unit test suite
3. Summarize:
   - passed / failed / skipped counts
   - failing test names and useful error output
   - skipped tests and why, if clear
4. If tests fail:
   - show the relevant error output
   - suggest likely causes
   - ask whether to fix them

## Common Failure Causes in Next.js 16 Projects

- Route Handlers or Server Actions not mocked correctly
- Prisma client not mocked in server-side tests
- environment variables missing in test setup
- Client Components using browser APIs in test environments without mocks
- `next/navigation` hooks not mocked in unit tests
- Playwright failing because the dev server is not running or the base URL is wrong
