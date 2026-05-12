# UI Patterns

## Purpose

This document defines reusable component visual language for future implementation. It does not require building the components yet; it gives the design sandbox a clear foundation.

## Component Personality

Components should feel precise, quiet, and engineered. Prefer simple geometry, visible hierarchy, and trustworthy interaction states.

General rules:

- Border radius should stay modest, normally `8px` or less.
- Borders should be subtle but visible against dark surfaces.
- Shadows should be minimal and soft, used only to separate important layers.
- Icons should support scanning and action clarity.
- Text labels should be concise and specific.
- Interactive states must be accessible by keyboard and pointer.

## Buttons

Use buttons for actions and links for navigation.

Primary button:

- Use for the main hero CTA or the most important page action.
- High contrast background using the primary accent.
- Dark foreground text that passes contrast on the accent.
- Clear hover, active, disabled, and focus states.

Secondary button:

- Use for secondary navigation such as exploring focus areas or case studies.
- Transparent or subtle surface background.
- Visible border.
- Foreground text with strong contrast.

Tertiary link button:

- Use sparingly for lower-priority actions.
- Text-first treatment with a small icon if useful.
- Must remain visually discoverable without relying on hover.

Button sizing:

- Minimum touch target: `44px`.
- Mobile CTAs may stack or become full width.
- Desktop CTAs may sit inline with consistent gaps.

## Links

Links should be recognizable through text treatment, underline, icon, or surrounding context. Do not rely on color alone.

Use descriptive link text. Avoid vague labels such as "learn more" when the destination can be named.

## Navigation

Navigation should be simple and restrained until the content library grows.

- Keep active routes visually distinct.
- Planned routes should not look like broken functionality.
- Use a compact header with enough touch space.
- Avoid hover-only dropdowns.
- Mobile navigation must be keyboard accessible and clear when expanded.

## Cards

Use cards for repeated content such as expertise areas, skills, case-study previews, speaking entries, and mentoring topics.

Default card anatomy:

- Optional icon or category label.
- Clear title.
- Concise summary.
- Optional tags or metadata.
- Optional link or CTA.

Visual treatment:

- Dark surface slightly lighter than the page background.
- Thin border.
- Modest radius.
- Internal padding from `24px` mobile to `32px` desktop.
- Subtle hover state only when the whole card is interactive.
- Focus state must be visible if the card contains or becomes a link.

Avoid:

- Cards inside cards.
- Decorative cards that do not organize content.
- Overuse of badges and chips.
- Equal-height cards that create unnatural empty space.

## Reusable Card Types

Expertise card:

- Best for focus areas.
- Use a concise title, summary, and 3-4 themes.
- Icon is functional and small.
- Should scan well in a grid.

Case-study preview card:

- Best for future sanitized case studies.
- Include domain, status, summary, and tags.
- Make placeholder or needs-review status visible without making the content feel broken.
- Avoid fake metrics.

Skill card:

- Best for compact capability summaries.
- Include skill name, category, level, and keywords.
- Should feel denser than a case-study card.

Speaking or mentoring card:

- Include format, audience, summary, and topic tags.
- Use status labels for planned content.

## Tags And Badges

Tags are for taxonomy. Badges are for status.

Tag treatment:

- Low-contrast surface.
- Subtle border.
- Small type.
- Enough contrast to remain readable.

Status badge treatment:

- More distinct than a tag.
- Never communicate state with color alone.
- Use labels such as `Draft`, `Planned`, `Needs review`, or `Public-safe`.

## Forms And Contact

Contact UI is deferred, but future patterns should follow:

- Clear labels, not placeholder-only fields.
- Visible validation messages.
- Helpful error text.
- Keyboard-friendly focus order.
- High-contrast inputs with clear borders.
- Disabled and loading states that remain legible.

## Technical Lists

Use structured lists for themes, responsibilities, and constraints.

Visual rules:

- Keep bullets restrained.
- Use spacing to group related items.
- Prefer clear text over decorative icons for dense technical content.
- Use icons only when they improve scanning.

## Focus States

Focus states are part of the visual identity. They should be crisp and visible:

- Use the primary accent or a high-contrast ring.
- Maintain at least `2px` visible outline.
- Offset focus rings so they are not hidden by borders.
- Ensure rings work on page background, cards, buttons, and images.

## Motion Patterns

Acceptable motion:

- Short transitions for hover, focus, and active states.
- Subtle entrance motion for section reveal when reduced motion allows.
- Small transform or opacity changes that do not affect layout stability.

Avoid:

- Large decorative motion.
- Motion required to reveal essential content.
- Continuous animated backgrounds.
- Parallax as a main visual effect.
