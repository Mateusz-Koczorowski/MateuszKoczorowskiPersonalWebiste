# Design Principles

## Purpose

This document defines the visual and interaction principles for the website before a full design sandbox is implemented. It complements `docs/branding.md`, `docs/ux-design.md`, `docs/09-accessibility.md`, and `docs/10-responsive-design.md`.

The site should feel like a senior quality engineer's technical workspace: precise, calm, readable, and premium without becoming decorative or generic.

## Core Direction

- Dark technical premium aesthetic.
- Minimal engineering-focused interface language.
- Strong typography and disciplined hierarchy.
- Generous whitespace around important ideas.
- Subtle borders, surfaces, and state changes.
- Accessibility-first color contrast and focus behavior.
- Mobile-first layout decisions.
- Evidence-led content presentation.

## Brand Feeling

The visual system should communicate:

- Senior engineering judgment.
- Quality strategy and automation depth.
- Practical AI-assisted QA workflows with human review.
- Trust, restraint, and clarity.
- Calm confidence rather than exaggerated self-promotion.

Avoid visuals that suggest:

- Startup pitch decks.
- Generic AI portfolio pages.
- Neon cyberpunk dashboards.
- Decorative gradient overload.
- Dense enterprise admin screens.
- Stock-like personal branding with little technical specificity.

## Design Tenets

### Typography Leads

Type should carry the brand before decoration does. The name, role, section headings, and technical labels should create a confident rhythm. Use scale, weight, spacing, and line length before adding extra visual elements.

### Contrast Is Functional

High contrast is required for body text, navigation, controls, focus states, and important metadata. Softer contrast may be used for borders, dividers, and quiet supporting text only when readability remains strong.

### Surfaces Are Subtle

Use dark surfaces to organize information, not to decorate every block. Prefer quiet panels, thin borders, and low-contrast background changes. Avoid card-heavy pages where every section feels boxed.

### Whitespace Signals Seniority

Give primary content room to breathe. Avoid filling the viewport just because space exists. Wide layouts should improve scanning, not stretch paragraphs or inflate decorative areas.

### Content Is Public-Safe

Design must support the existing content rules: no fake metrics, no confidential names, no unsupported claims, and clear separation between published and planned content.

### Motion Is Secondary

Motion may clarify state, reveal hierarchy, or make transitions feel polished. It must never be required to understand content and must respect reduced-motion preferences.

## Hero Direction

The hero should be the strongest personal-branding moment on the site.

Required direction:

- Large name as the primary visual anchor: `Mateusz Koczorowski`.
- Clear title near the name: `Senior QA Engineer`.
- Concise positioning statement from the profile content.
- Profile image on the left side on desktop.
- Profile image above the text content on mobile.
- CTA buttons for primary contact and secondary exploration.
- Dark technical premium tone with strong type, restrained surface treatment, and no decorative gradient overload.

The hero should feel personal but still engineering-focused. The profile image should not be buried as a small avatar; it should be an intentional first-viewport brand asset. The image treatment should be precise: stable aspect ratio, subtle border, controlled shadow, and enough contrast against the page background.

## Visual Restraint Rules

- Use one primary accent at a time in a given section.
- Keep gradient use rare, low-opacity, and atmospheric rather than colorful.
- Do not place every section inside a large floating card.
- Do not rely on glowing effects as the main premium signal.
- Do not overuse badges; they should carry real taxonomy or status.
- Do not introduce decorative AI motifs unless they support a specific content idea.
- Keep icons small, clear, and functional.

## Accessibility Principles

- Follow WCAG 2.2 AA contrast expectations for text and controls.
- Maintain visible focus states against all surfaces.
- Do not encode status or meaning with color alone.
- Use semantic sectioning and ordered headings.
- Preserve keyboard access for navigation and CTAs.
- Respect reduced-motion preferences.
- Keep touch targets comfortable on mobile.

## Future Sandbox Goals

The future design sandbox should validate:

- Type scale across mobile, tablet, desktop, and wide desktop.
- Real contrast values for every proposed color pairing.
- Hero composition with real profile imagery.
- Reusable section and card patterns using actual content.
- Navigation density with active and planned routes.
- Button, link, focus, and hover states.
- Image behavior without layout shift.
- No horizontal overflow at narrow widths.
