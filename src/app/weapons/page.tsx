import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Weapons",
  description:
    "Sword of Convallaria weapons database — best weapons and recommended characters (coming soon).",
  alternates: { canonical: "/weapons" },
};

export default function WeaponsPage() {
  return (
    <Placeholder
      title="Weapons"
      blurb="Weapon list and reverse 'Best on' indexes are planned for P1. For now, open character Quick Build tables for recommended weapons."
      cta={{ href: "/characters", label: "Browse characters" }}
    />
  );
}

function Placeholder({
  title,
  blurb,
  cta,
}: {
  title: string;
  blurb: string;
  cta: { href: string; label: string };
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{blurb}</p>
      <Link
        href={cta.href}
        className="mt-6 inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-card-hover"
      >
        {cta.label} →
      </Link>
    </div>
  );
}
