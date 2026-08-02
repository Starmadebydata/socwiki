/**
 * Collection targets: public guide URLs + priority slugs.
 * Add more GameWith / DotGG / fandom URLs as needed.
 */

export const PRIORITY_SLUGS = [
  "sp-inanna",
  "camelot",
  "sp-maitha",
  "sp-samantha",
  "lukamar",
  "shahnaz",
  "taair",
  "col",
  "estra",
  "cocoa",
  "inanna",
  "anna",
  "clara",
  "credenza",
  "kvare",
  "yennefer",
  "shams",
  "yserinde",
  "heshan",
  "selina",
  "ayishah",
  "sp-nungal",
];

/** GameWith article IDs (EN) — from public guide URLs */
export const GAMEWITH_TARGETS = [
  { slug: "sp-inanna", name: "SP Inanna", id: "69479" },
  { slug: "col", name: "Col", id: "48262" },
  { slug: "inanna", name: "Inanna", id: "48251" },
  { slug: "taair", name: "Taair", id: "52064" },
  { slug: "estra", name: "Estra", id: "55738" },
  { slug: "camelot", name: "Camelot", id: "71130" },
  { slug: "kvare", name: "Kvare", id: "55001" },
  { slug: "cocoa", name: "Cocoa", id: "48200" },
  { slug: "sp-maitha", name: "SP Maitha", id: "72572" },
  { slug: "sp-samantha", name: "SP Samantha", id: "70706" },
  { slug: "maitha", name: "Maitha", id: "48263" },
  { slug: "xavier", name: "Xavier", id: "48265" },
  { slug: "rawiyah", name: "Rawiyah", id: "48260" },
  { slug: "gloria", name: "Gloria", id: "48258" },
  { slug: "faycal", name: "Faycal", id: "48264" },
  { slug: "beryl", name: "Beryl", id: "48269" },
  { slug: "samantha", name: "Samantha", id: "48267" },
  { slug: "dantalion", name: "Dantalion", id: "48261" },
  { slug: "magnus", name: "Magnus", id: "48249" },
  { slug: "anna", name: "Anna", id: "77281" },
  { slug: "credenza", name: "Credenza", id: "70900" },
  { slug: "lutfi", name: "Lutfi", id: "69259" },
  { slug: "yserinde", name: "Yserinde", id: "71495" },
  { slug: "yennefer", name: "Yennefer", id: "71745" },
  { slug: "geralt", name: "Geralt", id: "71746" },
  { slug: "triss", name: "Triss", id: "71744" },
  { slug: "ciri", name: "Ciri", id: "71743" },
  { slug: "clara", name: "Clara", id: "75005" },
  { slug: "selina", name: "Selina", id: "75813" },
  { slug: "heshan", name: "Heshan", id: "76224" },
  { slug: "shams", name: "Shams", id: "74060" },
  { slug: "shahnaz", name: "Shahnaz", id: "76477" },
  { slug: "lukamar", name: "Lukamar", id: "73450" },
  { slug: "ayishah", name: "Ayishah", id: "67888" },
  { slug: "sp-nungal", name: "SP Nungal", id: "72916" },
  { slug: "sp-rawiyah", name: "SP Rawiyah", id: "51911" },
  { slug: "sp-faycal", name: "SP Faycal", id: "73024" },
  { slug: "tristan", name: "Tristan", id: "52554" },
  { slug: "simona", name: "Simona", id: "48201" },
];

export function gamewithUrl(id) {
  return `https://gamewith.net/sword-of-convallaria/${id}`;
}

export const DOTGG_SLUGS = [
  "sp-inanna",
  "col",
  "taair",
  "camelot",
  "estra",
  "kvare",
  "cocoa",
  "inanna",
  "xavier",
  "yserinde",
  "yennefer",
  "geralt",
];

export function dotggUrl(slug) {
  return `https://dotgg.gg/sword-of-convallaria/${slug}/`;
}
