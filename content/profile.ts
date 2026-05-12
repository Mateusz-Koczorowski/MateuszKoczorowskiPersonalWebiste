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
      "My QA work is based on technical ownership: understanding the product architecture, identifying failure modes early, and turning testing into an engineering feedback system rather than a final checklist.",
    paragraphs: [
      "I design automation around product risk, with attention to test data, environments, maintainability, and the cost of false confidence. I prefer practical coverage over broad but fragile suites, and I keep manual, exploratory, API, integration, and end-to-end testing connected instead of treating them as separate tracks.",
      "I use AI-assisted workflows in a controlled way: for test design support, debugging hypotheses, documentation structure, and exploratory analysis. The useful part is not speed alone. It is review discipline, source verification, and the ability to turn model output into evidence a team can trust.",
    ],
    principles: [
      "Quality ownership starts with clear risk framing and shared engineering decisions.",
      "Automation should improve feedback quality without becoming a hidden maintenance product.",
      "Process improvement works best when documentation, metrics, and testing habits stay lightweight and usable.",
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
