# Google Search Console checklist — socwiki.app

> Site code is ready (sitemap, robots, canonical, FAQ/Breadcrumb JSON-LD).  
> **You** complete GSC in the browser with the Google account that owns the property.

## 1. Property setup (one-time)

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property → **URL prefix** → `https://socwiki.app`.
3. Prefer **Domain** property `socwiki.app` if you can verify via Cloudflare DNS (covers www + bare).

### Verification options

| Method | How |
|--------|-----|
| **DNS TXT** (best) | Cloudflare → DNS → TXT `google-site-verification=…` from GSC |
| **HTML file** | Upload the file GSC gives you under `public/` and redeploy |
| **HTML meta tag** | Paste token into `src/lib/site.ts` as `GOOGLE_SITE_VERIFICATION` (wired in root layout) |

After DNS verifies, you can remove temporary HTML file methods.

## 2. Submit sitemap

1. GSC → **Sitemaps** → add: `https://socwiki.app/sitemap.xml`
2. Confirm status becomes **Success** within 24–48h.
3. Cross-check live:

```bash
curl -sI https://socwiki.app/sitemap.xml
curl -s https://socwiki.app/robots.txt
```

Expected: `200`, `robots.txt` lists the same sitemap URL, host `https://socwiki.app`.

## 3. URL inspection (first week)

Inspect and **Request indexing** for:

| Priority | URL |
|----------|-----|
| P0 | `/` |
| P0 | `/tier-list` |
| P0 | `/tier-list/reroll` |
| P0 | `/codes` |
| P0 | `/guides/beginner` |
| P0 | `/tools/team-builder` |
| P1 | `/guides`, `/teams`, `/weapons`, `/tarots`, `/characters` |
| P1 | Top 10 character pages you care about |

Do not bulk-request hundreds of URLs on day one; let the sitemap crawl first.

## 4. Coverage & enhancements (ongoing)

Weekly for 4 weeks, then monthly:

- **Pages** → Indexed vs Not indexed (soft 404, excluded by noindex, crawled not indexed).
- **Experience** → Core Web Vitals when data appears.
- **Enhancements** → FAQ / Breadcrumbs (if reported).
- **Links** → External + internal once ranking starts.

## 5. www / HTTPS hygiene

| Check | Expected |
|-------|----------|
| `http://socwiki.app` | **301** → `https://socwiki.app` |
| `http://www.socwiki.app` | **301** → `https://socwiki.app` |
| `https://www.socwiki.app` | **301** → `https://socwiki.app` |
| Canonical tags | Absolute `https://socwiki.app/...` |

**Implemented on Cloudflare (2026-08-03):**

| Path | Mechanism |
|------|-----------|
| `www.socwiki.app/*` | Worker **`socwiki-www-redirect`** → 301 `https://socwiki.app$uri` |
| `http://socwiki.app/*` | Main Worker edge patch (`scripts/patch-canonical-redirect.mjs`) + `src/middleware.ts` |
| HTTPS apex | Served by main Worker `socwiki` (`socwiki.app/*` only) |

Wrangler OAuth is `zone:read` only — Dashboard **Redirect Rules** / **Always Use HTTPS** cannot be toggled via API with this token. Worker-level 301s cover the same SEO outcome.

**Deploy notes:** Cloudflare Workers Builds command is `npm run deploy`, which:

1. `opennextjs-cloudflare build`
2. `scripts/patch-canonical-redirect.mjs` (strips unsafe apex self-redirects; www is separate Worker)
3. `opennextjs-cloudflare deploy` (main Worker, `socwiki.app/*` only)
4. `wrangler deploy -c workers/www-redirect` (`www.socwiki.app/*` → apex 301)

**Still Dashboard-only (zone:write required):**

1. SSL/TLS → Edge Certificates → **Always Use HTTPS = On**
2. Caching → Configuration → **Purge Everything** after major SEO deploys if edges pin old 301/HTML
3. Search Console verify + submit `https://socwiki.app/sitemap.xml`


## 6. AI / crawler notes

- `robots.txt` allows all user-agents and points at sitemap.
- `public/llms.txt` summarizes the site for AI systems.
- Do **not** block GPTBot / ClaudeBot / PerplexityBot unless you have a legal reason.

## 7. After each content deploy

1. Confirm deploy on Cloudflare Workers Builds is green.
2. Spot-check 3 changed URLs return 200.
3. Optional: URL Inspection → Request indexing for major new guides or new limited characters.

## 8. Owner checklist (copy-paste)

- [ ] Domain or URL-prefix property verified
- [ ] Sitemap submitted and Success
- [ ] Homepage + tier-list + codes + beginner requested
- [ ] www vs bare single-host decision locked
- [ ] First 7-day Pages report reviewed
- [ ] (Optional) Bing Webmaster Tools same sitemap

---

**Code helpers in this repo**

- `src/app/sitemap.ts` — dynamic sitemap
- `src/app/robots.ts` — robots + sitemap host
- `public/llms.txt` — AI-oriented site map
- `src/lib/site.ts` — `SITE_URL`, optional `GOOGLE_SITE_VERIFICATION`
