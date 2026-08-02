"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { GearItem, Rarity } from "@/types/character";
import { gearPath, kindLabel } from "@/data/gear";
import { getCharactersUsingGear } from "@/data/characters";

const RARITIES: Array<Rarity | "All"> = [
  "All",
  "Legendary",
  "Epic",
  "Rare",
];

export function GearList({
  items,
  title,
}: {
  items: GearItem[];
  title: string;
}) {
  const [rarity, setRarity] = useState<(typeof RARITIES)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((item) => {
      if (rarity !== "All" && item.rarity !== rarity) return false;
      if (!query) return true;
      const hay = [
        item.name,
        item.summary,
        item.effect,
        ...(item.tags ?? []),
        ...(item.roles ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(query);
    });
  }, [items, rarity, q]);

  const kind = items[0]?.kind;
  const blurb =
    kind === "weapon"
      ? "Weapons recommended in character Quick Builds — open a row for effects, Best on, and alternatives."
      : kind === "trinket"
        ? "Trinkets tied to SoC Wiki builds. Filter by rarity or search tags like Crit / Support."
        : "Tarot Whispers linked from character loadouts. Check Best on for who actually runs each card.";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="soc-heading-sm">Database</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        {title}
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-2xl text-muted">{blurb}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="soc-stat-chip">
          <strong>{filtered.length}</strong> / {items.length} shown
        </span>
        {RARITIES.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRarity(r)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              rarity === r
                ? "border-[var(--border-bright)] bg-[var(--accent-soft)] text-[var(--accent-bright)]"
                : "border-transparent bg-[var(--card-deep)] text-muted hover:border-[var(--border-soft)]"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label htmlFor="gear-search" className="sr-only">
          Search gear
        </label>
        <input
          id="gear-search"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={`Search ${title.toLowerCase()}…`}
          className="soc-search max-w-md !py-2.5 text-sm"
        />
      </div>

      <div className="mt-8 overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
        <table className="soc-table min-w-[640px]">
          <thead>
            <tr>
              <th>Name</th>
              <th>Rarity</th>
              <th>Tags</th>
              <th>Best on (sample)</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => {
              const users = getCharactersUsingGear(item.slug).slice(0, 4);
              return (
                <tr key={item.slug}>
                  <td>
                    <Link
                      href={gearPath(item)}
                      className="font-display font-semibold tracking-wide text-link hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-0.5 max-w-xs text-xs text-muted line-clamp-1">
                      {item.summary}
                    </p>
                  </td>
                  <td className="whitespace-nowrap text-muted">{item.rarity}</td>
                  <td className="text-xs text-muted">
                    {(item.tags ?? item.roles ?? []).slice(0, 3).join(" · ") ||
                      "—"}
                  </td>
                  <td className="text-muted">
                    {users.length
                      ? users.map((u) => u.name).join(", ")
                      : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-4 text-sm text-muted">No gear matches your filters.</p>
      ) : null}

      <p className="mt-6 text-xs text-muted">
        Showing {kindLabel(kind ?? "weapon").toLowerCase()} entries used across
        character builds. Data is community-oriented and may lag live banners.
      </p>
    </div>
  );
}
