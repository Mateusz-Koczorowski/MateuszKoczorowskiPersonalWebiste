export type EducationItem = {
  slug: string;
  institution: string;
  credential: string;
  field?: string;
  dateRange?: string;
  status: "verified" | "in-progress" | "needs-input";
  notes?: string;
  focusAreas?: string[];
};

export const education = [
  {
    slug: "masters-computer-science-wsb-merito",
    institution: "WSB Merito University",
    credential: "Master's Degree",
    field: "Computer Science",
    dateRange: "2026 - Present",
    status: "in-progress",
    notes:
      "Research focus: comparative analysis of AI agents, including OpenAI Codex and Claude Code, in automated software testing generation across multiple testing levels and QA workflows.",
    focusAreas: [
      "AI-assisted test generation",
      "Automation engineering",
      "AI agents in software quality processes",
      "Comparison of AI-driven development workflows",
    ],
  },
  {
    slug: "engineering-computer-science-wsb-merito",
    institution: "WSB Merito University",
    credential: "Bachelor of Engineering",
    field: "Computer Science",
    dateRange: "Completed 2025",
    status: "verified",
    notes:
      "Engineering thesis: GlukoMate, an application supporting diabetes management and monitoring workflows.",
    focusAreas: [],
  },
] as const satisfies readonly EducationItem[];
