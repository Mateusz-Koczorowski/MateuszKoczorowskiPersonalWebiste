import Link from "next/link";

const navItems = [
  { href: "#expertise", label: "Expertise" },
  { href: "#ai-in-qa", label: "AI" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
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
      </nav>
    </header>
  );
}
