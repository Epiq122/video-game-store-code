# Current Feature: Platform Badge

## Status
Complete

## Goals
- Create a reusable `PlatformBadge` component at `components/platform-badge.tsx`.
- Render the game platform as a small uppercase badge with `px-2`, `py-0.5`, `rounded`, `tracking-wider`, and `text-[10px]`.
- Use a transparent background with a low-contrast border via `border border-[--color-border]`.
- Render platform text with `text-[--color-text-secondary]`.
- Keep the component as a Server Component because it is pure display with no client-side interactivity.

## Notes
- Design authority comes from `specs/design/design-refernce.png`, `specs/design/homepage-reference.png`, and `specs/design/game-detail-reference.png`.
- If the written feature notes conflict with the PNG references, follow the PNGs.
- The visual language should stay more neutral than `GenreBadge`, using a muted outlined treatment instead of genre color fills.
- The current repo already has a `GenreBadge` component that establishes the expected chip scale and badge-only server rendering pattern.
- The spec mentions an icon concept, but the written requirements only guarantee platform text and neutral chip styling. Any icon decision should be validated against the PNG references before implementation.

## History
- Loaded from `specs/context/features/platform-badge-spec.md` on 2026-04-13.
- Completed on 2026-04-13 with a reusable `PlatformBadge` Server Component, neutral outlined badge styling, and a homepage preview wired to the shared component.
