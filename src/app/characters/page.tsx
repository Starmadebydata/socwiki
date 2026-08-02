import type { Metadata } from "next";
import { CharacterFilters } from "@/components/CharacterFilters";
import { getAllCharacters, sortByOverallTier } from "@/data/characters";

export const metadata: Metadata = {
  title: "All Characters",
  description:
    "Complete Sword of Convallaria character list with roles, factions, tier ratings, and links to full builds and skill trees. Filter by role, tier, and faction.",
  alternates: { canonical: "/characters" },
};

export default function CharactersPage() {
  const list = sortByOverallTier(getAllCharacters());

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Characters</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Browse the SoC Wiki roster ({list.length} units). Filter by role,
        overall tier, or faction, then open a character for Quick Build, skill
        priority, and gear links.
      </p>
      <CharacterFilters characters={list} />
    </div>
  );
}
