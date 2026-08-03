import Link from "next/link";
import { CONTACT_EMAIL, SITE_FOUNDER } from "@/lib/site";

/**
 * Lightweight E-E-A-T byline for guides and deep character pages.
 */
export function AuthorByline({
  updated,
  compact = false,
}: {
  updated?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <p className="text-xs text-muted">
        By{" "}
        <Link href="/about" className="text-link hover:underline">
          {SITE_FOUNDER.name}
        </Link>
        , {SITE_FOUNDER.role}
        {updated ? ` · Updated ${updated}` : ""}
        {" · "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-link hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
    );
  }

  return (
    <aside className="soc-frame flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
          Editor
        </p>
        <p className="font-display text-sm font-semibold tracking-wide text-foreground">
          <Link href="/about" className="hover:text-[var(--accent-bright)]">
            {SITE_FOUNDER.name}
          </Link>
          <span className="font-sans text-xs font-normal text-muted">
            {" "}
            · {SITE_FOUNDER.role}
          </span>
        </p>
        <p className="mt-1 max-w-xl text-xs leading-relaxed text-muted">
          {SITE_FOUNDER.bioShort}{" "}
          <Link href="/editorial-policy" className="text-link hover:underline">
            Editorial policy
          </Link>
          .
        </p>
      </div>
      <div className="shrink-0 text-xs text-muted sm:text-right">
        {updated ? <p>Updated {updated}</p> : null}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-link hover:underline"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </aside>
  );
}
