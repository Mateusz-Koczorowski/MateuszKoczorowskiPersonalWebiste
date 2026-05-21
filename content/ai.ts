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
  title: "AI-assisted QA investigation with human engineering judgment.",
  intro:
    "My AI work supports QA investigation: understanding tickets, exploring product behavior, finding risk, and preparing clearer evidence for engineering decisions.",
  paragraphs: [
    "The goal is not to hand testing or automation over to a model. AI is useful when it helps structure context, surface blind spots, and reduce repetitive preparation while the QA engineer owns risk, evidence, and release confidence.",
    "I use AI tools and MCP integrations for Jira-driven analysis, browser inspection, exploratory testing support, regression planning, defect investigation, and clearer reporting tied to delivery context.",
  ],
  highlights: [
    "Human review stays present at every quality decision.",
    "MCP integrations connect tickets, code, browsers, and design context.",
    "Outputs support investigation, reporting, and regression thinking rather than software generation.",
  ],
  tags: ["Ticket analysis", "Browser inspection", "Risk mapping"],
} as const;

export const aiQaWorkflowAreas = [
  {
    slug: "jira-risk-analysis",
    title: "Ticket and Risk Analysis",
    summary:
      "Jira context is turned into risks, open questions, affected flows, and practical validation scope before testing starts.",
    examples: [
      "Identify unclear acceptance criteria and hidden dependencies.",
      "Map feature changes to regression-sensitive workflows.",
      "Prepare focused exploratory and manual validation notes.",
    ],
    outcomes: [
      "Earlier visibility of product risk.",
      "Clearer validation priorities.",
      "Less time lost to vague tickets.",
    ],
    tags: ["Jira", "risk analysis", "test planning"],
  },
  {
    slug: "mcp-assisted-investigation",
    title: "MCP-assisted Product Investigation",
    summary:
      "Browser and application context are inspected directly so assumptions can be checked against the running product.",
    examples: [
      "Inspect UI states, network behavior, console output, and real user flows.",
      "Compare ticket intent with implemented behavior.",
      "Capture evidence for defects and developer handoff.",
    ],
    outcomes: [
      "Stronger defect investigation.",
      "More grounded QA conclusions.",
      "Better collaboration with developers.",
    ],
    tags: ["Playwright MCP", "DevTools", "exploratory testing"],
  },
  {
    slug: "structured-qa-reporting",
    title: "Structured QA Reporting",
    summary:
      "Investigation notes, reproduction paths, and technical observations are organized into concise reports developers can act on.",
    examples: [
      "Summarize expected behavior, actual behavior, scope, and evidence.",
      "Turn exploratory notes into clear Jira-ready defect reports.",
      "Separate confirmed issues from assumptions and follow-up questions.",
    ],
    outcomes: [
      "Cleaner engineering handoff.",
      "More consistent defect reports.",
      "Faster triage after QA discovery.",
    ],
    tags: ["defect reporting", "triage support", "QA evidence"],
  },
] as const satisfies readonly AiQaWorkflowArea[];

export const aiMcpIntegrations = [
  {
    slug: "atlassian-mcp",
    title: "Atlassian MCP",
    summary:
      "Jira context supports analysis, planning, and defect reporting without constant manual copying.",
    workflowUse: [
      "Analyze Jira tickets into risks, questions, test scenarios, and acceptance criteria gaps.",
      "Connect defect reports back to ticket context with consistent structure.",
      "Use ticket data as the starting point for manual validation and regression planning.",
    ],
    tags: ["Jira", "ticket analysis", "test planning", "defect orchestration"],
  },
  {
    slug: "playwright-mcp",
    title: "Playwright MCP",
    summary:
      "Live application behavior can be inspected during planning, exploratory testing, and scenario validation.",
    workflowUse: [
      "Explore the application through real browser interactions.",
      "Validate UI paths and scenario assumptions against the running product.",
      "Use observed behavior to refine risk analysis and defect reports.",
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
    "A realistic workflow starts with a ticket and ends with reviewed QA evidence. AI carries context between steps, while the QA engineer keeps ownership of risk, evidence, and final decisions.",
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
        "Draft scenario groups, exploratory notes, data needs, and regression candidates for human review.",
    },
    {
      label: "Playwright MCP Exploration",
      description:
        "Inspect real application behavior and validate assumptions before committing to automation design.",
    },
    {
      label: "Evidence Review",
      description:
        "Check findings, assumptions, reproduction paths, logs, screenshots, and coverage gaps before reporting.",
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
  tags: ["reusable skills", "manual QA support", "defect investigation", "regression planning"],
} as const;

export const aiQaWorkflowModels = [
  {
    slug: "qa-investigation-workflow",
    eyebrow: "Workflow",
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
        notes: [
          "Prioritize risk",
          "Separate manual and automated coverage",
          "Clarify validation depth",
        ],
        labels: ["QA EXECUTION", "REVIEW DISCIPLINE"],
      },
      {
        label: "MCP-assisted application exploration",
        description:
          "Use Playwright MCP to inspect real application behavior, UI states, browser behavior, flows, and edge cases.",
        notes: [
          "Validate assumptions",
          "Compare ticket intent with implementation",
          "Observe real product behavior",
        ],
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
] as const satisfies readonly AiWorkflowModel[];

export const aiWorkflowImpact = [
  "Routine QA preparation becomes faster without removing engineering review.",
  "Testing decisions stay grounded in ticket context, observed behavior, and product risk.",
  "Defect reporting and regression planning become more consistent across features.",
  "The workflow is practical because it supports QA judgment instead of replacing it.",
] as const;
