import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About SoC Wiki — Sword of Convallaria community database.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">About SoC Wiki</h1>
      <p className="mt-4 text-muted leading-relaxed">
        SoC Wiki (socwiki.app) is an independent fan database for Sword of
        Convallaria. We focus on structured builds, tier lists, and tools — not
        affiliated with XD Entertainment.
      </p>
    </div>
  );
}
