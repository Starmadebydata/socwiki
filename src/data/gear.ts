import type { GearItem } from "@/types/character";

/**
 * Gear library — seeded from common recommended loadouts.
 * bestFor is also derived from character builds at runtime (see getCharactersUsingGear).
 */
export const gearItems: GearItem[] = [
  // —— Weapons ——
  {
    slug: "void-stab",
    name: "Void Stab",
    kind: "weapon",
    rarity: "Legendary",
    summary:
      "Assassin-leaning dagger that rewards multi-kill and Act Again loops.",
    effect:
      "High crit synergy; strong when the wearer chains kills or Act Again turns.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Crit", "Assassin", "Act Again"],
    roles: ["Seeker", "Breaker"],
    alternatives: ["ceremonial-knife", "shadow-edge"],
    howToGet: "Limited weapon banner / gacha pools featuring assassin signatures.",
    whenToUse: "Default for multi-kill Seekers (Col, etc.) when you can fuel Act Again loops.",

  },
  {
    slug: "newborn-blade",
    name: "Newborn Blade",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Flexible physical blade for general Seekers and Breakers.",
    effect: "Balanced ATK profile; safe default when signature weapons are missing.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Generalist", "Physical"],
    roles: ["Seeker", "Breaker"],
    alternatives: ["blade-of-strategem", "shadow-edge"],
    howToGet: "Standard legendary weapon pool / exchange shops depending on patch.",
    whenToUse: "Safe all-rounder until a signature dagger or tempo blade is available.",

  },
  {
    slug: "blade-of-strategem",
    name: "Blade of Strategem",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Tempo-oriented sword used by mobile physical cores.",
    effect: "Supports reposition and multi-action strings.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "dawnlight",
    name: "Dawnlight",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Light-themed staff/blade hybrid for top Watcher cores.",
    effect: "Pairs with support + AoE hybrid kits (e.g. SP Inanna line).",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Support", "Hybrid", "Light"],
    roles: ["Watcher"],
    alternatives: ["staff-of-iria", "arcane-scepter"],
    howToGet: "Signature-adjacent pool for SP Inanna / light support lines.",
    whenToUse: "When the wearer both heals/buffs and deals meaningful AoE.",

  },
  {
    slug: "staff-of-iria",
    name: "Staff of Iria",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Classic Iria support staff for heal/buff Watchers.",
    effect: "Improves support uptime and NRG comfort on healer kits.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Healing", "Support", "Iria"],
    roles: ["Watcher"],
    alternatives: ["dawnlight", "life-fondness"],
    howToGet: "Iria-themed banners and general support weapon pools.",
    whenToUse: "Pure heal/buff Watchers (Inanna, Cocoa-style supports).",

  },
  {
    slug: "spear-of-iria",
    name: "Spear of Iria",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Iria spear with first-turn tempo and NRG utility.",
    effect: "Often grants early turn advantage and NRG top-up patterns.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "plague-wand",
    name: "Plague Wand",
    kind: "weapon",
    rarity: "Legendary",
    summary: "DoT-focused catalyst for infection / piercing casters.",
    effect: "Amplifies sustained chip and anti-shield pressure.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["DoT", "Magic"],
    roles: ["Destroyer", "Watcher"],
    alternatives: ["arcane-scepter"],
    howToGet: "Caster weapon banners.",
    whenToUse: "Infection / piercing DoT kits over pure burst mages.",

  },
  {
    slug: "icebreaker-bow",
    name: "Icebreaker Bow",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Alert / ward-break oriented bow for Luccia-era kits.",
    effect: "Synergizes with Forced Alert and Primal Ward content.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "guardian-blade",
    name: "Guardian Blade",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Defender weapon for cover, knockback, and aura tanks.",
    effect: "Boosts survivability and frontline control tools.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Tank", "Cover", "Control"],
    roles: ["Defender"],
    alternatives: ["tower-shield-spear", "heavy-cleaver"],
    howToGet: "Defender weapon pool.",
    whenToUse: "Cover tanks and knockback Defenders holding the front.",

  },
  {
    slug: "ceremonial-knife",
    name: "Ceremonial Knife",
    kind: "weapon",
    rarity: "Epic",
    summary: "Budget assassin weapon when Void Stab is unavailable.",
    effect: "Serviceable crit dagger for early-mid investment.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "heavy-cleaver",
    name: "Heavy Cleaver",
    kind: "weapon",
    rarity: "Legendary",
    summary: "AoE physical weapon for Breaker clearers.",
    effect: "Favors multi-target strings and durable melees.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "arcane-scepter",
    name: "Arcane Scepter",
    kind: "weapon",
    rarity: "Legendary",
    summary: "General mage catalyst for Watcher/Destroyer casters.",
    effect: "Magic ATK focus for pure damage spell kits.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "tower-shield-spear",
    name: "Tower Shield Spear",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Hybrid tank weapon for shield-centric Defenders.",
    effect: "DEF scaling and cover-friendly profiles.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "shadow-edge",
    name: "Shadow Edge",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Seeker blade for single-target burst carry kits.",
    effect: "Crit and execute-style finishing.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "storm-halberd",
    name: "Storm Halberd",
    kind: "weapon",
    rarity: "Legendary",
    summary: "Reach weapon for knockback and line attacks.",
    effect: "Board control via displacement skills.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },

  // —— Trinkets ——
  {
    slug: "mavericks-cloak",
    name: "Maverick's Cloak",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Assassin trinket for dodge/crit roamers.",
    effect: "Survivability while detached from the main blob.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Dodge", "Crit", "Roam"],
    roles: ["Seeker"],
    alternatives: ["focus-lens", "breath-concealing-ring"],
    howToGet: "Assassin trinket banners / late-game exchange.",
    whenToUse: "Carries who fight detached from the main blob.",

  },
  {
    slug: "life-fondness",
    name: "Life Fondness",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Support staple for healers and hybrid supports.",
    effect: "Healing and sustain amplification.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Healing", "Sustain"],
    roles: ["Watcher", "Defender"],
    alternatives: ["great-company", "vitality-brooch"],
    howToGet: "Support trinket pool; often a long-term craft/exchange target.",
    whenToUse: "Default healer trinket before Great Company.",

  },
  {
    slug: "great-company",
    name: "Great Company on the Journey",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Premium support trinket for top meta enablers.",
    effect: "Teamwide value on Act Again / aura supports.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Support", "Aura", "Meta"],
    roles: ["Watcher"],
    alternatives: ["life-fondness", "nrg-battery-charm"],
    howToGet: "High-end support trinket banner / limited shops.",
    whenToUse: "Top meta enablers (SP Inanna, Taair-class supports) once farmed.",

  },
  {
    slug: "cage-mask",
    name: "Cage Mask",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Frontline trinket for Defenders holding space.",
    effect: "Damage reduction and threat management.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "breath-concealing-ring",
    name: "Breath-Concealing Ring",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Utility ring for debuffer / support hybrids.",
    effect: "Helps stealthy approaches and utility kits.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "dream-turbidity",
    name: "Dream Turbidity",
    kind: "trinket",
    rarity: "Legendary",
    summary: "DoT / debuff trinket for destroyer lines.",
    effect: "Amplifies infection and long-fight value.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "frostspine-grip",
    name: "Frostspine Grip",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Ice-era trinket for Alert / Luccia kits.",
    effect: "Synergy with ward-break and cold-themed skills.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "paradox-crystal-chain",
    name: "Paradox Crystal Chain",
    kind: "trinket",
    rarity: "Legendary",
    summary: "High-end chain for durable AoE cores.",
    effect: "Offense + bulk mix for multi-action breakers.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "vitality-brooch",
    name: "Vitality Brooch",
    kind: "trinket",
    rarity: "Epic",
    summary: "Budget HP trinket for early Defenders.",
    effect: "Raw bulk when legendaries are scarce.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "focus-lens",
    name: "Focus Lens",
    kind: "trinket",
    rarity: "Epic",
    summary: "Crit lens for physical carries mid-game.",
    effect: "Crit rate on a budget.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "nrg-battery-charm",
    name: "NRG Battery Charm",
    kind: "trinket",
    rarity: "Legendary",
    summary: "NRG comfort for skill-hungry supports.",
    effect: "Keeps expensive skill rotations online.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "wardens-sigil",
    name: "Warden's Sigil",
    kind: "trinket",
    rarity: "Legendary",
    summary: "Cover-oriented trinket for protecting carries.",
    effect: "Assisting Cover and damage share patterns.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },

  // —— Tarots ——
  {
    slug: "verdict-of-justice",
    name: "Verdict of Justice",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Aggressive tarot for assassins and finishers.",
    effect: "Crit / execute-style combat bonuses.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Crit", "Execute"],
    roles: ["Seeker", "Breaker"],
    alternatives: ["death", "strength"],
    howToGet: "Tarot gacha / whisper summons.",
    whenToUse: "Assassins and finishers who already stack crit.",

  },
  {
    slug: "the-empress",
    name: "The Empress",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Support tarot for classic heal/buff kits.",
    effect: "Amplifies ally care and utility turns.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Support", "Healing"],
    roles: ["Watcher"],
    alternatives: ["the-sun", "the-star"],
    howToGet: "Tarot gacha.",
    whenToUse: "Classic pure supports prioritizing heal/buff uptime.",

  },
  {
    slug: "the-star",
    name: "The Star",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Premium hybrid tarot for meta enablers.",
    effect: "Balanced offense-support scaling.",
    bestFor: [],
    lastUpdated: "2026-08-02",
    tags: ["Hybrid", "Meta"],
    roles: ["Watcher", "Seeker"],
    alternatives: ["the-empress", "wheel-of-fortune"],
    howToGet: "Tarot gacha; often contested bis for hybrid cores.",
    whenToUse: "Enablers who both enable and deal damage.",

  },
  {
    slug: "the-chariot",
    name: "The Chariot",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Momentum tarot for knockback and charges.",
    effect: "Movement and impactful engage turns.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "strength",
    name: "Strength",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Raw power tarot for bruisers and breakers.",
    effect: "ATK-focused combat bonuses.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "the-sun",
    name: "The Sun",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Sustain tarot for pure supports.",
    effect: "Healing and team longevity.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "the-moon",
    name: "The Moon",
    kind: "tarot",
    rarity: "Legendary",
    summary: "DoT / curse tarot for destroyers.",
    effect: "Debuff duration and chip damage themes.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "death",
    name: "Death",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Burst tarot for single-target killers.",
    effect: "High-risk high-reward finishing power.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "the-emperor",
    name: "The Emperor",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Command tarot for leaders and aura units.",
    effect: "Faction / leader aura synergy.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "judgement",
    name: "Judgement",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Alert / reaction-heavy tarot.",
    effect: "Off-turn actions and counter windows.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "the-hermit",
    name: "The Hermit",
    kind: "tarot",
    rarity: "Epic",
    summary: "Utility tarot for niche control kits.",
    effect: "Situational defense and solo-lane play.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "wheel-of-fortune",
    name: "Wheel of Fortune",
    kind: "tarot",
    rarity: "Legendary",
    summary: "Tempo tarot for multi-action engines.",
    effect: "Helps Act Again and skill rotation cadence.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "temperance",
    name: "Temperance",
    kind: "tarot",
    rarity: "Epic",
    summary: "Balanced mid-game tarot for flexible builds.",
    effect: "Jack-of-all-trades stats when bis is missing.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
  {
    slug: "the-tower",
    name: "The Tower",
    kind: "tarot",
    rarity: "Legendary",
    summary: "AoE pressure tarot for board wipes.",
    effect: "Multi-target damage spikes.",
    bestFor: [],
    lastUpdated: "2026-08-02",
  },
];

export function getAllGear(): GearItem[] {
  return gearItems;
}

export function getGearBySlug(slug: string): GearItem | undefined {
  return gearItems.find((g) => g.slug === slug);
}

export function getGearByKind(kind: GearItem["kind"]): GearItem[] {
  return gearItems.filter((g) => g.kind === kind);
}

export function gearPath(item: GearItem): string {
  if (item.kind === "weapon") return `/weapons/${item.slug}`;
  if (item.kind === "trinket") return `/trinkets/${item.slug}`;
  return `/tarots/${item.slug}`;
}

/** Same-kind alternatives: explicit list first, else same rarity peers. */
export function getGearAlternatives(item: GearItem, limit = 4): GearItem[] {
  const explicit = (item.alternatives ?? [])
    .map((s) => getGearBySlug(s))
    .filter((g): g is GearItem => g != null && g.slug !== item.slug);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const peers = gearItems.filter(
    (g) =>
      g.kind === item.kind &&
      g.slug !== item.slug &&
      !explicit.some((e) => e.slug === g.slug) &&
      (g.rarity === item.rarity ||
        (item.rarity === "Legendary" && g.rarity === "Epic")),
  );

  return [...explicit, ...peers].slice(0, limit);
}

export function kindLabel(kind: GearItem["kind"]): string {
  if (kind === "weapon") return "Weapon";
  if (kind === "trinket") return "Trinket";
  return "Tarot Whisper";
}
