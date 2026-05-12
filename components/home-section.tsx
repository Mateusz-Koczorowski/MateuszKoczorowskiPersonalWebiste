import type { LucideIcon } from "lucide-react";
import type { PropsWithChildren } from "react";

import { AnimatedSection } from "@/components/animated-section";
import { cn } from "@/lib/utils";

type SectionShellProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  className?: string;
  headerClassName?: string;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  intro,
  className,
  headerClassName,
  children,
}: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("relative px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24", className)}
    >
      <div className="mx-auto w-full max-w-7xl">
        <AnimatedSection className={cn("max-w-[46rem]", headerClassName)}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2
            id={headingId}
            className="mt-4 text-[clamp(1.9rem,4vw,3.1rem)] font-semibold leading-[1.12] text-foreground"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">{intro}</p>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}

type TechnicalCardProps = PropsWithChildren<{
  title: string;
  eyebrow?: string;
  icon?: LucideIcon;
  className?: string;
}>;

export function TechnicalCard({
  title,
  eyebrow,
  icon: Icon,
  className,
  children,
}: TechnicalCardProps) {
  return (
    <article
      className={cn(
        "h-full rounded-lg border border-border/75 bg-card/45 p-5 shadow-black/10 transition-colors sm:p-6 lg:p-7",
        className,
      )}
    >
      <div className="flex items-start gap-3">
        {Icon ? (
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border/80 bg-background/40">
            <Icon aria-hidden="true" className="size-5 text-primary" />
          </span>
        ) : null}
        <div>
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </p>
          ) : null}
          <h3 className={cn("text-lg font-semibold leading-7 text-foreground", eyebrow && "mt-2")}>
            {title}
          </h3>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </article>
  );
}

export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Topics">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-border/70 bg-background/35 px-2.5 py-1 font-mono text-xs leading-5 text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function StatusBadge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex rounded-md border border-primary/35 bg-primary/10 px-2.5 py-1 font-mono text-xs uppercase tracking-[0.12em] text-primary">
      {children}
    </span>
  );
}
