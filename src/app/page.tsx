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

function OrnateCorners() {
  return (
    <>
      <span className="soc-corner soc-corner-tl" aria-hidden />
      <span className="soc-corner soc-corner-tr" aria-hidden />
      <span className="soc-corner soc-corner-bl" aria-hidden />
      <span className="soc-corner soc-corner-br" aria-hidden />
    </>
  );
}

export default function HomePage() {
  const all = getAllCharacters();
  const hot = sortByOverallTier(all).slice(0, 12);
  const gearCount = getAllGear().length;

  return (
    <div className="relative overflow-x-hidden">
      {/* Living title-screen backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/home-bg.webp"
          alt=""
          className="h-full w-full scale-105 object-cover object-[center_30%]"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 60% at 50% 0%, rgba(240,215,140,0.12), transparent 55%),
              radial-gradient(ellipse 70% 50% at 80% 60%, rgba(100,80,40,0.15), transparent 50%),
              linear-gradient(180deg,
                rgba(6,7,12,0.28) 0%,
                rgba(6,7,12,0.55) 35%,
                rgba(6,7,12,0.82) 70%,
                rgba(6,7,12,0.94) 100%)
            `,
          }}
          aria-hidden
        />
        {/* Ambient gold orbs */}
        <div
          className="soc-orb left-[8%] top-[20%] h-48 w-48 bg-[rgba(212,181,106,0.35)]"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="soc-orb right-[12%] top-[40%] h-64 w-64 bg-[rgba(180,140,60,0.22)]"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="soc-orb bottom-[10%] left-[40%] h-40 w-40 bg-[rgba(240,215,140,0.18)]"
          style={{ animationDelay: "-7s" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:pt-10">
        {/* ── Cinematic hero — no box, floating over art ── */}
        <section className="relative mb-16 text-center sm:mb-20">
          <div className="soc-light-beam" aria-hidden />

          <div className="relative mx-auto max-w-3xl">
            <div className="mb-5 flex justify-center">
              <span className="soc-ribbon">Community Database</span>
            </div>

            <h1 className="font-display soc-title-shimmer text-[1.85rem] font-bold leading-[1.15] tracking-[0.04em] sm:text-5xl md:text-[3.35rem]">
              {SITE_FULL_NAME}
            </h1>

            <div className="soc-divider-ornament my-6">
              <span>◆</span>
            </div>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[var(--foreground)]/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-lg">
              {SITE_DESCRIPTION}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              <span className="soc-stat-chip">
                <strong>{all.length}</strong> characters
              </span>
              <span className="soc-stat-chip">
                <strong>{gearCount}</strong> gear
              </span>
              <span className="soc-stat-chip">
                <strong>Meta</strong> tiers & teams
              </span>
            </div>

            <div className="relative mx-auto mt-9 max-w-xl">
              <OrnateCorners />
              <div className="px-1 py-1">
                <SearchBox />
              </div>
            </div>
          </div>
        </section>

        {/* ── Asymmetric bento hubs ── */}
        <section aria-labelledby="browse-heading" className="mb-16">
          <h2 id="browse-heading" className="soc-section-title mb-5">
            Browse the database
          </h2>
          <div className="soc-bento">
            {HUB_CATEGORIES.map((cat, i) => {
              const featured = i === 0 || i === 5;
              return (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`soc-hub-tile group ${
                    featured ? "sm:min-h-[7.5rem] sm:justify-center sm:py-6" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="soc-hub-icon" aria-hidden>
                      {HUB_ICONS[cat.title] ?? "✦"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className={`font-display font-semibold tracking-wide text-foreground transition group-hover:text-[var(--accent-bright)] ${
                          featured ? "text-lg sm:text-xl" : "text-base"
                        }`}
                      >
                        {cat.title}
                      </div>
                      <p
                        className={`mt-1 text-muted ${
                          featured ? "text-sm leading-relaxed" : "text-xs sm:text-sm"
                        }`}
                      >
                        {cat.blurb}
                      </p>
                    </div>
                    <span
                      className="mt-1 shrink-0 text-[var(--accent)] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Portrait rail — vertical cards, not list boxes ── */}
        <section aria-labelledby="hot-heading" className="mb-16">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 id="hot-heading" className="soc-section-title">
              Hot characters
            </h2>
            <Link
              href="/characters"
              className="soc-btn !py-1.5 !text-xs"
            >
              All characters →
            </Link>
          </div>
          <div className="soc-rail">
            {hot.map((c) => (
              <CharacterCard key={c.slug} character={c} variant="portrait" />
            ))}
          </div>
        </section>

        {/* ── Notice board ── */}
        <section aria-labelledby="updates-heading" className="soc-notice soc-ornate">
          <OrnateCorners />
          <div className="soc-ornate-inner">
            <div className="mb-4 flex justify-center sm:justify-start">
              <span className="soc-ribbon">Latest updates</span>
            </div>
            <h2 id="updates-heading" className="sr-only">
              Latest updates
            </h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)] shadow-[0_0_8px_var(--accent)]" />
                <span>
                  <strong className="text-[var(--accent-bright)]">
                    Client portraits
                  </strong>{" "}
                  — Maitha, Crimson Falcon and captured roster units now show
                  in-game art.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)] shadow-[0_0_8px_var(--accent)]" />
                <span>
                  <strong className="text-[var(--accent-bright)]">
                    Device skill data
                  </strong>{" "}
                  — NRG/CD and tooltips from physical Pixel 7 captures.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)] shadow-[0_0_8px_var(--accent)]" />
                <span>
                  Full roster {all.length} units +{" "}
                  <Link href="/weapons" className="text-link hover:underline">
                    gear databases
                  </Link>
                  .
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
