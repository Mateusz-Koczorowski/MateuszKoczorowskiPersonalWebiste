# Story 002: Content Foundation

## Goal

Create the first structured content model for focus areas, case studies, speaking, and community involvement.

## Acceptance Criteria

- Content model supports public-safe descriptions.
- Case study template includes problem, constraints, approach, trade-offs, and public-safe outcome.
- Speaking entries can represent talks, workshops, articles, and community sessions.
- Content avoids fabricated metrics and confidential identifiers.
- Content structure supports semantic headings, sections, articles, and descriptive link text.
- Content guidance includes mobile-first scanning and avoids copy that depends on desktop-only layout.

## Implementation Notes

- Structured TypeScript content objects live in `content/`.
- Public-safe case study previews use anonymized domain names.
- Review fields mark details that still need manual approval or confirmation.
- Content management guidance lives in `docs/content-management.md`.

## Status

Implemented.
