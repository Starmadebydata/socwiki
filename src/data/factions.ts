import type { Character } from "@/types/character";
import { getAllCharacters, sortByOverallTier } from "@/data/characters";

export type FactionInfo = {
  slug: string;
  name: string;
  /** Short SEO blurb */
  summary: string;
  /** Longer hub intro */
  overview: string;
  /** How aura / identity plays */
  playstyle: string;
  /** Who to prioritize first in this faction */
  buildPriority: string;
  sampleCore: string[];
  relatedGuides: { href: string; label: string }[];
};

/**
 * Canonical faction hubs for SoC Wiki.
 * `name` must match Character.factions strings exactly.
 */
export const FACTIONS: FactionInfo[] = [
  {
    slug: "iria",
    name: "Iria",
    summary:
      "Iria is the largest early-game faction shell—Act Again supports, story cores, and SP Inanna boards live here.",
    overview:
      "Iria is where most new Sword of Convallaria accounts start. Base Inanna, SP Inanna, Gloria-style pieces, and many story-friendly units share the tag, which makes 3+ Iria auras realistic without burning limiteds. If you are unsure which faction to lean into first, Iria is the default answer.",
    playstyle:
      "Play Iria as an enable + carry shell: one Watcher enabler, one real damage threat, one cover tank, then fill to 3+ Iria for aura breakpoints. Battle Flag style buffs (SP Inanna) make Iria stacks feel greedy rather than forced.",
    buildPriority:
      "1) Act Again Watcher (Inanna / SP Inanna) 2) A Seeker or Breaker carry you already own 3) Defender cover 4) Flex Iria names for aura count.",
    sampleCore: ["sp-inanna", "inanna", "col", "cocoa", "sp-maitha", "gloria"],
    relatedGuides: [
      { href: "/guides/early-teams", label: "Early teams" },
      { href: "/guides/act-again", label: "Act Again" },
      { href: "/tools/team-builder?preset=iria-start", label: "Iria start preset" },
    ],
  },
  {
    slug: "soc",
    name: "SoC",
    summary:
      "SoC (Sword of Convallaria) faction cores revolve around SP Maitha walls, SP Inanna enable, and premium mid-game spikes.",
    overview:
      "SoC-tagged units are the modern premium shell: SP Maitha as the piercing Defender, SP Inanna as the hybrid enabler, and several limited-adjacent names that push hard content. Stacking SoC is less 'beginner default' than Iria and more 'this is my endgame identity.'",
    playstyle:
      "Build a wall that still deals damage (SP Maitha), feed Act Again into a primary DPS, and keep 3+ SoC when the map allows without gutting role coverage. Rally/Response boards love this faction.",
    buildPriority:
      "SP Maitha → SP Inanna → a true damage core → SoC flex names. Do not force 5 SoC if it costs you matchups.",
    sampleCore: ["sp-maitha", "sp-inanna", "sp-samantha", "cocoa", "inanna", "col"],
    relatedGuides: [
      { href: "/guides/party-building", label: "Party building" },
      { href: "/guides/spiral-of-destinies", label: "Spiral prep" },
      { href: "/tools/team-builder?preset=spiral-ready", label: "Spiral-ready preset" },
    ],
  },
  {
    slug: "union",
    name: "Union",
    summary:
      "Union is Camelot's playground—HP-scaling Breaker power and mid-board deletion with Coercion loops.",
    overview:
      "Union is a smaller but very sharp faction identity. Camelot alone can carry the brand, and Union teammates amplify his already ridiculous clear speed. You do not need a full Union zoo to benefit, but 3+ Union is a clean mid-game project.",
    playstyle:
      "Seed Coercion, AoE for Act Again refunds, and keep supports that compress CDs/NRG. Union boards are aggressive: less pure heal-bot, more tempo.",
    buildPriority: "Camelot first, then SP Inanna-class enable, then Union flex and a tank.",
    sampleCore: ["camelot", "sp-inanna", "credenza", "sp-maitha", "taair", "clara"],
    relatedGuides: [
      { href: "/characters/camelot", label: "Camelot build" },
      { href: "/guides/act-again", label: "Act Again" },
      { href: "/tier-list", label: "Tier list" },
    ],
  },
  {
    slug: "alacrity",
    name: "Alacrity",
    summary:
      "Alacrity favors mobile Seekers and tempo assassins—Col is the poster child for early Alacrity value.",
    overview:
      "Alacrity is the flank-and-finish faction. Seekers who care about side/back attacks and multi-action loops feel at home here. Aura stacking is a bonus on top of already correct Seeker fundamentals.",
    playstyle:
      "Kill thresholds first, aura second. Bring an enabler so Alacrity carries get two real skills. Avoid head-on Defender brawls.",
    buildPriority: "Col (or best Seeker) → Inanna/SP Inanna → Defender cover → Alacrity flex.",
    sampleCore: ["col", "inanna", "cocoa", "rawiyah", "gloria", "safiyyah"],
    relatedGuides: [
      { href: "/characters/col", label: "Col build" },
      { href: "/guides/role-matchups", label: "Role matchups" },
      { href: "/characters/role/seeker", label: "All Seekers" },
    ],
  },
  {
    slug: "papal-states",
    name: "Papal States",
    summary:
      "Papal States units often share roster space with Drifter/Alacrity hybrids—use them to complete auras without breaking role coverage.",
    overview:
      "Papal States is a supporting faction tag for several strong Legendaries. It rarely defines an entire endgame mono-board the way Iria/SoC can, but it is excellent for hybrid aura math when units already wear multiple tags.",
    playstyle:
      "Treat Papal States as a secondary aura. Prioritize role correctness, then count tags. Multi-faction units (e.g. Col) make breakpoints easier.",
    buildPriority:
      "Build the best unit you own that happens to be Papal States—do not force weak units just for the tag.",
    sampleCore: ["col", "sp-inanna", "cocoa", "inanna", "taair", "rawiyah"],
    relatedGuides: [
      { href: "/guides/party-building", label: "Party building" },
      { href: "/tools/team-builder", label: "Team Builder" },
    ],
  },
  {
    slug: "elaman",
    name: "Elaman",
    summary:
      "Elaman is a regional shell for mid-premium units—lean on it when you already own multiple Elaman names.",
    overview:
      "Elaman factions reward accounts that pulled into that banner lane. If you only have one Elaman unit, play them for their kit, not the aura. At 3+ owned Elaman pieces, stacking becomes a real team identity.",
    playstyle:
      "Standard role triangle + Elaman aura when natural. Do not gut Watcher/Defender coverage for a fourth Elaman name.",
    buildPriority: "Best Elaman DPS/support you own → universal enabler → tank → aura fillers.",
    sampleCore: ["heshan", "sp-inanna", "cocoa", "col", "inanna", "shams"],
    relatedGuides: [
      { href: "/tier-list", label: "Tier list" },
      { href: "/guides/shard-priority", label: "Shard priority" },
    ],
  },
  {
    slug: "drifter",
    name: "Drifter",
    summary:
      "Drifter tags often sit on mobile or off-lane units—great for hybrid auras with Alacrity/Papal States.",
    overview:
      "Drifter is a secondary identity. Many strong multi-tag units include Drifter, which makes it a convenient aura contributor rather than a mono-faction religion.",
    playstyle:
      "Use Drifter units that are already meta for their role. Aura is gravy.",
    buildPriority: "Role first, Drifter count second.",
    sampleCore: ["col", "sp-inanna", "cocoa", "inanna", "taair", "rawiyah"],
    relatedGuides: [
      { href: "/characters/role/seeker", label: "Seekers" },
      { href: "/guides/early-teams", label: "Early teams" },
    ],
  },
  {
    slug: "collab",
    name: "Collab",
    summary:
      "Collab (Witcher and friends) is a limited shell—build the package if you pulled it, do not derail the account if you did not.",
    overview:
      "Collaboration units (Geralt, Yennefer, Ciri, Triss, etc.) share the Collab tag. They can form a fun mono board, but standard SP Inanna cores still clear most content. Collab is optional power, not a tax.",
    playstyle:
      "If you own 3+ collab units, try a themed board with one universal enabler. Otherwise slot collab DPS into normal shells.",
    buildPriority:
      "Best collab DPS → enabler (SP Inanna/Inanna) → tank → remaining collab flex.",
    sampleCore: ["geralt", "yennefer", "ciri", "triss", "sp-inanna", "cocoa"],
    relatedGuides: [
      { href: "/tools/team-builder?preset=collab-witcher", label: "Witcher preset" },
      { href: "/characters/yennefer", label: "Yennefer" },
      { href: "/tier-list", label: "Tier list" },
    ],
  },
  {
    slug: "luccia",
    name: "Luccia",
    summary:
      "Luccia is a rare tag in the current database—treat it as a specialty aura when you actually own multiple Luccia units.",
    overview:
      "Luccia appears on fewer indexed units than Iria or SoC. Do not theory-craft a full Luccia religion until the roster deepens; play the unit for its kit first.",
    playstyle: "Kit first, aura later. Add Luccia stacks only when natural.",
    buildPriority: "Best Luccia unit owned → standard enable shell.",
    sampleCore: ["sp-inanna", "cocoa", "col", "inanna", "taair", "sp-maitha"],
    relatedGuides: [
      { href: "/guides/party-building", label: "Party building" },
      { href: "/characters", label: "All characters" },
    ],
  },
];

export function factionSlugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAllFactions(): FactionInfo[] {
  return FACTIONS;
}

export function getFactionBySlug(slug: string): FactionInfo | undefined {
  return FACTIONS.find((f) => f.slug === slug.toLowerCase());
}

export function getFactionByName(name: string): FactionInfo | undefined {
  return FACTIONS.find((f) => f.name.toLowerCase() === name.toLowerCase());
}

export function getCharactersByFaction(name: string): Character[] {
  return sortByOverallTier(
    getAllCharacters().filter((c) =>
      c.factions.some((f) => f.toLowerCase() === name.toLowerCase()),
    ),
  );
}

/** All distinct faction names present on characters (for discovery). */
export function getFactionNamesFromRoster(): string[] {
  const set = new Set<string>();
  for (const c of getAllCharacters()) {
    for (const f of c.factions) set.add(f);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}
