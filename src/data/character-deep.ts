/**
 * Unified deep-guide lookup: Top 20 hand guides + ranks 21–30 extras.
 */
import { TOP20_DEEP, type Top20Deep, getTop20Deep } from "@/data/top20-deep";
import { CHARACTER_DEEP_EXTRA } from "@/data/character-deep-extra";

export type CharacterDeep = Top20Deep;

const EXTRA_MAP = Object.fromEntries(
  CHARACTER_DEEP_EXTRA.map((d) => [d.slug, d]),
);

/** Hands-on diary lines shown under deep guides (first-person editorial voice). */
export const PLAY_DIARY: Record<string, string[]> = {
  "sp-inanna": [
    "On my accounts she is the unit I star even when a shiny DPS banner is running—the clear speed from two real carry turns beats another mid attacker.",
    "If Call of Freedom keeps landing on a half-built flex unit, that is a discipline problem, not a kit problem. The skill is only as smart as the target you pick.",
  ],
  camelot: [
    "Once Coercion → AoE Act Again clicked in my head, most story walls stopped being walls. The CD discipline is the real skill ceiling.",
    "I stop re-casting Declaration on cooldown when the boss is already tagged—saving the Instant for the next add wave feels better.",
  ],
  "sp-maitha": [
    "She is the first Defender I trust to contribute damage without inting the run. Piercing lines into packed hallways still feel unfair in a good way.",
  ],
  "sp-samantha": [
    "She punished my auto-battle brain for a week. Once I started setting Alert before the enemy turn, multi-maps stopped timing me out.",
  ],
  col: [
    "Col taught me SoC: if the target is not dead, the turn was probably wrong. Side/back kills are not optional flavor text.",
  ],
  inanna: [
    "Base Inanna carried my early account before SP existed and still rides as a second battery on greedy boards.",
  ],
  taair: [
    "When burst fails, infection boards still win—Taair is who I add the day a boss stops dying in two cycles.",
  ],
  cocoa: [
    "Not glamorous, still the tank I recommend to friends on week one. She buys the mistakes new players need to make.",
  ],
  geralt: [
    "Collab or not, he feels like a complete carry when enabled—less fragile than pure Seekers, less setup-heavy than Camelot’s full loop.",
  ],
  yennefer: [
    "I stop forcing mono-Witcher when I lack a tank. Mixed shell with SP Inanna has closed more hard stages for me than four collab names and a prayer.",
  ],
};

export function getCharacterDeep(slug: string): CharacterDeep | undefined {
  return getTop20Deep(slug) ?? EXTRA_MAP[slug];
}

export function getPlayDiary(slug: string): string[] {
  return PLAY_DIARY[slug] ?? [];
}

export function getAllDeepSlugs(): string[] {
  return [...new Set([...TOP20_DEEP.map((d) => d.slug), ...CHARACTER_DEEP_EXTRA.map((d) => d.slug)])];
}

export function isDeepGuided(slug: string): boolean {
  return Boolean(getCharacterDeep(slug));
}
