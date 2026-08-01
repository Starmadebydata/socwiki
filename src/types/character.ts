export type Role =
  | "Breaker"
  | "Defender"
  | "Destroyer"
  | "Watcher"
  | "Seeker";

export type Rarity = "Legendary" | "Epic" | "Rare";

export type Tier = "SSS" | "SS" | "S+" | "S" | "A" | "B" | "C";

export interface CharacterBuild {
  basicAttack: string;
  reaction: string;
  skills: string[];
  weapon: string;
  trinket: string;
  tarot: string;
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
  synergies: string[]; // character slugs
  lastUpdated: string;
}
