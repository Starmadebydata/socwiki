import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/AuthorByline";
import { SITE_FOUNDER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "SoC Wiki public changelog: trust pages, Top 30 deep guides, factions, IndexNow, analytics, and site reliability fixes.",
  alternates: { canonical: "/changelog" },
};

type Entry = {
  date: string;
  title: string;
  items: string[];
};

const ENTRIES: Entry[] = [
  {
    date: "2026-08-03",
    title: "Trust, Top 30 depth, and discoverability",
    items: [
      "Expanded About / Contact / Privacy / Editorial with founder bio (Jason / WindFlash) and contact@socwiki.app.",
      "Added Disclaimer and Terms of Use; footer legal links completed.",
      "Top 20 hand-written deep guides plus ranks 21–30 deep notes (Geralt, Lutfi, Marcille, collab and SP flex cores).",
      "Player notes on every character page; gear “how to think about” explainers.",
      "Faction hubs (/factions) with sample cores and roster cards.",
      "Google Analytics 4 (G-D1R4M8PKM1); Bing IndexNow key + sitemap submit script.",
      "Single-Worker routing for www + apex to stop intermittent Not found races.",
      "Author bylines and this public changelog for E-E-A-T.",
    ],
  },
  {
    date: "2026-08-02",
    title: "Wiki content foundation",
    items: [
      "Character database with builds, skill tables, and gear reverse links.",
      "Tier list and reroll list; beginner and systems guides.",
      "Team Builder with presets and shareable URLs; codes list with verification dates.",
      "Official-style portraits and gear icons pass.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Site journal</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Changelog
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="text-muted">
        Public notes on what changed on SoC Wiki. Maintained by{" "}
        {SITE_FOUNDER.name}. Not a game patch log—for client updates, check
        official channels.
      </p>

      <div className="mt-6">
        <AuthorByline />
      </div>

      <div className="mt-10 space-y-10">
        {ENTRIES.map((e) => (
          <section key={e.date} className="soc-frame p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              {e.date}
            </p>
            <h2 className="font-display mt-1 text-xl font-semibold tracking-wide text-foreground">
              {e.title}
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
              {e.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm text-muted">
        Related:{" "}
        <Link href="/about" className="text-link hover:underline">
          About
        </Link>
        {" · "}
        <Link href="/editorial-policy" className="text-link hover:underline">
          Editorial policy
        </Link>
        {" · "}
        <Link href="/contact" className="text-link hover:underline">
          Contact
        </Link>
      </p>
    </article>
  );
}
