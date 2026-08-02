export type Role =
  | "Breaker"
  | "Defender"
  | "Destroyer"
  | "Watcher"
  | "Seeker";

export type Rarity = "Legendary" | "Epic" | "Rare";

export type Tier = "SSS" | "SS" | "S+" | "S" | "A" | "B" | "C";

export type GearKind = "weapon" | "trinket" | "tarot";

export interface CharacterBuild {
  basicAttack: string;
  reaction: string;
  skills: string[];
  /** Gear slugs — resolve display names via gear data */
  weaponSlug: string;
  trinketSlug: string;
  tarotSlug: string;
}

export interface Character {
  slug: string;
  name: string;
  rarity: Rarity;
  role: Role;
  factions: string[];
  move: number;
  highJump: number;
  lowJump: number;
  tier: {
    overall: Tier;
    single: Tier;
    multi: Tier;
    reroll: Tier;
  };
  summary: string;
  pros: string[];
  howToUse: string;
  build: CharacterBuild;
  skillPriority: { name: string; stars: number; note: string }[];
  starPriority: string;
  synergies: string[];
  lastUpdated: string;
}

export interface GearItem {
  slug: string;
  name: string;
  kind: GearKind;
  rarity: Rarity | "Legendary" | "Epic" | "Rare";
  summary: string;
  effect: string;
  bestFor: string[]; // character slugs
  lastUpdated: string;
}
