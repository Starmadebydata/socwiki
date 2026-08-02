import type { Tier } from "@/types/character";

const styles: Record<Tier, string> = {
  SSS: "bg-[var(--tier-sss)]/20 text-[var(--tier-sss)] border-[var(--tier-sss)]/45",
  SS: "bg-[var(--tier-ss)]/20 text-[var(--tier-ss)] border-[var(--tier-ss)]/45",
  "S+": "bg-[var(--tier-sp)]/20 text-[var(--tier-sp)] border-[var(--tier-sp)]/45",
  S: "bg-[var(--tier-s)]/20 text-[var(--tier-s)] border-[var(--tier-s)]/45",
  A: "bg-[var(--tier-a)]/20 text-[var(--tier-a)] border-[var(--tier-a)]/45",
  B: "bg-[var(--tier-b)]/20 text-[var(--tier-b)] border-[var(--tier-b)]/45",
  C: "bg-[var(--tier-c)]/20 text-[var(--tier-c)] border-[var(--tier-c)]/45",
};

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold tracking-wide ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
