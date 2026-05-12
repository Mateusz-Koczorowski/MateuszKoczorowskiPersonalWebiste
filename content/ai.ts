export type AiQaWorkflowArea = {
  slug: string;
  title: string;
  summary: string;
  examples: string[];
  outcomes: string[];
  tags: string[];
};

export type AiMcpIntegration = {
  slug: string;
  title: string;
  summary: string;
  workflowUse: string[];
  tags: string[];
};

export type AiWorkflowStep = {
  label: string;
  description: string;
};

export const aiQaNarrative = {
  eyebrow: "AI in QA",
  title: "AI-assisted QA workflows built around orchestration, not replacement.",
  intro:
    "My AI work started around 2023 with ChatGPT and GitHub Copilot as support for test ideas, debugging notes, and code assistance. It has since evolved into a deliberate QA engineering workflow: specialized agents, reusable skills, MCP integrations, and repeatable processes that move from ticket analysis to test planning, automation, review, and defect reporting.",
  paragraphs: [
    "The goal is not to hand testing over to a model. The value is orchestration: using AI to prepare structure, surface blind spots, accelerate routine analysis, and keep a human engineer in control of product risk, architecture, and release confidence.",
    "Today my primary AI engineering tools are OpenAI Codex and Claude Code. I use them to design modular workflows for Playwright and Cypress automation, Jira-driven test generation, structured reviews, application exploration, and documentation that stays connected to the actual delivery context.",
  ],
  highlights: [
    "AI-augmented QA workflows with human review at every decision point.",
    "Reusable skill-based systems for automation, planning, reporting, and review.",
    "Specialized agents and MCP integrations used to connect tickets, code, browsers, and design context.",
  ],
  tags: ["OpenAI Codex", "Claude Code", "AI agents", "MCP", "workflow orchestration"],
} as const;

export const aiQaWorkflowAreas = [
  {
    slug: "ai-assisted-test-automation",
    title: "AI-assisted Test Automation",
    summary:
      "Automation workflows start from product context, not from a blank spec. A ticket, existing test architecture, and observed application behavior can become a reviewed Playwright or Cypress implementation plan before generated code is accepted.",
    examples: [
      "Generate Playwright and Cypress test structures from acceptance criteria and existing framework conventions.",
      "Use reusable automation skills to keep selectors, fixtures, data setup, and assertions aligned with the project style.",
      "Delegate focused automation work to specialized agents, then review generated tests against product risk, evidence, and maintainability.",
    ],
    outcomes: [
      "Faster first drafts for regression checks.",
      "More consistent automation architecture.",
      "Less time spent on repetitive scaffolding.",
    ],
    tags: ["Playwright", "Cypress", "Jira-driven generation", "specialized agents"],
  },
  {
    slug: "ai-assisted-test-planning",
    title: "AI-assisted Test Planning",
    summary:
      "Planning becomes stronger when AI helps structure the raw material: tickets, acceptance criteria, risk areas, regression history, and unclear assumptions. The engineer still decides priority and scope.",
    examples: [
      "Analyze feature tickets into test conditions, open questions, and risk-based scenario groups.",
      "Draft regression plans that connect new behavior with existing high-risk workflows.",
      "Generate scenario candidates for manual, exploratory, API, and end-to-end testing layers.",
    ],
    outcomes: [
      "Clearer test scope before implementation.",
      "Earlier visibility of ambiguous requirements.",
      "More reusable planning patterns across features.",
    ],
    tags: ["test planning", "risk analysis", "regression planning", "scenario generation"],
  },
  {
    slug: "ai-assisted-review-workflows",
    title: "AI-assisted Review Workflows",
    summary:
      "Review workflows use AI as structured second-pass support: checking test intent, assertion quality, maintainability, missing negative paths, and alignment with the original ticket.",
    examples: [
      "Run reusable review skills against generated or hand-written automation before merging.",
      "Validate whether scenarios still match the feature risk instead of only checking syntax.",
      "Use exploratory assistance to compare expected behavior, application state, and observed failures.",
    ],
    outcomes: [
      "Cleaner automation before code review.",
      "More explicit assumptions and test gaps.",
      "Better separation between useful coverage and noisy checks.",
    ],
    tags: ["review skills", "workflow validation", "automation quality", "exploratory support"],
  },
  {
    slug: "ai-assisted-defect-reporting",
    title: "AI-assisted Defect Reporting",
    summary:
      "Defect reporting is a workflow, not just a text field. AI helps turn investigation notes, logs, screenshots, and reproduction paths into concise reports that engineers can act on.",
    examples: [
      "Summarize issue context, expected behavior, actual behavior, reproduction steps, and affected scope.",
      "Prepare cleaner defect reports from exploratory notes without losing technical detail.",
      "Connect bug evidence with ticket context and likely regression areas for faster triage.",
    ],
    outcomes: [
      "Less reporting friction after investigation.",
      "More consistent issue structure.",
      "Faster handoff from QA discovery to engineering triage.",
    ],
    tags: ["structured reports", "issue summarization", "defect workflow", "triage support"],
  },
  {
    slug: "ai-assisted-test-data-generation",
    title: "AI-assisted Test Data Generation",
    summary:
      "Good test data is part of the test design. AI can help shape dynamic, feature-oriented datasets when the constraints are explicit and the generated values are reviewed.",
    examples: [
      "Generate boundary-focused datasets for forms, APIs, filters, and business rules.",
      "Prepare feature-specific data variations for positive, negative, and edge-case scenarios.",
      "Document reusable data patterns so automation remains readable and easier to maintain.",
    ],
    outcomes: [
      "Better coverage of data-driven edge cases.",
      "Reusable data patterns for future tests.",
      "Less manual drafting of repetitive dataset variants.",
    ],
    tags: ["dynamic test data", "feature datasets", "edge cases", "reusable workflows"],
  },
] as const satisfies readonly AiQaWorkflowArea[];

export const aiMcpIntegrations = [
  {
    slug: "atlassian-mcp",
    title: "Atlassian MCP",
    summary:
      "Ticket systems become part of the QA workflow instead of a separate source to copy from. Jira context can drive analysis, planning, automation scope, and defect reporting.",
    workflowUse: [
      "Analyze Jira tickets into risks, questions, test scenarios, and acceptance criteria gaps.",
      "Connect defect reports back to ticket context with consistent structure.",
      "Use ticket data as the starting point for automation and regression planning.",
    ],
    tags: ["Jira", "ticket analysis", "test planning", "defect orchestration"],
  },
  {
    slug: "playwright-mcp",
    title: "Playwright MCP",
    summary:
      "Live application behavior can be inspected as part of the workflow. This supports UI exploration, scenario validation, and automation design before tests are finalized.",
    workflowUse: [
      "Explore the application through real browser interactions.",
      "Validate UI paths and scenario assumptions against the running product.",
      "Use observed behavior to refine Playwright or Cypress automation structure.",
    ],
    tags: ["application exploration", "UI validation", "scenario execution"],
  },
  {
    slug: "chrome-devtools-mcp",
    title: "Chrome DevTools MCP",
    summary:
      "Frontend debugging becomes easier when browser inspection is connected to the QA investigation flow instead of handled as a separate manual step.",
    workflowUse: [
      "Inspect console output, network behavior, and frontend state during defect analysis.",
      "Support debugging hypotheses with browser-level evidence.",
      "Document technical observations for developers in clearer reports.",
    ],
    tags: ["debugging", "frontend inspection", "browser analysis"],
  },
  {
    slug: "figma-mcp",
    title: "Figma MCP",
    summary:
      "Design context can support testing when it is used to compare intent with implementation. The workflow stays focused on consistency, not pixel-perfect busywork.",
    workflowUse: [
      "Align UI validation with approved design intent and component behavior.",
      "Check consistency across states, layouts, and important interaction paths.",
      "Prepare testing notes that connect design expectations with implementation findings.",
    ],
    tags: ["design-to-testing", "UI consistency", "visual validation"],
  },
] as const satisfies readonly AiMcpIntegration[];

export const aiPracticalWorkflowExample = {
  title: "A practical orchestration flow",
  summary:
    "A realistic workflow starts with a ticket and ends with reviewed engineering output. AI carries context between steps, while the QA engineer keeps ownership of risk, evidence, and final decisions.",
  steps: [
    {
      label: "Analyze the Jira ticket",
      description:
        "Extract acceptance criteria, risk areas, missing questions, test conditions, and likely regression scope.",
    },
    {
      label: "Inspect the application",
      description:
        "Use Playwright MCP or browser tooling to validate the actual UI workflow and compare assumptions with product behavior.",
    },
    {
      label: "Generate automation structure",
      description:
        "Draft a Playwright or Cypress test outline using reusable skills, framework conventions, and feature-oriented test data.",
    },
    {
      label: "Review and harden tests",
      description:
        "Use specialized review workflows to check intent, selectors, assertions, maintainability, and gaps before code review.",
    },
    {
      label: "Validate scenarios",
      description:
        "Run or inspect the scenario path, refine edge cases, and separate useful coverage from checks that would add noise.",
    },
    {
      label: "Prepare defect report",
      description:
        "If a problem is found, turn evidence into a structured Jira-ready report with context, reproduction steps, and technical notes.",
    },
  ] satisfies readonly AiWorkflowStep[],
  tags: [
    "reusable skills",
    "specialized subagents",
    "modular workflows",
    "productivity optimization",
  ],
} as const;

export const aiWorkflowImpact = [
  "Routine QA preparation becomes faster without removing engineering review.",
  "Automation work starts from product context, existing architecture, and real application behavior.",
  "Review, defect reporting, and test planning become more consistent across features.",
  "The workflow is scalable because skills, agents, and integrations can be reused instead of rebuilt for every task.",
] as const;
