# SoC Wiki — socwiki.app

Sword of Convallaria community database (builds, tier lists, tools).

- **Live:** https://socwiki.app · https://www.socwiki.app  
- **GitHub:** https://github.com/Starmadebydata/socwiki  
- **Stack:** Next.js 16 · Tailwind 4 · OpenNext · Cloudflare Workers  
- **Product docs:** [docs/PRD_AND_SEO.md](./docs/PRD_AND_SEO.md)  
- **Deploy:** [docs/DEPLOY_CLOUDFLARE.md](./docs/DEPLOY_CLOUDFLARE.md)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Cloudflare Workers

```bash
npx wrangler login
npm run deploy
```

Domain **socwiki.app** is already routed on Worker `socwiki`.

### CI / push-to-deploy

**Primary:** Cloudflare Workers Builds（仓库已在 Dashboard 绑定）  
- 推送到 `main` → CF 自动 build & deploy  
- 建议 Deploy command：`npm run deploy` · Production branch：`main`

**Fallback:** GitHub Actions（已关闭 push 触发，仅 `workflow_dispatch` 备用）

Details: [docs/DEPLOY_CLOUDFLARE.md](./docs/DEPLOY_CLOUDFLARE.md)

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Next.js local dev |
| `npm run build` | Next production build |
| `npm run preview` | OpenNext build + Workers runtime locally |
| `npm run deploy` | Build and deploy to Cloudflare |

## Project layout

```
src/app/           App Router pages (hub, characters, tier-list, tools…)
src/data/          Seed character database
src/components/    Navbar, search, badges
src/lib/site.ts    SITE_URL / brand constants
wrangler.jsonc     Worker name `socwiki` + domain routes
```
