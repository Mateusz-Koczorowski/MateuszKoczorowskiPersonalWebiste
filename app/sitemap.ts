import type { MetadataRoute } from "next";

import { professionalExperience } from "@/content";
import type { CompanyExperience } from "@/content/experience";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) {
    return [];
  }

  const updated = new Date("2026-10-29T00:00:00.000Z");
  const companies: readonly CompanyExperience[] = professionalExperience;
  const caseStudies = companies.flatMap((company) =>
    company.projects.map((project) => ({
      url: `${siteConfig.url}/work/${project.slug}`,
      lastModified: updated,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [
    {
      url: siteConfig.url,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified: new Date("2026-05-21T00:00:00.000Z"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...caseStudies,
  ];
}
