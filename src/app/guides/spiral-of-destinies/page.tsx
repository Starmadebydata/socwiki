import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { AuthorByline } from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Spiral of Destinies Guide (2026)",
  description:
    "Sword of Convallaria Spiral of Destinies guide: what the mode tests, team prep, NRG and matchup planning, gear priorities, and common wipe reasons.",
  alternates: { canonical: "/guides/spiral-of-destinies" },
};

const UPDATED = "2026-08-03";

export default function SpiralGuidePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Spiral of Destinies in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spiral of Destinies is a harder, multi-stage challenge mode that rewards preparation: correct role matchups, faction coverage, NRG planning, and invested cores rather than raw story teams.",
        },
      },
      {
        "@type": "Question",
        name: "What team should I use for Spiral of Destinies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bring one real enabler, one to two damage cores that counter the stage roles, a frontline, and flex units for magic lanes or faction auras. Use the Team Builder to check holes before you enter.",
        },
      },
      {
        "@type": "Question",
        name: "Why do I wipe in Spiral with a story-clear team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Spiral stages punish missing matchups, dry NRG, and under-starred enablers. Story teams that “auto” early maps often lack sustain or role coverage for longer fights.",
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
        name: "Spiral of Destinies",
        item: `${SITE_URL}/guides/spiral-of-destinies`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />
      <p className="soc-heading-sm">Modes · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Spiral of Destinies Guide
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <div className="mb-6">
        <AuthorByline updated={UPDATED} compact />
      </div>
      <p className="text-lg text-muted">
        Spiral is where “good enough for story” stops working. Treat it as a
        checklist mode: matchups, NRG, stars, and a clear win condition.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">What Spiral tests</h2>
        <div className="soc-frame space-y-3 p-5 text-sm text-muted">
          <p>
            <strong className="text-foreground">Sustained damage</strong> — bosses
            and multi-wave maps outlast single-burst windows.
          </p>
          <p>
            <strong className="text-foreground">Role correctness</strong> — free
            damage from matchups matters more when every turn is expensive.{" "}
            <Link href="/guides/role-matchups" className="text-link hover:underline">
              Role matchups
            </Link>
            .
          </p>
          <p>
            <strong className="text-foreground">Turn economy</strong> —{" "}
            <Link href="/guides/act-again" className="text-link hover:underline">
              Act Again
            </Link>{" "}
            plus{" "}
            <Link href="/guides/nrg" className="text-link hover:underline">
              NRG
            </Link>{" "}
            decide whether your core acts twice with real skills or once with a
            basic.
          </p>
          <p>
            <strong className="text-foreground">Investment focus</strong> — under-starred
            enablers fail first. See{" "}
            <Link href="/guides/shard-priority" className="text-link hover:underline">
              shard priority
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Prep checklist (before you enter)</h2>
        <ol className="list-decimal space-y-3 pl-5 text-muted">
          <li>
            <strong className="text-foreground">Read the stage roles</strong> —
            list enemy roles; bring at least one unit who counters the densest
            threat pack.
          </li>
          <li>
            <strong className="text-foreground">Lock a 5–6 unit core</strong> —
            enabler + primary DPS + frontline + 2–3 flex. Templates:{" "}
            <Link href="/guides/early-teams" className="text-link hover:underline">
              early teams
            </Link>
            ,{" "}
            <Link href="/teams" className="text-link hover:underline">
              teams hub
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Gear the two cores first</strong> —
            weapon + trinket + tarot on enabler and main carry before spreading
            legendaries. Browse{" "}
            <Link href="/weapons" className="text-link hover:underline">
              weapons
            </Link>{" "}
            /{" "}
            <Link href="/tarots" className="text-link hover:underline">
              tarots
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Simulate coverage</strong> — load the
            team in{" "}
            <Link href="/tools/team-builder" className="text-link hover:underline">
              Team Builder
            </Link>{" "}
            and fix Watcher / Defender / DPS holes.
          </li>
        </ol>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Suggested slot labels</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-soft)] text-muted">
                <th className="py-2 pr-3 font-medium">Slot</th>
                <th className="py-2 pr-3 font-medium">Job</th>
                <th className="py-2 font-medium">Example direction</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">1</td>
                <td className="py-2 pr-3">Enabler / battery</td>
                <td className="py-2">Inanna / SP Inanna line</td>
              </tr>
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">2</td>
                <td className="py-2 pr-3">Primary DPS</td>
                <td className="py-2">Match stage (Seeker / Breaker / Destroyer)</td>
              </tr>
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">3</td>
                <td className="py-2 pr-3">Frontline</td>
                <td className="py-2">Defender who can hold a tile</td>
              </tr>
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">4</td>
                <td className="py-2 pr-3">Secondary DPS / DoT</td>
                <td className="py-2">Long-fight chip (e.g. infection cores)</td>
              </tr>
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">5–6</td>
                <td className="py-2 pr-3">Flex</td>
                <td className="py-2">Faction aura, magic lane, or emergency heal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-muted">
          Full party theory:{" "}
          <Link href="/guides/party-building" className="text-link hover:underline">
            party building guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">In-fight priorities</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>Kill or lock the enemy enabler / healer first when the map allows.</li>
          <li>
            Spend Act Again on the unit who finishes the real threat, not random
            chip.
          </li>
          <li>Protect your battery—dead enablers end Spiral runs faster than dead flex DPS.</li>
          <li>
            If the fight goes long, switch to NRG-safe skills mid-map instead of
            spamming ultimates every turn.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Wipe post-mortem</h2>
        <div className="soc-parchment space-y-2 p-5 text-sm text-[var(--ink-muted)]">
          <p>• <strong className="text-[var(--ink)]">Died turn 3–4</strong> — frontline or positioning; not enough Defender / cover.</p>
          <p>• <strong className="text-[var(--ink)]">Stalled turn 8+</strong> — damage hole or wrong matchups; swap DPS role.</p>
          <p>• <strong className="text-[var(--ink)]">Skills disappeared mid-fight</strong> — NRG plan failed; add battery / stagger.</p>
          <p>• <strong className="text-[var(--ink)]">Boss immune feeling</strong> — check role triangle and Destroyer/Watcher lane.</p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="soc-section-title">Related</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="/tier-list" className="soc-btn !py-1.5">
            Tier list →
          </Link>
          <Link href="/tools/team-builder" className="soc-btn !py-1.5">
            Team Builder →
          </Link>
          <Link href="/guides/nrg" className="soc-btn !py-1.5">
            NRG →
          </Link>
          <Link href="/guides/act-again" className="soc-btn !py-1.5">
            Act Again →
          </Link>
        </div>
      </section>
    </article>
  );
}
