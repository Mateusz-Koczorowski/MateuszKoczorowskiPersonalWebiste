import { focusAreas } from "./expertise";

export const profile = {
  name: "Mateusz Koczorowski",
  role: "Senior QA Engineer",
  headline:
    "Senior QA engineering for complex products, automation, and AI-assisted quality workflows.",
  summary:
    "Senior QA Engineer focused on automation architecture, quality ownership, scalable testing approaches, and pragmatic use of AI in software quality workflows.",
  location: {
    label: "Poland",
    isRemoteFriendly: true,
  },
  positioning:
    "Senior quality engineering for teams that need maintainable automation, clear release risk, and human-reviewed AI-assisted QA workflows.",
  publicBio:
    "I work at the intersection of test automation, exploratory testing, delivery risk, and engineering process improvement. My focus is building testing systems that stay maintainable in CI/CD and help teams make better release decisions.",
  about: {
    intro:
      "I treat QA as technical ownership: understanding architecture, finding risk early, and turning testing into useful engineering feedback.",
    paragraphs: [
      "My work connects automation architecture, exploratory testing, API and integration validation, and release confidence. I use AI-assisted workflows for test design, debugging hypotheses, documentation structure, and review support, with human judgment kept at the center.",
    ],
    principles: [
      "Frame quality through product risk, architecture, and release decisions.",
      "Build automation that is maintainable, observable, and worth trusting.",
      "Use AI to accelerate thinking while preserving review discipline and evidence.",
    ],
  },
  availability: {
    status: "available-for-selected-conversations",
    label: "Open to selected QA leadership, automation, mentoring, and speaking conversations.",
  },
  editingNotes: [
    "Keep claims specific and evidence-led. Do not add metrics unless they can be verified publicly.",
    "Keep availability and preferred contact language current.",
  ],
} as const;

export const profileSummary = profile.summary;
export { focusAreas };
