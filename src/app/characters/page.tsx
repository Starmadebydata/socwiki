import Link from "next/link";
import type { Metadata } from "next";
import { TierBadge } from "@/components/TierBadge";
import { getAllCharacters, ROLES, sortByOverallTier } from "@/data/characters";
import { pageTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Characters",
  description:
    "Complete Sword of Convallaria character list with roles, factions, tier ratings, and links to full builds and skill trees.",
  alternates: { canonical: "/characters" },
};

export default function CharactersPage() {
  const list = sortByOverallTier(getAllCharacters());

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Characters</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Browse every unit in the SoC Wiki database. Filter mentally by role, or
        open a character for builds, skill trees, gear, and team synergies.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {ROLES.map((role) => (
          <Link
            key={role}
            href={`/characters/role/${role.toLowerCase()}`}
            className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted hover:border-accent/40 hover:text-foreground"
          >
            {role}
          </Link>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-card text-muted">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Faction</th>
              <th className="px-4 py-3 font-medium">Rarity</th>
              <th className="px-4 py-3 font-medium">Tier</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.slug} className="border-t border-border hover:bg-card/60">
                <td className="px-4 py-3">
                  <Link
                    href={`/characters/${c.slug}`}
                    className="font-medium text-link hover:underline"
                  >
                    {c.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted">{c.role}</td>
                <td className="px-4 py-3 text-muted">{c.factions.join(", ")}</td>
                <td className="px-4 py-3 text-muted">{c.rarity}</td>
                <td className="px-4 py-3">
                  <TierBadge tier={c.tier.overall} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted">
        Showing {list.length} characters · {pageTitle("All Characters")}
      </p>
    </div>
  );
}
