import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "SoC Wiki editorial policy: how we rate tiers, update builds, source notes, and correct errors for Sword of Convallaria guides and databases.",
  alternates: { canonical: "/editorial-policy" },
};

export default function EditorialPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Editorial Policy</h1>
      <p className="mt-4 text-muted leading-relaxed">
        Tier lists and builds are opinions based on current meta and testing
        notes. Pages show Last updated dates. We correct errors when reported.
      </p>
    </div>
  );
}
