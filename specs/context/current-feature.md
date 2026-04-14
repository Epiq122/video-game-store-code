# Current Feature

## Feature Title

Game Card

## Status

Complete

## Goals

- Create or update `components/game-card.tsx` as the reusable storefront product card.
- Match the shared PixelVault design language from `specs/design/design-spec.md`.
- Match the visual composition from `specs/design/homepage-reference.png` and `specs/design/game-detail-reference.png`.
- Keep the card poster-first with a `3:4` image, compact metadata, restrained hover treatment, and indigo/lavender price emphasis.
- Ensure the card links to `/games/[game.slug]` and remains a Server Component.

## Notes

- The written game card spec now defers to the PNG references when there is any conflict.
- Use the project display font token (`Manrope`) for the title and price, not Space Grotesk.
- Product titles should wrap to two lines at most rather than hard truncating to one line.
- Metadata should stay compact and muted so the poster remains the focal point.
- Standard grid cards should avoid loud glow effects or overly colorful chip treatment.
- Related existing files likely include `components/genre-badge.tsx`, `components/platform-badge.tsx`, and any route that renders the storefront grid.

## History

- Loaded from `specs/context/features/game-card-spec.md` on 2026-04-13.
- Completed on 2026-04-13: added a reusable `components/game-card.tsx`, updated the homepage to render a real storefront card grid, and enabled remote poster images for `next/image`.
