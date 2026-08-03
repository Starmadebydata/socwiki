import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beginner Guide — First Week Path (2026)",
  description:
    "Sword of Convallaria beginner guide: first-week checklist, who to invest in, role matchups, resources, codes, and common mistakes for new SoC accounts.",
  alternates: { canonical: "/guides/beginner" },
};

const UPDATED = "2026-08-03";

export default function BeginnerGuidePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Should I reroll in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reroll if your first 10–20 pulls miss early carries and supports from the reroll tier list (for example Inanna, SP Inanna, Camelot, SP Maitha). If you already have one strong carry and one real support, stop and play.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do in the first week of SoC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clear story for free pulls, redeem codes, learn role matchups, pick a 4–6 unit core, and funnel shards into 1–2 carries plus one support instead of leveling everyone equally.",
        },
      },
      {
        "@type": "Question",
        name: "What are the five roles in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Breaker, Defender, Seeker, Watcher, and Destroyer. Attack into the correct matchup for free damage; see the Role Matchups guide for the full cycle.",
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
        name: "Beginner Guide",
        item: `${SITE_URL}/guides/beginner`,
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
        <span className="text-foreground">Beginner</span>
      </nav>

      <p className="soc-heading-sm">Getting started · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Sword of Convallaria Beginner Guide
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <div className="mb-6">
        <AuthorByline updated={UPDATED} />
      </div>
      <p className="text-lg leading-relaxed text-[var(--foreground)]/90">
        A practical first-week path for new accounts: who to keep, what to
        spend, and how to stop wasting free damage. This guide links into the{" "}
        <Link href="/characters" className="text-link hover:underline">
          character database
        </Link>
        ,{" "}
        <Link href="/tier-list" className="text-link hover:underline">
          tier lists
        </Link>
        , and tools so you can go deeper without leaving SoC Wiki.
      </p>

      {/* TOC */}
      <nav
        className="soc-frame mt-8 p-5 text-sm"
        aria-label="Table of contents"
      >
        <p className="font-display text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          On this page
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-muted">
          <li>
            <a href="#checklist" className="hover:text-[var(--accent-bright)]">
              First-week checklist
            </a>
          </li>
          <li>
            <a href="#reroll" className="hover:text-[var(--accent-bright)]">
              Should you reroll?
            </a>
          </li>
          <li>
            <a href="#core" className="hover:text-[var(--accent-bright)]">
              Build a small core
            </a>
          </li>
          <li>
            <a href="#roles" className="hover:text-[var(--accent-bright)]">
              Roles in 60 seconds
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:text-[var(--accent-bright)]">
              Resources &amp; codes
            </a>
          </li>
          <li>
            <a href="#mistakes" className="hover:text-[var(--accent-bright)]">
              Common mistakes
            </a>
          </li>
          <li>
            <a href="#next" className="hover:text-[var(--accent-bright)]">
              What to open next
            </a>
          </li>
        </ol>
      </nav>

      <section id="checklist" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">First-week checklist</h2>
        <ol className="mt-5 space-y-4 text-[var(--foreground)]/90">
          <li className="soc-frame flex gap-4 p-4">
            <span className="font-display text-xl text-[var(--accent-bright)]">
              1
            </span>
            <div>
              <p className="font-semibold">Claim free stuff immediately</p>
              <p className="mt-1 text-sm text-muted">
                Redeem every code on the{" "}
                <Link href="/codes" className="text-link hover:underline">
                  codes list
                </Link>
                , clear mail, and finish tutorial missions before heavy pulls.
              </p>
            </div>
          </li>
          <li className="soc-frame flex gap-4 p-4">
            <span className="font-display text-xl text-[var(--accent-bright)]">
              2
            </span>
            <div>
              <p className="font-semibold">Decide: play or reroll</p>
              <p className="mt-1 text-sm text-muted">
                If your account has no early carry <em>and</em> no real support,
                check the{" "}
                <Link
                  href="/tier-list/reroll"
                  className="text-link hover:underline"
                >
                  reroll guide
                </Link>
                . Otherwise keep going — progress is more valuable than perfect
                pulls.
              </p>
            </div>
          </li>
          <li className="soc-frame flex gap-4 p-4">
            <span className="font-display text-xl text-[var(--accent-bright)]">
              3
            </span>
            <div>
              <p className="font-semibold">Push main story for free pulls</p>
              <p className="mt-1 text-sm text-muted">
                Story, first-clear chests, and early events are the bulk of week-one
                currency. Don&apos;t stall on optional hard content until your
                core is starred.
              </p>
            </div>
          </li>
          <li className="soc-frame flex gap-4 p-4">
            <span className="font-display text-xl text-[var(--accent-bright)]">
              4
            </span>
            <div>
              <p className="font-semibold">Learn role matchups once</p>
              <p className="mt-1 text-sm text-muted">
                SoC fights are turn-based and grid-based; attacking into a bad
                matchup is free damage left on the table. Skim{" "}
                <Link
                  href="/guides/role-matchups"
                  className="text-link hover:underline"
                >
                  role matchups
                </Link>{" "}
                before you blame the gacha.
              </p>
            </div>
          </li>
          <li className="soc-frame flex gap-4 p-4">
            <span className="font-display text-xl text-[var(--accent-bright)]">
              5
            </span>
            <div>
              <p className="font-semibold">Invest thin, not wide</p>
              <p className="mt-1 text-sm text-muted">
                Raise 4–6 units for stages that require full parties. Pour
                shards into{" "}
                <strong className="text-foreground">one DPS + one support</strong>{" "}
                first. See{" "}
                <Link
                  href="/guides/shard-priority"
                  className="text-link hover:underline"
                >
                  shard priority
                </Link>
                .
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section id="reroll" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Should you reroll?</h2>
        <p className="mt-4 leading-relaxed text-[var(--foreground)]/90">
          Rerolling is optional. It is worth it if you enjoy a strong early
          account and your first pulls miss both a{" "}
          <strong className="text-foreground">carry</strong> and a{" "}
          <strong className="text-foreground">support</strong>. It is not worth
          it if you already have a workable duo and just want to play story.
        </p>
        <div className="soc-parchment mt-5 p-5 text-sm">
          <p className="font-display font-semibold text-[var(--ink)]">
            Simple stop rule
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[var(--ink-muted)]">
            <li>
              <strong className="text-[var(--ink)]">Stop</strong> if you have
              any SSS/SS reroll unit plus a real healer/enabler (or vice versa).
            </li>
            <li>
              <strong className="text-[var(--ink)]">Continue</strong> only if both
              sides of the team are empty after the free + early paid-feel pulls
              you planned.
            </li>
            <li>
              Cap yourself (e.g. 5–10 restarts). Endless rerolling burns the
              part of the game that teaches tactics.
            </li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-muted">
          Full ranking with every unit:{" "}
          <Link href="/tier-list/reroll" className="text-link hover:underline">
            Reroll tier list &amp; guide →
          </Link>
        </p>
      </section>

      <section id="core" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Build a small core</h2>
        <p className="mt-4 leading-relaxed text-[var(--foreground)]/90">
          Early stages punish incomplete teams more than missing whale gear.
          Aim for a flexible 5–6 unit box:
        </p>
        <div className="mt-5 overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
          <table className="soc-table min-w-[480px] text-sm">
            <thead>
              <tr>
                <th>Slot</th>
                <th>Job</th>
                <th>Examples (database)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">
                  Carry
                </td>
                <td className="text-muted">Seeker / Breaker damage</td>
                <td className="text-muted">
                  <Link href="/characters/camelot" className="text-link">
                    Camelot
                  </Link>
                  ,{" "}
                  <Link href="/characters/col" className="text-link">
                    Col
                  </Link>
                  , Lukamar line
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">
                  Support
                </td>
                <td className="text-muted">Heal / buff / Act Again</td>
                <td className="text-muted">
                  <Link href="/characters/inanna" className="text-link">
                    Inanna
                  </Link>
                  ,{" "}
                  <Link href="/characters/sp-inanna" className="text-link">
                    SP Inanna
                  </Link>
                  , Taair
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">
                  Frontline
                </td>
                <td className="text-muted">Defender soak / cover</td>
                <td className="text-muted">
                  <Link href="/characters/sp-maitha" className="text-link">
                    SP Maitha
                  </Link>
                  ,{" "}
                  <Link href="/characters/maitha" className="text-link">
                    Maitha
                  </Link>
                  , Clara
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-[var(--accent-bright)]">
                  Flex
                </td>
                <td className="text-muted">Second DPS or control</td>
                <td className="text-muted">
                  Match stage enemies; see{" "}
                  <Link href="/guides/early-teams" className="text-link">
                    early teams
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted">
          Use the{" "}
          <Link href="/tools/team-builder" className="text-link hover:underline">
            Team Builder
          </Link>{" "}
          to check role coverage and faction overlap while you experiment.
        </p>
      </section>

      <section id="roles" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Roles in 60 seconds</h2>
        <p className="mt-4 leading-relaxed text-[var(--foreground)]/90">
          Five roles form a rock-paper-scissors layer on top of skills and
          positioning:
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {(
            [
              ["Breaker", "Shreds Defenders", "/characters/role/breaker"],
              ["Defender", "Checks Seekers", "/characters/role/defender"],
              ["Seeker", "Punishes Breakers", "/characters/role/seeker"],
              ["Watcher", "Blunts Destroyers", "/characters/role/watcher"],
              ["Destroyer", "Threatens Watchers", "/characters/role/destroyer"],
            ] as const
          ).map(([role, note, href]) => (
            <li key={role}>
              <Link
                href={href}
                className="soc-hub-tile !flex-row !items-center gap-3 !p-3"
              >
                <span className="font-display font-semibold text-foreground">
                  {role}
                </span>
                <span className="text-xs text-muted">{note}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Full diagram and tips:{" "}
          <Link
            href="/guides/role-matchups"
            className="text-link hover:underline"
          >
            Role matchups guide →
          </Link>
        </p>
      </section>

      <section id="resources" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Resources &amp; codes</h2>
        <div className="mt-5 space-y-4 text-[var(--foreground)]/90">
          <p className="leading-relaxed">
            <strong className="text-foreground">Luxites / pull currency</strong>{" "}
            — spend on banners that advance your core, not every limited face.
            Story and events refill more than daily idle early on.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Shards / stars</strong> — stars
            unlock real kit power. Prefer raising one unit to a breakpoint over
            five units stuck at low stars. Details in{" "}
            <Link
              href="/guides/shard-priority"
              className="text-link hover:underline"
            >
              shard farming priority
            </Link>
            .
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Gear</strong> — equip whatever
            raises your carry first. Browse{" "}
            <Link href="/weapons" className="text-link hover:underline">
              weapons
            </Link>
            ,{" "}
            <Link href="/trinkets" className="text-link hover:underline">
              trinkets
            </Link>
            , and{" "}
            <Link href="/tarots" className="text-link hover:underline">
              tarots
            </Link>{" "}
            for Best on lists pulled from character builds.
          </p>
          <p className="leading-relaxed">
            <strong className="text-foreground">Codes</strong> — free Luxites.
            Keep{" "}
            <Link href="/codes" className="text-link hover:underline">
              /codes
            </Link>{" "}
            bookmarked; redeem after every patch note or stream.
          </p>
        </div>
      </section>

      <section id="mistakes" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Common mistakes</h2>
        <ul className="mt-5 space-y-3 text-sm text-muted">
          <li className="soc-frame p-4">
            <strong className="text-foreground">Spreading shards evenly</strong>
            <p className="mt-1">
              Looks fair, feels weak. One 5★ carry outperforms three 2★
              passengers in story gates.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Ignoring matchups</strong>
            <p className="mt-1">
              Dumping skills into a bad role matchup is like fighting with half
              ATK. Reposition or swap the unit.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Pulling every banner</strong>
            <p className="mt-1">
              Limited units are shiny; unfinished cores clear more content. Pull
              when the unit fills a hole you can name.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Skipping free codes</strong>
            <p className="mt-1">
              Codes expire quietly. Copy-paste takes ten seconds; missing a week
              of codes is a free multi.
            </p>
          </li>
        </ul>
      </section>

      <section id="next" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">What to open next</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            {
              href: "/tier-list/reroll",
              title: "Reroll guide",
              blurb: "Who is worth restarting for, stop rules, and full tiers.",
            },
            {
              href: "/guides/early-teams",
              title: "Early game teams",
              blurb: "Sample comps for the first weeks of progress.",
            },
            {
              href: "/guides/party-building",
              title: "Party building",
              blurb: "How to structure 5–6 unit squads long-term.",
            },
            {
              href: "/characters",
              title: "Character database",
              blurb: "Builds, skill rows, and gear for every unit.",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="soc-hub-tile">
              <div className="font-display font-semibold tracking-wide text-foreground group-hover:text-[var(--accent-bright)]">
                {c.title}
              </div>
              <p className="mt-1 text-sm text-muted">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-12 text-xs text-muted">
        Fan guide for educational use. Not affiliated with XD Entertainment.
        Strategies shift with banners — check character pages for{" "}
        <code className="text-foreground/80">lastUpdated</code> dates.
      </p>
    </article>
  );
}
