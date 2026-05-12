import type { ContentStatus } from "./types";

export type SpeakingEntry = {
  slug: string;
  title: string;
  format: "talk" | "workshop" | "article" | "community-session";
  status: ContentStatus;
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
    slug: "practical-quality-engineering",
    title: "Practical quality engineering",
    format: "talk",
    status: "planned",
    audience: "QA engineers, engineering teams, and delivery leaders",
    summary:
      "A future talk outline about risk-aware testing, automation judgment, and quality ownership in product teams.",
    topics: ["quality strategy", "automation judgment", "delivery risk"],
    needsManualInput: ["Final title", "Event name", "Date", "Public links"],
  },
  {
    slug: "responsible-ai-assisted-qa",
    title: "Responsible AI-assisted QA",
    format: "workshop",
    status: "planned",
    audience: "QA engineers and technical leads exploring AI-supported workflows",
    summary:
      "A future workshop outline for using AI in test design and documentation while preserving review, accuracy, and confidentiality.",
    topics: ["AI-assisted QA", "review discipline", "confidentiality"],
    needsManualInput: ["Workshop scope", "Examples safe for public use", "Materials link"],
  },
] as const satisfies readonly SpeakingEntry[];
