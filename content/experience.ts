import type { ConfidentialityLevel, DateRange, ProjectDomain } from "./types";

export type ProjectContribution = {
  slug: string;
  anonymizedName: string;
  domain: ProjectDomain | string;
  duration?: DateRange;
  roleInProject: string;
  summary: string;
  challenge: string;
  responsibilities: string[];
  techStack: string[];
  impact: string;
  tags: string[];
  confidentialityLevel: ConfidentialityLevel;
  confidentialityNote?: string;
  futureDetailPath?: string;
  needsManualInput?: string[];
};

export type CompanyExperience = {
  slug: string;
  companyName: string;
  logoPath?: string;
  roleTitle: string;
  employmentDates?: DateRange;
  contextDescription: string;
  projects: ProjectContribution[];
  mentoringActivities?: string[];
  speakingActivities?: string[];
  publicSafeNotes: string[];
  needsManualInput?: string[];
};

export const professionalExperience = [
  {
    slug: "confidential-product-delivery",
    companyName: "Confidential employer or client group",
    roleTitle: "Senior QA Engineer",
    employmentDates: {
      start: "Add start date",
      end: "Add end date or Present",
      displayLabel: "Date range pending",
      isApproximate: true,
    },
    contextDescription:
      "Public-safe placeholder for senior quality engineering work across product delivery, automation design, risk analysis, and cross-functional collaboration.",
    projects: [
      {
        slug: "quality-strategy-for-saas-platform",
        anonymizedName: "SaaS quality strategy program",
        domain: "SaaS platform",
        duration: {
          start: "Add start date",
          end: "Add end date",
          displayLabel: "Duration pending",
          isApproximate: true,
        },
        roleInProject: "Quality strategy and senior QA ownership",
        summary:
          "Prepared for detailed public-safe content about aligning testing effort, release confidence, and quality ownership in a SaaS delivery context.",
        challenge:
          "Describe the delivery or quality risk without naming the client, product, team, or proprietary workflow.",
        responsibilities: [
          "Shape risk-based testing priorities around product and delivery constraints.",
          "Translate quality risks and trade-offs into clear engineering conversations.",
          "Support release confidence through practical review, exploratory testing, and automation guidance.",
        ],
        techStack: ["Add approved tools and technologies"],
        impact:
          "Add verified public-safe outcomes only. Do not add percentages, time savings, defect counts, or quality claims until they can be supported.",
        tags: ["quality strategy", "risk", "release confidence"],
        confidentialityLevel: "needs-review",
        confidentialityNote:
          "Keep employer, client, product, and internal project names out of public content until explicitly approved.",
        futureDetailPath: "/projects/quality-strategy-for-saas-platform",
        needsManualInput: [
          "Approved company label, if any.",
          "Real project duration.",
          "Public-safe technology stack.",
          "Verified outcomes or qualitative impact notes.",
        ],
      },
      {
        slug: "automation-architecture-for-web-application",
        anonymizedName: "Web application automation architecture",
        domain: "Web application",
        duration: {
          start: "Add start date",
          end: "Add end date",
          displayLabel: "Duration pending",
          isApproximate: true,
        },
        roleInProject: "Automation architecture and test design",
        summary:
          "Prepared for detailed content about automation boundaries, maintainability, and feedback quality in a modern web product.",
        challenge:
          "Describe the maintenance, reliability, or feedback problem without exposing internal suite details.",
        responsibilities: [
          "Define useful boundaries between test layers and end-to-end coverage.",
          "Design automated checks with emphasis on readability, reliability, and maintenance cost.",
          "Review test structure and feedback signals with engineering partners.",
        ],
        techStack: ["Add approved automation stack"],
        impact:
          "Add reviewed outcomes only, such as qualitative maintainability improvements or team adoption notes.",
        tags: ["automation", "web", "maintainability"],
        confidentialityLevel: "needs-review",
        confidentialityNote:
          "Use sanitized architecture patterns and approved tooling names only.",
        futureDetailPath: "/projects/automation-architecture-for-web-application",
        needsManualInput: [
          "Approved tooling names.",
          "Real project duration.",
          "Public-safe constraints and trade-offs.",
          "Verified impact statement.",
        ],
      },
      {
        slug: "ai-assisted-testing-workflow",
        anonymizedName: "AI-assisted QA workflow",
        domain: "QA workflow",
        duration: {
          start: "Add start date",
          end: "Add end date",
          displayLabel: "Duration pending",
          isApproximate: true,
        },
        roleInProject: "Responsible AI-assisted QA workflow design",
        summary:
          "Prepared for public-safe examples of using AI as reviewed support for analysis, test ideas, documentation, and maintenance.",
        challenge:
          "Describe where test design, analysis, documentation, or maintenance needed better support while preserving confidentiality and review discipline.",
        responsibilities: [
          "Set boundaries for AI use around source material, confidentiality, and human review.",
          "Use AI support for test ideas, analysis, documentation, and maintenance workflows.",
          "Separate useful assistance from unsupported automation or coverage claims.",
        ],
        techStack: ["Add approved AI and QA tools"],
        impact:
          "Add reviewed public-safe outcomes only. Avoid productivity, coverage, or quality claims without evidence.",
        tags: ["AI-assisted QA", "test design", "human review"],
        confidentialityLevel: "needs-review",
        confidentialityNote:
          "Do not include proprietary prompts, datasets, internal documents, repositories, or client context.",
        futureDetailPath: "/projects/ai-assisted-testing-workflow",
        needsManualInput: [
          "Approved examples safe for public use.",
          "Real project duration.",
          "Tools that may be named publicly.",
          "Reviewed impact statement.",
        ],
      },
    ],
    mentoringActivities: [
      "Add confirmed mentoring activities connected to this company or role.",
    ],
    speakingActivities: [
      "Add confirmed talks, workshops, or internal/public sessions connected to this company or role.",
    ],
    publicSafeNotes: [
      "Do not publish employer, client, product, repository, or internal project names until explicitly approved.",
      "Add specific technologies only after confirming they are safe to mention publicly.",
      "Add outcomes only when they are verified and safe to publish.",
    ],
    needsManualInput: [
      "Approved public company name or anonymized company label.",
      "Employment date range.",
      "Company context description.",
      "Confirmed mentoring and speaking activities.",
      "Additional projects grouped under this company.",
    ],
  },
] as const satisfies readonly CompanyExperience[];
