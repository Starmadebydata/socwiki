import type { Role } from "@/types/character";
import { getCharacterImage } from "@/data/character-images";
import { roleStyle } from "@/lib/role-styles";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, string> = {
  sm: "h-10 w-10 text-xs",
  md: "h-14 w-14 text-sm",
  lg: "h-20 w-20 text-lg",
  xl: "h-28 w-28 text-2xl sm:h-36 sm:w-36 sm:text-3xl",
};

function initials(name: string) {
  const parts = name.replace(/^SP\s+/i, "SP ").split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** Portrait when we have a client crop; otherwise role-colored initials placeholder. */
export function RoleAvatar({
  name,
  role,
  slug,
  size = "md",
  className = "",
  gem = false,
}: {
  name: string;
  role: Role;
  /** When set, loads /characters/{slug}.webp if exported */
  slug?: string;
  size?: Size;
  className?: string;
  /** Hexagonal gem frame (game medallion feel) */
  gem?: boolean;
}) {
  const style = roleStyle(role);
  const mono = initials(name);
  const imgs = slug ? getCharacterImage(slug) : undefined;
  /** Prefer combat HUD face, then roster portrait */
  const portrait = imgs?.combat ?? imgs?.portrait;

  const inner = (
    <div
      className={`relative shrink-0 overflow-hidden border border-white/10 shadow-lg ${
        gem ? "soc-avatar-gem border-0" : "rounded-2xl"
      } ${sizes[size]} ${className}`}
      style={portrait ? undefined : { background: style.gradient }}
      aria-hidden
    >
      {portrait ? (
        // eslint-disable-next-line @next/next/no-img-element -- static public webp, no remote loader
        <img
          src={portrait}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.35) 0%, transparent 50%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-35deg, transparent, transparent 6px, rgba(255,255,255,0.4) 6px, rgba(255,255,255,0.4) 7px)",
            }}
          />
          <span className="relative flex h-full w-full items-center justify-center font-bold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
            {mono}
          </span>
        </>
      )}
      {!gem && (
        <div
          className="absolute bottom-1 right-1 z-10 h-2.5 w-2.5 rounded-full border border-black/30 sm:h-3 sm:w-3"
          style={{ backgroundColor: style.hex }}
          title={role}
        />
      )}
      {portrait && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      )}
    </div>
  );

  if (!gem) return inner;

  return (
    <div
      className={`soc-avatar-frame shrink-0 ${
        size === "sm"
          ? "h-[2.65rem] w-[2.65rem]"
          : size === "md"
            ? "h-[3.75rem] w-[3.75rem]"
            : size === "lg"
              ? "h-[5.25rem] w-[5.25rem]"
              : "h-[7.25rem] w-[7.25rem] sm:h-[9.25rem] sm:w-[9.25rem]"
      }`}
      style={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        background: `linear-gradient(145deg, ${style.hex}, var(--accent-dim) 50%, #3d3220)`,
      }}
    >
      <div className="h-full w-full p-[2px]">
        <div className="h-full w-full overflow-hidden soc-avatar-gem">
          {portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={portrait}
              alt=""
              className="h-full w-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center text-sm font-bold text-white"
              style={{ background: style.gradient }}
            >
              {mono}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function RolePill({ role }: { role: Role }) {
  const style = roleStyle(role);
  return (
    <span
      className="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
      style={{
        color: style.hex,
        borderColor: `${style.hex}55`,
        backgroundColor: style.soft,
      }}
    >
      {role}
    </span>
  );
}
