import Link from "next/link";
import { getCharactersUsingGear } from "@/data/characters";
import type { GearItem } from "@/types/character";
import { TierBadge } from "@/components/TierBadge";

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

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-4 text-sm text-muted">
        <Link href={listHref} className="hover:text-foreground">
          {kindLabel}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{item.name}</span>
      </nav>
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <p className="mt-1 text-sm text-muted">
        {item.rarity} · {item.kind} · Updated {item.lastUpdated}
      </p>
      <p className="mt-4 max-w-2xl text-muted">{item.summary}</p>

      <section className="mt-8 rounded-2xl border border-border bg-card p-5">
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
          <ul className="grid gap-2 sm:grid-cols-2">
            {users.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/characters/${c.slug}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 hover:bg-card-hover"
                >
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-muted">{c.role}</div>
                  </div>
                  <TierBadge tier={c.tier.overall} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}
