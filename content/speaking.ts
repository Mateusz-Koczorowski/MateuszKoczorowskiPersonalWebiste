import type { ContentStatus } from "./types";

export type SpeakingEntry = {
  slug: string;
  title: string;
  format: "talk" | "workshop" | "article" | "community-session";
  status: ContentStatus;
  eventName?: string;
  date?: string;
  audience: string;
  summary: string;
  topics: string[];
  links?: {
    slides?: string;
    recording?: string;
    article?: string;
  };
  needsManualInput?: string[];
};

export const speakingEntries = [
  {
    slug: "paida-2024-presentation",
    title: "From Bugs to Bots - AI at the Service of Your Efficiency",
    format: "talk",
    status: "published",
    eventName: "PAIDA Meetup",
    date: "November 2024",
    audience: "QA engineers and AI-curious engineering teams",
    summary:
      "Technical community presentation connected with STX Next QA initiatives, focused on practical AI usage in QA: test design support, automation assistance, exploratory workflows, and review-driven adoption without removing engineering judgment.",
    topics: ["AI-assisted QA", "workflow orchestration", "test design", "human review"],
    links: {
      recording:
        "https://www.youtube.com/watch?v=SpjqcGc_WPg&list=PLwXxS6lAcQUNPLBaXPoeIL05PWzNV0-v6&index=5&t=3263s",
    },
  },
] as const satisfies readonly SpeakingEntry[];
