import {
  ArrowDownToLine,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Mic2,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedSection } from "@/components/animated-section";
import { SectionShell, StatusBadge, TagList, TechnicalCard } from "@/components/home-section";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  caseStudies,
  contactLinks,
  expertiseAreas,
  professionalExperience,
  profile,
  skills,
  socialLinks,
  speakingEntries,
} from "@/content";
import type { ExperienceItem } from "@/content/experience";
import type { SpeakingEntry } from "@/content/speaking";

const profileImagePath = "/images/profile/profile-photo.jpg";

const heroStatement =
  "Senior quality engineering for teams that need reliable test automation, practical quality strategy, and human-reviewed AI-assisted QA workflows.";

const iconMap = {
  automation: FlaskConical,
  ai: Bot,
  strategy: ShieldCheck,
  studies: FileText,
  speaking: Mic2,
};

const contactIconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

const skillGroupLabels = {
  automation: "Automation architecture",
  testing: "Testing practice",
  strategy: "Quality strategy",
  ai: "AI-assisted QA",
  delivery: "Delivery systems",
  communication: "Communication",
  tooling: "Quality tooling",
};

const groupedSkills = skills.reduce(
  (groups, skill) => {
    const group = skillGroupLabels[skill.category];
    groups[group] = [...(groups[group] ?? []), skill];
    return groups;
  },
  {} as Record<string, (typeof skills)[number][]>,
);

const experienceItems: readonly ExperienceItem[] = professionalExperience;
const communicationEntries: readonly SpeakingEntry[] = speakingEntries;

const caseStudyDisplayCopy = {
  "quality-strategy-for-saas-platform": {
    problem:
      "A product delivery context needed clearer risk framing, release confidence, and quality ownership without exposing client-specific detail.",
    responsibility:
      "Shape the quality strategy, align testing effort with delivery constraints, and make trade-offs visible to engineering and delivery partners.",
    impact:
      "Prepared for verified public outcomes; this preview intentionally avoids unsupported metrics until details are approved.",
  },
  "automation-architecture-for-web-application": {
    problem:
      "A modern web product needed automation choices that improved feedback without creating fragile maintenance overhead.",
    responsibility:
      "Define useful test-layer boundaries, focus end-to-end coverage where it carries real value, and improve maintainability signals.",
    impact:
      "Prepared for a future detail page with reviewed outcomes around suite reliability, ownership, and feedback quality.",
  },
  "ai-assisted-testing-workflow": {
    problem:
      "QA work needed better support for analysis, test ideas, and documentation while preserving confidentiality and human review.",
    responsibility:
      "Introduce AI as reviewed assistance for quality work, with clear boundaries for source material, accuracy, and decision-making.",
    impact:
      "Prepared for public-safe examples that separate useful support from unverified automation or coverage claims.",
  },
} satisfies Record<
  (typeof caseStudies)[number]["slug"],
  Record<"problem" | "responsibility" | "impact", string>
>;

const contactDisplayCopy = {
  LinkedIn: "Professional profile and direct network contact.",
  GitHub: "Public repositories and engineering activity.",
  Email: "Direct contact for selected QA, mentoring, and speaking conversations.",
};

export default function Home() {
  const contactHref = contactLinks[0]?.href ?? "mailto:add-public-email@example.com";
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");
  const primaryContactLinks = [linkedin, github, contactLinks[0]].filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="overflow-hidden bg-background/35">
        <section
          aria-labelledby="home-hero-heading"
          className="relative flex min-h-[calc(100vh-4rem)] items-center px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
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
                id="home-hero-heading"
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
                  <Link href="#experience">
                    View Experience
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  className="min-h-12 w-full px-5 text-sm sm:w-auto"
                >
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

        <SectionShell
          id="about"
          eyebrow="Quality ownership"
          title="Engineering quality as a shared system, not a late-stage inspection."
          intro="The work is strongest when automation, exploratory thinking, review habits, and delivery context are designed together. Good QA leadership makes risks visible early and keeps feedback useful for the people building the product."
          className="border-t border-border/55 bg-background/20"
        >
          <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(18rem,0.55fr)] lg:gap-8">
            <AnimatedSection>
              <div className="max-w-3xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>
                  {profile.publicBio} The focus is practical: tests should explain risk, automation
                  should earn its maintenance cost, and quality conversations should help teams make
                  better decisions before release pressure narrows the options.
                </p>
                <p>
                  AI-assisted QA fits into that system as reviewed support for analysis, test ideas,
                  documentation, and maintenance. It is useful when it improves thinking and
                  dangerous when it replaces judgment, confidentiality discipline, or engineering
                  review.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <aside className="rounded-lg border border-border/75 bg-card/40 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-foreground">Working principles</h3>
                <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-primary"
                    />
                    Quality belongs inside engineering decisions, not only in final validation.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-primary"
                    />
                    Automation should reduce uncertainty, not create a parallel maintenance burden.
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-primary"
                    />
                    Collaboration improves when risks, trade-offs, and confidence are written
                    clearly.
                  </li>
                </ul>
              </aside>
            </AnimatedSection>
          </div>
        </SectionShell>

        <SectionShell
          id="expertise"
          eyebrow="Core expertise"
          title="A compact operating model for reliable software delivery."
          intro="The expertise system groups skills by engineering responsibility rather than rating them. Each area can grow into deeper pages without changing the homepage architecture."
        >
          <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {expertiseAreas.map((area) => {
              const Icon = iconMap[area.icon];

              return (
                <AnimatedSection key={area.slug}>
                  <TechnicalCard title={area.title} icon={Icon}>
                    <p className="leading-7 text-muted-foreground">{area.description}</p>
                    <div className="mt-5">
                      <TagList items={area.themes} />
                    </div>
                  </TechnicalCard>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-8">
            <div className="grid gap-6 rounded-lg border border-border/70 bg-background/30 p-5 sm:p-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(groupedSkills).map(([group, groupSkills]) => (
                <div key={group}>
                  <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                    {group}
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {groupSkills.map((skill) => (
                      <li key={skill.name}>
                        <p className="font-medium text-foreground">{skill.name}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {skill.summary}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </SectionShell>

        <SectionShell
          id="case-studies"
          eyebrow="Selected case studies"
          title="Sanitized engineering narratives prepared for deeper public pages."
          intro="Each preview follows a problem, responsibility, and impact structure while keeping confidential details out of the public surface. Detail pages can later expand constraints, trade-offs, and verified outcomes."
          className="border-y border-border/55 bg-card/15"
        >
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => {
              const displayCopy = caseStudyDisplayCopy[study.slug];

              return (
                <AnimatedSection key={study.slug}>
                  <TechnicalCard title={study.title} eyebrow={study.domain}>
                    <div className="mb-5">
                      <StatusBadge>{study.confidentialityLevel.replace("-", " ")}</StatusBadge>
                    </div>
                    <dl className="space-y-4">
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Problem
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-foreground">
                          {displayCopy.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Responsibility
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-foreground">
                          {displayCopy.responsibility}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Impact
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-foreground">
                          {displayCopy.impact}
                        </dd>
                      </div>
                    </dl>
                    <div className="mt-5">
                      <TagList items={study.tags} />
                    </div>
                  </TechnicalCard>
                </AnimatedSection>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="experience"
          eyebrow="Experience"
          title="A scalable timeline for quality engineering work."
          intro="The current public version keeps employer and client details confidential while still showing the shape of the work: automation design, risk analysis, release confidence, and team collaboration."
        >
          <div className="mt-9 space-y-5">
            {experienceItems.map((item) => (
              <AnimatedSection key={item.slug}>
                <article className="grid gap-5 rounded-lg border border-border/75 bg-card/45 p-5 sm:p-6 lg:grid-cols-[14rem_minmax(0,1fr)] lg:p-7">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                      {item.dateRange?.start ?? "Date range pending"}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.organizationLabel}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.domain}</p>
                  </div>
                  <div>
                    <p className="leading-7 text-muted-foreground">{item.summary}</p>
                    <ul className="mt-5 grid gap-3 md:grid-cols-2">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3 text-sm leading-6">
                          <BriefcaseBusiness
                            aria-hidden="true"
                            className="mt-1 size-4 shrink-0 text-primary"
                          />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="speaking"
          eyebrow="Speaking and community"
          title="Public technical communication with room for future talks and articles."
          intro="This section starts with confirmed community presence and planned content structures. It can grow into a speaking archive without changing the section pattern."
          className="border-y border-border/55 bg-card/15"
        >
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {communicationEntries.map((entry) => (
              <AnimatedSection key={entry.slug}>
                <TechnicalCard
                  title={entry.title}
                  icon={entry.format === "article" ? FileText : Users}
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    <StatusBadge>{entry.status}</StatusBadge>
                    <span className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {entry.format.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{entry.audience}</p>
                  <p className="mt-4 leading-7 text-foreground">{entry.summary}</p>
                  <div className="mt-5">
                    <TagList items={entry.topics} />
                  </div>
                </TechnicalCard>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Open to selected QA leadership, automation, mentoring, and speaking conversations."
          intro="Use the channels below for practical conversations around quality strategy, automation architecture, AI-assisted QA workflows, and community work."
        >
          <AnimatedSection className="mt-9">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {primaryContactLinks.map((link) => {
                if (!link) return null;
                const Icon = contactIconMap[link.label as keyof typeof contactIconMap] ?? Mail;
                const description =
                  contactDisplayCopy[link.label as keyof typeof contactDisplayCopy] ??
                  link.description;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group rounded-lg border border-border/75 bg-card/45 p-5 transition-colors hover:border-primary/45 hover:bg-card/65 focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Icon aria-hidden="true" className="size-5 text-primary" />
                    <span className="mt-4 block font-semibold text-foreground">{link.label}</span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                      {description}
                    </span>
                  </a>
                );
              })}
              <a
                href="/files/mateusz-koczorowski-cv.pdf"
                className="group rounded-lg border border-border/75 bg-card/45 p-5 transition-colors hover:border-primary/45 hover:bg-card/65 focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ArrowDownToLine aria-hidden="true" className="size-5 text-primary" />
                <span className="mt-4 block font-semibold text-foreground">Download CV</span>
                <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                  CV download endpoint prepared for the approved public PDF.
                </span>
              </a>
            </div>
          </AnimatedSection>
        </SectionShell>
      </main>
      <footer className="border-t border-border/65 px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name} / Senior QA Engineer</p>
          <p>Public-safe technical brand system in progress.</p>
        </div>
      </footer>
    </>
  );
}
