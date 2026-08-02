import Link from "next/link";
import type { Metadata } from "next";
import { CharacterCard } from "@/components/CharacterCard";
import { TierBadge } from "@/components/TierBadge";
import { JsonLd } from "@/components/JsonLd";
import { getAllCharacters, ROLES } from "@/data/characters";
import type { Role, Tier } from "@/types/character";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tier List (2026) - Best Characters",
  description:
    "Updated Sword of Convallaria tier list by overall rank and by role—DPS and Support rankings, reroll picks, and build links. Meta pass: August 2026.",
  alternates: { canonical: "/tier-list" },
};

const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];

export default function TierListPage() {
  const chars = getAllCharacters();

  const byTier = TIER_ORDER.map((tier) => ({
    tier,
    units: chars.filter((c) => c.tier.overall === tier),
  })).filter((g) => g.units.length > 0);

  const byRole = ROLES.map((role: Role) => ({
    role,
    units: chars
      .filter((c) => c.role === role)
      .sort(
        (a, b) =>
          TIER_ORDER.indexOf(a.tier.overall) -
          TIER_ORDER.indexOf(b.tier.overall),
      ),
  }));

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best character in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meta leaders rotate with banners. SSS/SS units such as SP Inanna, Camelot, SP Maitha, and Luccia/Elaman cores currently define the top—always check role and content type.",
        },
      },
      {
        "@type": "Question",
        name: "How often is the SoC tier list updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We refresh after major banners and balance patches. Each character page shows a Last updated date.",
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={faqLd} />
      <h1 className="text-3xl font-bold">
        Sword of Convallaria Tier List (2026)
      </h1>
      <p className="mt-2 max-w-2xl text-muted">
        Overall rankings for {chars.length} Legendary units in the SoC Wiki
        database, plus per-role tables. Prefer favorites when content allows—use
        this list for resource priority. Last meta pass: August 2026.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <Link
          href="/tier-list/reroll"
          className="rounded-lg border border-border bg-card px-3 py-1.5 hover:bg-card-hover"
        >
          Reroll tier list
        </Link>
        <a
          href="#by-role"
          className="rounded-lg border border-border bg-card px-3 py-1.5 text-muted hover:bg-card-hover hover:text-foreground"
        >
          Jump to by role
        </a>
        {ROLES.map((role) => (
          <Link
            key={role}
            href={`/characters/role/${role.toLowerCase()}`}
            className="rounded-lg border border-border bg-card px-3 py-1.5 text-muted hover:bg-card-hover hover:text-foreground"
          >
            {role}s
          </Link>
        ))}
      </div>

      <div className="mt-10 space-y-8">
        {byTier.map(({ tier, units }) => (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            <h2
              id={`tier-${tier}`}
              className="mb-3 flex items-center gap-2 text-xl font-semibold"
            >
              <TierBadge tier={tier} />
              <span>Tier</span>
              <span className="text-sm font-normal text-muted">
                ({units.length})
              </span>
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {units.map((c) => (
                <CharacterCard key={c.slug} character={c} compact />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div id="by-role" className="mt-16 space-y-10">
        <h2 className="text-2xl font-bold">Tier list by role</h2>
        {byRole.map(({ role, units }) => (
          <section key={role}>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-xl font-semibold">{role}</h3>
              <Link
                href={`/characters/role/${role.toLowerCase()}`}
                className="text-sm text-link hover:underline"
              >
                All {role}s →
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {units.map((c) => (
                <CharacterCard key={c.slug} character={c} compact />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-border bg-card p-5 text-sm text-muted">
        <h2 className="mb-2 text-base font-semibold text-foreground">
          How to read this list
        </h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>SSS / SS: invest first when free-to-play or limited pulls.</li>
          <li>S+ / S: excellent cores for most PvE content.</li>
          <li>A and below: niche, love picks, or waiting on buffs/synergy.</li>
          <li>
            Open each{" "}
            <Link href="/characters" className="text-link hover:underline">
              character page
            </Link>{" "}
            for skill trees and gear tables.
          </li>
        </ul>
        <p className="mt-3 text-xs">Canonical: {SITE_URL}/tier-list</p>
      </section>
    </div>
  );
}
