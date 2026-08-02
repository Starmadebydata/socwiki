#!/usr/bin/env node
/**
 * Fully automated reparse of cached GameWith HTML → collected JSON
 * → regenerate src/data/auto-refined.ts → patch characters export.
 *
 * Usage: node scripts/collect/reparse-and-apply.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GAMEWITH_TARGETS } from "./targets.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const RAW = path.join(ROOT, "content/raw/public");
const OUT = path.join(ROOT, "content/collected");
const AUTO_TS = path.join(ROOT, "src/data/auto-refined.ts");

fs.mkdirSync(OUT, { recursive: true });

function decodeHtml(s) {
  return s
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/△/g, "▲")
    .replace(/✗/g, "×");
}

function htmlToText(html) {
  return decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|tr|h\d|li|div)>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/[ \t]+/g, " ")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/\n{3,}/g, "\n\n"),
  ).trim();
}

function starsFrom(s) {
  const m = s.match(/★+/);
  return m ? Math.min(5, m[0].length) : 3;
}

function extractRole(text) {
  const m = text.match(/\bRole\s+(Breaker|Defender|Destroyer|Watcher|Seeker)\b/i);
  return m ? m[1] : "";
}

function extractFactions(text) {
  const known = [
    "Iria",
    "Papal States",
    "Alacrity",
    "Union",
    "Elaman",
    "Luccia",
    "Drifter",
    "SoC",
    "Sword of Convallaria",
  ];
  const out = [];
  for (const k of known) {
    if (text.includes(k)) out.push(k === "Sword of Convallaria" ? "SoC" : k);
  }
  return [...new Set(out)].slice(0, 5);
}

function extractMove(text) {
  const m = text.match(/\bMove\s+(\d+)\b/);
  const hj = text.match(/\bHigh Jump\s+(\d+)\b/);
  const lj = text.match(/\bLow Jump\s+(\d+)\b/);
  return {
    move: m ? Number(m[1]) : null,
    highJump: hj ? Number(hj[1]) : null,
    lowJump: lj ? Number(lj[1]) : null,
  };
}

/** Greedy split concatenated titles using known name dictionary (longest first). */
function dictSplit(text, dictionary) {
  const dict = [...new Set(dictionary.filter(Boolean))].sort(
    (a, b) => b.length - a.length,
  );
  const found = [];
  let i = 0;
  const s = text.replace(/\s+/g, " ").trim();
  while (i < s.length) {
    let hit = null;
    for (const n of dict) {
      if (s.startsWith(n, i)) {
        hit = n;
        break;
      }
    }
    if (hit) {
      found.push(hit);
      i += hit.length;
      // skip optional spaces between glued names
      while (s[i] === " ") i++;
    } else {
      i += 1;
    }
  }
  return found;
}

/** Best Build block: Basic AttackReactionAscension{ba}{re}{asc}Skill{s1}{s2}{s3}WeaponTrinketTarot{w}{t}{tar} */
function extractBestBuild(text, nameDict = [], gearDict = []) {
  const compact = text.replace(/\s+/g, " ");
  const m =
    compact.match(
      /Basic Attack\s*Reaction\s*Ascension\s*([\s\S]{5,500}?)Weapon\s*Trinket\s*Tarot\s*([A-Za-z0-9'’ \-]{5,140})/,
    ) ||
    compact.match(
      /Basic AttackReactionAscension([\s\S]{5,500}?)WeaponTrinketTarot([A-Za-z0-9'’ \-]{5,140})/,
    );
  if (!m) return null;
  return parseBuildChunk(m[1], m[2], nameDict, gearDict);
}

function parseBuildChunk(mid, gearChunk, nameDict, gearDict) {
  let s = mid.replace(/\s+/g, " ").trim();
  // Prefer explicit Skill separator from GameWith table
  const skillIdx = s.search(/\bSkill\b/);
  let head = s;
  let skillPart = "";
  if (skillIdx >= 0) {
    head = s.slice(0, skillIdx).trim();
    skillPart = s.slice(skillIdx + 5).trim();
  }

  const headNames = dictSplit(head, nameDict);
  let basicAttack = headNames[0] || "";
  let reaction = headNames[1] || "";
  let ascension = headNames[2] || "";

  // fallback: if dict failed, try title-case chunks
  if (!basicAttack) {
    const tokens = head.match(
      /[A-Z][A-Za-z0-9'’\-]*(?:\s+[A-Z][A-Za-z0-9'’\-]*){0,4}/g,
    );
    if (tokens?.length) {
      basicAttack = tokens[0] || "";
      reaction = tokens[1] || "";
      ascension = tokens[2] || "";
    }
  }

  let skills = dictSplit(skillPart, nameDict).filter(
    (n) => n !== basicAttack && n !== reaction && n !== ascension,
  );
  if (skills.length === 0 && skillPart) {
    const tokens = skillPart.match(
      /[A-Z][A-Za-z0-9'’\-]*(?:\s+[A-Z][A-Za-z0-9'’\-/]*){0,5}/g,
    );
    skills = (tokens || []).map((x) => x.trim()).slice(0, 4);
  }

  const gear = gearChunk.replace(/\s+/g, " ").trim();
  const gNames = dictSplit(gear, gearDict.length ? gearDict : nameDict);
  // common gear fallback dictionary
  const commonGear = [
    "Void Stab",
    "Maverick's Cloak",
    "Verdict of Justice",
    "Dawnlight",
    "Life Fondness",
    "The Empress",
    "The Star",
    "The Sun",
    "The Moon",
    "Death",
    "The Emperor",
    "Judgement",
    "Staff of Iria",
    "Great Company on the Journey",
    "Newborn Blade",
    "Brutal Axe",
    "Denial Hammer",
    "Cage Mask",
  ];
  const g2 = gNames.length
    ? gNames
    : dictSplit(gear, commonGear);
  const weapon = g2[0] || "";
  const trinket = g2[1] || "";
  const tarot = g2.slice(2).join(" ") || g2[2] || "";

  return { basicAttack, reaction, ascension, skills, weapon, trinket, tarot };
}

/**
 * Priority SkillsName★★★★★Description...
 */
function extractPrioritySkills(text) {
  const block = text.match(
    /Priority Skills([\s\S]{50,6000}?)(?:Secondary Priorities|Recommended Gear|Recommended Weapons|Equipable Weapons|Voice Actor|$)/i,
  );
  if (!block) return [];
  let chunk = block[1]
    .replace(/Skill\s*Build Priority and Details/gi, "")
    .replace(/SkillPriority and Details/gi, "")
    .trim();

  const skills = [];
  // Split on star runs
  const re =
    /([A-Z][A-Za-z0-9'’\-\/ ]{1,40}?)\s*(★{1,5})\s*([\s\S]*?)(?=(?:[A-Z][A-Za-z0-9'’\-\/ ]{1,40}?\s*★)|$)/g;
  let m;
  while ((m = re.exec(chunk))) {
    let name = m[1].trim();
    name = name
      .replace(/^Priority and Details\s*/i, "")
      .replace(/^Build Priority and Details\s*/i, "")
      .replace(/^Details\s*/i, "")
      .replace(/^Skill\s*/i, "")
      .trim();
    if (/^(Skill|Secondary|Priority|Details|Build|and Details)$/i.test(name))
      continue;
    if (name.length < 3) continue;
    const stars = m[2].length;
    let desc = m[3].replace(/\s+/g, " ").trim();
    // cut desc if next skill leaked
    desc = desc.slice(0, 400);
    skills.push({
      name,
      stars,
      note: desc.slice(0, 160),
      description: desc,
      priority: stars,
    });
  }
  return skills;
}

/** Catalog: Name[Skill] Cost: X / CD: Y(Type) Description */
function extractSkillCatalog(text) {
  const skills = [];
  const re =
    /([A-Z][A-Za-z0-9'’\-\/ ]{2,42}?)\[(Skill|Basic Attack|Reaction|Passive|Aura|Support|Healing|Decision)\]\s*Cost:\s*([0-9\-—N\/A]+|-)\s*\/\s*CD:\s*([0-9\-—N\/A]+|-)\s*\(([^)]*)\)\s*([\s\S]{10,500}?)(?=(?:[A-Z][A-Za-z0-9'’\-\/ ]{2,42}?\[(?:Skill|Basic Attack|Reaction|Passive))|$)/g;

  // Work on compact text without newlines first
  const compact = text.replace(/\n+/g, "");
  let m;
  while ((m = re.exec(compact))) {
    const name = m[1].replace(/^.*?(?:SkillRange|Learned at RK\d+)/i, "").trim();
    if (name.length < 3 || name.length > 48) continue;
    if (/Skills That Can|SkillRange|Can Be Learned/i.test(name)) {
      const cleaned = name.replace(/^.*SkillRange/i, "").trim();
      if (cleaned.length >= 3) {
        // use cleaned
        pushSkill(skills, cleaned, m);
      }
      continue;
    }
    pushSkill(skills, name, m);
  }

  // Simpler fallback pass
  const re2 =
    /([A-Z][A-Za-z0-9'’ \-]{2,40})\[(Skill|Basic Attack|Reaction)\]\s*Cost:\s*([^\s/]+)\s*\/\s*CD:\s*([^\s(]+)\s*\(([^)]+)\)\s*([^[]{15,300})/g;
  while ((m = re2.exec(compact))) {
    const name = m[1].replace(/.*SkillRange/i, "").trim();
    if (name.length < 3) continue;
    if (skills.some((s) => s.name === name)) continue;
    pushSkill(skills, name, m);
  }

  return skills;
}

function pushSkill(skills, name, m) {
  name = name
    .replace(/.*SkillRange/i, "")
    .replace(/.*Learned at RK\d+/i, "")
    .trim();
  if (!name || name.length < 3) return;
  if (skills.some((s) => s.name.toLowerCase() === name.toLowerCase())) return;

  const kindRaw = (m[2] || "Skill").toLowerCase();
  let kind = "Active";
  if (kindRaw.includes("basic")) kind = "Basic";
  else if (kindRaw.includes("reaction")) kind = "Reaction";
  else if (kindRaw.includes("passive")) kind = "Passive";
  else if (kindRaw.includes("aura")) kind = "Aura";

  const typeHint = (m[5] || "").toLowerCase();
  if (typeHint.includes("basic")) kind = "Basic";
  if (typeHint.includes("reaction")) kind = "Reaction";
  if (typeHint.includes("passive")) kind = "Passive";
  if (typeHint.includes("support") || typeHint.includes("healing"))
    kind = kind === "Basic" ? kind : "Active";

  let desc = (m[6] || "").replace(/\s+/g, " ").trim();
  // cut trailing "Skills That Can..."
  desc = desc.split(/Skills That Can Be Learned|SkillRange|Voice Actor/)[0].trim();
  desc = desc.slice(0, 500);

  const nrg = m[3] === "-" || m[3] === "N/A" ? "—" : String(m[3]);
  const cd = m[4] === "-" || m[4] === "N/A" ? "—" : String(m[4]);

  skills.push({
    name,
    kind,
    nrg,
    cd,
    description: desc ? `(${m[5]}) ${desc}`.trim() : "",
    note: desc.slice(0, 140),
    priority: 3,
  });
}

function mergeSkills(priority, catalog, build) {
  const map = new Map();

  for (const s of catalog) {
    map.set(s.name.toLowerCase(), {
      name: s.name,
      kind: s.kind,
      stars: s.priority || 3,
      nrg: s.nrg,
      cd: s.cd,
      note: s.note || "",
      description: s.description || "",
    });
  }

  for (const p of priority) {
    const k = p.name.toLowerCase();
    const prev = map.get(k) || {
      name: p.name,
      kind: "Active",
      stars: 3,
      nrg: "—",
      cd: "—",
      note: "",
      description: "",
    };
    prev.stars = p.stars || prev.stars;
    prev.note = p.note || prev.note;
    if (p.description && p.description.length > (prev.description || "").length) {
      prev.description = p.description;
    }
    // kind guess from priority text
    if (/reaction/i.test(p.description || p.note || "")) prev.kind = "Reaction";
    if (/basic attack/i.test(p.description || p.note || "")) prev.kind = "Basic";
    if (/passive/i.test(p.description || p.note || "")) prev.kind = "Passive";
    if (/aura|leader/i.test(p.description || p.note || "")) prev.kind = "Aura";
    map.set(k, prev);
  }

  // ensure build skills present
  if (build) {
    for (const [label, kind] of [
      [build.basicAttack, "Basic"],
      [build.reaction, "Reaction"],
    ]) {
      if (!label) continue;
      const k = label.toLowerCase();
      if (!map.has(k)) {
        map.set(k, {
          name: label,
          kind,
          stars: 5,
          nrg: kind === "Basic" ? "0" : "—",
          cd: "—",
          note: `Best Build ${kind}`,
          description: `Recommended ${kind} from Best Build table.`,
        });
      } else {
        const s = map.get(k);
        s.kind = kind;
        s.stars = Math.max(s.stars, 5);
      }
    }
    for (const name of build.skills || []) {
      const k = name.toLowerCase();
      if (!map.has(k)) {
        map.set(k, {
          name,
          kind: "Active",
          stars: 5,
          nrg: "—",
          cd: "—",
          note: "Best Build skill slot",
          description: "Listed in GameWith Best Build table.",
        });
      } else {
        map.get(k).stars = Math.max(map.get(k).stars, 4);
      }
    }
  }

  // sort by stars desc then name
  return [...map.values()].sort(
    (a, b) => b.stars - a.stars || a.name.localeCompare(b.name),
  );
}

function extractReview(text) {
  const m = text.match(
    /Review\s+(-|–|—)?\s*([\s\S]{20,300}?)(?:How to Get|Star Level|User Score)/i,
  );
  if (!m) return "";
  return m[2].replace(/\s+/g, " ").trim().slice(0, 400);
}

function weaponSlug(name) {
  if (!name) return "";
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function processFile(target) {
  const htmlPath = path.join(RAW, `gamewith-${target.slug}.html`);
  const txtPath = path.join(RAW, `gamewith-${target.slug}.txt`);
  let html = "";
  if (fs.existsSync(htmlPath)) html = fs.readFileSync(htmlPath, "utf8");
  else if (fs.existsSync(txtPath)) html = fs.readFileSync(txtPath, "utf8");
  else return null;

  const text = htmlToText(html);
  const compact = text.replace(/\n/g, " ");
  const priority = extractPrioritySkills(compact);
  const catalog = extractSkillCatalog(compact);
  const nameDict = [
    ...priority.map((p) => p.name),
    ...catalog.map((c) => c.name),
  ];
  const gearDict = [
    "Void Stab",
    "Maverick's Cloak",
    "Verdict of Justice",
    "Dawnlight",
    "Life Fondness",
    "The Empress",
    "The Star",
    "The Sun",
    "The Moon",
    "Death",
    "The Emperor",
    "Judgement",
    "Staff of Iria",
    "Great Company on the Journey",
    "Newborn Blade",
    "Brutal Axe",
    "Denial Hammer",
    "Cage Mask",
    "Spear of Iria",
    "Blade of Strategem",
    "Paradox Crystal Chain",
  ];
  const build =
    extractBestBuild(compact, nameDict, gearDict) ||
    extractBestBuild(text, nameDict, gearDict);
  // Correct BA/RE from priority skill blurbs when present
  if (build) {
    const cleanLabel = (s) =>
      String(s || "")
        .replace(/^Priority and Details\s*/i, "")
        .replace(/^Details\s*/i, "")
        .trim();
    build.basicAttack = cleanLabel(build.basicAttack);
    build.reaction = cleanLabel(build.reaction);
    build.skills = (build.skills || []).map(cleanLabel).filter(Boolean);

    for (const p of priority) {
      const blob = `${p.note || ""} ${p.description || ""}`;
      if (/basic attack/i.test(blob)) build.basicAttack = p.name;
      if (
        /best reaction|recommended as .{0,20}reaction|as .{0,10}best reaction|reaction for/i.test(
          blob,
        )
      ) {
        build.reaction = p.name;
      }
    }
    // Prefer ★★★★★ actives for skill slots if build.skills empty
    if (!build.skills?.length) {
      build.skills = priority
        .filter((p) => p.stars >= 4)
        .map((p) => p.name)
        .filter((n) => n !== build.basicAttack && n !== build.reaction)
        .slice(0, 4);
    }
  }

  const skills = mergeSkills(priority, catalog, build);
  const stats = extractMove(text);
  const role = extractRole(text);
  const factions = extractFactions(text);
  const review = extractReview(text);

  // confidence
  let confidence = "low";
  if (skills.length >= 4 && build?.basicAttack) confidence = "medium";
  if (
    skills.length >= 5 &&
    build?.basicAttack &&
    build?.reaction &&
    (build.skills?.length || 0) >= 2 &&
    skills.filter((s) => s.description && s.description.length > 40).length >= 3
  ) {
    confidence = "high";
  }

  const doc = {
    slug: target.slug,
    name: target.name,
    source: "public-structured",
    sources: [
      {
        type: "gamewith-html-cache",
        id: target.id,
        parsedAt: new Date().toISOString(),
      },
    ],
    role,
    factions,
    rarity: "Legendary",
    stats,
    skills: skills.map((s) => ({
      name: s.name,
      kind: s.kind,
      nrg: s.nrg,
      cd: s.cd,
      description: s.description,
      note: s.note,
      priority: s.stars,
    })),
    build: {
      basicAttack: build?.basicAttack || "",
      reaction: build?.reaction || "",
      ascension: build?.ascension || "",
      skills: build?.skills || [],
      weapon: build?.weapon || "",
      trinket: build?.trinket || "",
      tarot: build?.tarot || "",
    },
    summary: review || `${target.name} — auto-parsed from GameWith build guide.`,
    pros: priority
      .filter((p) => p.stars >= 5)
      .slice(0, 4)
      .map((p) => `${p.name}: ${(p.note || "").slice(0, 80)}`),
    howToUse: priority
      .slice(0, 3)
      .map((p) => p.note)
      .filter(Boolean)
      .join(" ")
      .slice(0, 600),
    starPriority: "",
    confidence,
    collectedAt: new Date().toISOString(),
  };

  fs.writeFileSync(path.join(OUT, `${target.slug}.json`), JSON.stringify(doc, null, 2));
  return doc;
}

function toTsCharacter(doc) {
  // Map to Character-like object for auto-refined
  const weaponSlugName = (doc.build.weapon || "")
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const trinketSlug = (doc.build.trinket || "")
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const tarotSlug = (doc.build.tarot || "")
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  // known gear slug aliases
  const gearAlias = {
    "void-stab": "void-stab",
    "mavericks-cloak": "mavericks-cloak",
    "maverick-s-cloak": "mavericks-cloak",
    "verdict-of-justice": "verdict-of-justice",
    dawnlight: "dawnlight",
    "life-fondness": "life-fondness",
    "the-empress": "the-empress",
    "the-star": "the-star",
    "the-sun": "the-sun",
    death: "death",
    "staff-of-iria": "staff-of-iria",
    "great-company-on-the-journey": "great-company",
    "great-company": "great-company",
  };

  const w = gearAlias[weaponSlugName] || weaponSlugName || "newborn-blade";
  const t = gearAlias[trinketSlug] || trinketSlug || "focus-lens";
  const tar = gearAlias[tarotSlug] || tarotSlug || "temperance";

  const skillPriority = (doc.skills || []).slice(0, 12).map((s) => ({
    name: s.name,
    kind: s.kind || "Active",
    stars: s.priority || 3,
    nrg: s.nrg || "—",
    cd: s.cd || "—",
    note: (s.note || "").slice(0, 180),
    description: (s.description || s.note || "").slice(0, 500),
  }));

  return {
    slug: doc.slug,
    name: doc.name,
    rarity: "Legendary",
    role: doc.role || "Watcher",
    factions: doc.factions?.length ? doc.factions : ["Iria"],
    move: doc.stats?.move ?? 3,
    highJump: doc.stats?.highJump ?? 2,
    lowJump: doc.stats?.lowJump ?? 2,
    // tiers left to existing data — auto-refined only overrides skills/build/summary when applied
    summary: doc.summary || "",
    pros: doc.pros?.length ? doc.pros : ["See skill table"],
    howToUse: doc.howToUse || doc.summary || "",
    build: {
      basicAttack: doc.build.basicAttack || skillPriority.find((s) => s.kind === "Basic")?.name || "Basic Attack",
      reaction: doc.build.reaction || skillPriority.find((s) => s.kind === "Reaction")?.name || "Reaction",
      skills:
        doc.build.skills?.length > 0
          ? doc.build.skills.slice(0, 4)
          : skillPriority
              .filter((s) => s.kind === "Active" || s.kind === "Passive" || s.kind === "Aura")
              .slice(0, 3)
              .map((s) => s.name),
      weaponSlug: w,
      trinketSlug: t,
      tarotSlug: tar,
    },
    skillPriority,
    starPriority: doc.starPriority || "See guide",
    lastUpdated: new Date().toISOString().slice(0, 10),
    confidence: doc.confidence,
  };
}

function main() {
  const results = [];
  for (const t of GAMEWITH_TARGETS) {
    const doc = processFile(t);
    if (!doc) {
      results.push({ slug: t.slug, status: "missing-raw" });
      continue;
    }
    results.push({
      slug: t.slug,
      status: "ok",
      skills: doc.skills.length,
      confidence: doc.confidence,
      ba: doc.build.basicAttack,
      re: doc.build.reaction,
    });
    console.log(
      `${t.slug.padEnd(14)} conf=${doc.confidence.padEnd(6)} skills=${String(doc.skills.length).padStart(2)} BA=${doc.build.basicAttack || "-"} | RE=${doc.build.reaction || "-"}`,
    );
  }

  // Build auto-refined TS for high+medium with good skill counts
  const eligible = [];
  for (const t of GAMEWITH_TARGETS) {
    const p = path.join(OUT, `${t.slug}.json`);
    if (!fs.existsSync(p)) continue;
    const doc = JSON.parse(fs.readFileSync(p, "utf8"));
    if ((doc.confidence === "high" || doc.confidence === "medium") && doc.skills?.length >= 4) {
      eligible.push(toTsCharacter(doc));
    }
  }

  // Generate TypeScript file with partial overrides applied via map
  const lines = [];
  lines.push(`import type { Character, Role, Tier, SkillRow } from "@/types/character";`);
  lines.push(``);
  lines.push(`/** Auto-generated by scripts/collect/reparse-and-apply.mjs — do not hand-edit. */`);
  // Emit as satisfies-friendly loose objects; type is Partial character fields
  lines.push(`export type AutoRefinedPartial = Partial<Character> & { slug: string; name: string; confidence?: string };`);
  lines.push(``);
  lines.push(`export const AUTO_REFINED: AutoRefinedPartial[] = ${JSON.stringify(eligible, null, 2)} as AutoRefinedPartial[];`);
  lines.push(``);
  lines.push(`export function getAutoRefinedMap(): Record<string, AutoRefinedPartial> {`);
  lines.push(`  return Object.fromEntries(AUTO_REFINED.map((c) => [c.slug, c]));`);
  lines.push(`}`);
  lines.push(``);

  fs.writeFileSync(AUTO_TS, lines.join("\n"));
  console.log(`\nWrote ${AUTO_TS} (${eligible.length} entries)`);

  const summary = {
    at: new Date().toISOString(),
    results,
    eligible: eligible.length,
    high: results.filter((r) => r.confidence === "high").length,
    medium: results.filter((r) => r.confidence === "medium").length,
  };
  fs.writeFileSync(path.join(OUT, "_reparse-summary.json"), JSON.stringify(summary, null, 2));
  console.log("high:", summary.high, "medium:", summary.medium);
}

main();
