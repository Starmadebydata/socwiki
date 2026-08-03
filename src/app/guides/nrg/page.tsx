import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "NRG Guide (Energy & Batteries)",
  description:
    "Sword of Convallaria NRG explained: how energy works, skill costs, battery supports, gear that helps, and how to avoid empty turns in long fights.",
  alternates: { canonical: "/guides/nrg" },
};

const UPDATED = "2026-08-03";

export default function NrgGuidePage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NRG in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NRG is the per-unit energy resource spent to cast skills. Units regenerate NRG over turns and from supports, gear, and some passives. Running dry means weak basic attacks instead of your build’s real tools.",
        },
      },
      {
        "@type": "Question",
        name: "How do I fix NRG problems in SoC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Add a battery Watcher, equip NRG-friendly weapons or charms, stagger expensive skills across the team, and do not Act Again a unit who only has 0–1 NRG left for a key skill.",
        },
      },
      {
        "@type": "Question",
        name: "Is NRG more important in Spiral of Destinies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Longer fights and harder stages punish greedy skill spam. Plan multi-turn skill rotations before you enter Spiral or Weaponry Trials.",
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
        name: "NRG",
        item: `${SITE_URL}/guides/nrg`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />
      <p className="soc-heading-sm">Systems · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        NRG Guide
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="text-lg text-muted">
        NRG is why some teams look fine on paper and stall on turn 6. Manage energy
        like a second HP bar for your skill plan.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Core rules</h2>
        <ul className="list-disc space-y-2 pl-5 text-muted">
          <li>
            Skills cost NRG; basics usually do not. Your build’s value is almost
            always in skills.
          </li>
          <li>
            Regeneration is steady but slow compared to multi-skill rounds (
            <Link href="/guides/act-again" className="text-link hover:underline">
              Act Again
            </Link>{" "}
            spends two skill budgets).
          </li>
          <li>
            Supports, trinkets, and some weapons refund or reduce effective cost.
            That is why “battery” is a real party slot.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Where teams run dry</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              t: "Double skill rounds",
              d: "Act Again + expensive ultimates without a battery.",
            },
            {
              t: "Long boss phases",
              d: "Spiral / Trials stages that outlast burst windows.",
            },
            {
              t: "No enabler economy",
              d: "Six damage kits, zero NRG refund or shared battery.",
            },
            {
              t: "Wrong gear",
              d: "All-in crit weapons with no NRG comfort on the main carry.",
            },
          ].map((x) => (
            <div key={x.t} className="soc-frame p-4">
              <div className="font-display font-semibold tracking-wide text-[var(--accent-bright)]">
                {x.t}
              </div>
              <p className="mt-1 text-sm text-muted">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Fixes that actually work</h2>
        <ol className="list-decimal space-y-3 pl-5 text-muted">
          <li>
            <strong className="text-foreground">One battery identity</strong> — a
            Watcher whose kit refunds, shares, or accelerates NRG. Build them
            early; they enable every carry you own. Rank them in{" "}
            <Link href="/guides/shard-priority" className="text-link hover:underline">
              shard priority
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Stagger skills</strong> — not every
            unit needs to ultimate the same turn. Rotate big skills so regeneration
            covers the team.
          </li>
          <li>
            <strong className="text-foreground">Gear with intent</strong> — use NRG
            comfort pieces when the stage is long.{" "}
            <Link
              href="/trinkets/nrg-battery-charm"
              className="text-link hover:underline"
            >
              NRG Battery Charm
            </Link>
            -style items and support weapons (e.g.{" "}
            <Link href="/weapons/staff-of-iria" className="text-link hover:underline">
              Staff of Iria
            </Link>
            ) exist for this.
          </li>
          <li>
            <strong className="text-foreground">Act Again discipline</strong> —
            only double-turn a unit who can cast twice or who needs the second move
            to secure a kill. Empty second actions are NRG tax.
          </li>
        </ol>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Quick planning table</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-soft)] text-muted">
                <th className="py-2 pr-3 font-medium">Fight length</th>
                <th className="py-2 pr-3 font-medium">NRG priority</th>
                <th className="py-2 font-medium">Team note</th>
              </tr>
            </thead>
            <tbody className="text-muted">
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">Story rush</td>
                <td className="py-2 pr-3">Low–medium</td>
                <td className="py-2">Burst first; battery optional</td>
              </tr>
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">Boss / multi-wave</td>
                <td className="py-2 pr-3">High</td>
                <td className="py-2">Battery + staggered ultimates</td>
              </tr>
              <tr className="border-b border-[var(--border-soft)]/60">
                <td className="py-2 pr-3 text-foreground">Spiral / Trials</td>
                <td className="py-2 pr-3">Very high</td>
                <td className="py-2">
                  Plan rotations; see{" "}
                  <Link
                    href="/guides/spiral-of-destinies"
                    className="text-link hover:underline"
                  >
                    Spiral guide
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="soc-section-title">Checklist before deploy</h2>
        <div className="soc-parchment p-5 text-sm text-[var(--ink-muted)]">
          <ul className="list-disc space-y-1.5 pl-4">
            <li>Who spends the most NRG in the first three turns?</li>
            <li>Who refunds NRG for that unit?</li>
            <li>If Act Again fires, can the target still cast a real skill?</li>
            <li>Is there a long phase where everyone will be dry together?</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="soc-section-title">Related</h2>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link href="/guides/act-again" className="soc-btn !py-1.5">
            Act Again →
          </Link>
          <Link href="/guides/party-building" className="soc-btn !py-1.5">
            Party building →
          </Link>
          <Link href="/trinkets" className="soc-btn !py-1.5">
            Trinkets →
          </Link>
          <Link href="/guides/spiral-of-destinies" className="soc-btn !py-1.5">
            Spiral of Destinies →
          </Link>
        </div>
      </section>
    </article>
  );
}
