import { ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#focus-areas", label: "Focus" },
  { href: "/docs/PRD.md", label: "Docs" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="flex size-9 items-center justify-center rounded-md border bg-card">
            <ShieldCheck aria-hidden="true" className="size-5 text-primary" />
          </span>
          <span>Mateusz Koczorowski</span>
        </Link>
        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" size="sm">
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
}
