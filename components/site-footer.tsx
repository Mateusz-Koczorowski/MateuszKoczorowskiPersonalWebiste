import { contactLinks, socialLinks } from "@/content";

const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

export function SiteFooter() {
  return (
    <footer className="theme-night border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-[0.9375rem] text-graphite sm:px-8">
        <p>Mateusz Koczorowski, AI-first quality engineering, Poznań</p>
        <ul className="flex flex-wrap gap-5">
          <li>
            <a href={contactLinks[0].href} className="text-graphite hover:text-ink">
              Email
            </a>
          </li>
          {linkedin ? (
            <li>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
          ) : null}
          <li>
            <a href="/privacy" className="text-graphite hover:text-ink">
              Privacy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
