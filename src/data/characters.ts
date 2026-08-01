import type { Character, Role, Tier } from "@/types/character";

/**
 * Seed character database — expand toward full Legendary roster.
 * Content is original summary writing for SEO/wiki use; keep Last Updated current.
 */
export const characters: Character[] = [
  {
    slug: "col",
    name: "Col",
    rarity: "Legendary",
    role: "Seeker",
    factions: ["Alacrity", "Papal States", "Drifter"],
    move: 5,
    highJump: 2,
    lowJump: 2,
    tier: { overall: "S+", single: "S+", multi: "S", reroll: "S+" },
    summary:
      "Col is a high-mobility Seeker who thrives on side and back kills to trigger Act Again. Build around finishing blows, crit, and Alacrity aura value.",
    pros: [
      "Act Again on side/back kills",
      "Strong single-target assassin kit",
      "Alacrity faction aura utility",
      "Invisibility tools for safe approach",
    ],
    howToUse:
      "Prioritize guaranteed kills so Act Again fires. Ignore Assisting Cover when needed, stack crit, and use invisibility to reach backline targets. Rank 7 passive (Omen of Death) is a major power spike.",
    build: {
      basicAttack: "Hidden Thorn",
      reaction: "Eerie Footwork",
      skills: ["Omen of Death", "Wipe Out", "Perfect Assassin"],
      weapon: "Void Stab",
      trinket: "Maverick's Cloak",
      tarot: "Verdict of Justice",
    },
    skillPriority: [
      {
        name: "Omen of Death",
        stars: 5,
        note: "Core passive after kills; NRG and crit stacking",
      },
      {
        name: "Wipe Out",
        stars: 5,
        note: "High damage finisher with Ignore Assist",
      },
      {
        name: "Eerie Footwork",
        stars: 5,
        note: "Best general reaction for dodge",
      },
      {
        name: "Hidden Thorn",
        stars: 5,
        note: "Basic attack that ignores Assisting Cover",
      },
      {
        name: "Perfect Assassin",
        stars: 4,
        note: "Alacrity leader aura when running faction comps",
      },
    ],
    starPriority: "3★ → 5★ (Act Again frequency)",
    synergies: ["inanna", "taair", "sp-inanna"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "inanna",
    name: "Inanna",
    rarity: "Legendary",
    role: "Watcher",
    factions: ["Iria", "SoC"],
    move: 3,
    highJump: 2,
    lowJump: 1,
    tier: { overall: "S+", single: "S", multi: "S+", reroll: "SSS" },
    summary:
      "Inanna is the premier support Watcher with Act Again, summon utility, and end-of-turn healing/buffs. A cornerstone unit for almost every account.",
    pros: [
      "Act Again support",
      "Unique summon skill",
      "Heals and buffs after acting",
      "Excellent reroll and investment value",
    ],
    howToUse:
      "Use Inanna to enable extra turns for your carry, keep the team topped up, and leverage summon pressure. Star investment unlocks stronger Act Again patterns.",
    build: {
      basicAttack: "Sacred Bolt",
      reaction: "Guardian's Aid",
      skills: ["Princess' Prayer", "Summon Knight", "Royal Decree"],
      weapon: "Staff of Iria",
      trinket: "Life Fondness",
      tarot: "The Empress",
    },
    skillPriority: [
      {
        name: "Princess' Prayer",
        stars: 5,
        note: "Core Act Again / support engine",
      },
      {
        name: "Summon Knight",
        stars: 5,
        note: "Unique summon pressure",
      },
      {
        name: "Royal Decree",
        stars: 4,
        note: "Team buff package",
      },
    ],
    starPriority: "3★ minimum; 5★ when she is a core support",
    synergies: ["col", "maitha", "xavier", "sp-inanna"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "sp-inanna",
    name: "SP Inanna",
    rarity: "Legendary",
    role: "Watcher",
    factions: ["Iria", "SoC"],
    move: 3,
    highJump: 2,
    lowJump: 1,
    tier: { overall: "SSS", single: "SS", multi: "SSS", reroll: "SS" },
    summary:
      "SP Inanna sits at the top of the meta as a hybrid support/AoE attacker with powerful Act Again trait scaling, especially at high stars.",
    pros: [
      "Top-tier support and AoE damage",
      "Act Again trait engine",
      "Strong faction synergy options",
      "5★ self Act Again spike",
    ],
    howToUse:
      "Pair with factions that benefit from her aura and Act Again chain. Invest stars aggressively if she is your account carry-support.",
    build: {
      basicAttack: "Light of Convallaria",
      reaction: "Sacred Counter",
      skills: ["Act Again Trait Skills", "AoE Support Kit", "Faction Aura"],
      weapon: "Dawnlight",
      trinket: "Great Company on the Journey",
      tarot: "The Star",
    },
    skillPriority: [
      {
        name: "Core Trait Skills",
        stars: 5,
        note: "Act Again package defines her value",
      },
      {
        name: "AoE Support",
        stars: 5,
        note: "Clears and enables in multi-target fights",
      },
    ],
    starPriority: "Push toward 5★ when she is SSS priority",
    synergies: ["inanna", "camelot", "taair"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "maitha",
    name: "Maitha",
    rarity: "Legendary",
    role: "Defender",
    factions: ["Iria", "SoC"],
    move: 3,
    highJump: 2,
    lowJump: 2,
    tier: { overall: "S", single: "A", multi: "S+", reroll: "S" },
    summary:
      "Maitha is a knockback-focused Defender who protects allies, controls space, and enables SoC faction strategies.",
    pros: [
      "Knockback control",
      "Ally protection tools",
      "Strong multi-target presence",
      "SoC faction synergy",
    ],
    howToUse:
      "Position Maitha to protect carries and shove enemies into kill zones. Skill tree choices matter—avoid traps that dilute her tank-control identity.",
    build: {
      basicAttack: "Shield Bash",
      reaction: "Assisting Cover",
      skills: ["Knockback Line", "Rally Cover", "Faction Aura"],
      weapon: "Guardian Blade",
      trinket: "Cage Mask",
      tarot: "The Chariot",
    },
    skillPriority: [
      {
        name: "Assisting Cover",
        stars: 5,
        note: "Core protection reaction",
      },
      {
        name: "Knockback skills",
        stars: 5,
        note: "Board control identity",
      },
    ],
    starPriority: "3★ for comfort; higher for SoC core teams",
    synergies: ["inanna", "rawiyah", "sp-maitha"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "xavier",
    name: "Xavier",
    rarity: "Legendary",
    role: "Breaker",
    factions: ["Iria"],
    move: 3,
    highJump: 2,
    lowJump: 2,
    tier: { overall: "A", single: "B", multi: "A", reroll: "B" },
    summary:
      "Xavier works best as a support debuffer with knockback and tempo tools rather than a pure DPS carry.",
    pros: [
      "Knockback utility",
      "Useful debuffs",
      "Spear of Iria tempo",
      "Situational PvP value",
    ],
    howToUse:
      "Do not force Xavier as main DPS. Use him to apply rare debuffs, create space, and set up real damage dealers.",
    build: {
      basicAttack: "Spear Strike",
      reaction: "Counter Prep",
      skills: ["Falling Comet Dash", "Chaotic Battle", "Musou"],
      weapon: "Spear of Iria",
      trinket: "Breath-Concealing Ring",
      tarot: "Strength",
    },
    skillPriority: [
      {
        name: "Falling Comet Dash",
        stars: 4,
        note: "Rare SPD down utility",
      },
      {
        name: "Chaotic Battle",
        stars: 4,
        note: "Healing received cut on hit",
      },
    ],
    starPriority: "Low priority unless you love the unit",
    synergies: ["inanna", "maitha"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "taair",
    name: "Taair",
    rarity: "Legendary",
    role: "Watcher",
    factions: ["Iria"],
    move: 3,
    highJump: 2,
    lowJump: 1,
    tier: { overall: "SS", single: "A", multi: "SS", reroll: "S" },
    summary:
      "Taair is a pure support Watcher focused on NRG recovery, healing, damage sharing, and team survival.",
    pros: [
      "NRG recovery toolkit",
      "Damage share + heal",
      "Speed and sustain buffs",
      "Enables skill-heavy comps",
    ],
    howToUse:
      "Slot Taair when your team is NRG hungry or needs damage share. He is not a damage unit—build fully around enabling carries.",
    build: {
      basicAttack: "Support Bolt",
      reaction: "Share Burden",
      skills: ["NRG Battery", "Team Heal", "Speed Aura"],
      weapon: "Support Staff",
      trinket: "Life Fondness",
      tarot: "The Sun",
    },
    skillPriority: [
      {
        name: "NRG recovery skills",
        stars: 5,
        note: "Defines best support use-cases",
      },
      {
        name: "Damage share",
        stars: 5,
        note: "Survival core",
      },
    ],
    starPriority: "3★–5★ if he is your main battery support",
    synergies: ["sp-inanna", "estra", "kvare"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "estra",
    name: "Estra",
    rarity: "Legendary",
    role: "Seeker",
    factions: ["Alacrity"],
    move: 5,
    highJump: 2,
    lowJump: 2,
    tier: { overall: "S+", single: "SSS", multi: "S", reroll: "S" },
    summary:
      "Estra is a top single-target assassin with high mobility, reaction nullify tools, and huge kill pressure.",
    pros: [
      "Elite single-target damage",
      "High mobility",
      "Strong vs mage-type threats",
      "Re-attack patterns on kills",
    ],
    howToUse:
      "Play for isolated targets and sure kills. Manage shields and positioning so her burst window is clean.",
    build: {
      basicAttack: "Shadow Pierce",
      reaction: "Nullify Guard",
      skills: ["Shadow Blitz", "Assassin Burst", "Mobility Kit"],
      weapon: "Void Stab",
      trinket: "Maverick's Cloak",
      tarot: "Death",
    },
    skillPriority: [
      {
        name: "Shadow Blitz",
        stars: 5,
        note: "Primary kill tool and re-attack enabler",
      },
    ],
    starPriority: "High if she is your ST carry",
    synergies: ["taair", "col", "inanna"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "kvare",
    name: "Kvare",
    rarity: "Legendary",
    role: "Destroyer",
    factions: ["Drifter"],
    move: 3,
    highJump: 2,
    lowJump: 1,
    tier: { overall: "S+", single: "S+", multi: "S", reroll: "A" },
    summary:
      "Kvare specializes in DoT, piercing damage, and anti-shield pressure for long fights and tanky enemies.",
    pros: [
      "DoT and piercing specialist",
      "Anti-shield tools",
      "Reliable sustained damage",
      "Strong in drawn-out stages",
    ],
    howToUse:
      "Stack infection/Life Loss and play for multi-turn chip. Pair with supports who keep him safe while DoTs cook.",
    build: {
      basicAttack: "Infect Bolt",
      reaction: "Plague Guard",
      skills: ["Infection Engine", "Piercing Barrage", "Roster Debuff"],
      weapon: "Plague Wand",
      trinket: "Dream Turbidity",
      tarot: "The Moon",
    },
    skillPriority: [
      {
        name: "Infection engine",
        stars: 5,
        note: "DoT identity",
      },
      {
        name: "Piercing skills",
        stars: 5,
        note: "Shield and tank answers",
      },
    ],
    starPriority: "Medium–high for DoT comps",
    synergies: ["taair", "lutfi", "inanna"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "camelot",
    name: "Camelot",
    rarity: "Legendary",
    role: "Breaker",
    factions: ["Union"],
    move: 4,
    highJump: 2,
    lowJump: 2,
    tier: { overall: "SSS", single: "SS", multi: "SSS", reroll: "SS" },
    summary:
      "Camelot is a top physical AoE Breaker: durable, mobile attack strings, and multiple Act Again paths for all content.",
    pros: [
      "Best-in-class physical AoE",
      "High survivability",
      "Multiple Act Again tools",
      "Works across content types",
    ],
    howToUse:
      "Lean into attack-string movement and Act Again chaining. Union faction teammates amplify his ceiling.",
    build: {
      basicAttack: "Heavy Slash",
      reaction: "Act Again Reaction",
      skills: ["AoE String", "Survivability Kit", "Union Aura"],
      weapon: "Blade of Strategem",
      trinket: "Paradox Crystal Chain",
      tarot: "The Emperor",
    },
    skillPriority: [
      {
        name: "AoE attack string",
        stars: 5,
        note: "Primary clear tool",
      },
      {
        name: "Act Again package",
        stars: 5,
        note: "Tempo and damage multiplier",
      },
    ],
    starPriority: "High — meta investment unit",
    synergies: ["sp-inanna", "taair"],
    lastUpdated: "2026-08-01",
  },
  {
    slug: "anna",
    name: "Anna",
    rarity: "Legendary",
    role: "Watcher",
    factions: ["Luccia"],
    move: 3,
    highJump: 2,
    lowJump: 1,
    tier: { overall: "SS", single: "SS", multi: "S", reroll: "A" },
    summary:
      "Anna (Sagas of Ice and Blood era) leads Luccia play patterns with Forced Alert multi-actions, single-target focus, and Primal Ward answers.",
    pros: [
      "Multiple actions via Forced Alert",
      "Strong single-target focus",
      "Nullifies Primal Wards",
      "Luccia faction enabler",
    ],
    howToUse:
      "Build around Alert/Strike Back/Preempt synergy and interactive objects. Pair Icebreaker imprint only if you are maximizing Anna specifically.",
    build: {
      basicAttack: "Alert Shot",
      reaction: "Forced Alert",
      skills: ["Ward Break Kit", "Focus Fire", "Luccia Lead"],
      weapon: "Icebreaker Bow",
      trinket: "Frostspine Grip",
      tarot: "Judgement",
    },
    skillPriority: [
      {
        name: "Forced Alert package",
        stars: 5,
        note: "Multi-action identity",
      },
      {
        name: "Primal Ward tools",
        stars: 5,
        note: "Version-content answer",
      },
    ],
    starPriority: "High during Luccia / Ice and Blood content",
    synergies: ["sp-inanna", "taair"],
    lastUpdated: "2026-08-01",
  },
];

export function getAllCharacters(): Character[] {
  return characters;
}

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}

export function getCharactersByRole(role: Role): Character[] {
  return characters.filter((c) => c.role === role);
}

export function getCharacterMap(): Record<string, Character> {
  return Object.fromEntries(characters.map((c) => [c.slug, c]));
}

const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];

export function sortByOverallTier(list: Character[]): Character[] {
  return [...list].sort(
    (a, b) =>
      TIER_ORDER.indexOf(a.tier.overall) - TIER_ORDER.indexOf(b.tier.overall),
  );
}

export const ROLES: Role[] = [
  "Breaker",
  "Defender",
  "Destroyer",
  "Watcher",
  "Seeker",
];

export const HUB_CATEGORIES = [
  {
    href: "/characters",
    title: "Characters",
    blurb: "Builds, skill trees, and stats for every unit",
  },
  {
    href: "/tier-list",
    title: "Tier Lists",
    blurb: "Current meta rankings by role and mode",
  },
  {
    href: "/weapons",
    title: "Weapons",
    blurb: "Best weapons and who they belong on",
  },
  {
    href: "/trinkets",
    title: "Trinkets",
    blurb: "Trinket effects and recommended users",
  },
  {
    href: "/tarots",
    title: "Tarot Whispers",
    blurb: "Tarot rankings and pairings",
  },
  {
    href: "/teams",
    title: "Teams",
    blurb: "Sample comps for story, trials, and more",
  },
  {
    href: "/guides",
    title: "Guides",
    blurb: "Beginner, systems, and mode walkthroughs",
  },
  {
    href: "/codes",
    title: "Codes",
    blurb: "Active redeem codes, updated often",
  },
] as const;
