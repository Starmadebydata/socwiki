/**
 * Curated team templates for Team Builder + /teams hub.
 * Slugs must exist in the character database.
 */

export type TeamPreset = {
  id: string;
  name: string;
  blurb: string;
  goal: string;
  slugs: string[];
};

export const TEAM_PRESETS: TeamPreset[] = [
  {
    id: "iria-start",
    name: "Classic Iria start",
    blurb: "Act Again support + assassin + cover tank for story clear.",
    goal: "Story · low pull pressure",
    slugs: ["inanna", "col", "cocoa", "rawiyah", "gloria", "maitha"],
  },
  {
    id: "dot-pressure",
    name: "Sustained DoT pressure",
    blurb: "Battery support with infection / chip cores for longer fights.",
    goal: "Boss · long fights",
    slugs: ["taair", "kvare", "lutfi", "inanna", "pooch-runrun", "beryl"],
  },
  {
    id: "meta-core",
    name: "Meta aspirational core",
    blurb: "Pull roadmap for limiteds — only load if you own most slots.",
    goal: "Mid-game spike",
    slugs: ["sp-inanna", "camelot", "sp-maitha", "taair", "estra", "lukamar"],
  },
  {
    id: "frontline-heavy",
    name: "Frontline-heavy clear",
    blurb: "Extra tanks and heals when story stages keep wiping you.",
    goal: "Survival",
    slugs: ["sp-maitha", "cocoa", "inanna", "maitha", "col", "gloria"],
  },
  {
    id: "magic-lane",
    name: "Magic / Destroyer lane",
    blurb: "Stack Destroyers with a Watcher enabler for magic-heavy maps.",
    goal: "Magic stages",
    slugs: ["taair", "kvare", "beryl", "inanna", "lutfi", "samantha"],
  },
  {
    id: "collab-witcher",
    name: "Witcher collab flex",
    blurb: "Geralt / Yennefer / Ciri cores if you pulled the collab banner.",
    goal: "Collab roster",
    slugs: ["geralt", "yennefer", "ciri", "triss", "inanna", "cocoa"],
  },
  {
    id: "seeker-burst",
    name: "Seeker burst window",
    blurb: "Physical hunters into Breaker-heavy maps with Act Again setup.",
    goal: "Matchup clear",
    slugs: ["col", "safiyyah", "faycal", "inanna", "cocoa", "rawiyah"],
  },
  {
    id: "spiral-ready",
    name: "Spiral-ready balanced",
    blurb: "Enabler + dual threat + frontline for Spiral of Destinies prep.",
    goal: "Spiral / Trials",
    slugs: ["sp-inanna", "col", "taair", "sp-maitha", "cocoa", "gloria"],
  },
];

export function getPresetById(id: string): TeamPreset | undefined {
  return TEAM_PRESETS.find((p) => p.id === id);
}

export function formatTeamShareText(
  names: string[],
  url: string,
  opts?: { goal?: string },
): string {
  const title = opts?.goal
    ? `SoC team (${opts.goal})`
    : "Sword of Convallaria team";
  const list =
    names.length > 0 ? names.map((n, i) => `${i + 1}. ${n}`).join("\n") : "(empty)";
  return `${title}\n${list}\n\n${url}\n— via SoC Wiki`;
}
