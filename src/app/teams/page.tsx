import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Sword of Convallaria team compositions—early game samples and Team Builder tool.",
  alternates: { canonical: "/teams" },
};

export default function TeamsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Teams</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Start with curated early comps, then experiment in the interactive
        builder.
      </p>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <Link
          href="/guides/early-teams"
          className="rounded-2xl border border-border bg-card p-5 hover:bg-card-hover"
        >
          <div className="font-semibold">Early game sample teams</div>
          <p className="mt-1 text-sm text-muted">
            Iria start, DoT pressure, and meta aspirational rosters.
          </p>
        </Link>
        <Link
          href="/guides/party-building"
          className="rounded-2xl border border-border bg-card p-5 hover:bg-card-hover"
        >
          <div className="font-semibold">Party building theory</div>
          <p className="mt-1 text-sm text-muted">
            Role slots, enablers, and faction glue.
          </p>
        </Link>
        <Link
          href="/tools/team-builder"
          className="rounded-2xl border border-accent/40 bg-accent-soft p-5 sm:col-span-2"
        >
          <div className="font-semibold text-accent">Open Team Builder →</div>
          <p className="mt-1 text-sm text-muted">
            Pick up to 6 units; inspect role coverage and faction overlap.
          </p>
        </Link>
      </div>
    </div>
  );
}
