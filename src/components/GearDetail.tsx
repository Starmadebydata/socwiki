import Link from "next/link";
import { getCharactersUsingGear } from "@/data/characters";
import {
  gearPath,
  getGearAlternatives,
  kindLabel,
} from "@/data/gear";
import type { GearItem } from "@/types/character";
import { CharacterCard } from "@/components/CharacterCard";
import { GearIcon } from "@/components/GearIcon";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export function GearDetail({ item }: { item: GearItem }) {
  const users = getCharactersUsingGear(item.slug);
  const alts = getGearAlternatives(item, 4);
  const kindLabelFull =
    item.kind === "weapon"
      ? "Weapons"
      : item.kind === "trinket"
        ? "Trinkets"
        : "Tarot Whispers";
  const listHref =
    item.kind === "weapon"
      ? "/weapons"
      : item.kind === "trinket"
        ? "/trinkets"
        : "/tarots";

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: kindLabelFull,
        item: `${SITE_URL}${listHref}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: item.name,
        item: `${SITE_URL}${gearPath(item)}`,
      },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Who should use ${item.name} in Sword of Convallaria?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            users.length > 0
              ? `${item.name} is recommended in Quick Builds for: ${users
                  .map((u) => u.name)
                  .join(", ")}. ${item.whenToUse ?? item.summary}`
              : `${item.summary} ${item.whenToUse ?? ""}`.trim(),
        },
      },
      {
        "@type": "Question",
        name: `What does ${item.name} do?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.effect,
        },
      },
    ],
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={[breadcrumbLd, faqLd]} />

      <nav className="mb-4 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={listHref} className="hover:text-foreground">
          {kindLabelFull}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{item.name}</span>
      </nav>

      {/* Hero */}
      <header className="soc-frame relative mb-8 overflow-hidden p-5 sm:p-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,181,106,0.12),transparent_55%)]" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
          <GearIcon item={item} size="lg" className="!rounded-2xl shadow-[0_0_24px_rgba(212,181,106,0.15)]" />
          <div className="min-w-0 flex-1">
            <p className="soc-heading-sm">
              {kindLabel(item.kind)} · {item.rarity}
            </p>
            <h1 className="font-display mt-1 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
              {item.name}
            </h1>
            <p className="mt-3 max-w-2xl text-[var(--foreground)]/90">
              {item.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(item.tags ?? []).map((t) => (
                <span key={t} className="soc-stat-chip !py-1 text-xs">
                  {t}
                </span>
              ))}
              {(item.roles ?? []).map((r) => (
                <span
                  key={r}
                  className="soc-stat-chip !py-1 text-xs text-[var(--accent-bright)]"
                >
                  {r}
                </span>
              ))}
              <span className="soc-stat-chip !py-1 text-xs">
                Updated {item.lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main column */}
        <div className="space-y-6 lg:col-span-2">
          <section className="soc-frame p-5" aria-labelledby="effect-h">
            <h2 id="effect-h" className="soc-heading text-lg">
              Effect notes
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.effect}
            </p>
            {item.whenToUse ? (
              <div className="mt-4 rounded-lg border border-[var(--border-soft)] bg-[var(--accent-soft)]/40 px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                  When to equip
                </p>
                <p className="mt-1 text-sm text-foreground/90">{item.whenToUse}</p>
              </div>
            ) : null}
          </section>

          <section aria-labelledby="best-on-h">
            <div className="mb-3 flex items-end justify-between gap-3">
              <h2 id="best-on-h" className="soc-section-title">
                Best on
              </h2>
              <span className="text-xs text-muted">
                {users.length} character
                {users.length === 1 ? "" : "s"} in database builds
              </span>
            </div>
            {users.length === 0 ? (
              <div className="soc-frame p-5 text-sm text-muted">
                No character Quick Builds reference this piece yet. It may still
                be a strong generalist — check alternatives and role tags.
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {users.map((c) => (
                  <CharacterCard key={c.slug} character={c} compact />
                ))}
              </div>
            )}
          </section>

          {alts.length > 0 ? (
            <section className="soc-frame p-5" aria-labelledby="alts-h">
              <h2 id="alts-h" className="soc-heading text-lg">
                Alternatives
              </h2>
              <p className="mt-1 text-sm text-muted">
                Same slot options when this piece is missing or contested.
              </p>
              <ul className="mt-4 divide-y divide-[var(--border-soft)]/40">
                {alts.map((g) => (
                  <li key={g.slug}>
                    <Link
                      href={gearPath(g)}
                      className="flex items-center gap-3 py-3 transition hover:text-[var(--accent-bright)]"
                    >
                      <GearIcon item={g} size="sm" />
                      <div className="min-w-0 flex-1">
                        <div className="font-display font-semibold tracking-wide">
                          {g.name}
                        </div>
                        <p className="mt-0.5 text-xs text-muted line-clamp-2">
                          {g.summary}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs text-muted">
                        {g.rarity}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        {/* Side column */}
        <aside className="space-y-4">
          <div className="soc-parchment p-5">
            <h2 className="font-display text-sm font-semibold tracking-wide text-[var(--ink)]">
              Quick facts
            </h2>
            <dl className="mt-3 space-y-2 text-sm text-[var(--ink)]">
              <div className="flex justify-between gap-2 border-b border-[rgba(138,122,82,0.25)] pb-2">
                <dt className="text-[var(--ink-muted)]">Slot</dt>
                <dd className="font-medium">{kindLabel(item.kind)}</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[rgba(138,122,82,0.25)] pb-2">
                <dt className="text-[var(--ink-muted)]">Rarity</dt>
                <dd className="font-medium">{item.rarity}</dd>
              </div>
              <div className="flex justify-between gap-2 border-b border-[rgba(138,122,82,0.25)] pb-2">
                <dt className="text-[var(--ink-muted)]">Build refs</dt>
                <dd className="font-medium">{users.length}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[var(--ink-muted)]">Updated</dt>
                <dd className="font-medium">{item.lastUpdated}</dd>
              </div>
            </dl>
          </div>

          <div className="soc-frame p-5">
            <h2 className="soc-heading text-base">How to get</h2>
            <p className="mt-2 text-sm text-muted">
              {item.howToGet ??
                "Typically from weapon/trinket/tarot gacha pools, limited banners, or late-game exchange shops. Patch availability varies."}
            </p>
          </div>

          <div className="soc-frame p-5">
            <h2 className="soc-heading text-base">Browse</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href={listHref} className="text-link hover:underline">
                  All {kindLabelFull.toLowerCase()} →
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-link hover:underline">
                  Characters database →
                </Link>
              </li>
              <li>
                <Link href="/tier-list" className="text-link hover:underline">
                  Tier list →
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
