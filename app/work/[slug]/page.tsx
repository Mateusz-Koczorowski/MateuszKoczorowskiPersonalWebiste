import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PrimaryLink, VerifiedIcon } from "@/components/home/primitives";
import { contactLinks, professionalExperience } from "@/content";
import { caseStudyHighlights } from "@/content/case-studies";
import type { CompanyExperience } from "@/content/experience";
import { formatDateRange } from "@/lib/format";
import { siteConfig } from "@/lib/seo";

const companies: readonly CompanyExperience[] = professionalExperience;

const projects = companies.flatMap((company) =>
  company.projects.map((project) => ({
    ...project,
    companyName: company.companyName,
    companyDates: company.employmentDates,
  })),
);

/** techStack also holds focus areas; the Stack row shows only tools and languages. */
const nonTools = /testing$|data visualization|ai analytics/i;

const keepCase = /^(?:[A-Z0-9/&+-]{2,}|[A-Z][a-z]+[A-Z].*)$/;

/** "Automation Architecture" -> "Automation architecture", keeping API, CI/CD, AI. */
function sentenceCase(title: string) {
  return title
    .split(" ")
    .map((word, index) => (index === 0 || keepCase.test(word) ? word : word.toLowerCase()))
    .join(" ");
}

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: `${project.anonymizedName} case study`,
    description: project.summary,
    alternates: siteConfig.url ? { canonical: `/work/${project.slug}` } : undefined,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const highlights = caseStudyHighlights[project.slug];
  const roleTitle = project.roleInProject.split(" / ")[0];
  const tools = project.techStack.filter((item) => !nonTools.test(item));

  return (
    <main
      id="main-content"
      className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pb-20 pt-8 sm:px-8 sm:pt-10"
    >
      <div className="flex max-w-[52rem] flex-col gap-5">
        <Link
          href="/#work"
          className="inline-flex min-h-11 items-center self-start text-[0.9375rem] font-semibold"
        >
          Back to selected work
        </Link>
        <h1 className="text-[2.25rem] font-extrabold leading-[1.06] tracking-[-0.025em] sm:text-5xl lg:text-[3.5rem]">
          {highlights?.title ?? project.anonymizedName}
        </h1>
        <p className="text-lg leading-[1.55] text-ink-soft sm:text-xl">
          {highlights?.lead ?? project.summary}
        </p>
      </div>

      <dl className="grid overflow-hidden rounded-[14px] border border-rule bg-rule [gap:1px] sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Period", formatDateRange(project.duration ?? project.companyDates)],
          ["My role", roleTitle],
          ["Domain", project.domain.replaceAll(" / ", ", ")],
          tools.length ? ["Stack", tools.join(", ")] : ["Focus", project.techStack.join(", ")],
        ].map(([label, value]) => (
          <div key={label} className="bg-surface px-5 py-4">
            <dt className="text-[0.9375rem] text-graphite">{label}</dt>
            <dd className="mt-0.5 font-semibold">{value}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="result-heading" className="flex flex-col gap-5">
        <h2 id="result-heading" className="text-[1.75rem] font-extrabold">
          Result
        </h2>
        {highlights?.results ? (
          <ul className="grid gap-5 md:grid-cols-2">
            {highlights.results.map((result) => (
              <li
                key={result.value}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-4 rounded-[14px] border border-rule bg-surface p-6 sm:p-7"
              >
                <VerifiedIcon className="size-7" />
                <div>
                  <p className="text-[1.625rem] font-extrabold leading-tight">{result.value}</p>
                  <p className="mt-1.5 text-ink-soft">{result.label}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-[45rem] rounded-[14px] border border-rule bg-surface p-6 text-ink-soft sm:p-7">
            {project.impact}
          </p>
        )}
      </section>

      <div className="flex flex-wrap gap-14">
        <article className="flex min-w-0 max-w-[45rem] flex-[999_1_34rem] flex-col gap-10">
          <section aria-labelledby="context-heading">
            <h2 id="context-heading" className="mb-2.5 text-[1.75rem] font-extrabold">
              Context
            </h2>
            <p className="text-ink-soft">{project.challenge}</p>
          </section>

          {project.ownershipDetails?.length ? (
            <section aria-labelledby="owned-heading">
              <h2 id="owned-heading" className="mb-4 text-[1.75rem] font-extrabold">
                What I owned
              </h2>
              <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {project.ownershipDetails.map((detail) => (
                  <div key={detail.title} className="border-t border-rule pt-3">
                    <dt className="font-bold">{sentenceCase(detail.title)}</dt>
                    <dd className="mt-1 text-base text-ink-soft">{detail.detail}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {highlights?.story?.map((part) => (
            <section key={part.heading} aria-label={part.heading}>
              <h2 className="mb-2.5 text-[1.75rem] font-extrabold">{part.heading}</h2>
              <p className="text-ink-soft">{part.body}</p>
            </section>
          ))}

          <section aria-labelledby="responsibilities-heading">
            <h2 id="responsibilities-heading" className="mb-2.5 text-[1.375rem] font-bold">
              Day-to-day responsibilities
            </h2>
            <ul className="flex list-disc flex-col gap-1.5 pl-5 text-ink-soft">
              {project.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {project.confidentialityNote ? (
            <p className="border-t border-rule pt-4 text-[0.9375rem] text-graphite">
              {project.confidentialityNote}
            </p>
          ) : null}
        </article>

        <aside aria-label="Next steps" className="flex min-w-0 flex-[1_1_17rem] flex-col gap-5">
          <div className="flex flex-col gap-3 rounded-[14px] border border-rule bg-surface p-6">
            <p className="text-[1.1875rem] font-bold">Want to talk about a similar project?</p>
            <p className="text-base text-ink-soft">
              I can walk you through the approach and the trade-offs.
            </p>
            <PrimaryLink href={contactLinks[0].href}>Email me</PrimaryLink>
          </div>
          <div className="border-t-2 border-ink pt-3.5">
            <p className="text-[0.9375rem] text-graphite">Next project</p>
            <Link href={`/work/${next.slug}`} className="text-[1.1875rem] font-bold leading-snug">
              {next.anonymizedName}
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
