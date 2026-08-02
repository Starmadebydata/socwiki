import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Early Game Teams",
  description:
    "Sample early game Sword of Convallaria teams for new accounts—story clear and first limited investments.",
  alternates: { canonical: "/guides/early-teams" },
};

const TEAMS = [
  {
    name: "Classic Iria start",
    members: [
      { slug: "inanna", name: "Inanna" },
      { slug: "col", name: "Col" },
      { slug: "cocoa", name: "Cocoa" },
      { slug: "rawiyah", name: "Rawiyah" },
      { slug: "gloria", name: "Gloria" },
    ],
    note: "Safe default: Act Again support + assassin + cover tank.",
  },
  {
    name: "DoT pressure",
    members: [
      { slug: "taair", name: "Taair" },
      { slug: "kvare", name: "Kvare" },
      { slug: "lutfi", name: "Lutfi" },
      { slug: "inanna", name: "Inanna" },
      { slug: "pooch-runrun", name: "Pooch Runrun" },
    ],
    note: "Leans on infection and sustained chip with a battery support.",
  },
  {
    name: "Meta aspirational",
    members: [
      { slug: "sp-inanna", name: "SP Inanna" },
      { slug: "camelot", name: "Camelot" },
      { slug: "sp-maitha", name: "SP Maitha" },
      { slug: "taair", name: "Taair" },
      { slug: "estra", name: "Estra" },
    ],
    note: "Target roster as you pull limiteds—do not force early over-invest.",
  },
];

export default function EarlyTeamsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Best Early Game Teams</h1>
      <p className="mt-4 text-muted leading-relaxed">
        These samples assume a new or returning account. Swap in higher-tier
        limiteds when you pull them—check the{" "}
        <Link href="/tier-list" className="text-link hover:underline">
          tier list
        </Link>{" "}
        and{" "}
        <Link href="/tier-list/reroll" className="text-link hover:underline">
          reroll tier
        </Link>{" "}
        first.
      </p>

      <div className="mt-8 space-y-6">
        {TEAMS.map((team) => (
          <section
            key={team.name}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <h2 className="text-lg font-semibold">{team.name}</h2>
            <p className="mt-1 text-sm text-muted">{team.note}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {team.members.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/characters/${m.slug}`}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm hover:border-accent/40"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted">
        For structure theory, read{" "}
        <Link
          href="/guides/party-building"
          className="text-link hover:underline"
        >
          party building
        </Link>
        .
      </p>
    </article>
  );
}
