# GenreBadge Component Spec

## Design source
Reference:
- `specs/design/design-refernce.png` for shared chip styling vocabulary
- `specs/design/homepage-reference.png` for storefront card usage
- `specs/design/game-detail-reference.png` for product metadata badge usage

If the written component notes conflict with the visual references, follow the PNGs.

## What it is
A small coloured badge showing a game's genre.
Each genre has its own colour from the design spec.

## What it receives
Props:
  genre: string   ("Action" | "RPG" | "Sports" | "Strategy" | "Horror" | "Adventure")

## What it shows
A small pill with:
- Text: the genre name, uppercase, tracking-wider, text-[10px]
- Background colour based on genre:
  Action: bg-[--color-genre-action]
  RPG: bg-[--color-genre-rpg]
  Sports: bg-[--color-genre-sports]
  Strategy: bg-[--color-genre-strategy]
  Horror: bg-[--color-genre-horror] (dark — needs white text)
  Adventure: bg-[--color-genre-adventure]
  Unknown: bg-[--color-surface] (fallback)
- Text: always text-white
- Padding: px-2 py-0.5
- Rounded: rounded-full

## Implementation note
Use a lookup object to map genre to colour class:
const genreColours: Record<string, string> = {
  Action: 'bg-[--color-genre-action]',
  RPG: 'bg-[--color-genre-rpg]',
  ...
}
Then: className={genreColours[genre] ?? 'bg-[--color-surface]'}

## Component type
Server Component — pure display.

## File location
components/genre-badge.tsx
