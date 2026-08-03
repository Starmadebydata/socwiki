import type { GearItem } from "@/types/character";

const FALLBACK: Record<GearItem["kind"], string> = {
  weapon: "🗡",
  trinket: "💍",
  tarot: "🃏",
};

export function GearIcon({
  item,
  size = "md",
  className = "",
}: {
  item: Pick<GearItem, "name" | "kind" | "icon">;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim =
    size === "sm"
      ? "h-10 w-10 text-base"
      : size === "lg"
        ? "h-20 w-20 text-3xl sm:h-24 sm:w-24"
        : "h-14 w-14 text-xl";

  if (item.icon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={item.icon}
        alt=""
        className={`shrink-0 rounded-xl border border-[var(--border-soft)] bg-[var(--card-deep)] object-contain p-0.5 shadow-md ${dim} ${className}`}
        loading="lazy"
        decoding="async"
      />
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-[var(--border-bright)] bg-gradient-to-br from-[#3d4354] to-[#1a1e28] shadow-md ${dim} ${className}`}
      aria-hidden
    >
      {FALLBACK[item.kind]}
    </div>
  );
}
