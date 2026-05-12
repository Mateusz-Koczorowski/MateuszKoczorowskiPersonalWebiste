# Story 004: CI Pipeline

## Goal

Add a practical GitHub Actions pipeline that verifies the website foundation on pull requests and pushes to `main`.

## Scope

- GitHub Actions workflow for repository quality checks.
- Documentation for current CI behavior and future extension points.
- Conditional test hooks that do not fail while test tooling is not configured.

## Acceptance Criteria

- CI runs on `pull_request` and pushes to `main`.
- CI uses npm and installs dependencies with `npm ci`.
- CI uses dependency caching where appropriate.
- CI runs typechecking, linting, Prettier format checks, and the production build.
- Unit tests run only when a `test` script exists.
- Playwright tests run only when Playwright configuration exists.
- Missing unit or Playwright test configuration does not fail the pipeline.
- Documentation explains what CI checks and how to extend it later.
- The workflow stays focused on CI/CD foundation and does not introduce website UI changes.

## Status

Implemented.
