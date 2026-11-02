/**
 * Copy for the redesigned home page (AI-first positioning).
 *
 * Editing notes:
 * - Every claim in `evidence` must link to something that backs it up.
 * - `guardrails` describe how AI is used safely. Keep them true to day-to-day practice.
 * - `recentlyBuilt` renders only when it has at least `recentlyBuiltMinimumEntries` real
 *   entries. Update it monthly; an empty or stale log is worse than none.
 */

export type EvidenceItem = {
  claim: string;
  links: { label: string; href: string; external?: boolean }[];
};

export type RecentlyBuiltEntry = {
  /** Display label, e.g. "Oct 2026". */
  date: string;
  name: string;
  description: string;
  href?: string;
};

export const hero = {
  intro: "Senior QA Engineer at STX Next, AI QA Champion in my client team",
  heading:
    "AI-first quality engineering. I build the agents, skills and workflows that make releases safer, and I keep the judgment human.",
  lead: "As AI QA Champion in my client team, I lead our move to an AI-first way of working: test design, test cases, automation and reviews now run through skills and agents I built, with a person signing off on every result. I mentor engineers in it, research it in my Master's thesis and keep building after hours. Underneath sit over five years of QA and solid Playwright and Cypress automation.",
  availability:
    "Based in Poznań, Poland (CET). I work in Polish and English. Happy to talk about test automation, AI in QA, or a session for your team.",
} as const;

export const evidence = [
  {
    claim:
      "As AI QA Champion in my client team I am responsible for rolling out AI-first QA there. Test design, test cases, automation and reviews already run on skills and agents I built.",
    links: [{ label: "See what I built", href: "#built" }],
  },
  {
    claim:
      "My exploratory testing agent runs in real delivery work and is shared with a QA organization of about 40 engineers.",
    links: [{ label: "See how the agent works", href: "#testing-agent" }],
  },
  {
    claim:
      "I mentor QA engineers from testing basics to building agents and run knowledge sharing on AI in QA, at STX Next and inside client teams. At STX Next I also run technical QA interviews.",
    links: [
      { label: "Mentoring and initiatives", href: "#mentoring" },
      {
        label: "Watch the PAIDA talk",
        href: "https://www.youtube.com/watch?v=SpjqcGc_WPg&list=PLwXxS6lAcQUNPLBaXPoeIL05PWzNV0-v6&index=5&t=3263s",
        external: true,
      },
    ],
  },
  {
    claim:
      "Critical-path coverage from about 20% to 80% on a clinical trials platform, then regression about 75% faster after the Playwright migration I led.",
    links: [{ label: "Read the case study", href: "/work/ai-driven-clinical-trials-platform" }],
  },
] as const satisfies readonly EvidenceItem[];

export const aiFirst = {
  heading: "How I work AI-first",
  intro:
    "AI-first, for me, means starting each testing task by asking which part an agent can do and which part needs my judgment. Then I build the skill or workflow for the agent's part and treat it like any other piece of engineering: versioned, reviewed and measured.",
  sources: [
    {
      title: "At work, as AI QA Champion in the client team",
      body: "I am responsible for moving my team to AI-first QA on a live clinical trials product, not a demo. We have switched fully, and I keep improving the skills and agents as we learn.",
    },
    {
      title: "In research",
      body: "My Master's thesis at WSB Merito compares Claude Code and OpenAI Codex in generating tests across testing levels. The same question as my day job, examined formally.",
    },
    {
      title: "After hours",
      body: "I build my own projects with AI agents and follow new tools as they ship, so what I bring to the team has already been tried.",
    },
  ],
  pillars: [
    {
      title: "I build",
      body: "Skills for each step of testing and agents that chain them: from test design and Xray test cases to Playwright tests and merge request reviews.",
    },
    {
      title: "I keep it economical",
      body: "A big part of the work is cost engineering, not prompting. A component playbook tells the agent how the app behaves, so it spends fewer tokens rediscovering context.",
    },
    {
      title: "I teach it",
      body: "I mentor my team through the switch, plus knowledge sharing on AI-assisted QA, internally and inside client engineering teams, including AI bootcamp support. Topics: agent and workflow design, context strategy, token cost.",
    },
  ],
} as const;

/** Confirmed by Mateusz (Nov 2026). Each line must match real practice. */
export const guardrails = {
  heading: "Guardrails",
  intro: "How I keep AI safe in regulated software.",
  items: [
    "Every finding is reviewed by me before it reaches a developer or a ticket.",
    "Each agent run leaves a traceable record: input, steps, evidence, outcome.",
  ],
} as const;

/** Skills and agents in daily use. Keep each line factual and free of client details. */
export const builtCatalog = {
  heading: "What I have built",
  intro: "Skills and agents my team uses every day on a clinical trials platform.",
  groups: [
    {
      title: "Test design",
      items: [
        "Test design skill: turns a feature into risk-based test scenarios",
        "Test architecture skill: decides what belongs at which test level",
        "Spec check skill: compares the specification with existing test cases and updates them",
      ],
    },
    {
      title: "Test cases in Xray",
      items: [
        "Generating and editing Xray test cases with AI, reviewed before they are saved",
        "Test data skill: produces realistic data in the clinical trials formats the product uses",
      ],
    },
    {
      title: "Automation",
      items: [
        "Automation agent: reads a test case from the Xray API, navigates the app through Playwright MCP and writes the Playwright test",
        "Exploratory testing agent: from the ticket to a ticket-ready defect report",
      ],
    },
    {
      title: "Review",
      items: [
        "Merge request review skill for test code",
        "Test review skill: checks a single test for coverage, stability and readability",
      ],
    },
  ],
} as const;

export const recentlyBuiltMinimumEntries = 3;

/** Newest first. Example entry shape:
 * { date: "Oct 2026", name: "Release notes checker", description: "Compares merged tickets with release notes and flags gaps." }
 */
export const recentlyBuilt: readonly RecentlyBuiltEntry[] = [];

export const testingAgent = {
  heading: "My exploratory testing agent",
  intro:
    "Running in real delivery work for several months. It does the groundwork, I review every result.",
  steps: [
    { title: "Read the ticket", body: "Acceptance criteria, discussion, linked merge requests." },
    { title: "Plan by risk", body: "Regression scope, manual and automated paths." },
    { title: "Explore the app", body: "Playwright MCP inspects the running product." },
    { title: "Run checks", body: "Exploratory scenarios, API and integration checks." },
    { title: "Run regression", body: "Existing suites plus manual results, in one place." },
    { title: "Report defects", body: "Ticket-ready, with evidence and repro steps." },
  ],
  humanSide: {
    title: "What stays with me",
    items: [
      "Which risks matter for this release",
      "Whether a finding is a real defect",
      "What goes into the report and to whom",
    ],
  },
  connections: {
    title: "What it is connected to",
    body: "MCP servers for Atlassian (Jira), Playwright, Chrome DevTools and Figma, so the agent works from the real ticket, the running app and the design.",
  },
} as const;

/** Home-page summaries for the three featured projects, keyed by project slug. */
export const featuredWork = [
  {
    slug: "ai-driven-clinical-trials-platform",
    shortDomain: "Healthcare and clinical research",
    title: "AI-driven clinical trials platform",
    stack: "Playwright, Cypress, TypeScript",
    problem:
      "Regression had to scale in a domain with pharmaceutical-grade quality expectations, and the Cypress suite was getting slow.",
    action:
      "Grew end-to-end coverage across critical user paths, then led the migration from Cypress to Playwright.",
    result:
      "Critical-path coverage from about 20% to 80%. Regression runtime down about 75%, with the same coverage.",
  },
  {
    slug: "industrial-monitoring-risk-analysis-platform",
    shortDomain: "Industrial analytics",
    title: "Industrial monitoring and risk analysis platform",
    summary:
      "Built the Cypress and TypeScript framework from scratch and introduced QA strategy, test management and metrics for sensor data and anomaly detection views.",
  },
  {
    slug: "industrial-emergency-lighting-control-platform",
    shortDomain: "Industrial hardware",
    title: "Emergency lighting control platform",
    summary:
      "Tested a web app wired to physical emergency lighting devices and embedded touch panels, including failover and emergency states, with Cypress running in GitLab CI against real devices.",
  },
] as const;

export const experienceSummaries: Record<string, { role: string; note?: string; body: string }> = {
  "stx-next": {
    role: "Senior QA Engineer",
    note: "Promoted Jul 2025, previously Regular+ QA Engineer",
    body: "Automation architecture and AI-first QA workflows on client projects. Also mentor and technical QA recruiter at STX Next, AI QA Champion in the client team, selected for the Talent Navigator high-potential program.",
  },
  merixstudio: {
    role: "Regular QA Specialist",
    body: "Hardware-connected testing, a Cypress framework built from scratch for sports field analytics, exploratory QA on an AI threat analysis product.",
  },
  "colours-factory": {
    role: "System Support Specialist and Software Tester",
    body: "QA foundations on a large online printing platform: e-commerce, CMS, production workflows and partner migration.",
  },
};

/** Mentoring, recruiting and knowledge sharing at STX Next. */
export const sharing = {
  heading: "Mentoring, recruiting and knowledge sharing",
  intro:
    "Mentoring and knowledge sharing at STX Next and inside client teams, recruiting at STX Next, all alongside client work. It is the part of my job I am proudest of: helping other engineers grow and helping the company hire well.",
  mentoring: {
    title: "Mentoring, from the first test to the first agent",
    intro:
      "Engineers at STX Next and in client teams. The scope follows the person, not a fixed curriculum. For one mentee the focus was Git, especially resolving merge conflicts. For others it started much earlier or went much further.",
    /** A real progression from basics to advanced, so it renders as an ordered track. */
    path: [
      {
        title: "Testing fundamentals",
        body: "How to think about risk, test design and good bug reports.",
      },
      {
        title: "Automation from zero",
        body: "First Playwright and Cypress tests, then a maintainable structure.",
      },
      {
        title: "Programming basics",
        body: "Enough JavaScript and TypeScript to write and read test code with confidence.",
      },
      {
        title: "Git beyond the basics",
        body: "Branching, rebasing and resolving merge conflicts without fear.",
      },
      { title: "AI in daily QA", body: "Using AI well, and keeping its cost under control." },
      {
        title: "Building agents",
        body: "Designing skills, workflows and agents for real testing work.",
      },
    ],
  },
  recruiting: {
    title: "Technical recruiting",
    body: "I own the technical stage of QA hiring at STX Next. After the HR screen, I run the technical interview on my own, assess the candidate across several areas and write structured feedback for the hiring team.",
  },
  initiatives: {
    title: "Knowledge sharing and initiatives",
    items: [
      {
        kind: "Knowledge sharing",
        text: "Many sessions on AI-assisted QA, inside STX Next and inside client engineering teams.",
      },
      {
        kind: "AI bootcamp",
        text: "Consultations for an internal AI bootcamp on practical quality workflows.",
      },
      {
        kind: "Role",
        text: "AI QA Champion in my client team, leading its move to an AI-first way of working.",
      },
      {
        kind: "Program",
        text: "Selected for Talent Navigator, a high-potential program focused on leadership and company impact.",
      },
    ],
  },
} as const;

export const tools =
  "Playwright, Cypress, TypeScript, Postman, REST APIs, GitLab CI/CD, Jira, Linux, MCP servers, Claude Code.";

export const contact = {
  heading: "Get in touch",
  lead: "Happy to talk about test automation, AI in QA, or a session for your team. Email works best.",
  /** Set to "/cv.pdf" after adding public/cv.pdf. The CV button stays hidden while this is null. */
  cvHref: null as string | null,
} as const;
