"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TierBadge } from "@/components/TierBadge";
import type { Character, Role, Tier } from "@/types/character";

const ROLES: Array<Role | "All"> = [
  "All",
  "Breaker",
  "Defender",
  "Destroyer",
  "Watcher",
  "Seeker",
];

const TIERS: Array<Tier | "All"> = [
  "All",
  "SSS",
  "SS",
  "S+",
  "S",
  "A",
  "B",
  "C",
];

export function CharacterFilters({ characters }: { characters: Character[] }) {
  const [role, setRole] = useState<(typeof ROLES)[number]>("All");
  const [tier, setTier] = useState<(typeof TIERS)[number]>("All");
  const [q, setQ] = useState("");

  const factions = useMemo(() => {
    const set = new Set<string>();
    characters.forEach((c) => c.factions.forEach((f) => set.add(f)));
    return ["All", ...Array.from(set).sort()];
  }, [characters]);

  const [faction, setFaction] = useState("All");

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      if (role !== "All" && c.role !== role) return false;
      if (tier !== "All" && c.tier.overall !== tier) return false;
      if (faction !== "All" && !c.factions.includes(faction)) return false;
      if (q.trim()) {
        const s = q.toLowerCase();
        if (
          !c.name.toLowerCase().includes(s) &&
          !c.role.toLowerCase().includes(s) &&
          !c.factions.some((f) => f.toLowerCase().includes(s))
        ) {
          return false;
        }
      }
      return true;
    });
  }, [characters, role, tier, faction, q]);

  return (
    <div>
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter by name…"
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        />
        <div className="flex flex-wrap gap-2">
          <span className="w-full text-xs text-muted sm:w-auto sm:py-1">
            Role
          </span>
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={`rounded-full border px-3 py-1 text-xs ${
                role === r
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="w-full text-xs text-muted sm:w-auto sm:py-1">
            Tier
          </span>
          {TIERS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTier(t)}
              className={`rounded-full border px-3 py-1 text-xs ${
                tier === t
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="w-full text-xs text-muted sm:w-auto sm:py-1">
            Faction
          </span>
          {factions.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFaction(f)}
              className={`rounded-full border px-3 py-1 text-xs ${
                faction === f
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted">
          Showing {filtered.length} / {characters.length} characters
        </p>
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
            {filtered.map((c) => (
              <tr
                key={c.slug}
                className="border-t border-border hover:bg-card/60"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/characters/${c.slug}`}
                    className="font-medium text-link hover:underline"
                  >
                    {c.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-muted">{c.role}</td>
                <td className="px-4 py-3 text-muted">
                  {c.factions.join(", ")}
                </td>
                <td className="px-4 py-3 text-muted">{c.rarity}</td>
                <td className="px-4 py-3">
                  <TierBadge tier={c.tier.overall} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-center text-sm text-muted">
          No characters match these filters.
        </p>
      )}
    </div>
  );
}
