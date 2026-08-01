import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trinkets",
  description: "Sword of Convallaria trinkets database (coming soon).",
  alternates: { canonical: "/trinkets" },
};

export default function TrinketsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Trinkets</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Trinket database landing — P1. See character build tables for current
        recommendations.
      </p>
      <Link
        href="/characters"
        className="mt-6 inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-card-hover"
      >
        Browse characters →
      </Link>
    </div>
  );
}
