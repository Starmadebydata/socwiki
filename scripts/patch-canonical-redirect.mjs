/**
 * Post-OpenNext patch for .open-next/worker.js
 *
 * IMPORTANT: Do NOT inject apex http→https redirects based on request.url
 * protocol or cf-visitor. On Cloudflare Workers + OpenNext, those signals
 * can be "http" even for client HTTPS and cause infinite 301 loops on
 * https://socwiki.app/* (cached at the edge via Cache-Control).
 *
 * www → apex is handled exclusively by workers/www-redirect.
 * This script is a no-op safety check so npm run deploy keeps working.
 */
import fs from "node:fs";
import path from "node:path";

const workerPath = path.join(process.cwd(), ".open-next", "worker.js");
const badMarker = "/* CANONICAL_HOST_REDIRECT */";

if (!fs.existsSync(workerPath)) {
  console.error(`patch-canonical-redirect: missing ${workerPath}`);
  process.exit(1);
}

let source = fs.readFileSync(workerPath, "utf8");

// Strip any previously injected apex redirect block (idempotent cleanup).
if (source.includes(badMarker)) {
  // Remove the whole injected block between marker and the real return.
  const re =
    /\n\s*\/\* CANONICAL_HOST_REDIRECT \*\/[\s\S]*?return runWithCloudflareRequestContext\(request, env, ctx, async \(\) => \{/;
  if (re.test(source)) {
    source = source.replace(
      re,
      "\n        return runWithCloudflareRequestContext(request, env, ctx, async () => {",
    );
    fs.writeFileSync(workerPath, source);
    console.log(
      "patch-canonical-redirect: removed unsafe apex redirect block from worker.js",
    );
  } else {
    console.warn(
      "patch-canonical-redirect: found marker but could not strip block; inspect worker.js",
    );
    process.exit(1);
  }
} else {
  console.log(
    "patch-canonical-redirect: no unsafe apex block present (www handled by socwiki-www-redirect)",
  );
}
