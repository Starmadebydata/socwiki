import type { Metadata } from "next";
import { GearList } from "@/components/GearList";
import { getGearByKind } from "@/data/gear";

export const metadata: Metadata = {
  title: "Tarot Whispers",
  description:
    "Sword of Convallaria Tarot Whispers database — rankings, effects, and character pairings.",
  alternates: { canonical: "/tarots" },
};

export default function TarotsPage() {
  return <GearList items={getGearByKind("tarot")} title="Tarot Whispers" />;
}
