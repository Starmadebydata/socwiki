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

  // Only touch production zone hosts — leave workers.dev / localhost alone
  const isProdHost =
    host === CANONICAL_HOST || host === `www.${CANONICAL_HOST}`;
  if (!isProdHost) {
    return NextResponse.next();
  }

  // Detect HTTP carefully: CF may omit x-forwarded-proto or set https after edge TLS.
  // Cf-Visitor is the reliable Cloudflare signal: {"scheme":"http"|"https"}
  let scheme = (
    request.headers.get("x-forwarded-proto") ??
    request.nextUrl.protocol.replace(":", "")
  ).toLowerCase();
  const cfVisitor = request.headers.get("cf-visitor");
  if (cfVisitor) {
    try {
      const parsed = JSON.parse(cfVisitor) as { scheme?: string };
      if (parsed.scheme) scheme = parsed.scheme.toLowerCase();
    } catch {
      /* ignore */
    }
  }
  // Some proxies send "http,http" or multi-values
  if (scheme.includes(",")) {
    scheme = scheme.split(",")[0].trim();
  }

  const isWww = host === `www.${CANONICAL_HOST}`;
  const isHttp = scheme === "http";
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
