import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teams",
  description:
    "Sword of Convallaria team compositions and sample comps. Use Team Builder to experiment.",
  alternates: { canonical: "/teams" },
};

export default function TeamsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Teams</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Curated comps will live here. For now, try the interactive builder.
      </p>
      <Link
        href="/tools/team-builder"
        className="mt-6 inline-flex rounded-lg border border-accent/40 bg-accent-soft px-4 py-2 text-sm text-accent hover:opacity-90"
      >
        Open Team Builder →
      </Link>
    </div>
  );
}
