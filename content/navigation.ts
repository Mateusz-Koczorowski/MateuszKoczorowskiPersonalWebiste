export type NavigationItem = {
  label: string;
  href: string;
  description: string;
  status: "active" | "planned";
};

export const primaryNavigation = [
  {
    label: "Focus",
    href: "#expertise",
    description: "Current home-page expertise section.",
    status: "active",
  },
  {
    label: "Case studies",
    href: "/case-studies",
    description: "Future index for sanitized technical case studies.",
    status: "planned",
  },
  {
    label: "Speaking",
    href: "/speaking",
    description: "Future speaking, workshop, and community archive.",
    status: "planned",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Future contact route or section.",
    status: "planned",
  },
] as const satisfies readonly NavigationItem[];

export const utilityNavigation = [
  {
    label: "Docs",
    href: "/docs/PRD.md",
    description: "Repository product and implementation documentation.",
    status: "active",
  },
] as const satisfies readonly NavigationItem[];
