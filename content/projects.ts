import type { ContentStatus, ProjectSection } from "./types";

export type CaseStudy = {
  slug: string;
  title: string;
  domain: string;
  status: ContentStatus;
  summary: string;
  confidentialityLevel: "public-safe" | "sanitized" | "needs-review";
  sections: {
    problem: ProjectSection;
    constraints: ProjectSection;
    approach: ProjectSection;
    tradeOffs: ProjectSection;
    outcome: ProjectSection;
    futureDetail: ProjectSection;
  };
  tags: string[];
};

export const caseStudies = [
  {
    slug: "quality-strategy-for-saas-platform",
    title: "Quality strategy for a SaaS platform",
    domain: "SaaS platform",
    status: "draft",
    summary:
      "A sanitized case study placeholder for quality strategy work in a product delivery environment.",
    confidentialityLevel: "needs-review",
    sections: {
      problem: {
        heading: "Problem",
        body: "Describe the delivery or quality risk without naming the client, product, team, or proprietary workflow.",
        needsDetail: true,
      },
      constraints: {
        heading: "Constraints",
        body: "Add public-safe constraints such as legacy architecture, release cadence, team topology, or test data limits when approved.",
        needsDetail: true,
      },
      approach: {
        heading: "Approach",
        body: "Explain the strategy, test layers, review routines, and feedback loops at a pattern level.",
        needsDetail: true,
      },
      tradeOffs: {
        heading: "Trade-offs",
        body: "Capture what was intentionally not automated or not changed, and why that decision was appropriate.",
        needsDetail: true,
      },
      outcome: {
        heading: "Public-safe outcome",
        body: "Add verified outcomes only. Avoid percentages, speed claims, or quality claims until they can be supported publicly.",
        needsDetail: true,
      },
      futureDetail: {
        heading: "Future detail page",
        body: "Prepare route /case-studies/quality-strategy-for-saas-platform when detailed content is approved.",
        needsDetail: true,
      },
    },
    tags: ["quality strategy", "risk", "release confidence"],
  },
  {
    slug: "automation-architecture-for-web-application",
    title: "Automation architecture for a web application",
    domain: "Web application",
    status: "draft",
    summary:
      "A sanitized case study placeholder for test automation architecture in a modern web product.",
    confidentialityLevel: "needs-review",
    sections: {
      problem: {
        heading: "Problem",
        body: "Describe the maintenance, reliability, or feedback problem without exposing internal suite details.",
        needsDetail: true,
      },
      constraints: {
        heading: "Constraints",
        body: "Add approved notes about browser coverage, CI runtime, test data, environments, or team ownership.",
        needsDetail: true,
      },
      approach: {
        heading: "Approach",
        body: "Summarize the architecture choices, boundaries between test layers, and maintainability practices.",
        needsDetail: true,
      },
      tradeOffs: {
        heading: "Trade-offs",
        body: "Document why specific checks belonged at unit, API, integration, or end-to-end level.",
        needsDetail: true,
      },
      outcome: {
        heading: "Public-safe outcome",
        body: "Add only verified public-safe results, such as qualitative maintainability improvements or team adoption notes.",
        needsDetail: true,
      },
      futureDetail: {
        heading: "Future detail page",
        body: "Prepare route /case-studies/automation-architecture-for-web-application when detailed content is approved.",
        needsDetail: true,
      },
    },
    tags: ["automation", "web", "maintainability"],
  },
  {
    slug: "ai-assisted-testing-workflow",
    title: "AI-assisted testing workflow",
    domain: "QA workflow",
    status: "draft",
    summary:
      "A sanitized case study placeholder for responsible AI support in quality engineering activities.",
    confidentialityLevel: "needs-review",
    sections: {
      problem: {
        heading: "Problem",
        body: "Describe where test design, analysis, documentation, or maintenance needed better support.",
        needsDetail: true,
      },
      constraints: {
        heading: "Constraints",
        body: "Include confidentiality, review, data handling, and accuracy constraints before describing the workflow.",
        needsDetail: true,
      },
      approach: {
        heading: "Approach",
        body: "Explain AI usage as human-reviewed support rather than autonomous decision-making.",
        needsDetail: true,
      },
      tradeOffs: {
        heading: "Trade-offs",
        body: "Capture where AI was intentionally not used because of risk, confidentiality, or weak source material.",
        needsDetail: true,
      },
      outcome: {
        heading: "Public-safe outcome",
        body: "Add reviewed outcomes only. Do not claim complete coverage or productivity gains without evidence.",
        needsDetail: true,
      },
      futureDetail: {
        heading: "Future detail page",
        body: "Prepare route /case-studies/ai-assisted-testing-workflow when detailed content is approved.",
        needsDetail: true,
      },
    },
    tags: ["AI", "test design", "human review"],
  },
] as const satisfies readonly CaseStudy[];
