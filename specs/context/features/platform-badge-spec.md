# PlatformBadge Component Spec

## Design source
Reference:
- `specs/design/design-refernce.png` for shared chip styling vocabulary
- `specs/design/homepage-reference.png` for storefront card usage
- `specs/design/game-detail-reference.png` for product metadata badge usage

If the written component notes conflict with the visual references, follow the PNGs.

## What it is
A small badge showing the game's platform. Less colourful than GenreBadge —
platforms use a neutral style with an icon concept.

## What it receives
Props:
  platform: string

## What it shows
- Text: platform name
- Style: border border-[--color-border] text-[--color-text-secondary]
- Background: transparent (just the border)
- Padding: px-2 py-0.5
- Rounded: rounded
- Text size: text-[10px] uppercase tracking-wider

## Component type
Server Component.

## File location
components/platform-badge.tsx
