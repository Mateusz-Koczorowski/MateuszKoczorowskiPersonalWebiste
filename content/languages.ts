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
    publicLabel: "Polish: native",
    needsConfirmation: true,
  },
  {
    name: "English",
    proficiency: "professional",
    publicLabel: "English: professional working proficiency",
    needsConfirmation: true,
  },
] as const satisfies readonly Language[];
