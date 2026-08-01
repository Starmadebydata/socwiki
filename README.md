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

- **GitHub Actions:** `.github/workflows/deploy.yml` — set secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`
- **Workers Builds:** Dashboard → Worker `socwiki` → Settings → Builds → Connect this repo  
  Deploy command: `npm run deploy` · branch: `main`

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
