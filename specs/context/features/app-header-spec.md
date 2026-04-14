# AppHeader Component Spec

## Design source
Reference:
- `specs/design/design-spec.md` (App header and navigation section)

If this spec conflicts with design references, follow the design system source.

## What it is
Primary storefront navigation header. It should be rendered in the shared storefront shell
(for example, root layout) unless a route-specific layout intentionally replaces it.
The header adapts visible actions based on authentication state and role.

## Component type
Server Component.

Why:
- Reads session server-side using `getSession()` from `lib/require-auth.ts`.
- Avoids shipping auth branching logic to the client.
- Uses a Server Action form for sign out because it is a mutation.

## Inputs
Props:
- None (session is read on the server).

## What it shows
Left side:
- `PixelVault` brand wordmark, high contrast
- Display styling should use project display font tokens (`Manrope`), not Space Grotesk
- Brand link target: `/`

Right side — when NOT logged in:
- `Sign In` action to `/auth/sign-in` (secondary/outline treatment)
- `Sign Up` action to `/auth/sign-up` (filled primary CTA treatment)

Right side — when logged in as `CUSTOMER`:
- `My Favorites` link to `/favorites` (heart icon optional)
- User name or email fallback (truncate if needed)
- `Sign Out` button

Right side — when logged in as `ADMIN`:
- `My Favorites` link to `/favorites`
- `Admin Panel` link to `/admin`
- User name or email fallback
- `Sign Out` button

## Layout and styling
- Full-width sticky header: `sticky top-0 z-50`
- Dark lightweight shell with subtle border and compact vertical density
- Background: `bg-[--color-surface]/90`
- Border: `border-b border-[--color-border]`
- Backdrop blur: `backdrop-blur-md`
- Internal row layout: flex, `justify-between`, `items-center`
- Padding baseline: `px-4 py-4 md:px-8`
- Header should remain visually lighter than hero content

## Interaction and accessibility
- Nav links default to muted text
- Active nav state must be visible (brighter text and/or slim underline)
- Keyboard focus-visible styles must be clearly discernible on links and buttons
- Do not rely on color alone for active state if contrast is ambiguous
- Keep text contrast readable on dark surfaces

## Session access in a Server Component
```ts
import { getSession } from '@/lib/require-auth'

const session = await getSession()
// null when logged out
// session.user.role is "CUSTOMER" or "ADMIN" when logged in
```

## Sign out behavior
- Sign out must be a form submission to a Server Action (not a link).
- Pattern: `<form action={signOutAction}>` with a submit button.
- The action should destroy the session and redirect per auth flow rules.

## Explicit non-goals
- No mobile hamburger menu in this version
- No search control in header
- No shopping cart icon in this version

## Acceptance criteria
- Header renders consistently in the storefront shared shell.
- Logged-out users see only `Sign In` and `Sign Up` actions on the right.
- Logged-in customers see `My Favorites`, identity label, and `Sign Out`.
- Logged-in admins additionally see `Admin Panel`.
- Active route indication is visible for nav links.
- All interactive controls are keyboard-focusable with visible focus styles.

## File location
`components/app-header.tsx`