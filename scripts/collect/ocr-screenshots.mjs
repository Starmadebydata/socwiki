#!/usr/bin/env node
/**
 * OCR screenshots from content/raw/screenshots into content/collected.
 *
 * Naming: {slug}.png | {slug}-skills.png | {slug}-build.png | {slug}-1.png
 * Requires: tesseract CLI on PATH
 *
 * Usage: node scripts/collect/ocr-screenshots.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { emptyCollected, slugifyName } from "./schema.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const SHOT_DIR = path.join(ROOT, "content/raw/screenshots");
const OUT_DIR = path.join(ROOT, "content/collected");
const OCR_DIR = path.join(ROOT, "content/raw/ocr");

fs.mkdirSync(SHOT_DIR, { recursive: true });
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.mkdirSync(OCR_DIR, { recursive: true });

function hasTesseract() {
  try {
    execFileSync("tesseract", ["--version"], { stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function ocrImage(imgPath) {
  const base = path.basename(imgPath, path.extname(imgPath));
  const outBase = path.join(OCR_DIR, base);
  execFileSync(
    "tesseract",
    [imgPath, outBase, "-l", "eng", "--psm", "6"],
    { stdio: "pipe" },
  );
  const txtPath = `${outBase}.txt`;
  return fs.readFileSync(txtPath, "utf8");
}

function parseSlug(filename) {
  // col.png, col-skills.png, sp-inanna-2.png
  const base = filename.replace(/\.(png|jpg|jpeg|webp)$/i, "");
  const m = base.match(/^([a-z0-9-]+?)(?:-(?:skills?|build|gear|stats|\d+))?$/i);
  return m ? m[1].toLowerCase() : slugifyName(base);
}

function extractSkillishLines(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  const skills = [];
  for (const line of lines) {
    // Cost 2 CD 3 patterns
    const m = line.match(
      /^(.{3,40}?)\s+(?:Cost|NRG|CD)[:\s]*(\d+)?/i,
    );
    if (m) {
      skills.push({
        name: m[1].replace(/[^A-Za-z0-9'’ \-]/g, "").trim(),
        nrg: m[2],
        note: "OCR line",
        description: line,
        priority: 3,
      });
      continue;
    }
    if (
      /^[A-Z][A-Za-z0-9'’ \-]{2,36}$/.test(line) &&
      !/^(Level|Skill|Attack|Defense|Character|Back)$/i.test(line)
    ) {
      skills.push({
        name: line,
        note: "OCR title-like line",
        description: "",
        priority: 2,
      });
    }
  }
  // dedupe
  const seen = new Set();
  return skills.filter((s) => {
    const k = s.name.toLowerCase();
    if (!s.name || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function main() {
  if (!hasTesseract()) {
    console.error("tesseract not found. Install: brew install tesseract");
    process.exit(1);
  }

  const files = fs
    .readdirSync(SHOT_DIR)
    .filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));

  if (files.length === 0) {
    console.log("No screenshots in", SHOT_DIR);
    console.log(
      "Drop files named like: col-skills.png, sp-inanna-build.png, taair.png",
    );
    // write placeholder readme
    const tip = path.join(SHOT_DIR, "README.txt");
    if (!fs.existsSync(tip)) {
      fs.writeFileSync(
        tip,
        [
          "Put client screenshots here.",
          "Naming: {slug}.png | {slug}-skills.png | {slug}-build.png",
          "Examples: col-skills.png, sp-inanna-1.png, taair-build.png",
          "Then run: npm run collect:ocr",
          "",
        ].join("\n"),
      );
    }
    return;
  }

  console.log(`OCR ${files.length} file(s)…`);
  const bySlug = new Map();

  for (const f of files) {
    const slug = parseSlug(f);
    const imgPath = path.join(SHOT_DIR, f);
    process.stdout.write(`  ${f} → ${slug}… `);
    try {
      const text = ocrImage(imgPath);
      const list = bySlug.get(slug) || [];
      list.push({ file: f, text });
      bySlug.set(slug, list);
      console.log("ok", text.split(/\n/).filter(Boolean).length, "lines");
    } catch (e) {
      console.log("fail", e.message || e);
    }
  }

  for (const [slug, parts] of bySlug) {
    const outPath = path.join(OUT_DIR, `${slug}.json`);
    let doc = emptyCollected(slug, slug);
    if (fs.existsSync(outPath)) {
      try {
        doc = JSON.parse(fs.readFileSync(outPath, "utf8"));
      } catch {
        /* keep empty */
      }
    }

    doc.source = "ocr";
    doc.confidence = "medium";
    doc.sources = doc.sources || [];
    const allText = parts.map((p) => p.text).join("\n\n");
    for (const p of parts) {
      doc.sources.push({
        type: "screenshot",
        path: `content/raw/screenshots/${p.file}`,
        ocrAt: new Date().toISOString(),
      });
    }

    const skills = extractSkillishLines(allText);
    const have = new Set((doc.skills || []).map((s) => s.name.toLowerCase()));
    doc.skills = doc.skills || [];
    for (const s of skills) {
      if (!have.has(s.name.toLowerCase())) {
        doc.skills.push(s);
        have.add(s.name.toLowerCase());
      }
    }

    // stash raw OCR
    doc.ocrText = allText.slice(0, 12000);
    doc.collectedAt = new Date().toISOString();
    if ((doc.skills?.length || 0) >= 4) doc.confidence = "medium";

    fs.writeFileSync(outPath, JSON.stringify(doc, null, 2));
    console.log(`wrote ${outPath} skills=${doc.skills.length}`);
  }
}

main();
