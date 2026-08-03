import Link from "next/link";
import {
  CONTACT_EMAIL,
  SITE_FOUNDER,
  SITE_FULL_NAME,
  SITE_NAME,
} from "@/lib/site";

const LEGAL = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/editorial-policy", label: "Editorial" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden border-t border-[var(--border-soft)]/50 bg-gradient-to-b from-transparent to-[rgba(6,7,12,0.95)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-50" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 text-sm text-muted sm:flex-row sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="soc-logo-gem !h-8 !w-8 !text-[0.55rem]" aria-hidden>
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
          <p className="mt-3 max-w-md leading-relaxed text-muted">
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
        <div className="flex flex-wrap items-start gap-2 sm:max-w-md sm:justify-end">
          {LEGAL.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="soc-btn !px-3.5 !py-1.5 text-xs"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
