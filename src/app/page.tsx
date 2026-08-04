import type { Metadata } from "next";
import Link from "next/link";
import { CharacterCard } from "@/components/CharacterCard";
import { SearchBox } from "@/components/SearchBox";
import {
  getAllCharacters,
  HUB_CATEGORIES,
  ROLES,
  sortByOverallTier,
} from "@/data/characters";
import { hasCharacterImage } from "@/data/character-images";
import { getAllGear } from "@/data/gear";
import {
  HOME_BANNERS,
  HOME_DYK,
  HOME_FEATURED,
} from "@/data/home";
import { HotGear } from "@/components/HotGear";
import { ROLE_STYLES } from "@/lib/role-styles";
import { SITE_DESCRIPTION, SITE_FULL_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_FULL_NAME} - Characters, Tier Lists & Builds`,
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

/**
 * Featured rail: top tier first, but only units that have a portrait/art.
 * Falls back to any remaining imaged units so cards are never empty.
 */
function getFeaturedCharacters(
  all: ReturnType<typeof getAllCharacters>,
  limit = 12,
) {
  const sorted = sortByOverallTier(all);
  const withImg = sorted.filter((c) => hasCharacterImage(c.slug));
  return withImg.slice(0, limit);
}

/** Icon-forward hub seals (same hrefs as HUB_CATEGORIES — no URL changes). */
const HUB_ICONS: Record<string, string> = {
  Characters: "⚔",
  "Tier Lists": "🏆",
  Factions: "🏛",
  Weapons: "🗡",
  Trinkets: "💍",
  "Tarot Whispers": "🃏",
  Teams: "👥",
  Guides: "📖",
  Codes: "🎟",
};

/** Secondary index chips — only existing routes. */
const SYSTEM_CHIPS = [
  { href: "/tier-list/reroll", label: "Reroll" },
  { href: "/guides/early-teams", label: "Early teams" },
  { href: "/tools/team-builder", label: "Team builder" },
  { href: "/guides/nrg", label: "NRG" },
  { href: "/guides/act-again", label: "Act Again" },
  { href: "/guides/spiral-of-destinies", label: "Spiral" },
  { href: "/guides/beginner", label: "Beginner" },
  { href: "/codes", label: "Codes" },
] as const;

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
  const hot = getFeaturedCharacters(all, 12);
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
        {/* ── Cinematic hero ── */}
        <section className="relative mb-12 text-center sm:mb-14">
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

        {/* ── Latest / utility banners (entity deep-links only) ── */}
        <section
          aria-labelledby="spotlight-heading"
          className="mb-12 sm:mb-14"
        >
          <h2 id="spotlight-heading" className="sr-only">
            Current spotlights
          </h2>
          <div className="soc-banner-grid">
            {HOME_BANNERS.map((b) => (
              <article key={b.href + b.title} className="soc-banner-card">
                <div className="soc-banner-card-body">
                  <span
                    className={`soc-banner-badge ${
                      b.badge === "Latest"
                        ? "soc-banner-badge-latest"
                        : "soc-banner-badge-codes"
                    }`}
                  >
                    {b.badge}
                  </span>
                  <h3 className="soc-banner-title">
                    <Link href={b.href} className="hover:underline">
                      {b.title}
                    </Link>
                  </h3>
                  <p className="soc-banner-summary">{b.summary}</p>
                  {b.links && b.links.length > 0 && (
                    <ul className="soc-banner-links">
                      {b.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Link
                  href={b.href}
                  className="soc-banner-media"
                  tabIndex={-1}
                  aria-hidden
                >
                  {b.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.image} alt="" className="soc-banner-img" />
                  ) : (
                    <span className="soc-banner-glyph">
                      {b.badge === "Codes" ? "🎟" : "✦"}
                    </span>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── Icon index (ontology wall) ── */}
        <section aria-labelledby="browse-heading" className="mb-10">
          <h2 id="browse-heading" className="soc-section-title mb-5">
            Browse the database
          </h2>
          <div className="soc-index-grid">
            {HUB_CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="soc-index-tile group"
              >
                <span className="soc-index-icon" aria-hidden>
                  {HUB_ICONS[cat.title] ?? "✦"}
                </span>
                <span className="soc-index-label">{cat.title}</span>
                <span className="soc-index-blurb">{cat.blurb}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Secondary chips: roles + systems (existing routes only) ── */}
        <section
          aria-labelledby="jump-heading"
          className="soc-quick-index mb-14"
        >
          <h2 id="jump-heading" className="sr-only">
            Jump to roles and systems
          </h2>

          <div className="soc-quick-row">
            <span className="soc-quick-label">Roles</span>
            <div className="soc-quick-chips" role="list">
              {ROLES.map((role) => {
                const style = ROLE_STYLES[role];
                return (
                  <Link
                    key={role}
                    href={`/characters/role/${role.toLowerCase()}`}
                    className="soc-quick-chip"
                    role="listitem"
                    style={{
                      borderColor: `${style.hex}55`,
                      background: style.soft,
                      color: style.hex,
                    }}
                  >
                    {role}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="soc-quick-row">
            <span className="soc-quick-label">Systems & modes</span>
            <div className="soc-quick-chips" role="list">
              {SYSTEM_CHIPS.map((chip) => (
                <Link
                  key={chip.href}
                  href={chip.href}
                  className="soc-quick-chip soc-quick-chip-muted"
                  role="listitem"
                >
                  {chip.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── About the game + Featured guide (definition + depth sample) ── */}
        <section
          aria-labelledby="about-game-heading"
          className="soc-about-feature mb-16"
        >
          <div className="soc-about-block">
            <h2 id="about-game-heading" className="soc-section-title mb-4">
              About the game
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
              <p>
                <strong className="text-foreground">
                  Sword of Convallaria (SoC)
                </strong>{" "}
                is a tactical turn-based RPG from XD Entertainment. You build
                squads of{" "}
                <Link href="/characters" className="text-link hover:underline">
                  characters
                </Link>{" "}
                across five roles—Breaker, Defender, Destroyer, Watcher, and
                Seeker—then clear story maps, trials, and{" "}
                <Link
                  href="/guides/spiral-of-destinies"
                  className="text-link hover:underline"
                >
                  Spiral of Destinies
                </Link>{" "}
                with positioning, skill timing, and faction auras.
              </p>
              <p>
                Power comes from kits plus gear:{" "}
                <Link href="/weapons" className="text-link hover:underline">
                  weapons
                </Link>
                ,{" "}
                <Link href="/trinkets" className="text-link hover:underline">
                  trinkets
                </Link>
                , and{" "}
                <Link href="/tarots" className="text-link hover:underline">
                  Tarot Whispers
                </Link>
                .{" "}
                <Link href="/factions" className="text-link hover:underline">
                  Factions
                </Link>{" "}
                (Iria, Union, Papal States, and more) reward stacking tags for
                aura bonuses. Meta players track{" "}
                <Link href="/tier-list" className="text-link hover:underline">
                  tier lists
                </Link>
                ,{" "}
                <Link href="/teams" className="text-link hover:underline">
                  team comps
                </Link>
                , and pull value as banners rotate.
              </p>
              <p>
                This fan-made{" "}
                <Link href="/about" className="text-link hover:underline">
                  SoC Wiki
                </Link>{" "}
                is a community database for builds, skill trees, gear reverse
                links, and systems guides—not affiliated with the publisher.
                New accounts can start with the{" "}
                <Link
                  href="/guides/beginner"
                  className="text-link hover:underline"
                >
                  beginner guide
                </Link>{" "}
                or jump straight into the{" "}
                <Link href="/characters" className="text-link hover:underline">
                  full roster
                </Link>
                .
              </p>
            </div>
          </div>

          <aside
            className="soc-featured-block"
            aria-labelledby="featured-heading"
          >
            <span className="soc-banner-badge soc-banner-badge-guide">
              {HOME_FEATURED.badge}
            </span>
            <h2
              id="featured-heading"
              className="font-display mt-3 text-lg font-semibold tracking-wide text-foreground sm:text-xl"
            >
              <Link
                href={HOME_FEATURED.href}
                className="transition hover:text-[var(--accent-bright)]"
              >
                {HOME_FEATURED.title}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {HOME_FEATURED.summary}
            </p>
            <ul className="soc-banner-links mt-4">
              {HOME_FEATURED.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link
              href={HOME_FEATURED.href}
              className="soc-btn mt-5 inline-flex !py-1.5 !text-xs"
            >
              Read more →
            </Link>
          </aside>
        </section>

        {/* ── Did you know ── */}
        <section
          aria-labelledby="dyk-heading"
          className="soc-dyk mb-16"
        >
          <h2 id="dyk-heading" className="soc-section-title mb-4">
            Did you know…
          </h2>
          <ul className="soc-dyk-list">
            {HOME_DYK.map((item) => (
              <li key={item.href}>
                <span className="soc-dyk-bullet" aria-hidden>
                  ◆
                </span>
                <span>
                  … that {item.text}{" "}
                  <Link href={item.href} className="text-link hover:underline">
                    {item.linkLabel}
                  </Link>
                  ?
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Portrait rail ── */}
        <section aria-labelledby="hot-heading" className="mb-16">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 id="hot-heading" className="soc-section-title">
                Hot characters
              </h2>
              <p className="mt-1.5 text-xs text-muted">
                Meta picks · official client art when available
              </p>
            </div>
            <Link href="/characters" className="soc-btn !py-1.5 !text-xs">
              All characters →
            </Link>
          </div>
          <div className="soc-rail">
            {hot.map((c) => (
              <CharacterCard key={c.slug} character={c} variant="portrait" />
            ))}
          </div>
        </section>

        <HotGear limit={8} title="Hot gear in builds" />

        {/* ── Notice board ── */}
        <section
          aria-labelledby="updates-heading"
          className="soc-notice soc-ornate"
        >
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
                    Homepage index
                  </strong>{" "}
                  — icon hub wall, role/system chips, and footer site map for
                  faster jumps into the database.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)] shadow-[0_0_8px_var(--accent)]" />
                <span>
                  <strong className="text-[var(--accent-bright)]">
                    Client portraits
                  </strong>{" "}
                  — Maitha, Crimson Falcon and captured roster units show
                  in-game art when available.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)] shadow-[0_0_8px_var(--accent)]" />
                <span>
                  Full roster {all.length} units +{" "}
                  <Link href="/weapons" className="text-link hover:underline">
                    gear databases
                  </Link>
                  . Site notes on the{" "}
                  <Link
                    href="/changelog"
                    className="text-link hover:underline"
                  >
                    changelog
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
