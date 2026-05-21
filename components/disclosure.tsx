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
        className="group flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm py-1 text-left text-sm font-medium text-foreground transition-colors duration-300 hover:text-primary focus-visible:outline-offset-6"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="inline-flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full bg-border transition-colors duration-300 group-hover:bg-primary",
              isOpen && "bg-primary",
            )}
          />
          {label}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition duration-300 group-hover:text-primary",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </button>
      <div
        id={contentId}
        aria-hidden={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div
          className={cn(
            "min-h-0 overflow-hidden transition-[opacity,transform] duration-500 ease-out",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
          )}
        >
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
