/** Site-wide constants for SoC Wiki (socwiki.app) */

export const SITE_NAME = "SoC Wiki";
export const SITE_FULL_NAME = "Sword of Convallaria Wiki";
export const SITE_URL = "https://socwiki.app";
export const SITE_DESCRIPTION =
  "Community database for Sword of Convallaria (SoC): character builds, skill trees, tier lists, weapons, tarots, and team comps. Updated for the latest banners.";

export const TITLE_SUFFIX = "Sword of Convallaria Wiki";

export function pageTitle(topic: string) {
  return `${topic} - ${TITLE_SUFFIX}`;
}
