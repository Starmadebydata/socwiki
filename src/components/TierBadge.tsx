import type { Tier } from "@/types/character";

const styles: Record<Tier, string> = {
  SSS: "bg-[var(--tier-sss)]/25 text-[var(--tier-sss)] border-[var(--tier-sss)]/55",
  SS: "bg-[var(--tier-ss)]/25 text-[var(--tier-ss)] border-[var(--tier-ss)]/55",
  "S+": "bg-[var(--tier-sp)]/25 text-[var(--tier-sp)] border-[var(--tier-sp)]/55",
  S: "bg-[var(--tier-s)]/25 text-[var(--tier-s)] border-[var(--tier-s)]/55",
  A: "bg-[var(--tier-a)]/25 text-[var(--tier-a)] border-[var(--tier-a)]/55",
  B: "bg-[var(--tier-b)]/25 text-[var(--tier-b)] border-[var(--tier-b)]/55",
  C: "bg-[var(--tier-c)]/25 text-[var(--tier-c)] border-[var(--tier-c)]/55",
};

export function TierBadge({
  tier,
  seal = false,
}: {
  tier: Tier;
  /** Hexagonal seal shape instead of pill */
  seal?: boolean;
}) {
  if (seal) {
    return (
      <span className={`soc-tier-seal ${styles[tier]}`}>{tier}</span>
    );
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold tracking-wide ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
