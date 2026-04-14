# Current Feature: App Header

## Status
Not Started

## Goals
- Create a reusable `AppHeader` Server Component at `components/app-header.tsx`.
- Render brand and auth-aware navigation states for logged-out users, customers, and admins.
- Use server-side session lookup via `getSession()` from `lib/require-auth.ts` to drive link visibility.
- Implement sign-out as a form-based Server Action submission (mutation pattern, not a link).
- Match design-spec header behavior: lightweight shell styling, visible active nav state, and keyboard-focusable controls.

## Notes
- Source spec: `specs/context/features/app-header-spec.md`.
- Render in the shared storefront shell unless a route-specific layout intentionally replaces it.
- Typography should follow project tokens (`Manrope` display, `Inter` nav/body), not Space Grotesk.
- Keep header scope intentionally small for this version: no mobile hamburger, no search, no cart.
- Accessibility expectations are explicit: visible active nav treatment, readable contrast, and keyboard focus-visible states.

## History
- Loaded from `specs/context/features/app-header-spec.md` on 2026-04-13.
