import Link from "next/link";
import type { Metadata } from "next";
import { TierBadge } from "@/components/TierBadge";
import { JsonLd } from "@/components/JsonLd";
import { getAllCharacters, ROLES } from "@/data/characters";
import type { Tier } from "@/types/character";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tier List (2026) - Best Characters",
  description:
    "Updated SoC character tier list by role—DPS and Support rankings, reroll picks, and links to full builds. Meta for August 2026.",
  alternates: { canonical: "/tier-list" },
};

const TIER_ORDER: Tier[] = ["SSS", "SS", "S+", "S", "A", "B", "C"];

export default function TierListPage() {
  const chars = getAllCharacters();

  const byTier = TIER_ORDER.map((tier) => ({
    tier,
    units: chars.filter((c) => c.tier.overall === tier),
  })).filter((g) => g.units.length > 0);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the best character in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Meta leaders rotate with banners. As of the latest update, SSS/SS units such as SP Inanna and Camelot define the top of the list—always check role and content type.",
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
        Overall rankings for Legendary units currently in the SoC Wiki seed
        database. Prefer favorites when content allows—use this list for
        resource priority. Last meta pass: August 2026.
      </p>

      <div className="mt-6 flex flex-wrap gap-2 text-sm">
        <Link
          href="/tier-list/reroll"
          className="rounded-lg border border-border bg-card px-3 py-1.5 hover:bg-card-hover"
        >
          Reroll tier list
        </Link>
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
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {units.map((c) => (
                <Link
                  key={c.slug}
                  href={`/characters/${c.slug}`}
                  className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 hover:bg-card-hover"
                >
                  <div>
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-muted">
                      {c.role} · Reroll {c.tier.reroll}
                    </div>
                  </div>
                  <span className="text-xs text-link">Build →</span>
                </Link>
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
        <p className="mt-3 text-xs">
          Canonical: {SITE_URL}/tier-list
        </p>
      </section>
    </div>
  );
}
