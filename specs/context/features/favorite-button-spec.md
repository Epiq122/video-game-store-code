# FavoriteButton Component Spec

## Design source

Reference:
- `specs/design/design-spec.md` for the shared visual system, button states, and interaction rules
- `specs/design/game-detail-reference.png` for favorite button placement, CTA hierarchy, and signed-out prompt treatment
- `specs/design/homepage-reference.png` for compact action styling and storefront density context
- `specs/design/design-refernce.png` for button variant styling, icon treatment, and typography guidance

If the written notes conflict with the PNGs, follow the PNGs.

## What it is

A client-side action control that adds or removes a game from a signed-in user's favorites with optimistic UI.

## What it receives

Props:
- `gameId: string`
- `gameSlug: string`
- `initialIsFavorited: boolean` (from the Server Component, checked at page load)
- `isLoggedIn: boolean` (from the Server Component)

## State it manages

- `isFavorited: boolean` (initial: `initialIsFavorited`)
- `isLoading: boolean` (initial: `false`)
- `error: string | null` (initial: `null`)

## The three visual states

### State 1 - Not favorited (default)

- Outline button treatment
- Label: `"Add to Favorites"`
- Icon: outlined `HeartIcon` (`lucide-react`)

### State 2 - Favorited

- Filled active treatment tied to design tokens
- Label: `"Favorited"`
- Icon: filled `HeartIcon` (or checkmark if design-compliant)
- Background direction: `bg-[--color-success]` (or nearest approved token)

### State 3 - Loading

- Button disabled
- Label: `"Saving..."` when adding, `"Removing..."` when removing
- Icon: spinner with `animate-spin`
- Reduced emphasis: `opacity-70`

## What happens when not logged in

Render a sign-in prompt instead of the interactive toggle button:
- Text link: `"Sign in to save this game"`
- Destination: `href="/auth/sign-in"`
- Behavior: navigation only (no Server Action call)

## The optimistic UI flow

Expected sequence:
1. Set loading state.
2. Save the previous favorite state.
3. Optimistically flip `isFavorited` in UI immediately.
4. Call:
   - `removeFavoriteAction(gameId)` if it was already favorited.
   - `addFavoriteAction(gameId)` if it was not favorited.
5. On failure:
   - Revert `isFavorited` to previous value.
   - Set error message.
6. Always clear loading in `finally`.

## Error display

When `error` is not `null`:
- Show helper text below the control: `"Failed to update favorites. Try again."`
- Style direction: `text-[--color-danger] text-sm`
- Auto-dismiss after 3 seconds via timeout reset

## Behavioral notes

- Preserve button width between states to avoid layout shift.
- Prevent duplicate submissions while loading.
- Keep icon alignment stable between default, active, and loading states.

## Component type

Client Component (manages local state and calls Server Actions).

## File location

`components/favorite-button.tsx`
