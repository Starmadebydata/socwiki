export type Role =
  | "Breaker"
  | "Defender"
  | "Destroyer"
  | "Watcher"
  | "Seeker";

export type Rarity = "Legendary" | "Epic" | "Rare";

export type Tier = "SSS" | "SS" | "S+" | "S" | "A" | "B" | "C";

export type GearKind = "weapon" | "trinket" | "tarot";

export type SkillKind =
  | "Basic"
  | "Active"
  | "Passive"
  | "Reaction"
  | "Trait"
  | "Ascension"
  | "Aura";

export interface SkillRow {
  name: string;
  kind: SkillKind;
  stars: number;
  /** NRG cost if known / applicable */
  nrg?: string;
  /** Cooldown turns if known */
  cd?: string;
  note: string;
  /** Longer description for wiki table */
  description?: string;
}

export interface CharacterBuild {
  basicAttack: string;
  reaction: string;
  skills: string[];
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
  skillPriority: SkillRow[];
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
  /** Short mechanical notes for the effect table */
  effect: string;
  bestFor: string[];
  lastUpdated: string;
  /** Public path to gear icon webp, e.g. /gear/void-stab.webp */
  icon?: string;
  /** Playstyle tags for filters & “good for” chips */
  tags?: string[];
  /** Roles that commonly equip this piece */
  roles?: Role[];
  /** Alternative gear slugs (same slot / similar job) */
  alternatives?: string[];
  /** Acquisition hint (gacha, craft, event…) */
  howToGet?: string;
  /** When to prefer this over alternatives */
  whenToUse?: string;
}
