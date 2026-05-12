import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CheckCircle2,
  FileText,
  FlaskConical,
  Github,
  GraduationCap,
  Languages as LanguagesIcon,
  Layers3,
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
  aiMcpIntegrations,
  aiQaNarrative,
  aiQaWorkflowAreas,
  caseStudies,
  contactLinks,
  education,
  expertiseAreas,
  languages,
  mentoringAreas,
  professionalExperience,
  profile,
  socialLinks,
  speakingEntries,
  writingEntries,
} from "@/content";
import type { CompanyExperience } from "@/content/experience";
import type { SpeakingEntry } from "@/content/speaking";
import type { WritingEntry } from "@/content/writing";

const profileImagePath = "/images/profile/profile-photo.jpg";

const heroStatement = profile.positioning;

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

const experienceItems: readonly CompanyExperience[] = professionalExperience;
const communicationEntries: readonly SpeakingEntry[] = speakingEntries;
const writingItems: readonly WritingEntry[] = writingEntries;
const homepageAiWorkflowAreas = aiQaWorkflowAreas.slice(0, 3);

function formatDateRange(dateRange?: { start: string; end?: string; displayLabel?: string }) {
  if (!dateRange) return "Date range pending";
  if (dateRange.displayLabel) return dateRange.displayLabel;
  return [dateRange.start, dateRange.end].filter(Boolean).join(" - ");
}

const contactDisplayCopy = {
  LinkedIn: "Professional profile, experience context, and direct network contact.",
  GitHub: "Public repositories, technical activity, and engineering examples.",
  Email: "Direct email for selected QA, mentoring, and speaking conversations.",
};

export default function Home() {
  const contactHref = contactLinks[0]?.href ?? "mailto:mkoczorowski.qa@gmail.com";
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");
  const primaryContactLinks = [linkedin, github, contactLinks[0]].filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="overflow-hidden bg-background/35">
        <section
          aria-labelledby="home-hero-heading"
          className="relative flex min-h-[calc(100svh-4rem)] items-center px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
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
                    className="object-cover object-[50%_18%] saturate-[0.92] lg:object-[50%_12%]"
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
                  <a href={linkedin?.href ?? "#contact"} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                    <Linkedin aria-hidden="true" className="size-4" />
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
          intro={profile.about.intro}
          className="border-t border-border/55 bg-background/20"
          aside={
            <aside className="rounded-lg border border-border/75 bg-card/40 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">Working principles</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                {profile.about.principles.map((principle) => (
                  <li key={principle} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-primary"
                    />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </aside>
          }
        >
          <AnimatedSection className="mt-7 max-w-[44rem] lg:mt-8">
            <div className="space-y-5 text-base leading-7 text-muted-foreground">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>
        </SectionShell>

        <SectionShell
          id="expertise"
          eyebrow="Core expertise"
          title="A compact operating model for reliable software delivery."
          intro="The expertise model groups skills by engineering responsibility: automation design, risk analysis, delivery feedback, AI-assisted workflows, and communication that helps teams act."
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
        </SectionShell>

        <SectionShell
          id="case-studies"
          eyebrow="Selected case studies"
          title="Sanitized engineering narratives prepared for deeper public pages."
          intro="Each preview follows a problem, responsibility, and impact structure while keeping confidential details out of the public surface. The focus is on reusable engineering patterns, not client-specific storytelling."
          className="border-y border-border/55 bg-card/15"
        >
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => {
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
                          {study.sections.problem.body}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Approach
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-foreground">
                          {study.sections.approach.body}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          Impact
                        </dt>
                        <dd className="mt-2 text-sm leading-6 text-foreground">
                          {study.sections.outcome.body}
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
          title="Selected projects and engineering contributions."
          intro="A concise view of project work, automation ownership, quality strategy, and the path from operational QA foundations to senior engineering contribution."
        >
          <div className="mt-9 space-y-6">
            {experienceItems.map((company) => (
              <AnimatedSection key={company.slug}>
                <article className="rounded-lg border border-border/75 bg-card/45 p-5 sm:p-6 lg:p-7">
                  <div className="grid gap-5 lg:grid-cols-[16rem_minmax(0,1fr)]">
                    <div>
                      <div className="flex items-start gap-3">
                        {company.logoPath ? (
                          <Image
                            src={company.logoPath}
                            alt=""
                            width={40}
                            height={40}
                            className="rounded-md border border-border/75 bg-background/45 object-contain p-1.5 opacity-80"
                          />
                        ) : (
                          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border/75 bg-background/40">
                            <Building2 aria-hidden="true" className="size-5 text-primary" />
                          </span>
                        )}
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">
                            {formatDateRange(company.employmentDates)}
                          </p>
                          <h3 className="mt-3 text-xl font-semibold text-foreground">
                            {company.companyName}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm font-medium text-foreground">
                        {company.roleTitle}
                      </p>
                      {company.roleProgression ? (
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                          {company.roleProgression.map((role) => (
                            <li key={role}>{role}</li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {company.contextDescription}
                      </p>
                      {company.organizationalContributions ? (
                        <div className="mt-5">
                          <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            Organizational contribution
                          </h4>
                          <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                            {company.organizationalContributions.map((contribution) => (
                              <li key={contribution} className="flex gap-2">
                                <CheckCircle2
                                  aria-hidden="true"
                                  className="mt-1 size-4 shrink-0 text-primary"
                                />
                                <span>{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>

                    <div className="space-y-4">
                      {company.projects.map((project) => (
                        <details
                          key={project.slug}
                          className="group rounded-lg border border-border/70 bg-background/25 p-4 transition-colors open:bg-background/35 sm:p-5"
                        >
                          <summary className="cursor-pointer list-none rounded-md focus-visible:ring-2 focus-visible:ring-ring">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                              <div>
                                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                  {project.domain}
                                </p>
                                <h4 className="mt-2 text-lg font-semibold leading-7 text-foreground">
                                  {project.anonymizedName}
                                </h4>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                  {project.summary}
                                </p>
                              </div>
                              <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                                <StatusBadge>
                                  {project.confidentialityLevel.replace("-", " ")}
                                </StatusBadge>
                                <span className="inline-flex rounded-md border border-border/70 bg-card/45 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                                  Details
                                </span>
                              </div>
                            </div>
                          </summary>

                          <div className="mt-5 grid gap-5 border-t border-border/65 pt-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.55fr)]">
                            <div className="space-y-5">
                              <dl className="grid gap-4 sm:grid-cols-2">
                                <div>
                                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                    <CalendarRange aria-hidden="true" className="size-4" />
                                    Duration
                                  </dt>
                                  <dd className="mt-2 text-sm leading-6 text-foreground">
                                    {formatDateRange(project.duration)}
                                  </dd>
                                </div>
                                <div>
                                  <dt className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                    <BriefcaseBusiness aria-hidden="true" className="size-4" />
                                    Role
                                  </dt>
                                  <dd className="mt-2 text-sm leading-6 text-foreground">
                                    {project.roleInProject}
                                  </dd>
                                </div>
                              </dl>

                              <div>
                                <h5 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                  Challenge
                                </h5>
                                <p className="mt-2 text-sm leading-6 text-foreground">
                                  {project.challenge}
                                </p>
                              </div>

                              <div>
                                <h5 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                  Responsibilities
                                </h5>
                                <ul className="mt-3 grid gap-2">
                                  {project.responsibilities.map((responsibility) => (
                                    <li
                                      key={responsibility}
                                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                                    >
                                      <Layers3
                                        aria-hidden="true"
                                        className="mt-1 size-4 shrink-0 text-primary"
                                      />
                                      <span>{responsibility}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <aside className="space-y-5">
                              <div>
                                <h5 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                  Tech stack
                                </h5>
                                <div className="mt-3">
                                  <TagList items={project.techStack} />
                                </div>
                              </div>
                              <div>
                                <h5 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                                  Impact
                                </h5>
                                <p className="mt-2 text-sm leading-6 text-foreground">
                                  {project.impact}
                                </p>
                              </div>
                              {project.confidentialityNote ? (
                                <p className="border-l border-primary/45 pl-4 text-sm leading-6 text-muted-foreground">
                                  {project.confidentialityNote}
                                </p>
                              ) : null}
                              <TagList items={project.tags} />
                            </aside>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="ai-in-qa"
          eyebrow={aiQaNarrative.eyebrow}
          title={aiQaNarrative.title}
          intro={aiQaNarrative.intro}
          className="border-y border-border/55 bg-card/15"
          aside={
            <aside className="rounded-lg border border-border/75 bg-background/35 p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-foreground">Workflow principles</h3>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
                {aiQaNarrative.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-1 size-4 shrink-0 text-primary"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <TagList items={aiQaNarrative.tags} />
              </div>
            </aside>
          }
        >
          <AnimatedSection className="mt-7 max-w-[44rem] lg:mt-8">
            <div className="space-y-4 text-base leading-7 text-muted-foreground">
              {aiQaNarrative.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {homepageAiWorkflowAreas.map((workflow) => (
              <AnimatedSection key={workflow.slug}>
                <TechnicalCard title={workflow.title} icon={Bot}>
                  <p className="leading-7 text-muted-foreground">{workflow.summary}</p>
                  <div className="mt-5">
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Workflow examples
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                      {workflow.examples.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Layers3
                            aria-hidden="true"
                            className="mt-1 size-4 shrink-0 text-primary"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-5">
                    <TagList items={workflow.tags} />
                  </div>
                </TechnicalCard>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-9">
            <div className="rounded-lg border border-border/75 bg-background/35 p-5 sm:p-6 lg:p-7">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                  MCP integrations
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                  Connecting tickets, browsers, design context, and evidence.
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  MCP integrations are useful when they reduce context switching and keep QA work
                  close to real project evidence.
                </p>
              </div>
              <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {aiMcpIntegrations.map((integration) => (
                  <article
                    key={integration.slug}
                    className="rounded-lg border border-border/70 bg-card/35 p-4 sm:p-5"
                  >
                    <h4 className="text-base font-semibold text-foreground">{integration.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {integration.summary}
                    </p>
                    <div className="mt-4">
                      <TagList items={integration.tags} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </SectionShell>

        <SectionShell
          id="mentoring-community"
          eyebrow="Mentoring and community"
          title="Knowledge sharing around automation, AI-assisted workflows, and QA growth."
          intro="Mentoring and community work focus on practical technical growth: better automation decisions, clearer QA communication, STX Next internal initiatives, AI bootcamp support, and recruitment context."
        >
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {mentoringAreas.map((area) => (
              <AnimatedSection key={area.slug}>
                <TechnicalCard title={area.title} icon={Users}>
                  <p className="leading-7 text-muted-foreground">{area.summary}</p>
                  <div className="mt-5">
                    <TagList items={area.topics} />
                  </div>
                </TechnicalCard>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="speaking"
          eyebrow="Speaking and community"
          title="Technical talks and community work around practical QA workflows."
          intro="Speaking activity is focused on real quality engineering practice: AI-assisted QA, automation judgment, review discipline, and workflow improvements that teams can actually use."
          className="border-y border-border/55 bg-card/15"
        >
          <div className="mt-9 grid max-w-3xl gap-5">
            {communicationEntries.map((entry) => (
              <AnimatedSection key={entry.slug}>
                <TechnicalCard
                  title={entry.title}
                  icon={entry.format === "article" ? FileText : Users}
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {entry.format.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">{entry.audience}</p>
                  {entry.eventName || entry.date ? (
                    <dl className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                      {entry.eventName ? (
                        <div>
                          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            Event
                          </dt>
                          <dd className="mt-1 text-foreground">{entry.eventName}</dd>
                        </div>
                      ) : null}
                      {entry.date ? (
                        <div>
                          <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                            Date
                          </dt>
                          <dd className="mt-1 text-foreground">{entry.date}</dd>
                        </div>
                      ) : null}
                    </dl>
                  ) : null}
                  <p className="mt-4 leading-7 text-foreground">{entry.summary}</p>
                  <div className="mt-5">
                    <TagList items={entry.topics} />
                  </div>
                  {entry.links?.recording ? (
                    <a
                      href={entry.links.recording}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Watch PAIDA presentation
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </a>
                  ) : null}
                </TechnicalCard>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="writing"
          eyebrow="Writing and articles"
          title="Engineering notes on AI reliability, testing, and practical quality workflows."
          intro="Writing adds a more durable layer to the same technical profile: clear, review-driven thinking about AI-assisted engineering, reliability risks, and software quality practice."
        >
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {writingItems.map((entry) => (
              <AnimatedSection key={entry.slug}>
                <TechnicalCard title={entry.title} icon={FileText}>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {entry.publication ? (
                      <span className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {entry.publication}
                      </span>
                    ) : null}
                  </div>
                  {entry.date ? (
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {entry.date}
                    </p>
                  ) : null}
                  <p className="mt-4 leading-7 text-foreground">{entry.summary}</p>
                  <div className="mt-5">
                    <TagList items={entry.topics} />
                  </div>
                  {entry.links?.article ? (
                    <a
                      href={entry.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Read STX Next article
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </a>
                  ) : null}
                </TechnicalCard>
              </AnimatedSection>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          id="education-languages"
          eyebrow="Education and languages"
          title="Education & Languages"
          intro="Formal background and language context, kept compact so the project evidence stays in focus."
        >
          <AnimatedSection className="mt-9">
            <div className="grid gap-5 lg:grid-cols-2">
              <TechnicalCard title="Education" icon={GraduationCap}>
                <ul className="space-y-4">
                  {education.map((item) => (
                    <li key={item.slug}>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-foreground">{item.credential}</p>
                        <StatusBadge>{item.status.replace("-", " ")}</StatusBadge>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.institution}
                        {item.field ? ` / ${item.field}` : ""}
                        {item.dateRange ? ` / ${item.dateRange}` : ""}
                      </p>
                      {item.notes ? (
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.notes}</p>
                      ) : null}
                      {item.focusAreas ? (
                        <div className="mt-3">
                          <TagList items={item.focusAreas} />
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </TechnicalCard>

              <TechnicalCard title="Languages" icon={LanguagesIcon}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {languages.map((language) => (
                    <li
                      key={language.name}
                      className="rounded-md border border-border/70 bg-background/35 p-4"
                    >
                      <p className="font-semibold text-foreground">{language.name}</p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {language.publicLabel}
                      </p>
                      {language.needsConfirmation ? (
                        <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-primary">
                          Needs confirmation
                        </p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </TechnicalCard>
            </div>
          </AnimatedSection>
        </SectionShell>

        <SectionShell
          id="contact"
          eyebrow="Contact"
          title="Open to selected QA leadership, automation, mentoring, and speaking conversations."
          intro="Use the channels below for practical conversations around quality strategy, automation architecture, AI-assisted QA workflows, and community work."
        >
          <AnimatedSection className="mt-9">
            <div className="grid gap-4 md:grid-cols-3">
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
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
            </div>
          </AnimatedSection>
        </SectionShell>
      </main>
      <footer className="border-t border-border/65 px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name} / Senior QA Engineer</p>
          <p>Quality strategy / automation / AI-assisted QA workflows</p>
        </div>
      </footer>
    </>
  );
}
