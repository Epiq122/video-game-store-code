# ProductFilters Component Spec

## What it is
The interactive section of the homepage: search + genre filter + platform filter + game grid.
All filtering happens in the browser using the 30 games passed as props.

## What it receives
Props:
  games: Product[]   (all games from the database, passed from the Server Component page)

## State it manages
  searchQuery: string                   initial: ''
  selectedGenre: string                 initial: 'All'
  selectedPlatform: string              initial: 'All'

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
  - Full width, placeholder "Search games..."
  - Left: MagnifyingGlass icon from lucide-react
  - Focus: accent colour border ring
  - Clears on double-click of the X button (show clear button when query is not empty)

Genre filter row:
  Buttons: All / Action / RPG / Sports / Strategy / Horror / Adventure
  Active: bg-[--color-accent] text-white
  Inactive: bg-[--color-surface] text-[--color-text-secondary] border border-[--color-border]
  When genre changes: reset platform to 'All' (optional but nice UX)

Platform filter row:
  Buttons: All / PlayStation / Xbox / PC / Nintendo Switch / Multi-Platform
  Same active/inactive styling as genre

Results count:
  "[N] games found" — text-secondary, text-sm
  If 0: hide the count and show empty state

Game grid:
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5
  One <GameCard game={game} key={game.id} /> per filtered game

Empty state (0 results):
  A centered section:
  - Icon: a controller or ghost icon from lucide-react
  - Heading: "No games found"
  - Subtext: "Try a different search or clear your filters"
  - "Clear all filters" button that resets all state

## Component type
Client Component ("use client") — useState for search and filters.

## File location
components/product-filters.tsx
