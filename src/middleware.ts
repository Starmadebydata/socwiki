import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Canonical public host — matches SITE_URL in src/lib/site.ts */
const CANONICAL_HOST = "socwiki.app";

/**
 * Host normalization only.
 *
 * www → apex is primarily handled by the dedicated Worker
 * `socwiki-www-redirect` (route www.socwiki.app/*). This middleware is a
 * safety net if residual www traffic ever hits the main app.
 *
 * Do NOT redirect based on x-forwarded-proto / cf-visitor alone: on this
 * stack those signals can report "http" for real HTTPS requests and create
 * an infinite 301 loop on the apex host.
 *
 * HTTP → HTTPS should be enforced via Cloudflare "Always Use HTTPS" (zone
 * SSL setting) when API tokens allow it; www is already covered by the
 * dedicated redirect Worker which forces https://socwiki.app.
 */
export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? "";
  const host = hostHeader.split(":")[0].toLowerCase();

  // Only canonicalize www → apex. Never touch bare socwiki.app (avoids loops).
  if (host !== `www.${CANONICAL_HOST}`) {
    return NextResponse.next();
  }

  const dest = new URL(request.url);
  dest.protocol = "https:";
  dest.hostname = CANONICAL_HOST;
  dest.port = "";

  const res = NextResponse.redirect(dest.toString(), 301);
  res.headers.set("Cache-Control", "public, max-age=300, s-maxage=300");
  return res;
}

export const config = {
  matcher: ["/:path*"],
};
