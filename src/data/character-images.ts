/** Character images: official client extracts preferred, GameWith gacha as fallback. */

export type CharacterImageSet = {
  portrait: string;
  art?: string;
  sprite?: string;
  combat?: string;
  /** true when art/portrait came from official game client assets */
  official?: boolean;
};

export const CHARACTER_IMAGES: Record<string, CharacterImageSet> = {
  "acambe": {
    portrait: "/characters/acambe.webp",
    art: "/characters/acambe-art.webp",
  },
  "afra": {
    portrait: "/characters/afra.webp",
    art: "/characters/afra-art.webp",
  },
  "agatha": {
    portrait: "/characters/agatha.webp",
    art: "/characters/agatha-art.webp",
    official: true,
  },
  "alexei": {
    portrait: "/characters/alexei.webp",
    art: "/characters/alexei-art.webp",
  },
  "anna": {
    portrait: "/characters/anna.webp",
    art: "/characters/anna-art.webp",
  },
  "auguste": {
    portrait: "/characters/auguste.webp",
    art: "/characters/auguste-art.webp",
  },
  "ayishah": {
    portrait: "/characters/ayishah.webp",
    art: "/characters/ayishah-art.webp",
    combat: "/characters/ayishah-combat.webp",
    official: true,
  },
  "beryl": {
    portrait: "/characters/beryl.webp",
    art: "/characters/beryl-art.webp",
    combat: "/characters/beryl-combat.webp",
    official: true,
  },
  "camelot": {
    portrait: "/characters/camelot.webp",
    art: "/characters/camelot-art.webp",
    official: true,
  },
  "caris": {
    portrait: "/characters/caris.webp",
    art: "/characters/caris-art.webp",
  },
  "ciri": {
    portrait: "/characters/ciri.webp",
    art: "/characters/ciri-art.webp",
    official: true,
  },
  "clara": {
    portrait: "/characters/clara.webp",
    art: "/characters/clara-art.webp",
    official: true,
  },
  "cocoa": {
    portrait: "/characters/cocoa.webp",
    art: "/characters/cocoa-art.webp",
  },
  "col": {
    portrait: "/characters/col.webp",
    art: "/characters/col-art.webp",
    official: true,
  },
  "credenza": {
    portrait: "/characters/credenza.webp",
    art: "/characters/credenza-art.webp",
  },
  "crimson-falcon": {
    portrait: "/characters/crimson-falcon.webp",
    art: "/characters/crimson-falcon-art.webp",
    sprite: "/characters/crimson-falcon-sprite.webp",
  },
  "dantalion": {
    portrait: "/characters/dantalion.webp",
    art: "/characters/dantalion-art.webp",
    official: true,
  },
  "edda": {
    portrait: "/characters/edda.webp",
    art: "/characters/edda-art.webp",
  },
  "estra": {
    portrait: "/characters/estra.webp",
    art: "/characters/estra-art.webp",
  },
  "falin": {
    portrait: "/characters/falin.webp",
    art: "/characters/falin-art.webp",
    official: true,
  },
  "faycal": {
    portrait: "/characters/faycal.webp",
    art: "/characters/faycal-art.webp",
    official: true,
  },
  "flavia": {
    portrait: "/characters/flavia.webp",
    art: "/characters/flavia-art.webp",
  },
  "garcia": {
    portrait: "/characters/garcia.webp",
    art: "/characters/garcia-art.webp",
  },
  "geralt": {
    portrait: "/characters/geralt.webp",
    art: "/characters/geralt-art.webp",
    combat: "/characters/geralt-combat.webp",
    official: true,
  },
  "gloria": {
    portrait: "/characters/gloria.webp",
    art: "/characters/gloria-art.webp",
    official: true,
  },
  "guzman": {
    portrait: "/characters/guzman.webp",
    art: "/characters/guzman-art.webp",
  },
  "hasna": {
    portrait: "/characters/hasna.webp",
    art: "/characters/hasna-art.webp",
    official: true,
  },
  "heshan": {
    portrait: "/characters/heshan.webp",
    art: "/characters/heshan-art.webp",
    official: true,
  },
  "homa": {
    portrait: "/characters/homa.webp",
    art: "/characters/homa-art.webp",
  },
  "iggy": {
    portrait: "/characters/iggy.webp",
    art: "/characters/iggy-art.webp",
  },
  "inanna": {
    portrait: "/characters/inanna.webp",
    art: "/characters/inanna-art.webp",
    combat: "/characters/inanna-combat.webp",
    official: true,
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
  "kianshir": {
    portrait: "/characters/kianshir.webp",
    art: "/characters/kianshir-art.webp",
  },
  "kiya": {
    portrait: "/characters/kiya.webp",
    art: "/characters/kiya-art.webp",
  },
  "knighted-pikeman": {
    portrait: "/characters/knighted-pikeman.webp",
    art: "/characters/knighted-pikeman-art.webp",
    sprite: "/characters/knighted-pikeman-sprite.webp",
  },
  "kvare": {
    portrait: "/characters/kvare.webp",
    art: "/characters/kvare-art.webp",
    official: true,
  },
  "layla": {
    portrait: "/characters/layla.webp",
    art: "/characters/layla-art.webp",
  },
  "leonide": {
    portrait: "/characters/leonide.webp",
    art: "/characters/leonide-art.webp",
  },
  "lilywill": {
    portrait: "/characters/lilywill.webp",
    art: "/characters/lilywill-art.webp",
  },
  "lukamar": {
    portrait: "/characters/lukamar.webp",
    art: "/characters/lukamar-art.webp",
  },
  "lutfi": {
    portrait: "/characters/lutfi.webp",
    art: "/characters/lutfi-art.webp",
    official: true,
  },
  "luvata": {
    portrait: "/characters/luvata.webp",
    art: "/characters/luvata-art.webp",
  },
  "magnus": {
    portrait: "/characters/magnus.webp",
    art: "/characters/magnus-art.webp",
    official: true,
  },
  "maitha": {
    portrait: "/characters/maitha.webp",
    art: "/characters/maitha-art.webp",
    sprite: "/characters/maitha-sprite.webp",
    combat: "/characters/maitha-combat.webp",
    official: true,
  },
  "marcille": {
    portrait: "/characters/marcille.webp",
    art: "/characters/marcille-art.webp",
    official: true,
  },
  "miguel": {
    portrait: "/characters/miguel.webp",
    art: "/characters/miguel-art.webp",
  },
  "momo": {
    portrait: "/characters/momo.webp",
    art: "/characters/momo-art.webp",
  },
  "nergal": {
    portrait: "/characters/nergal.webp",
    art: "/characters/nergal-art.webp",
  },
  "nonowill": {
    portrait: "/characters/nonowill.webp",
    art: "/characters/nonowill-art.webp",
    official: true,
  },
  "nungal": {
    portrait: "/characters/nungal.webp",
    art: "/characters/nungal-art.webp",
  },
  "nydia": {
    portrait: "/characters/nydia.webp",
    art: "/characters/nydia-art.webp",
  },
  "outlaw-axeman": {
    portrait: "/characters/outlaw-axeman.webp",
    art: "/characters/outlaw-axeman-art.webp",
  },
  "pamina": {
    portrait: "/characters/pamina.webp",
    art: "/characters/pamina-art.webp",
  },
  "parsifal": {
    portrait: "/characters/parsifal.webp",
    art: "/characters/parsifal-art.webp",
    official: true,
  },
  "pooch-runrun": {
    portrait: "/characters/pooch-runrun.webp",
    art: "/characters/pooch-runrun-art.webp",
  },
  "rawiyah": {
    portrait: "/characters/rawiyah.webp",
    art: "/characters/rawiyah-art.webp",
    official: true,
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
  "rico": {
    portrait: "/characters/rico.webp",
    art: "/characters/rico-art.webp",
    official: true,
  },
  "safiyyah": {
    portrait: "/characters/safiyyah.webp",
    art: "/characters/safiyyah-art.webp",
    official: true,
  },
  "samantha": {
    portrait: "/characters/samantha.webp",
    art: "/characters/samantha-art.webp",
    combat: "/characters/samantha-combat.webp",
    official: true,
  },
  "schacklulu": {
    portrait: "/characters/schacklulu.webp",
    art: "/characters/schacklulu-art.webp",
    official: true,
  },
  "selina": {
    portrait: "/characters/selina.webp",
    art: "/characters/selina-art.webp",
  },
  "senshi": {
    portrait: "/characters/senshi.webp",
    art: "/characters/senshi-art.webp",
    official: true,
  },
  "shahnaz": {
    portrait: "/characters/shahnaz.webp",
    art: "/characters/shahnaz-art.webp",
  },
  "shams": {
    portrait: "/characters/shams.webp",
    art: "/characters/shams-art.webp",
    official: true,
  },
  "simona": {
    portrait: "/characters/simona.webp",
    art: "/characters/simona-art.webp",
  },
  "sp-agatha": {
    portrait: "/characters/sp-agatha.webp",
    combat: "/characters/sp-agatha-combat.webp",
    official: true,
  },
  "sp-alexei": {
    portrait: "/characters/sp-alexei.webp",
    combat: "/characters/sp-alexei-combat.webp",
    official: true,
  },
  "sp-faycal": {
    portrait: "/characters/sp-faycal.webp",
    art: "/characters/sp-faycal-art.webp",
    combat: "/characters/sp-faycal-combat.webp",
    official: true,
  },
  "sp-inanna": {
    portrait: "/characters/sp-inanna.webp",
    art: "/characters/sp-inanna-art.webp",
    combat: "/characters/sp-inanna-combat.webp",
    official: true,
  },
  "sp-maitha": {
    portrait: "/characters/sp-maitha.webp",
    art: "/characters/sp-maitha-art.webp",
  },
  "sp-nungal": {
    portrait: "/characters/sp-nungal.webp",
    art: "/characters/sp-nungal-art.webp",
  },
  "sp-rawiyah": {
    portrait: "/characters/sp-rawiyah.webp",
    art: "/characters/sp-rawiyah-art.webp",
  },
  "sp-safiyyah": {
    portrait: "/characters/sp-safiyyah.webp",
    art: "/characters/sp-safiyyah-art.webp",
  },
  "sp-samantha": {
    portrait: "/characters/sp-samantha.webp",
    art: "/characters/sp-samantha-art.webp",
    combat: "/characters/sp-samantha-combat.webp",
    official: true,
  },
  "taair": {
    portrait: "/characters/taair.webp",
    art: "/characters/taair-art.webp",
  },
  "teadon": {
    portrait: "/characters/teadon.webp",
    art: "/characters/teadon-art.webp",
    official: true,
  },
  "team-meteor": {
    portrait: "/characters/team-meteor.webp",
    art: "/characters/team-meteor-art.webp",
    official: true,
  },
  "triss": {
    portrait: "/characters/triss.webp",
    art: "/characters/triss-art.webp",
    official: true,
  },
  "tristan": {
    portrait: "/characters/tristan.webp",
    art: "/characters/tristan-art.webp",
  },
  "wisekath": {
    portrait: "/characters/wisekath-art.webp",
    art: "/characters/wisekath-art.webp",
    combat: "/characters/wisekath-combat.webp",
  },
  "xavier": {
    portrait: "/characters/xavier.webp",
    art: "/characters/xavier-art.webp",
    official: true,
  },
  "yeganeh": {
    portrait: "/characters/yeganeh.webp",
    art: "/characters/yeganeh-art.webp",
  },
  "yennefer": {
    portrait: "/characters/yennefer.webp",
    art: "/characters/yennefer-art.webp",
    official: true,
  },
  "yserinde": {
    portrait: "/characters/yserinde.webp",
    art: "/characters/yserinde-art.webp",
    official: true,
  },
};

export function getCharacterImage(slug: string): CharacterImageSet | undefined {
  return CHARACTER_IMAGES[slug];
}

export function hasCharacterPortrait(slug: string): boolean {
  return Boolean(CHARACTER_IMAGES[slug]?.portrait);
}

export function hasCharacterImage(slug: string): boolean {
  const i = CHARACTER_IMAGES[slug];
  return Boolean(i?.portrait || i?.art || i?.sprite || i?.combat);
}

export function getPortraitCardImage(slug: string): {
  src: string;
  kind: "art" | "portrait" | "combat" | "sprite";
} | undefined {
  const i = CHARACTER_IMAGES[slug];
  if (!i) return undefined;
  // Prefer official full-body art, then gacha portrait, then faces/sprites
  if (i.art) return { src: i.art, kind: "art" };
  if (i.portrait) return { src: i.portrait, kind: "portrait" };
  if (i.combat) return { src: i.combat, kind: "combat" };
  if (i.sprite) return { src: i.sprite, kind: "sprite" };
  return undefined;
}
