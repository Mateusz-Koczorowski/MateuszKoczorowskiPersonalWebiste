import {
  ArrowRight,
  Award,
  Bot,
  Bug,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  Code2,
  FileText,
  Github,
  MonitorCheck,
  Linkedin,
  Mail,
  SearchCheck,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { Disclosure } from "@/components/disclosure";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  aiMcpIntegrations,
  aiQaWorkflowModels,
  aiQaNarrative,
  aiQaWorkflowAreas,
  contactLinks,
  expertiseAreas,
  professionalExperience,
  profile,
  socialLinks,
} from "@/content";
import type { CompanyExperience, ProjectContribution } from "@/content/experience";
import { cn } from "@/lib/utils";

const profileImagePath = "/images/profile/profile-photo.jpg";

const selectedExpertise = expertiseAreas.filter((area) =>
  [
    "test-automation",
    "quality-engineering",
    "api-integration-testing",
    "ci-cd-delivery-quality",
    "ai-assisted-qa-workflows",
  ].includes(area.slug),
);

const experienceItems: readonly CompanyExperience[] = professionalExperience;

const contactIconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

const aiInvestigationWorkflowIcons = [FileText, ShieldCheck, MonitorCheck, SearchCheck, Bug];
const aiAutomationWorkflowIcons = [ClipboardCheck, MonitorCheck, Code2, SearchCheck, CheckCircle2];

function ExperienceBadge({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "strong";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em]",
        tone === "strong"
          ? "border-primary/30 bg-primary/10 text-primary shadow-[0_0_24px_oklch(0.78_0.12_190_/_0.08)]"
          : "border-border/55 text-muted-foreground",
      )}
    >
      {children}
    </span>
  );
}

function formatDateRange(dateRange?: { start: string; end?: string; displayLabel?: string }) {
  if (!dateRange) return "";
  if (dateRange.displayLabel) return dateRange.displayLabel;
  return [dateRange.start, dateRange.end].filter(Boolean).join(" - ");
}

function getDateSortValue(dateRange?: { start: string; isCurrent?: boolean }) {
  if (!dateRange) return 0;
  if (dateRange.isCurrent) return Number.MAX_SAFE_INTEGER;

  const [month = "01", year = "1900"] = dateRange.start.split(".");
  return Number(year) * 100 + Number(month);
}

function sortProjectsNewestFirst(projects: readonly ProjectContribution[]) {
  return [...projects].sort((a, b) => {
    if (a.displayOrder !== undefined || b.displayOrder !== undefined) {
      return (
        (a.displayOrder ?? Number.MAX_SAFE_INTEGER) - (b.displayOrder ?? Number.MAX_SAFE_INTEGER)
      );
    }

    return getDateSortValue(b.duration) - getDateSortValue(a.duration);
  });
}

function LinkArrow() {
  return (
    <ArrowRight
      aria-hidden="true"
      className="size-4 transition-transform group-hover:translate-x-1"
    />
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  id: string;
  className?: string;
}) {
  return (
    <AnimatedSection className={className}>
      <p className="text-sm font-medium text-primary">{eyebrow}</p>
      <h2
        id={id}
        className="mt-4 max-w-4xl text-[clamp(2rem,4vw,4.4rem)] font-semibold leading-[1.02] text-foreground"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          {intro}
        </p>
      ) : null}
    </AnimatedSection>
  );
}

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-3 size-1 shrink-0 rounded-full bg-primary/75" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoleProgression({ company }: { company: CompanyExperience }) {
  if (company.roleMilestones?.length) {
    return (
      <div className="mt-9 border-t border-border/35 pt-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
            Role evolution
          </p>
          <p className="text-xs leading-6 text-muted-foreground">
            QA foundations into senior automation and quality ownership
          </p>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {company.roleMilestones.map((milestone, index) => (
            <article
              key={`${milestone.title}-${milestone.dates.displayLabel}`}
              className={cn(
                "relative border-l py-1 pl-5",
                milestone.isPromotion ? "border-primary" : "border-border/60 sm:border-border/45",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -left-[0.3125rem] top-2 size-2.5 rounded-full border",
                  milestone.isPromotion
                    ? "border-primary bg-primary shadow-[0_0_0_6px_oklch(0.78_0.12_190_/_0.1)]"
                    : "border-border bg-background",
                )}
              />
              <p className="text-sm text-muted-foreground">{formatDateRange(milestone.dates)}</p>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h4
                  className={cn(
                    "text-lg font-semibold leading-tight",
                    milestone.dates.isCurrent ? "text-foreground" : "text-foreground/90",
                  )}
                >
                  {milestone.title}
                </h4>
                {milestone.isPromotion ? (
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Award aria-hidden="true" className="size-3.5" />
                    Promoted
                  </span>
                ) : null}
                {milestone.dates.isCurrent ? (
                  <ExperienceBadge tone="strong">Current role</ExperienceBadge>
                ) : null}
              </div>
              {milestone.note ? (
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{milestone.note}</p>
              ) : null}
              {index < company.roleMilestones!.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="absolute -right-2 top-1/2 hidden h-px w-4 bg-primary/30 sm:block"
                />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (!company.roleProgression?.length) return null;

  return (
    <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted-foreground">
      {company.roleProgression.map((role, index) => (
        <span key={role} className="inline-flex items-center gap-3">
          <span
            className={
              index === company.roleProgression!.length - 1 ? "text-foreground" : undefined
            }
          >
            {role}
          </span>
          {index < company.roleProgression!.length - 1 ? (
            <ArrowRight aria-hidden="true" className="size-3.5 text-primary" />
          ) : null}
        </span>
      ))}
    </div>
  );
}

function OwnershipDetailGrid({ project }: { project: ProjectContribution }) {
  const ownershipDetails = project.ownershipDetails;

  if (!ownershipDetails?.length) return <DetailList items={project.responsibilities} />;

  return (
    <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
      {ownershipDetails.map((item) => (
        <section key={item.title} className="border-t border-border/35 pt-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <CircleDot aria-hidden="true" className="size-3.5 text-primary" />
            {item.title}
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
        </section>
      ))}
    </div>
  );
}

function ProjectCaseStudy({ project }: { project: ProjectContribution }) {
  const isCurrent = Boolean(project.duration?.isCurrent);

  return (
    <article
      className={cn(
        "border-t py-9 first:border-t-0 first:pt-0 sm:py-10",
        isCurrent ? "border-primary/35" : "border-border/35",
      )}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(10rem,0.23fr)_minmax(0,1fr)] lg:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-primary">{formatDateRange(project.duration)}</p>
            {isCurrent ? <ExperienceBadge tone="strong">Present</ExperienceBadge> : null}
          </div>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.roleInProject}</p>
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm text-muted-foreground">{project.domain}</p>
            {isCurrent ? <ExperienceBadge>Active case study</ExperienceBadge> : null}
          </div>
          <h4
            className={cn(
              "mt-2 text-2xl font-semibold leading-tight sm:text-[1.7rem]",
              isCurrent ? "text-foreground" : "text-foreground/92",
            )}
          >
            {project.anonymizedName}
          </h4>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            {project.summary}
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                Context
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.challenge}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                Impact
              </p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.impact}</p>
            </div>
          </div>

          <Disclosure
            label="Open engineering case study"
            className={cn(
              "mt-7 border-y py-5",
              isCurrent ? "border-primary/25" : "border-border/35",
            )}
            buttonClassName="py-2"
            contentClassName="mt-8 grid gap-9 pb-1 lg:grid-cols-[minmax(0,0.64fr)_minmax(15rem,0.36fr)]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                Technical ownership
              </p>
              <div className="mt-3">
                <OwnershipDetailGrid project={project} />
              </div>
              <div className="mt-9 border-t border-border/35 pt-6">
                <p className="text-sm font-semibold text-foreground">
                  Responsibilities and QA strategy
                </p>
                <DetailList items={project.responsibilities} />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Automation, tooling, and stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-border/45 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/35 hover:text-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Engineering themes</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-primary/85">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.confidentialityNote ? (
                <p className="border-t border-border/35 pt-5 text-xs leading-6 text-muted-foreground">
                  {project.confidentialityNote}
                </p>
              ) : null}
            </div>
          </Disclosure>
        </div>
      </div>
    </article>
  );
}

function CompanyTimelineItem({ company, index }: { company: CompanyExperience; index: number }) {
  const isLast = index === experienceItems.length - 1;
  const isCurrentCompany = Boolean(company.employmentDates?.isCurrent);
  const orderedProjects = sortProjectsNewestFirst(company.projects);

  return (
    <AnimatedSection>
      <article
        className={cn(
          "grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-5 pb-20 last:pb-0 lg:grid-cols-[minmax(11rem,0.22fr)_2.25rem_minmax(0,1fr)] lg:gap-x-10",
          index > 0 && "pt-2",
          isCurrentCompany && "relative",
        )}
      >
        <div className="hidden lg:block">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Chapter {String(index + 1).padStart(2, "0")}
          </p>
          <p className="mt-3 text-sm font-medium text-primary">
            {formatDateRange(company.employmentDates)}
          </p>
          <h3 className="mt-2 text-3xl font-semibold leading-tight text-foreground">
            {company.companyName}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm leading-7 text-muted-foreground">
            <span>{company.roleTitle}</span>
            {isCurrentCompany ? <ExperienceBadge tone="strong">Present</ExperienceBadge> : null}
          </div>
        </div>

        <div className="relative flex justify-center">
          {!isLast ? (
            <span
              aria-hidden="true"
              className={`absolute bottom-[-5rem] top-6 w-px ${
                isCurrentCompany
                  ? "bg-gradient-to-b from-primary/70 via-border/70 to-border/35"
                  : "bg-border/55"
              }`}
            />
          ) : null}
          <span
            aria-hidden="true"
            className={`relative mt-2 shrink-0 rounded-full border ${
              isCurrentCompany
                ? "size-5 border-primary bg-primary shadow-[0_0_0_8px_oklch(0.78_0.12_190_/_0.12),0_0_34px_oklch(0.78_0.12_190_/_0.28)]"
                : "size-4 border-border bg-background shadow-[0_0_0_5px_oklch(0.12_0.018_260_/_1)]"
            }`}
          />
        </div>

        <div>
          <div className="lg:hidden">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Chapter {String(index + 1).padStart(2, "0")}
            </p>
            <p className="mt-3 text-sm font-medium text-primary">
              {formatDateRange(company.employmentDates)}
            </p>
            <h3 className="mt-2 text-3xl font-semibold leading-tight text-foreground">
              {company.companyName}
            </h3>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm leading-7 text-muted-foreground">
              <span>{company.roleTitle}</span>
              {isCurrentCompany ? <ExperienceBadge tone="strong">Present</ExperienceBadge> : null}
            </div>
          </div>

          <div
            className={cn(
              "mt-6 max-w-4xl border-t pt-6 lg:mt-0",
              isCurrentCompany ? "border-primary/30" : "border-border/35",
            )}
          >
            <p className="max-w-3xl text-lg leading-8 text-foreground/88">
              {company.contextDescription}
            </p>
          </div>
          <RoleProgression company={company} />

          {company.organizationalContributions?.length ? (
            <Disclosure
              label="View company-level ownership"
              className={cn(
                "mt-8 border-y py-5",
                isCurrentCompany ? "border-primary/25" : "border-border/35",
              )}
              buttonClassName="py-2"
              contentClassName="mt-7 grid gap-7 pb-1 md:grid-cols-2"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Process, mentoring, and impact
                </p>
                <DetailList items={company.organizationalContributions} />
              </div>
              {company.mentoringActivities?.length ? (
                <div>
                  <p className="text-sm font-semibold text-foreground">Mentoring and community</p>
                  <DetailList items={company.mentoringActivities} />
                </div>
              ) : null}
            </Disclosure>
          ) : null}

          <div className="mt-11">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/85">
                Project case studies
              </p>
              <p className="text-xs leading-6 text-muted-foreground">
                {orderedProjects.length} {orderedProjects.length === 1 ? "case" : "cases"}
              </p>
            </div>
            <div className="mt-5">
              {orderedProjects.map((project) => (
                <ProjectCaseStudy key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </AnimatedSection>
  );
}

function AiStepLabels({ labels }: { labels?: readonly string[] }) {
  if (!labels?.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="rounded-full border border-primary/20 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary/85"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function AiWorkflowBlock({
  workflow,
  index,
}: {
  workflow: (typeof aiQaWorkflowModels)[number];
  index: number;
}) {
  const icons = index === 0 ? aiInvestigationWorkflowIcons : aiAutomationWorkflowIcons;

  return (
    <article className="border-t border-border/35 pt-8 first:border-t-0 first:pt-0">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
            {workflow.eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
            {workflow.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-muted-foreground">{workflow.summary}</p>
          <p className="mt-5 border-l border-primary/35 pl-4 text-sm leading-7 text-foreground/86">
            {workflow.boundary}
          </p>

          <div className="mt-7 space-y-4">
            {workflow.supportingNotes.map((note) => (
              <p key={note} className="border-t border-border/35 pt-4 text-sm leading-7 text-muted-foreground">
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-5">
          {workflow.steps.map((step, stepIndex) => {
            const Icon = icons[stepIndex] ?? Workflow;

            return (
              <section
                key={step.label}
                className="relative border-t border-border/35 py-5 md:border-l md:px-4 md:first:border-l-0"
              >
                {stepIndex < workflow.steps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-full h-5 w-px bg-primary/35 md:left-auto md:right-0 md:top-8 md:h-px md:w-5"
                  />
                ) : null}
                <div className="flex items-start gap-4 md:block">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-sm border border-primary/25 bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <div className="md:mt-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-primary/85">
                      Step {String(stepIndex + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-2 text-base font-semibold leading-6 text-foreground">
                      {step.label}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                    <AiStepLabels labels={step.labels} />
                    {step.notes?.length ? (
                      <ul className="mt-4 space-y-2 text-xs leading-6 text-muted-foreground">
                        {step.notes.map((note) => (
                          <li key={note} className="flex gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2.5 size-1 shrink-0 rounded-full bg-primary/70"
                            />
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function AiWorkflowArchitectureSection() {
  const workflowAreas = aiQaWorkflowAreas.slice(0, 3);

  return (
    <AnimatedSection className="mt-14">
      <div className="border-y border-border/35 py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
              Operating model
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground">
              Two AI-assisted workflows, separated by engineering intent.
            </h3>
          </div>
          <div>
            <p className="text-base leading-8 text-muted-foreground">
              AI is used as structured support for analysis, exploration, planning, implementation,
              and review. The workflow boundary matters: investigation work should not be confused
              with automation creation.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {workflowAreas.map((area) => (
                <div key={area.slug} className="border-t border-border/35 pt-4">
                  <p className="text-sm font-semibold text-foreground">{area.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{area.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {aiQaWorkflowModels.map((workflow, index) => (
            <AiWorkflowBlock key={workflow.slug} workflow={workflow} index={index} />
          ))}
        </div>

        <div className="mt-12 border-t border-border/35 pt-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
                Tooling context
              </p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                MCP integrations support specific workflow moments.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Tooling is presented as connected engineering context, not as autonomous QA.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {aiMcpIntegrations.map((integration) => (
                <article key={integration.slug} className="border-t border-border/35 pt-5">
                  <div className="flex items-center gap-3">
                    <Workflow aria-hidden="true" className="size-4 text-primary" />
                    <h4 className="font-semibold text-foreground">{integration.title}</h4>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {integration.summary}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Home() {
  const contactHref = contactLinks[0]?.href ?? "mailto:mkoczorowski.qa@gmail.com";
  const linkedin = socialLinks.find((link) => link.label === "LinkedIn");
  const github = socialLinks.find((link) => link.label === "GitHub");
  const primaryContactLinks = [contactLinks[0], linkedin, github].filter(Boolean);

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="overflow-x-hidden">
        <section
          aria-labelledby="home-hero-heading"
          className="relative px-6 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-32 lg:px-10 lg:pb-28 lg:pt-36"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:gap-20">
            <AnimatedSection className="max-w-4xl">
              <p className="max-w-[20rem] text-sm font-medium leading-6 text-primary sm:max-w-none">
                Senior QA Engineering / AI-assisted quality workflows
              </p>
              <h1
                id="home-hero-heading"
                className="mt-6 max-w-full text-[clamp(2.8rem,11vw,8.25rem)] font-semibold leading-[0.9] text-foreground"
              >
                <span className="block">Mateusz</span>
                <span className="block">Koczorowski</span>
              </h1>
              <p className="mt-8 max-w-2xl text-2xl font-medium leading-9 text-foreground sm:text-3xl sm:leading-10">
                {profile.role}
              </p>
              <p className="mt-6 max-w-[20rem] text-base leading-8 text-muted-foreground sm:max-w-2xl sm:text-lg sm:leading-9">
                {profile.positioning}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild className="min-h-12 w-fit max-w-full px-5 text-sm">
                  <a href="#contact">
                    Let&apos;s work together
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" className="min-h-12 w-fit max-w-full px-4 text-sm">
                  <a href="#experience">Selected experience</a>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <figure className="mx-auto max-w-[20rem] lg:ml-auto lg:mr-0">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-card/40 shadow-2xl shadow-black/30">
                  <Image
                    src={profileImagePath}
                    alt="Mateusz Koczorowski"
                    fill
                    priority
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 86vw"
                    className="object-cover object-[50%_14%] saturate-[0.94]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
                  />
                </div>
                <figcaption className="sr-only">Portrait of Mateusz Koczorowski.</figcaption>
              </figure>
            </AnimatedSection>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.64fr)_minmax(18rem,0.36fr)] lg:gap-16">
            <SectionHeading
              id="about-heading"
              eyebrow="Quality ownership"
              title="Quality engineering that helps teams understand risk before it becomes release pressure."
              intro={profile.about.intro}
            />
            <AnimatedSection className="space-y-5 text-base leading-8 text-muted-foreground">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="space-y-4 pt-2">
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
            </AnimatedSection>
          </div>
        </section>

        <section
          id="expertise"
          aria-labelledby="expertise-heading"
          className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              id="expertise-heading"
              eyebrow="Expertise"
              title="A focused quality practice across automation, architecture, delivery feedback, and risk."
              intro="The homepage keeps the signal high: the areas below are the core patterns I bring into product teams."
            />
            <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
              {selectedExpertise.map((area) => (
                <AnimatedSection key={area.slug}>
                  <article className="max-w-xl">
                    <p className="text-sm text-primary">{area.shortTitle}</p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-foreground">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-muted-foreground">
                      {area.description}
                    </p>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section
          id="ai-in-qa"
          aria-labelledby="ai-heading"
          className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(17rem,0.32fr)] lg:gap-16">
              <SectionHeading
                id="ai-heading"
                eyebrow={aiQaNarrative.eyebrow}
                title={aiQaNarrative.title}
                intro={aiQaNarrative.intro}
              />
              <AnimatedSection className="space-y-5 text-base leading-8 text-muted-foreground">
                {aiQaNarrative.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </AnimatedSection>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16">
              <AnimatedSection>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-primary">
                    <Bot aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      Human-in-the-loop by design.
                    </h3>
                    <ul className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                      {aiQaNarrative.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="grid gap-5 sm:grid-cols-2">
                  {aiQaNarrative.tags.map((tag) => (
                    <article key={tag} className="border-t border-border/35 pt-5">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary/85">
                        Workflow signal
                      </p>
                      <h4 className="mt-2 font-semibold text-foreground">{tag}</h4>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        Used as part of a reviewed QA process, not as an autonomous replacement for
                        engineering judgment.
                      </p>
                    </article>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AiWorkflowArchitectureSection />
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              id="experience-heading"
              eyebrow="Experience timeline"
              title="A technical growth story across industrial systems, healthcare platforms, automation architecture, and release quality."
              intro="Company-grouped project history with expandable engineering detail: what needed validation, how quality systems were shaped, and where ownership improved release confidence."
            />
            <div className="mt-14">
              {experienceItems.map((company, index) => (
                <CompanyTimelineItem key={company.slug} company={company} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.68fr)_minmax(17rem,0.32fr)] lg:items-end lg:gap-16">
              <SectionHeading
                id="contact-heading"
                eyebrow="Let's work together"
                title="Let's build reliable software with clearer risk, better automation, and calmer releases."
                intro="Open to selected QA leadership, automation architecture, AI-assisted QA workflow, mentoring, and speaking conversations."
              />
              <AnimatedSection>
                <div className="flex flex-col gap-3">
                  {primaryContactLinks.map((link) => {
                    if (!link) return null;
                    const Icon = contactIconMap[link.label as keyof typeof contactIconMap] ?? Mail;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center justify-between gap-4 border-t border-border/35 py-4 text-foreground transition-colors hover:text-primary"
                      >
                        <span className="inline-flex items-center gap-3">
                          <Icon aria-hidden="true" className="size-4" />
                          {link.label}
                        </span>
                        <LinkArrow />
                      </a>
                    );
                  })}
                </div>
                <Button asChild className="mt-8 min-h-12 w-full px-5 text-sm sm:w-auto">
                  <a href={contactHref}>
                    Start a conversation
                    <Mail aria-hidden="true" className="size-4" />
                  </a>
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <footer className="px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border/35 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{profile.name}</p>
          <p>Senior QA Engineer / automation / AI-assisted quality</p>
        </div>
      </footer>
    </>
  );
}
