import type { Metadata } from "next";
import { GearList } from "@/components/GearList";
import { getGearByKind } from "@/data/gear";

export const metadata: Metadata = {
  title: "Weapons",
  description:
    "Sword of Convallaria weapons database — recommended weapons and which characters use them in SoC Wiki builds.",
  alternates: { canonical: "/weapons" },
};

export default function WeaponsPage() {
  return <GearList items={getGearByKind("weapon")} title="Weapons" />;
}
