import type { Metadata } from "next";
import { GearList } from "@/components/GearList";
import { getGearByKind } from "@/data/gear";

export const metadata: Metadata = {
  title: "Trinkets",
  description:
    "Sword of Convallaria trinkets database — effects and recommended characters.",
  alternates: { canonical: "/trinkets" },
};

export default function TrinketsPage() {
  return <GearList items={getGearByKind("trinket")} title="Trinkets" />;
}
