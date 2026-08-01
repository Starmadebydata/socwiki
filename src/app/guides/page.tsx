import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Sword of Convallaria beginner guides, systems explainers, and mode walkthroughs.",
  alternates: { canonical: "/guides" },
};

const GUIDES = [
  {
    href: "/guides/beginner",
    title: "Beginner Guide",
    blurb: "First week priorities, resources, and common mistakes.",
  },
  {
    href: "/guides/role-matchups",
    title: "Role Matchups",
    blurb: "Breaker, Defender, Seeker, Watcher, Destroyer explained.",
  },
  {
    href: "/tier-list/reroll",
    title: "Reroll Guide",
    blurb: "Who is worth restarting for.",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Guides</h1>
      <p className="mt-2 text-muted">
        Long-form guides that complement the character database.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <li key={g.href}>
            <Link
              href={g.href}
              className="block rounded-2xl border border-border bg-card p-5 hover:bg-card-hover"
            >
              <div className="font-semibold">{g.title}</div>
              <p className="mt-1 text-sm text-muted">{g.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
