import type { Metadata } from "next";
import Link from "next/link";
import { getAllCharacters } from "@/data/characters";
import { TierBadge } from "@/components/TierBadge";
import { RoleAvatar } from "@/components/RoleAvatar";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import type { Character, Tier } from "@/types/character";
import { AuthorByline } from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Shard & Star Priority Guide (2026)",
  description:
    "Sword of Convallaria shard farming and star priority—who to invest in first, star breakpoints, and a ranked core list for limited materials.",
  alternates: { canonical: "/guides/shard-priority" },
};

const UPDATED = "2026-08-03";
const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];

function tierRank(t: Tier) {
  return TIER_ORDER.indexOf(t);
}

/** Prefer units that are both meta and worth early stars (enablers + carries). */
function scoreForShards(c: Character): number {
  let s = 100 - tierRank(c.tier.overall) * 12;
  // Slight boost to supports / tanks that enable many teams
  if (c.role === "Watcher") s += 4;
  if (c.role === "Defender") s += 2;
  // Reroll-friendly units often have good early breakpoints
  s += Math.max(0, 6 - tierRank(c.tier.reroll));
  return s;
}

export default function ShardPriorityPage() {
  const all = getAllCharacters();
  const ranked = [...all]
    .sort((a, b) => scoreForShards(b) - scoreForShards(a))
    .slice(0, 24);

  const enablers = ranked
    .filter((c) => c.role === "Watcher")
    .slice(0, 8);
  const carries = ranked
    .filter((c) =>
      ["Breaker", "Seeker", "Destroyer"].includes(c.role),
    )
    .slice(0, 8);
  const tanks = ranked.filter((c) => c.role === "Defender").slice(0, 6);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who should I spend shards on first in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Raise your main enabler (Act Again / battery / primary healer) and one damage carry to key star breakpoints before spreading shards across the whole roster.",
        },
      },
      {
        "@type": "Question",
        name: "What star levels matter most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many kits spike at 3★ and 5★. Check each character page starPriority field—push the node that unlocks the unit identity instead of stopping at random mid stars.",
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
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Shard Priority",
        item: `${SITE_URL}/guides/shard-priority`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />

      <nav className="mb-4 text-sm text-muted">
        <Link href="/guides" className="hover:text-foreground">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Shard priority</span>
      </nav>

      <p className="soc-heading-sm">Investment · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Shard &amp; Star Priority
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <div className="mb-6">
        <AuthorByline updated={UPDATED} compact />
      </div>
      <p className="text-lg leading-relaxed text-[var(--foreground)]/90">
        Stars multiply kit breakpoints—extra Act Again windows, aura power,
        survivability. Spreading shards evenly is the fastest way to feel weak.
        This page ranks{" "}
        <strong className="text-foreground">who to feed first</strong> when
        materials are tight, then links to each unit’s own star notes.
      </p>

      <nav className="soc-frame mt-8 p-5 text-sm" aria-label="Contents">
        <p className="font-display text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          On this page
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted">
          <li>
            <a href="#rules" className="hover:text-[var(--accent-bright)]">
              Rules of thumb
            </a>
          </li>
          <li>
            <a href="#order" className="hover:text-[var(--accent-bright)]">
              Spend order
            </a>
          </li>
          <li>
            <a href="#list" className="hover:text-[var(--accent-bright)]">
              Priority list
            </a>
          </li>
          <li>
            <a href="#lanes" className="hover:text-[var(--accent-bright)]">
              By role lane
            </a>
          </li>
        </ol>
      </nav>

      <section id="rules" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Rules of thumb</h2>
        <ol className="mt-5 space-y-3 text-sm text-muted">
          <li className="soc-frame p-4">
            <strong className="text-foreground">1. Enabler before third DPS</strong>
            <p className="mt-1">
              Act Again / battery / main healer stars often unlock more clear
              speed than another underbuilt carry.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">2. Hit identity nodes</strong>
            <p className="mt-1">
              Push carries to the star that unlocks their kit (often 3★ then
              5★). Stopping one node short wastes the whole farm.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">3. Tanks can wait—sometimes</strong>
            <p className="mt-1">
              If cover tools already work at base, Defenders can sit lower while
              DPS/support claim shards. Exceptions: SP tanks that are your only
              frontline.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">4. Collabs are optional taxes</strong>
            <p className="mt-1">
              Only deep-invest collab units you own and enjoy—banners may not
              return, and shards can soft-lock your main faction core.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">5. One core, then widen</strong>
            <p className="mt-1">
              Aim for a 4–6 unit clear team with real stars before collecting
              12 half-built legendaries. See{" "}
              <Link href="/guides/early-teams" className="text-link">
                early teams
              </Link>
              .
            </p>
          </li>
        </ol>
      </section>

      <section id="order" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Recommended spend order</h2>
        <div className="mt-5 overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
          <table className="soc-table min-w-[480px] text-sm">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Target</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">P0</td>
                <td>Main enabler → key ★</td>
                <td className="text-muted">Creates turns for everyone else</td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">P1</td>
                <td>Main carry → key ★</td>
                <td className="text-muted">Converts turns into clears</td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">P2</td>
                <td>Frontline if deaths stall you</td>
                <td className="text-muted">Fewer resets = more farm time</td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">P3</td>
                <td>Flex / second DPS</td>
                <td className="text-muted">After core breakpoints</td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">P4</td>
                <td>Collection / niche</td>
                <td className="text-muted">Favorites and side content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="list" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title mb-2">High priority cores</h2>
        <p className="mb-5 text-sm text-muted">
          Seeded from overall tier with a soft boost to enablers and
          reroll-friendly units. Always read the unit’s own star line before
          dumping materials.
        </p>
        <ul className="space-y-2">
          {ranked.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/characters/${c.slug}`}
                className="soc-frame flex items-center gap-3 px-3 py-2.5 transition hover:border-[var(--border-bright)]"
              >
                <span className="w-6 shrink-0 text-center font-display text-sm text-[var(--accent)]">
                  {i + 1}
                </span>
                <RoleAvatar
                  name={c.name}
                  role={c.role}
                  slug={c.slug}
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">{c.name}</span>
                    <TierBadge tier={c.tier.overall} seal />
                  </div>
                  <p className="truncate text-xs text-muted">
                    {c.role} · {c.starPriority}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="lanes" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title mb-4">By role lane</h2>
        <div className="space-y-6">
          {(
            [
              ["Enablers (Watcher)", enablers],
              ["Carries (Breaker / Seeker / Destroyer)", carries],
              ["Frontline (Defender)", tanks],
            ] as const
          ).map(([title, list]) => (
            <div key={title}>
              <h3 className="font-display text-sm font-semibold tracking-wide text-[var(--accent-bright)]">
                {title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {list.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/characters/${c.slug}`}
                    className="rounded-full border border-[var(--border-soft)] bg-[var(--card-deep)] px-3 py-1 text-xs hover:border-[var(--border-bright)]"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-wrap gap-2">
        <Link href="/tier-list" className="soc-btn !text-xs">
          Full tier list →
        </Link>
        <Link href="/guides/early-teams" className="soc-btn !text-xs">
          Early teams →
        </Link>
        <Link href="/guides/beginner" className="soc-btn !text-xs">
          Beginner guide →
        </Link>
        <Link href="/weapons" className="soc-btn !text-xs">
          Gear database →
        </Link>
      </section>

      <section className="soc-frame mt-12 p-5" aria-labelledby="faq">
        <h2 id="faq" className="soc-heading text-lg">
          FAQ
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Should I 5★ a unit I don’t use yet?
            </dt>
            <dd className="mt-1 text-muted">
              Rarely. Bank shards until the unit is in your active clear core or
              you know a mode requires them.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Where is the per-unit star advice?
            </dt>
            <dd className="mt-1 text-muted">
              On each character page under star priority / skill rows—start from
              the{" "}
              <Link href="/characters" className="text-link">
                character list
              </Link>
              .
            </dd>
          </div>
        </dl>
      </section>

      <p className="mt-10 text-xs text-muted">
        Community-oriented investment order for EN accounts. Not official
        advice from XD Entertainment. Meta and farms change with patches.
      </p>
    </article>
  );
}
