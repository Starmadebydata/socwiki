# Character data collection schema

## `content/collected/{slug}.json`

```json
{
  "slug": "col",
  "name": "Col",
  "source": "public|client|ocr|manual",
  "sources": [
    { "type": "url", "url": "https://...", "fetchedAt": "2026-08-02T00:00:00Z" },
    { "type": "screenshot", "path": "content/raw/screenshots/col-skills.png" }
  ],
  "role": "Seeker",
  "factions": ["Alacrity"],
  "rarity": "Legendary",
  "stats": { "move": 5, "highJump": 2, "lowJump": 2 },
  "skills": [
    {
      "name": "Wipe Out",
      "kind": "Active",
      "nrg": "3",
      "cd": "0",
      "description": "…",
      "priority": 5,
      "note": "Main finisher"
    }
  ],
  "build": {
    "basicAttack": "Hidden Thorn",
    "reaction": "Eerie Footwork",
    "skills": ["Omen of Death", "Wipe Out", "Perfect Assassin"],
    "weapon": "Void Stab",
    "trinket": "Maverick's Cloak",
    "tarot": "Verdict of Justice"
  },
  "summary": "…",
  "pros": ["…"],
  "howToUse": "…",
  "starPriority": "…",
  "confidence": "high|medium|low",
  "collectedAt": "2026-08-02T00:00:00Z"
}
```

## Folders

| Path | Purpose |
|------|---------|
| `content/raw/public/` | HTML/JSON dumps from public pages |
| `content/raw/screenshots/` | Client screenshots (`{slug}-*.png`) |
| `content/collected/` | Normalized JSON ready to import |
| `scripts/collect/` | Scrape / OCR / validate / merge tools |

## Commands

```bash
# 1) Scrape public guide pages (Top list)
npm run collect:public

# 2) OCR screenshots you drop into content/raw/screenshots
npm run collect:ocr

# 3) Validate all collected JSON
npm run collect:validate

# 4) Merge high-confidence collected → src/data (prints plan; use --write)
npm run collect:merge
npm run collect:merge -- --write
```
