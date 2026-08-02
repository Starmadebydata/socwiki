import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RoleAvatar } from "@/components/RoleAvatar";
import { getCharacterBySlug } from "@/data/characters";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Best Early Game Teams (2026)",
  description:
    "Sword of Convallaria early game teams: sample story comps, role coverage, swap rules, and links to builds for new SoC accounts.",
  alternates: { canonical: "/guides/early-teams" },
};

const UPDATED = "2026-08-03";

type Member = { slug: string; roleHint: string };

const TEAMS: {
  id: string;
  name: string;
  goal: string;
  note: string;
  when: string;
  members: Member[];
}[] = [
  {
    id: "iria",
    name: "Classic Iria start",
    goal: "Story clear · low pull pressure",
    note: "Safe default: Act Again support + assassin + cover tank. Works even if limiteds miss.",
    when: "Use when your box is mostly launch / free-friendly Iria units.",
    members: [
      { slug: "inanna", roleHint: "Enabler" },
      { slug: "col", roleHint: "Carry" },
      { slug: "cocoa", roleHint: "Front / cover" },
      { slug: "rawiyah", roleHint: "Flex DPS" },
      { slug: "gloria", roleHint: "Flex / aura" },
      { slug: "maitha", roleHint: "Budget tank" },
    ],
  },
  {
    id: "dot",
    name: "Sustained pressure (DoT / chip)",
    goal: "Long fights · bosses",
    note: "Leans on infection, pierces, and battery support. Slower first clears, stronger if stages are tanky.",
    when: "Use when you pulled Taair / Kvare / destroyer tools early.",
    members: [
      { slug: "taair", roleHint: "Battery" },
      { slug: "kvare", roleHint: "DoT core" },
      { slug: "lutfi", roleHint: "Flex" },
      { slug: "inanna", roleHint: "Heal / enable" },
      { slug: "pooch-runrun", roleHint: "Chip" },
      { slug: "beryl", roleHint: "Alt mage" },
    ],
  },
  {
    id: "meta",
    name: "Meta aspirational core",
    goal: "Mid-game spike · limited investment",
    note: "Target roster as limiteds land. Do not shard these before you own them—plan, don’t force.",
    when: "Use as a pull / farm roadmap after reroll or lucky banners.",
    members: [
      { slug: "sp-inanna", roleHint: "Enabler" },
      { slug: "camelot", roleHint: "Carry" },
      { slug: "sp-maitha", roleHint: "Frontline" },
      { slug: "taair", roleHint: "Battery" },
      { slug: "estra", roleHint: "Flex DPS" },
      { slug: "lukamar", roleHint: "Alt carry" },
    ],
  },
  {
    id: "tanky",
    name: "Frontline-heavy clear",
    goal: "Survival · new players struggling",
    note: "Slower kills, fewer resets. Trade damage for cover and heals until you learn positioning.",
    when: "Use when you keep dying on story gates with glass comps.",
    members: [
      { slug: "sp-maitha", roleHint: "Main tank" },
      { slug: "cocoa", roleHint: "Cover" },
      { slug: "inanna", roleHint: "Heal" },
      { slug: "maitha", roleHint: "Budget tank" },
      { slug: "col", roleHint: "Carry" },
      { slug: "gloria", roleHint: "Flex" },
    ],
  },
];

export default function EarlyTeamsPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a good early game team in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A reliable early team has one damage carry, one real support or enabler, and a Defender or cover unit. Classic Iria cores (Inanna + Col + Cocoa) work for many new accounts.",
        },
      },
      {
        "@type": "Question",
        name: "Should I wait for SP Inanna or Camelot before clearing story?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Clear story with owned units for free pulls. Treat meta limiteds as upgrades, not gatekeepers.",
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
        name: "Early Teams",
        item: `${SITE_URL}/guides/early-teams`,
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
        <span className="text-foreground">Early teams</span>
      </nav>

      <p className="soc-heading-sm">Teams · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Best Early Game Teams
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="text-lg leading-relaxed text-[var(--foreground)]/90">
        Sample Sword of Convallaria teams for new and returning accounts. These
        are{" "}
        <strong className="text-foreground">templates</strong>, not the only
        way to clear—swap units you own and always check role matchups on the
        board. For theory, read{" "}
        <Link
          href="/guides/party-building"
          className="text-link hover:underline"
        >
          party building
        </Link>
        ; for who to pull first, see{" "}
        <Link href="/tier-list/reroll" className="text-link hover:underline">
          reroll
        </Link>
        .
      </p>

      <nav className="soc-frame mt-8 p-5 text-sm" aria-label="Contents">
        <p className="font-display text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
          On this page
        </p>
        <ol className="mt-3 list-decimal space-y-1 pl-5 text-muted">
          <li>
            <a href="#rules" className="hover:text-[var(--accent-bright)]">
              Swap rules
            </a>
          </li>
          {TEAMS.map((t) => (
            <li key={t.id}>
              <a
                href={`#${t.id}`}
                className="hover:text-[var(--accent-bright)]"
              >
                {t.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#builder" className="hover:text-[var(--accent-bright)]">
              Build it in Team Builder
            </a>
          </li>
        </ol>
      </nav>

      <section id="rules" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Swap rules (read first)</h2>
        <ul className="mt-5 space-y-3 text-sm text-muted">
          <li className="soc-frame p-4">
            <strong className="text-foreground">Never bench your only healer</strong>
            <p className="mt-1">
              If a sample lists Inanna and you own Taair instead, keep the
              support slot filled—name is flexible, job is not.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Match the stage enemy roles</strong>
            <p className="mt-1">
              Bring the right answer to frontline Defenders or backline Watchers.
              See{" "}
              <Link href="/guides/role-matchups" className="text-link">
                role matchups
              </Link>
              .
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Stars beat unbuilt legendaries</strong>
            <p className="mt-1">
              A starred Epic/alt carry often outperforms a 1★ limited you just
              pulled. Follow{" "}
              <Link href="/guides/shard-priority" className="text-link">
                shard priority
              </Link>
              .
            </p>
          </li>
        </ul>
      </section>

      <div className="mt-12 space-y-10">
        {TEAMS.map((team) => (
          <section
            key={team.id}
            id={team.id}
            className="soc-frame scroll-mt-24 p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h2 className="font-display text-xl font-semibold tracking-wide text-[var(--accent-bright)]">
                {team.name}
              </h2>
              <span className="soc-stat-chip !py-1 text-xs">{team.goal}</span>
            </div>
            <p className="mt-2 text-sm text-muted">{team.note}</p>
            <p className="mt-1 text-xs text-[var(--accent)]">{team.when}</p>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {team.members.map((m) => {
                const c = getCharacterBySlug(m.slug);
                return (
                  <li key={m.slug}>
                    <Link
                      href={`/characters/${m.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-[var(--border-soft)] bg-[var(--card-deep)]/50 px-3 py-2 transition hover:border-[var(--border-bright)]"
                    >
                      {c ? (
                        <RoleAvatar
                          name={c.name}
                          role={c.role}
                          slug={c.slug}
                          size="sm"
                        />
                      ) : (
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-xs">
                          ?
                        </span>
                      )}
                      <div className="min-w-0">
                        <div className="truncate font-medium">
                          {c?.name ?? m.slug}
                        </div>
                        <div className="text-xs text-muted">
                          {m.roleHint}
                          {c ? ` · ${c.role}` : ""}
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <section id="builder" className="mt-12 scroll-mt-24">
        <h2 className="soc-section-title">Build it in Team Builder</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Drop these slugs into the{" "}
          <Link
            href="/tools/team-builder"
            className="text-link hover:underline"
          >
            Team Builder
          </Link>{" "}
          to inspect role counts and faction overlap, then open each unit’s
          build page for weapons and skill rows.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/guides/party-building" className="soc-btn !text-xs">
            Party building theory →
          </Link>
          <Link href="/tier-list" className="soc-btn !text-xs">
            Overall tier list →
          </Link>
          <Link href="/guides/beginner" className="soc-btn !text-xs">
            Beginner path →
          </Link>
        </div>
      </section>

      <section className="soc-frame mt-12 p-5" aria-labelledby="faq">
        <h2 id="faq" className="soc-heading text-lg">
          FAQ
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Missing a listed unit?
            </dt>
            <dd className="mt-1 text-muted">
              Keep the job (carry / support / tank) and pick the next best from
              the same{" "}
              <Link href="/characters" className="text-link">
                role hub
              </Link>
              .
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              How many units should I level?
            </dt>
            <dd className="mt-1 text-muted">
              Early: 4–6 for stage requirements. Depth comes after your first
              carry and support hit star breakpoints.
            </dd>
          </div>
        </dl>
      </section>

      <p className="mt-10 text-xs text-muted">
        Fan templates for education. Not affiliated with XD Entertainment.
        Comps shift with banners—verify kits on character pages.
      </p>
    </article>
  );
}
