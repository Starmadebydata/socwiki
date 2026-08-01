import Link from "next/link";
import type { Metadata } from "next";
import { TierBadge } from "@/components/TierBadge";
import { getAllCharacters } from "@/data/characters";
import type { Tier } from "@/types/character";

export const metadata: Metadata = {
  title: "Reroll Tier List",
  description:
    "Sword of Convallaria reroll tier list — which Legendary units are worth restarting for as a new player.",
  alternates: { canonical: "/tier-list/reroll" },
};

const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];

export default function RerollTierPage() {
  const chars = getAllCharacters();
  const byTier = TIER_ORDER.map((tier) => ({
    tier,
    units: chars.filter((c) => c.tier.reroll === tier),
  })).filter((g) => g.units.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/tier-list" className="hover:text-foreground">
          Tier List
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Reroll</span>
      </nav>
      <h1 className="text-3xl font-bold">Reroll Tier List</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Prioritize units that carry early game and stay relevant with modest
        investment. Full meta list lives on the{" "}
        <Link href="/tier-list" className="text-link hover:underline">
          overall tier list
        </Link>
        .
      </p>
      <div className="mt-10 space-y-8">
        {byTier.map(({ tier, units }) => (
          <section key={tier}>
            <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <TierBadge tier={tier} /> Reroll priority
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {units.map((c) => (
                <Link
                  key={c.slug}
                  href={`/characters/${c.slug}`}
                  className="rounded-xl border border-border bg-card px-4 py-3 hover:bg-card-hover"
                >
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-muted">{c.role}</div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
