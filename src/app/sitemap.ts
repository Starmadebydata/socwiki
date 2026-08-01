import type { MetadataRoute } from "next";
import { getAllCharacters, ROLES } from "@/data/characters";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/characters",
    "/tier-list",
    "/tier-list/reroll",
    "/guides",
    "/guides/beginner",
    "/guides/role-matchups",
    "/codes",
    "/weapons",
    "/trinkets",
    "/tarots",
    "/teams",
    "/tools/team-builder",
    "/about",
    "/privacy",
    "/contact",
    "/editorial-policy",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
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

  return [...staticRoutes, ...characters, ...roles];
}
