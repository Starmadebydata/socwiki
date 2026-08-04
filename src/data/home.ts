/**
 * Homepage index spotlights — update when banners / guides rotate.
 * All hrefs must point at existing routes (no thin doorways).
 */

export type HomeBanner = {
  badge: "Latest" | "Featured" | "Codes" | "Guide";
  title: string;
  summary: string;
  href: string;
  /** Optional deep links shown under the card */
  links?: { href: string; label: string }[];
  /** Optional portrait path under /public */
  image?: string;
  imageAlt?: string;
};

/** Timeliness rail under the hero (MC-wiki style Latest / utility). */
export const HOME_BANNERS: HomeBanner[] = [
  {
    badge: "Latest",
    title: "Anna build & skill tree",
    summary:
      "Iria Watcher support from recent banners — trait, skills, and gear pairings for story and trials.",
    href: "/characters/anna",
    image: "/characters/anna.webp",
    imageAlt: "Anna portrait",
    links: [
      { href: "/characters/anna", label: "Anna page" },
      { href: "/characters/role/watcher", label: "Watchers" },
      { href: "/tier-list", label: "Tier list" },
    ],
  },
  {
    badge: "Codes",
    title: "Active redeem codes",
    summary:
      "Copy free Luxites and event rewards. List refreshed for August 2026 — always redeem in-game to confirm.",
    href: "/codes",
    links: [
      { href: "/codes", label: "All codes" },
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/changelog", label: "Site changelog" },
    ],
  },
];

/** Featured long-form sample (depth proof, not a homepage article). */
export const HOME_FEATURED = {
  badge: "Featured guide" as const,
  title: "Beginner guide for Sword of Convallaria",
  summary:
    "First week priorities: reroll targets, early teams, NRG pacing, and which systems matter before you over-invest shards. Written for new EN accounts who want a clean path into the roster.",
  href: "/guides/beginner",
  links: [
    { href: "/guides/beginner", label: "Read beginner guide" },
    { href: "/tier-list/reroll", label: "Reroll tier" },
    { href: "/guides/early-teams", label: "Early teams" },
    { href: "/tools/team-builder", label: "Team builder" },
  ],
};

/**
 * Did-you-know trivia — each line must deep-link an entity page.
 * Rotate occasionally for freshness without new URLs.
 */
export const HOME_DYK: { text: string; href: string; linkLabel: string }[] = [
  {
    text: "the only role built around opening breaks and turn economy is",
    href: "/characters/role/breaker",
    linkLabel: "Breaker",
  },
  {
    text: "Act Again is not a free extra turn for every unit — learn who can truly chain in",
    href: "/guides/act-again",
    linkLabel: "our Act Again guide",
  },
  {
    text: "Tarot Whispers change kits as much as weapons; start from the",
    href: "/tarots",
    linkLabel: "Tarot database",
  },
];
