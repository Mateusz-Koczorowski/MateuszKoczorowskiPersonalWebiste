# Content Management

## Purpose

Website content is stored as TypeScript objects in `content/`. The current project intentionally avoids a CMS, MDX pipeline, or extra dependencies until the content model and public website sections are stable.

## Files

- `content/profile.ts` contains the primary identity, positioning, summary, and compatibility exports used by the current home page.
- `content/navigation.ts` defines active and planned navigation items.
- `content/expertise.ts` defines focus areas and future expertise detail paths.
- `content/skills.ts` defines editable technical skill entries.
- `content/experience.ts` defines company-level experience records with nested anonymized project contributions, project responsibilities, tech stacks, challenges, impact notes, tags, and confidentiality notes.
- `content/projects.ts` defines sanitized case study previews for future detail pages and can later reference the project contribution slugs from `content/experience.ts`.
- `content/speaking.ts` defines talks, workshops, articles, and community sessions.
- `content/writing.ts` defines technical articles, publication references, and article links.
- `content/mentoring.ts` defines mentoring topics and boundaries.
- `content/education.ts` contains public education details.
- `content/contact.ts` contains contact and social links.
- `content/languages.ts` contains language entries.
- `content/types.ts` contains shared content types.
- `content/index.ts` re-exports the content model for future pages and components.

## Editing Rules

- Keep content concrete, technical, and public-safe.
- Do not add confidential employer, client, product, repository, environment, or project names without explicit approval.
- Do not invent metrics, dates, outcomes, seniority claims, certifications, event names, or technologies.
- Use anonymized company and project labels based on domains, such as `SaaS platform`, `web application`, or `QA workflow`.
- Keep internal review needs marked with `needsDetail`, `needsManualInput`, or `needsConfirmation` when more public detail is required.
- Prefer short, scannable summaries that can be reused on mobile layouts.
- Add final routes only when the corresponding pages exist.

## Experience Model

Experience should follow this hierarchy:

- Company or confidential company group
- Role/title and employment dates
- Short company/context description
- Projects worked on under that company
- Project challenge, responsibilities, tech stack, impact, tags, and confidentiality note

Project names must stay anonymized until public approval exists. Impact copy should stay qualitative unless a metric is verified and safe to publish.

## Case Study Template

Every case study should keep these public-safe sections:

- Problem
- Constraints
- Approach
- Trade-offs
- Public-safe outcome
- Future detail page note

Before publishing a detailed case study, review it for confidentiality, unsupported claims, and accidental client identification.

## Future Expansion

The TypeScript content layer can later move to MDX, local content collections, or a CMS. Until then, the typed objects give the site a stable editing surface without adding unnecessary tooling.
