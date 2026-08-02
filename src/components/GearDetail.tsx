import Link from "next/link";
import { getCharactersUsingGear } from "@/data/characters";
import type { GearItem } from "@/types/character";
import { CharacterCard } from "@/components/CharacterCard";

export function GearDetail({ item }: { item: GearItem }) {
  const users = getCharactersUsingGear(item.slug);
  const kindLabel =
    item.kind === "weapon"
      ? "Weapons"
      : item.kind === "trinket"
        ? "Trinkets"
        : "Tarots";
  const listHref =
    item.kind === "weapon"
      ? "/weapons"
      : item.kind === "trinket"
        ? "/trinkets"
        : "/tarots";

  const icon =
    item.kind === "weapon" ? "🗡" : item.kind === "trinket" ? "💍" : "🃏";

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-4 text-sm text-muted">
        <Link href={listHref} className="hover:text-foreground">
          {kindLabel}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{item.name}</span>
      </nav>
      <header className="panel mb-8 flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-accent-soft text-3xl">
          {icon}
        </div>
        <div>
          <h1 className="text-3xl font-bold">{item.name}</h1>
          <p className="mt-1 text-sm text-muted">
            {item.rarity} · {item.kind} · Updated {item.lastUpdated}
          </p>
          <p className="mt-3 max-w-2xl text-muted">{item.summary}</p>
        </div>
      </header>

      <section className="panel p-5">
        <h2 className="text-lg font-semibold">Effect notes</h2>
        <p className="mt-2 text-sm text-muted">{item.effect}</p>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Best on</h2>
        {users.length === 0 ? (
          <p className="text-sm text-muted">
            No character Quick Builds reference this piece yet.
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {users.map((c) => (
              <CharacterCard key={c.slug} character={c} compact />
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
