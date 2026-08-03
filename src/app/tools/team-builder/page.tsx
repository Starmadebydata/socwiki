import type { Metadata } from "next";
import Link from "next/link";
import { TeamBuilderClient } from "./TeamBuilderClient";

export const metadata: Metadata = {
  title: "Team Builder — Build & Share Comps",
  description:
    "Sword of Convallaria team builder: pick up to 6 units, load presets, check role matchups and faction auras, then copy a shareable team link.",
  alternates: { canonical: "/tools/team-builder" },
  openGraph: {
    title: "SoC Team Builder — Sword of Convallaria Wiki",
    description:
      "Interactive team builder with presets, role coverage, and shareable URLs for Sword of Convallaria.",
    url: "/tools/team-builder",
  },
};

export default function TeamBuilderPage() {
  return (
    <>
      {/* SSR-visible SEO blurb (client UI mounts below) */}
      <div className="sr-only">
        <h1>Sword of Convallaria Team Builder</h1>
        <p>
          Build a 5–6 unit party for Sword of Convallaria. Load curated presets,
          filter the roster by role and faction, review Watcher/Defender/DPS
          coverage and matchup edges, then copy a share link. Pair with{" "}
          <Link href="/guides/party-building">party building</Link>,{" "}
          <Link href="/guides/early-teams">early teams</Link>, and{" "}
          <Link href="/teams">team comps</Link>.
        </p>
      </div>
      <TeamBuilderClient />
    </>
  );
}
