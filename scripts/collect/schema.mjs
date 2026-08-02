/** Shared schema helpers for collection pipeline */

export const SKILL_KINDS = [
  "Basic",
  "Active",
  "Passive",
  "Reaction",
  "Trait",
  "Ascension",
  "Aura",
];

export const ROLES = [
  "Breaker",
  "Defender",
  "Destroyer",
  "Watcher",
  "Seeker",
];

/**
 * @typedef {object} CollectedSkill
 * @property {string} name
 * @property {string} [kind]
 * @property {string} [nrg]
 * @property {string} [cd]
 * @property {string} [description]
 * @property {number} [priority]
 * @property {string} [note]
 */

/**
 * @typedef {object} CollectedCharacter
 * @property {string} slug
 * @property {string} name
 * @property {string} source
 * @property {object[]} [sources]
 * @property {string} [role]
 * @property {string[]} [factions]
 * @property {string} [rarity]
 * @property {object} [stats]
 * @property {CollectedSkill[]} [skills]
 * @property {object} [build]
 * @property {string} [summary]
 * @property {string[]} [pros]
 * @property {string} [howToUse]
 * @property {string} [starPriority]
 * @property {string} [confidence]
 * @property {string} [collectedAt]
 */

export function emptyCollected(slug, name = slug) {
  return {
    slug,
    name,
    source: "manual",
    sources: [],
    role: "",
    factions: [],
    rarity: "Legendary",
    stats: { move: null, highJump: null, lowJump: null },
    skills: [],
    build: {
      basicAttack: "",
      reaction: "",
      skills: [],
      weapon: "",
      trinket: "",
      tarot: "",
    },
    summary: "",
    pros: [],
    howToUse: "",
    starPriority: "",
    confidence: "low",
    collectedAt: new Date().toISOString(),
  };
}

export function validateCollected(doc) {
  const errors = [];
  const warnings = [];

  if (!doc || typeof doc !== "object") {
    return { ok: false, errors: ["not an object"], warnings };
  }
  if (!doc.slug) errors.push("missing slug");
  if (!doc.name) errors.push("missing name");
  if (!doc.source) warnings.push("missing source");
  if (!Array.isArray(doc.skills) || doc.skills.length === 0) {
    warnings.push("no skills[]");
  } else {
    doc.skills.forEach((s, i) => {
      if (!s?.name) errors.push(`skills[${i}] missing name`);
      if (s?.kind && !SKILL_KINDS.includes(s.kind)) {
        warnings.push(`skills[${i}] unknown kind: ${s.kind}`);
      }
      if (!s?.description && !s?.note) {
        warnings.push(`skills[${i}] (${s.name}) no description/note`);
      }
    });
  }
  if (!doc.build?.basicAttack) warnings.push("build.basicAttack empty");
  if (!doc.build?.reaction) warnings.push("build.reaction empty");

  return { ok: errors.length === 0, errors, warnings };
}

export function slugifyName(name) {
  return String(name)
    .trim()
    .toLowerCase()
    .replace(/^sp\s+/, "sp-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
