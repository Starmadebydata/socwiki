import Link from "next/link";
import type { Metadata } from "next";
import { AuthorByline } from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Sword of Convallaria beginner guides, reroll help, party building, shard priority, and system explainers — SoC Wiki.",
  alternates: { canonical: "/guides" },
};

const GUIDES: {
  href: string;
  title: string;
  blurb: string;
  tag: string;
  read: string;
  priority?: boolean;
}[] = [
  {
    href: "/guides/beginner",
    title: "Beginner Guide",
    blurb:
      "First-week checklist, core team slots, resources, codes, and mistakes to avoid.",
    tag: "New players",
    read: "12 min",
    priority: true,
  },
  {
    href: "/tier-list/reroll",
    title: "Reroll Guide & Tier List",
    blurb:
      "Who is worth restarting for, stop rules, and full SSS–C reroll rankings.",
    tag: "New players",
    read: "10 min",
    priority: true,
  },
  {
    href: "/guides/early-teams",
    title: "Best Early Game Teams",
    blurb:
      "Four sample comps with swap rules, job labels, and character links.",
    tag: "Teams",
    read: "10 min",
  },
  {
    href: "/guides/party-building",
    title: "Party Building",
    blurb:
      "Slot structure, turn economy, matchups, faction auras, deploy checklist.",
    tag: "Teams",
    read: "10 min",
  },
  {
    href: "/guides/shard-priority",
    title: "Shard Farming Priority",
    blurb:
      "Spend order, star breakpoints, and a ranked core list from tier data.",
    tag: "Investment",
    read: "10 min",
  },
  {
    href: "/guides/role-matchups",
    title: "Role Matchups",
    blurb:
      "Visual triangle + magic pair chart, full table, and combat tips.",
    tag: "Systems",
    read: "8 min",
  },
  {
    href: "/guides/act-again",
    title: "Act Again Explained",
    blurb:
      "Extra turns, enablers, NRG costs, and early Act Again cores.",
    tag: "Systems",
    read: "8 min",
  },
  {
    href: "/guides/nrg",
    title: "NRG Guide",
    blurb:
      "Energy management, batteries, long-fight planning, and gear tips.",
    tag: "Systems",
    read: "8 min",
  },
  {
    href: "/guides/spiral-of-destinies",
    title: "Spiral of Destinies",
    blurb:
      "Prep checklist, slot labels, in-fight priorities, wipe post-mortem.",
    tag: "Modes",
    read: "10 min",
  },
  {
    href: "/codes",
    title: "Redeem Codes",
    blurb: "Active codes with copy buttons and last-verified dates.",
    tag: "Rewards",
    read: "3 min",
  },
  {
    href: "/tier-list",
    title: "Overall Tier List",
    blurb: "Meta rankings by role and mode for the live roster.",
    tag: "Meta",
    read: "5 min",
  },
];

export default function GuidesPage() {
  const featured = GUIDES.filter((g) => g.priority);
  const rest = GUIDES.filter((g) => !g.priority);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="soc-heading-sm">Long-form</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Guides
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-2xl text-muted">
        System explainers and new-player paths that plug into the character and
        gear databases — not orphan blog posts. Written for people clearing
        content this week, not for keyword stuffing.
      </p>
      <div className="mt-6 max-w-3xl">
        <AuthorByline updated="2026-08-03" compact />
      </div>

      <section className="mt-8 soc-frame p-5 text-sm leading-relaxed text-muted">
        <h2 className="soc-heading text-base text-foreground">
          How to use this library
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <strong className="text-foreground">New account:</strong> Beginner →
            Reroll → Early teams → redeem{" "}
            <Link href="/codes" className="text-link hover:underline">
              codes
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Stuck on a stage:</strong> Role
            matchups + Act Again + NRG, then rebuild in the{" "}
            <Link
              href="/tools/team-builder"
              className="text-link hover:underline"
            >
              Team Builder
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Investment week:</strong> Shard
            priority +{" "}
            <Link href="/tier-list" className="text-link hover:underline">
              tier list
            </Link>{" "}
            before spreading resources.
          </li>
        </ol>
        <p className="mt-3 text-xs">
          Editor: Jason · Corrections:{" "}
          <a
            href="mailto:contact@socwiki.app"
            className="text-link hover:underline"
          >
            contact@socwiki.app
          </a>
        </p>
      </section>

      <section className="mt-10" aria-labelledby="start-here">
        <h2 id="start-here" className="soc-section-title mb-4">
          Start here
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="soc-frame group relative overflow-hidden p-6 transition hover:border-[var(--border-bright)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,181,106,0.12),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {g.tag}
                  </span>
                  <span className="text-xs text-muted">{g.read}</span>
                </div>
                <div className="font-display mt-2 text-xl font-semibold tracking-wide group-hover:text-[var(--accent-bright)]">
                  {g.title}
                </div>
                <p className="mt-2 text-sm text-muted">{g.blurb}</p>
                <span className="mt-4 inline-block text-sm text-[var(--accent-bright)]">
                  Read guide →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="all-guides">
        <h2 id="all-guides" className="soc-section-title mb-4">
          All guides
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {rest.map((g) => (
            <li key={g.href}>
              <Link href={g.href} className="soc-hub-tile h-full">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {g.tag}
                  </span>
                  <span className="text-xs text-muted">{g.read}</span>
                </div>
                <div className="font-display mt-2 font-semibold tracking-wide text-foreground">
                  {g.title}
                </div>
                <p className="mt-1 text-sm text-muted">{g.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
