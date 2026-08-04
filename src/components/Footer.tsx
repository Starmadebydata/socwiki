import Link from "next/link";
import {
  CONTACT_EMAIL,
  SITE_FOUNDER,
  SITE_FULL_NAME,
  SITE_NAME,
} from "@/lib/site";

/** Mini site-map index — all existing routes, no new SEO URLs. */
const FOOTER_COLUMNS = [
  {
    title: "Database",
    links: [
      { href: "/characters", label: "Characters" },
      { href: "/weapons", label: "Weapons" },
      { href: "/trinkets", label: "Trinkets" },
      { href: "/tarots", label: "Tarot Whispers" },
      { href: "/factions", label: "Factions" },
    ],
  },
  {
    title: "Meta",
    links: [
      { href: "/tier-list", label: "Tier List" },
      { href: "/tier-list/reroll", label: "Reroll" },
      { href: "/teams", label: "Teams" },
      { href: "/tools/team-builder", label: "Team Builder" },
      { href: "/codes", label: "Codes" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/guides", label: "All guides" },
      { href: "/guides/beginner", label: "Beginner" },
      { href: "/guides/early-teams", label: "Early teams" },
      { href: "/guides/nrg", label: "NRG" },
      { href: "/guides/spiral-of-destinies", label: "Spiral" },
    ],
  },
  {
    title: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/editorial-policy", label: "Editorial" },
      { href: "/changelog", label: "Changelog" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-[var(--border-soft)]/50 bg-gradient-to-b from-transparent to-[rgba(6,7,12,0.95)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />

      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-12">
          {/* Brand blurb */}
          <div className="max-w-sm shrink-0">
            <div className="flex items-center gap-2.5">
              <span
                className="soc-logo-gem !h-8 !w-8 !text-[0.55rem]"
                aria-hidden
              >
                <span className="relative z-[1]">SoC</span>
              </span>
              <div>
                <p className="font-display font-semibold tracking-wide text-[var(--accent-bright)]">
                  {SITE_NAME}
                </p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                  {SITE_FULL_NAME}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Fan-made database and guides by {SITE_FOUNDER.name} (
              {SITE_FOUNDER.role}). Not affiliated with XD Entertainment. Game
              content © respective owners.
            </p>
            <p className="mt-2 text-xs text-muted">
              Contact:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-link hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {/* Index columns */}
          <nav
            aria-label="Site index"
            className="grid min-w-0 flex-1 grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent-bright)]">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-muted transition hover:text-[var(--accent-bright)]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
