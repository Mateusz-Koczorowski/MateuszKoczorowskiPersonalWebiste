import { ArrowDownToLine, ArrowRight, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { contactLinks, profile } from "@/content";

const profileImagePath = "/images/profile/profile-photo.jpg";

const heroStatement =
  "Senior quality engineering for teams that need reliable test automation, practical quality strategy, and human-reviewed AI-assisted QA workflows.";

export const metadata: Metadata = {
  title: "Hero Design Sandbox",
  description:
    "Design sandbox prototype for the homepage hero section of Mateusz Koczorowski's personal website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HeroDesignSandboxPage() {
  const contactHref = contactLinks[0]?.href ?? "/contact";

  return (
    <main id="main-content" className="min-h-screen overflow-hidden">
      <section
        aria-labelledby="hero-sandbox-heading"
        className="relative flex min-h-screen items-center px-6 py-12 sm:px-8 lg:px-10"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:gap-12 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
          <AnimatedSection className="order-1">
            <div className="relative mx-auto w-full max-w-[24rem] lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-xl border border-primary/10 bg-primary/5"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card shadow-2xl shadow-black/30">
                <Image
                  src={profileImagePath}
                  alt="Mateusz Koczorowski"
                  width={960}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-2">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary">
              Design sandbox / Homepage hero
            </p>
            <h1
              id="hero-sandbox-heading"
              className="mt-5 max-w-5xl text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.98] text-foreground"
            >
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-medium leading-8 text-foreground sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              {heroStatement}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="min-h-11 w-full sm:w-auto">
                <Link href="/#experience">
                  View Experience
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="min-h-11 w-full sm:w-auto">
                <a href="/files/mateusz-koczorowski-cv.pdf">
                  Download CV
                  <ArrowDownToLine aria-hidden="true" className="size-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="min-h-11 w-full sm:w-auto">
                <a href={contactHref}>
                  Contact
                  <Mail aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
