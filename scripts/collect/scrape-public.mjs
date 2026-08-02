#!/usr/bin/env node
/**
 * Scrape public EN guide pages into content/raw/public + content/collected.
 * Sources: GameWith character build pages (HTML text extract).
 *
 * Usage: node scripts/collect/scrape-public.mjs [--limit N]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  GAMEWITH_TARGETS,
  gamewithUrl,
  DOTGG_SLUGS,
  dotggUrl,
} from "./targets.mjs";
import { emptyCollected, slugifyName } from "./schema.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const RAW_DIR = path.join(ROOT, "content/raw/public");
const OUT_DIR = path.join(ROOT, "content/collected");

fs.mkdirSync(RAW_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });

const limitArg = process.argv.indexOf("--limit");
const LIMIT =
  limitArg >= 0 ? Number(process.argv[limitArg + 1]) || Infinity : Infinity;

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "SoCWikiCollector/1.0 (+https://socwiki.app; research; respectful)",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${url}`);
  return res.text();
}

function extractRole(text) {
  const m = text.match(/\bRole\b\s*([A-Za-z]+)/i);
  if (!m) return "";
  const r = m[1];
  const map = {
    Breaker: "Breaker",
    Defender: "Defender",
    Destroyer: "Destroyer",
    Watcher: "Watcher",
    Seeker: "Seeker",
  };
  return map[r] || "";
}

function extractFactions(text) {
  const known = [
    "Iria",
    "Papal States",
    "Alacrity",
    "Union",
    "SoC",
    "Elaman",
    "Luccia",
    "Drifter",
    "Sword of Convallaria",
  ];
  const found = [];
  for (const f of known) {
    if (text.includes(f)) found.push(f === "Sword of Convallaria" ? "SoC" : f);
  }
  return [...new Set(found)].slice(0, 4);
}

/** Pull skill-ish lines: Name followed by Cost/CD patterns */
function extractSkills(text) {
  const skills = [];
  const seen = new Set();

  // Pattern: **SkillName** ... Cost: N / CD: N
  const re =
    /([A-Z][A-Za-z0-9'’\- ]{2,40}?)\s*(?:\[Skill\]|\[Basic Attack\]|\[Reaction\]|\[Passive\]|\[Aura\])?\s*(?:Cost:\s*([\d\-—]+|N\/A|-)?\s*\/?\s*CD:\s*([\d\-—]+|N\/A|-)?)/gi;

  let m;
  while ((m = re.exec(text))) {
    const name = m[1].trim().replace(/\s+/g, " ");
    if (name.length < 3 || name.length > 42) continue;
    if (/^(The|Best|List|Last|Table|Skill|Role|Review)/i.test(name)) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const kindHint = (m[0].match(/\[([^\]]+)\]/) || [])[1] || "";
    let kind = "Active";
    if (/basic/i.test(kindHint)) kind = "Basic";
    else if (/reaction/i.test(kindHint)) kind = "Reaction";
    else if (/passive/i.test(kindHint)) kind = "Passive";
    else if (/aura/i.test(kindHint)) kind = "Aura";

    skills.push({
      name,
      kind,
      nrg: m[2] && m[2] !== "N/A" ? String(m[2]) : undefined,
      cd: m[3] && m[3] !== "N/A" ? String(m[3]) : undefined,
      description: "",
      note: "Extracted from public guide HTML",
      priority: 3,
    });
  }

  // Fallback: Priority Skills section bullets
  const prio = text.match(
    /Priority Skills([\s\S]{0,4000}?)(?:Secondary Priorities|Recommended Gear|Equipable|$)/i,
  );
  if (prio) {
    const chunk = prio[1];
    const names = chunk.match(
      /\b([A-Z][A-Za-z0-9'’\-\/ ]{2,36})\b(?=\s*★|\s*\*+|<\/)/g,
    );
    // simpler split by star marks in plain text
    const starParts = chunk.split(/★+/);
    for (const part of starParts) {
      const nm = part.match(
        /([A-Z][A-Za-z][A-Za-z0-9'’\-\/ ]{1,36})\s*$/,
      );
      // look at start of segment after previous
    }
    const lines = chunk.match(
      /([A-Z][A-Za-z0-9'’\-\/ ]{2,40})\s{1,3}(?:A |An |The |\(|\-)/g,
    );
    if (lines) {
      for (const line of lines.slice(0, 12)) {
        const name = line
          .replace(/\s{1,3}(?:A |An |The |\(|\-).*$/, "")
          .trim();
        if (name.length < 3 || seen.has(name.toLowerCase())) continue;
        if (/Priority|Skill|Recommended|Secondary/i.test(name)) continue;
        seen.add(name.toLowerCase());
        skills.push({
          name,
          kind: "Active",
          note: "Priority section extract",
          priority: 4,
          description: "",
        });
      }
    }
  }

  // Named known skills hard patterns
  const knownPhrases = [
    "Hidden Thorn",
    "Eerie Footwork",
    "Omen of Death",
    "Wipe Out",
    "Perfect Assassin",
    "Sword - Dawnlight",
    "Battle Flag of Convallaria",
    "Convallaria Swordplay",
    "Caged Reverie",
    "Thousand-Mile Echo",
    "Inner Light",
    "Energy Wave",
    "Healing Spell",
    "Seed of Wisdom",
    "Declaration of Conquest",
    "Verdict - Solo Carry",
    "King's Fighting Spirit",
    "Iron Pot Stew",
    "Cocoa's Treasure Chest",
    "Assisting Cover",
    "Shadow Blitz",
  ];
  for (const name of knownPhrases) {
    if (text.includes(name) && !seen.has(name.toLowerCase())) {
      seen.add(name.toLowerCase());
      skills.push({
        name,
        kind: guessKind(name),
        note: "Name confirmed in page text",
        priority: 4,
        description: "",
      });
    }
  }

  return skills.slice(0, 16);
}

function guessKind(name) {
  if (/Thorn|Bolt|Bash|Strike|Slash|Cut|Swing|Shot|Pierce|Jab/i.test(name))
    return "Basic";
  if (/Footwork|Cover|Guard|Veil|Matrix|Counter|Step|Insight/i.test(name))
    return "Reaction";
  if (/Omen|Engine|Trait|Passive|Intent/i.test(name)) return "Passive";
  if (/Flag|Aura|Standard|Banner|Lead|Drive/i.test(name)) return "Aura";
  return "Active";
}

function extractBuildHints(text, skills) {
  const names = skills.map((s) => s.name);
  const basic =
    names.find((n) => /Hidden Thorn|Dawnlight|Energy Wave|Slash|Bash/i.test(n)) ||
    names.find((n) => guessKind(n) === "Basic") ||
    "";
  const reaction =
    names.find((n) =>
      /Eerie Footwork|Assisting Cover|Fighting Spirit|Alert|Caged|Matrix|Guard/i.test(
        n,
      ),
    ) || names.find((n) => guessKind(n) === "Reaction") || "";

  const actives = names.filter(
    (n) => n !== basic && n !== reaction && guessKind(n) !== "Basic",
  );

  // Gear names often appear near Weapon / Trinket / Tarot
  const weapon =
    (text.match(
      /Weapon\s+([A-Z][A-Za-z0-9'’ \-]{2,40}?)(?:\s+Trinket|\s+Tarot|$)/i,
    ) || [])[1] ||
    (text.match(
      /\b(Void Stab|Dawnlight|Brutal Axe|Newborn Blade|Denial Hammer|Staff of Iria)\b/,
    ) || [])[0] ||
    "";
  const trinket =
    (text.match(
      /\b(Maverick'?s Cloak|Life Fondness|Great Company[^\n]{0,20}|Cage Mask)\b/i,
    ) || [])[0] || "";
  const tarot =
    (text.match(
      /\b(Verdict of Justice|The Empress|The Star|The Sun|The Moon|Death|The Emperor|Judgement)\b/,
    ) || [])[0] || "";

  return {
    basicAttack: (basic || "").trim(),
    reaction: (reaction || "").trim(),
    skills: actives.slice(0, 5),
    weapon: (weapon || "").trim(),
    trinket: (trinket || "").trim(),
    tarot: (tarot || "").trim(),
  };
}

function extractReviewBlurb(text) {
  const m = text.match(
    /Review\s+[-–—]\s*([^.]{20,220}\.)/i,
  );
  if (m) return m[1].trim();
  const m2 = text.match(
    /(?:specializing in|excels at|is a)([^.]{20,200}\.)/i,
  );
  return m2 ? m2[0].trim() : "";
}

async function processGamewith(target) {
  const url = gamewithUrl(target.id);
  const html = await fetchText(url);
  const rawPath = path.join(RAW_DIR, `gamewith-${target.slug}.html`);
  fs.writeFileSync(rawPath, html, "utf8");

  const text = stripHtml(html);
  const textPath = path.join(RAW_DIR, `gamewith-${target.slug}.txt`);
  fs.writeFileSync(textPath, text, "utf8");

  const skills = extractSkills(text);
  const build = extractBuildHints(text, skills);
  const blurb = extractReviewBlurb(text);

  const doc = emptyCollected(target.slug, target.name);
  doc.source = "public";
  doc.sources = [
    {
      type: "url",
      url,
      fetchedAt: new Date().toISOString(),
      publisher: "gamewith",
    },
  ];
  doc.role = extractRole(text);
  doc.factions = extractFactions(text);
  doc.skills = skills;
  doc.build = build;
  doc.summary = blurb || `${target.name} build notes collected from public EN guides.`;
  doc.confidence = skills.length >= 3 ? "medium" : "low";
  doc.collectedAt = new Date().toISOString();

  const outPath = path.join(OUT_DIR, `${target.slug}.json`);
  // merge with existing if present
  if (fs.existsSync(outPath)) {
    try {
      const prev = JSON.parse(fs.readFileSync(outPath, "utf8"));
      if (prev.source === "client" || prev.confidence === "high") {
        // don't overwrite client-grade data; write side file
        const side = path.join(OUT_DIR, `${target.slug}.public.json`);
        fs.writeFileSync(side, JSON.stringify(doc, null, 2));
        return { slug: target.slug, status: "skipped-client", skills: skills.length };
      }
      doc.pros = prev.pros?.length ? prev.pros : doc.pros;
      doc.howToUse = prev.howToUse || doc.howToUse;
    } catch {
      /* ignore */
    }
  }

  fs.writeFileSync(outPath, JSON.stringify(doc, null, 2));
  return { slug: target.slug, status: "ok", skills: skills.length, url };
}

async function processDotgg(slug) {
  const url = dotggUrl(slug);
  try {
    const html = await fetchText(url);
    const rawPath = path.join(RAW_DIR, `dotgg-${slug}.html`);
    fs.writeFileSync(rawPath, html, "utf8");
    const text = stripHtml(html);
    fs.writeFileSync(path.join(RAW_DIR, `dotgg-${slug}.txt`), text, "utf8");

    const outPath = path.join(OUT_DIR, `${slug}.json`);
    let doc = emptyCollected(slug, slug);
    if (fs.existsSync(outPath)) {
      doc = JSON.parse(fs.readFileSync(outPath, "utf8"));
    }
    doc.sources = doc.sources || [];
    doc.sources.push({
      type: "url",
      url,
      fetchedAt: new Date().toISOString(),
      publisher: "dotgg",
    });
    // append skill names found
    const skills = extractSkills(text);
    const have = new Set((doc.skills || []).map((s) => s.name.toLowerCase()));
    for (const s of skills) {
      if (!have.has(s.name.toLowerCase())) {
        doc.skills = doc.skills || [];
        doc.skills.push(s);
        have.add(s.name.toLowerCase());
      }
    }
    if (doc.source !== "client") doc.source = "public";
    if (doc.confidence !== "high") {
      doc.confidence = (doc.skills?.length || 0) >= 4 ? "medium" : doc.confidence;
    }
    doc.collectedAt = new Date().toISOString();
    fs.writeFileSync(outPath, JSON.stringify(doc, null, 2));
    return { slug, status: "ok", skills: doc.skills?.length || 0 };
  } catch (e) {
    return { slug, status: "error", error: String(e.message || e) };
  }
}

async function main() {
  console.log("SoC Wiki public collector");
  console.log("RAW →", RAW_DIR);
  console.log("OUT →", OUT_DIR);

  const targets = GAMEWITH_TARGETS.slice(0, LIMIT);
  const results = [];

  for (const t of targets) {
    process.stdout.write(`gamewith ${t.slug}… `);
    try {
      const r = await processGamewith(t);
      results.push(r);
      console.log(r.status, `skills=${r.skills}`);
    } catch (e) {
      console.log("error", e.message || e);
      results.push({ slug: t.slug, status: "error", error: String(e.message || e) });
    }
    // be polite
    await new Promise((r) => setTimeout(r, 400));
  }

  for (const slug of DOTGG_SLUGS.slice(0, Math.min(LIMIT, DOTGG_SLUGS.length))) {
    process.stdout.write(`dotgg ${slug}… `);
    const r = await processDotgg(slug);
    results.push(r);
    console.log(r.status, r.skills != null ? `skills=${r.skills}` : r.error || "");
    await new Promise((r) => setTimeout(r, 400));
  }

  const summaryPath = path.join(OUT_DIR, "_summary.json");
  fs.writeFileSync(
    summaryPath,
    JSON.stringify(
      {
        at: new Date().toISOString(),
        results,
        ok: results.filter((r) => r.status === "ok").length,
        errors: results.filter((r) => r.status === "error").length,
      },
      null,
      2,
    ),
  );
  console.log("\nDone. Summary:", summaryPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
