import type { Metadata } from "next";
import Link from "next/link";
import { getAllCharacters, sortByOverallTier } from "@/data/characters";
import { TierBadge } from "@/components/TierBadge";

export const metadata: Metadata = {
  title: "Shard Farming Priority",
  description:
    "Sword of Convallaria shard and star priority—who to invest in first when materials are limited.",
  alternates: { canonical: "/guides/shard-priority" },
};

export default function ShardPriorityPage() {
  const top = sortByOverallTier(getAllCharacters())
    .filter((c) => ["SSS", "SS", "S+"].includes(c.tier.overall))
    .slice(0, 18);

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Shard Farming Priority</h1>
      <p className="mt-4 text-muted leading-relaxed">
        Stars multiply kit breakpoints (extra Act Again, aura power, survivability).
        Spread investment kills accounts—pick a small core first.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Rules of thumb</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
        <li>Raise your main enabler (Act Again / battery) before a third DPS.</li>
        <li>Push carries to the star node that unlocks their identity (often 3★ then 5★).</li>
        <li>Defenders can sit lower stars if cover tools already work at base.</li>
        <li>Collab units: only invest if you own and enjoy them—banners may not return.</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">High priority cores (from tier list)</h2>
      <ul className="mt-4 space-y-2">
        {top.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/characters/${c.slug}`}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 hover:bg-card-hover"
            >
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-muted">{c.starPriority}</div>
              </div>
              <TierBadge tier={c.tier.overall} />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-muted">
        Full rankings:{" "}
        <Link href="/tier-list" className="text-link hover:underline">
          character tier list
        </Link>
        .
      </p>
    </article>
  );
}
