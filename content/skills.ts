import type { Skill } from "./types";

export const skills = [
  {
    name: "Cypress and Playwright automation",
    category: "automation",
    level: "lead",
    summary:
      "Designing and maintaining end-to-end suites with TypeScript, readable abstractions, stable data handling, and CI-ready execution.",
    keywords: ["Cypress", "Playwright", "TypeScript", "E2E"],
  },
  {
    name: "Manual and exploratory testing",
    category: "testing",
    level: "lead",
    summary:
      "Investigating product behavior through risk-based scenarios, edge cases, defect reproduction, and release-focused validation.",
    keywords: ["risk analysis", "exploratory testing", "release validation"],
  },
  {
    name: "API and integration validation",
    category: "testing",
    level: "advanced",
    summary:
      "Testing REST APIs, service behavior, data flows, and integration boundaries with Postman and automation-backed checks.",
    keywords: ["REST APIs", "Postman", "integration testing"],
  },
  {
    name: "Quality strategy and metrics",
    category: "strategy",
    level: "lead",
    summary:
      "Introducing lightweight quality strategy, test planning, test management, and metrics that support release decisions without process overhead.",
    keywords: ["release confidence", "test planning", "test metrics"],
  },
  {
    name: "AI-assisted QA workflows",
    category: "ai",
    level: "advanced",
    summary:
      "Using AI for reviewed test design support, debugging hypotheses, exploratory charters, documentation, and automation maintenance ideas.",
    keywords: ["prompt engineering", "human review", "AI agents"],
  },
  {
    name: "CI/CD quality feedback",
    category: "delivery",
    level: "advanced",
    summary:
      "Integrating automated checks into GitLab pipelines and shaping feedback that teams can trust during everyday delivery.",
    keywords: ["GitLab CI/CD", "pipeline feedback", "quality gates"],
  },
  {
    name: "Hardware-connected testing",
    category: "tooling",
    level: "advanced",
    summary:
      "Validating software behavior against physical devices, isolated environments, embedded touch interfaces, and failover scenarios.",
    keywords: ["industrial systems", "hardware integration", "Linux"],
  },
  {
    name: "Technical communication",
    category: "communication",
    level: "lead",
    summary:
      "Writing technical documentation, mentoring QA engineers, supporting recruitment, and explaining quality trade-offs clearly.",
    keywords: ["documentation", "mentoring", "recruitment support"],
  },
] as const satisfies readonly Skill[];
