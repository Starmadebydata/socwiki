import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GearDetail } from "@/components/GearDetail";
import { gearMetaDescription, getGearByKind, getGearBySlug } from "@/data/gear";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getGearByKind("weapon").map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getGearBySlug(slug);
  if (!item || item.kind !== "weapon") return { title: "Not found" };
  return {
    title: `${item.name} Weapon Guide`,
    description: gearMetaDescription(item),
    alternates: { canonical: `/weapons/${item.slug}` },
  };
}

export default async function WeaponPage({ params }: Props) {
  const { slug } = await params;
  const item = getGearBySlug(slug);
  if (!item || item.kind !== "weapon") notFound();
  return <GearDetail item={item} />;
}
