# Design Spec - PixelVault

This document is the implementation source of truth for the PixelVault UI system. It consolidates the visual language shown in the product mocks with the component vocabulary shown in the design board.

Product naming source of truth:
- Use `PixelVault` in product UI, copy, and documentation.
- The `Obsidian Vault` label visible in `design-refernce.png` is an outdated title on the style board and should not be used in the product.

Reference sources:
- `specs/design/design-refernce.png` for shared visual tokens, button variants, search field styling, icon treatment, and typography pairing
- `specs/design/homepage-reference.png` for public storefront layout, hero, filter rail, grid, promos, and footer
- `specs/design/game-detail-reference.png` for product detail composition, CTA hierarchy, chips, and stat cards
- `specs/design/admin-panel-reference.png` for admin shell, sidebar, metrics, data table, pagination, and operational status styling
- `specs/design/sign-in-reference.png` for sign-in shell, auth card layout, input treatment, and social auth actions
- `specs/design/sign-up-reference.png` for sign-up shell, account creation card, OAuth layout, and supporting artwork treatment

## Brand and visual direction

PixelVault uses a premium dark UI with restrained neon accents. The product should feel like a curated digital game vault rather than a generic storefront.

Core visual characteristics:
- Near-black navy canvas with soft indigo and violet lighting
- Elevated dark panels with low-contrast borders instead of bright outlines
- Lavender primary actions, muted dark secondary actions, and magenta tertiary accents used sparingly
- Strong headline typography paired with understated UI copy
- Dense but readable information layout, especially in the admin console
- Small chips, compact controls, and subtle glow instead of loud gradients everywhere

## Semantic color tokens

These tokens are semantic. Implementers should use the usage token name first and the base token only when defining the system.

### Base tokens

- `color.base.primary`: `#6366F1`
- `color.base.secondary`: `#7B67D1`
- `color.base.tertiary`: `#B85393`
- `color.base.neutral`: `#111827`
- `color.base.canvas`: `#0A1020`
- `color.base.surface`: `#131C31`
- `color.base.surface-elevated`: `#1A243A`
- `color.base.surface-strong`: `#202B44`
- `color.base.border`: `#2A3550`
- `color.base.border-strong`: `#354266`
- `color.base.text-primary`: `#F8FAFC`
- `color.base.text-secondary`: `#AAB3C5`
- `color.base.text-muted`: `#7F8AA3`
- `color.base.success`: `#10B981`
- `color.base.danger`: `#FB7185`
- `color.base.warning`: `#F59E0B`
- `color.base.black`: `#000000`
- `color.base.white`: `#FFFFFF`

### Usage tokens

Page and shell:
- `color.bg.canvas`: `#0A1020`
- `color.bg.shell`: `#0D1324`
- `color.bg.radial-glow`: translucent indigo and violet glow layered over the shell, never a hard spotlight
- `color.bg.presentation-dot`: muted gray dots used only for presentation/mockup framing, not required in product pages

Panels and surfaces:
- `color.bg.surface`: `#131C31`
- `color.bg.surface-elevated`: `#1A243A`
- `color.bg.surface-pressed`: `#202B44`
- `color.bg.table-row`: `#141D32`
- `color.bg.input`: `#202A3E`
- `color.bg.sidebar`: `#10192C`

Text:
- `color.text.primary`: `#F8FAFC`
- `color.text.secondary`: `#AAB3C5`
- `color.text.muted`: `#7F8AA3`
- `color.text.inverse`: `#111827`
- `color.text.link`: `#9EA3FF`
- `color.text.price`: `#8E90FF`
- `color.text.success`: `#10B981`
- `color.text.danger`: `#FB7185`

Borders and dividers:
- `color.border.subtle`: `#2A3550`
- `color.border.strong`: `#354266`
- `color.border.focus`: `#8F92FF`
- `color.divider.default`: low-opacity version of `#354266`

Actions:
- `color.action.primary.bg`: `#8F92FF`
- `color.action.primary.bg-hover`: `#A3A6FF`
- `color.action.primary.bg-pressed`: `#7A7EF2`
- `color.action.primary.text`: `#111827`
- `color.action.secondary.bg`: `#1A243A`
- `color.action.secondary.bg-hover`: `#202B44`
- `color.action.secondary.text`: `#F8FAFC`
- `color.action.outline.border`: `#354266`
- `color.action.outline.text`: `#D8DEFF`
- `color.action.tertiary.bg`: `#F08AD0`
- `color.action.tertiary.text`: `#2B1640`

State and status:
- `color.status.success.bg`: low-opacity green on dark surface
- `color.status.success.text`: `#10B981`
- `color.status.danger.bg`: low-opacity rose on dark surface
- `color.status.danger.text`: `#FB7185`
- `color.status.info.bg`: low-opacity indigo on dark surface
- `color.status.info.text`: `#9EA3FF`
- `color.status.pending.bg`: low-opacity amber on dark surface
- `color.status.pending.text`: `#F59E0B`

Chips and badges:
- `color.chip.active.bg`: `#8F92FF`
- `color.chip.active.text`: `#111827`
- `color.chip.inactive.bg`: `#131C31`
- `color.chip.inactive.text`: `#AAB3C5`
- `color.chip.inactive.border`: `#2A3550`
- `color.chip.genre.bg`: indigo-leaning dark chip unless a specific page mock shows otherwise
- `color.chip.platform.bg`: dark muted chip with low-contrast border

## Typography system

Font families:
- `font.display`: `Manrope`
- `font.body`: `Inter`

Usage rules:
- Use `Manrope` for hero headlines, page titles, section headings, large numeric emphasis, and other branded display moments.
- Use `Inter` for body text, labels, inputs, metadata, table content, chips, navigation, and utility copy.
- Avoid introducing additional fonts.

Type scale:
- `type.hero`: `Manrope`, 56px, 800, line-height 0.95 to 1.0
- `type.page-title`: `Manrope`, 44px, 800, line-height 1.0
- `type.section-title`: `Manrope`, 28px, 800, line-height 1.1
- `type.card-title`: `Manrope`, 18px, 700, line-height 1.2
- `type.product-title`: `Manrope`, 20px, 700, line-height 1.2
- `type.price-large`: `Manrope`, 24px, 800, line-height 1.1
- `type.price-card`: `Manrope`, 16px, 700, line-height 1.1
- `type.body`: `Inter`, 14px, 400, line-height 1.6
- `type.body-strong`: `Inter`, 14px, 500, line-height 1.6
- `type.meta`: `Inter`, 12px, 500, line-height 1.4
- `type.label`: `Inter`, 11px, 700, line-height 1.2, uppercase, letter-spacing 0.08em
- `type.caption`: `Inter`, 11px, 400, line-height 1.4
- `type.button`: `Inter`, 13px, 600, line-height 1
- `type.nav`: `Inter`, 12px, 600, line-height 1

Typography behavior:
- Hero and page titles should feel heavy and compact, never airy or editorial.
- Metadata uses muted text and tighter scale than body copy.
- Labels in cards, forms, and stats should be uppercase and spaced out.
- Prices are always visually emphasized with the brand indigo/lavender family.
- Do not use oversized body copy in dense views such as admin tables.

## Spacing system

Base spacing scale:
- `space.1`: 4px
- `space.2`: 8px
- `space.3`: 12px
- `space.4`: 16px
- `space.5`: 20px
- `space.6`: 24px
- `space.8`: 32px
- `space.10`: 40px
- `space.12`: 48px
- `space.16`: 64px

Usage guidance:
- Use 8px and 12px steps inside dense controls and cards.
- Use 16px and 24px spacing for component padding and grid gaps.
- Use 32px and above for page sections, shell padding, and large layout separation.

## Layout system

Public storefront layout:
- Max content width: 1280px
- Desktop page gutters: 24px to 32px
- Mobile page gutters: 16px
- Hero section should feel full-bleed inside the shell card, not flush to viewport edges
- Game grid uses 4 columns on large desktop, 3 on medium screens, 2 on tablet, and 1 on narrow mobile

Detail page layout:
- Desktop uses a two-column layout with poster on the left and metadata/actions on the right
- Poster column width should preserve a strong 3:4 cover silhouette
- Stats cards align in a three-card row on desktop and stack on smaller screens

Admin layout:
- Sidebar width: approximately 176px to 208px
- Main dashboard area uses a single content column with metric row followed by table content
- Stat cards should align four-up on desktop and wrap as width tightens
- Table remains dense and desktop-first; on smaller screens it may collapse to stacked product rows if implemented

Auth layout:
- Auth card max width: 420px to 460px
- Content is vertically centered within the shell
- Supporting glow or decorative artwork sits behind or beside the card and should drop in prominence on mobile

Responsive behavior:
- Collapse nav density before shrinking button legibility
- On mobile homepage, the filter rail becomes horizontally scrollable or wraps into multiple rows
- Search and filter controls may stack vertically below medium widths
- Admin sidebar may compress into icon-first navigation or a drawer at smaller widths
- Auth decorative artwork is optional on mobile; form clarity takes precedence

## Visual primitives

Border radius:
- `radius.sm`: 8px for small chips and compact controls
- `radius.md`: 10px for inputs, small buttons, and utility cards
- `radius.lg`: 14px for panels, promo cards, and hero containers
- `radius.xl`: 18px for large auth and shell cards when needed

Borders:
- Default panel borders are 1px, low-contrast, and close to `color.border.subtle`
- Avoid bright borders unless showing focus or an active state
- Internal dividers should be thinner and dimmer than container borders

Shadows and glows:
- Use soft elevation shadows, not hard drop shadows
- Primary buttons can carry a restrained outer glow in the lavender family
- Ambient page glow should feel diffused and peripheral
- Never apply strong glow to every card; reserve it for key actions and large shell lighting

Icons:
- Default icon size: 16px for inline actions, 18px to 20px for standalone controls
- Icons should inherit the text tone of their context unless active
- Active icon containers may use indigo backgrounds with dark icon glyphs

Imagery:
- Product covers are always 3:4 and must never stretch
- Use `object-cover` with image crops biased toward preserving primary character faces
- Hero imagery requires a dark gradient overlay so text remains legible without losing atmosphere
- Decorative auth imagery should remain low contrast and never compete with form content

## Component specifications

### App header and navigation

- Header sits inside a dark shell with a subtle border and compact vertical padding
- Brand wordmark is left-aligned and high contrast
- Nav links use muted text by default
- Active nav item uses either a slim underline, brighter text, or both
- Auth actions sit on the right, with secondary text action first and filled primary CTA second
- Header must remain visually lightweight compared to the hero

### Hero banner

- Hero is a large, rounded panel with background artwork and a dark left-to-right gradient overlay
- Content block is left-aligned, vertically centered within the hero, and limited in width for readable measure
- Include a small featured or release eyebrow above the title when content supports it
- Primary CTA is filled lavender
- Secondary CTA is a dark subdued button
- Carousel controls, if present, are compact square or rounded-square buttons at the lower right

### Game cards

- Poster dominates the card
- Metadata sits beneath the image in a tight vertical stack
- Use small uppercase metadata for platform, category, or genre context
- Title should wrap cleanly to two lines at most
- Price sits beneath title and uses the indigo price token
- Hover state may lift the card slightly, brighten the border, and increase poster contrast
- Do not use loud genre-colored badges on standard grid cards unless a page explicitly calls for them

### Search and filter toolbar

- Toolbar sits inside a dark strip or panel below the hero
- Filter chips are compact and horizontally arranged
- Selected chips use filled lavender with dark text
- Unselected chips use dark surfaces with muted text and subtle borders
- Search input uses a dark field, icon-leading placement, muted placeholder, and compact height
- Toolbar utility icons should use the same density as admin icon actions

### Product detail view

- Poster sits in its own card on the left
- Product metadata line above the title is small, muted, and uppercase or spaced
- Title is large, bold, and dominant
- Price is placed directly under the title and above the description
- Discount indicators should remain small and secondary to the main price
- Primary CTA comes first, followed by a dark favorite or save action
- Sign-in prompt beneath actions should be low emphasis but clearly visible
- Platform and genre chips appear in stacked groups with uppercase labels
- Stats cards use equal height dark panels with a muted label and bold value

### Footer and promo blocks

- Footer is low-contrast and compact with legal and utility links
- Promo block group includes one dark membership card and one brighter review or trust card
- Newsletter or membership input stays inline with its CTA on desktop and may stack on mobile
- Bright promo cards may use lavender background with dark text, but this treatment should remain rare

### Admin shell

- Admin uses a dedicated dashboard shell distinct from the storefront layout
- Sidebar has a darker background than the content area and contains brand, primary nav, and utility actions at the bottom
- Active sidebar item uses lavender emphasis with a filled or highlighted row treatment
- Main content begins with page title, short description, and top-right primary action
- Metric cards are compact and numeric-first
- Table is dark, dense, and structured with muted headers and stronger row content
- Product thumbnails remain small and square within table rows
- Row actions use icon buttons with muted default state and brighter hover feedback
- Pagination uses compact square buttons with lavender fill on the active page
- Operational or health status appears as a small green pill at the lower edge of the screen

### Auth forms

- Auth views use a large dark shell with ambient radial lighting
- The auth card is centered, elevated, and narrower than the shell
- Brand mark and product name sit above the form
- Form labels are always visible above each input
- Inputs use dark fills, soft borders, and muted placeholder text
- Password rows support a show or hide affordance without shifting layout
- Submit button is full width and visually dominant
- Social auth buttons appear beneath a divider or small connector label
- Supportive footer copy links to the opposite auth route
- Sign-up may include low-contrast decorative imagery in the lower corner of the shell

## Interaction states

Buttons:
- Hover: brighten fill or border slightly and increase contrast
- Pressed: darken or compress fill by one state step
- Focus-visible: 2px ring using `color.border.focus` with a subtle outer glow
- Disabled: reduce contrast and remove glow while preserving readable text
- Loading: preserve button width, replace label with spinner or spinner plus text, and block duplicate interaction

Inputs:
- Default: dark filled field with subtle border
- Hover: slightly brighter border
- Focus-visible: clear focus ring and stronger border
- Error: rose border, optional low-opacity rose background tint, error text below field
- Disabled: lower contrast and no hover response

Chips and nav items:
- Selected state must be visually obvious by both fill and text contrast
- Hover on inactive chips may brighten border or surface
- Focus-visible must be distinct from hover

Cards and table rows:
- Hover may slightly lift brightness or border contrast
- Selected rows in admin should use a darker or outlined state that does not conflict with the active sidebar color

Favorite and save actions:
- Default: dark secondary style
- Active: may use filled or accented state tied to the primary or tertiary family
- Loading: icon remains anchored and layout does not jump

## Accessibility and content rules

- Maintain visible labels for all auth inputs
- Ensure body text and muted text still meet readable contrast on dark surfaces
- Focus-visible styling must be keyboard-discernible on all interactive controls
- Button text must remain legible in primary, secondary, and disabled states
- Currency always renders with two decimal places
- Product imagery always preserves the intended aspect ratio
- Avoid relying on color alone to communicate active or error state; pair with border, icon, or text changes
- Heading and section title casing should follow title case or branded uppercase only when shown in the references
- Labels, eyebrow text, and compact metadata may use uppercase
- Do not overuse uppercase for long-form body or descriptive copy

## Implementation component inventory

Server Components:
- `AppHeader`
- `AppFooter`
- `GameCard`
- `GenreBadge`
- `PlatformBadge`
- `AdminProductRow`
- `FeaturedGameBanner`
- `GameGrid`
- `PageContainer`
- `SectionHeading`
- `PriceTag`
- `AdminStats`

Client Components:
- `ProductFilters`
- `FavoriteButton`
- `AddProductForm`
- `DeleteProductButton`
- `SignInForm`
- `SignUpForm`
- `SearchInput`
- `FilterButton`
- `EmptyState`
- `ConfirmDialog`

Supporting UI patterns that must follow this spec:
- promo membership card
- verified review card
- metric stat card
- admin sidebar item
- pagination button
- social auth button
- icon-only utility button

## Design rules

1. PixelVault is the product name in all UI and copy.
2. `design-refernce.png` is a visual token board, not the naming source of truth.
3. Use semantic tokens rather than hard-coded color values in component implementations.
4. Headlines use `Manrope`; body and UI text use `Inter`.
5. Product covers always use a 3:4 aspect ratio and must never stretch.
6. Prices always display two decimal places.
7. Primary CTAs use the lavender brand action treatment.
8. Secondary actions remain dark and subordinate to the primary CTA.
9. Genre and platform chips default to dark or indigo-toned pills; do not restore the old multicolor genre system unless a future design explicitly requires it.
10. Auth submit buttons are full width and visually dominant.
11. Every auth field has a visible label above the input.
12. Password fields include a stable show or hide affordance.
13. Hero and promotional imagery must use overlays that preserve text readability.
14. Admin uses a dedicated shell with sidebar navigation and dense table styling.
15. Focus-visible styles are required on all interactive controls.
16. Error states must appear at the field level for forms.
17. Hover and selected states must be distinguishable beyond color alone when practical.
18. Decorative background glow supports the content and should never overpower it.
