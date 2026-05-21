import type { ConfidentialityLevel, DateRange } from "./types";

export type ProjectContribution = {
  slug: string;
  anonymizedName: string;
  domain: string;
  displayOrder?: number;
  duration?: DateRange;
  roleInProject: string;
  summary: string;
  challenge: string;
  responsibilities: string[];
  ownershipDetails?: {
    title: string;
    detail: string;
  }[];
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
  roleProgression?: string[];
  roleMilestones?: {
    title: string;
    dates: DateRange;
    note?: string;
    isPromotion?: boolean;
  }[];
  employmentDates?: DateRange;
  contextDescription: string;
  projects: ProjectContribution[];
  organizationalContributions?: string[];
  mentoringActivities?: string[];
  speakingActivities?: string[];
  publicSafeNotes: string[];
  needsManualInput?: string[];
};

export const professionalExperience = [
  {
    slug: "stx-next",
    companyName: "STX Next",
    roleTitle: "Senior QA Engineer",
    employmentDates: {
      start: "07.2024",
      end: "Present",
      isCurrent: true,
      displayLabel: "07.2024 - Present",
    },
    contextDescription:
      "AI, Data, and Cloud engineering consultancy with strong Python engineering roots, delivering scalable enterprise systems, digital platforms, and modern software solutions for international clients.",
    roleMilestones: [
      {
        title: "Regular QA Engineer",
        dates: {
          start: "07.2024",
          end: "07.2025",
          displayLabel: "07.2024 - 07.2025",
        },
        note: "Built trust through automation ownership, QA strategy work, and delivery impact across production systems.",
      },
      {
        title: "Senior QA Engineer",
        dates: {
          start: "07.2025",
          end: "Present",
          isCurrent: true,
          displayLabel: "07.2025 - Present",
        },
        note: "Promoted to Senior QA Engineer with broader ownership across automation architecture, mentoring, AI-assisted workflows, and quality strategy.",
        isPromotion: true,
      },
    ],
    projects: [
      {
        slug: "industrial-monitoring-risk-analysis-platform",
        anonymizedName: "Industrial Monitoring & Risk Analysis Platform",
        domain: "Industrial Systems / Petrochemical Analytics",
        displayOrder: 2,
        duration: {
          start: "07.2024",
          end: "01.2025",
          displayLabel: "07.2024 - 01.2025",
        },
        roleInProject: "Senior QA Engineer / automation and quality strategy ownership",
        summary:
          "Large-scale monitoring platform visualizing operational and sensor-driven industrial data, anomaly detection signals, and analytical workflows.",
        challenge:
          "The product required reliable validation of complex visualization, operational data, and analytical flows while the QA process needed stronger structure, ownership, and release confidence.",
        responsibilities: [
          "Designed and implemented a Cypress and TypeScript automation framework from scratch.",
          "Owned major parts of the automation architecture and test structure.",
          "Introduced QA strategy, testing metrics, and quality process improvements.",
          "Organized test planning, test management workflows, and clearer test case structure.",
          "Performed manual and exploratory testing across high-risk product areas.",
          "Collaborated with engineering and delivery stakeholders on quality improvements.",
        ],
        ownershipDetails: [
          {
            title: "Automation Architecture",
            detail:
              "Built the Cypress and TypeScript foundation, shaped test structure, and kept the suite oriented around maintainable coverage of product-critical workflows.",
          },
          {
            title: "QA Strategy",
            detail:
              "Introduced clearer planning, test management, and quality process practices so the team could reason about risk before release pressure accumulated.",
          },
          {
            title: "Data & Visualization Validation",
            detail:
              "Focused validation on analytical flows, operational data behavior, and visualization states where defects could distort product interpretation.",
          },
          {
            title: "Collaboration & Process Improvement",
            detail:
              "Worked with engineering and delivery stakeholders to make quality feedback more structured, actionable, and visible across the team.",
          },
        ],
        techStack: ["Cypress", "TypeScript", "REST APIs", "Data Visualization"],
        impact:
          "Improved QA process maturity, defect detection workflows, release confidence, and product stability without publishing unsupported numerical claims.",
        tags: ["automation architecture", "industrial systems", "risk analysis", "test metrics"],
        confidentialityLevel: "sanitized",
        confidentialityNote:
          "Project name and client-identifying details are anonymized for public use.",
        futureDetailPath: "/projects/industrial-monitoring-risk-analysis-platform",
        needsManualInput: ["Approved public client or domain wording"],
      },
      {
        slug: "ai-driven-clinical-trials-platform",
        anonymizedName: "AI-driven Clinical Trials Platform",
        domain: "Healthcare / Biotech / AI-driven Clinical Research",
        displayOrder: 1,
        duration: {
          start: "02.2025",
          end: "Present",
          isCurrent: true,
          displayLabel: "02.2025 - Present",
        },
        roleInProject: "Senior QA Engineer / automation coverage and migration support",
        summary:
          "AI-driven clinical trials platform operating under quality expectations typical for pharmaceutical and biotech environments.",
        challenge:
          "The platform needed scalable end-to-end regression coverage, maintainable automation, and careful release validation in a high-quality clinical research context.",
        responsibilities: [
          "Developed and maintained end-to-end automation tests.",
          "Increased automated regression coverage across important user workflows.",
          "Supported migration from Cypress to Playwright.",
          "Performed manual and exploratory testing for release validation.",
          "Worked in Scrum collaboration with product and engineering teams.",
        ],
        ownershipDetails: [
          {
            title: "Automation Architecture",
            detail:
              "Developed and maintained end-to-end coverage while supporting the migration path from Cypress toward a more scalable Playwright-based strategy.",
          },
          {
            title: "CI/CD & Release Validation",
            detail:
              "Kept automated regression and manual release checks aligned with high-quality clinical research expectations and recurring delivery needs.",
          },
          {
            title: "Exploratory Testing",
            detail:
              "Used exploratory sessions to investigate product behavior around important workflows, complementing automation with human judgment.",
          },
          {
            title: "AI-assisted Workflows",
            detail:
              "Worked in an AI-driven product context with attention to practical validation, review discipline, and maintainable QA workflows.",
          },
        ],
        techStack: ["Cypress", "Playwright", "TypeScript", "End-to-End Testing"],
        impact:
          "Significantly increased automation coverage, improved maintainability of the automation architecture, and supported a scalable future testing strategy.",
        tags: ["healthcare", "biotech", "AI platform", "Playwright migration"],
        confidentialityLevel: "sanitized",
        confidentialityNote:
          "Project name and client-identifying details are anonymized for public use.",
        futureDetailPath: "/projects/ai-driven-clinical-trials-platform",
        needsManualInput: ["Approved detail level for clinical-domain examples"],
      },
    ],
    organizationalContributions: [
      "Promoted to Senior QA Engineer within the first year based on technical contribution, organizational impact, and strong performance.",
      "Contributed as a Technical Recruiter, supporting hiring for QA engineering roles.",
      "Contributed to AI-focused QA initiatives and internal quality engineering knowledge sharing.",
      "Presented practical AI usage in QA during PAIDA Meetup as part of STX Next QA community activity.",
      "Provided consultations for an internal AI bootcamp focused on practical software quality workflows.",
      "Participated in Talent Navigator, a high-potential development program focused on leadership, growth, collaboration, and broader company impact.",
    ],
    mentoringActivities: [
      "Mentoring in automation testing and quality engineering practices.",
      "Technical recruitment support for QA engineering roles.",
      "Internal knowledge sharing around automation and AI-assisted QA workflows.",
    ],
    publicSafeNotes: [
      "Project names are anonymized.",
      "Client names and proprietary workflow details need manual review before publication.",
    ],
    needsManualInput: ["Exact promotion date if it should be public"],
  },
  {
    slug: "merixstudio",
    companyName: "Merixstudio",
    roleTitle: "Regular QA Specialist",
    employmentDates: {
      start: "03.2023",
      end: "06.2024",
      displayLabel: "03.2023 - 06.2024",
    },
    contextDescription:
      "Technology consultancy combining product strategy, design, and software engineering to deliver scalable digital platforms and modern web applications for international clients.",
    projects: [
      {
        slug: "industrial-emergency-lighting-control-platform",
        anonymizedName: "Industrial Emergency Lighting Control Platform",
        domain: "Industrial Systems / Hardware & Software Integration",
        displayOrder: 1,
        duration: {
          start: "03.2023",
          end: "04.2024",
          displayLabel: "03.2023 - 04.2024",
        },
        roleInProject: "QA Specialist / hardware-connected web platform validation",
        summary:
          "Web-based platform integrated with dedicated physical emergency lighting hardware devices and embedded touch interfaces.",
        challenge:
          "Testing required validation across web application behavior, backend interactions, physical devices, embedded interfaces, and emergency or failover states.",
        responsibilities: [
          "Performed manual testing of the web application and physical device interfaces.",
          "Validated emergency, failover, and hardware/software integration scenarios.",
          "Tested embedded touch interfaces and device-connected workflows.",
          "Supported QA across frontend, backend, and hardware-connected systems.",
          "Implemented Cypress automation for the web platform.",
          "Supported automation execution through GitLab CI workers connected by VPN to dedicated VLAN infrastructure hosting physical devices.",
        ],
        ownershipDetails: [
          {
            title: "Hardware & Software Validation",
            detail:
              "Validated web behavior together with physical device interfaces, embedded touch flows, and scenarios where hardware state changed product risk.",
          },
          {
            title: "CI/CD & Environment Strategy",
            detail:
              "Supported GitLab CI execution against controlled infrastructure connected through VPN and VLAN access to physical devices.",
          },
          {
            title: "Automation Ownership",
            detail:
              "Added Cypress coverage where web workflows could be automated while keeping manual validation for device-dependent scenarios.",
          },
          {
            title: "Technical Challenges",
            detail:
              "Balanced application testing, backend interactions, and physical-device constraints in an environment where quality depended on the full system.",
          },
        ],
        techStack: ["Vue.js", "TypeScript", "Python", "FastAPI", "C++", "Linux", "Cypress"],
        impact:
          "Improved reliability validation, increased confidence in hardware/software integration quality, and expanded QA coverage for industrial workflows.",
        tags: ["hardware integration", "industrial QA", "Cypress", "GitLab CI", "VPN/VLAN"],
        confidentialityLevel: "sanitized",
        confidentialityNote:
          "Project name, client, and device details are anonymized for public use.",
        futureDetailPath: "/projects/industrial-emergency-lighting-control-platform",
        needsManualInput: ["Approved public hardware details"],
      },
      {
        slug: "sports-field-analytics-platform",
        anonymizedName: "Sports Field Analytics Platform",
        domain: "Sports Analytics / Data Visualization",
        displayOrder: 2,
        duration: {
          start: "06.2023",
          end: "06.2024",
          displayLabel: "06.2023 - 06.2024",
        },
        roleInProject: "Regular QA Specialist / automation framework owner",
        summary:
          "Web platform visualizing and analyzing measurement data for American football fields using external API data.",
        challenge:
          "The product needed reliable validation of external API data, visualization behavior, measurement accuracy, and regression-prone user workflows.",
        responsibilities: [
          "Performed manual testing across data visualization and user workflows.",
          "Validated APIs using Postman and supported integration-level investigation.",
          "Developed a Cypress and JavaScript automation framework from scratch.",
          "Integrated automated checks into GitLab CI/CD pipelines.",
          "Validated visualization behavior and measurement accuracy.",
          "Collaborated with developers on QA improvements and mentored junior QA engineers.",
        ],
        ownershipDetails: [
          {
            title: "Automation Architecture",
            detail:
              "Created a Cypress and JavaScript framework from scratch to cover regression-prone workflows and support repeatable delivery checks.",
          },
          {
            title: "API & Integration Testing",
            detail:
              "Used Postman and integration-level investigation to validate external API behavior feeding the product's analytical experience.",
          },
          {
            title: "CI/CD & Release Validation",
            detail:
              "Integrated automated checks into GitLab CI/CD so regression feedback became part of the delivery workflow.",
          },
          {
            title: "Collaboration & Mentoring",
            detail:
              "Partnered with developers on QA improvements and supported junior QA engineers in practical automation and validation work.",
          },
        ],
        techStack: ["React", "TypeScript", "Cypress", "Postman", "REST APIs", "GitLab CI/CD"],
        impact:
          "Improved regression reliability, increased automation coverage, and strengthened QA maturity and release confidence.",
        tags: ["sports analytics", "data visualization", "API testing", "automation framework"],
        confidentialityLevel: "sanitized",
        confidentialityNote:
          "Project name and client-identifying details are anonymized for public use.",
        futureDetailPath: "/projects/sports-field-analytics-platform",
        needsManualInput: ["Approved public examples of visualization checks"],
      },
      {
        slug: "ai-supported-threat-analysis-platform",
        anonymizedName: "AI-supported Threat Analysis Platform",
        domain: "AI Analytics / Threat Analysis",
        displayOrder: 3,
        duration: {
          start: "02.2024",
          end: "03.2024",
          displayLabel: "02.2024 - 03.2024",
        },
        roleInProject: "QA Specialist / exploratory quality support",
        summary:
          "AI-related analytics platform where QA work focused on exploratory validation, product behavior review, and practical investigation.",
        challenge:
          "The platform required careful exploratory QA around AI-supported analysis flows while keeping public details lightweight.",
        responsibilities: [
          "Performed exploratory QA activities around AI-related analytics workflows.",
          "Reviewed product behavior and supported defect investigation.",
          "Kept findings structured for engineering follow-up.",
        ],
        ownershipDetails: [
          {
            title: "Exploratory Testing",
            detail:
              "Investigated AI-related analytics behavior through structured exploratory work where detailed public examples need to remain limited.",
          },
          {
            title: "Defect Investigation",
            detail:
              "Reviewed product behavior, captured findings clearly, and supported engineering follow-up without exposing client-specific details.",
          },
          {
            title: "AI-assisted Quality Context",
            detail:
              "Focused on practical quality review around AI-supported workflows, keeping the public case study intentionally lightweight.",
          },
        ],
        techStack: ["AI Analytics", "Exploratory Testing", "Web Application Testing"],
        impact:
          "Supported quality discovery and feedback in an AI-related analytics product without exposing detailed client or platform information.",
        tags: ["AI analytics", "exploratory testing", "lightweight case study"],
        confidentialityLevel: "sanitized",
        confidentialityNote:
          "This project is intentionally kept lightweight until additional public detail is approved.",
        futureDetailPath: "/projects/ai-supported-threat-analysis-platform",
        needsManualInput: ["Approved public stack details"],
      },
    ],
    organizationalContributions: [
      "Mentored junior QA engineers on automation and QA practice.",
      "Collaborated with development teams on QA process improvements.",
    ],
    publicSafeNotes: [
      "Project names are anonymized.",
      "Client-identifying details need manual review before publication.",
    ],
  },
  {
    slug: "colours-factory",
    companyName: "Colours Factory",
    roleTitle: "System Support Specialist & Software Tester",
    employmentDates: {
      start: "06.2021",
      end: "02.2023",
      displayLabel: "06.2021 - 02.2023",
    },
    contextDescription:
      "Large-scale online printing and production ecosystem integrating e-commerce platforms, CMS systems, production workflows, print infrastructure, and partner operations.",
    projects: [
      {
        slug: "online-printing-platform-quality-operations",
        anonymizedName: "Online Printing Platform Quality & Operations",
        domain: "E-commerce / Printing / Production Workflows",
        roleInProject: "System Support Specialist & Software Tester",
        summary:
          "Large online printing platform spanning customer-facing e-commerce systems, CMS and backoffice workflows, preflighting, print validation, and partner migration.",
        challenge:
          "The ecosystem combined customer-facing behavior, production validation, partner workflows, database operations, and migration risk in a business-critical environment.",
        responsibilities: [
          "Tested customer-facing e-commerce systems and backoffice workflows.",
          "Worked with CMS systems, preflighting flows, and print validation processes.",
          "Supported partner migration from a legacy platform to a new system.",
          "Owned technical aspects of the partner migration process.",
          "Performed advanced PostgreSQL database operations.",
          "Created technical documentation for repeatable operational work.",
          "Performed manual testing and developed automation testing skills in Cypress.",
        ],
        ownershipDetails: [
          {
            title: "Operational Quality Ownership",
            detail:
              "Worked across customer-facing, backoffice, CMS, and production workflows where testing had to account for business operations as well as software behavior.",
          },
          {
            title: "Migration & Release Risk",
            detail:
              "Owned technical parts of partner migration work, helping make repeatable processes clearer through documentation and system knowledge.",
          },
          {
            title: "Database & Integration Support",
            detail:
              "Performed advanced PostgreSQL operations and supported validation around partner integrations and production-adjacent workflows.",
          },
          {
            title: "QA Foundations",
            detail:
              "Built the foundation for later automation ownership by combining manual testing, support responsibility, documentation, and early Cypress practice.",
          },
        ],
        techStack: ["Vue.js", "TypeScript", "Python", "Django", "PostgreSQL", "Cypress"],
        impact:
          "Built strong operational ownership, systems understanding, and early QA engineering foundations across a complex e-commerce and production environment.",
        tags: ["e-commerce", "printing workflows", "database operations", "partner migration"],
        confidentialityLevel: "public-safe",
        confidentialityNote:
          "Operational details are summarized at a platform level and avoid partner-specific information.",
        futureDetailPath: "/projects/online-printing-platform-quality-operations",
        needsManualInput: ["Approved public migration detail level"],
      },
    ],
    organizationalContributions: [
      "Created technical documentation for support and migration workflows.",
      "Developed automation testing skills while supporting live operational systems.",
    ],
    publicSafeNotes: [
      "Partner names, internal platform names, and database details should remain private unless explicitly approved.",
    ],
  },
] as const satisfies readonly CompanyExperience[];
