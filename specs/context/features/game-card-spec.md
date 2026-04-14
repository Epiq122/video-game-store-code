# GameCard Component Spec

## Design source

Reference:
- `specs/design/design-spec.md` for the shared visual system and game card rules
- `specs/design/homepage-reference.png` for storefront grid composition and card density
- `specs/design/game-detail-reference.png` for product imagery treatment and metadata hierarchy

If the written notes conflict with the PNGs, follow the PNGs.

## What it is

One game in the storefront product grid. Clicking the card goes to the game detail page.

## What it receives

Props:
  game: Product   (Prisma `Product` model shape)

## What it shows

### Card container

- The entire card is a Next.js `<Link>` to `/games/[game.slug]`
- Use `group` on the outer card so child hover states can respond
- Background: `bg-[--color-surface]`
- Border: `border border-[--color-border]`
- Radius: `rounded-lg` or equivalent to the design system panel radius
- Overflow: hidden
- Layout: poster first, metadata beneath in a tight vertical stack
- Hover treatment should be restrained:
  - slight upward lift is allowed
  - border may brighten slightly
  - poster contrast may increase slightly
  - avoid loud glow, oversized shadow, or flashy gradient effects
- Transition should feel smooth and compact, around 200ms to 300ms
- `cursor-pointer`

### Image section

- Poster dominates the card
- Aspect ratio: `aspect-[3/4]`
- Use `next/image` with `fill`
- Use `object-cover`
- Image source: `game.imageUrl`
- `priority={false}`
- Preserve the cover silhouette at all breakpoints; never crop into a landscape card shape

### Hover image treatment

- A subtle dark overlay is allowed on hover, but it should not overpower the cover art
- If an overlay is used:
  - `absolute inset-0`
  - low-to-moderate dark tint only
  - optional compact "View Game" affordance is acceptable
- The hover state should feel premium and restrained, matching the homepage reference rather than a heavy marketing card

### Metadata section

- Padding: compact card padding, approximately `p-3`
- Stack order:
  1. small metadata line
  2. title
  3. price

### Metadata line

- Use small uppercase metadata above the title
- This line should use muted text styling
- Follow the homepage reference: metadata is compact and secondary, not colorful hero content
- Show platform and genre context here using the shared badge/chip vocabulary
- `GenreBadge` and `PlatformBadge` may be used if they match the compact storefront treatment
- Do not let genre styling overpower the card; standard grid cards should stay visually restrained

### Title

- Font family: display font token (`Manrope` in this project), not Space Grotesk
- Style: equivalent to compact product/card title styling
- Color: `text-[--color-text-primary]`
- Titles should wrap cleanly to two lines at most
- Do not force a one-line truncate on storefront cards
- Keep line-height tight and readable

### Price

- Format as dollars from cents: `(game.price / 100).toFixed(2)`
- Example display: `$59.99`
- Font family: display font token (`Manrope`)
- Weight: bold or semibold, consistent with the design system price emphasis
- Color: price/indigo token direction from the design spec
  - use the lavender-indigo emphasis seen in the homepage reference
  - do not use plain white for the primary price

## Behavioral notes

- The card should feel dense and collectible, not airy
- Poster image is the focal point; metadata is supportive
- Small chips, muted labels, and low-contrast borders are preferred over loud decorative treatments
- Follow the storefront grid density in `homepage-reference.png`

## Component type

Server Component.

## File location

`components/game-card.tsx`
