import { ArrowRight } from "lucide-react";
import Image from "next/image";

import {
  contactLinks,
  education,
  professionalExperience,
  socialLinks,
  speakingEntries,
  writingEntries,
} from "@/content";
import {
  aiFirst,
  builtCatalog,
  contact,
  evidence,
  experienceSummaries,
  featuredWork,
  guardrails,
  hero,
  recentlyBuilt,
  sharing,
  recentlyBuiltMinimumEntries,
  testingAgent,
  tools,
} from "@/content/home";
import type { CompanyExperience } from "@/content/experience";
import { formatDateRange } from "@/lib/format";

import { CopyEmailButton } from "./copy-email-button";
import {
  PrimaryLink,
  SecondaryLink,
  Section,
  SectionTitle,
  ShieldIcon,
  VerifiedIcon,
} from "./primitives";

const profileImagePath = "/images/profile/profile-photo.jpg";
const emailHref = contactLinks[0].href;
const email = emailHref.replace("mailto:", "");
const linkedin = socialLinks.find((link) => link.label === "LinkedIn");
const github = socialLinks.find((link) => link.label === "GitHub");

const companies: readonly CompanyExperience[] = professionalExperience;
const allProjects = companies.flatMap((company) => company.projects);
const projectBySlug = new Map(allProjects.map((project) => [project.slug, project]));

function startValue(project: { duration?: { start: string } }) {
  const match = /^(\d{2})\.(\d{4})$/.exec(project.duration?.start ?? "");
  return match ? Number(match[2]) * 100 + Number(match[1]) : 0;
}

function byNewest(a: { duration?: { start: string } }, b: { duration?: { start: string } }) {
  return startValue(b) - startValue(a);
}

function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

/* ------------------------------------------------------------------ Hero */

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-wrap items-start gap-12 pb-16 pt-10 sm:pb-20 sm:pt-16 lg:gap-14"
    >
      <div className="flex min-w-0 flex-[999_1_34rem] flex-col gap-6">
        <div className="flex items-center gap-4 sm:gap-5">
          <Image
            src={profileImagePath}
            alt=""
            width={192}
            height={192}
            priority
            sizes="(min-width: 640px) 96px, 64px"
            className="size-16 shrink-0 rounded-full object-cover object-[50%_14%] ring-1 ring-rule sm:size-24"
          />
          <div className="leading-snug">
            <p className="text-lg font-bold sm:text-xl">Mateusz Koczorowski</p>
            <p className="text-[0.9375rem] text-graphite">{hero.intro}</p>
          </div>
        </div>
        <h1
          id="hero-heading"
          className="max-w-[48rem] text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.025em] sm:text-5xl lg:text-[3.375rem] lg:leading-[1.05]"
        >
          {hero.heading}
        </h1>
        <p className="max-w-[40rem] text-lg leading-[1.55] text-ink-soft sm:text-xl">{hero.lead}</p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
          <PrimaryLink href={emailHref}>Email me</PrimaryLink>
          {contact.cvHref ? (
            <SecondaryLink href={contact.cvHref} download>
              Download CV (PDF)
            </SecondaryLink>
          ) : linkedin ? (
            <SecondaryLink href={linkedin.href}>View LinkedIn profile</SecondaryLink>
          ) : null}
        </div>
        <p className="max-w-[40rem] text-[0.9375rem] text-graphite">{hero.availability}</p>
      </div>

      <div
        aria-labelledby="evidence-heading"
        role="region"
        className="min-w-0 flex-[1_1_22rem] rounded-[14px] border border-rule bg-surface p-5 sm:p-7"
      >
        <h2 id="evidence-heading" className="mb-3 text-xl font-bold">
          Highlights
        </h2>
        <ul>
          {evidence.map((item) => (
            <li
              key={item.claim}
              className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3.5 border-t border-rule py-4 last:pb-0"
            >
              <VerifiedIcon />
              <div>
                <p className="text-base leading-normal">{item.claim}</p>
                <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]">
                  {item.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="evidence-link"
                      {...externalProps(link.href)}
                    >
                      {link.label}
                    </a>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- AI-first */

export function AiFirstSection() {
  const showRecentlyBuilt = recentlyBuilt.length >= recentlyBuiltMinimumEntries;

  return (
    <Section id="ai-first" labelledBy="ai-first-heading" className="gap-10 border-t-0 sm:py-20">
      <div className="flex flex-wrap gap-6 lg:gap-10">
        <SectionTitle
          id="ai-first-heading"
          className="min-w-0 flex-[1_1_22rem] sm:text-[2.75rem] sm:leading-[1.08]"
        >
          {aiFirst.heading}
        </SectionTitle>
        <p className="min-w-0 flex-[1_1_28rem] text-lg leading-[1.55] text-ink-soft sm:text-[1.1875rem]">
          {aiFirst.intro}
        </p>
      </div>

      <ul className="grid gap-x-10 gap-y-5 border-t-2 border-ink md:grid-cols-3">
        {aiFirst.sources.map((source) => (
          <li key={source.title} className="pt-4">
            <h3 className="text-xl font-extrabold">{source.title}</h3>
            <p className="mt-2 text-base text-ink-soft">{source.body}</p>
          </li>
        ))}
      </ul>

      <ul className="grid gap-5 md:grid-cols-3">
        {aiFirst.pillars.map((pillar) => (
          <li
            key={pillar.title}
            className="rounded-[14px] border border-rule bg-surface p-6 sm:p-7"
          >
            <h3 className="text-[1.375rem] font-extrabold">{pillar.title}</h3>
            <p className="mt-2.5 text-base leading-[1.55] text-ink-soft">{pillar.body}</p>
          </li>
        ))}
      </ul>

      <div id="built" className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h3 className="text-[1.625rem] font-extrabold leading-tight">{builtCatalog.heading}</h3>
          <p className="text-base text-graphite">{builtCatalog.intro}</p>
        </div>
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {builtCatalog.groups.map((group) => (
            <div key={group.title} className="border-t border-rule pt-4">
              <h4 className="font-bold">{group.title}</h4>
              <ul className="mt-2 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-2 text-[0.9375rem] leading-normal text-ink-soft"
                  >
                    <VerifiedIcon decorative className="mt-0.5 size-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-6 rounded-[14px] border-2 border-verified bg-surface p-6 sm:gap-8 sm:p-7">
        <div className="flex min-w-0 flex-[1_1_16rem] items-start gap-3.5">
          <ShieldIcon />
          <div>
            <h3 className="text-[1.375rem] font-extrabold">{guardrails.heading}</h3>
            <p className="mt-1 text-[0.9375rem] text-graphite">{guardrails.intro}</p>
          </div>
        </div>
        <ul className="flex min-w-0 flex-[2_1_28rem] list-disc flex-col gap-2 pl-5 text-ink-soft">
          {guardrails.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {showRecentlyBuilt ? (
        <div className="flex flex-wrap gap-6 rounded-[14px] border border-rule bg-surface p-6 sm:gap-8 sm:p-7">
          <div className="min-w-0 flex-[1_1_16rem]">
            <h3 className="text-[1.375rem] font-extrabold">Recently built</h3>
            <p className="mt-1 text-[0.9375rem] text-graphite">
              Last updated {recentlyBuilt[0]?.date}.
            </p>
          </div>
          <ul className="min-w-0 flex-[2_1_28rem]">
            {recentlyBuilt.map((entry) => (
              <li
                key={`${entry.date}-${entry.name}`}
                className="grid gap-1 border-t border-rule py-3 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="text-[0.9375rem] text-graphite">{entry.date}</span>
                <span>
                  {entry.href ? (
                    <a href={entry.href} className="font-semibold" {...externalProps(entry.href)}>
                      {entry.name}
                    </a>
                  ) : (
                    <strong>{entry.name}</strong>
                  )}
                  : {entry.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div id="testing-agent" className="flex flex-col gap-6 pt-2">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h3 className="text-[1.625rem] font-extrabold leading-tight">{testingAgent.heading}</h3>
          <p className="text-base text-graphite">{testingAgent.intro}</p>
        </div>
        <ol className="grid overflow-hidden rounded-[14px] border border-rule bg-surface sm:grid-cols-2 lg:grid-cols-6">
          {testingAgent.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-2.5 border-b border-rule px-5 py-4 last:border-b-0 sm:block sm:border-r sm:py-5 lg:border-b-0 lg:last:border-r-0"
            >
              <span
                aria-hidden="true"
                className="text-xl font-extrabold leading-snug text-verified sm:text-[1.625rem]"
              >
                {index + 1}
              </span>
              <div className="sm:mt-2.5">
                <h4 className="font-bold leading-snug">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h4>
                <p className="mt-1 text-[0.9375rem] leading-normal text-graphite">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-2.5 text-[1.1875rem] font-bold">{testingAgent.humanSide.title}</h4>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-soft">
              {testingAgent.humanSide.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2.5 text-[1.1875rem] font-bold">{testingAgent.connections.title}</h4>
            <p className="text-ink-soft">{testingAgent.connections.body}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------------- Work */

export function WorkSection() {
  const [lead, ...rest] = featuredWork;
  const leadProject = projectBySlug.get(lead.slug);
  const otherProjects = allProjects.filter(
    (project) => !featuredWork.some((item) => item.slug === project.slug),
  );

  return (
    <Section id="work" labelledBy="work-heading" className="border-t-0">
      <div>
        <SectionTitle id="work-heading">Selected work</SectionTitle>
        <p className="mt-2 max-w-[36rem] text-graphite">
          The automation foundation under the AI work. Client names are anonymized.
        </p>
      </div>

      <a
        href={`/work/${lead.slug}`}
        className="group flex flex-col gap-8 rounded-[14px] border-2 border-ink bg-surface p-6 no-underline transition-shadow hover:shadow-[0_0_0_4px_var(--marker)] sm:p-9"
      >
        <div className="flex flex-wrap gap-8 sm:gap-10">
          <div className="flex min-w-0 flex-[1_1_16rem] flex-col gap-1.5">
            <p className="text-[0.9375rem] text-graphite">
              {formatDateRange(leadProject?.duration)}, {lead.shortDomain.toLowerCase()}
            </p>
            <h3 className="mt-1.5 text-[1.75rem] font-extrabold leading-tight text-ink">
              {lead.title}
            </h3>
            <p className="mt-1 text-[0.9375rem] text-graphite">{lead.stack}</p>
          </div>
          <dl className="grid min-w-0 flex-[2_1_32rem] gap-6 md:grid-cols-3">
            <div>
              <dt className="text-[0.9375rem] font-bold text-ink">The problem</dt>
              <dd className="mt-1.5 text-base text-ink-soft">{lead.problem}</dd>
            </div>
            <div>
              <dt className="text-[0.9375rem] font-bold text-ink">What I did</dt>
              <dd className="mt-1.5 text-base text-ink-soft">{lead.action}</dd>
            </div>
            <div>
              <dt className="text-[0.9375rem] font-bold text-ink">Result</dt>
              <dd className="mt-1.5 text-base text-ink-soft">{lead.result}</dd>
            </div>
          </dl>
        </div>
        <span className="inline-flex min-h-12 items-center gap-2.5 self-start rounded-[10px] bg-cta px-5 font-semibold text-on-cta">
          Read the full case study
          <ArrowRight
            aria-hidden="true"
            className="size-5 transition-transform group-hover:translate-x-1"
          />
        </span>
      </a>

      <div className="grid gap-5 md:grid-cols-2">
        {rest.map((item) => {
          const project = projectBySlug.get(item.slug);
          return (
            <a
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group flex flex-col gap-2.5 rounded-[14px] border border-rule bg-surface p-6 no-underline transition-colors hover:border-ink sm:p-7"
            >
              <p className="text-[0.9375rem] text-graphite">
                {formatDateRange(project?.duration)}, {item.shortDomain.toLowerCase()}
              </p>
              <h3 className="text-[1.375rem] font-bold leading-tight text-ink">{item.title}</h3>
              <p className="text-ink-soft">{item.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-2 font-semibold text-ink">
                Read the case study
                <ArrowRight
                  aria-hidden="true"
                  className="size-5 transition-transform group-hover:translate-x-1"
                />
              </span>
            </a>
          );
        })}
      </div>

      <div id="all-projects" className="flex flex-col gap-3">
        <h3 className="text-[1.1875rem] font-bold">More case studies</h3>
        <ul className="grid gap-3 md:grid-cols-3">
          {otherProjects.map((project) => (
            <li key={project.slug}>
              <a
                href={`/work/${project.slug}`}
                className="group flex h-full min-h-20 items-center justify-between gap-4 rounded-[14px] border border-rule bg-surface px-5 py-4 no-underline transition-colors hover:border-ink"
              >
                <span className="flex flex-col">
                  <span className="font-semibold leading-snug text-ink">
                    {project.anonymizedName}
                  </span>
                  <span className="text-[0.9375rem] text-graphite">
                    {formatDateRange(project.duration) ||
                      project.domain.split(" / ").slice(0, 2).join(", ")}
                  </span>
                </span>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition-colors group-hover:bg-ink group-hover:text-on-ink">
                  <ArrowRight aria-hidden="true" className="size-5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Experience */

export function ExperienceSection() {
  return (
    <Section id="experience" labelledBy="experience-heading" className="gap-7">
      <SectionTitle id="experience-heading">Experience</SectionTitle>
      <ul className="border-b border-rule">
        {companies.map((company) => {
          const summary = experienceSummaries[company.slug];
          return (
            <li
              key={company.slug}
              className="grid gap-x-10 gap-y-2 border-t border-rule py-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1.4fr)]"
            >
              <div>
                <h3 className="text-[1.375rem] font-bold">{company.companyName}</h3>
                <p className="text-[0.9375rem] text-graphite">
                  {formatDateRange(company.employmentDates)}
                </p>
              </div>
              <div>
                <p className="font-semibold">{summary?.role ?? company.roleTitle}</p>
                {summary?.note ? (
                  <p className="text-[0.9375rem] text-graphite">{summary.note}</p>
                ) : null}
              </div>
              <div>
                <p className="text-base text-ink-soft">
                  {summary?.body ?? company.contextDescription}
                </p>
                <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem]">
                  <span className="text-graphite">Case studies:</span>
                  {[...company.projects].sort(byNewest).map((project) => (
                    <a
                      key={project.slug}
                      href={`/work/${project.slug}`}
                      className="font-semibold underline decoration-rule-strong underline-offset-4 hover:decoration-ink"
                    >
                      {project.anonymizedName}
                    </a>
                  ))}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="grid gap-8 pt-2 md:grid-cols-2">
        <div>
          <h3 className="mb-2.5 text-[1.1875rem] font-bold">Education</h3>
          <ul className="flex flex-col gap-2 text-ink-soft">
            {education.map((item) => (
              <li key={item.slug}>
                <strong className="text-ink">
                  {item.credential}, {item.field}
                </strong>
                , {item.institution}
                {item.status === "in-progress" ? ", in progress" : ""}.
                {item.status === "in-progress"
                  ? " Thesis: Claude Code and OpenAI Codex in automated test generation."
                  : ""}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2.5 text-[1.1875rem] font-bold">Tools I work with</h3>
          <p className="text-ink-soft">{tools}</p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- Talks */

export function SharingSection() {
  const publications = [
    ...speakingEntries.map((entry) => ({
      key: entry.slug,
      kind: "Talk",
      meta: `${entry.eventName}, ${entry.date}`,
      title: entry.title.replace(" - ", ": "),
      href: entry.links.recording,
      linkLabel: "Watch the recording",
    })),
    ...writingEntries.map((entry) => ({
      key: entry.slug,
      kind: "Article",
      meta: `${entry.publication}, May 2025`,
      title: entry.title,
      href: entry.links.article,
      linkLabel: "Read the article",
    })),
  ];

  return (
    <Section id="mentoring" labelledBy="mentoring-heading" className="gap-10">
      <div className="flex flex-wrap gap-6 lg:gap-10">
        <SectionTitle id="mentoring-heading" className="min-w-0 flex-[1_1_22rem]">
          {sharing.heading}
        </SectionTitle>
        <p className="min-w-0 flex-[1_1_28rem] text-lg leading-[1.55] text-ink-soft">
          {sharing.intro}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2.6fr)_minmax(0,1fr)]">
        <figure className="flex flex-col gap-2">
          <Image
            src="/images/events/paida-meetup-talk.jpg"
            alt="Mateusz speaking at PAIDA Meetup in front of a slide titled Przykłady użycia AI podczas pracy testera (examples of using AI in a tester's work)"
            width={2048}
            height={1153}
            sizes="(min-width: 1024px) 760px, 100vw"
            className="aspect-[16/9] w-full rounded-[14px] object-cover object-[70%_40%]"
          />
          <figcaption className="text-[0.9375rem] text-graphite">
            My talk on AI in a tester&apos;s daily work, PAIDA Meetup at STX Next, November 2024.
          </figcaption>
        </figure>
        <Image
          src="/images/events/paida-meetup-audience.jpg"
          alt="Mateusz presenting at the STX Next podium with the audience in the foreground"
          width={578}
          height={903}
          sizes="300px"
          className="hidden h-full max-h-[27rem] w-full rounded-[14px] object-cover object-top lg:block"
        />
      </div>

      <div className="flex flex-col gap-6 rounded-[14px] border border-rule bg-surface p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[1.625rem] font-extrabold leading-tight">
            {sharing.mentoring.title}
          </h3>
          <p className="max-w-[46rem] text-ink-soft">{sharing.mentoring.intro}</p>
        </div>
        <div>
          <p className="mb-3 flex justify-between text-[0.9375rem] font-semibold text-graphite">
            <span>Basics</span>
            <span>Advanced</span>
          </p>
          <ol className="relative grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-6">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[0.4375rem] hidden h-0.5 bg-ink lg:block"
            />
            {sharing.mentoring.path.map((step, index) => (
              <li
                key={step.title}
                className="relative grid grid-cols-[1rem_minmax(0,1fr)] gap-3 lg:block"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 block size-4 rounded-full border-[3px] border-ink bg-surface lg:mt-0"
                  style={{
                    backgroundColor:
                      index === sharing.mentoring.path.length - 1 ? "var(--verified)" : undefined,
                    borderColor:
                      index === sharing.mentoring.path.length - 1 ? "var(--verified)" : undefined,
                  }}
                />
                <div className="lg:mt-3">
                  <h4 className="font-bold leading-snug">{step.title}</h4>
                  <p className="mt-1 text-[0.9375rem] leading-normal text-graphite">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div className="theme-night flex flex-col gap-2 rounded-[14px] p-6 sm:p-7">
          <h3 className="text-[1.375rem] font-extrabold">{sharing.recruiting.title}</h3>
          <p className="leading-[1.55] text-ink-soft">{sharing.recruiting.body}</p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[1.375rem] font-extrabold">{sharing.initiatives.title}</h3>
          <ul className="border-b border-rule">
            {sharing.initiatives.items.map((item) => (
              <li
                key={item.text}
                className="grid gap-1 border-t border-rule py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="text-[0.9375rem] font-semibold text-graphite">{item.kind}</span>
                <span className="text-ink-soft">{item.text}</span>
              </li>
            ))}
            {publications.map((entry) => (
              <li
                key={entry.key}
                className="grid gap-1 border-t border-rule py-3 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
              >
                <span className="text-[0.9375rem] font-semibold text-graphite">{entry.kind}</span>
                <span className="text-ink-soft">
                  <span className="font-semibold text-ink">{entry.title}</span>, {entry.meta}.{" "}
                  <a
                    href={entry.href}
                    className="evidence-link whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.linkLabel}
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="max-w-[47.5rem] text-ink-soft">
        Looking for a mentor, a session on AI-first QA for your team or a speaker for a meetup?{" "}
        <a href="#contact" className="font-semibold">
          Write to me
        </a>
        .
      </p>
    </Section>
  );
}

/* -------------------------------------------------------------- Contact */

export function ContactSection() {
  return (
    <Section
      id="contact"
      labelledBy="contact-heading"
      className="flex-row flex-wrap items-center gap-10 pb-20 sm:gap-12"
    >
      <Image
        src={profileImagePath}
        alt="Portrait of Mateusz Koczorowski"
        width={220}
        height={260}
        className="hidden h-[260px] w-[220px] rounded-[14px] object-cover object-[50%_14%] sm:block"
      />
      <div className="flex min-w-0 flex-[1_1_28rem] flex-col gap-4">
        <SectionTitle id="contact-heading">{contact.heading}</SectionTitle>
        <p className="max-w-[35rem] text-ink-soft">{contact.lead}</p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={emailHref}
            className="text-[1.375rem] font-bold [overflow-wrap:anywhere] sm:text-[1.75rem]"
          >
            {email}
          </a>
          <CopyEmailButton email={email} />
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-1 font-semibold">
          {linkedin ? (
            <li>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center"
              >
                LinkedIn
              </a>
            </li>
          ) : null}
          {github ? (
            <li>
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center"
              >
                GitHub
              </a>
            </li>
          ) : null}
          {contact.cvHref ? (
            <li>
              <a href={contact.cvHref} download className="inline-flex min-h-11 items-center">
                CV (PDF)
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </Section>
  );
}
