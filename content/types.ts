export type ContentStatus = "draft" | "planned" | "published";

export type LinkTarget = {
  label: string;
  href: string;
  description?: string;
  isPlaceholder?: boolean;
};

export type ContentNote = {
  label: string;
  value: string;
};

export type DateRange = {
  start: string;
  end?: string;
  isCurrent?: boolean;
  isApproximate?: boolean;
  displayLabel?: string;
};

export type SkillLevel = "working" | "advanced" | "lead";

export type SkillCategory =
  | "automation"
  | "strategy"
  | "testing"
  | "ai"
  | "delivery"
  | "communication"
  | "tooling";

export type Skill = {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  summary: string;
  keywords?: string[];
};

export type ProjectSection = {
  heading: string;
  body: string;
  needsDetail?: boolean;
};

export type LanguageProficiency = "native" | "professional" | "working" | "learning";

export type ProjectDomain =
  | "SaaS platform"
  | "Web application"
  | "QA workflow"
  | "Software product delivery"
  | "Add approved domain";

export type ConfidentialityLevel = "public-safe" | "sanitized" | "needs-review";
