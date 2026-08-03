/**
 * Post-OpenNext patch: inject apex/www + http→https 301 at the Worker edge
 * before Next middleware. Survives OpenNext regenerating .open-next/worker.js.
 *
 * www is primarily handled by workers/www-redirect; this covers apex http and
 * any residual www traffic that still hits the main Worker.
 */
import fs from "node:fs";
import path from "node:path";

const workerPath = path.join(process.cwd(), ".open-next", "worker.js");
const marker = "/* CANONICAL_HOST_REDIRECT */";

const needle =
  "async fetch(request, env, ctx) {\n        return runWithCloudflareRequestContext(request, env, ctx, async () => {";

const inject = `async fetch(request, env, ctx) {
        ${marker}
        // Edge 301: http/* and residual www → https://socwiki.app
        {
            const u = new URL(request.url);
            const host = u.hostname.toLowerCase();
            const isWww = host === "www.socwiki.app";
            const isHttp = u.protocol === "http:";
            let cfHttp = false;
            const vis = request.headers.get("cf-visitor");
            if (vis) {
                try { cfHttp = JSON.parse(vis).scheme === "http"; } catch { /* ignore */ }
            }
            if ((host === "socwiki.app" || isWww) && (isHttp || cfHttp || isWww)) {
                u.protocol = "https:";
                u.hostname = "socwiki.app";
                u.port = "";
                return new Response(null, {
                    status: 301,
                    headers: {
                        Location: u.toString(),
                        "Cache-Control": "public, max-age=3600, s-maxage=86400",
                    },
                });
            }
        }
        return runWithCloudflareRequestContext(request, env, ctx, async () => {`;

if (!fs.existsSync(workerPath)) {
  console.error(`patch-canonical-redirect: missing ${workerPath}`);
  process.exit(1);
}

let source = fs.readFileSync(workerPath, "utf8");
if (source.includes(marker)) {
  console.log("patch-canonical-redirect: already applied");
  process.exit(0);
}
if (!source.includes(needle)) {
  console.error("patch-canonical-redirect: worker.js shape changed; update script");
  process.exit(1);
}

fs.writeFileSync(workerPath, source.replace(needle, inject));
console.log("patch-canonical-redirect: applied edge 301 to .open-next/worker.js");
