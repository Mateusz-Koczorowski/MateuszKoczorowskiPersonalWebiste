import type { LanguageProficiency } from "./types";

export type Language = {
  name: string;
  proficiency: LanguageProficiency;
  publicLabel: string;
  needsConfirmation?: boolean;
};

export const languages = [
  {
    name: "Polish",
    proficiency: "native",
    publicLabel: "Native",
    needsConfirmation: false,
  },
  {
    name: "English",
    proficiency: "professional",
    publicLabel: "B2",
    needsConfirmation: false,
  },
] as const satisfies readonly Language[];
