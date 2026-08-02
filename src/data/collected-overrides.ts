import type { SkillRow } from "@/types/character";

/** Auto-generated from content/collected — review before trusting. */
export type CollectedOverride = {
  skills?: SkillRow[];
  basicAttack?: string;
  reaction?: string;
  skillNames?: string[];
  summary?: string;
  source?: string;
};

export const COLLECTED_OVERRIDES: Record<string, CollectedOverride> = {
  "anna": {
    source: "public",
    summary: "Excels at Alerts and Debuffs Anna's Trait triggers a [Forced Alert] at the end of an action.",
    basicAttack: "Freezing Slash",
    reaction: "Preemptive Intercept",
    skillNames: ["Repelling Volley","Resourceful Tactics","Hunter's Arsenal","Survival Master","Unyielding North","Heart of the North"],
    skills: [
          {
                "name": "Straight Shot",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Repelling Volley",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Freezing Slash",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "1",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Resourceful Tactics",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hunter's Arsenal",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Preemptive Intercept",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Survival Master",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Unyielding North",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Powerful Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Invigorating Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Heart of the North",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "ayishah": {
    source: "public",
    summary: "Provides 1 Ally with Permanent Buffs - Powerful Shared Buffs Between Self and 1 Ally - P.",
    basicAttack: "Slash",
    reaction: "Assisting Cover",
    skillNames: ["Leg Slam","Pure Radiance","Legacy of Comrades","Dawnmoon - Moonrise","Moonlit Shadow","Dawnmoon"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Leg Slam",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Pure Radiance",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Legacy of Comrades",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dawnmoon - Moonrise",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Moonlit Shadow",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Counterattack",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shape of Full Moon",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dawnmoon",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Moonlit Hills",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dispelling Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Lunar Shadow",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "beryl": {
    source: "public",
    summary: "is a powerful magic DPS with an initial skill that has an Armor Piercing effect.",
    basicAttack: "Energy Wave",
    reaction: "Firewalking",
    skillNames: ["Wall of Flame","Casual Search","ATK Boost","NRG Restoration","Flaming Meteor","First Aid"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Wall of Flame",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Casual Search",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "ATK Boost",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Restoration",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Firewalking",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Cutie",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Flaming Meteor",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "First Aid",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Crumbled Order",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "camelot": {
    source: "public",
    summary: "is an effective attacker, but his weakness is that there are large gaps between his damage windows .",
    basicAttack: "Slash",
    reaction: "King's Fighting Spirit",
    skillNames: ["Unstoppable Force","Will to Survive","Shield","Throne of Ashes","Scorn the Masses","Verdict - Solo Carry"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Unstoppable Force",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Will to Survive",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shield",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Throne of Ashes",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Scorn the Masses",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "King's Fighting Spirit",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Verdict - Solo Carry",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Invigorating Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Crushing",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knight's Glory",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Blazing Scourge",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Verdict",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          },
          {
                "name": "Declaration of Conquest",
                "kind": "Active",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "ciri": {
    source: "public",
    summary: "Highly Mobile AoE Attacker - Can Teleport & Act Again - Enhanced Skills vs.",
    basicAttack: "Slash",
    reaction: "Fleeing Hare",
    skillNames: ["Charge","Ciri's Candor","Nova","Temporal Shift","Flash That Cuts through Darkness","Assault"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Charge",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ciri's Candor",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Nova",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Flash That Cuts through Darkness",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fleeing Hare",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Temporal Shift",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assault",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dimension Traveler",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "clara": {
    source: "public",
    summary: "Specializes in Shields - Tanks both P.",
    basicAttack: "Slash",
    reaction: "Assisting Cover",
    skillNames: ["Shield Up - Steadfast Defense","Attack Command","ll Range Absolute Steadfast Heavy Armor","NRG Recovery","Knight's Faith","Knockback Combo"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shield Up - Steadfast Defense",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "1",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Attack Command",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "ll Range Absolute Steadfast Heavy Armor",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Recovery",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dispelling Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shield Bash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knight's Faith",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knockback Combo",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knight",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "cocoa": {
    source: "public",
    summary: "is a very powerful buff, making Cocoa a top priority for 5-stars.",
    basicAttack: "Slash",
    reaction: "Assisting Cover",
    skillNames: ["Mountain Tribes","Cocoa's Treasure Chest","Block Enhancement","Battle Flag of Vlder","Invulnerable","Crushing Bash"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Mountain Tribes",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Crushing Bash",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Cocoa's Treasure Chest",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Block Enhancement",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of Vlder",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Armor-Piercing Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Invulnerable",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Iron Pot Stew",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "col": {
    source: "public",
    summary: "Able to Act Again with back or side kills.",
    basicAttack: "Hidden Thorn",
    reaction: "Counterattack",
    skillNames: ["Flurry of Stabs","Ambush","Shadow Gait","Assault","Mask","Omen of Death"],
    skills: [
          {
                "name": "Flurry of Stabs",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ambush",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shadow Gait",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assault",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Mask",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Counterattack",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Omen of Death",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Wipe Out",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Traceless Shadow",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hidden Thorn",
                "kind": "Basic",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          },
          {
                "name": "Eerie Footwork",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "credenza": {
    source: "public",
    summary: "is a character that specializes in supporting allies.",
    basicAttack: "Energy Wave",
    reaction: "Radiant Barrier",
    skillNames: ["Blazing Benediction","Quiet Prayer","Graceful Salvation","Hierophany's Return","Battle Flag of Papal State","Hymn of Absolution"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Blazing Benediction",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "1",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Quiet Prayer",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Graceful Salvation",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hierophany's Return",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Radiant Barrier",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Protection of Light",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of Papal State",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Merciful Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hypnotic Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hymn of Absolution",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Trial of Radiance",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "dantalion": {
    source: "public",
    summary: "is attacks scale off his Physical Attack stat.",
    basicAttack: "Slash",
    reaction: "Tenacity",
    skillNames: ["Dawnlight","Unsheathe","Daybreak","NRG-Depleting Blow","Destructive Storm","Legacy of Comrades"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dawnlight",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Unsheathe",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Daybreak",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG-Depleting Blow",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Tenacity",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Destructive Storm",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "White Sword",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shield-Break Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Legacy of Comrades",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Endless Dawn",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "estra": {
    source: "public",
    summary: "is able to apply self-buff by using her [Potion] skill .",
    basicAttack: "Feverish Attack",
    reaction: "Shadow Step",
    skillNames: ["Shadow Blitz","Thunder Arrow","Shadow Evasion","Hookshot","Potion","Doom Decoy"],
    skills: [
          {
                "name": "Shadow Blitz",
                "kind": "Active",
                "stars": 3,
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Thunder Arrow",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shadow Step",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hookshot",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shadow Evasion",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Potion",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Spine Pierce",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Doom Decoy",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "No Restraints",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Defense",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          }
    ],
  },
  "faycal": {
    source: "public",
    summary: "is also worth considering.",
    basicAttack: "Curved Shot",
    reaction: "Arrow of Guardian Convallaria",
    skillNames: ["Foot Sniping","Slugger Stance","Dharana","Rock Climbing","Gale-Billow Volley","Heart of Alert"],
    skills: [
          {
                "name": "Curved Shot",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Foot Sniping",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Slugger Stance",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dharana",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Rock Climbing",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Arrow of Guardian Convallaria",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fleeing Hare",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Rapid Fire",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fatal Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale-Billow Volley",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Heart of Alert",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "geralt": {
    source: "public",
    summary: "is a well-rounded Attacker who has both offense and defense while also possessing a Skill capable of inflicting Knockbacks and various debuffs.",
    basicAttack: "Slash",
    reaction: "Assisting Cover",
    skillNames: ["Quen Sign","Igni Sign","Whirl","Aard Sign","Rend","Spin Attack"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Quen Sign",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Igni Sign",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Whirl",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Aard Sign",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Rend",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hardening",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fleet Footed",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Spin Attack",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Geralt's Composure",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sealing Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Powerful Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Execution",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Bonds of Kaer Morhen",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "gloria": {
    source: "public",
    summary: "is a universally useful tool that allows you to chase fleeing targets, reach checkpoints in time, or even position your characters for better attacking angles.",
    basicAttack: "Slash",
    reaction: "Counterattack",
    skillNames: ["Longinus - Thrust","Knightly Spirit","Solemnity","Longinus - Brilliance","Lance of Longinus","Vow of Justice"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Longinus - Thrust",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knightly Spirit",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Solemnity",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Longinus - Brilliance",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Lance of Longinus",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Front Defense",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Counterattack",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Vow of Justice",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Silencing Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fair Duel",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knight's Glory",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Longinus",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          }
    ],
  },
  "heshan": {
    source: "public",
    summary: "is a unique support Character who excels in support through healing allies and Crit buffs, while also possessing high survivability thanks to damage reduction skills .",
    basicAttack: "Energy Wave",
    reaction: "NRG Recovery",
    skillNames: ["Performance","NRG Restoration","Field","Healing Lullaby","Light of Purification","Horns of Home"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Performance",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "1",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Restoration",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Field",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Healing Lullaby",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Light of Purification",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Recovery",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Echo in the Mountains",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Horns of Home",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Tribal Anthem",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Chaos March",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Merciful Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Woodland Suite",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Resolve",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "inanna": {
    source: "public",
    summary: "is already strong even without star upgrades, but she gets even better at each key star level.",
    basicAttack: "Energy Wave",
    reaction: "Battlefield Trial",
    skillNames: ["Healing Spell","kill Range Convallaria - Blooming Horizon","Princess's Prayer","Defense Boost","Soul Mate","Light of Sanction"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Healing Spell",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "kill Range Convallaria - Blooming Horizon",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Princess's Prayer",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Defense Boost",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battlefield Trial",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Protection of Light",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Soul Mate",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Light of Sanction",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Armor Piercing Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Merciful Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "DEF Command",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Flight of the Princess",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Convallaria Swordplay",
                "kind": "Active",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "kvare": {
    source: "public",
    summary: "is a character that excels in dealing continuous damage with [Life Loss], as well as Piercing DMG with his other skills.",
    basicAttack: "Energy Wave",
    reaction: "Assisting Cover",
    skillNames: ["Conviction","Will of Victory","Unforgettable Erosion","Victory Before Battle","Kvare's Gift","Arcane Toxins"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Conviction",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Will of Victory",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Unforgettable Erosion",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Victory Before Battle",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Kvare's Gift",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "1",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sanctuary Emblem",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Arcane Toxins",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dark Withering",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Infectious Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Silencing Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Wither",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "lukamar": {
    source: "public",
    summary: "is a buff that enhances Skills with the Unshackle tag.",
    basicAttack: "Sealing Attack",
    reaction: "Liberation - Toughness",
    skillNames: ["Blood and Wind","Desert Warrior","Blade of Conviction","Chapter of the Final Dance","Song of Wind","Sand Erosion Bottle"],
    skills: [
          {
                "name": "Blood and Wind",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Desert Warrior",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Blade of Conviction",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Chapter of the Final Dance",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Liberation - Toughness",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Evil-crusher",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Song of Wind",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sealing Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Powerful Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sand Erosion Bottle",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Traceless Shadow",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "lutfi": {
    source: "public",
    summary: "Excels at Applying Debuffs & DoT Lutfi is a Seeker who excels at applying powerful debuffs and DoTs.",
    basicAttack: "Slash",
    reaction: "Summon Bodyguard",
    skillNames: ["All's Fair in War","Full Victory","Alienation","NRG Recovery","Decoy","Checkmate"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "All's Fair in War",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Summon Bodyguard",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Full Victory",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Alienation",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Recovery",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Disturbance",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Decoy",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hidden Piece",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Checkmate",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Game-Breaking Flame",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "magnus": {
    source: "public",
    summary: "is attack performance, allowing him to have both high durability and damage.",
    basicAttack: "Slash",
    reaction: "Hardening",
    skillNames: ["Mountain Breaker","Resolve","Foreceful Cast","Cry of Victory","Crushing Bash","Steel"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Mountain Breaker",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Resolve",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Foreceful Cast",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Cry of Victory",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hardening",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Crushing Bash",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Steel",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Iron Chariot",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "maitha": {
    source: "public",
    summary: "is a bonus [Come On, Everybody!] is primarily used to grant allies buffs.",
    basicAttack: "Slash",
    reaction: "Guard",
    skillNames: ["Leg Slam","Bulwark Charge","Co-Defense","Maitha's Charge","Endurance Activation","Bandage"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Leg Slam",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Bulwark Charge",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Guard",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Co-Defense",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Maitha's Charge",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Endurance Activation",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Block Counter",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Bandage",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Armor-Piercing Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Powerful Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Maitha's Combo",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Invulnerable",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of Convallaria",
                "kind": "Aura",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "rawiyah": {
    source: "public",
    summary: "excels at both offense and defense, and the [Denial Hammer], which is especially useful if knockback is effective on the stage.",
    basicAttack: "Gale - Void Slash",
    reaction: "Guardian's Heart",
    skillNames: ["Gash","Gale Breach","Co-Attack","Toughness","Another Pint","Piercing Bash"],
    skills: [
          {
                "name": "Gash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale Breach",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale - Void Slash",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Co-Attack",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Toughness",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Piercing Bash",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Another Pint",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Guardian's Heart",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Mania Smash",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sword of Convallaria",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dispelling Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale Spin Attack",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Legacy of Comrades",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "samantha": {
    source: "public",
    summary: "is a healing-focused build.",
    basicAttack: "Energy Wave",
    reaction: "Devout Faith",
    skillNames: ["Soul Soothing","Domain of Devotion","NRG Restoration","Light of Judgement","Radiant Stamp","Divine Wrath"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Soul Soothing",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Domain of Devotion",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Restoration",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Light of Judgement",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Radiant Stamp",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Divine Wrath",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Devout Faith",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Light of Celestial Purge",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Invigorating Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Merciful Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sacred Sanctuary",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "selina": {
    source: "public",
    summary: "Durable AoE Magic Attacker - Can Attack Consecutively - Grants Shields to Self and Allies - Can Adapt with Swordmarks How to Get - Obtain from Gacha (Summon) Selina Pros and Strength Selina's Character Overview AoE M.",
    basicAttack: "Slash",
    reaction: "Hardening",
    skillNames: ["Holy Sword - Full Moon","Will to Survive","Knight's Oath","Holy Sword - Starfall Wrath","Rallying Banner","Sword Inscription"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Holy Sword - Full Moon",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Will to Survive",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knight's Oath",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Holy Sword - Starfall Wrath",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hardening",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Rallying Banner",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sword Inscription",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Divine Verdict",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Critical Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "All Preparations Complete",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Holy Sword",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          }
    ],
  },
  "shahnaz": {
    source: "public",
    summary: "Excels at AoE and Knockback/Pull Shahnaz excels at using AoE attacks, Knockbacks, and dispositioning enemies.",
    basicAttack: "Energy Wave",
    reaction: "NRG Recovery",
    skillNames: ["Luxite Starburst","Origin - Harmonic Cosmos","Fate - Gaze","Luxite Burst Resonance","Fate - Endless Singularity","Desert Steps"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Luxite Starburst",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Origin - Harmonic Cosmos",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fate - Gaze",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Luxite Burst Resonance",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fate - Endless Singularity",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Recovery",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Desert Steps",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sigil Wielder",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Invigorating Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Luxite Pulse",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Desert Warrior",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dark Ripple",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Origin",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          }
    ],
  },
  "shams": {
    source: "public",
    summary: "is also capable of using potent Strike Backs .",
    basicAttack: "Slash",
    reaction: "Insight",
    skillNames: ["Earthshatter Blaze","Everburning Sun","Dawn's Resurgence","Gathered Radiance","Liberation - Toughness","Imperial Blood Rite"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Earthshatter Blaze",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "1",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Everburning Sun",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dawn's Resurgence",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gathered Radiance",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Liberation - Toughness",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sigil's Protection",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Imperial Blood Rite",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sandfall Breach",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Desert Warrior",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Insight",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "simona": {
    source: "public",
    summary: "Excels at hindering enemies Counters physical attackers High Physical Durability There are many ways to obtain Ice Armor (Physical Shield) through Traits and Skills.",
    basicAttack: "Energy Wave",
    reaction: "Iceshards",
    skillNames: ["Ice Lance","Icy Blast","Ice Cone","Ice Assault","Ice-made Armor","Flash Freezing"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice Lance",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Icy Blast",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice Cone",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice Assault",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice-made Armor",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Iceshards",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Protection of Ice",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Flash Freezing",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of the Union",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice-made Sword",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Will to Survive",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "sp-faycal": {
    source: "public",
    summary: "is ability to interrupt enemy actions by applying [Alert] to allies.",
    basicAttack: "Curved Shot",
    reaction: "Strength Activation",
    skillNames: ["Scatter","Penetrating Arrow","Sundering Arrow","Arrowstorm","Precise Shot","Swift Leap"],
    skills: [
          {
                "name": "Curved Shot",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Precise Shot",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Scatter",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Penetrating Arrow",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sundering Arrow",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Arrowstorm",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Strength Activation",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Swift Leap",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Slugger Stance",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Critical Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fatal Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Shield Break - Enhanced",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Steady Aim",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "sp-inanna": {
    source: "public",
    summary: "is arguably the strongest character in game, excelling in ally support, AoE M.",
    basicAttack: "Sword - Dawnlight",
    reaction: "Guarding the Sword of Convallaria",
    skillNames: ["Light of Convallaria","Brilliant Light","Helping Hand","Natural Sword Intent","Battlefield Healing","Let's Advance Together"],
    skills: [
          {
                "name": "Light of Convallaria",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Brilliant Light",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Helping Hand",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Natural Sword Intent",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battlefield Healing",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Guarding the Sword of Convallaria",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Let's Advance Together",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sword - Dawnlight",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sword - Dusk",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of Convallaria Stands",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Under the Flag of Convallaria",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "United Strength",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Cure Blow",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle-hardened Warrior",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Convallaria Swordplay",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of Convallaria",
                "kind": "Aura",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "sp-maitha": {
    source: "public",
    summary: "excels at using AoE attacks that deal Piercing DMG , allowing her to deal consistent amounts of damage even against enemies with high DEF or Shields.",
    basicAttack: "Slash",
    reaction: "Reinforced Joints",
    skillNames: ["Whirling Hammer","Maitha's Combo","Bulwark Charge","Emergency Toolbox","Peak Performance","Crystal Burst Twin-Shot"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Whirling Hammer",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Maitha's Combo",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Bulwark Charge",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Crystal Burst Twin-Shot",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Emergency Toolbox",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Peak Performance",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Reinforced Joints",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Spiky Shield",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Field Medic",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Arm Slam",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Field",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "sp-nungal": {
    source: "public",
    summary: "is a Skill that deals 100% AoE damage and is quite unremarkable on its own, but it can trigger up to twice per turn due to Rally Response .",
    basicAttack: "Slash",
    reaction: "Insight",
    skillNames: ["Sense of Honor","Break - Fierce Lunge","Break - Swift Assault","Battle Fever","Sealing Bash","Mobile Skirmisher"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sealing Bash",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sense of Honor",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Break - Fierce Lunge",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Break - Swift Assault",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Fever",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Insight",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Poised Elegance",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Mobile Skirmisher",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Onslaught - Piercing Will",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sealing Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Frontline Action",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Parry",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Onslaught",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          }
    ],
  },
  "sp-rawiyah": {
    source: "public",
    summary: "is a physical attacker with excellent mobility and area attack capabilities.",
    basicAttack: "Gale - Void Slash",
    reaction: "Vital Guard",
    skillNames: ["Mobile Crew","Police Lasso","Gale Sword - Chaotic Flurry","Gale - Draw Blade","Powerful Attack","Fancy Footwork"],
    skills: [
          {
                "name": "Gale - Void Slash",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Mobile Crew",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Police Lasso",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Vital Guard",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale Sword - Chaotic Flurry",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale - Draw Blade",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Powerful Attack",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fancy Footwork",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hunting Impulse",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Valiant Vanguard",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale Dance - Sincerity",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Gale - Piercing Clouds",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "sp-samantha": {
    source: "public",
    summary: "is an especially strong character in most stages.",
    basicAttack: "Energy Wave",
    reaction: "NRG Recovery",
    skillNames: ["Light of Judgement for All Sins","Chain of Regeneration","NRG Restoration","Fire Purification","Judgement Sanctum","Will to Cleanse All Foul"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Light of Judgement for All Sins",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Chain of Regeneration",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Restoration",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fire Purification",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Protection of Light",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Recovery",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Judgement Sanctum",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Will to Cleanse All Foul",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Scorching Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Crystal Implosion",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Oath to End All Evil",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Iron Pot Stew",
                "kind": "Active",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "taair": {
    source: "public",
    summary: "Specializing in Support Taair is a character that does not have a single attack skill and specializes in supporting allies.",
    basicAttack: "Energy Wave",
    reaction: "Caged Reverie",
    skillNames: ["Healing Spell","Seed of Wisdom","Thousand-Mile Echo","Inner Light","Campfire Night Talks","Flagellant"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Healing Spell",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Seed of Wisdom",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Thousand-Mile Echo",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Inner Light",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Pacifism",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Heart of Forebearance",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Campfire Night Talks",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Flagellant",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Merciful Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dispelling Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Divine Healing",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Caged Reverie",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "7",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "triss": {
    source: "public",
    summary: "is an Attacker who excels at AoE M.",
    basicAttack: "Energy Wave",
    reaction: "NRG Recovery",
    skillNames: ["Teleport","Pocket Elixir","Fireball","Hailstorm","Firestorm","Frost Control"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Teleport",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Pocket Elixir",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fireball",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hailstorm",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Firestorm",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "NRG Recovery",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Magic Barrier",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Frost Control",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Triss's Wrath",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Ice Bolt",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fire Arrow",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Elemental Harmony",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "tristan": {
    source: "public",
    summary: "is also possible to use [One-Punch Burial] again on a group of enemies already affected by Vulnerable II.",
    basicAttack: "Slash",
    reaction: "Assisting Cover",
    skillNames: ["Explosive Luxite-Dust","Furious Pursuit","Knockback Pursuit","Fervent Lunge","Blazing Blood","Controlled Demolition"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Explosive Luxite-Dust",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Furious Pursuit",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Knockback Pursuit",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fervent Lunge",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Blazing Blood",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Street Style",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Controlled Demolition",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sealing Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Fatal Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Family",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Destructive Storm",
                "kind": "Active",
                "stars": 3,
                "nrg": "3",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Assisting Cover",
                "kind": "Reaction",
                "stars": 4,
                "note": "Name confirmed in page text",
                "description": "Name confirmed in page text"
          }
    ],
  },
  "xavier": {
    source: "public",
    summary: "is attack power when enemies are nearby.",
    basicAttack: "Slash",
    reaction: "Indomitable Spirit",
    skillNames: ["Combat Frenzy","Risky Move","Legacy of Comrades","Chaotic Battle","Sweeping Bash","Spear of Iria"],
    skills: [
          {
                "name": "Slash",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Sweeping Bash",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Combat Frenzy",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Risky Move",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Legacy of Comrades",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Chaotic Battle",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Indomitable Spirit",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Strength Activation",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Spear of Iria",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "5",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Battle Flag of Iria",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Charged Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feverish Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Falling Comet Dash",
                "kind": "Active",
                "stars": 3,
                "nrg": "5",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Musou",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "yennefer": {
    source: "public",
    summary: "Excels at AoE Attacks and Support Yennefer excels at AoE attacks and support.",
    basicAttack: "Energy Wave",
    reaction: "Protection of Darkness",
    skillNames: ["Erosion","Yennefer's Heal","Corruption","Elemental Control","Charming Illusion","Portal"],
    skills: [
          {
                "name": "Energy Wave",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Erosion",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Yennefer's Heal",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Corruption",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Elemental Control",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Protection of Darkness",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Evasive Shift",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "0",
                "cd": "2",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Charming Illusion",
                "kind": "Active",
                "stars": 3,
                "nrg": "2",
                "cd": "3",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Portal",
                "kind": "Active",
                "stars": 3,
                "nrg": "1",
                "cd": "4",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Dispelling Strike",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Charged Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Tissaia's Teaching",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Yennefer's Mockery",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          }
    ],
  },
  "yserinde": {
    source: "public",
    summary: "is a character who not only excels in Piercing DMG and DoTs, but is also capable of significantly increasing her own and her allies' durability, which is rare for a Seeker .",
    basicAttack: "Straight Shot",
    reaction: "Royal Guard Escort",
    skillNames: ["Feather Storm","Phantom Shift","Black Feather Field","Perfect Shield","Silent Wing","Plume Rend"],
    skills: [
          {
                "name": "Straight Shot",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Feather Storm",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Royal Guard Escort",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Phantom Shift",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Black Feather Field",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Perfect Shield",
                "kind": "Active",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Silent Wing",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Counterattack",
                "kind": "Reaction",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Plume Rend",
                "kind": "Active",
                "stars": 3,
                "nrg": "0",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Hypnotic Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Surefire Attack",
                "kind": "Basic",
                "stars": 3,
                "nrg": "-",
                "cd": "-",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Endless Web",
                "kind": "Active",
                "stars": 3,
                "nrg": "4",
                "cd": "0",
                "note": "Extracted from public guide HTML",
                "description": "Extracted from public guide HTML"
          },
          {
                "name": "Armor of Ice",
                "kind": "Active",
                "stars": 4,
                "note": "Priority section extract",
                "description": "Priority section extract"
          }
    ],
  },
};
