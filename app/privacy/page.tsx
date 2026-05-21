import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy notice for Mateusz Koczorowski's personal portfolio website, including contact, hosting logs, external links, cookies, and analytics.",
  alternates: siteConfig.url
    ? {
        canonical: "/privacy",
      }
    : undefined,
};

const currentPractices = [
  "This website does not currently use analytics.",
  "This website does not currently use tracking cookies.",
  "This website does not include contact forms.",
  "This website does not use newsletter signup.",
  "This website does not intentionally store data in localStorage, sessionStorage, or cookies.",
];

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen px-6 py-24 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Back to home
        </Link>

        <header className="mt-12 border-b border-border/35 pb-10">
          <p className="text-sm font-medium text-primary">Privacy notice</p>
          <h1 className="mt-4 text-[clamp(2.5rem,8vw,5rem)] font-semibold leading-[0.96] text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            This is a simple privacy notice for a personal portfolio website. It explains what is
            currently collected, what is not used, and what may happen when you follow external
            links or contact me by email.
          </p>
        </header>

        <div className="space-y-12 py-12">
          <section aria-labelledby="current-practices-heading">
            <h2 id="current-practices-heading" className="text-xl font-semibold text-foreground">
              Current Website Practices
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              {currentPractices.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 size-1 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="contact-heading" className="border-t border-border/35 pt-10">
            <h2 id="contact-heading" className="text-xl font-semibold text-foreground">
              Contact By Email
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Contact happens through email links only. If you email me, I process the email address
              and message you provide only to read, manage, and respond to that conversation.
            </p>
          </section>

          <section aria-labelledby="hosting-heading" className="border-t border-border/35 pt-10">
            <h2 id="hosting-heading" className="text-xl font-semibold text-foreground">
              Hosting And Technical Logs
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Hosting providers may process standard technical logs such as IP address, user agent,
              request path, and timestamps for website security, operation, reliability, and abuse
              prevention.
            </p>
          </section>

          <section aria-labelledby="external-links-heading" className="border-t border-border/35 pt-10">
            <h2 id="external-links-heading" className="text-xl font-semibold text-foreground">
              External Links
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              This website may link to third-party websites such as LinkedIn, GitHub, YouTube, and
              STX Next. Those websites are operated by third parties and have their own privacy
              policies and practices.
            </p>
          </section>

          <section aria-labelledby="future-changes-heading" className="border-t border-border/35 pt-10">
            <h2 id="future-changes-heading" className="text-xl font-semibold text-foreground">
              Future Changes
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              If analytics, embeds, forms, newsletter signup, or other data-processing features are
              added in the future, this privacy notice should be updated before or when those changes
              go live.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
