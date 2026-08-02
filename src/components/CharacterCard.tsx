import Link from "next/link";
import type { Character } from "@/types/character";
import { RoleAvatar, RolePill } from "@/components/RoleAvatar";
import { TierBadge } from "@/components/TierBadge";
import { getCharacterImage } from "@/data/character-images";
import { roleStyle } from "@/lib/role-styles";

export function CharacterCard({
  character: c,
  compact = false,
  variant = "row",
}: {
  character: Character;
  compact?: boolean;
  /** portrait = vertical showcase card; row = horizontal list card */
  variant?: "row" | "portrait";
}) {
  const rs = roleStyle(c.role);
  const imgs = getCharacterImage(c.slug);
  /** Prefer battle sprite for portrait cards, then combat face, then roster portrait */
  const portraitArt =
    imgs?.sprite ?? imgs?.combat ?? imgs?.portrait;

  if (variant === "portrait") {
    return (
      <Link href={`/characters/${c.slug}`} className="soc-char-card group">
        <div className="soc-char-card__art">
          <div className="soc-char-card__frame" />
          {portraitArt ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={portraitArt}
              alt=""
              className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-105 ${
                imgs?.sprite
                  ? "object-contain object-bottom bg-gradient-to-b from-[#1a1e2a] to-[#0c0e14] p-2"
                  : "object-cover object-top"
              }`}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: rs.gradient }}
            >
              <span className="font-display text-3xl font-bold tracking-widest text-white/90 drop-shadow-lg">
                {c.name
                  .replace(/^SP\s+/i, "")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
                }}
              />
            </div>
          )}
          <div className="absolute right-3 top-3 z-10">
            <TierBadge tier={c.tier.overall} seal />
          </div>
          <div
            className="absolute left-0 top-0 z-10 h-full w-1 opacity-90"
            style={{
              background: `linear-gradient(180deg, ${rs.hex}, transparent 70%)`,
            }}
          />
        </div>
        <div className="soc-char-card__body">
          <h3 className="font-display truncate text-[0.95rem] font-semibold tracking-wide text-foreground drop-shadow group-hover:text-[var(--accent-bright)]">
            {c.name}
          </h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
            <RolePill role={c.role} />
            <span className="text-[10px] text-muted">{c.rarity}</span>
          </div>
          {!compact && (
            <p className="mt-2 line-clamp-2 text-[11px] leading-snug text-muted/90">
              {c.summary}
            </p>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/characters/${c.slug}`}
      className="soc-frame group relative flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(212,181,106,0.18)]"
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
          gem
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display truncate text-base font-semibold tracking-wide text-foreground group-hover:text-[var(--accent-bright)]">
              {c.name}
            </h3>
            <TierBadge tier={c.tier.overall} seal />
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
