#!/usr/bin/env node
/**
 * Merge content/collected/*.json into src/data/top20.ts overrides
 * for matching slugs (or print plan).
 *
 * Usage:
 *   node scripts/collect/merge-to-site.mjs
 *   node scripts/collect/merge-to-site.mjs --write
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const COLLECTED = path.join(ROOT, "content/collected");
const OUT_TS = path.join(ROOT, "src/data/collected-overrides.ts");
const WRITE = process.argv.includes("--write");

function loadCollected() {
  return fs
    .readdirSync(COLLECTED)
    .filter((f) => f.endsWith(".json") && !f.startsWith("_") && !f.endsWith(".public.json"))
    .map((f) => {
      const doc = JSON.parse(fs.readFileSync(path.join(COLLECTED, f), "utf8"));
      return doc;
    })
    .filter((d) => d.slug && (d.skills?.length || 0) > 0);
}

function toSkillRows(doc) {
  return (doc.skills || []).map((s) => ({
    name: s.name,
    kind: s.kind || "Active",
    stars: typeof s.priority === "number" ? s.priority : 3,
    nrg: s.nrg || undefined,
    cd: s.cd || undefined,
    note: s.note || "Collected",
    description: s.description || s.note || "",
  }));
}

function main() {
  const docs = loadCollected();
  console.log(`Loaded ${docs.length} collected character files`);

  const eligible = docs.filter(
    (d) => d.confidence === "high" || d.confidence === "medium" || d.source === "client",
  );
  console.log(`Eligible to merge (medium+): ${eligible.length}`);

  for (const d of eligible) {
    console.log(
      ` - ${d.slug.padEnd(16)} source=${d.source} conf=${d.confidence} skills=${d.skills.length} ba=${d.build?.basicAttack || "-"}`,
    );
  }

  if (!WRITE) {
    console.log("\nDry run. Re-run with --write to emit src/data/collected-overrides.ts");
    return;
  }

  // Emit a TS map of partial overrides (skills + build names) for manual review merge
  const lines = [];
  lines.push(`import type { SkillRow } from "@/types/character";`);
  lines.push(``);
  lines.push(`/** Auto-generated from content/collected — review before trusting. */`);
  lines.push(`export type CollectedOverride = {`);
  lines.push(`  skills?: SkillRow[];`);
  lines.push(`  basicAttack?: string;`);
  lines.push(`  reaction?: string;`);
  lines.push(`  skillNames?: string[];`);
  lines.push(`  summary?: string;`);
  lines.push(`  source?: string;`);
  lines.push(`};`);
  lines.push(``);
  lines.push(`export const COLLECTED_OVERRIDES: Record<string, CollectedOverride> = {`);

  for (const d of eligible) {
    const skills = toSkillRows(d);
    lines.push(`  ${JSON.stringify(d.slug)}: {`);
    lines.push(`    source: ${JSON.stringify(d.source)},`);
    if (d.summary) lines.push(`    summary: ${JSON.stringify(d.summary)},`);
    if (d.build?.basicAttack)
      lines.push(`    basicAttack: ${JSON.stringify(d.build.basicAttack)},`);
    if (d.build?.reaction)
      lines.push(`    reaction: ${JSON.stringify(d.build.reaction)},`);
    if (d.build?.skills?.length)
      lines.push(`    skillNames: ${JSON.stringify(d.build.skills)},`);
    lines.push(`    skills: ${JSON.stringify(skills, null, 6).replace(/\n/g, "\n    ")},`);
    lines.push(`  },`);
  }
  lines.push(`};`);
  lines.push(``);

  fs.writeFileSync(OUT_TS, lines.join("\n"));
  console.log("Wrote", OUT_TS);
  console.log("Next: wire into top20 or characters if skills look correct.");
}

main();
