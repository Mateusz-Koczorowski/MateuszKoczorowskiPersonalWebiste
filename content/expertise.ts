export type ExpertiseIcon = "automation" | "ai" | "strategy" | "studies" | "speaking";

export type ExpertiseArea = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ExpertiseIcon;
  themes: string[];
  futureDetailPath: string;
};

export const expertiseAreas = [
  {
    slug: "test-automation-architecture",
    title: "Test automation architecture",
    shortTitle: "Automation",
    description:
      "Reusable architecture for dependable automated checks across product, API, integration, and end-to-end layers.",
    icon: "automation",
    themes: [
      "Test pyramid decisions",
      "Maintainable end-to-end suites",
      "API and integration coverage",
      "Flakiness reduction",
    ],
    futureDetailPath: "/expertise/test-automation-architecture",
  },
  {
    slug: "ai-assisted-quality-workflows",
    title: "AI-assisted quality workflows",
    shortTitle: "AI workflows",
    description:
      "Human-reviewed AI support for test design, exploratory charters, risk analysis, documentation, and maintenance work.",
    icon: "ai",
    themes: [
      "Prompted test design",
      "Risk analysis support",
      "Review discipline",
      "Confidentiality-aware usage",
    ],
    futureDetailPath: "/expertise/ai-assisted-quality-workflows",
  },
  {
    slug: "quality-strategy",
    title: "Quality strategy",
    shortTitle: "Strategy",
    description:
      "Decision frameworks that connect release confidence, observability, defect prevention, and team operating models.",
    icon: "strategy",
    themes: [
      "Risk-based planning",
      "Release confidence",
      "Quality ownership",
      "Practical governance",
    ],
    futureDetailPath: "/expertise/quality-strategy",
  },
  {
    slug: "technical-case-studies",
    title: "Technical case studies",
    shortTitle: "Case studies",
    description:
      "Public, sanitized narratives that describe engineering problems, constraints, trade-offs, and outcomes without confidential details.",
    icon: "studies",
    themes: [
      "Problem framing",
      "Constraints and trade-offs",
      "Public-safe outcomes",
      "Reusable lessons",
    ],
    futureDetailPath: "/case-studies",
  },
  {
    slug: "speaking-and-community",
    title: "Speaking and community",
    shortTitle: "Community",
    description:
      "Talks, mentoring notes, and community contributions around pragmatic quality engineering.",
    icon: "speaking",
    themes: ["Technical talks", "Workshops", "Mentoring", "Knowledge sharing"],
    futureDetailPath: "/speaking",
  },
] as const satisfies readonly ExpertiseArea[];

export const focusAreas = expertiseAreas.map(({ title, description, icon }) => ({
  title,
  description,
  icon,
}));
