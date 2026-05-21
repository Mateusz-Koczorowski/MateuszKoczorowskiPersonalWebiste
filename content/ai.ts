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
  notes?: string[];
  labels?: string[];
};

export type AiWorkflowModel = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  boundary: string;
  steps: AiWorkflowStep[];
  supportingNotes: string[];
};

export const aiQaNarrative = {
  eyebrow: "AI in QA",
  title: "AI-assisted QA workflows built around orchestration, not replacement.",
  intro:
    "My AI work is organized into two deliberate QA engineering workflows: investigation and testing on one side, automation creation and review on the other.",
  paragraphs: [
    "The goal is not to hand testing over to a model. The value is orchestration: using AI to prepare structure, surface blind spots, and accelerate routine analysis while a human engineer owns risk, architecture, and release confidence.",
    "I use OpenAI Codex, Claude Code, reusable review skills, and MCP integrations for Jira-driven analysis, application exploration, automation drafting, and documentation tied to delivery context.",
  ],
  highlights: [
    "Human review stays present at every quality decision.",
    "Workflow boundaries separate QA investigation from automation engineering.",
    "MCP integrations connect tickets, code, browsers, and design context.",
  ],
  tags: ["OpenAI Codex", "Claude Code", "review skills", "MCP", "workflow boundaries"],
} as const;

export const aiQaWorkflowAreas = [
  {
    slug: "ai-assisted-test-automation",
    title: "AI-assisted Test Automation",
    summary:
      "Automation starts from product context: tickets, existing framework conventions, observed behavior, and reviewed Playwright or Cypress implementation plans.",
    examples: [
      "Draft test structures from acceptance criteria and project conventions.",
      "Keep selectors, fixtures, data setup, and assertions aligned with the framework style.",
      "Review generated tests against risk, evidence, and maintainability.",
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
      "Planning becomes stronger when AI structures tickets, acceptance criteria, risk areas, regression history, and unclear assumptions before the engineer decides priority and scope.",
    examples: [
      "Turn tickets into test conditions, open questions, and scenario groups.",
      "Connect new behavior with existing high-risk workflows.",
      "Draft candidates for manual, exploratory, API, and end-to-end coverage.",
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
      "Review workflows use AI as structured second-pass support for test intent, assertion quality, maintainability, negative paths, and ticket alignment.",
    examples: [
      "Run reusable review skills against generated or hand-written automation.",
      "Check whether scenarios still match the feature risk.",
      "Compare expected behavior, application state, and observed failures.",
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
      "Jira context can drive analysis, planning, automation scope, and defect reporting without constant manual copying.",
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
      "Live application behavior can be inspected during planning, scenario validation, and automation design.",
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
      "Browser inspection becomes part of QA investigation, from console and network evidence to clearer developer notes.",
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
      "Design context supports testing when it helps compare intended states, layouts, and interaction paths with implementation.",
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
      label: "Jira Ticket",
      description:
        "Start from delivery context: acceptance criteria, linked discussions, constraints, and open questions.",
    },
    {
      label: "Risk Analysis",
      description:
        "Extract quality risks, ambiguous requirements, impacted workflows, and likely regression scope.",
    },
    {
      label: "AI-assisted Test Planning",
      description:
        "Draft scenario groups, exploratory notes, data needs, and automation candidates for human review.",
    },
    {
      label: "Playwright MCP Exploration",
      description:
        "Inspect real application behavior and validate assumptions before committing to automation design.",
    },
    {
      label: "Automation Draft Generation",
      description:
        "Generate Playwright or Cypress structure using project conventions, reusable skills, selectors, and fixtures.",
    },
    {
      label: "Review Workflow",
      description:
        "Check intent, maintainability, assertion quality, selector stability, and coverage gaps before code review.",
    },
    {
      label: "Scenario Validation",
      description:
        "Run or inspect the scenario path, refine edge cases, and separate useful coverage from checks that would add noise.",
    },
    {
      label: "Defect Reporting",
      description:
        "Turn evidence into a structured Jira-ready report with reproduction steps, scope, and technical notes.",
    },
  ] satisfies readonly AiWorkflowStep[],
  tags: [
    "reusable skills",
    "specialized subagents",
    "modular workflows",
    "productivity optimization",
  ],
} as const;

export const aiQaWorkflowModels = [
  {
    slug: "qa-investigation-workflow",
    eyebrow: "Workflow 01",
    title: "AI-assisted QA investigation workflow",
    summary:
      "Real QA execution work: ticket analysis, risk planning, MCP-assisted application exploration, validation, and structured defect reporting.",
    boundary:
      "This workflow does not generate automation. It supports investigation, planning, testing, validation, and reporting.",
    steps: [
      {
        label: "Jira ticket analysis",
        description:
          "Analyze tickets, acceptance criteria, linked discussions, merge requests, code changes, and implementation context.",
        notes: ["Identify quality risks", "Map impacted areas", "Surface open questions"],
        labels: ["ENGINEERING WORKFLOW", "HUMAN REVIEW REQUIRED"],
      },
      {
        label: "Risk and test planning",
        description:
          "Define regression scope, exploratory areas, manual validation paths, automation gaps, and testing priority.",
        notes: ["Prioritize risk", "Separate manual and automated coverage", "Clarify validation depth"],
        labels: ["QA EXECUTION", "REVIEW DISCIPLINE"],
      },
      {
        label: "MCP-assisted application exploration",
        description:
          "Use Playwright MCP to inspect real application behavior, UI states, browser behavior, flows, and edge cases.",
        notes: ["Validate assumptions", "Compare ticket intent with implementation", "Observe real product behavior"],
        labels: ["MCP-ASSISTED"],
      },
      {
        label: "QA execution",
        description:
          "Perform exploratory testing, regression checks, existing automation validation, manual scenario verification, API validation, and cross-flow validation.",
        notes: ["Execute scenarios", "Validate integrations", "Check regression-sensitive paths"],
        labels: ["QA EXECUTION", "HUMAN REVIEW REQUIRED"],
      },
      {
        label: "Defect reporting",
        description:
          "Create structured Jira-ready defect reports with evidence, reproduction steps, implementation observations, and risk context.",
        notes: ["Attach evidence", "Include reproduction path", "Explain engineering impact"],
        labels: ["REVIEW DISCIPLINE"],
      },
    ],
    supportingNotes: [
      "AI helps structure context and reduce preparation time, but the QA engineer owns risk interpretation.",
      "MCP tooling is used to observe the real product before finalizing conclusions.",
      "The output is better investigation quality, clearer validation scope, and more actionable defect reporting.",
    ],
  },
  {
    slug: "automation-engineering-workflow",
    eyebrow: "Workflow 02",
    title: "AI-assisted automation engineering workflow",
    summary:
      "Automation creation and review work: test analysis, application exploration, framework-aware draft generation, dedicated review, and final pull-request preparation.",
    boundary:
      "This workflow is specifically for automation engineering. It starts from reviewed test scope and ends with implementation prepared for normal engineering review.",
    steps: [
      {
        label: "Xray / Jira test analysis",
        description:
          "Analyze existing test cases, acceptance criteria, reusable patterns, automation scope, and framework conventions.",
        notes: ["Review existing coverage", "Identify reusable patterns", "Confirm automation value"],
        labels: ["ENGINEERING WORKFLOW", "HUMAN REVIEW REQUIRED"],
      },
      {
        label: "Application exploration with Playwright MCP",
        description:
          "Inspect real application behavior, selectors, flows, UI states, and edge cases before implementation.",
        notes: ["Validate selectors", "Check UI state transitions", "Observe edge paths"],
        labels: ["MCP-ASSISTED"],
      },
      {
        label: "Automation draft generation",
        description:
          "Generate Playwright or Cypress test structure using existing framework architecture, fixtures, selectors, utilities, and patterns.",
        notes: ["Reuse fixtures", "Follow local architecture", "Avoid one-off test structure"],
        labels: ["IMPLEMENTATION SUPPORT"],
      },
      {
        label: "Automation review workflow",
        description:
          "Review generated code with dedicated review skills and Codex reviewer validation for maintainability, assertions, negative paths, and framework consistency.",
        notes: ["Validate assertions", "Check maintainability", "Review negative paths"],
        labels: ["REVIEW DISCIPLINE", "HUMAN REVIEW REQUIRED"],
      },
      {
        label: "Final automation preparation",
        description:
          "Refine implementation, improve readability, align with project conventions, and prepare for pull request review.",
        notes: ["Polish readability", "Align naming", "Prepare PR-ready code"],
        labels: ["ENGINEERING WORKFLOW"],
      },
    ],
    supportingNotes: [
      "AI accelerates scaffolding, but architecture, test intent, and review quality remain engineering responsibilities.",
      "Application exploration happens before code generation so automation reflects observed product behavior.",
      "The output is maintainable automation prepared for normal pull request review, not one-click testing.",
    ],
  },
] as const satisfies readonly AiWorkflowModel[];

export const aiWorkflowImpact = [
  "Routine QA preparation becomes faster without removing engineering review.",
  "Automation work starts from product context, existing architecture, and real application behavior.",
  "Review, defect reporting, and test planning become more consistent across features.",
  "The workflow is scalable because skills, agents, and integrations can be reused instead of rebuilt for every task.",
] as const;
