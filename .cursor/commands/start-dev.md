Start the local development server.

1. Run `pnpm dev`
2. Confirm the app starts at `http://localhost:3000`
3. If the server fails to start:
   - check for a port conflict on 3000
   - check for missing environment variables
   - if Prisma exists, run `pnpm exec prisma generate` and retry if the error points to the client
   - if build cache issues are suspected, clear `.next/` and retry
   - show the relevant error output
4. If the server starts:
   - confirm the local URL
   - remind that UI review requires the dev server running
   - remind that closing the terminal stops the server
