import type { Skill } from "./types";

export const skills = [
  {
    name: "Test automation architecture",
    category: "automation",
    level: "lead",
    summary:
      "Designing maintainable automated check suites with clear ownership, stable abstractions, and useful feedback loops.",
    keywords: ["E2E", "API", "integration", "maintainability"],
  },
  {
    name: "Risk-based testing",
    category: "testing",
    level: "lead",
    summary:
      "Prioritizing test effort around product risk, user impact, delivery context, and observable failure modes.",
    keywords: ["risk analysis", "coverage strategy", "exploratory testing"],
  },
  {
    name: "Quality strategy",
    category: "strategy",
    level: "lead",
    summary:
      "Connecting team practices, release readiness, defect prevention, and engineering feedback into practical quality plans.",
    keywords: ["release confidence", "team process", "governance"],
  },
  {
    name: "AI-assisted QA workflows",
    category: "ai",
    level: "advanced",
    summary:
      "Using AI as a reviewed support tool for test ideas, charters, documentation, and automation maintenance.",
    keywords: ["human review", "prompting", "confidentiality"],
  },
  {
    name: "Technical communication",
    category: "communication",
    level: "lead",
    summary:
      "Turning testing decisions, trade-offs, and risks into clear language for engineers, delivery teams, and stakeholders.",
    keywords: ["documentation", "mentoring", "stakeholder alignment"],
  },
  {
    name: "CI quality gates",
    category: "tooling",
    level: "advanced",
    summary:
      "Shaping practical pipelines that run checks teams trust and can maintain without slowing everyday delivery.",
    keywords: ["CI", "linting", "typechecking", "build checks"],
  },
] as const satisfies readonly Skill[];
