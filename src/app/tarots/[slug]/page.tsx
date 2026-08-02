import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GearDetail } from "@/components/GearDetail";
import { getGearByKind, getGearBySlug } from "@/data/gear";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getGearByKind("tarot").map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getGearBySlug(slug);
  if (!item || item.kind !== "tarot") return { title: "Not found" };
  return {
    title: `${item.name} Tarot Guide`,
    description: `${item.name} Tarot Whisper in Sword of Convallaria — effect notes and Best on characters.`,
    alternates: { canonical: `/tarots/${item.slug}` },
  };
}

export default async function TarotPage({ params }: Props) {
  const { slug } = await params;
  const item = getGearBySlug(slug);
  if (!item || item.kind !== "tarot") notFound();
  return <GearDetail item={item} />;
}
