"use client";

import { useMemo, useState } from "react";
import { CharacterCard } from "@/components/CharacterCard";
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
  const [view, setView] = useState<"grid" | "compact">("grid");

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

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1 text-xs transition ${
      active
        ? "border-accent bg-accent-soft text-accent"
        : "border-border text-muted hover:text-foreground"
    }`;

  return (
    <div>
      <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, role, faction…"
            className="w-full flex-1 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none ring-accent focus:ring-2"
          />
          <div className="flex shrink-0 gap-1 rounded-xl border border-border p-1">
            <button
              type="button"
              onClick={() => setView("grid")}
              className={`rounded-lg px-3 py-1.5 text-xs ${view === "grid" ? "bg-accent-soft text-accent" : "text-muted"}`}
            >
              Cards
            </button>
            <button
              type="button"
              onClick={() => setView("compact")}
              className={`rounded-lg px-3 py-1.5 text-xs ${view === "compact" ? "bg-accent-soft text-accent" : "text-muted"}`}
            >
              Compact
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="w-full text-xs text-muted sm:w-auto sm:py-1">
            Role
          </span>
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              className={chip(role === r)}
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
              className={chip(tier === t)}
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
              className={chip(faction === f)}
            >
              {f}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted">
          Showing {filtered.length} / {characters.length} characters
        </p>
      </div>

      <div
        className={
          view === "grid"
            ? "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "mt-8 grid gap-3 sm:grid-cols-2"
        }
      >
        {filtered.map((c) => (
          <CharacterCard
            key={c.slug}
            character={c}
            compact={view === "compact"}
          />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-6 text-center text-sm text-muted">
          No characters match these filters.
        </p>
      )}
    </div>
  );
}
