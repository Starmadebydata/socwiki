/**
 * Redeem codes for Sword of Convallaria (EN).
 * Fan-reported list — always verify in-game. Update lastVerified when re-checked.
 */

export type CodeStatus = "active" | "limited" | "expired" | "unverified";

export type RedeemCode = {
  code: string;
  reward: string;
  status: CodeStatus;
  /** ISO date when we last checked / community reported alive */
  lastVerified: string;
  /** Optional expiry hint (ISO or free text in note) */
  expires?: string;
  note?: string;
  source?: string;
};

/** List last bulk-refreshed date (ISO). */
export const CODES_LIST_UPDATED = "2026-08-03";

/**
 * Prefer marking recent event codes limited/unverified until confirmed.
 * Older anniversary codes often expire — keep as history for SEO + trust.
 */
export const REDEEM_CODES: RedeemCode[] = [
  {
    code: "2YEARSWITHEN",
    reward: "Event rewards (2nd anniversary)",
    status: "limited",
    lastVerified: "2026-07-28",
    note: "Anniversary wave — try first; may expire after the event window.",
    source: "Community report",
  },
  {
    code: "EN2NDANNIV",
    reward: "Event rewards (2nd anniversary)",
    status: "limited",
    lastVerified: "2026-07-28",
    source: "Community report",
  },
  {
    code: "THANKYOU2EN",
    reward: "Event rewards",
    status: "limited",
    lastVerified: "2026-07-28",
    source: "Community report",
  },
  {
    code: "elamanEN2026",
    reward: "300 Luxite",
    status: "unverified",
    lastVerified: "2026-07-15",
    note: "Elaman-related promo code — not re-verified this week.",
  },
  {
    code: "1NHALFHBDEN",
    reward: "200 Luxite",
    status: "unverified",
    lastVerified: "2026-06-01",
  },
  {
    code: "ENFUTURE",
    reward: "200 Luxite",
    status: "unverified",
    lastVerified: "2026-06-01",
  },
  {
    code: "PEACE26EN",
    reward: "200 Luxite",
    status: "unverified",
    lastVerified: "2026-06-01",
  },
  {
    code: "SOCWITCHER3EN",
    reward: "200 Luxite",
    status: "unverified",
    lastVerified: "2026-05-20",
    note: "Witcher collab era code — often already redeemed / expired.",
  },
  {
    code: "ENMOONCAKE",
    reward: "300 Luxite",
    status: "expired",
    lastVerified: "2026-04-01",
    note: "Seasonal code; kept for history.",
  },
  {
    code: "1STANNIVEN",
    reward: "300 Luxite",
    status: "expired",
    lastVerified: "2025-08-01",
  },
  {
    code: "FORPEACEEN",
    reward: "300 Luxite",
    status: "expired",
    lastVerified: "2025-08-01",
  },
  {
    code: "SUPERJULY7",
    reward: "300 Luxite",
    status: "expired",
    lastVerified: "2025-07-15",
  },
  {
    code: "SOC365EN",
    reward: "300 Luxite",
    status: "expired",
    lastVerified: "2025-08-01",
  },
  {
    code: "SOC1YEARDEVEN",
    reward: "300 Luxite",
    status: "expired",
    lastVerified: "2025-08-01",
  },
];

const TRY_FIRST: CodeStatus[] = ["active", "limited", "unverified"];

export function getTryFirstCodes(): RedeemCode[] {
  return REDEEM_CODES.filter((c) => TRY_FIRST.includes(c.status));
}

export function getExpiredCodes(): RedeemCode[] {
  return REDEEM_CODES.filter((c) => c.status === "expired");
}

export function getAllCodes(): RedeemCode[] {
  return REDEEM_CODES;
}
