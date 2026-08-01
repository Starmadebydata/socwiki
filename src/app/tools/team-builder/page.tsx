"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getAllCharacters } from "@/data/characters";
import type { Role } from "@/types/character";

const MAX = 6;

const counters: Record<Role, Role | null> = {
  Defender: "Seeker",
  Seeker: "Breaker",
  Breaker: "Defender",
  Watcher: "Destroyer",
  Destroyer: null,
};

export default function TeamBuilderPage() {
  const all = useMemo(() => getAllCharacters(), []);
  const [picked, setPicked] = useState<string[]>([]);

  const selected = picked
    .map((slug) => all.find((c) => c.slug === slug))
    .filter(Boolean);

  function toggle(slug: string) {
    setPicked((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= MAX) return prev;
      return [...prev, slug];
    });
  }

  const roleCounts = selected.reduce<Record<string, number>>((acc, c) => {
    if (!c) return acc;
    acc[c.role] = (acc[c.role] ?? 0) + 1;
    return acc;
  }, {});

  const factions = selected.flatMap((c) => c?.factions ?? []);
  const factionCounts = factions.reduce<Record<string, number>>((acc, f) => {
    acc[f] = (acc[f] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Team Builder</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Pick up to {MAX} characters. See role coverage and faction overlap —
        differentiation tool vs pure list wikis. v0.1 seed data only.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="mb-3 font-semibold">Roster</h2>
          <ul className="grid max-h-[480px] gap-2 overflow-y-auto sm:grid-cols-2">
            {all.map((c) => {
              const on = picked.includes(c.slug);
              return (
                <li key={c.slug}>
                  <button
                    type="button"
                    onClick={() => toggle(c.slug)}
                    className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                      on
                        ? "border-accent bg-accent-soft"
                        : "border-border bg-card hover:bg-card-hover"
                    }`}
                  >
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-muted">{c.role}</div>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-semibold">
              Team ({picked.length}/{MAX})
            </h2>
            {selected.length === 0 ? (
              <p className="mt-2 text-sm text-muted">No units selected.</p>
            ) : (
              <ul className="mt-3 space-y-2">
                {selected.map(
                  (c) =>
                    c && (
                      <li
                        key={c.slug}
                        className="flex items-center justify-between text-sm"
                      >
                        <Link
                          href={`/characters/${c.slug}`}
                          className="text-link hover:underline"
                        >
                          {c.name}
                        </Link>
                        <span className="text-muted">{c.role}</span>
                      </li>
                    ),
                )}
              </ul>
            )}
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-semibold">Role coverage</h2>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {Object.entries(roleCounts).map(([role, n]) => (
                <li key={role}>
                  {role}: {n}
                  {counters[role as Role]
                    ? ` · strong vs ${counters[role as Role]}`
                    : ""}
                </li>
              ))}
              {Object.keys(roleCounts).length === 0 && (
                <li>Select units to analyze roles.</li>
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-semibold">Faction overlap</h2>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {Object.entries(factionCounts)
                .sort((a, b) => b[1] - a[1])
                .map(([f, n]) => (
                  <li key={f}>
                    {f}: {n}
                    {n >= 2 ? " · aura potential" : ""}
                  </li>
                ))}
              {Object.keys(factionCounts).length === 0 && (
                <li>Select units to analyze factions.</li>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
