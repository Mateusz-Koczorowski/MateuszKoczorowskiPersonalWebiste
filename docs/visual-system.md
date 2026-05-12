# Visual System

## Purpose

This document defines the reusable visual foundation for the future design sandbox: typography, colors, spacing, surfaces, and implementation token direction.

The current project uses Tailwind CSS v4 and CSS variables in `app/globals.css`. Future UI work should translate this document into tokens before building full sections.

## Typography System

Typography should be the primary brand signal.

Recommended font direction:

- Primary sans: a modern, highly readable interface typeface.
- Optional mono: a technical mono for small labels, metadata, code-like fragments, or quality-system details.
- Avoid novelty fonts and exaggerated futuristic faces.

Type roles:

- Display: hero name and major page title.
- Heading 1: page-level title when no display treatment is needed.
- Heading 2: major section heading.
- Heading 3: card and subsection heading.
- Body: primary reading text.
- Small: metadata, tags, captions, and status labels.
- Mono label: limited technical labels or system-style metadata.

Suggested scale:

- Display: `clamp(3rem, 8vw, 6.5rem)`, line-height `0.95-1.02`.
- H1: `clamp(2.5rem, 6vw, 4.5rem)`, line-height `1.02-1.08`.
- H2: `clamp(2rem, 4vw, 3.25rem)`, line-height `1.08-1.15`.
- H3: `1.25rem-1.5rem`, line-height `1.2-1.3`.
- Body large: `1.125rem-1.25rem`, line-height `1.6`.
- Body: `1rem`, line-height `1.6-1.75`.
- Small: `0.875rem`, line-height `1.45`.
- Micro: `0.75rem`, line-height `1.35`.

Typography rules:

- Do not scale text directly with viewport width beyond `clamp()` ranges.
- Keep letter spacing at `0` for most text.
- Use uppercase labels sparingly, with enough letter spacing only when readability improves.
- Keep line lengths around `60-75` characters for prose.
- Use weight changes and spacing before adding decoration.

## Color Palette

The palette should remain dark, technical, and premium. Accent colors guide attention; they should not dominate the page.

Recommended token direction:

- Background: near-black blue-gray.
- Background deep: darker page gradient or footer base.
- Surface: elevated dark blue-gray.
- Surface soft: lower-contrast panel surface.
- Border: cool low-contrast divider.
- Border strong: clearer divider for focus areas or active states.
- Text primary: near-white cool gray.
- Text secondary: muted cool gray with AA contrast on backgrounds.
- Text tertiary: quieter metadata color, used carefully.
- Primary accent: cyan or teal for focus rings and primary actions.
- Secondary accent: restrained green for supportive emphasis.
- Warning or review status: amber with dark text only where contrast is verified.
- Destructive: accessible red reserved for errors.

Current `app/globals.css` already points in the right direction with OKLCH tokens. Future implementation should refine exact values through contrast checks rather than expanding the palette.

## Color Usage Rules

- Page background should be the darkest layer.
- Cards and panels should be only slightly lighter than the background.
- Borders should separate surfaces without looking bright.
- Primary accent should be used for primary CTA, focus ring, and rare emphasis.
- Secondary accent should be used sparingly for supportive metadata.
- Do not combine many bright accents in one viewport.
- Avoid purple-blue gradient dominance, neon cyan overload, and generic AI-glow effects.
- Validate all text, control, icon, and focus combinations against WCAG 2.2 AA expectations.

## Surface System

Use four visual depths:

- Base: page background.
- Raised: cards, header surfaces, compact panels.
- Overlay: menus, dialogs, popovers.
- Emphasis: primary CTA or important active state.

Surface treatment:

- Thin borders define edges.
- Soft background contrast creates hierarchy.
- Shadows should be subtle and rare.
- Use radius consistently, normally `8px` or less.
- Avoid glassmorphism as a core visual style.

## Spacing Tokens

Base spacing should follow the layout scale in `docs/layout-rules.md`.

Recommended CSS variable direction:

- `--space-1: 0.25rem`
- `--space-2: 0.5rem`
- `--space-3: 0.75rem`
- `--space-4: 1rem`
- `--space-6: 1.5rem`
- `--space-8: 2rem`
- `--space-12: 3rem`
- `--space-16: 4rem`
- `--space-24: 6rem`
- `--space-32: 8rem`

Use spacing tokens consistently for gaps, padding, section rhythm, and card internals.

## Border And Radius Tokens

Recommended direction:

- Hairline border: `1px`.
- Strong divider: `1px` with higher contrast token.
- Focus ring: `2px` outline with `3px` offset.
- Small radius: `4px`.
- Default radius: `8px`.
- Large radius: `12px` only for media or larger panels when needed.

Cards should normally use default radius. Buttons may use default radius or slightly smaller radius depending on height.

## Hero Visual System

Hero composition should establish the personal brand immediately.

Visual ingredients:

- Large name in display type.
- Title close to the name, with high contrast.
- Short positioning statement with generous line-height.
- Profile image with stable aspect ratio.
- Primary and secondary CTA buttons.
- Optional concise metadata such as location or availability.

Desktop image treatment:

- Left-side image column.
- Portrait or square-ish crop with precise border.
- Subtle surface behind image only if it improves separation.
- Avoid heavy glow, dramatic blur, or decorative frames.

Mobile image treatment:

- Image above content.
- Controlled size so name and title remain visible quickly.
- No tiny avatar treatment.

## Section Visual Patterns

Intro section:

- Strong heading.
- Short text.
- Minimal or no cards.

Expertise grid:

- Reusable cards.
- Icon, title, summary, and theme tags.
- Two columns on tablet when readable, three on desktop only when content length supports it.

Case-study preview:

- Larger cards than skill cards.
- Emphasize problem, constraints, and approach.
- Keep status visible for draft or needs-review content.

Technical capability list:

- Denser layout.
- Skills grouped by category.
- Use compact metadata and tags.

Contact band:

- Simple, high-contrast call to action.
- Avoid newsletter-style marketing treatment.

## Implementation Readiness

Before building the sandbox, define or confirm:

- Final font choices.
- Exact OKLCH token values.
- Profile image source and crop behavior.
- Button variants.
- Card variants.
- Section spacing variables.
- Responsive container utilities.
- Contrast checks for every token pair.
- Reduced-motion behavior for any animations.
