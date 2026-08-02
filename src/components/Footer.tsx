import Link from "next/link";
import { SITE_FULL_NAME, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border-soft)] bg-[var(--card-deep)]/80">
      <div className="soc-divider mx-auto max-w-6xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div>
          <p className="font-display font-semibold tracking-wide text-[var(--accent-bright)]">
            {SITE_NAME}
          </p>
          <p className="mt-1 text-xs text-muted">{SITE_FULL_NAME}</p>
          <p className="mt-2 max-w-md text-muted">
            Fan-made database and guides. Not affiliated with XD Entertainment.
            Game content © respective owners.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/about", label: "About" },
            { href: "/privacy", label: "Privacy" },
            { href: "/editorial-policy", label: "Editorial" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="soc-btn !px-3 !py-1 text-xs"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
