# Backlog

## Now

- Scaffold Next.js, TypeScript, Tailwind, shadcn/ui conventions, Framer Motion, ESLint, and Prettier.
- Add initial documentation set.
- Add semantic home page foundation.
- Add GitHub Actions CI for install, typecheck, lint, format check, build, and configured tests.
- Add a dedicated homepage hero design sandbox prototype.

## CI Foundation Acceptance Criteria

- Pull requests and pushes to `main` run the baseline quality workflow.
- The workflow uses the repository package manager and lockfile.
- Missing test tooling does not fail CI before tests are configured.
- CI documentation explains current checks and future extension points.

## Next

- Configure `NEXT_PUBLIC_SITE_URL` in the deployment environment for sitemap and robots output.
- Wire the hero sandbox CTA destinations into any future routes when they are promoted from prototype to production pages.
- Wire the full navigation model into implemented routes as pages are added.
- Define reusable section and content-card components.
- Add first published sanitized case study content after manual review.
- Add accessibility test setup.
- Add responsive smoke tests for core pages.
- Add a dedicated contact route only if the homepage contact section stops being sufficient.

## Later

- MDX or content collection pipeline.
- Speaking archive.
- Writing index.
- RSS feed.
- Analytics with privacy review.
- Automated visual regression checks.
- Lighthouse or equivalent release checks when production content and assets stabilize.
