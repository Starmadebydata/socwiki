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
    icon: "/gear/void-stab.webp",
    rarity: "Legendary",
    summary:
      "Assassin-leaning dagger that rewards multi-kill and Act Again loops.",
    effect:
      "High crit synergy; strong when the wearer chains kills or Act Again turns.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Crit", "Assassin", "Act Again"],
    roles: ["Seeker", "Breaker"],
    alternatives: ["ceremonial-knife", "shadow-edge"],
    howToGet: "Assassin / limited weapon banners and high-end exchange shops.",
    whenToUse: "Multi-kill Seekers and Act Again loops (e.g. Col-style kits).",

  },
  {
    slug: "newborn-blade",
    name: "Newborn Blade",
    kind: "weapon",
    icon: "/gear/newborn-blade.webp",
    rarity: "Legendary",
    summary: "Flexible physical blade for general Seekers and Breakers.",
    effect: "Balanced ATK profile; safe default when signature weapons are missing.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Generalist", "Physical", "Budget Legendary"],
    roles: ["Seeker", "Breaker", "Defender", "Watcher", "Destroyer"],
    alternatives: ["blade-of-strategem", "shadow-edge", "heavy-cleaver"],
    howToGet: "Standard legendary weapon pool; common early legendary drop-in.",
    whenToUse: "Default physical weapon when signatures are missing — highest build count in the DB.",

  },
  {
    slug: "blade-of-strategem",
    name: "Blade of Strategem",
    kind: "weapon",
    icon: "/gear/blade-of-strategem.webp",
    rarity: "Legendary",
    summary: "Tempo-oriented sword used by mobile physical cores.",
    effect: "Supports reposition and multi-action strings.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Tempo", "Physical", "Reposition"],
    roles: ["Breaker", "Seeker"],
    alternatives: ["newborn-blade", "heavy-cleaver", "storm-halberd"],
    howToGet: "Physical weapon banners and mid-game exchange.",
    whenToUse: "Mobile Breakers who chain reposition + multi-action strings.",
  },
  {
    slug: "dawnlight",
    name: "Dawnlight",
    kind: "weapon",
    icon: "/gear/dawnlight.webp",
    rarity: "Legendary",
    summary: "Light-themed staff/blade hybrid for top Watcher cores.",
    effect: "Pairs with support + AoE hybrid kits (e.g. SP Inanna line).",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Support", "Hybrid", "Light", "AoE"],
    roles: ["Watcher"],
    alternatives: ["staff-of-iria", "arcane-scepter"],
    howToGet: "Light / hybrid support weapon pools; SP Inanna-adjacent lines.",
    whenToUse: "Supports that both enable and deal meaningful AoE damage.",

  },
  {
    slug: "staff-of-iria",
    name: "Staff of Iria",
    kind: "weapon",
    icon: "/gear/staff-of-iria.webp",
    rarity: "Legendary",
    summary: "Classic Iria support staff for heal/buff Watchers.",
    effect: "Improves support uptime and NRG comfort on healer kits.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Healing", "Support", "Iria", "NRG"],
    roles: ["Watcher"],
    alternatives: ["dawnlight", "arcane-scepter"],
    howToGet: "Iria-themed and general support weapon banners.",
    whenToUse: "Pure heal/buff Watchers prioritizing uptime over personal damage.",

  },
  {
    slug: "spear-of-iria",
    name: "Spear of Iria",
    kind: "weapon",
    icon: "/gear/spear-of-iria.webp",
    rarity: "Legendary",
    summary: "Iria spear with first-turn tempo and NRG utility.",
    effect: "Often grants early turn advantage and NRG top-up patterns.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Tempo", "NRG", "Iria", "Physical"],
    roles: ["Seeker", "Breaker"],
    alternatives: ["newborn-blade", "blade-of-strategem", "shadow-edge"],
    howToGet: "Iria weapon pools and early-mid legendary crafts/exchange.",
    whenToUse: "First-turn tempo and NRG top-up on physical Iria cores.",
  },
  {
    slug: "plague-wand",
    name: "Plague Wand",
    kind: "weapon",
    icon: "/gear/plague-wand.webp",
    rarity: "Legendary",
    summary: "DoT-focused catalyst for infection / piercing casters.",
    effect: "Amplifies sustained chip and anti-shield pressure.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["DoT", "Magic", "Pierce"],
    roles: ["Destroyer", "Watcher"],
    alternatives: ["arcane-scepter"],
    howToGet: "Caster weapon banners featuring infection kits.",
    whenToUse: "DoT / piercing casters over pure burst mages.",

  },
  {
    slug: "icebreaker-bow",
    name: "Icebreaker Bow",
    kind: "weapon",
    icon: "/gear/icebreaker-bow.webp",
    rarity: "Legendary",
    summary: "Alert / ward-break oriented bow for Luccia-era kits.",
    effect: "Synergizes with Forced Alert and Primal Ward content.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Alert", "Ward-Break", "Luccia", "Ranged"],
    roles: ["Watcher", "Seeker"],
    alternatives: ["newborn-blade", "arcane-scepter"],
    howToGet: "Luccia / ice-era banners and event shops when available.",
    whenToUse: "Forced Alert and Primal Ward content; cold-themed kits.",
  },
  {
    slug: "guardian-blade",
    name: "Guardian Blade",
    kind: "weapon",
    icon: "/gear/guardian-blade.webp",
    rarity: "Legendary",
    summary: "Defender weapon for cover, knockback, and aura tanks.",
    effect: "Boosts survivability and frontline control tools.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Tank", "Cover", "Control"],
    roles: ["Defender"],
    alternatives: ["tower-shield-spear", "storm-halberd"],
    howToGet: "Defender weapon pool and tank-focused exchange.",
    whenToUse: "Cover tanks and knockback Defenders holding the front line.",

  },
  {
    slug: "ceremonial-knife",
    name: "Ceremonial Knife",
    kind: "weapon",
    icon: "/gear/ceremonial-knife.webp",
    rarity: "Epic",
    summary: "Budget assassin weapon when Void Stab is unavailable.",
    effect: "Serviceable crit dagger for early-mid investment.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Crit", "Budget", "Assassin"],
    roles: ["Seeker"],
    alternatives: ["void-stab", "shadow-edge", "focus-lens"],
    howToGet: "Epic weapon pool / early progression rewards.",
    whenToUse: "Budget assassin weapon until Void Stab or Shadow Edge.",
  },
  {
    slug: "heavy-cleaver",
    name: "Heavy Cleaver",
    kind: "weapon",
    icon: "/gear/heavy-cleaver.webp",
    rarity: "Legendary",
    summary: "AoE physical weapon for Breaker clearers.",
    effect: "Favors multi-target strings and durable melees.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["AoE", "Physical", "Breaker"],
    roles: ["Breaker"],
    alternatives: ["blade-of-strategem", "newborn-blade", "storm-halberd"],
    howToGet: "Breaker-oriented legendary weapon banners.",
    whenToUse: "Wave clear and multi-target Breaker strings.",
  },
  {
    slug: "arcane-scepter",
    name: "Arcane Scepter",
    kind: "weapon",
    icon: "/gear/arcane-scepter.webp",
    rarity: "Legendary",
    summary: "General mage catalyst for Watcher/Destroyer casters.",
    effect: "Magic ATK focus for pure damage spell kits.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Magic", "Generalist", "Caster"],
    roles: ["Watcher", "Destroyer"],
    alternatives: ["plague-wand", "dawnlight", "staff-of-iria"],
    howToGet: "Standard magic weapon pool; common caster default.",
    whenToUse: "Pure spell damage when no signature DoT or hybrid staff exists.",
  },
  {
    slug: "tower-shield-spear",
    name: "Tower Shield Spear",
    kind: "weapon",
    icon: "/gear/tower-shield-spear.webp",
    rarity: "Legendary",
    summary: "Hybrid tank weapon for shield-centric Defenders.",
    effect: "DEF scaling and cover-friendly profiles.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Tank", "DEF", "Cover"],
    roles: ["Defender"],
    alternatives: ["guardian-blade", "storm-halberd", "vitality-brooch"],
    howToGet: "Defender weapon banners and shield-centric shops.",
    whenToUse: "DEF-scaling shield tanks over damage-leaning frontliners.",
  },
  {
    slug: "shadow-edge",
    name: "Shadow Edge",
    kind: "weapon",
    icon: "/gear/shadow-edge.webp",
    rarity: "Legendary",
    summary: "Seeker blade for single-target burst carry kits.",
    effect: "Crit and execute-style finishing.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Crit", "Burst", "Execute"],
    roles: ["Seeker"],
    alternatives: ["void-stab", "ceremonial-knife", "newborn-blade"],
    howToGet: "Seeker signature-style weapon pools.",
    whenToUse: "Single-target burst carries and execute finishers.",
  },
  {
    slug: "storm-halberd",
    name: "Storm Halberd",
    kind: "weapon",
    icon: "/gear/storm-halberd.webp",
    rarity: "Legendary",
    summary: "Reach weapon for knockback and line attacks.",
    effect: "Board control via displacement skills.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Knockback", "Control", "Reach"],
    roles: ["Defender", "Breaker"],
    alternatives: ["guardian-blade", "heavy-cleaver", "blade-of-strategem"],
    howToGet: "Polearm / control weapon banners.",
    whenToUse: "Displacement and line control over pure bulk.",
  },

  // —— Trinkets ——
  {
    slug: "mavericks-cloak",
    name: "Maverick's Cloak",
    kind: "trinket",
    icon: "/gear/mavericks-cloak.webp",
    rarity: "Legendary",
    summary: "Assassin trinket for dodge/crit roamers.",
    effect: "Survivability while detached from the main blob.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Dodge", "Crit", "Roam"],
    roles: ["Seeker", "Breaker", "Destroyer"],
    alternatives: ["focus-lens", "paradox-crystal-chain", "breath-concealing-ring"],
    howToGet: "Assassin / roamer trinket banners and late exchange.",
    whenToUse: "Carries who fight away from the main blob.",

  },
  {
    slug: "life-fondness",
    name: "Life Fondness",
    kind: "trinket",
    icon: "/gear/life-fondness.webp",
    rarity: "Legendary",
    summary: "Support staple for healers and hybrid supports.",
    effect: "Healing and sustain amplification.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Healing", "Sustain"],
    roles: ["Watcher", "Defender", "Destroyer"],
    alternatives: ["great-company", "vitality-brooch", "nrg-battery-charm"],
    howToGet: "Support trinket pool; long-term farm target.",
    whenToUse: "Default healer/hybrid sustain trinket before Great Company.",

  },
  {
    slug: "great-company",
    name: "Great Company on the Journey",
    kind: "trinket",
    icon: "/gear/great-company.webp",
    rarity: "Legendary",
    summary: "Premium support trinket for top meta enablers.",
    effect: "Teamwide value on Act Again / aura supports.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Support", "Aura", "Meta", "Act Again"],
    roles: ["Watcher"],
    alternatives: ["life-fondness", "nrg-battery-charm", "the-star"],
    howToGet: "High-end support trinket banners / limited shops.",
    whenToUse: "Top meta enablers once the account can afford the investment.",

  },
  {
    slug: "cage-mask",
    name: "Cage Mask",
    kind: "trinket",
    icon: "/gear/cage-mask.webp",
    rarity: "Legendary",
    summary: "Frontline trinket for Defenders holding space.",
    effect: "Damage reduction and threat management.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Tank", "DR", "Frontline"],
    roles: ["Defender", "Breaker"],
    alternatives: ["wardens-sigil", "vitality-brooch", "paradox-crystal-chain"],
    howToGet: "Frontline trinket banners.",
    whenToUse: "Defenders (and bruiser Breakers) who must hold threat.",
  },
  {
    slug: "breath-concealing-ring",
    name: "Breath-Concealing Ring",
    kind: "trinket",
    icon: "/gear/breath-concealing-ring.webp",
    rarity: "Legendary",
    summary: "Utility ring for debuffer / support hybrids.",
    effect: "Helps stealthy approaches and utility kits.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Utility", "Stealth", "Debuff"],
    roles: ["Seeker", "Watcher", "Destroyer"],
    alternatives: ["mavericks-cloak", "dream-turbidity", "focus-lens"],
    howToGet: "Utility trinket pools; often mid-late exchange.",
    whenToUse: "Debuff / approach kits that benefit from stealthy openers.",
  },
  {
    slug: "dream-turbidity",
    name: "Dream Turbidity",
    kind: "trinket",
    icon: "/gear/dream-turbidity.webp",
    rarity: "Legendary",
    summary: "DoT / debuff trinket for destroyer lines.",
    effect: "Amplifies infection and long-fight value.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["DoT", "Debuff", "Long Fight"],
    roles: ["Destroyer", "Seeker"],
    alternatives: ["plague-wand", "the-moon", "paradox-crystal-chain"],
    howToGet: "DoT-oriented trinket banners.",
    whenToUse: "Infection and multi-turn chip plans.",
  },
  {
    slug: "frostspine-grip",
    name: "Frostspine Grip",
    kind: "trinket",
    icon: "/gear/frostspine-grip.webp",
    rarity: "Legendary",
    summary: "Ice-era trinket for Alert / Luccia kits.",
    effect: "Synergy with ward-break and cold-themed skills.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Ice", "Alert", "Luccia", "Ward-Break"],
    roles: ["Watcher", "Seeker"],
    alternatives: ["icebreaker-bow", "focus-lens", "life-fondness"],
    howToGet: "Luccia / ice content rewards and themed banners.",
    whenToUse: "Alert and ward-break stages; cold-themed kits.",
  },
  {
    slug: "paradox-crystal-chain",
    name: "Paradox Crystal Chain",
    kind: "trinket",
    icon: "/gear/paradox-crystal-chain.webp",
    rarity: "Legendary",
    summary: "High-end chain for durable AoE cores.",
    effect: "Offense + bulk mix for multi-action breakers.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["AoE", "Bulk", "Multi-Action"],
    roles: ["Breaker", "Seeker"],
    alternatives: ["mavericks-cloak", "cage-mask", "focus-lens"],
    howToGet: "High-end generalist trinket banners.",
    whenToUse: "Durable AoE cores that need offense and bulk together.",
  },
  {
    slug: "vitality-brooch",
    name: "Vitality Brooch",
    kind: "trinket",
    icon: "/gear/vitality-brooch.webp",
    rarity: "Epic",
    summary: "Budget HP trinket for early Defenders.",
    effect: "Raw bulk when legendaries are scarce.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["HP", "Budget", "Tank"],
    roles: ["Defender", "Watcher"],
    alternatives: ["cage-mask", "life-fondness", "wardens-sigil"],
    howToGet: "Epic trinket pool and early progression.",
    whenToUse: "Budget bulk when legendaries are scarce.",
  },
  {
    slug: "focus-lens",
    name: "Focus Lens",
    kind: "trinket",
    icon: "/gear/focus-lens.webp",
    rarity: "Epic",
    summary: "Crit lens for physical carries mid-game.",
    effect: "Crit rate on a budget.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Crit", "Budget", "Generalist"],
    roles: ["Seeker", "Breaker", "Defender", "Watcher", "Destroyer"],
    alternatives: ["mavericks-cloak", "paradox-crystal-chain", "temperance"],
    howToGet: "Epic trinket pool; extremely common mid-game equip.",
    whenToUse: "Universal crit budget piece — highest build count in the DB.",
  },
  {
    slug: "nrg-battery-charm",
    name: "NRG Battery Charm",
    kind: "trinket",
    icon: "/gear/nrg-battery-charm.webp",
    rarity: "Legendary",
    summary: "NRG comfort for skill-hungry supports.",
    effect: "Keeps expensive skill rotations online.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["NRG", "Support", "Rotation"],
    roles: ["Watcher", "Destroyer"],
    alternatives: ["life-fondness", "great-company", "staff-of-iria"],
    howToGet: "Support / utility trinket banners.",
    whenToUse: "Skill-hungry supports and casters who brick without NRG.",
  },
  {
    slug: "wardens-sigil",
    name: "Warden's Sigil",
    kind: "trinket",
    icon: "/gear/wardens-sigil.webp",
    rarity: "Legendary",
    summary: "Cover-oriented trinket for protecting carries.",
    effect: "Assisting Cover and damage share patterns.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Cover", "Protect", "Tank"],
    roles: ["Defender"],
    alternatives: ["cage-mask", "vitality-brooch", "guardian-blade"],
    howToGet: "Defender trinket pools.",
    whenToUse: "Assisting Cover and damage-share frontliners.",
  },

  // —— Tarots ——
  {
    slug: "verdict-of-justice",
    name: "Verdict of Justice",
    kind: "tarot",
    icon: "/gear/verdict-of-justice.webp",
    rarity: "Legendary",
    summary: "Aggressive tarot for assassins and finishers.",
    effect: "Crit / execute-style combat bonuses.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Crit", "Execute", "Offense"],
    roles: ["Seeker", "Breaker", "Destroyer", "Watcher"],
    alternatives: ["death", "strength", "the-tower"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Finishers and crit-stacking carries.",

  },
  {
    slug: "the-empress",
    name: "The Empress",
    kind: "tarot",
    icon: "/gear/the-empress.webp",
    rarity: "Legendary",
    summary: "Support tarot for classic heal/buff kits.",
    effect: "Amplifies ally care and utility turns.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Support", "Healing"],
    roles: ["Watcher", "Defender"],
    alternatives: ["the-sun", "the-star", "temperance"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Pure heal/buff supports prioritizing ally care.",

  },
  {
    slug: "the-star",
    name: "The Star",
    kind: "tarot",
    icon: "/gear/the-star.webp",
    rarity: "Legendary",
    summary: "Premium hybrid tarot for meta enablers.",
    effect: "Balanced offense-support scaling.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Hybrid", "Meta", "Support"],
    roles: ["Watcher", "Destroyer", "Seeker"],
    alternatives: ["the-empress", "wheel-of-fortune", "the-sun"],
    howToGet: "Tarot Whisper summons; contested bis for hybrids.",
    whenToUse: "Enablers who both enable and deal damage.",

  },
  {
    slug: "the-chariot",
    name: "The Chariot",
    kind: "tarot",
    icon: "/gear/the-chariot.webp",
    rarity: "Legendary",
    summary: "Momentum tarot for knockback and charges.",
    effect: "Movement and impactful engage turns.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Momentum", "Knockback", "Engage"],
    roles: ["Defender", "Breaker"],
    alternatives: ["the-emperor", "strength", "judgement"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Engage tanks and charge/knockback plans.",
  },
  {
    slug: "strength",
    name: "Strength",
    kind: "tarot",
    icon: "/gear/strength.webp",
    rarity: "Legendary",
    summary: "Raw power tarot for bruisers and breakers.",
    effect: "ATK-focused combat bonuses.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["ATK", "Bruiser", "Physical"],
    roles: ["Seeker", "Breaker"],
    alternatives: ["verdict-of-justice", "death", "the-tower"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Raw power bruisers when execute tarots are missing.",
  },
  {
    slug: "the-sun",
    name: "The Sun",
    kind: "tarot",
    icon: "/gear/the-sun.webp",
    rarity: "Legendary",
    summary: "Sustain tarot for pure supports.",
    effect: "Healing and team longevity.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Healing", "Sustain", "Support"],
    roles: ["Watcher", "Defender"],
    alternatives: ["the-empress", "the-star", "temperance"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Pure supports focused on team longevity.",
  },
  {
    slug: "the-moon",
    name: "The Moon",
    kind: "tarot",
    icon: "/gear/the-moon.webp",
    rarity: "Legendary",
    summary: "DoT / curse tarot for destroyers.",
    effect: "Debuff duration and chip damage themes.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["DoT", "Curse", "Debuff"],
    roles: ["Destroyer", "Seeker"],
    alternatives: ["death", "the-tower", "dream-turbidity"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "DoT and multi-turn debuff destroyer lines.",
  },
  {
    slug: "death",
    name: "Death",
    kind: "tarot",
    icon: "/gear/death.webp",
    rarity: "Legendary",
    summary: "Burst tarot for single-target killers.",
    effect: "High-risk high-reward finishing power.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Burst", "Execute", "ST"],
    roles: ["Seeker", "Breaker", "Destroyer"],
    alternatives: ["verdict-of-justice", "strength", "the-moon"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Single-target assassins and high-risk finishers.",
  },
  {
    slug: "the-emperor",
    name: "The Emperor",
    kind: "tarot",
    icon: "/gear/the-emperor.webp",
    rarity: "Legendary",
    summary: "Command tarot for leaders and aura units.",
    effect: "Faction / leader aura synergy.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Aura", "Leader", "Faction"],
    roles: ["Breaker", "Defender", "Watcher"],
    alternatives: ["the-chariot", "the-star", "judgement"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Faction leaders and aura-centric cores.",
  },
  {
    slug: "judgement",
    name: "Judgement",
    kind: "tarot",
    icon: "/gear/judgement.webp",
    rarity: "Legendary",
    summary: "Alert / reaction-heavy tarot.",
    effect: "Off-turn actions and counter windows.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Alert", "Reaction", "Counter"],
    roles: ["Watcher", "Defender"],
    alternatives: ["the-chariot", "wheel-of-fortune", "the-hermit"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Reaction-heavy and off-turn damage plans.",
  },
  {
    slug: "the-hermit",
    name: "The Hermit",
    kind: "tarot",
    icon: "/gear/the-hermit.webp",
    rarity: "Epic",
    summary: "Utility tarot for niche control kits.",
    effect: "Situational defense and solo-lane play.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Utility", "Solo", "Budget"],
    roles: ["Watcher", "Defender"],
    alternatives: ["temperance", "the-empress", "judgement"],
    howToGet: "Epic tarot pool / early progression.",
    whenToUse: "Niche control and solo-lane utility when legendaries are missing.",
  },
  {
    slug: "wheel-of-fortune",
    name: "Wheel of Fortune",
    kind: "tarot",
    icon: "/gear/wheel-of-fortune.webp",
    rarity: "Legendary",
    summary: "Tempo tarot for multi-action engines.",
    effect: "Helps Act Again and skill rotation cadence.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Tempo", "Act Again", "Rotation"],
    roles: ["Watcher", "Seeker", "Breaker"],
    alternatives: ["the-star", "judgement", "verdict-of-justice"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Multi-action engines and skill rotation cadence.",
  },
  {
    slug: "temperance",
    name: "Temperance",
    kind: "tarot",
    icon: "/gear/temperance.webp",
    rarity: "Epic",
    summary: "Balanced mid-game tarot for flexible builds.",
    effect: "Jack-of-all-trades stats when bis is missing.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["Balanced", "Budget", "Generalist"],
    roles: ["Defender", "Breaker", "Seeker", "Watcher", "Destroyer"],
    alternatives: ["the-star", "the-empress", "focus-lens"],
    howToGet: "Epic tarot pool; common filler equip.",
    whenToUse: "Flexible mid-game tarot when bis is missing — very high build count.",
  },
  {
    slug: "the-tower",
    name: "The Tower",
    kind: "tarot",
    icon: "/gear/the-tower.webp",
    rarity: "Legendary",
    summary: "AoE pressure tarot for board wipes.",
    effect: "Multi-target damage spikes.",
    bestFor: [],
    lastUpdated: "2026-08-03",
    tags: ["AoE", "Burst", "Clear"],
    roles: ["Seeker", "Breaker", "Watcher", "Destroyer"],
    alternatives: ["verdict-of-justice", "strength", "the-moon"],
    howToGet: "Tarot Whisper summons / gacha.",
    whenToUse: "Wave clear and multi-target spike turns.",
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

/**
 * Rank gear by how many character builds equip it.
 * Used for “Hot gear” rails on list pages and home.
 */
export function getHotGear(
  usageCounts: Record<string, number>,
  opts?: { kind?: GearItem["kind"]; limit?: number },
): Array<GearItem & { useCount: number }> {
  const limit = opts?.limit ?? 8;
  let list = gearItems;
  if (opts?.kind) list = list.filter((g) => g.kind === opts.kind);
  return list
    .map((g) => ({ ...g, useCount: usageCounts[g.slug] ?? 0 }))
    .sort((a, b) => b.useCount - a.useCount || a.name.localeCompare(b.name))
    .slice(0, limit);
}

export function gearPath(item: GearItem): string {
  if (item.kind === "weapon") return `/weapons/${item.slug}`;
  if (item.kind === "trinket") return `/trinkets/${item.slug}`;
  return `/tarots/${item.slug}`;
}

function tagOverlap(a: GearItem, b: GearItem): number {
  const at = new Set(a.tags ?? []);
  const bt = b.tags ?? [];
  return bt.reduce((n, t) => n + (at.has(t) ? 1 : 0), 0);
}

/** Same-kind alternatives: explicit list first, then tag/rarity peers. */
export function getGearAlternatives(item: GearItem, limit = 4): GearItem[] {
  const explicit = (item.alternatives ?? [])
    .map((s) => getGearBySlug(s))
    .filter((g): g is GearItem => g != null && g.slug !== item.slug);

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const taken = new Set(explicit.map((e) => e.slug));
  const peers = gearItems
    .filter((g) => g.kind === item.kind && g.slug !== item.slug && !taken.has(g.slug))
    .sort((a, b) => {
      const tagDiff = tagOverlap(item, b) - tagOverlap(item, a);
      if (tagDiff !== 0) return tagDiff;
      const rarityScore = (r: string) =>
        r === item.rarity ? 2 : r === "Legendary" || item.rarity === "Legendary" ? 1 : 0;
      return rarityScore(b.rarity) - rarityScore(a.rarity);
    });

  return [...explicit, ...peers].slice(0, limit);
}

/** All unique tags across the library (for filters). */
export function getAllGearTags(kind?: GearItem["kind"]): string[] {
  const set = new Set<string>();
  for (const g of gearItems) {
    if (kind && g.kind !== kind) continue;
    for (const t of g.tags ?? []) set.add(t);
  }
  return [...set].sort((a, b) => a.localeCompare(b));
}

/** SEO meta description (~150–160 chars target) for gear detail pages. */
export function gearMetaDescription(item: GearItem): string {
  const kind =
    item.kind === "weapon"
      ? "weapon"
      : item.kind === "trinket"
        ? "trinket"
        : "Tarot Whisper";
  const effect = (item.summary || item.effect || "").replace(/\s+/g, " ").trim();
  const when = (item.whenToUse || "").replace(/\s+/g, " ").trim();
  const base = `${item.name} ${kind} in Sword of Convallaria (SoC): ${effect}`;
  const withWhen = when ? `${base} When to use: ${when}` : base;
  const tail = " Best on characters, effects, and alternatives on SoC Wiki.";
  const full = `${withWhen}${tail}`;
  if (full.length <= 160) return full;
  // Prefer keeping name + summary + tail
  const short = `${item.name} ${kind} in Sword of Convallaria: ${effect.slice(0, 90).replace(/\s+\S*$/, "")}… Best on list & alternatives — SoC Wiki.`;
  return short.slice(0, 160);
}

export function kindLabel(kind: GearItem["kind"]): string {
  if (kind === "weapon") return "Weapon";
  if (kind === "trinket") return "Trinket";
  return "Tarot Whisper";
}
