export type EducationItem = {
  slug: string;
  institution: string;
  credential: string;
  field?: string;
  status: "verified" | "needs-input";
  notes?: string;
};

export const education = [
  {
    slug: "formal-education-placeholder",
    institution: "Add institution",
    credential: "Add degree, certification, or program",
    field: "Add field of study",
    status: "needs-input",
    notes:
      "Replace this placeholder with approved public education details, or remove the education section until details are ready.",
  },
] as const satisfies readonly EducationItem[];
