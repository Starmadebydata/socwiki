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

export function pageTitle(topic: string) {
  return `${topic} - ${TITLE_SUFFIX}`;
}
