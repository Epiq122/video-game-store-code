# ProductFilters Component Spec

## What it is
The interactive catalog section of the homepage: search + genre filter + platform filter + results summary + game grid.
It sits below the homepage intro/hero content inside a dark toolbar panel that matches the PixelVault storefront design system.

For the current app flow, all filtering happens in the browser on the server-provided homepage game list passed into the component.
This is a homepage-local filtering experience, not the final full-catalog search architecture.

## What it receives
Props:
  games: Product[]   (the homepage game list selected by the Server Component page and passed into the client filter UI)

Notes:
  - Do not assume this is the full product catalog.
  - Do not hard-code a "30 games" requirement.
  - The homepage Server Component remains responsible for choosing which games are shown on first render.

## State it manages
  searchQuery: string                   initial: ''
  selectedGenre: string                 initial: 'All'
  selectedPlatform: string              initial: 'All'

Derived values:
  availableGenres: string[]             derived from the current homepage game list, with 'All' prepended
  availablePlatforms: string[]          derived from the current homepage game list, with 'All' prepended

Data normalization:
  - Platform filter options must reflect the actual platform labels used by the current game data.
  - If the app later wants grouped labels such as "PlayStation" or "Xbox", add an explicit normalization/mapping layer first.
  - Do not ship filter chips that cannot match the current homepage cards.

## Filtering logic
const filteredGames = games.filter((game) => {
  const matchesSearch = game.title
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
  const matchesGenre = selectedGenre === 'All' || game.genre === selectedGenre
  const matchesPlatform = selectedPlatform === 'All' || game.platform === selectedPlatform
  return matchesSearch && matchesGenre && matchesPlatform
})

## What it shows

Search bar:
  - Full width inside the toolbar panel
  - Placeholder "Search games..."
  - Left: MagnifyingGlass icon from lucide-react
  - Dark input field with muted placeholder text
  - Compact control height
  - Focus-visible: clear brand focus ring and stronger border
  - Show a clear button when query is not empty
  - Clear action should be a normal single click, not double-click

Toolbar layout:
  - Sits below the homepage hero/intro content
  - Uses a dark strip/panel treatment consistent with the design spec
  - Search comes first, followed by compact filter chips
  - On mobile, the chip rows may wrap or scroll horizontally
  - Below medium widths, search and filter groups may stack vertically

Genre filter row:
  Buttons: derived from the homepage game list, with 'All' first
  Active: filled lavender brand treatment with dark text
  Inactive: bg-[--color-surface] text-[--color-text-secondary] border border-[--color-border]
  Hover on inactive: slightly brighter border or surface
  Focus-visible must be distinct from hover
  Keep chip sizing compact
  When genre changes: do not automatically reset platform unless the final implementation proves it improves UX without causing surprise

Platform filter row:
  Buttons: derived from the homepage game list, with 'All' first
  Same active/inactive styling as genre
  Use the exact platform values currently represented by the cards unless a normalization layer is added

Results count:
  "[N] games found" — text-secondary, text-sm
  If 0: hide the count and show empty state

Game grid:
  Follows the storefront grid rhythm from the design spec
  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5
  One <GameCard game={game} key={game.id} /> per filtered game

Empty state (0 results):
  A centered section inside the catalog area:
  - Icon: a controller or ghost icon from lucide-react
  - Heading: "No games found"
  - Subtext: "Try a different search or clear your filters"
  - "Clear all filters" button that resets all state
  - Empty state action should use the same primary/secondary button language as the design system
  - Keep the empty state visually quiet; it should not overpower the page

## Component type
Client Component ("use client") — useState for search and filters.

## File location
components/product-filters.tsx

## Design alignment requirements
- Match the PixelVault dark storefront shell and toolbar styling in `specs/design/design-spec.md`.
- Use semantic design tokens rather than hard-coded one-off colors where possible.
- Selected chips must be visually distinct by both fill and text contrast, not color alone.
- Filter controls must include keyboard-discernible focus-visible states.
- Keep controls compact and dense rather than oversized.
- The homepage grid should continue to feel poster-first and premium, not like an admin table or generic ecommerce filter wall.

## Current app flow alignment
- The homepage is currently a Server Component that renders the intro content and the initial game list.
- `ProductFilters` should receive that list and handle client-side refinement only.
- The component should not introduce API-route mutation patterns or database-fetching assumptions.
- The spec should remain compatible with the existing `GameCard` route flow where each card links to `/games/[slug]`.

## Follow-up note for implementation
- Before implementing this feature, reconcile the current card metadata styling with the design spec so the homepage filter toolbar and game cards feel like one system.
- In particular, avoid reintroducing loud multicolor genre treatments in contexts where the design spec calls for restrained dark or indigo-toned chips.
