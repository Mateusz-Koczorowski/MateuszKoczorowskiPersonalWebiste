import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) {
    return [];
  }

  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-05-21T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
