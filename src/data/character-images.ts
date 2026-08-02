/** Auto-generated / device-captured character images */

export type CharacterImageSet = {
  portrait: string;
  art?: string;
  /** Full-body battle sprite from unit deployment tray */
  sprite?: string;
  /** In-combat HUD face crop */
  combat?: string;
};

export const CHARACTER_IMAGES: Record<string, CharacterImageSet> = {
  "crimson-falcon": {
    portrait: "/characters/crimson-falcon.webp",
    art: "/characters/crimson-falcon-art.webp",
    sprite: "/characters/crimson-falcon-sprite.webp",
  },
  "ka-archer": {
    portrait: "/characters/ka-archer.webp",
    art: "/characters/ka-archer-art.webp",
    sprite: "/characters/ka-archer-sprite.webp",
  },
  "ka-fire-conjurer": {
    portrait: "/characters/ka-fire-conjurer.webp",
    art: "/characters/ka-fire-conjurer-art.webp",
    sprite: "/characters/ka-fire-conjurer-sprite.webp",
  },
  "ka-light-conjurer": {
    portrait: "/characters/ka-light-conjurer.webp",
    art: "/characters/ka-light-conjurer-art.webp",
    sprite: "/characters/ka-light-conjurer-sprite.webp",
  },
  "knighted-pikeman": {
    portrait: "/characters/knighted-pikeman.webp",
    art: "/characters/knighted-pikeman-art.webp",
    sprite: "/characters/knighted-pikeman-sprite.webp",
  },
  maitha: {
    portrait: "/characters/maitha.webp",
    art: "/characters/maitha-art.webp",
    sprite: "/characters/maitha-sprite.webp",
    combat: "/characters/maitha-combat.webp",
  },
  "outlaw-axeman": {
    portrait: "/characters/outlaw-axeman.webp",
    art: "/characters/outlaw-axeman-art.webp",
  },
  "recruited-assassin": {
    portrait: "/characters/recruited-assassin.webp",
    art: "/characters/recruited-assassin-art.webp",
  },
  "recruited-guard": {
    portrait: "/characters/recruited-guard.webp",
    art: "/characters/recruited-guard-art.webp",
  },
  "recruited-pikeman": {
    portrait: "/characters/recruited-pikeman.webp",
    art: "/characters/recruited-pikeman-art.webp",
  },
  wisekath: {
    portrait: "/characters/wisekath-combat.webp",
    art: "/characters/wisekath-art.webp",
    combat: "/characters/wisekath-combat.webp",
  },
};

export function getCharacterImage(slug: string): CharacterImageSet | undefined {
  return CHARACTER_IMAGES[slug];
}

export function hasCharacterPortrait(slug: string): boolean {
  return Boolean(CHARACTER_IMAGES[slug]?.portrait);
}
