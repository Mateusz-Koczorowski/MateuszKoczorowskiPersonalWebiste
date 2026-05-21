"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type DisclosureProps = PropsWithChildren<{
  label: string;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
}>;

export function Disclosure({
  label,
  className,
  buttonClassName,
  contentClassName,
  children,
}: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        className={cn(
          "group flex w-full cursor-pointer items-center justify-between gap-4 rounded-sm py-1 text-left text-sm font-medium text-foreground transition-colors duration-500 hover:text-primary focus-visible:outline-offset-6",
          buttonClassName,
        )}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="inline-flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full bg-border transition-colors duration-500 group-hover:bg-primary",
              isOpen && "bg-primary",
            )}
          />
          {label}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition duration-500 ease-out group-hover:text-primary",
            isOpen && "rotate-180 text-primary",
          )}
        />
      </button>
      <div
        id={contentId}
        aria-hidden={!isOpen}
        className={cn(
          "grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div
          className={cn(
            "min-h-0 overflow-hidden transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          )}
        >
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
