# Google Search Console — socwiki.app

Deploy is live; GSC requires your Google account (cannot be completed from CLI alone).

## Steps

1. Open [Google Search Console](https://search.google.com/search-console)
2. **Add property** → URL prefix → `https://socwiki.app`
3. Verify ownership (pick one):
   - **HTML tag** — add to `src/app/layout.tsx` metadata `verification.google` and redeploy
   - **DNS TXT** — Cloudflare DNS for `socwiki.app` (often easiest)
   - **HTML file** — upload to `public/` and redeploy
4. After verified:
   - Sitemaps → submit `https://socwiki.app/sitemap.xml`
   - Confirm `https://socwiki.app/robots.txt` is readable
5. Optional: also add `https://www.socwiki.app` and set preferred canonical (apex)

## Quick checks after verify

| URL | Expect |
|-----|--------|
| https://socwiki.app/ | 200, SoC Wiki home |
| https://socwiki.app/sitemap.xml | XML urlset |
| https://socwiki.app/robots.txt | Allow + Sitemap line |
| https://socwiki.app/tier-list | Tier list H1 |
| https://socwiki.app/characters/col | Col build page |

## If using HTML meta verification

```ts
// layout.tsx metadata
verification: {
  google: "PASTE_TOKEN_FROM_GSC",
},
```

Then `npm run deploy`.
