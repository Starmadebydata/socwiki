import Link from "next/link";
import type { Character } from "@/types/character";
import { RoleAvatar, RolePill } from "@/components/RoleAvatar";
import { TierBadge } from "@/components/TierBadge";
import { roleStyle } from "@/lib/role-styles";

export function CharacterCard({
  character: c,
  compact = false,
}: {
  character: Character;
  compact?: boolean;
}) {
  const rs = roleStyle(c.role);

  return (
    <Link
      href={`/characters/${c.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:border-accent/35 hover:bg-card-hover hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 opacity-90"
        style={{ background: rs.hex }}
      />
      <div className={`flex gap-3 p-4 ${compact ? "items-center" : "items-start"}`}>
        <RoleAvatar name={c.name} role={c.role} size={compact ? "md" : "lg"} />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate font-semibold text-foreground group-hover:text-accent">
              {c.name}
            </h3>
            <TierBadge tier={c.tier.overall} />
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <RolePill role={c.role} />
            <span className="text-[11px] text-muted">{c.rarity}</span>
          </div>
          {!compact && (
            <>
              <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
                {c.summary}
              </p>
              <p className="mt-2 truncate text-[11px] text-muted/80">
                {c.factions.join(" · ")}
              </p>
            </>
          )}
          {compact && (
            <p className="mt-1 truncate text-[11px] text-muted">
              {c.factions[0]}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
