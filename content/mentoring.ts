export type MentoringArea = {
  slug: string;
  title: string;
  summary: string;
  suitableFor: string[];
  boundaries: string[];
};

export const mentoringAreas = [
  {
    slug: "qa-career-growth",
    title: "QA career growth",
    summary:
      "Support for QA engineers who want to move toward stronger technical judgment, automation ownership, and clearer communication.",
    suitableFor: [
      "QA engineers",
      "Automation engineers",
      "Engineers moving into quality-focused roles",
    ],
    boundaries: [
      "Mentoring content should stay educational and should not disclose employer-specific processes.",
      "Add availability and format only when they are confirmed.",
    ],
  },
  {
    slug: "automation-review",
    title: "Automation review",
    summary:
      "Guidance on improving test structure, maintainability, and feedback value without treating automation as a goal by itself.",
    suitableFor: ["QA leads", "Automation owners", "Product engineering teams"],
    boundaries: [
      "Avoid reviewing proprietary code publicly.",
      "Use sanitized examples or open-source examples for future content.",
    ],
  },
] as const satisfies readonly MentoringArea[];
