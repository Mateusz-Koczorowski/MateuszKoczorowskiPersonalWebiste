import type { ContentStatus } from "./types";

export type WritingEntry = {
  slug: string;
  title: string;
  status: ContentStatus;
  publication?: string;
  date?: string;
  summary: string;
  topics: string[];
  links?: {
    article?: string;
  };
  needsManualInput?: string[];
};

export const writingEntries = [
  {
    slug: "ai-hallucinations",
    title: "AI Hallucinations: Why They Happen, Their Risks, and How to Mitigate Them",
    status: "published",
    publication: "STX Next Blog",
    date: "May 13, 2025",
    summary:
      "Technical article contribution about AI hallucinations, verification habits, and the reliability risks that matter when AI is used in software development, testing, and QA workflows.",
    topics: ["AI reliability", "hallucination risk", "software quality", "AI-assisted workflows"],
    links: {
      article: "https://career.stxnext.com/blog/ai-hallucinations",
    },
  },
] as const satisfies readonly WritingEntry[];
