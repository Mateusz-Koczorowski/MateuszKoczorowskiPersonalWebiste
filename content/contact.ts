import type { LinkTarget } from "./types";

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:add-public-email@example.com",
    description: "Replace with the public contact email before exposing a contact UI.",
    isPlaceholder: true,
  },
] as const satisfies readonly LinkTarget[];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/add-profile-slug",
    description: "Replace with the approved public LinkedIn profile URL.",
    isPlaceholder: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/add-profile-slug",
    description: "Replace with the approved public GitHub profile URL.",
    isPlaceholder: true,
  },
] as const satisfies readonly LinkTarget[];
