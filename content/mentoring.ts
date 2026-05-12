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
      "Support for QA engineers improving Cypress, Playwright, test architecture, maintainability, and practical automation ownership.",
    suitableFor: [
      "QA engineers",
      "Automation engineers",
      "Engineers moving into quality-focused roles",
    ],
    topics: ["automation architecture", "test maintainability", "technical judgment"],
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
      "STX Next internal knowledge sharing and consultation around practical AI-assisted QA workflows, including support for AI bootcamp initiatives.",
    suitableFor: ["QA engineers", "Technical leads", "Internal learning programs"],
    topics: ["AI-assisted QA", "prompt engineering", "workflow optimization"],
    boundaries: [
      "AI examples must be reviewed for accuracy and confidentiality.",
      "Public materials should use sanitized or synthetic examples.",
    ],
    needsManualInput: ["Approved public references to internal AI bootcamp materials"],
  },
  {
    slug: "talent-navigator",
    title: "Talent Navigator Participation",
    activityType: "career-mentoring",
    status: "published",
    summary:
      "Participation in a high-potential development initiative focused on leadership, growth, collaboration, and broader organizational impact.",
    suitableFor: ["Engineering organizations", "Leadership development programs"],
    topics: ["leadership growth", "collaboration", "organizational impact"],
    boundaries: ["Internal program details should remain high-level unless explicitly approved."],
    needsManualInput: ["Approved date range or cohort details"],
  },
] as const satisfies readonly MentoringArea[];
