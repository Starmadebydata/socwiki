import type { MetadataRoute } from "next";
import { getAllCharacters, ROLES } from "@/data/characters";
import { getAllFactions } from "@/data/factions";
import { getAllGear, gearPath } from "@/data/gear";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/characters",
    "/tier-list",
    "/tier-list/reroll",
    "/guides",
    "/guides/beginner",
    "/guides/role-matchups",
    "/guides/party-building",
    "/guides/early-teams",
    "/guides/shard-priority",
    "/guides/act-again",
    "/guides/nrg",
    "/guides/spiral-of-destinies",
    "/codes",
    "/weapons",
    "/trinkets",
    "/tarots",
    "/teams",
    "/factions",
    "/tools/team-builder",
    "/about",
    "/privacy",
    "/contact",
    "/editorial-policy",
    "/disclaimer",
    "/terms",
    "/changelog",
  ].map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const characters = getAllCharacters().map((c) => ({
    url: `${SITE_URL}/characters/${c.slug}`,
    lastModified: new Date(c.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const roles = ROLES.map((role) => ({
    url: `${SITE_URL}/characters/role/${role.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const gear = getAllGear().map((g) => ({
    url: `${SITE_URL}${gearPath(g)}`,
    lastModified: new Date(g.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  const factions = getAllFactions().map((f) => ({
    url: `${SITE_URL}/factions/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...characters, ...roles, ...gear, ...factions];
}
