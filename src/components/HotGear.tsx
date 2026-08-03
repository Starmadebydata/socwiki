import Link from "next/link";
import { getGearUsageCounts } from "@/data/characters";
import { gearPath, getHotGear, kindLabel } from "@/data/gear";
import type { GearKind } from "@/types/character";
import { GearIcon } from "@/components/GearIcon";

export function HotGear({
  kind,
  limit = 8,
  title,
}: {
  kind?: GearKind;
  limit?: number;
  title?: string;
}) {
  const counts = getGearUsageCounts();
  const hot = getHotGear(counts, { kind, limit }).filter((g) => g.useCount > 0);
  if (hot.length === 0) return null;

  const heading =
    title ??
    (kind
      ? `Hot ${kindLabel(kind).toLowerCase()}s`
      : "Hot gear across builds");

  return (
    <section className="mb-10" aria-labelledby="hot-gear-heading">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="hot-gear-heading" className="soc-section-title">
            {heading}
          </h2>
          <p className="mt-1.5 text-xs text-muted">
            Ranked by how many character Quick Builds equip each piece
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {hot.map((g, i) => (
          <Link
            key={g.slug}
            href={gearPath(g)}
            className="soc-frame group flex items-center gap-3 p-3 transition hover:border-[var(--border-bright)]"
          >
            <span className="w-5 shrink-0 text-center font-display text-sm text-[var(--accent)]">
              {i + 1}
            </span>
            <GearIcon item={g} size="sm" />
            <div className="min-w-0 flex-1">
              <div className="truncate font-display text-sm font-semibold tracking-wide group-hover:text-[var(--accent-bright)]">
                {g.name}
              </div>
              <p className="text-[11px] text-muted">
                {g.rarity} · {g.useCount} build
                {g.useCount === 1 ? "" : "s"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
