# Current Feature: Genre Badge

## Status
Complete

## Goals
- Create a reusable `GenreBadge` component at `components/genre-badge.tsx`.
- Render the game genre as a small uppercase pill with `px-2`, `py-0.5`, `rounded-full`, `tracking-wider`, and `text-[10px]`.
- Map supported genres to CSS variable-backed background classes with a lookup object rather than conditional JSX.
- Always render badge text in white and fall back to `bg-[--color-surface]` for unknown genres.
- Keep the component as a Server Component because it is pure display with no client-side interactivity.

## Notes
- Design authority comes from `specs/design/design-refernce.png`, `specs/design/homepage-reference.png`, and `specs/design/game-detail-reference.png`.
- If the written feature notes conflict with the PNG references, follow the PNGs.
- The broader design spec warns against loud multicolor genre chips on standard grid cards, so implementation should stay aligned with the referenced visuals rather than assume maximum saturation.
- The current repo does not yet have an existing shared card or catalog component, so this feature may begin as an isolated reusable UI component before it is wired into product surfaces.

## History
- Loaded from `specs/context/features/genre-badge-spec.md` on 2026-04-13.
- Completed on 2026-04-13 with a reusable `GenreBadge` Server Component, genre color tokens, and a design-aligned preview surface.
