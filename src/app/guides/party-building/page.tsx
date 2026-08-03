import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { AuthorByline } from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Party Building Guide — Roles, Auras & Turn Economy",
  description:
    "How to build parties in Sword of Convallaria: role coverage, faction auras, Act Again enablers, NRG, and sample 5–6 slot structures for SoC.",
  alternates: { canonical: "/guides/party-building" },
};

const UPDATED = "2026-08-03";

export default function PartyBuildingPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many units should a SoC party have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most content wants 5–6 deployable units. Build a core of carry + enabler + frontline first, then fill flex slots for matchups and faction auras.",
        },
      },
      {
        "@type": "Question",
        name: "Do faction auras matter early?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Early story: role coverage and stars matter more. Faction breakpoints become important once you can field 3+ of one faction without gutting the team.",
        },
      },
      {
        "@type": "Question",
        name: "What is an enabler in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A unit that creates turns or resources for the carry—Act Again, NRG battery, team buffs, or strong healing that keeps the DPS alive to act again.",
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
        name: "Party Building",
        item: `${SITE_URL}/guides/party-building`,
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
        <span className="text-foreground">Party building</span>
      </nav>

      <p className="soc-heading-sm">Systems · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Party Building Guide
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <div className="mb-6">
        <AuthorByline updated={UPDATED} compact />
      </div>
      <p className="text-lg leading-relaxed text-[var(--foreground)]/90">
        A reliable Sword of Convallaria squad is less about six SSS names and
        more about{" "}
        <strong className="text-foreground">role coverage</strong>,{" "}
        <strong className="text-foreground">turn economy</strong> (Act Again /
        NRG), and optional{" "}
        <strong className="text-foreground">faction aura</strong> density. Use
        this page as structure theory; for concrete lineups open{" "}
        <Link href="/guides/early-teams" className="text-link hover:underline">
          early teams
        </Link>
        .
      </p>

      <nav className="soc-frame mt-8 p-5 text-sm" aria-label="Contents">
        <p className="font-display text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          On this page
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted">
          <li>
            <a href="#structure" className="hover:text-[var(--accent-bright)]">
              5–6 slot structure
            </a>
          </li>
          <li>
            <a href="#economy" className="hover:text-[var(--accent-bright)]">
              Turn economy
            </a>
          </li>
          <li>
            <a href="#matchups" className="hover:text-[var(--accent-bright)]">
              Role matchups
            </a>
          </li>
          <li>
            <a href="#faction" className="hover:text-[var(--accent-bright)]">
              Faction auras
            </a>
          </li>
          <li>
            <a href="#checklist" className="hover:text-[var(--accent-bright)]">
              Pre-deploy checklist
            </a>
          </li>
        </ol>
      </nav>

      <section id="structure" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Core structure (5–6 slots)</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Think in jobs, then fill with names from the{" "}
          <Link href="/characters" className="text-link">
            database
          </Link>
          .
        </p>
        <div className="mt-5 overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
          <table className="soc-table min-w-[520px] text-sm">
            <thead>
              <tr>
                <th>Slot</th>
                <th>Job</th>
                <th>Typical roles</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">1</td>
                <td>Main carry</td>
                <td className="text-muted">Seeker / Breaker / Destroyer</td>
                <td className="text-muted">
                  <Link href="/characters/camelot" className="text-link">
                    Camelot
                  </Link>
                  ,{" "}
                  <Link href="/characters/col" className="text-link">
                    Col
                  </Link>
                  , Lukamar
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">2</td>
                <td>Enabler</td>
                <td className="text-muted">Watcher (Act Again / battery)</td>
                <td className="text-muted">
                  <Link href="/characters/inanna" className="text-link">
                    Inanna
                  </Link>
                  ,{" "}
                  <Link href="/characters/sp-inanna" className="text-link">
                    SP Inanna
                  </Link>
                  ,{" "}
                  <Link href="/characters/taair" className="text-link">
                    Taair
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">3</td>
                <td>Frontline</td>
                <td className="text-muted">Defender</td>
                <td className="text-muted">
                  <Link href="/characters/sp-maitha" className="text-link">
                    SP Maitha
                  </Link>
                  ,{" "}
                  <Link href="/characters/cocoa" className="text-link">
                    Cocoa
                  </Link>
                  , Clara
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">4</td>
                <td>Flex DPS</td>
                <td className="text-muted">Second damage or control</td>
                <td className="text-muted">Match stage enemies</td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">5–6</td>
                <td>Glue</td>
                <td className="text-muted">Heal / faction / niche</td>
                <td className="text-muted">Aura breakpoints, pure healers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="economy" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Turn economy beats raw ATK</h2>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--foreground)]/90">
          <p>
            SoC turns are scarce. A unit that grants{" "}
            <strong className="text-foreground">Act Again</strong>, refunds{" "}
            <strong className="text-foreground">NRG</strong>, or removes a
            threat before it acts is often worth more than a second pure DPS on
            the same turn cycle.
          </p>
          <ul className="space-y-2 text-muted">
            <li className="soc-frame p-4">
              <strong className="text-foreground">Enablers first</strong> — if
              your carry needs two turns to win a wave, fund those turns before
              adding a third damage name.
            </li>
            <li className="soc-frame p-4">
              <strong className="text-foreground">NRG hunger</strong> — expensive
              skill trees need battery supports or gear; see{" "}
              <Link href="/trinkets" className="text-link">
                trinkets
              </Link>{" "}
              like NRG comfort pieces on support pages.
            </li>
            <li className="soc-frame p-4">
              <strong className="text-foreground">Reactions</strong> — off-turn
              damage and cover change board math without spending your main
              action.
            </li>
          </ul>
        </div>
      </section>

      <section id="matchups" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Role matchups still matter</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Bring answers for enemy roles. A pure Watcher squad can pressure
          Destroyers and then faceplant into the wrong physical shell. Full
          cycle:
        </p>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
          <table className="soc-table min-w-[400px] text-sm">
            <thead>
              <tr>
                <th>Role</th>
                <th>Advantage</th>
                <th>Disadvantage</th>
                <th>Hub</th>
              </tr>
            </thead>
            <tbody>
              {(
                [
                  ["Breaker", "Defender", "Seeker", "breaker"],
                  ["Defender", "Seeker", "Breaker", "defender"],
                  ["Seeker", "Breaker", "Defender", "seeker"],
                  ["Watcher", "Destroyer", "—", "watcher"],
                  ["Destroyer", "Watcher", "—", "destroyer"],
                ] as const
              ).map(([role, adv, dis, slug]) => (
                <tr key={role}>
                  <td className="font-medium">{role}</td>
                  <td className="text-muted">{adv}</td>
                  <td className="text-muted">{dis}</td>
                  <td>
                    <Link
                      href={`/characters/role/${slug}`}
                      className="text-link text-xs"
                    >
                      list →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted">
          Deep dive:{" "}
          <Link href="/guides/role-matchups" className="text-link hover:underline">
            role matchups guide →
          </Link>
        </p>
      </section>

      <section id="faction" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Faction auras</h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--foreground)]/90">
          Factions (Iria, Union, Papal States, Luccia, Elaman, Alacrity, etc.)
          can grant aura bonuses when you field enough members. Rules of thumb:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>
            <strong className="text-foreground">Early:</strong> ignore perfect
            auras if it costs you heal or matchup coverage.
          </li>
          <li>
            <strong className="text-foreground">Mid:</strong> aim for natural
            3-stacks on your main faction when building around a core (e.g. Iria
            supports).
          </li>
          <li>
            <strong className="text-foreground">Don’t:</strong> force six of one
            faction with unbuilt units just for the icon glow.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted">
          Inspect overlap in the{" "}
          <Link
            href="/tools/team-builder"
            className="text-link hover:underline"
          >
            Team Builder
          </Link>
          .
        </p>
      </section>

      <section id="checklist" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Pre-deploy checklist</h2>
        <ol className="mt-5 space-y-2 text-sm text-muted">
          <li className="soc-frame p-3">
            1. Do I have a win condition (carry skill) this stage?
          </li>
          <li className="soc-frame p-3">
            2. Can that carry survive to cast (heal / tank / reposition)?
          </li>
          <li className="soc-frame p-3">
            3. Do I answer the enemy’s main role shells?
          </li>
          <li className="soc-frame p-3">
            4. Is NRG / Act Again enough for the plan’s second cycle?
          </li>
          <li className="soc-frame p-3">
            5. Would one faction swap add aura without breaking 1–4?
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="soc-section-title mb-4">Continue</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/guides/early-teams",
              title: "Early game teams",
              blurb: "Concrete sample comps.",
            },
            {
              href: "/guides/shard-priority",
              title: "Shard priority",
              blurb: "Who to star first.",
            },
            {
              href: "/tools/team-builder",
              title: "Team Builder",
              blurb: "Check coverage live.",
            },
            {
              href: "/tier-list",
              title: "Tier list",
              blurb: "Meta rankings.",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="soc-hub-tile">
              <div className="font-display font-semibold">{c.title}</div>
              <p className="mt-1 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-muted">
        Fan guide for educational use. Not affiliated with XD Entertainment.
      </p>
    </article>
  );
}
