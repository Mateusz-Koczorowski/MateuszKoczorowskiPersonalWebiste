"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type DisclosureProps = PropsWithChildren<{
  label: string;
  className?: string;
  contentClassName?: string;
}>;

export function Disclosure({ label, className, contentClassName, children }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{label}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn("size-4 shrink-0 transition-transform", isOpen && "rotate-180")}
        />
      </button>
      <div id={contentId} hidden={!isOpen} className={contentClassName}>
        {children}
      </div>
    </div>
  );
}
