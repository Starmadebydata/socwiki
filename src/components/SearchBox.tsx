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
        className="w-full rounded-full border border-[var(--border-soft)] bg-[var(--card-deep)] px-5 py-3 text-foreground outline-none placeholder:text-muted focus:border-[var(--border-bright)] focus:shadow-[0_0_0_3px_var(--accent-soft)]"
        autoComplete="off"
      />
      {results.length > 0 && (
        <ul className="soc-frame absolute z-20 mt-2 w-full overflow-hidden shadow-xl">
          {results.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/characters/${c.slug}`}
                className="flex items-center justify-between border-b border-[var(--border-soft)]/40 px-4 py-2.5 last:border-0 hover:bg-[var(--accent-soft)]"
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
