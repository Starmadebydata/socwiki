import Link from "next/link";
import { CharacterCard } from "@/components/CharacterCard";
import { SearchBox } from "@/components/SearchBox";
import {
  getAllCharacters,
  HUB_CATEGORIES,
  sortByOverallTier,
} from "@/data/characters";
import { getAllGear } from "@/data/gear";
import { SITE_DESCRIPTION, SITE_FULL_NAME } from "@/lib/site";

const HUB_ICONS: Record<string, string> = {
  Characters: "⚔",
  "Tier Lists": "🏆",
  Weapons: "🗡",
  Trinkets: "💍",
  "Tarot Whispers": "🃏",
  Teams: "👥",
  Guides: "📖",
  Codes: "🎟",
};

export default function HomePage() {
  const all = getAllCharacters();
  const hot = sortByOverallTier(all).slice(0, 12);
  const gearCount = getAllGear().length;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-card/60 px-6 py-12 text-center sm:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_55%)]" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Community Database
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            {SITE_FULL_NAME}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{SITE_DESCRIPTION}</p>
          <p className="mt-4 text-sm text-muted">
            <span className="font-semibold text-foreground">{all.length}</span>{" "}
            characters ·{" "}
            <span className="font-semibold text-foreground">{gearCount}</span>{" "}
            gear entries · tier lists & team tools
          </p>
          <div className="mt-8 flex justify-center">
            <SearchBox />
          </div>
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
              className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card-hover hover:shadow-lg"
            >
              <div className="text-xl">{HUB_ICONS[cat.title] ?? "✦"}</div>
              <div className="mt-2 font-semibold text-foreground group-hover:text-accent">
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hot.map((c) => (
            <CharacterCard key={c.slug} character={c} />
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
            <strong className="text-foreground">Top 20 refined</strong> — SP
            Inanna, Camelot, Taair, Col, Estra, Cocoa, and more now have
            hand-written skills, NRG/CD notes, and how-to guides.
          </li>
          <li>
            Visual system: role-colored portraits, character cards, detail
            heroes.
          </li>
          <li>
            Full roster {all.length} units +{" "}
            <Link href="/weapons" className="text-link hover:underline">
              gear databases
            </Link>
            .
          </li>
        </ul>
      </section>
    </div>
  );
}
