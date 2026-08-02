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
        className="soc-search"
        autoComplete="off"
      />
      {results.length > 0 && (
        <ul className="soc-frame absolute z-20 mt-2 w-full overflow-hidden py-1 shadow-xl">
          {results.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/characters/${c.slug}`}
                className="flex items-center justify-between border-b border-[var(--border-soft)]/30 px-4 py-2.5 last:border-0 hover:bg-[var(--accent-soft)]"
                onClick={() => setQ("")}
              >
                <span className="font-display font-medium tracking-wide">
                  {c.name}
                </span>
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
