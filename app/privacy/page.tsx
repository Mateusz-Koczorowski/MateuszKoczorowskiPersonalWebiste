import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { contactLinks } from "@/content";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy notice",
  description:
    "How mateuszkoczorowski.com handles personal data: no analytics, no cookies, no forms. Email contact and standard hosting logs only.",
  alternates: siteConfig.url ? { canonical: "/privacy" } : undefined,
};

const lastUpdated = "2 November 2026";
const email = contactLinks[0].href.replace("mailto:", "");

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-3 border-t border-rule pt-8">
      <h2 id={id} className="text-[1.375rem] font-bold leading-snug">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-ink-soft">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-8 sm:pt-10">
      <Link href="/" className="inline-flex min-h-11 items-center text-[0.9375rem] font-semibold">
        Back to home
      </Link>

      <header className="mt-6 flex flex-col gap-4 pb-10">
        <h1 className="text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.025em] sm:text-5xl">
          Privacy notice
        </h1>
        <p className="text-lg leading-[1.55] text-ink-soft">
          I don&apos;t collect any personal data through this site: there are no analytics, no
          tracking cookies, no forms and no embedded third-party content. Two things still happen
          that the law asks me to explain: the hosting provider keeps standard technical logs, and
          if you email me, I receive your message.
        </p>
        <p className="text-[0.9375rem] text-graphite">Last updated: {lastUpdated}</p>
      </header>

      <div className="flex flex-col gap-10">
        <Block id="controller" title="Who is responsible for your data">
          <p>
            Mateusz Koczorowski, Poznań, Poland, is the controller of personal data processed
            through this website. You can reach me at{" "}
            <a href={contactLinks[0].href} className="font-semibold">
              {email}
            </a>
            .
          </p>
        </Block>

        <Block id="not-used" title="What this site does not do">
          <ul className="flex list-disc flex-col gap-1.5 pl-5">
            <li>No analytics or tracking of any kind.</li>
            <li>
              No cookies and nothing stored in localStorage or sessionStorage. The only exception
              would be a strictly necessary security cookie that the hosting provider may set if it
              ever has to run a security check on suspicious traffic. Such cookies do not need
              consent, which is why this site has no cookie banner.
            </li>
            <li>No contact forms and no newsletter.</li>
            <li>
              No embedded videos, maps or social widgets. Fonts and images are served from this
              site, not from third parties.
            </li>
          </ul>
        </Block>

        <Block id="email" title="When you email me">
          <p>
            I process your email address, name and the content of your message to read it, reply and
            keep the conversation going. The legal basis is my legitimate interest in answering
            messages sent to me (Article 6(1)(f) GDPR).
          </p>
          <p>
            My mailbox is hosted by Google (Gmail), so your message is also processed by Google LLC,
            which is certified under the EU-U.S. Data Privacy Framework and relies on the EU
            Standard Contractual Clauses where required. I keep the conversation for as long as it
            is relevant and delete it when it no longer is, or earlier if you ask me to.
          </p>
        </Block>

        <Block id="hosting" title="Hosting and technical logs">
          <p>
            The site is hosted by Vercel Inc. (USA). When you open a page, Vercel processes
            technical data such as your IP address, browser user agent, the page requested and the
            time of the request. This is needed to deliver the site and protect it from abuse. The
            legal basis is the legitimate interest in running a secure website (Article 6(1)(f)
            GDPR).
          </p>
          <p>
            Vercel keeps these logs for a limited time under its own retention rules. I do not
            export them or combine them with any other data. Vercel is certified under the EU-U.S.
            Data Privacy Framework and also relies on the EU Standard Contractual Clauses for
            transfers outside the EEA. Details are in{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold"
            >
              Vercel&apos;s privacy policy
            </a>
            .
          </p>
        </Block>

        <Block id="rights" title="Your rights">
          <p>
            You can ask me for access to your data, to correct or delete it, to restrict its
            processing, or object to it. Write to the email address above. You also have the right
            to lodge a complaint with the Polish data protection authority, the President of the
            Personal Data Protection Office (UODO, uodo.gov.pl).
          </p>
          <p>
            Sending me an email is voluntary. No decisions about you are made automatically and no
            profiling takes place.
          </p>
        </Block>

        <Block id="links" title="Links to other websites">
          <p>
            This site links to LinkedIn, GitHub, YouTube and the STX Next blog. Once you follow a
            link, the other site&apos;s own privacy policy applies.
          </p>
        </Block>

        <Block id="changes" title="Changes to this notice">
          <p>
            If I ever add analytics, embedded content, forms or anything else that processes data, I
            will update this notice before it goes live.
          </p>
        </Block>
      </div>
    </main>
  );
}
