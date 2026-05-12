import type { DateRange } from "./types";

export type ExperienceItem = {
  slug: string;
  title: string;
  organizationLabel: string;
  domain: string;
  dateRange?: DateRange;
  summary: string;
  responsibilities: string[];
  publicSafeNotes: string[];
  needsManualInput?: string[];
};

export const professionalExperience = [
  {
    slug: "senior-qa-engineering",
    title: "Senior QA Engineer",
    organizationLabel: "Confidential employer or client",
    domain: "Software product delivery",
    summary:
      "Senior quality engineering work spanning automation design, risk analysis, release confidence, and cross-functional collaboration.",
    responsibilities: [
      "Define and maintain quality approaches that fit product and delivery constraints.",
      "Design automated checks with emphasis on reliability, readability, and fast feedback.",
      "Support teams with risk-based test planning, exploratory testing, and technical review.",
      "Translate quality risks and trade-offs into clear engineering and delivery conversations.",
    ],
    publicSafeNotes: [
      "Do not publish employer, client, product, or internal project names until explicitly approved.",
      "Add specific technologies only after confirming they are safe to mention publicly.",
    ],
    needsManualInput: [
      "Approved public company or client label, if any.",
      "Date range.",
      "Public-safe technology stack.",
      "Verified outcomes or references.",
    ],
  },
] as const satisfies readonly ExperienceItem[];
