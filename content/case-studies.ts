/**
 * Extra copy for case study pages, keyed by project slug from content/experience.ts.
 * Pages without an entry fall back to the project's own summary and impact.
 *
 * `story` sections render only when present. Add "How the migration went" and
 * "What I would do differently" once written: hiring managers read those closely.
 */
export type CaseStudyHighlights = {
  title?: string;
  lead?: string;
  results?: { value: string; label: string }[];
  story?: { heading: string; body: string }[];
};

export const caseStudyHighlights: Record<string, CaseStudyHighlights> = {
  "ai-driven-clinical-trials-platform": {
    title: "Scaling regression on a clinical trials platform",
    lead: "An AI-driven clinical trials product held to quality expectations typical for pharmaceutical and biotech work. I grew end-to-end coverage of critical paths, then led the move of the suite from Cypress to Playwright.",
    results: [
      { value: "About 20% → 80%", label: "automated coverage of critical user paths." },
      {
        value: "About 75% shorter regression",
        label: "after the Cypress to Playwright migration, with the same coverage.",
      },
    ],
  },
};
