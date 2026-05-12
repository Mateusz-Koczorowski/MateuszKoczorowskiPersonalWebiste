import type { ConfidentialityLevel, ContentStatus, ProjectSection } from "./types";

export type CaseStudy = {
  slug: string;
  title: string;
  domain: string;
  status: ContentStatus;
  summary: string;
  confidentialityLevel: ConfidentialityLevel;
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
    slug: "industrial-monitoring-risk-analysis-platform",
    title: "Industrial monitoring and risk analysis platform",
    domain: "Industrial Systems / Petrochemical Analytics",
    status: "draft",
    summary:
      "Automation architecture and quality strategy for a large-scale industrial monitoring platform.",
    confidentialityLevel: "sanitized",
    sections: {
      problem: {
        heading: "Problem",
        body: "The project needed reliable validation for complex industrial data visualization, anomaly-oriented workflows, and release-critical product areas.",
      },
      constraints: {
        heading: "Constraints",
        body: "Public content must stay domain-level and avoid client, dataset, environment, and internal workflow identifiers.",
      },
      approach: {
        heading: "Approach",
        body: "Built a Cypress and TypeScript automation framework, introduced QA strategy, organized testing workflows, and connected test planning to risk and release confidence.",
      },
      tradeOffs: {
        heading: "Trade-offs",
        body: "Coverage decisions prioritized high-risk workflows and maintainable automated feedback over broad automation that would be expensive to keep stable.",
      },
      outcome: {
        heading: "Public-safe outcome",
        body: "Improved QA process maturity, defect detection habits, release confidence, and product stability without publishing unsupported metrics.",
      },
      futureDetail: {
        heading: "Future detail page",
        body: "Prepare route /case-studies/industrial-monitoring-risk-analysis-platform after exact public detail level is approved.",
        needsDetail: true,
      },
    },
    tags: ["Cypress", "TypeScript", "industrial systems", "quality strategy"],
  },
  {
    slug: "ai-driven-clinical-trials-platform",
    title: "AI-driven clinical trials platform",
    domain: "Healthcare / Biotech / AI-driven Clinical Research",
    status: "draft",
    summary:
      "Regression automation, release validation, and Cypress-to-Playwright migration support for an AI-driven clinical research platform.",
    confidentialityLevel: "sanitized",
    sections: {
      problem: {
        heading: "Problem",
        body: "The product needed maintainable end-to-end regression coverage and careful release validation in a high-quality healthcare and biotech context.",
      },
      constraints: {
        heading: "Constraints",
        body: "Case-study detail must avoid client identifiers, clinical workflow specifics, regulated-process claims, and unsupported quality metrics.",
      },
      approach: {
        heading: "Approach",
        body: "Expanded automated regression coverage, maintained end-to-end tests, supported Cypress-to-Playwright migration, and combined automation with manual and exploratory release checks.",
      },
      tradeOffs: {
        heading: "Trade-offs",
        body: "Automation work focused on workflows where regression confidence and maintainability mattered most, with exploratory testing kept active for areas requiring judgment.",
      },
      outcome: {
        heading: "Public-safe outcome",
        body: "Significantly increased automation coverage, improved maintainability, and supported a scalable future testing strategy.",
      },
      futureDetail: {
        heading: "Future detail page",
        body: "Prepare route /case-studies/ai-driven-clinical-trials-platform after public healthcare-domain wording is reviewed.",
        needsDetail: true,
      },
    },
    tags: ["Playwright", "Cypress", "healthcare", "AI platform"],
  },
  {
    slug: "industrial-emergency-lighting-control-platform",
    title: "Industrial emergency lighting control platform",
    domain: "Industrial Systems / Hardware & Software Integration",
    status: "draft",
    summary:
      "Manual, exploratory, and Cypress automation work for a web platform connected to physical emergency lighting hardware.",
    confidentialityLevel: "sanitized",
    sections: {
      problem: {
        heading: "Problem",
        body: "The system required validation across web software, physical devices, embedded touch interfaces, emergency states, and isolated hardware-connected environments.",
      },
      constraints: {
        heading: "Constraints",
        body: "Public content should remain architectural and avoid device identifiers, client infrastructure details, and internal network specifics beyond safe pattern-level descriptions.",
      },
      approach: {
        heading: "Approach",
        body: "Tested web and physical-device behavior, validated failover and emergency scenarios, implemented Cypress automation, and supported GitLab CI execution against VPN/VLAN-connected hardware environments.",
      },
      tradeOffs: {
        heading: "Trade-offs",
        body: "Automation had to respect hardware availability, isolated environments, and the boundary between stable web workflows and device-state validation.",
      },
      outcome: {
        heading: "Public-safe outcome",
        body: "Improved reliability validation and expanded QA coverage for industrial hardware/software workflows.",
      },
      futureDetail: {
        heading: "Future detail page",
        body: "Prepare route /case-studies/industrial-emergency-lighting-control-platform after hardware detail level is approved.",
        needsDetail: true,
      },
    },
    tags: ["hardware integration", "Cypress", "GitLab CI", "industrial QA"],
  },
] as const satisfies readonly CaseStudy[];
