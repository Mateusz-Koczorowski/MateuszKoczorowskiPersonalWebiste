import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return <div className={cn(className)}>{children}</div>;
}
