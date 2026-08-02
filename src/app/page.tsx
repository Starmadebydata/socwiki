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
    <div className="relative">
      {/* Full-page game title-screen background (from client capture) */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/home-bg.webp"
          alt=""
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,12,0.55) 0%, rgba(10,11,18,0.72) 40%, rgba(6,7,12,0.88) 100%), radial-gradient(ellipse at 50% 20%, rgba(10,11,18,0.15), rgba(6,7,12,0.65) 70%)",
          }}
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <section className="soc-frame relative mb-14 overflow-hidden px-6 py-14 text-center sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,181,106,0.16),transparent_55%)]" />
          <div className="relative">
            <p className="soc-heading-sm">Community Database</p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-5xl">
              {SITE_FULL_NAME}
            </h1>
            <div className="soc-divider mx-auto my-5 max-w-md" />
            <p className="mx-auto max-w-2xl text-[var(--foreground)]/90 drop-shadow-sm">
              {SITE_DESCRIPTION}
            </p>
            <p className="mt-4 text-sm text-muted">
              <span className="font-semibold text-[var(--accent-bright)]">
                {all.length}
              </span>{" "}
              characters ·{" "}
              <span className="font-semibold text-[var(--accent-bright)]">
                {gearCount}
              </span>{" "}
              gear entries · tier lists & team tools
            </p>
            <div className="mt-8 flex justify-center">
              <SearchBox />
            </div>
          </div>
        </section>

        <section aria-labelledby="browse-heading" className="mb-14">
          <h2 id="browse-heading" className="soc-heading mb-4 text-lg">
            Browse the database
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HUB_CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="soc-frame group p-5 transition hover:-translate-y-0.5 hover:border-[var(--border-bright)]"
              >
                <div className="text-xl">{HUB_ICONS[cat.title] ?? "✦"}</div>
                <div className="font-display mt-2 font-semibold tracking-wide text-foreground group-hover:text-[var(--accent-bright)]">
                  {cat.title}
                </div>
                <p className="mt-1 text-sm text-muted">{cat.blurb}</p>
              </Link>
            ))}
          </div>
        </section>

        <section aria-labelledby="hot-heading" className="mb-14">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 id="hot-heading" className="soc-heading text-lg">
              Hot characters
            </h2>
            <Link
              href="/characters"
              className="text-sm text-link hover:text-[var(--link-hover)]"
            >
              All characters →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hot.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
        </section>

        <section aria-labelledby="updates-heading" className="soc-frame p-6">
          <div className="mb-4 flex justify-center sm:justify-start">
            <span className="soc-ribbon">Latest updates</span>
          </div>
          <h2 id="updates-heading" className="sr-only">
            Latest updates
          </h2>
          <ul className="mt-1 space-y-2 text-sm text-muted">
            <li>
              <strong className="text-[var(--accent-bright)]">
                Client portraits
              </strong>{" "}
              — Maitha, Crimson Falcon and captured roster units now show
              in-game art.
            </li>
            <li>
              <strong className="text-[var(--accent-bright)]">
                Device skill data
              </strong>{" "}
              — NRG/CD and tooltips from physical Pixel 7 captures.
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
    </div>
  );
}
