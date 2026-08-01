import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarot Whispers",
  description: "Sword of Convallaria Tarot Whispers database (coming soon).",
  alternates: { canonical: "/tarots" },
};

export default function TarotsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Tarot Whispers</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Tarot database landing — P1. Character pages already list recommended
        tarots in Quick Build.
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
