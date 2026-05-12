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
    slug: "test-automation",
    title: "Test Automation",
    shortTitle: "Automation",
    description:
      "Designing maintainable automated checks across web, API, integration, and end-to-end layers so feedback is fast, readable, and trusted.",
    icon: "automation",
    themes: [
      "Cypress and Playwright",
      "Framework architecture",
      "Stable selectors and fixtures",
      "Regression coverage",
    ],
    futureDetailPath: "/expertise/test-automation-architecture",
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering",
    shortTitle: "Quality",
    description:
      "Building quality practices around risk, product behavior, exploratory testing, release confidence, and continuous improvement.",
    icon: "strategy",
    themes: ["Quality ownership", "Risk-based testing", "Exploratory testing", "Test planning"],
    futureDetailPath: "/expertise/quality-engineering",
  },
  {
    slug: "api-integration-testing",
    title: "API & Integration Testing",
    shortTitle: "API testing",
    description:
      "Validating service contracts, data flows, integrations, and edge cases with API-focused checks and technical investigation.",
    icon: "automation",
    themes: ["REST APIs", "Postman", "Backend validation", "Data consistency"],
    futureDetailPath: "/expertise/api-integration-testing",
  },
  {
    slug: "ci-cd-delivery-quality",
    title: "CI/CD & Delivery Quality",
    shortTitle: "CI/CD",
    description:
      "Integrating automated checks into delivery pipelines and shaping quality gates that support decisions without blocking teams blindly.",
    icon: "strategy",
    themes: ["GitLab CI/CD", "Pipeline feedback", "Release validation", "Test metrics"],
    futureDetailPath: "/expertise/ci-cd-delivery-quality",
  },
  {
    slug: "ai-assisted-qa-workflows",
    title: "AI-assisted QA Workflows",
    shortTitle: "AI QA",
    description:
      "Using AI as reviewed engineering support for test design, debugging, exploratory analysis, documentation, and repeatable QA workflows.",
    icon: "ai",
    themes: [
      "Prompt engineering",
      "Test generation review",
      "Debugging support",
      "Confidentiality boundaries",
    ],
    futureDetailPath: "/expertise/ai-assisted-qa-workflows",
  },
  {
    slug: "hardware-software-integration",
    title: "Hardware & Software Integration Testing",
    shortTitle: "H/S integration",
    description:
      "Testing web platforms connected to physical devices, embedded interfaces, industrial environments, and failover scenarios.",
    icon: "studies",
    themes: ["Industrial systems", "Device validation", "Emergency scenarios", "Environment setup"],
    futureDetailPath: "/expertise/hardware-software-integration",
  },
  {
    slug: "mentoring-knowledge-sharing",
    title: "Mentoring & Knowledge Sharing",
    shortTitle: "Community",
    description:
      "Supporting QA engineers through automation mentoring, technical recruitment, internal knowledge sharing, and AI-focused initiatives.",
    icon: "speaking",
    themes: [
      "Automation mentoring",
      "Recruitment support",
      "Internal talks",
      "AI bootcamp support",
    ],
    futureDetailPath: "/speaking",
  },
] as const satisfies readonly ExpertiseArea[];

export const focusAreas = expertiseAreas.map(({ title, description, icon }) => ({
  title,
  description,
  icon,
}));
