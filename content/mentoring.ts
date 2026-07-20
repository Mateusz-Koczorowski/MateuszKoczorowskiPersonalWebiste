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
    slug: "automation-mentoring",
    title: "Automation Testing Mentoring",
    activityType: "technical-review",
    status: "published",
    summary:
      "Support for QA engineers improving Cypress, Playwright, Git fundamentals, test architecture, maintainability, and practical automation ownership. Scope and depth are adapted to each mentee's starting point rather than delivered as a fixed curriculum.",
    suitableFor: [
      "QA engineers",
      "Automation engineers",
      "Engineers moving into quality-focused roles",
    ],
    topics: [
      "automation architecture",
      "test maintainability",
      "Git fundamentals",
      "technical judgment",
    ],
    boundaries: [
      "Mentoring content should stay educational and should not disclose employer-specific processes.",
      "Proprietary code and internal project details are not reviewed publicly.",
    ],
    needsManualInput: ["Availability", "Preferred mentoring format"],
  },
  {
    slug: "qa-recruitment-support",
    title: "QA Recruitment Support",
    activityType: "technical-review",
    status: "published",
    summary:
      "Technical recruitment support for QA engineering roles, including practical skill assessment and engineering-focused discussion.",
    suitableFor: ["QA teams", "Hiring teams", "Engineering organizations"],
    topics: ["technical recruitment", "QA assessment", "automation skill review"],
    boundaries: [
      "Candidate and company details remain confidential.",
      "Public content should describe the contribution pattern, not hiring decisions.",
    ],
    needsManualInput: ["Approved public wording for recruitment involvement"],
  },
  {
    slug: "ai-qa-knowledge-sharing",
    title: "AI-focused QA Knowledge Sharing",
    activityType: "workshop-support",
    status: "published",
    summary:
      "Knowledge sharing and consultation around practical AI-assisted QA workflows, delivered internally and inside client engineering organizations, including support for AI bootcamp initiatives. Mentoring covers agent and workflow design, context strategy, and optimising token consumption so AI use stays economical at team scale.",
    suitableFor: ["QA engineers", "Technical leads", "Internal learning programs"],
    topics: [
      "AI-assisted QA",
      "agent and workflow design",
      "context strategy",
      "token-cost optimisation",
    ],
    boundaries: [
      "AI examples must be reviewed for accuracy and confidentiality.",
      "Public materials should use sanitized or synthetic examples.",
    ],
    needsManualInput: ["Approved public references to internal AI bootcamp materials"],
  },
] as const satisfies readonly MentoringArea[];
