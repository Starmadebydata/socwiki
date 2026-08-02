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
      className="soc-frame group relative flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:border-[var(--border-bright)] hover:shadow-[0_0_28px_rgba(212,181,106,0.15)]"
    >
      <div
        className="absolute inset-x-0 top-0 z-10 h-[2px] opacity-90"
        style={{
          background: `linear-gradient(90deg, transparent, ${rs.hex}, var(--accent), transparent)`,
        }}
      />
      <div
        className={`relative flex gap-3 p-4 ${compact ? "items-center" : "items-start"}`}
      >
        <RoleAvatar
          name={c.name}
          role={c.role}
          slug={c.slug}
          size={compact ? "md" : "lg"}
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display truncate text-base font-semibold tracking-wide text-foreground group-hover:text-[var(--accent-bright)]">
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
