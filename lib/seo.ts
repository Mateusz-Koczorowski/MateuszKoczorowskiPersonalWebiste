import { contactLinks, profile, socialLinks } from "@/content";

export const siteConfig = {
  name: "Mateusz Koczorowski",
  legalName: "Mateusz Koczorowski",
  role: "Senior QA Engineer",
  locale: "en_US",
  language: "en",
  themeColor: "#071019",
  accentColor: "#6ee7d8",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "",
  title: "Mateusz Koczorowski | Senior QA Engineer",
  shortTitle: "Senior QA Engineer",
  description:
    "Senior QA Engineer focused on test automation architecture, Playwright and Cypress workflows, AI-assisted QA, MCP-enabled quality systems, and release risk strategy.",
  previewTitle: "Mateusz Koczorowski | Senior QA Engineer",
  previewDescription:
    "Quality engineering, automation architecture, Playwright, Cypress, AI-assisted QA workflows, and practical QA strategy for complex product teams.",
  manifestName: "Mateusz Koczorowski - Senior QA Engineer",
  email: contactLinks.find((link) => link.label === "Email")?.href.replace("mailto:", "") ?? "",
  socialProfiles: socialLinks.map((link) => link.href),
  keywords: [
    "Senior QA Engineer",
    "QA Automation Engineer",
    "Playwright Engineer",
    "AI-assisted QA",
    "QA Architecture",
    "Cypress Automation",
    "Software Quality Engineering",
    "MCP workflows",
    "QA strategy",
    "Test automation architecture",
    "Quality engineering",
    "Release risk strategy",
    "End-to-end testing",
    "Test automation",
    "QA leadership",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return siteConfig.url ? `${siteConfig.url}${normalizedPath}` : normalizedPath;
}

export function createStructuredData() {
  const websiteUrl = absoluteUrl("/");
  const imageUrl = absoluteUrl("/opengraph-image");

  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${websiteUrl}#person`,
      name: siteConfig.name,
      url: websiteUrl,
      image: imageUrl,
      email: siteConfig.email,
      jobTitle: siteConfig.role,
      worksFor: {
        "@type": "Organization",
        name: "STX Next",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: profile.location.label,
      },
      sameAs: siteConfig.socialProfiles,
      knowsAbout: siteConfig.keywords,
      description: profile.summary,
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${websiteUrl}#profile`,
      url: websiteUrl,
      name: siteConfig.previewTitle,
      description: siteConfig.description,
      about: {
        "@id": `${websiteUrl}#person`,
      },
      mainEntity: {
        "@id": `${websiteUrl}#person`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${websiteUrl}#website`,
      url: websiteUrl,
      name: siteConfig.name,
      inLanguage: siteConfig.language,
      description: siteConfig.description,
      publisher: {
        "@id": `${websiteUrl}#person`,
      },
    },
  ];
}
