import Link from "next/link";
import { SearchBox } from "@/components/SearchBox";
import { TierBadge } from "@/components/TierBadge";
import { getAllCharacters, HUB_CATEGORIES, sortByOverallTier } from "@/data/characters";
import { SITE_DESCRIPTION, SITE_FULL_NAME } from "@/lib/site";

export default function HomePage() {
  const hot = sortByOverallTier(getAllCharacters()).slice(0, 12);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {SITE_FULL_NAME}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted">{SITE_DESCRIPTION}</p>
        <div className="mt-8 flex justify-center">
          <SearchBox />
        </div>
      </section>

      <section aria-labelledby="browse-heading" className="mb-14">
        <h2 id="browse-heading" className="mb-4 text-lg font-semibold">
          Browse the database
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group rounded-2xl border border-border bg-card p-5 transition hover:border-accent/40 hover:bg-card-hover"
            >
              <div className="font-semibold text-foreground group-hover:text-accent">
                {cat.title}
              </div>
              <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="hot-heading" className="mb-14">
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 id="hot-heading" className="text-lg font-semibold">
            Hot characters
          </h2>
          <Link href="/characters" className="text-sm text-link hover:underline">
            All characters →
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hot.map((c) => (
            <Link
              key={c.slug}
              href={`/characters/${c.slug}`}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 hover:bg-card-hover"
            >
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-muted">
                  {c.role} · {c.factions[0]}
                </div>
              </div>
              <TierBadge tier={c.tier.overall} />
            </Link>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="updates-heading"
        className="rounded-2xl border border-border bg-card p-6"
      >
        <h2 id="updates-heading" className="text-lg font-semibold">
          Latest updates
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-muted">
          <li>
            <Link href="/characters/anna" className="text-link hover:underline">
              Anna
            </Link>{" "}
            build page live for Sagas of Ice and Blood.
          </li>
          <li>
            <Link href="/tier-list" className="text-link hover:underline">
              Character tier list
            </Link>{" "}
            refreshed for August 2026 meta.
          </li>
          <li>
            <Link href="/codes" className="text-link hover:underline">
              Codes
            </Link>{" "}
            page — check active redeem codes.
          </li>
        </ul>
      </section>
    </div>
  );
}
