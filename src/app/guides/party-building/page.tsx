import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Party Building Guide",
  description:
    "How to build parties in Sword of Convallaria: role coverage, faction auras, Act Again enablers, and sample structures.",
  alternates: { canonical: "/guides/party-building" },
};

export default function PartyBuildingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Party Building Guide</h1>
      <p className="mt-4 leading-relaxed text-muted">
        A reliable SoC squad is less about six SSS units and more about{" "}
        <strong className="text-foreground">role coverage</strong>,{" "}
        <strong className="text-foreground">turn economy</strong> (Act Again /
        NRG), and optional <strong className="text-foreground">faction
        aura</strong> density.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Core structure (5–6 slots)</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-muted">
        <li>
          <strong className="text-foreground">Main carry</strong> — ST or AoE
          damage (Seeker / Breaker / Destroyer).
        </li>
        <li>
          <strong className="text-foreground">Enabler</strong> — Act Again or
          battery support (
          <Link href="/characters/inanna" className="text-link hover:underline">
            Inanna
          </Link>
          ,{" "}
          <Link
            href="/characters/sp-inanna"
            className="text-link hover:underline"
          >
            SP Inanna
          </Link>
          ,{" "}
          <Link href="/characters/taair" className="text-link hover:underline">
            Taair
          </Link>
          ).
        </li>
        <li>
          <strong className="text-foreground">Frontline</strong> — Defender for
          cover / knockback (
          <Link href="/characters/cocoa" className="text-link hover:underline">
            Cocoa
          </Link>
          ,{" "}
          <Link
            href="/characters/sp-maitha"
            className="text-link hover:underline"
          >
            SP Maitha
          </Link>
          ).
        </li>
        <li>
          <strong className="text-foreground">Flex</strong> — second DPS, pure
          healer, or debuffer depending on the stage.
        </li>
        <li>
          <strong className="text-foreground">Faction glue</strong> — extra
          units that complete aura breakpoints when relevant.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold">Role matchups still matter</h2>
      <p className="mt-3 text-muted leading-relaxed">
        Bring answers for enemy roles—see the{" "}
        <Link
          href="/guides/role-matchups"
          className="text-link hover:underline"
        >
          role matchups guide
        </Link>
        . A pure Watcher squad can melt Destroyers but struggle into wrong
        physical matchups.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Try it live</h2>
      <p className="mt-3 text-muted">
        Use the{" "}
        <Link
          href="/tools/team-builder"
          className="text-link hover:underline"
        >
          Team Builder
        </Link>{" "}
        to inspect role coverage and faction overlap, then open each unit&apos;s{" "}
        <Link href="/characters" className="text-link hover:underline">
          build page
        </Link>
        .
      </p>
    </article>
  );
}
