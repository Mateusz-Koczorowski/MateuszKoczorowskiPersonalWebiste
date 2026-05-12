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
    <main id="main-content" className="min-h-screen overflow-hidden bg-background/35">
      <section
        aria-labelledby="hero-sandbox-heading"
        className="relative flex min-h-screen items-center px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.96_0.01_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.96_0.01_255/0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_72%,transparent)]"
        />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:gap-14 lg:grid-cols-[minmax(19rem,0.78fr)_minmax(0,1.22fr)] lg:gap-20 xl:gap-24">
          <AnimatedSection className="order-1">
            <figure className="relative mx-auto w-full max-w-[21rem] sm:max-w-[24rem] lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-xl border border-border/80 bg-card/35"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border/90 bg-card shadow-2xl shadow-black/25">
                <Image
                  src={profileImagePath}
                  alt="Mateusz Koczorowski"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover saturate-[0.92]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background/22 via-transparent to-transparent"
                />
              </div>
              <figcaption className="sr-only">Portrait of Mateusz Koczorowski.</figcaption>
            </figure>
          </AnimatedSection>

          <AnimatedSection className="order-2 text-center lg:text-left">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary sm:text-sm">
              Senior QA Engineering / AI-assisted quality
            </p>
            <h1
              id="hero-sandbox-heading"
              className="mx-auto mt-6 max-w-5xl text-[clamp(3.25rem,8vw,6.25rem)] font-semibold leading-[0.94] text-foreground lg:mx-0"
            >
              {profile.name}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl font-medium leading-8 text-foreground sm:text-2xl lg:mx-0">
              {profile.role}
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 lg:mx-0">
              {heroStatement}
            </p>

            <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 border-y border-border/70 py-5 text-left sm:grid-cols-3 lg:mx-0">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Focus
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">Automation strategy</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Mode
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">Remote-friendly</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Base
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">
                  {profile.location.label}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button asChild className="min-h-12 w-full px-5 text-sm sm:w-auto">
                <Link href="/#experience">
                  View Experience
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="min-h-12 w-full px-5 text-sm sm:w-auto">
                <a href="/files/mateusz-koczorowski-cv.pdf">
                  Download CV
                  <ArrowDownToLine aria-hidden="true" className="size-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="min-h-12 w-full px-4 text-sm sm:w-auto">
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
