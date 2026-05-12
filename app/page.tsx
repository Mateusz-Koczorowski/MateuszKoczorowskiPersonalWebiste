import { ArrowRight, Bot, FileText, FlaskConical, Mic2, ShieldCheck } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { focusAreas, profileSummary } from "@/content/profile";

const iconMap = {
  automation: FlaskConical,
  ai: Bot,
  strategy: ShieldCheck,
  studies: FileText,
  speaking: Mic2,
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
          <AnimatedSection>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.18em] text-primary">
              Senior QA Engineering
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Quality engineering for teams shipping complex software with confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {profileSummary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#focus-areas">
                  Explore focus areas
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="/docs/PRD.md">Read project docs</a>
              </Button>
            </div>
          </AnimatedSection>
        </section>

        <section
          id="focus-areas"
          aria-labelledby="focus-areas-heading"
          className="px-6 py-16 sm:px-8"
        >
          <div className="mx-auto max-w-6xl">
            <AnimatedSection>
              <h2 id="focus-areas-heading" className="text-2xl font-semibold sm:text-3xl">
                Foundation for the full website
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                These are the first content pillars for the brand system. Detailed pages and case
                studies will be implemented in later stories.
              </p>
            </AnimatedSection>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area) => {
                const Icon = iconMap[area.icon];

                return (
                  <AnimatedSection key={area.title}>
                    <article className="h-full rounded-lg border bg-card/70 p-5 shadow-2xl shadow-black/10 backdrop-blur">
                      <Icon aria-hidden="true" className="size-5 text-primary" />
                      <h3 className="mt-5 text-lg font-medium">{area.title}</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">{area.description}</p>
                    </article>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
