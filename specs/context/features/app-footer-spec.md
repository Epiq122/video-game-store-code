# AppFooter Component Spec

## Design source
Reference:
- `specs/design/design-spec.md` (Footer and promo blocks section)
- `specs/design/homepage-reference.png` (homepage footer composition and spacing)

If this spec conflicts with older implementation notes, follow `design-spec.md`.

## What it is
The primary storefront footer for PixelVault. It sits at the bottom of the shared
storefront shell and includes:
- a promo row with two cards (membership/newsletter + trust/reviews)
- a compact legal and utility footer row

The footer should feel low-contrast, dense, and supportive, not dominant.

## Component type
Server Component.

Why:
- Static informational content with optional form handoff.
- Should be render-safe in shared server layouts without client-only dependencies.

## Inputs
Props:
- None for V1.

Optional future props (non-goal for this version):
- `showPromoRow?: boolean`
- `compact?: boolean`

## File location
`components/app-footer.tsx`

## Placement
- Render in the shared storefront layout below route content.
- Keep it inside the same max-width container strategy used by the homepage shell.
- Footer should not appear in admin shell layouts unless explicitly required by future design.

## Content architecture

### Section 1: Promo row (two columns on desktop)
Desktop layout:
- 2-column row with larger left card and smaller right card
- Recommended ratio: `2fr / 1fr`
- Gap: `space.4` to `space.6` (16px to 24px)

Tablet/mobile behavior:
- Collapse to single-column stack
- Membership card first, review/trust card second

#### Promo card A (membership/newsletter)
Purpose:
- Encourage joining "The Vault Club" and email capture

Content:
- Title: `THE VAULT CLUB` (display-style heading, high contrast)
- Supporting copy in muted body text
- Inline form row:
  - email input (left, flexible width)
  - action button (right, compact primary/neutral CTA)

Layout details:
- Keep form inline on desktop
- Stack input above button on narrow mobile widths
- Preserve comfortable touch targets and spacing

#### Promo card B (trust/review card)
Purpose:
- Reinforce credibility with a short "Verified Reviews" block

Content:
- Icon indicator
- Heading: `Verified Reviews`
- One short supporting line

Layout details:
- Higher visual emphasis than legal footer, but less emphasis than hero CTA
- In homepage reference, this card uses brighter lavender treatment with dark text
- This brighter treatment should remain rare and limited to this card

### Section 2: Bottom legal and utility row
Content:
- Left: brand label (`PixelVault`) and copyright line
- Center/right: utility links (for example `Privacy Policy`, `Terms of Service`, `Cookie Settings`, `Press Kit`)
- Far right: small social/utility icon buttons (optional for V1 if design parity is close)

Behavior:
- Keep this row compact and low-contrast
- Utility links should wrap gracefully on smaller widths
- On mobile, stack into 2 rows if needed (brand/copyright first, links/actions second)

## Layout and spacing
- Outer container: align to storefront max width (`1280px`)
- Horizontal gutters: `16px` mobile, `24px` to `32px` desktop
- Vertical rhythm:
  - promo row top spacing from prior section: `space.8` to `space.12`
  - promo row internal padding: `space.5` to `space.6`
  - legal row padding: compact (`space.4` to `space.5`)
- Footer should maintain clear breathing room from preceding game grid section

## Visual styling and color tokens
Use semantic tokens from `design-spec.md`; do not hard-code colors in implementation.

Shell and surfaces:
- Footer background should remain on dark shell/canvas family:
  - `color.bg.canvas` / `color.bg.shell`
- Promo card base surface:
  - `color.bg.surface` or `color.bg.surface-elevated`
- Card borders:
  - `color.border.subtle`

Text:
- Primary headings: `color.text.primary`
- Supporting copy and metadata: `color.text.secondary` / `color.text.muted`

Actions:
- Input background: `color.bg.input`
- Input border: `color.border.subtle`
- Focus ring: `color.border.focus`
- Primary action should follow `color.action.primary.*` token family

Special bright trust card:
- May use a lavender-emphasis treatment aligned to design references
- Ensure text contrast remains legible with `color.text.inverse`-style usage when using bright backgrounds

## Typography
- Heading emphasis (promo title): `font.display` (`Manrope`)
- Body, labels, legal links: `font.body` (`Inter`)
- Promo heading scale should feel like a section subhead, not hero size
- Utility/legal text should stay compact (`type.meta` / `type.caption`-like density)

## Accessibility and interaction
- All links and buttons require visible `focus-visible` states.
- Input must have an accessible label (visible label preferred; aria-label acceptable only if design constraints require).
- Do not rely on color alone for interactive states.
- Maintain readable contrast for muted legal text on dark backgrounds.
- Social icon buttons (if present) need discernible labels (`aria-label`).

## Behavior and validation notes
- If newsletter submission is implemented as a mutation, use a Server Action with Zod validation before side effects.
- For V1, UI-only footer form is acceptable if backend behavior is not yet in scope, but do not imply successful subscription without real handling.
- Preserve layout stability for loading/error states in the email input/button row.

## Explicit non-goals
- No full sitemap mega-footer in this version.
- No dense multi-column company/product/resources footer taxonomy.
- No animated marquee or auto-rotating promo content.
- No requirement to render footer in admin dashboard shell.

## Acceptance criteria
- Footer matches homepage reference structure:
  - two-card promo row
  - compact legal/utility row below
- Desktop promo row uses asymmetric two-column layout (`2fr/1fr` style balance).
- Mobile footer collapses cleanly with readable spacing and no clipped actions.
- Color and typography usage follows semantic tokens and brand font rules.
- Interactive elements are keyboard-focusable with visible focus treatment.
- Footer remains visually subordinate to hero and main content.
