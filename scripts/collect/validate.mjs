#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateCollected } from "./schema.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "../../content/collected");

const files = fs
  .readdirSync(OUT_DIR)
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"));

let errors = 0;
let warnings = 0;

for (const f of files) {
  const doc = JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), "utf8"));
  const r = validateCollected(doc);
  const flag = r.ok ? "OK " : "ERR";
  console.log(`${flag} ${f} source=${doc.source || "?"} skills=${doc.skills?.length || 0} conf=${doc.confidence || "?"}`);
  for (const e of r.errors) {
    console.log(`     error: ${e}`);
    errors++;
  }
  for (const w of r.warnings) {
    console.log(`     warn: ${w}`);
    warnings++;
  }
}

console.log(`\n${files.length} files, ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
