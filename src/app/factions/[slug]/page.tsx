import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CharacterCard } from "@/components/CharacterCard";
import { RoleAvatar } from "@/components/RoleAvatar";
import { JsonLd } from "@/components/JsonLd";
import {
  getAllFactions,
  getCharactersByFaction,
  getFactionBySlug,
} from "@/data/factions";
import { getCharacterBySlug } from "@/data/characters";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllFactions().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const f = getFactionBySlug(slug);
  if (!f) return { title: "Faction not found" };
  return {
    title: `${f.name} Faction Guide`,
    description: `${f.name} faction in Sword of Convallaria: ${f.summary}`,
    alternates: { canonical: `/factions/${f.slug}` },
  };
}

export default async function FactionHubPage({ params }: Props) {
  const { slug } = await params;
  const f = getFactionBySlug(slug);
  if (!f) notFound();

  const list = getCharactersByFaction(f.name);
  const sample = f.sampleCore
    .map((s) => getCharacterBySlug(s))
    .filter(Boolean);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ${f.name} faction in Sword of Convallaria?`,
        acceptedAnswer: { "@type": "Answer", text: f.overview },
      },
      {
        "@type": "Question",
        name: `How do I build a ${f.name} team?`,
        acceptedAnswer: { "@type": "Answer", text: f.buildPriority },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Factions",
        item: `${SITE_URL}/factions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: f.name,
        item: `${SITE_URL}/factions/${f.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />

      <nav className="mb-4 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/factions" className="hover:text-foreground">
          Factions
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{f.name}</span>
      </nav>

      <p className="soc-heading-sm">Faction hub</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        {f.name} Faction
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-3xl text-muted">{f.overview}</p>
      <p className="mt-2 text-sm text-muted">
        {list.length} units in the SoC Wiki database share this tag.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <section className="soc-frame p-5">
          <h2 className="soc-heading text-lg">Playstyle</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{f.playstyle}</p>
        </section>
        <section className="soc-frame p-5">
          <h2 className="soc-heading text-lg">Build priority</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {f.buildPriority}
          </p>
        </section>
      </div>

      {sample.length > 0 && (
        <section className="mt-10" aria-labelledby="sample-core">
          <h2 id="sample-core" className="soc-section-title mb-4">
            Sample core
          </h2>
          <div className="flex flex-wrap gap-3">
            {sample.map(
              (c) =>
                c && (
                  <Link
                    key={c.slug}
                    href={`/characters/${c.slug}`}
                    className="flex items-center gap-2 rounded-full border border-[var(--border-soft)] bg-[var(--card-deep)] pr-3"
                  >
                    <RoleAvatar
                      name={c.name}
                      role={c.role}
                      slug={c.slug}
                      size="sm"
                      className="!h-9 !w-9"
                    />
                    <span className="text-sm">{c.name}</span>
                  </Link>
                ),
            )}
          </div>
          <Link
            href={`/tools/team-builder?team=${f.sampleCore.join(",")}`}
            className="soc-btn mt-4 inline-flex !py-1.5 text-xs"
          >
            Load in Team Builder →
          </Link>
        </section>
      )}

      <section className="mt-10" aria-labelledby="roster">
        <h2 id="roster" className="soc-section-title mb-4">
          {f.name} roster
        </h2>
        {list.length === 0 ? (
          <p className="text-sm text-muted">No units tagged yet.</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((c) => (
              <CharacterCard key={c.slug} character={c} />
            ))}
          </div>
        )}
      </section>

      <section className="mt-10 flex flex-wrap gap-2">
        {f.relatedGuides.map((g) => (
          <Link key={g.href} href={g.href} className="soc-btn !py-1.5 text-xs">
            {g.label} →
          </Link>
        ))}
        <Link href="/factions" className="soc-btn !py-1.5 text-xs">
          All factions →
        </Link>
      </section>
    </div>
  );
}
