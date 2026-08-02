import Link from "next/link";
import type { Metadata } from "next";
import { TierBadge } from "@/components/TierBadge";
import { RoleAvatar } from "@/components/RoleAvatar";
import { JsonLd } from "@/components/JsonLd";
import { getAllCharacters } from "@/data/characters";
import type { Tier } from "@/types/character";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reroll Guide & Tier List (2026)",
  description:
    "Sword of Convallaria reroll guide: who is worth restarting for, when to stop, and a full reroll tier list for new SoC accounts.",
  alternates: { canonical: "/tier-list/reroll" },
};

const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];
const UPDATED = "2026-08-03";

const TIER_BLURB: Partial<Record<Tier, string>> = {
  SSS: "Instant keep. Early carry or irreplaceable support — stop if you hit these with a viable partner.",
  SS: "Excellent reroll targets. Strong into mid-game with modest investment.",
  "S+": "Fine keeps if you already have a core; not always worth endless restarts alone.",
  S: "Playable, especially with free/story units filling gaps.",
  A: "Situational — do not reroll solely for these.",
  B: "Bench or niche. Build later if you like the kit.",
  C: "Skip for reroll goals.",
};

export default function RerollTierPage() {
  const chars = getAllCharacters();
  const byTier = TIER_ORDER.map((tier) => ({
    tier,
    units: chars
      .filter((c) => c.tier.reroll === tier)
      .sort((a, b) => a.name.localeCompare(b.name)),
  })).filter((g) => g.units.length > 0);

  const topKeep = chars
    .filter((c) => c.tier.reroll === "SSS" || c.tier.reroll === "SS")
    .sort((a, b) => {
      const d =
        TIER_ORDER.indexOf(a.tier.reroll) - TIER_ORDER.indexOf(b.tier.reroll);
      return d !== 0 ? d : a.name.localeCompare(b.name);
    });

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who should I reroll for in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Prioritize SSS and SS reroll units such as ${topKeep
            .slice(0, 6)
            .map((c) => c.name)
            .join(
              ", ",
            )}. Ideal accounts combine a damage carry with a real support or durable Defender.`,
        },
      },
      {
        "@type": "Question",
        name: "When should I stop rerolling SoC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stop when you have one strong carry and one real support (or tank that enables the carry), or after a fixed number of restarts you set in advance. Endless rerolling delays learning the combat system.",
        },
      },
      {
        "@type": "Question",
        name: "Is the overall tier list the same as the reroll tier list?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Overall tier ranks late-game meta value. Reroll tier ranks early-account impact and investment efficiency for new players.",
        },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tier List",
        item: `${SITE_URL}/tier-list`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reroll",
        item: `${SITE_URL}/tier-list/reroll`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />

      <nav className="mb-4 text-sm text-muted">
        <Link href="/tier-list" className="hover:text-foreground">
          Tier List
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Reroll</span>
      </nav>

      <p className="soc-heading-sm">New accounts · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Reroll Guide &amp; Tier List
      </h1>
      <div className="soc-divider my-5 max-w-lg" />
      <p className="max-w-3xl text-lg leading-relaxed text-[var(--foreground)]/90">
        Who is worth restarting for in Sword of Convallaria, when to stop, and
        the full reroll ranking used across SoC Wiki. For late-game meta, use
        the{" "}
        <Link href="/tier-list" className="text-link hover:underline">
          overall tier list
        </Link>
        ; for first-week play, start with the{" "}
        <Link href="/guides/beginner" className="text-link hover:underline">
          beginner guide
        </Link>
        .
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="soc-stat-chip">
          <strong>{topKeep.length}</strong> SSS/SS targets
        </span>
        <span className="soc-stat-chip">
          <strong>{chars.length}</strong> units ranked
        </span>
        <Link href="/codes" className="soc-btn !py-1.5 !text-xs">
          Redeem codes first →
        </Link>
      </div>

      {/* Guide body */}
      <div className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section className="soc-frame p-5 sm:p-6" id="how-to">
            <h2 className="soc-heading text-lg">How rerolling works here</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-muted">
              <li>
                Create an account, clear the minimum tutorial / free rewards so
                you can pull.
              </li>
              <li>
                Spend the early free multipulls you planned (don&apos;t invent a
                new budget each try).
              </li>
              <li>
                Compare the box to the{" "}
                <strong className="text-foreground">SSS / SS</strong> tables
                below.
              </li>
              <li>
                Apply the stop rule — keep or wipe and repeat until your cap.
              </li>
            </ol>
            <div className="soc-parchment mt-5 p-4 text-sm">
              <p className="font-display font-semibold text-[var(--ink)]">
                Stop rule (recommended)
              </p>
              <p className="mt-2 text-[var(--ink-muted)]">
                <strong className="text-[var(--ink)]">Keep</strong> if you have
                at least one SSS/SS{" "}
                <em>damage</em> unit <strong className="text-[var(--ink)]">and</strong>{" "}
                one real support or enabler (heal, Act Again, team buff) — or a
                Defender that clearly enables that carry.{" "}
                <strong className="text-[var(--ink)]">Wipe</strong> only if both
                sides are empty.
              </p>
            </div>
          </section>

          <section id="priority" className="scroll-mt-24">
            <h2 className="soc-section-title mb-4">Priority targets (SSS / SS)</h2>
            <p className="mb-4 text-sm text-muted">
              These are the names most new accounts should feel happy stopping
              on. Open a card for full builds.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {topKeep.map((c) => (
                <Link
                  key={c.slug}
                  href={`/characters/${c.slug}`}
                  className="soc-frame group flex items-center gap-3 p-3 transition hover:border-[var(--border-bright)]"
                >
                  <RoleAvatar
                    name={c.name}
                    role={c.role}
                    slug={c.slug}
                    size="md"
                    gem
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display font-semibold tracking-wide group-hover:text-[var(--accent-bright)]">
                        {c.name}
                      </span>
                      <TierBadge tier={c.tier.reroll} seal />
                    </div>
                    <p className="text-xs text-muted">
                      {c.role} · overall {c.tier.overall}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section id="tips" className="soc-frame p-5 sm:p-6">
            <h2 className="soc-heading text-lg">Reroll tips</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <strong className="text-foreground">Support is half the account.</strong>{" "}
                A lonely DPS without heals/buffs stalls on later early maps.
              </li>
              <li>
                <strong className="text-foreground">Overall ≠ reroll.</strong>{" "}
                Some late meta units are hard to pilot or star early; some
                beginner-friendly units drop in endgame tier.
              </li>
              <li>
                <strong className="text-foreground">Faction is a bonus, not a law.</strong>{" "}
                Early on, role coverage and stars matter more than perfect
                faction aura.
              </li>
              <li>
                <strong className="text-foreground">Redeem codes every try</strong>{" "}
                if the tutorial allows — free currency stacks. See{" "}
                <Link href="/codes" className="text-link hover:underline">
                  codes
                </Link>
                .
              </li>
            </ul>
          </section>
        </div>

        <aside className="space-y-4">
          <div className="soc-frame p-5">
            <h2 className="soc-heading text-base">Related</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/guides/beginner" className="text-link hover:underline">
                  Beginner first-week path →
                </Link>
              </li>
              <li>
                <Link href="/guides/early-teams" className="text-link hover:underline">
                  Early game teams →
                </Link>
              </li>
              <li>
                <Link href="/tier-list" className="text-link hover:underline">
                  Overall tier list →
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/team-builder"
                  className="text-link hover:underline"
                >
                  Team Builder →
                </Link>
              </li>
            </ul>
          </div>
          <div className="soc-parchment p-5 text-sm text-[var(--ink)]">
            <p className="font-display font-semibold">Disclaimer</p>
            <p className="mt-2 text-[var(--ink-muted)]">
              Rankings are community-oriented seeds for new EN accounts and
              shift with banners. Always verify kits on the character page.
            </p>
          </div>
        </aside>
      </div>

      {/* Full tier tables */}
      <section className="mt-14" aria-labelledby="full-tiers">
        <h2 id="full-tiers" className="soc-section-title mb-2">
          Full reroll tier list
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-muted">
          Every unit in the database sorted by{" "}
          <code className="text-foreground/80">tier.reroll</code>. Counts
          reflect current seed data.
        </p>

        <div className="space-y-10">
          {byTier.map(({ tier, units }) => (
            <section key={tier} id={`tier-${tier}`}>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <TierBadge tier={tier} seal />
                  <span className="font-display tracking-wide">
                    Reroll {tier}
                  </span>
                </h3>
                <span className="text-xs text-muted">{units.length} units</span>
              </div>
              {TIER_BLURB[tier] ? (
                <p className="mb-3 text-sm text-muted">{TIER_BLURB[tier]}</p>
              ) : null}
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {units.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/characters/${c.slug}`}
                    className="soc-frame flex items-center gap-3 px-3 py-2.5 transition hover:border-[var(--border-bright)]"
                  >
                    <RoleAvatar
                      name={c.name}
                      role={c.role}
                      slug={c.slug}
                      size="sm"
                    />
                    <div className="min-w-0">
                      <div className="truncate font-medium">{c.name}</div>
                      <div className="text-xs text-muted">
                        {c.role} · {c.rarity}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="soc-frame mt-14 p-5 sm:p-6" aria-labelledby="faq">
        <h2 id="faq" className="soc-heading text-lg">
          FAQ
        </h2>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Do I need a perfect multi?
            </dt>
            <dd className="mt-1 text-muted">
              No. A single premium carry plus a real support is enough to learn
              the game and earn free pulls.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Should I reroll for collab units?
            </dt>
            <dd className="mt-1 text-muted">
              Only if they score SSS/SS on this list and you enjoy the kit.
              Collabs can be strong but are not automatically beginner
              priorities.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Where is the live meta list?
            </dt>
            <dd className="mt-1 text-muted">
              <Link href="/tier-list" className="text-link hover:underline">
                /tier-list
              </Link>{" "}
              for overall rankings; character pages for builds and gear.
            </dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
