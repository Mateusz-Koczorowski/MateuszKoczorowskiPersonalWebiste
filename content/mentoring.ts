import type { ContentStatus } from "./types";

export type MentoringArea = {
  slug: string;
  title: string;
  activityType: "career-mentoring" | "technical-review" | "workshop-support";
  status: ContentStatus;
  summary: string;
  suitableFor: string[];
  topics: string[];
  boundaries: string[];
  needsManualInput?: string[];
};

export const mentoringAreas = [
  {
    slug: "qa-career-growth",
    title: "QA career growth",
    activityType: "career-mentoring",
    status: "planned",
    summary:
      "Support for QA engineers who want to move toward stronger technical judgment, automation ownership, and clearer communication.",
    suitableFor: [
      "QA engineers",
      "Automation engineers",
      "Engineers moving into quality-focused roles",
    ],
    topics: ["technical judgment", "automation ownership", "communication"],
    boundaries: [
      "Mentoring content should stay educational and should not disclose employer-specific processes.",
      "Add availability and format only when they are confirmed.",
    ],
    needsManualInput: ["Availability", "Format", "Public-safe examples"],
  },
  {
    slug: "automation-review",
    title: "Automation review",
    activityType: "technical-review",
    status: "planned",
    summary:
      "Guidance on improving test structure, maintainability, and feedback value without treating automation as a goal by itself.",
    suitableFor: ["QA leads", "Automation owners", "Product engineering teams"],
    topics: ["test structure", "maintainability", "feedback value"],
    boundaries: [
      "Avoid reviewing proprietary code publicly.",
      "Use sanitized examples or open-source examples for future content.",
    ],
    needsManualInput: ["Review format", "Availability", "Example material"],
  },
] as const satisfies readonly MentoringArea[];
