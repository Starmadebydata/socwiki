import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Canonical public host — matches SITE_URL in src/lib/site.ts */
const CANONICAL_HOST = "socwiki.app";

/**
 * Edge 301s for host / protocol normalization.
 *
 * Cloudflare zone OAuth (wrangler) only has zone:read, so Dashboard
 * "Always Use HTTPS" + Redirect Rules cannot be set via API from this token.
 * This middleware runs on the Workers deployment and covers:
 *   - https://www.socwiki.app/*  → https://socwiki.app/*
 *   - http://www.socwiki.app/*   → https://socwiki.app/*
 *   - http://socwiki.app/*       → https://socwiki.app/*
 *
 * Path + query string are preserved.
 */
export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? "";
  const host = hostHeader.split(":")[0].toLowerCase();

  // Prefer proxy headers (Cloudflare / OpenNext); fall back to URL protocol.
  const forwardedProto = (
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(":", "")
  ).toLowerCase();

  // Only touch production zone hosts — leave workers.dev / localhost alone
  const isProdHost =
    host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;
  if (!isProdHost) {
    return NextResponse.next();
  }

  const isWww = host === `www.${CANONICAL_HOST}`;
  const isHttp = forwardedProto === "http";
  if (!isWww && !isHttp) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";
  url.host = CANONICAL_HOST;

  return NextResponse.redirect(url, 301);
}

export const config = {
  // All paths (including assets) so www never serves a second origin
  matcher: ["/:path*"],
};
