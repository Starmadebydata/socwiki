import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { AuthorByline } from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Act Again Explained (SoC 2026)",
  description:
    "Sword of Convallaria Act Again explained: how extra turns work, who enables them, NRG costs, positioning tips, and best early Act Again cores.",
  alternates: { canonical: "/guides/act-again" },
};

const UPDATED = "2026-08-03";

export default function ActAgainGuidePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Act Again in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Act Again grants a unit another action after finishing a turn—usually from a support skill, passive, or gear condition. It multiplies damage and reposition value without needing a second carry.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the best Act Again enablers early?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Inanna and SP Inanna lines are the classic enablers. Pair them with one strong Seeker or Breaker (for example Col) so the extra turn lands on your highest DPS, not a filler unit.",
        },
      },
      {
        "@type": "Question",
        name: "Does Act Again cost NRG?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The enabler skill usually costs NRG; the extra turn itself often still needs enough NRG on the target to use a real skill. Battery supports and NRG gear prevent empty Act Again turns.",
        },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Act Again",
        item: `${SITE_URL}/guides/act-again`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />
      <p className="soc-heading-sm">Systems · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Act Again Explained
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <div className="mb-6">
        <AuthorByline updated={UPDATED} compact />
      </div>
      <p className="text-lg text-muted">
        Act Again is the turn-economy engine of Sword of Convallaria. One well-timed
        extra action often beats another mid-tier damage dealer on the bench.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">What it actually does</h2>
        <p className="text-muted">
          When a unit “Acts Again,” they resolve another full action after their
          current one—move, skill, attack, or wait—subject to the skill text that
          granted it. Think of it as a{" "}
          <strong className="text-foreground">second deployment of your best unit</strong>{" "}
          inside the same round, not free permanent haste.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>
            <strong className="text-foreground">Source</strong> — usually a Watcher
            skill, a passive proc, or a gear condition.
          </li>
          <li>
            <strong className="text-foreground">Target</strong> — sometimes self,
            often an ally in range. Range and facing matter.
          </li>
          <li>
            <strong className="text-foreground">Cost</strong> — enabler NRG + enough
            NRG on the receiver to cast something meaningful.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Why it wins stages</h2>
        <div className="soc-frame space-y-3 p-5 text-sm text-muted">
          <p>
            <strong className="text-foreground">Burst windows</strong> — two skills
            from a Seeker into a countered Breaker delete bosses that tank a single hit.
          </p>
          <p>
            <strong className="text-foreground">Positioning</strong> — first action
            sets up; second action kills or finishes a chain (void stacks, infection
            ticks, kill-passives).
          </p>
          <p>
            <strong className="text-foreground">Efficiency</strong> — investing stars
            and gear on one Act Again core scales harder than spreading resources
            across six average units. See{" "}
            <Link href="/guides/shard-priority" className="text-link hover:underline">
              shard priority
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Early Act Again cores</h2>
        <p className="text-muted">
          You do not need every limited. A reliable pattern:
        </p>
        <ol className="list-decimal space-y-3 pl-5 text-muted">
          <li>
            <strong className="text-foreground">Enabler</strong> —{" "}
            <Link href="/characters/inanna" className="text-link hover:underline">
              Inanna
            </Link>{" "}
            or{" "}
            <Link href="/characters/sp-inanna" className="text-link hover:underline">
              SP Inanna
            </Link>{" "}
            if you pull them. Battery-style Watchers fill the slot if not.
          </li>
          <li>
            <strong className="text-foreground">Primary damage</strong> — a Seeker or
            Breaker who benefits from two actions (crit chains, multi-hit, kill
            reset).{" "}
            <Link href="/characters/col" className="text-link hover:underline">
              Col
            </Link>{" "}
            is the textbook example.
          </li>
          <li>
            <strong className="text-foreground">Frontline</strong> — a Defender so the
            enabler is not the first to die.{" "}
            <Link href="/characters/cocoa" className="text-link hover:underline">
              Cocoa
            </Link>{" "}
            /{" "}
            <Link href="/characters/maitha" className="text-link hover:underline">
              Maitha
            </Link>{" "}
            lines work early.
          </li>
        </ol>
        <p className="text-muted">
          Load sample comps in the{" "}
          <Link href="/tools/team-builder?preset=iria-start" className="text-link hover:underline">
            Team Builder
          </Link>{" "}
          or read{" "}
          <Link href="/guides/early-teams" className="text-link hover:underline">
            early teams
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Play rules that matter</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>
            <strong className="text-foreground">Order of operations</strong> —
            enable after the carry is in range of the real kill target, not before
            they walk across the map.
          </li>
          <li>
            <strong className="text-foreground">Matchups</strong> — spend the free
            action into a role you counter. Dead damage into the wrong role wastes
            the enabler.{" "}
            <Link href="/guides/role-matchups" className="text-link hover:underline">
              Role matchups
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">NRG plan</strong> — empty Act Again
            turns (only basic attacks) lose value. Pair with{" "}
            <Link href="/guides/nrg" className="text-link hover:underline">
              NRG management
            </Link>{" "}
            and battery charms when needed.
          </li>
          <li>
            <strong className="text-foreground">Gear</strong> — weapons and trinkets
            that stack on skill use or multi-kill love Act Again loops (e.g.{" "}
            <Link href="/weapons/void-stab" className="text-link hover:underline">
              Void Stab
            </Link>
            -style kits).
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Common mistakes</h2>
        <div className="soc-parchment space-y-2 p-5 text-sm text-[var(--ink-muted)]">
          <p>
            • Enabling a low-star filler instead of your built carry.
          </p>
          <p>
            • Stacking three “kinda supports” with no single kill threat.
          </p>
          <p>
            • Ignoring enemy Watcher / Destroyer lanes while tunnel-visioning
            physical triangles.
          </p>
          <p>
            • Burning Act Again for a 10% chip when waiting one turn deletes the
            target safely.
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="soc-section-title">Related</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="/guides/nrg" className="soc-btn !py-1.5">
            NRG guide →
          </Link>
          <Link href="/guides/party-building" className="soc-btn !py-1.5">
            Party building →
          </Link>
          <Link href="/guides/role-matchups" className="soc-btn !py-1.5">
            Role matchups →
          </Link>
          <Link href="/tools/team-builder" className="soc-btn !py-1.5">
            Team Builder →
          </Link>
        </div>
      </section>
    </article>
  );
}
