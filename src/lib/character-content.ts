import type { Character, Role } from "@/types/character";
import type { GearItem } from "@/types/character";

const MATCHUP: Record<
  Role,
  { advantage: string | null; disadvantage: string | null; blurb: string }
> = {
  Breaker: {
    advantage: "Defender",
    disadvantage: "Seeker",
    blurb:
      "Breakers punish tanks—open on Defenders, respect Seekers who hunt you back.",
  },
  Defender: {
    advantage: "Seeker",
    disadvantage: "Breaker",
    blurb:
      "Defenders cover the board against Seekers but melt if Breakers get free swings.",
  },
  Seeker: {
    advantage: "Breaker",
    disadvantage: "Defender",
    blurb:
      "Seekers delete Breakers from flanks; avoid head-on trades into Defenders.",
  },
  Watcher: {
    advantage: "Destroyer",
    disadvantage: null,
    blurb:
      "Watchers edge the magic lane into Destroyers while enabling the physical triangle.",
  },
  Destroyer: {
    advantage: null,
    disadvantage: "Watcher",
    blurb:
      "Destroyers pressure with magic/DoT but are soft into Watcher matchups.",
  },
};

const ROLE_JOB: Record<Role, string> = {
  Breaker: "anti-tank physical pressure and frontline shred",
  Defender: "frontline soak, cover, and zone control",
  Seeker: "flank assassination and Act Again kill loops",
  Watcher: "healing, Act Again, and battery / buff enable",
  Destroyer: "magical damage, DoT, and multi-target pressure",
};

export function investmentGuide(c: Character): string {
  const overall = c.tier.overall;
  const reroll = c.tier.reroll;
  const high =
    overall === "SSS" || overall === "SS" || overall === "S+" || overall === "S";
  const rerollWorth =
    reroll === "SSS" || reroll === "SS" || reroll === "S+" || reroll === "S";

  if (high && rerollWorth) {
    return `${c.name} sits at ${overall} overall and ${reroll} on the reroll board—worth a dedicated star path early if you pull them. Funnel shards into the breakpoints in Star priority before spreading resources across the whole roster.`;
  }
  if (high) {
    return `${c.name} is a strong ${overall} ${c.role} for mid-game content. They may not be a first-reroll target (${reroll}), but once owned they repay stars and gear quickly.`;
  }
  return `${c.name} is a situational ${overall} ${c.role}. Keep them as a flex or faction piece unless a stage specifically needs their kit—do not overspend limited shards early.`;
}

export function roleMatchupBlurb(c: Character): string {
  const m = MATCHUP[c.role];
  const job = ROLE_JOB[c.role];
  const adv = m.advantage
    ? `Attack into ${m.advantage}s for free damage.`
    : "You are not the physical triangle apex—lean on skills and positioning.";
  const dis = m.disadvantage
    ? `Avoid feeding ${m.disadvantage}s free swings.`
    : "";
  return `${c.name} fills ${job}. ${m.blurb} ${adv} ${dis}`.replace(/\s+/g, " ").trim();
}

export function gearDeepDive(
  c: Character,
  weapon?: GearItem | null,
  trinket?: GearItem | null,
  tarot?: GearItem | null,
): string[] {
  const lines: string[] = [];
  if (weapon) {
    lines.push(
      `Weapon — ${weapon.name}: ${weapon.summary}${weapon.whenToUse ? ` Prefer it when ${weapon.whenToUse.charAt(0).toLowerCase()}${weapon.whenToUse.slice(1)}` : ""}`,
    );
  } else {
    lines.push(
      `Weapon — use the recommended slug ${c.build.weaponSlug} until a signature alternative appears.`,
    );
  }
  if (trinket) {
    lines.push(
      `Trinket — ${trinket.name}: ${trinket.summary}${trinket.whenToUse ? ` Best when ${trinket.whenToUse.charAt(0).toLowerCase()}${trinket.whenToUse.slice(1)}` : ""}`,
    );
  }
  if (tarot) {
    lines.push(
      `Tarot — ${tarot.name}: ${tarot.summary}${tarot.whenToUse ? ` Take it for ${tarot.whenToUse.charAt(0).toLowerCase()}${tarot.whenToUse.slice(1)}` : ""}`,
    );
  }
  return lines;
}

export function teamPlan(c: Character): string {
  const role = c.role;
  if (role === "Watcher") {
    return `Build the party around ${c.name} as the enabler: one primary DPS (Seeker/Breaker/Destroyer), one frontline Defender, then flex for matchups or faction auras (${c.factions.slice(0, 2).join(" / ")}). Feed Act Again and NRG into the carry first.`;
  }
  if (role === "Defender") {
    return `Park ${c.name} on the contested tile or choke, pair with a Watcher battery and at least one damage role that covers their weak matchup. Do not stack pure tanks without a kill threat.`;
  }
  if (role === "Seeker") {
    return `${c.name} wants an Act Again enabler and a Defender who holds aggro while they flank. Prioritize backline kills so kill-passives and multi-action loops fire.`;
  }
  if (role === "Breaker") {
    return `Open ${c.name} into Defender-heavy packs. Bring a Watcher for uptime and a Seeker or Destroyer flex if the map punishes pure physical lines.`;
  }
  return `${c.name} shines in longer fights and magic lanes—pair with a Watcher who can battery NRG and cover the Watcher matchup soft spot.`;
}

export function rotationTips(c: Character): string[] {
  const tips = [
    `Open with ${c.build.skills[0] ?? "your highest value skill"} when the board allows a clean cast.`,
    `Keep reaction (${c.build.reaction}) online—do not strip it for vanity actives mid-fight.`,
    `Basic attack (${c.build.basicAttack}) is for reposition turns or when NRG is dry.`,
  ];
  if (c.role === "Watcher") {
    tips.push(
      "Spend the first enable on your invested carry, not a half-built flex unit.",
    );
  }
  if (c.role === "Seeker" || c.role === "Breaker") {
    tips.push(
      "Count kill thresholds before committing—wasted openers cost the Act Again or NRG window.",
    );
  }
  return tips;
}

export function faqAnswers(
  c: Character,
  weaponName: string,
  trinketName: string,
  tarotName: string,
): { q: string; a: string }[] {
  return [
    {
      q: `What is the best build for ${c.name} in Sword of Convallaria?`,
      a: `Run basic ${c.build.basicAttack}, reaction ${c.build.reaction}, and skills ${c.build.skills.join(", ")}. Gear: ${weaponName}, ${trinketName}, and ${tarotName}. Adjust only when a stage bans a slot or you lack the piece—see alternatives on each gear page.`,
    },
    {
      q: `Is ${c.name} worth building?`,
      a: investmentGuide(c),
    },
    {
      q: `What role is ${c.name} and who do they counter?`,
      a: roleMatchupBlurb(c),
    },
    {
      q: `How should I star ${c.name}?`,
      a: `Follow star priority: ${c.starPriority}. Stop at the first power spike that stabilizes your clear, then return after your enabler and main carry hit their breakpoints.`,
    },
    {
      q: `What teams pair well with ${c.name}?`,
      a: teamPlan(c),
    },
  ];
}
