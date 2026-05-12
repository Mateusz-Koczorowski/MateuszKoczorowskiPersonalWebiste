# Technical Architecture

## Framework

Next.js App Router provides routing, metadata, server components, and production build tooling. TypeScript strict mode is enabled.

## Styling

Tailwind CSS v4 is used through `@tailwindcss/postcss`. Design tokens live in `app/globals.css` using CSS variables compatible with shadcn/ui conventions.

## Components

Reusable components live in `components/`. shadcn/ui primitives live in `components/ui/` and should remain small, accessible, and composable.

## Content

Typed starter content lives in `content/`. As the site grows, the content layer can evolve into MDX, a local content collection, or a CMS-backed model.

Content editing rules and the current file map are documented in `docs/content-management.md`.

## Motion

Framer Motion is isolated behind reusable components where practical. Animations must respect reduced-motion preferences.

## Quality Foundation

Implementation work must follow the accessibility, responsive design, semantic HTML, keyboard navigation, SEO, and performance rules in:

- `docs/09-accessibility.md`
- `docs/10-responsive-design.md`
- `docs/11-quality-checklist.md`

Every implementation story should include accessibility and responsive acceptance criteria before UI work starts.

## Quality Checks

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- Future Playwright, axe-core, Lighthouse, or similar checks in `tests/`

## Deployment

The repository is compatible with modern Next.js hosting. Production domains, analytics, and environment variables are intentionally not configured in the scaffold.
