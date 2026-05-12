import { focusAreas } from "./expertise";

export const profile = {
  name: "Mateusz Koczorowski",
  role: "Senior QA Engineer",
  headline: "Quality engineering for teams shipping complex software with confidence.",
  summary:
    "A technical brand platform for QA leadership, automation architecture, AI-supported quality workflows, and practical engineering communication. The first release keeps the surface intentionally focused while the content system matures.",
  location: {
    label: "Poland",
    isRemoteFriendly: true,
  },
  positioning:
    "Senior quality engineering focused on practical automation, risk-aware delivery, and responsible AI-assisted QA workflows.",
  publicBio:
    "Senior QA Engineer working at the intersection of automation architecture, quality strategy, exploratory thinking, and technical communication.",
  availability: {
    status: "available-for-selected-conversations",
    label: "Open to selected QA leadership, automation, mentoring, and speaking conversations.",
  },
  editingNotes: [
    "Replace summary and publicBio with a more personal version when final approved wording is ready.",
    "Keep claims specific and evidence-led. Do not add metrics unless they can be verified publicly.",
  ],
} as const;

export const profileSummary = profile.summary;
export { focusAreas };
