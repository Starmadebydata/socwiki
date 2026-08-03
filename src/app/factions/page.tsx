import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllFactions,
  getCharactersByFaction,
} from "@/data/factions";

export const metadata: Metadata = {
  title: "Factions Guide — Auras & Team Shells",
  description:
    "Sword of Convallaria factions explained: Iria, SoC, Union, Alacrity, Collab, and more—aura stacking, sample cores, and character lists for each faction.",
  alternates: { canonical: "/factions" },
};

export default function FactionsIndexPage() {
  const factions = getAllFactions();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="soc-heading-sm">Team identity</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Factions
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-2xl text-muted">
        Faction auras reward running 3+ units that share a tag—but role coverage
        still comes first. Start with Iria or SoC shells, then branch into Union,
        Alacrity, or Collab when you own the pieces.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {factions.map((f) => {
          const count = getCharactersByFaction(f.name).length;
          return (
            <Link
              key={f.slug}
              href={`/factions/${f.slug}`}
              className="soc-frame group p-5 transition hover:border-[var(--border-bright)]"
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-display text-xl font-semibold tracking-wide group-hover:text-[var(--accent-bright)]">
                  {f.name}
                </h2>
                <span className="text-xs text-muted">{count} units</span>
              </div>
              <p className="mt-2 text-sm text-muted">{f.summary}</p>
              <span className="mt-4 inline-block text-sm text-[var(--accent-bright)]">
                Open faction hub →
              </span>
            </Link>
          );
        })}
      </div>

      <section className="mt-12 soc-parchment p-5 text-sm text-[var(--ink-muted)]">
        <h2 className="font-display font-semibold text-[var(--ink)]">
          Aura stacking rules of thumb
        </h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>Never drop Watcher or Defender coverage just to hit 3+ aura.</li>
          <li>Multi-tag units (e.g. Col) help two factions at once.</li>
          <li>
            Test boards in the{" "}
            <Link href="/tools/team-builder" className="text-link underline">
              Team Builder
            </Link>{" "}
            — look for the “aura” mark at 3+ overlap.
          </li>
        </ul>
      </section>
    </div>
  );
}
