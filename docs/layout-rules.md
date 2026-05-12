# Layout Rules

## Purpose

This document defines page structure, responsive behavior, spacing, and section composition for future UI implementation. It should be read with `docs/10-responsive-design.md` before building layouts.

## Layout Philosophy

Start with a mobile-first reading flow, then add structure only where it improves comprehension. The site should feel spacious, exact, and technical. Layout decisions should make the content easier to scan, not make the page look busier.

## Page Shell

Use a consistent page shell:

- `header` for navigation and primary brand link.
- `main` for page content.
- `section` for each major content band.
- `footer` for secondary navigation and contact details.

The page shell should keep content centered with responsive side padding. Avoid full-width text blocks on wide screens.

## Width System

Use constrained content widths:

- Reading width: `min(100%, 44rem)` for body copy and prose-heavy blocks.
- Standard content width: `min(100%, 72rem)` for sections with cards or split layouts.
- Wide content width: `min(100%, 88rem)` only when comparison, grids, or the hero composition need it.

Never allow paragraphs to stretch across the full viewport on desktop or wide desktop.

## Spacing System

Use a consistent spacing scale based on 4px increments:

- `4px`: hairline offsets, tiny gaps.
- `8px`: compact icon and label gaps.
- `12px`: dense metadata group spacing.
- `16px`: default component internal spacing.
- `24px`: card padding on mobile and standard content gaps.
- `32px`: section inner gaps and desktop card padding.
- `48px`: mobile section spacing.
- `64px`: tablet section spacing.
- `96px`: desktop section spacing.
- `128px`: wide hero or major editorial spacing when the content can support it.

Spacing should scale by purpose, not by viewport alone. Increase spacing at larger breakpoints when the content benefits from more air.

## Responsive Breakpoints

Follow the existing project breakpoints:

- Mobile: default styles from `320px`.
- Tablet: `768px` and wider.
- Desktop: `1024px` and wider.
- Wide desktop: `1280px` and wider.

Breakpoints are planning targets. Add them only when layout, density, or interaction needs to change.

## Mobile Rules

- Use a single-column layout by default.
- Keep section padding generous but not theatrical.
- Place the profile image above hero content.
- Keep CTAs stacked or wrapped with full-width options when needed.
- Avoid multi-column card grids.
- Make metadata and tags wrap naturally.
- Preserve readable line lengths with side padding.
- Ensure no horizontal scrolling appears at `320px`.

## Tablet Rules

- Introduce two-column layouts only when both columns remain readable.
- Allow card grids with two columns for short, parallel items.
- Keep hero image and content balanced if space allows, but do not force a cramped split.
- Increase section spacing before increasing card count.

## Desktop Rules

- Use split layouts for the hero and selected high-value sections.
- Place the hero profile image on the left and content on the right.
- Allow two- or three-column grids for reusable cards.
- Keep important CTAs close to primary copy.
- Use empty space intentionally around the hero and major sections.
- Avoid long rows of small cards that feel like a dashboard.

## Wide Desktop Rules

- Constrain content width instead of stretching.
- Use wide space for alignment, image scale, or comparison, not longer text lines.
- Keep the next section slightly visible below first-viewport hero compositions where practical.
- Avoid increasing font sizes just because the viewport is wide.

## Section Hierarchy

Use a predictable hierarchy:

1. Hero section.
2. Focus or expertise overview.
3. Evidence or case-study preview.
4. Skills or methods.
5. Speaking, mentoring, or community.
6. Contact or next step.

Not every page needs every section. Each section should have a clear job and should avoid repeating the same visual pattern immediately after itself.

## Section Pattern

Default section structure:

- Optional quiet eyebrow or metadata label.
- Strong heading.
- Concise introduction with readable line length.
- Content area using cards, lists, or split layout.
- Optional CTA when it gives the visitor a useful next step.

Sections should be full-width bands or unframed layouts with constrained inner content. Use cards for repeated items, not as wrappers around every section.

## Hero Layout Rules

Mobile:

- Profile image first.
- Name and title below image.
- Positioning statement below title.
- CTA group below primary copy.
- Supporting metadata after CTAs when needed.

Desktop:

- Two-column composition.
- Profile image on the left.
- Name, title, positioning, and CTAs on the right.
- Image column should feel intentional, not like a small avatar rail.
- Keep the hero tall enough to feel like a first-viewport brand moment while still hinting at the next section.

## Grid Rules

- Use grids for comparable repeated content.
- Use lists for sequences, process, or dense technical detail.
- Use split layouts for one primary argument plus supporting evidence.
- Keep card heights naturally aligned when content lengths are similar.
- Do not force equal heights when it creates awkward whitespace.

## Image Rules

- Define explicit aspect ratios for profile and content images.
- Prevent layout shift from late-loading media.
- Use responsive image sizing.
- Keep image treatments consistent with the dark technical system.
- Avoid blurred, overly cropped, or purely atmospheric images when the content needs a real personal signal.
