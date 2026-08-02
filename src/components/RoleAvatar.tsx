import type { Role } from "@/types/character";
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

/** Decorative portrait placeholder — role-colored gradient, no official art. */
export function RoleAvatar({
  name,
  role,
  size = "md",
  className = "",
}: {
  name: string;
  role: Role;
  size?: Size;
  className?: string;
}) {
  const style = roleStyle(role);
  const mono = initials(name);

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-lg ${sizes[size]} ${className}`}
      style={{ background: style.gradient }}
      aria-hidden
    >
      {/* grain / pattern */}
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
      {/* role ring */}
      <div
        className="absolute bottom-1 right-1 h-2.5 w-2.5 rounded-full border border-black/30 sm:h-3 sm:w-3"
        style={{ backgroundColor: style.hex }}
        title={role}
      />
      <span className="relative flex h-full w-full items-center justify-center font-bold tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]">
        {mono}
      </span>
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
