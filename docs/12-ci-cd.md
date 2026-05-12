# CI/CD Foundation

## Purpose

GitHub Actions protects the repository from regressions before changes merge to `main`. The pipeline is intentionally small: it runs the checks already supported by the project and leaves room for future test layers when they are configured.

## Triggers

CI runs on:

- Pull requests targeting the repository.
- Pushes to the `main` branch.

## Package Manager

This repository uses npm because `package-lock.json` is present. CI installs dependencies with `npm ci` for reproducible installs and uses the npm cache provided by `actions/setup-node`.

## Required Checks

The baseline workflow runs:

- `npm ci` to install dependencies from the lockfile.
- `npm run typecheck` to validate TypeScript without emitting files.
- `npm run lint` to run ESLint.
- `npm run format:check` to validate Prettier formatting.
- `npm run build` to confirm the Next.js production build succeeds.

These checks should remain the minimum merge bar for implementation work.

## Optional Checks

The workflow also includes guarded test steps:

- Unit tests run only when a `test` script exists in `package.json`.
- Playwright tests run only when a `playwright.config.js`, `playwright.config.ts`, `playwright.config.mjs`, or `playwright.config.cjs` file exists.

Missing test scripts or missing Playwright configuration do not fail CI. Once test tooling is added, the same workflow can start running it without a larger CI redesign.

## Extending Later

Add new checks only when they protect a real project risk or repeated review task. Practical future additions include:

- A focused unit or component test runner with an `npm test` script.
- Playwright smoke tests for core rendering, keyboard navigation, and responsive behavior.
- Accessibility checks around landmarks, headings, focusable controls, and accessible names.
- Lighthouse or equivalent release checks after production content and assets stabilize.
- Deployment previews or production deployment after hosting, domains, and environment variables are defined.

Keep CI fast enough that contributors trust it and run the same commands locally before opening a pull request.
