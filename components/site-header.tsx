"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { contactLinks } from "@/content";

const emailHref = contactLinks[0].href;

export const navItems = [
  { href: "/#ai-first", label: "AI-first" },
  { href: "/#work", label: "Work" },
  { href: "/#mentoring", label: "Mentoring" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="theme-night sticky top-0 z-50 border-b border-rule bg-paper">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-on-cta"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:min-h-[4.25rem] sm:px-8"
      >
        <Link href="/" className="font-bold text-ink no-underline">
          Mateusz Koczorowski
        </Link>

        <div className="hidden items-center gap-7 text-[0.9375rem] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-graphite no-underline transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={emailHref}
            className="inline-flex min-h-11 items-center rounded-[10px] bg-cta px-[1.125rem] font-semibold text-on-cta no-underline transition-opacity hover:opacity-90"
          >
            Email me
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex size-11 items-center justify-center rounded-[10px] border border-rule bg-surface text-ink md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        hidden={!isMenuOpen}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-paper px-4 pb-8 md:hidden"
      >
        <ul className="divide-y divide-rule border-b border-rule">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex min-h-14 items-center text-2xl font-bold text-ink no-underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={emailHref}
          onClick={() => setIsMenuOpen(false)}
          className="mt-6 flex min-h-12 items-center justify-center rounded-[10px] bg-cta font-semibold text-on-cta no-underline"
        >
          Email me
        </a>
      </div>
    </header>
  );
}
