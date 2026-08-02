# Deploy SoC Wiki to Cloudflare Workers (`socwiki.app`)

Stack: **Next.js 16 + OpenNext (`@opennextjs/cloudflare`) + Workers Assets**.

## Prerequisites

1. Domain **socwiki.app** on Cloudflare (DNS zone active).
2. Node 20+ and npm.
3. Logged into Wrangler: `npx wrangler login`

## Local development

```bash
cd swordofconvallaria
npm install
npm run dev          # Next.js dev server (fast HMR)
```

Workers-accurate preview:

```bash
npm run preview      # OpenNext build + wrangler dev
```

## First deploy

```bash
npm run deploy
```

This runs `opennextjs-cloudflare build` then `opennextjs-cloudflare deploy`.

Worker name in `wrangler.jsonc`: **`socwiki`**.

## Attach custom domain

### Option A — Dashboard (recommended first time)

1. Cloudflare Dashboard → **Workers & Pages** → **socwiki**
2. **Settings** → **Domains & Routes**
3. **Add** → `socwiki.app` and optionally `www.socwiki.app`
4. Ensure zone DNS is on Cloudflare (orange-cloud or CF-managed)

### Option B — `wrangler.jsonc` routes

This repo already includes:

```jsonc
"routes": [
  { "pattern": "socwiki.app/*", "zone_name": "socwiki.app" },
  { "pattern": "www.socwiki.app/*", "zone_name": "socwiki.app" }
]
```

If deploy fails on routes (zone not found / permissions), remove the `routes` block temporarily, deploy, then attach domain via Dashboard.

### www → apex

In zone **socwiki.app** → Rules / Redirects:

- `www.socwiki.app/*` → `https://socwiki.app/$1` (301)

## Post-deploy SEO

1. [Google Search Console](https://search.google.com/search-console) → add `https://socwiki.app`
2. Submit `https://socwiki.app/sitemap.xml`
3. Verify `https://socwiki.app/robots.txt`
4. Set preferred domain (apex)

## CI (optional)

Workers Builds or GitHub Actions:

```bash
npm ci
npm run deploy
```

Store Cloudflare API token as secret; ensure build env has no secrets needed for static seed data.

## Notes

- `compatibility_flags` must include `nodejs_compat`.
- Image optimization uses the `IMAGES` binding in `wrangler.jsonc`.
- Caching can later use R2 via `open-next.config.ts` (see OpenNext Cloudflare docs).
- Site constants: `src/lib/site.ts` (`SITE_URL = https://socwiki.app`).

## GitHub + auto deploy

Repo: https://github.com/Starmadebydata/socwiki

### Primary — Cloudflare Workers Builds ✅ (已绑定)

1. Dashboard: [Workers → socwiki → Settings → Builds](https://dash.cloudflare.com/9960510abfc7d4b64dd5847d2565462b/workers/services/view/socwiki/settings)
2. 推荐配置：
   - **Production branch:** `main`
   - **Root directory:** `/`
   - **Build command:** 留空（`npm run deploy` 内含 build）
   - **Deploy command:** `npm run deploy`
3. Worker 名须与 `wrangler.jsonc` 的 `name` 一致：`socwiki`
4. 推送到 `main` 即触发构建

若 Build 失败，在 Deployments / Build history 看日志；常见原因是 Deploy command 写成了 `wrangler deploy` 而不是 `npm run deploy`（OpenNext 需要先打包）。

### Fallback — GitHub Actions（已关闭 push）

`.github/workflows/deploy.yml` 仅保留 `workflow_dispatch`，避免与 Workers Builds 双重部署。  
需要时：`gh workflow enable "Deploy to Cloudflare Workers"` 并恢复 `on.push`。

## Official docs

- [Next.js on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/nextjs/)
- [OpenNext Cloudflare](https://opennext.js.org/cloudflare)
- [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
