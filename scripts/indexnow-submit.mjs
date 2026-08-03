/**
 * Submit URLs to IndexNow (Bing, Yandex, Seznam, Naver, …).
 *
 * Usage:
 *   node scripts/indexnow-submit.mjs              # all sitemap URLs (batched)
 *   node scripts/indexnow-submit.mjs --urls=https://socwiki.app/,https://socwiki.app/codes
 *   node scripts/indexnow-submit.mjs --priority     # hub URLs only
 *
 * Key must be live at https://socwiki.app/{key}.txt before first submit.
 * @see https://www.bing.com/indexnow/getstarted
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SITE = "https://socwiki.app";
const HOST = "socwiki.app";

// Prefer env, then scripts/indexnow.key, then constant in site.ts default
function loadKey() {
  if (process.env.INDEXNOW_KEY?.trim()) return process.env.INDEXNOW_KEY.trim();
  const keyFile = path.join(__dirname, "indexnow.key");
  if (fs.existsSync(keyFile)) return fs.readFileSync(keyFile, "utf8").trim();
  return "45d7f3435aced808778ed0f7305b5bd7";
}

const KEY = loadKey();
const KEY_LOCATION = `${SITE}/${KEY}.txt`;

const PRIORITY = [
  `${SITE}/`,
  `${SITE}/tier-list`,
  `${SITE}/tier-list/reroll`,
  `${SITE}/codes`,
  `${SITE}/guides`,
  `${SITE}/guides/beginner`,
  `${SITE}/characters`,
  `${SITE}/factions`,
  `${SITE}/factions/iria`,
  `${SITE}/factions/soc-faction`,
  `${SITE}/tools/team-builder`,
  `${SITE}/teams`,
  `${SITE}/weapons`,
  `${SITE}/sitemap.xml`,
];

function parseArgs(argv) {
  const out = { urls: null, priority: false };
  for (const a of argv) {
    if (a === "--priority") out.priority = true;
    else if (a.startsWith("--urls=")) {
      out.urls = a
        .slice("--urls=".length)
        .split(",")
        .map((u) => u.trim())
        .filter(Boolean);
    }
  }
  return out;
}

async function fetchSitemapUrls() {
  // Prefer live sitemap; fall back to static route list if offline
  try {
    const res = await fetch(`${SITE}/sitemap.xml`, {
      headers: { "User-Agent": "SoCWiki-IndexNow/1.0" },
    });
    if (!res.ok) throw new Error(`sitemap HTTP ${res.status}`);
    const xml = await res.text();
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (locs.length) return locs;
  } catch (e) {
    console.warn("sitemap fetch failed, using priority list only:", e.message);
  }
  return PRIORITY;
}

async function submitBatch(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };
  // api.indexnow.org fans out to participating engines (incl. Bing)
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "SoCWiki-IndexNow/1.0",
    },
    body: JSON.stringify(body),
  });
  const text = await res.text().catch(() => "");
  return { status: res.status, text: text.slice(0, 300) };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log("IndexNow key:", KEY);
  console.log("Key location:", KEY_LOCATION);

  // Verify key file is public
  try {
    const probe = await fetch(KEY_LOCATION, { method: "GET" });
    const body = (await probe.text()).trim();
    if (!probe.ok || body !== KEY) {
      console.error(
        `Key file not live or mismatched (HTTP ${probe.status}, body="${body.slice(0, 40)}"). Deploy public/${KEY}.txt first.`,
      );
      process.exit(1);
    }
    console.log("Key file OK");
  } catch (e) {
    console.error("Could not fetch key file:", e.message);
    process.exit(1);
  }

  let urls = args.urls;
  if (!urls) {
    urls = args.priority ? PRIORITY : await fetchSitemapUrls();
  }
  // IndexNow max 10,000 URLs per request; we batch by 100 for politeness
  const unique = [...new Set(urls)].filter((u) => u.startsWith(SITE));
  console.log(`Submitting ${unique.length} URL(s)…`);

  const batchSize = 100;
  let ok = 0;
  let fail = 0;
  for (let i = 0; i < unique.length; i += batchSize) {
    const batch = unique.slice(i, i + batchSize);
    const { status, text } = await submitBatch(batch);
    // 200 / 202 accepted
    if (status === 200 || status === 202) {
      ok += batch.length;
      console.log(`  batch ${i / batchSize + 1}: HTTP ${status} (${batch.length} urls)`);
    } else {
      fail += batch.length;
      console.error(`  batch ${i / batchSize + 1}: HTTP ${status} ${text}`);
    }
  }
  console.log(`Done. accepted≈${ok} failed≈${fail}`);
  if (fail && !ok) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
