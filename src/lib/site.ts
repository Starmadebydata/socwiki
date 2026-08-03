/** Site-wide constants for SoC Wiki (socwiki.app) */

export const SITE_NAME = "SoC Wiki";
export const SITE_FULL_NAME = "Sword of Convallaria Wiki";
export const SITE_URL = "https://socwiki.app";
export const SITE_DESCRIPTION =
  "Community database for Sword of Convallaria (SoC): character builds, skill trees, tier lists, weapons, tarots, and team comps. Updated for the latest banners.";

export const TITLE_SUFFIX = "Sword of Convallaria Wiki";

/**
 * Optional Google Search Console HTML-tag verification token.
 * Paste the content value from GSC (not the full meta tag). Leave empty if using DNS.
 * See docs/GSC_CHECKLIST.md.
 */
export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";

/** Google Analytics 4 measurement ID (gtag.js). Override via env if needed. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-D1R4M8PKM1";

/**
 * Bing / Yandex IndexNow API key.
 * Public key file: `/{INDEXNOW_KEY}.txt` must serve the key as plain text.
 * @see https://www.bing.com/indexnow/getstarted
 */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY ?? "45d7f3435aced808778ed0f7305b5bd7";

export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

export function pageTitle(topic: string) {
  return `${topic} - ${TITLE_SUFFIX}`;
}
