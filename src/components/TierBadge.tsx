import type { Tier } from "@/types/character";

const styles: Record<Tier, string> = {
  SSS: "bg-[var(--tier-sss)]/20 text-[var(--tier-sss)] border-[var(--tier-sss)]/40",
  SS: "bg-[var(--tier-ss)]/20 text-[var(--tier-ss)] border-[var(--tier-ss)]/40",
  "S+": "bg-[var(--tier-sp)]/20 text-[var(--tier-sp)] border-[var(--tier-sp)]/40",
  S: "bg-[var(--tier-s)]/20 text-[var(--tier-s)] border-[var(--tier-s)]/40",
  A: "bg-[var(--tier-a)]/20 text-[var(--tier-a)] border-[var(--tier-a)]/40",
  B: "bg-[var(--tier-b)]/20 text-[var(--tier-b)] border-[var(--tier-b)]/40",
  C: "bg-[var(--tier-c)]/20 text-[var(--tier-c)] border-[var(--tier-c)]/40",
};

export function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${styles[tier]}`}
    >
      {tier}
    </span>
  );
}
