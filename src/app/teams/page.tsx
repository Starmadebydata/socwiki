import type { Metadata } from "next";
import Link from "next/link";
import { TEAM_PRESETS } from "@/data/team-presets";
import { getCharacterBySlug } from "@/data/characters";
import { RoleAvatar } from "@/components/RoleAvatar";

export const metadata: Metadata = {
  title: "Best Teams & Comps",
  description:
    "Sword of Convallaria best teams and early comps: curated presets with role jobs, character links, and one-click load into the interactive Team Builder.",
  alternates: { canonical: "/teams" },
};

export default function TeamsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <p className="soc-heading-sm">Comps</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Teams
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-2xl text-muted">
        Start with curated comps, then experiment in the interactive builder.
        Presets load with a single click and can be shared via URL. These are
        teaching boards—not the only correct meta.
      </p>

      <section className="mt-6 soc-frame p-5 text-sm leading-relaxed text-muted">
        <h2 className="soc-heading text-base text-foreground">
          How to read a preset
        </h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>
            <strong className="text-foreground">Goal label</strong> tells you
            the job (story, survival, boss, spiral)—swap units if your roster
            differs.
          </li>
          <li>
            Keep at least one real enabler and one frontline before chasing
            aura counts.
          </li>
          <li>
            After loading a preset, check coach notes in the{" "}
            <Link
              href="/tools/team-builder"
              className="text-link hover:underline"
            >
              Team Builder
            </Link>{" "}
            for missing Watcher/Defender/DPS holes.
          </li>
        </ul>
      </section>

      <div className="mt-8">
        <Link
          href="/tools/team-builder"
          className="soc-frame group flex flex-col gap-2 p-6 transition hover:border-[var(--border-bright)] sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="font-display text-xl font-semibold tracking-wide text-[var(--accent-bright)]">
              Open Team Builder
            </div>
            <p className="mt-1 text-sm text-muted">
              Filter roster, load presets, check role/faction coverage, copy
              share links.
            </p>
          </div>
          <span className="soc-btn-accent soc-btn shrink-0 !px-5">
            Launch →
          </span>
        </Link>
      </div>

      <section className="mt-12" aria-labelledby="presets">
        <h2 id="presets" className="soc-section-title mb-4">
          Curated presets
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {TEAM_PRESETS.map((p) => (
            <div key={p.id} className="soc-frame flex flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-wide">
                  {p.name}
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                  {p.goal}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.slugs.map((slug) => {
                  const c = getCharacterBySlug(slug);
                  if (!c) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/characters/${slug}`}
                      className="flex items-center gap-1.5 rounded-full border border-[var(--border-soft)] bg-[var(--card-deep)] pr-2.5"
                    >
                      <RoleAvatar
                        name={c.name}
                        role={c.role}
                        slug={c.slug}
                        size="sm"
                        className="!h-8 !w-8"
                      />
                      <span className="text-xs">{c.name}</span>
                    </Link>
                  );
                })}
              </div>
              <Link
                href={`/tools/team-builder?team=${p.slugs.join(",")}`}
                className="soc-btn mt-4 self-start !py-1.5 !text-xs"
              >
                Load in builder →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-3 sm:grid-cols-2">
        <Link href="/guides/early-teams" className="soc-hub-tile">
          <div className="font-display font-semibold">Early teams guide</div>
          <p className="mt-1 text-sm text-muted">
            Full write-up with swap rules and when to use each comp.
          </p>
        </Link>
        <Link href="/guides/party-building" className="soc-hub-tile">
          <div className="font-display font-semibold">Party building theory</div>
          <p className="mt-1 text-sm text-muted">
            Role slots, turn economy, and faction glue.
          </p>
        </Link>
      </section>
    </div>
  );
}
