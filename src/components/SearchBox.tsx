"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getAllCharacters } from "@/data/characters";

export function SearchBox() {
  const [q, setQ] = useState("");
  const characters = useMemo(() => getAllCharacters(), []);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return characters
      .filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.role.toLowerCase().includes(query) ||
          c.factions.some((f) => f.toLowerCase().includes(query)),
      )
      .slice(0, 8);
  }, [q, characters]);

  return (
    <div className="relative w-full max-w-xl">
      <label htmlFor="site-search" className="sr-only">
        Search characters
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search characters, roles, factions…"
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none ring-accent placeholder:text-muted focus:ring-2"
        autoComplete="off"
      />
      {results.length > 0 && (
        <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl">
          {results.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/characters/${c.slug}`}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-card-hover"
                onClick={() => setQ("")}
              >
                <span className="font-medium">{c.name}</span>
                <span className="text-xs text-muted">
                  {c.role} · {c.tier.overall}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
