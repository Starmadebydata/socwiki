#!/usr/bin/env node
/**
 * Clean noisy scraped skill names in content/collected/*.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.resolve(__dirname, "../../content/collected");

const JUNK =
  /^(Base Skills?|Skill Range|Can Be|Learned at|Be Learned|arned at|e Learned|ned at|an Be|RK\d|Priority|Secondary|Recommended|Weapon|Trinket|Tarot|Review|Table|List|Last|Home|Article|Character|Faction|Move|Stand|Jump|Overall|Reroll)/i;

function cleanName(raw) {
  let n = String(raw || "")
    .replace(/\s+/g, " ")
    .trim();

  // If "Skill Range X" appears, keep only the skill title after it
  const sr = n.match(/Skill Range\s+(.+)$/i);
  if (sr) n = sr[1].trim();

  // strip leading garbage fragments from bad HTML splits
  n = n
    .replace(/^.*?(?:Base Skills?\s*)/i, "")
    .replace(
      /^(?:[a-z]{1,6}\s+)*(?:Be |Can Be |an Be |e |d |ed |ned |arned |rned |Learned )*(?:at RK\d+\s*)+/i,
      "",
    )
    .replace(/^(?:at RK\d+\s*)+/i, "")
    .replace(/^RK\d+\s*/i, "")
    .replace(/^Skill Range\s*/i, "")
    .replace(/\s*-\s*$/g, "")
    .replace(/\s*Extra\s*-?\s*$/i, "")
    .replace(/\s+/g, " ")
    .trim();

  // drop leftover low-quality starts
  if (/^[a-z]{1,4}\s/.test(n) && !/^(of|the|to)\s/i.test(n)) {
    // e.g. "d at RK7 ..." leftovers
    if (/^(d|e|ed|ned|arned|rned|an|be)\b/i.test(n)) return "";
  }

  if (n.length < 3 || n.length > 48) return "";
  if (JUNK.test(n)) return "";
  if (!/[A-Za-z]{3,}/.test(n)) return "";
  if (!/^[A-Za-z]/.test(n)) return "";
  // must look like a title (at least one capital)
  if (!/[A-Z]/.test(n)) return "";
  return n;
}

function cleanSkill(s) {
  const name = cleanName(s.name);
  if (!name) return null;
  return {
    ...s,
    name,
    nrg: s.nrg && s.nrg !== "-" ? String(s.nrg).replace(/^-/, "") : s.nrg,
    cd: s.cd && s.cd !== "-" ? String(s.cd).replace(/^-/, "") : s.cd,
  };
}

function pickBuild(skills, prev) {
  const names = skills.map((s) => s.name);
  const byKind = (k) => skills.filter((s) => s.kind === k).map((s) => s.name);

  const basics = byKind("Basic");
  const reactions = byKind("Reaction");
  const actives = skills
    .filter((s) => !["Basic", "Reaction"].includes(s.kind))
    .map((s) => s.name);

  const basicAttack =
    cleanName(prev?.basicAttack) ||
    basics[0] ||
    names.find((n) => /Thorn|Dawnlight|Wave|Slash|Bolt|Bash|Strike|Pierce/i.test(n)) ||
    "";
  const reaction =
    cleanName(prev?.reaction) ||
    reactions[0] ||
    names.find((n) =>
      /Footwork|Cover|Spirit|Guard|Veil|Matrix|Reverie|Insight|Alert|Counter/i.test(
        n,
      ),
    ) ||
    "";

  const skillList = [
    ...new Set(
      [
        ...(prev?.skills || []).map(cleanName).filter(Boolean),
        ...actives,
      ].filter((n) => n && n !== basicAttack && n !== reaction),
    ),
  ].slice(0, 6);

  const weaponRaw = prev?.weapon || "";
  const weapon =
    !weaponRaw || /^(Trinket|Tarot|Weapon)$/i.test(weaponRaw)
      ? ""
      : cleanName(weaponRaw) || weaponRaw;

  return {
    basicAttack,
    reaction,
    skills: skillList,
    weapon,
    trinket: prev?.trinket && !/^Trinket$/i.test(prev.trinket) ? prev.trinket : "",
    tarot: prev?.tarot && !/^Tarot$/i.test(prev.tarot) ? prev.tarot : "",
  };
}

let files = 0;
let skillsBefore = 0;
let skillsAfter = 0;

for (const f of fs.readdirSync(DIR)) {
  if (!f.endsWith(".json") || f.startsWith("_") || f.endsWith(".public.json"))
    continue;
  const p = path.join(DIR, f);
  const doc = JSON.parse(fs.readFileSync(p, "utf8"));
  files++;
  const before = doc.skills?.length || 0;
  skillsBefore += before;

  const cleaned = [];
  const seen = new Set();
  for (const s of doc.skills || []) {
    const c = cleanSkill(s);
    if (!c) continue;
    const k = c.name.toLowerCase();
    if (seen.has(k)) continue;
    seen.add(k);
    cleaned.push(c);
  }
  doc.skills = cleaned;
  doc.build = pickBuild(cleaned, doc.build || {});
  if (cleaned.length >= 4 && doc.confidence !== "high") {
    doc.confidence = "medium";
  }
  doc.cleanedAt = new Date().toISOString();
  skillsAfter += cleaned.length;
  fs.writeFileSync(p, JSON.stringify(doc, null, 2));
}

console.log(
  `Cleaned ${files} files: skills ${skillsBefore} → ${skillsAfter}`,
);
