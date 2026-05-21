"use client";

import { Github, Linkedin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { socialLinks } from "@/content";

const linkedInUrl = socialLinks.find((link) => link.label === "LinkedIn")?.href;
const githubUrl = socialLinks.find((link) => link.label === "GitHub")?.href;

const navItems = [
  { href: "#expertise", label: "Expertise" },
  { href: "#ai-in-qa", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const mobileMenuItems = [
  { href: "#experience", label: "Experience" },
  { href: "#ai-in-qa", label: "AI workflows" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: linkedInUrl ?? "https://www.linkedin.com/in/mateusz-koczorowski/", label: "LinkedIn" },
  { href: githubUrl ?? "https://github.com/Mateusz-Koczorowski", label: "GitHub" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <Link
          href="/"
          className="text-sm font-medium tracking-[0.01em] text-foreground/90 transition-colors hover:text-primary"
        >
          Mateusz Koczorowski
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          className="inline-flex size-11 items-center justify-center rounded-sm border border-border/55 bg-background/30 text-foreground transition-colors hover:border-primary/45 hover:text-primary focus-visible:outline-offset-4 md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
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
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 bg-background/96 px-6 pt-24 backdrop-blur-xl transition duration-500 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-md flex-col justify-between border-t border-border/35 py-8">
          <div className="space-y-2">
            {mobileMenuItems.map((item) => {
              const isExternal = item.href.startsWith("http");
              const Icon =
                item.label === "LinkedIn" ? Linkedin : item.label === "GitHub" ? Github : null;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  tabIndex={isMenuOpen ? 0 : -1}
                  className="group flex min-h-14 items-center justify-between border-b border-border/25 py-3 text-2xl font-semibold leading-tight text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-5 text-muted-foreground transition-colors group-hover:text-primary"
                    />
                  ) : null}
                </a>
              );
            })}
          </div>
          <p className="pb-6 text-sm leading-7 text-muted-foreground">
            Senior QA Engineer / automation / AI-assisted quality
          </p>
        </div>
      </div>
    </header>
  );
}
