/**
 * Hand-written deep guides for ranks 21–30 (and collab S+ cores)
 * merged with Top 20 deep content via character-deep.ts.
 */
import type { Top20Deep } from "@/data/top20-deep";

export const CHARACTER_DEEP_EXTRA: Top20Deep[] = [
  {
    slug: "geralt",
    overview: [
      "Geralt is the collab front-line threat many players actually finish boards with: durable enough to take a hit, sharp enough to delete elites when his setup lands. He is not a free ‘install and win’ button—he wants correct approach angles and a real enabler behind him.",
      "If you own the Witcher package, treat Geralt as a primary physical carry for story and mid-hard content. If you only own him solo, he still works inside a normal SP Inanna shell; you do not need full collab mono to justify building him.",
    ],
    openers: [
      "Identify the elite or Breaker-shaped target you can actually kill this cycle.",
      "Use mobility / approach tools so you are not walking into free Seeker punish.",
      "Spend the high-damage skill only when the kill or break is real—not for chip.",
      "Hold defensive reactions for the turn enemies will focus him.",
    ],
    midFight:
      "Boss maps: play him as a controlled assassin-tank hybrid—don’t tunnel wave clear if Camelot or SP Samantha clear trash better. Collab teammates (Yennefer, Ciri, Triss) are gravy, not mandatory. Feed Act Again when two skills convert into a phase skip.",
    investment:
      "High if he is your best collab DPS; medium if Col/Camelot already clear everything. Stars raise survivability and kill thresholds. Gear toward physical damage and uptime, not pure glass.",
    sampleTeams: [
      {
        name: "Witcher core",
        blurb: "Geralt with collab mages and a universal enabler.",
        slugs: ["geralt", "yennefer", "ciri", "triss", "sp-inanna", "cocoa"],
      },
      {
        name: "Standard enable shell",
        blurb: "Geralt as main DPS without full collab.",
        slugs: ["geralt", "sp-inanna", "sp-maitha", "cocoa", "taair", "inanna"],
      },
    ],
    pitfalls: [
      "Building him with zero enabler and calling the kit weak.",
      "Forcing mono-Collab when role coverage collapses.",
      "Face-tanking every pack instead of choosing fights.",
    ],
    whenSkip:
      "Skip heavy starring if you already field two polished SSS physical cores and need supports more than another DPS.",
  },
  {
    slug: "lutfi",
    overview: [
      "Lutfi is a mid-premium tempo piece—strong when his kit conditions are respected, forgettable when you mash him like a generic attacker. Think of him as a specialist you promote when your main core already functions.",
      "He pairs well with battery supports and maps that let him stack his identity over multiple turns rather than one-shot openers.",
    ],
    openers: [
      "Apply his setup condition first (marks, zones, or self-buffs—follow the skill table).",
      "Cash the spender only after the condition is live.",
      "Stay off hard role counters; pick free matchup damage when available.",
      "Use Act Again windows to double-stack rather than panic heal.",
    ],
    midFight:
      "On long bosses he ages better than pure glass assassins if you keep NRG healthy. On pure multi-wave maps he can lose tempo to Camelot/SP Samantha. Flex him in when your primary DPS is wrong for the matchup.",
    investment:
      "Medium. Raise stars once your enabler and tank are online. Magic or hybrid gear depending on his actual damage type in-client—follow the recommended weapon first.",
    sampleTeams: [
      {
        name: "Lutfi flex DPS",
        blurb: "Standard enable + Lutfi as second threat.",
        slugs: ["lutfi", "sp-inanna", "cocoa", "col", "taair", "inanna"],
      },
    ],
    pitfalls: [
      "Investing him before SP Inanna/Inanna exist.",
      "Spending ultimates into empty conditions.",
    ],
    whenSkip:
      "Skip if Col + Camelot already cover physical and you need magic/DoT instead (or vice versa).",
  },
  {
    slug: "marcille",
    overview: [
      "Marcille (Dungeon Meshi collab lane in many rosters) plays as a magical support/DPS hybrid depending on build—check her skill table for whether you are casting her as battery or damage.",
      "Collab units should not hijack your entire shard plan unless they are carrying clears. Marcille is excellent flavor and often solid utility; she becomes great when the rest of the shell is already stable.",
    ],
    openers: [
      "Decide before deploy: support-first or damage-first loadout.",
      "If support-first, cast enables before your carry’s big turn.",
      "If damage-first, clump enemies for AoE windows.",
      "Keep her off the front line unless the kit explicitly wants mid-board.",
    ],
    midFight:
      "Use her to fill Watcher gaps when SP Inanna is busy or missing. On pure physical maps she can still battery; on magic maps she can share damage duty with Taair/Yennefer-style units.",
    investment:
      "Medium unless she is your only decent Watcher. Stars help skill uptime; gear toward NRG comfort if she enables, damage if she carries.",
    sampleTeams: [
      {
        name: "Collab support shell",
        blurb: "Marcille enabling a physical carry.",
        slugs: ["marcille", "col", "cocoa", "sp-maitha", "geralt", "inanna"],
      },
    ],
    pitfalls: [
      "Building her as pure DPS when your account needed a battery.",
      "Ignoring NRG—empty enable turns feel awful.",
    ],
    whenSkip:
      "Skip heavy investment if Inanna/SP Inanna already cover enables and you need tanks/DPS shards more.",
  },
  {
    slug: "pooch-runrun",
    overview: [
      "Pooch Runrun is a chaotic-good tempo unit: high entertainment value and real chip when the kit is allowed to snowball. He is rarely the ‘only carry you need,’ but he is a fantastic flex for infection/chip boards and morale.",
      "Play him when fights last long enough for passives to matter. Into pure burst rush maps he can look worse than Col.",
    ],
    openers: [
      "Deploy where he can touch multiple targets over time, not a single full-HP wall.",
      "Apply chip/DoT early.",
      "Protect him from one-shot Seekers—he is not a Defender.",
      "Double-turn him with enables only when stacks will convert.",
    ],
    midFight:
      "Pairs naturally with Taair/Kvare-style pressure and battery Watchers. If the boss phase is a DPS check under 3 turns, swap to a burst Seeker/Breaker.",
    investment:
      "Medium-low early, medium later for roster diversity. Don’t 5★ him before your enabler.",
    sampleTeams: [
      {
        name: "Chip party",
        blurb: "Pooch with DoT friends and a battery.",
        slugs: ["pooch-runrun", "taair", "kvare", "sp-inanna", "cocoa", "inanna"],
      },
    ],
    pitfalls: [
      "Expecting assassin burst.",
      "Overstarring a flex before SP Inanna.",
    ],
    whenSkip:
      "Skip if you hate long fights and already clear everything with burst cores.",
  },
  {
    slug: "sp-faycal",
    overview: [
      "SP Faycal is a premium SP-style upgrade path unit—strong identity skills and high ceiling when you invest. Treat SP kits as ‘account projects’: they want stars and a coherent team, not benchwarming at 0★ forever.",
      "If base Faycal synergy exists in client routing, owning both can unlock cleaner SP skill access—check your skill tree before locking builds.",
    ],
    openers: [
      "Open with the SP identity skill that defines the kit (see skill table).",
      "Hold the expensive finisher for the turn kill thresholds are real.",
      "Use role matchup to pick free damage.",
      "Enable him only when NRG supports two real skills.",
    ],
    midFight:
      "SP units often spike mid-game hard content. If he is your best role-mate for a hole (e.g. missing Breaker/Seeker), promote him. Otherwise keep him as a sidegrade to Col/Camelot.",
    investment:
      "High once you commit—SP kits punish half-investment. Gear with recommended weapon first; stars before random cosmetics.",
    sampleTeams: [
      {
        name: "SP carry board",
        blurb: "SP Faycal with modern enable + cover.",
        slugs: ["sp-faycal", "sp-inanna", "sp-maitha", "cocoa", "taair", "inanna"],
      },
    ],
    pitfalls: [
      "Leaving him at very low stars and comparing to 5★ Col.",
      "No tank—SP carries still die.",
    ],
    whenSkip:
      "Skip if the SP banner was a spook and you lack resources for a third project carry.",
  },
  {
    slug: "sp-rawiyah",
    overview: [
      "SP Rawiyah upgrades the familiar Rawiyah fantasy into a more modern SP kit—expect sharper damage windows and less pure ‘early story free unit’ energy. She rewards players who already understand role matchups and positioning.",
      "Build her when you want a second physical threat that isn’t Col or Camelot, especially if you like her kit fantasy enough to star her.",
    ],
    openers: [
      "Approach from advantageous matchup tiles.",
      "Setup skill → spender in the same cycle when enabled.",
      "Don’t eat Defender faces for free.",
      "Use reaction timing to survive counterfire.",
    ],
    midFight:
      "Excellent as dual-DPS with Col or as main when Col is wrong for the map. Feed Act Again on the unit that has the kill, not automatically on SP Rawiyah every time.",
    investment:
      "Medium-high if she is a favorite; medium as a flex. Stars help skill breakpoints more than vanity.",
    sampleTeams: [
      {
        name: "Dual physical",
        blurb: "SP Rawiyah + Col with enable.",
        slugs: ["sp-rawiyah", "col", "sp-inanna", "cocoa", "sp-maitha", "inanna"],
      },
    ],
    pitfalls: [
      "Forcing her into every map over a better matchup unit.",
      "Ignoring NRG on double-physical boards.",
    ],
    whenSkip:
      "Skip if physical DPS is already overloaded and you need Watchers/tanks.",
  },
  {
    slug: "triss",
    overview: [
      "Triss is a collab mage option: magical pressure with collab-board synergy. She is happiest next to Yennefer/Geralt but can guest-star on any battery shell.",
      "If you are light on Destroyer/magic DPS, she is a justified build. If Taair already solves magic, she is a sidegrade with flair.",
    ],
    openers: [
      "Tag priority elites with setup if available.",
      "AoE when packs clump; single-target when the boss phase starts.",
      "Stay mid-backline—mages hate Seekers.",
      "Enable her when spells will actually land this turn.",
    ],
    midFight:
      "Collab mono is optional. Mixed boards with SP Inanna often outperform forcing four collab names with no tank.",
    investment:
      "Medium. Magic weapons and NRG comfort. Stars if she is your best mage.",
    sampleTeams: [
      {
        name: "Collab magic",
        blurb: "Triss with Yennefer and a real tank.",
        slugs: ["triss", "yennefer", "geralt", "sp-inanna", "cocoa", "ciri"],
      },
    ],
    pitfalls: [
      "All-mage no-frontline disasters.",
      "Casting into Watcher matchup free losses without a physical flex.",
    ],
    whenSkip:
      "Skip if magic is covered and shards are needed for SP Inanna/SP Maitha.",
  },
  {
    slug: "tristan",
    overview: [
      "Tristan is a solid S+ style roster piece: good enough to clear, not always the meta dictator. He shines when his faction/role hole is empty and you need a dependable body now.",
      "Play him straight—matchup, cover, enable—rather than forcing a meme build.",
    ],
    openers: [
      "Deploy for role advantage first.",
      "Use kit setup before big spenders.",
      "Hold a defensive tool for the scary enemy turn.",
      "Let the enabler decide who gets the double turn.",
    ],
    midFight:
      "Replace him when a true SSS in the same role arrives fully built. Until then he is honest content fodder.",
    investment:
      "Medium early if he is your best option; taper when SSS cores come online.",
    sampleTeams: [
      {
        name: "Honest mid-game",
        blurb: "Tristan filling a role beside classic supports.",
        slugs: ["tristan", "inanna", "cocoa", "col", "gloria", "maitha"],
      },
    ],
    pitfalls: [
      "5★ vanity when SP Inanna is still 0★.",
      "Wrong matchup tunnels.",
    ],
    whenSkip:
      "Deprioritize as soon as a higher-tier unit owns his job.",
  },
];
