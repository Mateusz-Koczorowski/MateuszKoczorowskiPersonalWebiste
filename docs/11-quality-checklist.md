# Quality Checklist

Use this checklist before every release and before merging implementation work that changes user-facing behavior.

## Definition of Done

- The implementation matches the story scope and does not introduce unrelated redesign work.
- Accessibility acceptance criteria are satisfied.
- Responsive acceptance criteria are satisfied.
- Semantic HTML is used for structure and interactions.
- Keyboard navigation and visible focus states are verified.
- Color contrast is checked for new UI.
- SEO metadata impact is considered for new pages or content.
- Performance impact is considered for new images, scripts, animation, and dependencies.
- Public content avoids confidential details, fake metrics, and unsupported claims.
- Required checks pass locally or the reason they could not run is documented.

## Manual QA

- Load the page at mobile, tablet, desktop, and wide desktop widths.
- Navigate the page using only the keyboard.
- Confirm focus order is logical and focus styles are visible.
- Confirm links and buttons have clear names and correct behavior.
- Check that headings create a useful document outline.
- Confirm content remains readable with reduced motion enabled.
- Confirm there is no horizontal overflow on narrow screens.
- Check that all meaningful images have suitable alternative text.
- Confirm metadata, robots, sitemap, and canonical assumptions remain correct for changed routes.

## Automated Checks

Current baseline checks:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Future checks should stay practical and focused:

- Playwright for core rendering, keyboard navigation, and responsive smoke tests.
- axe-core or similar accessibility checks for common violations.
- Lighthouse or similar checks for performance, SEO, best practices, and accessibility signals.
- Visual regression checks only after the design surface is stable enough to justify the maintenance cost.

Automated checks do not replace manual review. They should catch regressions and common issues, while human review confirms content quality, semantics, interaction intent, and judgment.

## Testing Strategy

- Start with linting, typechecking, and production builds as the required baseline.
- Add Playwright smoke tests when core pages and navigation stabilize.
- Add accessibility tests around landmarks, headings, focusable controls, accessible names, and obvious contrast regressions.
- Add Lighthouse checks when production-like pages and assets exist.
- Keep tests close to user-visible behavior instead of testing implementation details.
- Avoid adding new tooling until it protects a real risk or repeated workflow.
