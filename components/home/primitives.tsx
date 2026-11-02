import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function VerifiedIcon({
  className,
  decorative = false,
}: {
  className?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": "Verified" })}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6 shrink-0 text-verified", className)}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m7.5 12.5 3 3 6-6.5" />
    </svg>
  );
}

export function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-7 shrink-0 text-verified", className)}
    >
      <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  );
}

export function Section({
  id,
  labelledBy,
  className,
  children,
}: {
  id?: string;
  labelledBy: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("flex flex-col gap-8 border-t border-rule py-16 sm:py-[4.5rem]", className)}
    >
      {children}
    </section>
  );
}

export function SectionTitle({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[2rem] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink sm:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

const buttonBase =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[10px] px-5 font-semibold no-underline transition-opacity";

export function PrimaryLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={cn(buttonBase, "bg-cta text-on-cta hover:opacity-90", className)}>
      {children}
    </a>
  );
}

export function SecondaryLink({
  href,
  children,
  className,
  download,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      className={cn(
        buttonBase,
        "border-[1.5px] border-ink bg-transparent text-ink hover:bg-surface",
        className,
      )}
    >
      {children}
    </a>
  );
}
