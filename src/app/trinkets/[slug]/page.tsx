import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GearDetail } from "@/components/GearDetail";
import { gearMetaDescription, getGearByKind, getGearBySlug } from "@/data/gear";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getGearByKind("trinket").map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getGearBySlug(slug);
  if (!item || item.kind !== "trinket") return { title: "Not found" };
  return {
    title: `${item.name} Trinket Guide`,
    description: gearMetaDescription(item),
    alternates: { canonical: `/trinkets/${item.slug}` },
  };
}

export default async function TrinketPage({ params }: Props) {
  const { slug } = await params;
  const item = getGearBySlug(slug);
  if (!item || item.kind !== "trinket") notFound();
  return <GearDetail item={item} />;
}
