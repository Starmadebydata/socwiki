import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { RoleAvatar, RolePill } from "@/components/RoleAvatar";
import { TierBadge } from "@/components/TierBadge";
import {
  getAllCharacters,
  getCharacterBySlug,
  getCharacterMap,
} from "@/data/characters";
import { getCharacterImage } from "@/data/character-images";
import { TOP20_SLUGS } from "@/data/top20";
import { gearPath, getGearBySlug } from "@/data/gear";
import { roleStyle } from "@/lib/role-styles";
import { SITE_URL, pageTitle } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCharacters().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCharacterBySlug(slug);
  if (!c) return { title: "Character not found" };

  const title = `${c.name} Build & Skill Tree Guide`;
  const description = `Best ${c.name} build in Sword of Convallaria (SoC): skill table, weapon, trinket, tarot, and team synergies. Role: ${c.role}. Updated ${c.lastUpdated}.`;

  return {
    title,
    description,
    alternates: { canonical: `/characters/${c.slug}` },
    openGraph: {
      title: pageTitle(title),
      description,
      url: `${SITE_URL}/characters/${c.slug}`,
    },
  };
}

export default async function CharacterPage({ params }: Props) {
  const { slug } = await params;
  const c = getCharacterBySlug(slug);
  if (!c) notFound();

  const map = getCharacterMap();
  const synergyChars = c.synergies.map((s) => map[s]).filter(Boolean);
  const weapon = getGearBySlug(c.build.weaponSlug);
  const trinket = getGearBySlug(c.build.trinketSlug);
  const tarot = getGearBySlug(c.build.tarotSlug);
  const rs = roleStyle(c.role);
  const isRefined = TOP20_SLUGS.includes(c.slug);
  const images = getCharacterImage(c.slug);

  const gearRows = [
    ["Weapon", weapon],
    ["Trinket", trinket],
    ["Tarot", tarot],
  ] as const;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the best build for ${c.name} in Sword of Convallaria?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Recommended loadout: ${c.build.basicAttack} / ${c.build.reaction} / skills ${c.build.skills.join(", ")}; gear ${weapon?.name ?? c.build.weaponSlug}, ${trinket?.name ?? c.build.trinketSlug}, ${tarot?.name ?? c.build.tarotSlug}.`,
        },
      },
      {
        "@type": "Question",
        name: `What role is ${c.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${c.name} is a ${c.rarity} ${c.role} in factions ${c.factions.join(", ")}. Overall tier: ${c.tier.overall}.`,
        },
      },
      {
        "@type": "Question",
        name: `Is ${c.name} worth investing in?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Star priority: ${c.starPriority}. Reroll tier: ${c.tier.reroll}. ${c.summary}`,
        },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Characters",
        item: `${SITE_URL}/characters`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: c.name,
        item: `${SITE_URL}/characters/${c.slug}`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />

      <nav className="mb-4 text-sm text-muted">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/characters" className="hover:text-foreground">
          Characters
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{c.name}</span>
      </nav>

      {/* Hero */}
      <header
        className="relative mb-8 overflow-hidden rounded-3xl border border-border p-5 sm:p-7"
        style={{
          background: `linear-gradient(135deg, ${rs.soft} 0%, rgba(18,24,34,0.95) 48%, #121822 100%)`,
        }}
      >
        {images?.art && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images.art}
            alt=""
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-[55%] object-cover object-top opacity-35 sm:w-[48%] sm:opacity-45"
            aria-hidden
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#121822] via-[#121822]/92 to-transparent sm:via-[#121822]/80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
          style={{ background: rs.hex }}
        />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4 sm:gap-5">
            <RoleAvatar name={c.name} role={c.role} slug={c.slug} size="xl" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {c.name}
                </h1>
                <TierBadge tier={c.tier.overall} />
                {isRefined && (
                  <span className="rounded-full border border-accent/40 bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                    Top 20 · Refined
                  </span>
                )}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <RolePill role={c.role} />
                <span className="text-xs text-muted">{c.rarity}</span>
                <span className="text-xs text-muted">·</span>
                <span className="text-xs text-muted">
                  {c.factions.join(" · ")}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {c.summary}
              </p>
              <p className="mt-2 text-xs text-muted">
                Last updated: {c.lastUpdated}
              </p>
            </div>
          </div>
          <Link
            href="/tier-list"
            className="shrink-0 rounded-xl border border-border bg-card/80 px-3 py-2 text-center text-xs text-muted hover:text-foreground"
          >
            View tier list →
          </Link>
        </div>
      </header>

      {/* Stats strip */}
      <section className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Move", String(c.move)],
          ["High / Low Jump", `${c.highJump} / ${c.lowJump}`],
          ["ST / AoE tier", `${c.tier.single} / ${c.tier.multi}`],
          ["Reroll tier", c.tier.reroll],
        ].map(([label, value]) => (
          <div key={label} className="panel px-4 py-3">
            <div className="text-[11px] uppercase tracking-wide text-muted">
              {label}
            </div>
            <div className="mt-1 font-semibold">{value}</div>
          </div>
        ))}
      </section>

      {/* Quick Build */}
      <section className="mb-10" aria-labelledby="build-heading">
        <h2 id="build-heading" className="mb-3 text-xl font-semibold">
          Quick Build
        </h2>
        <div className="panel overflow-x-auto">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="text-muted">
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-medium">Slot</th>
                <th className="px-4 py-3 text-left font-medium">
                  Recommendation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/80">
                <td className="px-4 py-2.5 font-medium text-muted">
                  Basic Attack
                </td>
                <td className="px-4 py-2.5">{c.build.basicAttack}</td>
              </tr>
              <tr className="border-t border-border/80">
                <td className="px-4 py-2.5 font-medium text-muted">Reaction</td>
                <td className="px-4 py-2.5">{c.build.reaction}</td>
              </tr>
              <tr className="border-t border-border/80">
                <td className="px-4 py-2.5 font-medium text-muted">Skills</td>
                <td className="px-4 py-2.5">{c.build.skills.join(" · ")}</td>
              </tr>
              {gearRows.map(([label, item]) => (
                <tr key={label} className="border-t border-border/80">
                  <td className="px-4 py-2.5 font-medium text-muted">{label}</td>
                  <td className="px-4 py-2.5">
                    {item ? (
                      <Link
                        href={gearPath(item)}
                        className="text-link hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      "—"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 grid gap-8 lg:grid-cols-2">
        <div className="panel p-5">
          <h2 className="mb-3 text-xl font-semibold">Pros</h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted">
            {c.pros.map((p) => (
              <li key={p} className="text-foreground/90">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel p-5">
          <h2 className="mb-3 text-xl font-semibold">How to use</h2>
          <p className="text-sm leading-relaxed text-muted">{c.howToUse}</p>
          <p className="mt-3 text-sm">
            <span className="text-muted">Star priority: </span>
            <span className="text-accent">{c.starPriority}</span>
          </p>
        </div>
      </section>

      {/* Full skill table */}
      <section className="mb-10" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="mb-3 text-xl font-semibold">
          Skill table
        </h2>
        <p className="mb-3 text-sm text-muted">
          Priority stars are SoC Wiki recommendations for general PvE. NRG/CD
          values are approximate guide bands—confirm in-game for patches.
        </p>
        <div className="panel overflow-x-auto">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="text-muted">
              <tr className="border-b border-border">
                <th className="px-3 py-3 text-left font-medium">Skill</th>
                <th className="px-3 py-3 text-left font-medium">Type</th>
                <th className="px-3 py-3 text-left font-medium">NRG</th>
                <th className="px-3 py-3 text-left font-medium">CD</th>
                <th className="px-3 py-3 text-left font-medium">Priority</th>
                <th className="px-3 py-3 text-left font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {c.skillPriority.map((s) => (
                <tr key={s.name} className="border-t border-border/80 align-top">
                  <td className="px-3 py-3 font-medium">{s.name}</td>
                  <td className="px-3 py-3">
                    <span className="rounded-md border border-border bg-background/60 px-1.5 py-0.5 text-[11px] text-muted">
                      {s.kind}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-muted">{s.nrg ?? "—"}</td>
                  <td className="px-3 py-3 text-muted">{s.cd ?? "—"}</td>
                  <td className="px-3 py-3 text-accent whitespace-nowrap">
                    {"★".repeat(s.stars)}
                    <span className="text-muted">
                      {"★".repeat(Math.max(0, 5 - s.stars))}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-muted">
                    <div>{s.note}</div>
                    {s.description && (
                      <div className="mt-1 text-xs opacity-80">
                        {s.description}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {synergyChars.length > 0 && (
        <section className="mb-10" aria-labelledby="synergy-heading">
          <h2 id="synergy-heading" className="mb-3 text-xl font-semibold">
            Synergies
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {synergyChars.map(
              (s) =>
                s && (
                  <Link
                    key={s.slug}
                    href={`/characters/${s.slug}`}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-3 hover:bg-card-hover"
                  >
                    <RoleAvatar
                      name={s.name}
                      role={s.role}
                      slug={s.slug}
                      size="sm"
                    />
                    <div className="min-w-0">
                      <div className="truncate font-medium">{s.name}</div>
                      <div className="text-xs text-muted">{s.role}</div>
                    </div>
                    <TierBadge tier={s.tier.overall} />
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      <section className="panel mb-6 p-5">
        <h2 className="mb-3 text-lg font-semibold">FAQ</h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-medium">
              What is the best build for {c.name}?
            </dt>
            <dd className="mt-1 text-muted">
              Use Quick Build and the skill table above, then adjust for stage
              constraints (NRG, cover, single vs multi).
            </dd>
          </div>
          <div>
            <dt className="font-medium">Is {c.name} good for rerolls?</dt>
            <dd className="mt-1 text-muted">
              Reroll tier: {c.tier.reroll}. See the{" "}
              <Link href="/tier-list" className="text-link hover:underline">
                full tier list
              </Link>
              .
            </dd>
          </div>
        </dl>
      </section>
    </article>
  );
}
