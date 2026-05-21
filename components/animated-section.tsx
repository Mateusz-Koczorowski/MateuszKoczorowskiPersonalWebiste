"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={reduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
