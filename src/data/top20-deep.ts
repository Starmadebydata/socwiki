/**
 * Hand-written deep guides for Top 20 refined characters.
 * Rendered on /characters/{slug} when present — original wiki prose, not scrape dumps.
 */

export type Top20Deep = {
  slug: string;
  /** 2–4 short paragraphs under the hero */
  overview: string[];
  /** Numbered early-turn plan */
  openers: string[];
  /** Mid-fight / boss notes */
  midFight: string;
  /** Shard / star money talk */
  investment: string;
  sampleTeams: { name: string; blurb: string; slugs: string[] }[];
  pitfalls: string[];
  /** When to bench or not pull */
  whenSkip: string;
};

export const TOP20_DEEP: Top20Deep[] = [
  {
    slug: "sp-inanna",
    overview: [
      "SP Inanna is the unit most accounts eventually revolve around: she is not a pure healer, not a pure battery, and not a pure DPS—she is the glue that makes Act Again cores print turns. If you are comparing supports, start here.",
      "Her ceiling is absurd at 5★ with Dawnlight, but even mid-star SP Inanna already outperforms most Epic supports because Battle Flag and Call of Freedom are complete packages. The main skill is sequencing, not button spam.",
      "Treat her as an investment centerpiece. Gear and stars on SP Inanna raise every carry you own later; reverse that order only if she is permanently missing from the account.",
    ],
    openers: [
      "Deploy mid-backline on a safe tile with line of sight to your primary DPS.",
      "Turn 1: Battle Flag of Convallaria Stands so the squad rides ATK/DEF immediately.",
      "Turn 2–3: Call of Freedom into the carry when they can spend two real skills (not empty basics).",
      "Filler turns: Sword - Dawnlight chip or Convallaria Swordplay into packs—never idle if NRG allows a skill.",
    ],
    midFight:
      "On long bosses, hold Call of Freedom for the phase where your carry has full NRG and a kill window. If base Inanna is unlocked for SP routing, lean into Battle-hardened Warrior free attacks after ally skill casts. Do not over-enable a half-built flex unit when your true carry is one turn from coming online.",
    investment:
      "Priority: 1★ playable → 3★ comfort → 5★ if she is your forever enabler. Signature weapon Dawnlight and support-leaning trinkets (Great Company line) beat random DPS gear. Shard her before random SS carries if she is your only real Act Again source.",
    sampleTeams: [
      {
        name: "Classic enable core",
        blurb: "SP Inanna double-turns a Seeker while a Defender holds the line.",
        slugs: ["sp-inanna", "col", "sp-maitha", "cocoa", "taair", "inanna"],
      },
      {
        name: "Iria flag board",
        blurb: "Stack Iria / SoC names so Battle Flag bonuses feel greedy.",
        slugs: ["sp-inanna", "inanna", "sp-maitha", "cocoa", "sp-samantha", "gloria"],
      },
    ],
    pitfalls: [
      "Enabling a low-star filler instead of your invested carry.",
      "Standing on the front tile—she dies and the whole turn economy collapses.",
      "Casting Call of Freedom when the target has 0 NRG for real skills.",
    ],
    whenSkip:
      "Only skip hard investment if you already have a fully built alternative enabler package and need temporary DPS for a clear. She is rarely a permanent skip on long-term accounts.",
  },
  {
    slug: "camelot",
    overview: [
      "Camelot is the SSS Breaker who turns bulk into damage. Coercion setup into AoE Act Again is the identity loop—learn it once and most story/trials packs evaporate.",
      "He is greedy for correct sequencing: Declaration of Conquest first, then Verdict chains. Supports that refund NRG or compress CDs (SP Inanna, Credenza-style kits) push him into absurd turn density.",
    ],
    openers: [
      "Seed Coercion with Declaration of Conquest (Instant, no NRG).",
      "Spend Verdict - Solo Carry into the coerced pack for multi-step AoE.",
      "Respect the trait Act Again lockout—do not re-setup before the window is live again.",
      "Use King's Fighting Spirit windows when the map will hit him on purpose.",
    ],
    midFight:
      "Boss phases: keep Coercion on the primary target, then only spend the full Verdict sequence when the Act Again refund is available. Filler with King's Strike rather than blowing CDs into empty boards. Union teammates amplify his mid-game spike but are not required for him to function.",
    investment:
      "High star priority—5★ shortens Act Again lockout and thickens shields. Blade of Strategem / tempo physical weapons and bulk trinkets beat pure glass. Pull if you need a universal PvE delete button.",
    sampleTeams: [
      {
        name: "Coercion engine",
        blurb: "SP Inanna + Camelot + CD/NRG help.",
        slugs: ["sp-inanna", "camelot", "credenza", "sp-maitha", "taair", "clara"],
      },
    ],
    pitfalls: [
      "AoEing before Coercion is applied (no Act Again refund).",
      "Spending Declaration every CD even when the board is already tagged.",
      "Building full glass—his kit wants HP conversion.",
    ],
    whenSkip:
      "Skip as a first reroll if you already have a polished Seeker core and no support to feed him CDs. Do not skip forever—he ages well into hard content.",
  },
  {
    slug: "sp-maitha",
    overview: [
      "SP Maitha is the Defender who refuses to be a pure wall. Piercing AoE plus Rally Command means her tank turns still delete tiles, which is why she holds SSS in multi-target environments.",
      "SoC faction boards become dramatically freer with her on the field. Even off-faction, she is a top cover tank who contributes real damage.",
    ],
    openers: [
      "Place on the choke where piercing lines clip 2–3 enemies and still cover the carry.",
      "Open Piercing Wave into dense packs before they spread.",
      "Rally Command when allies can convert Responses into free hits.",
      "Hold SoC Aegis packages when running multi-SoC lineups.",
    ],
    midFight:
      "She is not Maitha classic pure soak—if you only block without casting, you are wasting the kit. Rotate Piercing Wave on CD while using Rally Guard to stay alive. Pair with SP Inanna so her offensive windows get double value.",
    investment:
      "High for SoC mains and anyone short on modern Defenders. Storm Halberd-style weapons and durability trinkets (Cage Mask line) fit. Stars raise both soak and AoE—worth funding early.",
    sampleTeams: [
      {
        name: "SoC wall + enable",
        blurb: "SP Maitha front, SP Inanna enable, dual threats behind.",
        slugs: ["sp-maitha", "sp-inanna", "sp-samantha", "cocoa", "inanna", "col"],
      },
    ],
    pitfalls: [
      "Parking her alone on a tile with no piercing angles.",
      "Never pressing Rally Command in Response comps.",
      "Building full heal-bot tank stats and ignoring ATK breakpoints.",
    ],
    whenSkip:
      "Skip if your account already has SP Maitha-level cover and you desperately need a limited Watcher instead. Otherwise she is a safe long-term tank slot.",
  },
  {
    slug: "sp-samantha",
    overview: [
      "SP Samantha is multi-target royalty with a high skill floor. Alert states and end-of-action follow-ups print damage when sequenced correctly—and look 'mid' when you mash randomly.",
      "She rewards players who plan two turns ahead. With Act Again support she both sets Alert and cashes out in the same cycle.",
    ],
    openers: [
      "Set Alert / prep states before the enemy turn whenever the kit allows.",
      "Clump enemies with knockbacks/pulls from allies before her cascade.",
      "Spend the big multi-hit window only when 3+ targets will be tagged.",
      "Use SP Inanna to buy a second cast if the first only half-cleared.",
    ],
    midFight:
      "On single-target bosses she is less free than Camelot/Col—bring her for waves, Trials multi-packs, and maps that spawn adds. Keep NRG healthy; empty Alert turns are dead turns.",
    investment:
      "High if you love multi maps; medium if your content is pure bosses. AoE-leaning weapons and NRG comfort gear help. Stars improve state uptime more than raw multipliers alone.",
    sampleTeams: [
      {
        name: "Alert clear squad",
        blurb: "Enable + SP Samantha + clump tools.",
        slugs: ["sp-samantha", "sp-inanna", "sp-maitha", "taair", "gloria", "inanna"],
      },
    ],
    pitfalls: [
      "Casting the nuke into 1–2 targets and calling the unit bad.",
      "Ignoring Alert uptime before enemy actions.",
      "Starving her NRG with triple expensive supports.",
    ],
    whenSkip:
      "Skip early if your account only needs a single-target assassin right now. Revisit when multi-wave content becomes the bottleneck.",
  },
  {
    slug: "lukamar",
    overview: [
      "Lukamar is a high-ceiling limited-style threat who rewards precise positioning and kill timing. Expect a kit that wants clean lanes rather than chaotic brawls.",
      "Build him as a primary damage slot only if you can feed him stars and a real enabler—half-built Lukamar feels clunky compared to Col-style assassins.",
    ],
    openers: [
      "Secure a safe approach tile with cover or invis tools if available.",
      "Open with the highest value setup skill before the big spender.",
      "Plan the kill on a priority target so passives that care about kills fire.",
      "Leave an exit tile—do not hard-commit into three counters.",
    ],
    midFight:
      "Use him as a sniper for key elites rather than a wave clearer. Pair with SP Inanna or Inanna so expensive turns can happen twice. If the map is pure AoE trash, swap to Camelot/SP Samantha cores.",
    investment:
      "Medium-high once owned; not always a first-reroll target depending on banner timing. Signature-leaning gear > random bulk. Stars matter for kill thresholds.",
    sampleTeams: [
      {
        name: "Precision delete",
        blurb: "Lukamar + enable + frontline cover.",
        slugs: ["lukamar", "sp-inanna", "sp-maitha", "cocoa", "taair", "col"],
      },
    ],
    pitfalls: [
      "Forcing him into every multi-wave map.",
      "Under-starring him then blaming the kit.",
      "No enabler—single actions feel weak.",
    ],
    whenSkip:
      "Skip building if Col/Camelot already clear your content and shards are scarce. Keep him for later power spikes.",
  },
  {
    slug: "shahnaz",
    overview: [
      "Shahnaz brings disruptive DPS with strong personal tools—think tempo control rather than pure raw numbers. She shines when you leverage her kit's unique conditions instead of generic ATK sticks.",
    ],
    openers: [
      "Identify the condition her best skill wants (marked target, isolated unit, etc.).",
      "Apply the condition, then cash the high multiplier.",
      "Use mobility skills to stay out of Breaker/Seeker punish ranges.",
      "Hold burst for the enemy healer/enabler if present.",
    ],
    midFight:
      "She is a flex DPS who can replace a Seeker or Breaker slot depending on map. Supports that grant Act Again let her both set and finish in one cycle.",
    investment:
      "Medium—raise her when she is your best available limited DPS. Gear toward crit/tempo; stars improve consistency of her condition windows.",
    sampleTeams: [
      {
        name: "Tempo flex",
        blurb: "Shahnaz with classic enable core.",
        slugs: ["shahnaz", "sp-inanna", "cocoa", "taair", "sp-maitha", "inanna"],
      },
    ],
    pitfalls: [
      "Ignoring her setup condition and comparing raw autos to Col.",
      "Leaving her NRG dry on the cash-out turn.",
    ],
    whenSkip:
      "Skip if you already field two polished SSS damage options and need supports instead.",
  },
  {
    slug: "taair",
    overview: [
      "Taair is the DoT / sustain-pressure Destroyer many mid-game accounts lean on. Long fights and bosses reward infection-style chip more than one-shot openers.",
      "He pairs naturally with battery Watchers and other multi-turn cores (SP Inanna, Inanna, Kvare-style kits).",
    ],
    openers: [
      "Apply primary DoT/infection skill before the enemy turn when possible.",
      "Spread chips across high-HP targets rather than overkilling trash.",
      "Protect him from Seekers—Destroyers hate getting jumped.",
      "Use Act Again enables to double-stack DoTs in one round.",
    ],
    midFight:
      "Bosses: keep DoTs rolling every cycle; do not sit on max NRG. Wave maps: still useful but Camelot/SP Samantha may clear faster. Watcher matchup is his soft spot—bring physical backup.",
    investment:
      "Medium-high for account diversity. Plague Wand / magic weapons and NRG trinkets help. Stars improve DoT uptime and survivability.",
    sampleTeams: [
      {
        name: "DoT pressure",
        blurb: "Taair + battery + second magic threat.",
        slugs: ["taair", "sp-inanna", "kvare", "inanna", "cocoa", "lutfi"],
      },
    ],
    pitfalls: [
      "Expecting Col-level assassination on turn 1.",
      "Running him into Watcher-heavy enemy packs without a physical flex.",
    ],
    whenSkip:
      "Skip early if your content dies to pure burst teams already. Add him when stalls appear.",
  },
  {
    slug: "col",
    overview: [
      "Col is the textbook Seeker: side/back kills, Act Again, invis tools, and Assisting Cover ignore. New accounts that land him should build him hard—he teaches SoC combat fundamentals.",
      "Every wasted swing that fails to kill costs an entire extra turn. Play greedy only when the math is locked.",
    ],
    openers: [
      "Identify the killable target (prefer Breakers for matchup free damage).",
      "Approach from side/back so Omen of Death / Act Again conditions fire.",
      "Wipe Out as the finisher when the target is in kill range.",
      "Use invis / Eerie Footwork to exit or re-engage safely.",
    ],
    midFight:
      "He is a boss assassin and elite deleter, not a pure wave clearer. Feed him SP Inanna Call of Freedom when two skills will secure a kill. Void Stab and Maverick's Cloak style gear reinforce crit loops.",
    investment:
      "High for early accounts. Stars raise kill reliability more than raw fluff stats. Keep him funded until a true SSS assassin power-creeps him on your roster.",
    sampleTeams: [
      {
        name: "Iria start assassin",
        blurb: "Col + Inanna/SP Inanna + cover.",
        slugs: ["col", "inanna", "cocoa", "rawiyah", "gloria", "maitha"],
      },
      {
        name: "Modern enable",
        blurb: "SP Inanna double-turn Col.",
        slugs: ["col", "sp-inanna", "sp-maitha", "cocoa", "taair", "gloria"],
      },
    ],
    pitfalls: [
      "Swinging into full HP tanks and missing Act Again.",
      "Front-attacking Defenders for free damage loss.",
      "No support—single actions feel underwhelming.",
    ],
    whenSkip:
      "Almost never skip if he is your first good Seeker. Bench only when a strictly better limited assassin is fully built.",
  },
  {
    slug: "estra",
    overview: [
      "Estra is a flexible high-end piece who slots into many premium cores. Expect strong personal damage with conditions that reward correct targeting more than auto-battle brains.",
    ],
    openers: [
      "Tag the highest priority elite first.",
      "Spend setup → spender in the same enable window when possible.",
      "Stay off Breaker matchup traps if she is physical-leaning.",
      "Hold ultimate-style skills for spawn waves.",
    ],
    midFight:
      "Use her as secondary DPS behind Camelot/Col or as the main carry when the map favors her kit. SP Inanna remains the preferred enabler.",
    investment:
      "Medium-high when pulled. Gear toward her primary damage type; stars matter for consistency.",
    sampleTeams: [
      {
        name: "Premium dual DPS",
        blurb: "Estra + Camelot + SP Inanna.",
        slugs: ["estra", "camelot", "sp-inanna", "sp-maitha", "taair", "credenza"],
      },
    ],
    pitfalls: ["Building her before an enabler exists.", "Using her as a pure tank buster into wrong matchups."],
    whenSkip: "Skip funding if two SSS cores already clear your hardest content.",
  },
  {
    slug: "cocoa",
    overview: [
      "Cocoa is the friendly early Defender many guides recommend: reliable cover, simple kit, and enough bulk to teach positioning without SSS complexity.",
      "She will not out-damage SP Maitha, but she will keep your Col alive long enough to learn Act Again loops.",
    ],
    openers: [
      "Stand between the enemy and your glass carry.",
      "Use cover skills when multiple enemies can reach the backline.",
      "Do not chase kills—your job is space.",
      "Swap off when SP Maitha or better tanks arrive, but keep her built for content locks.",
    ],
    midFight:
      "Story and early Trials: excellent. Late spiral: she becomes a budget tank—still usable with stars, but SP Maitha/SoC walls take over.",
    investment:
      "Medium early, then maintenance only. Cheap gear is fine; stars help but do not dump every shard here forever.",
    sampleTeams: [
      {
        name: "Beginner clear",
        blurb: "Cocoa + Inanna + Col core.",
        slugs: ["cocoa", "inanna", "col", "rawiyah", "gloria", "maitha"],
      },
    ],
    pitfalls: ["Over-investing 5★ while SP Maitha sits unbuilt.", "Leaving her alone without a healer."],
    whenSkip: "Skip heavy investment once a modern Defender is online.",
  },
  {
    slug: "inanna",
    overview: [
      "Base Inanna remains one of the best early Act Again enablers in the game. Even after SP Inanna exists, base Inanna is a fantastic second support and SP skill unlock partner.",
      "If SP Inanna is missing, base Inanna is still a top-tier Watcher for new accounts.",
    ],
    openers: [
      "Enable the carry after they are in kill range—not before they walk for three turns.",
      "Keep heals ready for the frontliner who is eating free hits.",
      "Use faction auras when running Iria/SoC stacks.",
      "Later: feed SP Inanna routing if both are owned.",
    ],
    midFight:
      "She is the safe battery/healer hybrid. On hard content, double Watcher (Inanna + SP Inanna) is a valid greed board if damage still closes the map.",
    investment:
      "High early, still medium later for SP synergy. Staff of Iria / support weapons and battery trinkets. Stars improve enable frequency.",
    sampleTeams: [
      {
        name: "Classic story",
        blurb: "Inanna enable + Col + Cocoa.",
        slugs: ["inanna", "col", "cocoa", "rawiyah", "gloria", "maitha"],
      },
    ],
    pitfalls: ["Enabling the wrong unit.", "Building pure heal and never pressing offensive support skills."],
    whenSkip: "Do not skip early. Only deprioritize shards after SP Inanna is fully online.",
  },
  {
    slug: "anna",
    overview: [
      "Anna is a modern limited-style option—build her when you pull her as a featured DPS/flex rather than forcing her into every early roster.",
    ],
    openers: [
      "Identify whether the map wants her as primary or secondary DPS.",
      "Open with setup skill, then spender.",
      "Protect from hard matchup counters.",
    ],
    midFight:
      "Use as a banner carry with full enable support. If under-starred, keep her as flex and let Col/Camelot cook.",
    investment: "Banner-dependent high. Fund stars if she is your current limited centerpiece.",
    sampleTeams: [
      {
        name: "Banner core",
        blurb: "Anna with SP Inanna enable.",
        slugs: ["anna", "sp-inanna", "sp-maitha", "cocoa", "taair", "col"],
      },
    ],
    pitfalls: ["Pulling and building without an enabler.", "Comparing 1★ Anna to 5★ Col unfairly."],
    whenSkip: "Skip building if the banner was a spook and you lack resources for a third DPS.",
  },
  {
    slug: "clara",
    overview: [
      "Clara often plays as a utility/tempo piece who accelerates allies—think CD and turn density rather than leaderboard DPS.",
    ],
    openers: [
      "Cast utility on the unit about to spend a big CD skill (Camelot loves this).",
      "Stay safe; utility dead = board dead.",
      "Combine with Act Again enables for disgusting sequences.",
    ],
    midFight:
      "She is a specialist: best with CD-gated hyper carries. If your team is all low-CD skills, her value drops.",
    investment: "Medium—raise when Camelot/similar cores are online.",
    sampleTeams: [
      {
        name: "Camelot turbo",
        blurb: "Clara compresses Camelot cycles.",
        slugs: ["clara", "camelot", "sp-inanna", "sp-maitha", "taair", "credenza"],
      },
    ],
    pitfalls: ["Building her as a main healer.", "No CD-gated ally to buff."],
    whenSkip: "Skip if your carries do not care about CD compression.",
  },
  {
    slug: "credenza",
    overview: [
      "Credenza-style kits are the CD/NRG lubricants that make greedy SSS cores feel smooth. She is an enabler of enablers—often invisible in damage meters, obvious in clear times.",
    ],
    openers: [
      "Identify who has the longest CD / highest NRG skill.",
      "Spend utility before their big turn, not after.",
      "Keep her alive mid-backline.",
    ],
    midFight:
      "Pair with Camelot, SP Inanna, and other CD-heavy units. On simple story maps she is optional; on hard content she is free time.",
    investment: "Medium-high for late-game accounts. Support gear.",
    sampleTeams: [
      {
        name: "Greedy SSS",
        blurb: "Credenza + Camelot + SP Inanna.",
        slugs: ["credenza", "camelot", "sp-inanna", "sp-maitha", "estra", "taair"],
      },
    ],
    pitfalls: ["Expecting personal damage.", "Casting utility with no follow-up spender ready."],
    whenSkip: "Skip early game; prioritize raw Act Again and a tank first.",
  },
  {
    slug: "kvare",
    overview: [
      "Kvare is a Destroyer chip specialist who loves long fights. Stack him with Taair-style pressure for infection boards that melt high-HP bosses.",
    ],
    openers: [
      "Apply DoTs early.",
      "Spread rather than overkill.",
      "Stay away from Watcher matchup free hits when possible.",
    ],
    midFight: "Boss and multi-phase maps are home. Wave maps: still fine, but pure AoE physical may win faster.",
    investment: "Medium. Magic weapons, NRG comfort, stars for uptime.",
    sampleTeams: [
      {
        name: "Double DoT",
        blurb: "Kvare + Taair + battery.",
        slugs: ["kvare", "taair", "sp-inanna", "inanna", "cocoa", "lutfi"],
      },
    ],
    pitfalls: ["Playing him as a turn-1 assassin.", "No battery on long maps."],
    whenSkip: "Skip if burst cores already one-shot your content.",
  },
  {
    slug: "yennefer",
    overview: [
      "Yennefer (Witcher collab) is a premium magic threat. Build her if you own the collab package; she rewards magical boards and careful NRG.",
    ],
    openers: [
      "Open with control/setup if available, then nuke.",
      "Pair with magic-friendly supports.",
      "Respect physical matchup maps—bring a Seeker flex.",
    ],
    midFight: "Collab units often have unique tools—use them for tough elites. Battery Watchers keep her casting.",
    investment: "High if collab is complete; otherwise medium. Signature-leaning magic gear.",
    sampleTeams: [
      {
        name: "Witcher magic",
        blurb: "Yennefer + Geralt/Ciri flex if owned.",
        slugs: ["yennefer", "geralt", "ciri", "sp-inanna", "cocoa", "triss"],
      },
    ],
    pitfalls: ["Building collab DPS with zero supports.", "Forcing her into physical-only matchup maps."],
    whenSkip: "Skip if you lack the collab shell and already have Taair/Kvare magic coverage.",
  },
  {
    slug: "shams",
    overview: [
      "Shams is a solid roster piece who fills gaps rather than defining the entire meta. Raise him when he covers a missing role or faction breakpoint.",
    ],
    openers: [
      "Play to role matchup first.",
      "Use kit setup skills before spenders.",
      "Stay in faction aura range when stacking Elaman/Iria etc.",
    ],
    midFight: "Flex slot for faction auras and specific stages. Not always a permanent main carry.",
    investment: "Medium situational.",
    sampleTeams: [
      {
        name: "Faction flex",
        blurb: "Shams filling a role hole beside SP Inanna.",
        slugs: ["shams", "sp-inanna", "sp-maitha", "col", "cocoa", "inanna"],
      },
    ],
    pitfalls: ["Forcing main-carry investment over true SSS enablers."],
    whenSkip: "Skip heavy stars if the role is already covered by a higher tier unit.",
  },
  {
    slug: "yserinde",
    overview: [
      "Yserinde brings distinctive kit identity—build around her unique condition rather than generic ATK templates.",
    ],
    openers: [
      "Establish her condition/mark first.",
      "Cash out high multipliers second.",
      "Protect her from hard counters.",
    ],
    midFight: "Works as a secondary DPS in enabled boards. Evaluate map-by-map versus Col/Camelot.",
    investment: "Medium when owned and fleshed out.",
    sampleTeams: [
      {
        name: "Enabled flex DPS",
        blurb: "Yserinde with standard enable shell.",
        slugs: ["yserinde", "sp-inanna", "sp-maitha", "cocoa", "taair", "col"],
      },
    ],
    pitfalls: ["Ignoring kit conditions.", "No enabler."],
    whenSkip: "Skip if you already field two polished damage cores.",
  },
  {
    slug: "heshan",
    overview: [
      "Heshan is a strong mid-premium option—often a faction or role staple rather than a universal SSS. Build when he solves a hole in your Elaman/physical coverage.",
    ],
    openers: [
      "Open with role-correct matchup targets.",
      "Use setup skills, then spenders.",
      "Hold defensive tools if he is hybrid.",
    ],
    midFight: "Good as sideboard DPS. SP Inanna still multiplies his value.",
    investment: "Medium.",
    sampleTeams: [
      {
        name: "Heshan flex core",
        blurb: "Standard enable + Heshan damage.",
        slugs: ["heshan", "sp-inanna", "cocoa", "col", "taair", "inanna"],
      },
    ],
    pitfalls: ["Overranking him above SP Inanna investment."],
    whenSkip: "Skip if the role is filled by a higher overall tier unit.",
  },
  {
    slug: "selina",
    overview: [
      "Selina is a roster specialist—pick her up for kit niches and faction needs rather than automatic main-carry status.",
    ],
    openers: [
      "Identify her niche (control, chip, cover).",
      "Cast utility early if support-leaning.",
      "Stay in safe tiles.",
    ],
    midFight: "Sideboard for stages that ask for her tools. Keep a universal core as plan A.",
    investment: "Low-medium unless she is your only option in role.",
    sampleTeams: [
      {
        name: "Utility flex",
        blurb: "Selina filling a support/DPS hole.",
        slugs: ["selina", "sp-inanna", "sp-maitha", "col", "cocoa", "inanna"],
      },
    ],
    pitfalls: ["Building her as SSS without reading the kit."],
    whenSkip: "Skip heavy investment when better role-mates exist.",
  },
  {
    slug: "ayishah",
    overview: [
      "Ayishah is a flexible Legendary who often appears in mid-game clears. Treat her as a strong bench piece that can start until SSS cores arrive.",
    ],
    openers: [
      "Play correct matchup.",
      "Setup → spender.",
      "Do not overextend without cover.",
    ],
    midFight: "Fine for story and early hard content. Later becomes a faction/role flex.",
    investment: "Medium early if she is your best available; taper later.",
    sampleTeams: [
      {
        name: "Mid-game clear",
        blurb: "Ayishah with classic supports.",
        slugs: ["ayishah", "inanna", "cocoa", "col", "gloria", "maitha"],
      },
    ],
    pitfalls: ["Infinite starring past the point of diminishing returns."],
    whenSkip: "Deprioritize once true SSS damage is online.",
  },
  {
    slug: "sp-nungal",
    overview: [
      "SP Nungal is a spear-tempo style threat who thrives when Rally/Response or multi-action boards are online. She rewards coordinated teams more than solo hero plays.",
    ],
    openers: [
      "Align with Rally Command windows if SP Maitha is present.",
      "Use mobility to keep spear angles.",
      "Spend volleys into clumped or correctly matched targets.",
    ],
    midFight:
      "Best as a partner to SP Maitha / SP Inanna boards. If the team cannot enable her tempo, she feels average—build the shell first.",
    investment: "Medium-high with the right shell; medium alone.",
    sampleTeams: [
      {
        name: "Rally spears",
        blurb: "SP Nungal + SP Maitha Response board.",
        slugs: ["sp-nungal", "sp-maitha", "sp-inanna", "cocoa", "taair", "inanna"],
      },
    ],
    pitfalls: ["Building her without Rally partners.", "Ignoring positioning for spear lines."],
    whenSkip: "Skip until SP Maitha or similar enablers exist on the account.",
  },
];

export function getTop20Deep(slug: string): Top20Deep | undefined {
  return TOP20_DEEP.find((d) => d.slug === slug);
}

export function getTop20DeepMap(): Record<string, Top20Deep> {
  return Object.fromEntries(TOP20_DEEP.map((d) => [d.slug, d]));
}
