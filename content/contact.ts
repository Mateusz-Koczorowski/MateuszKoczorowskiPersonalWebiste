import type { LinkTarget } from "./types";

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:mkoczorowski.qa@gmail.com",
    description: "Direct email for selected QA, mentoring, and speaking conversations.",
  },
] as const satisfies readonly LinkTarget[];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mateusz-koczorowski/",
    description: "Professional profile, experience context, and direct network contact.",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mateusz-Koczorowski",
    description: "Public repositories, technical activity, and engineering examples.",
  },
] as const satisfies readonly LinkTarget[];
