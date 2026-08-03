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
];

export function getPresetById(id: string): TeamPreset | undefined {
  return TEAM_PRESETS.find((p) => p.id === id);
}
