import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TierBadge } from "@/components/TierBadge";
import {
  getAllCharacters,
  getCharacterBySlug,
  getCharacterMap,
} from "@/data/characters";
import { gearPath, getGearBySlug } from "@/data/gear";
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
  const description = `Best ${c.name} build in Sword of Convallaria (SoC): skill tree, weapon, trinket, tarot, and team synergies. Role: ${c.role}. Updated ${c.lastUpdated}.`;

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

      <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div className="flex gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border bg-accent-soft text-xl font-bold text-accent"
            aria-hidden
          >
            {c.name.slice(0, 2)}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{c.name}</h1>
            <p className="mt-2 max-w-2xl text-muted">{c.summary}</p>
            <p className="mt-2 text-xs text-muted">
              Last updated: {c.lastUpdated}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <TierBadge tier={c.tier.overall} />
          <Link
            href="/tier-list"
            className="rounded-md border border-border px-2 py-0.5 text-xs text-muted hover:text-foreground"
          >
            Full tier list
          </Link>
        </div>
      </header>

      <section className="mb-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-border">
              <th className="bg-card px-4 py-2 text-left font-medium text-muted">
                Rarity
              </th>
              <td className="px-4 py-2">{c.rarity}</td>
              <th className="bg-card px-4 py-2 text-left font-medium text-muted">
                Role
              </th>
              <td className="px-4 py-2">
                <Link
                  href={`/characters/role/${c.role.toLowerCase()}`}
                  className="text-link hover:underline"
                >
                  {c.role}
                </Link>
              </td>
            </tr>
            <tr className="border-b border-border">
              <th className="bg-card px-4 py-2 text-left font-medium text-muted">
                Factions
              </th>
              <td className="px-4 py-2" colSpan={3}>
                {c.factions.join(" · ")}
              </td>
            </tr>
            <tr className="border-b border-border">
              <th className="bg-card px-4 py-2 text-left font-medium text-muted">
                Move / Jump
              </th>
              <td className="px-4 py-2" colSpan={3}>
                Move {c.move} · High {c.highJump} · Low {c.lowJump}
              </td>
            </tr>
            <tr>
              <th className="bg-card px-4 py-2 text-left font-medium text-muted">
                Tiers
              </th>
              <td className="px-4 py-2" colSpan={3}>
                <span className="mr-3 inline-flex items-center gap-1">
                  Overall <TierBadge tier={c.tier.overall} />
                </span>
                <span className="mr-3 inline-flex items-center gap-1">
                  ST <TierBadge tier={c.tier.single} />
                </span>
                <span className="mr-3 inline-flex items-center gap-1">
                  AoE <TierBadge tier={c.tier.multi} />
                </span>
                <span className="inline-flex items-center gap-1">
                  Reroll <TierBadge tier={c.tier.reroll} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-10" aria-labelledby="build-heading">
        <h2 id="build-heading" className="mb-3 text-xl font-semibold">
          Quick Build
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="bg-card text-muted">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Slot</th>
                <th className="px-4 py-2 text-left font-medium">
                  Recommendation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-2 font-medium text-muted">
                  Basic Attack
                </td>
                <td className="px-4 py-2">{c.build.basicAttack}</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2 font-medium text-muted">Reaction</td>
                <td className="px-4 py-2">{c.build.reaction}</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2 font-medium text-muted">Skills</td>
                <td className="px-4 py-2">{c.build.skills.join(" · ")}</td>
              </tr>
              {gearRows.map(([label, item]) => (
                <tr key={label} className="border-t border-border">
                  <td className="px-4 py-2 font-medium text-muted">{label}</td>
                  <td className="px-4 py-2">
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
        <div>
          <h2 className="mb-3 text-xl font-semibold">Pros</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted">
            {c.pros.map((p) => (
              <li key={p} className="text-foreground/90">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-3 text-xl font-semibold">How to use</h2>
          <p className="text-sm leading-relaxed text-muted">{c.howToUse}</p>
          <p className="mt-3 text-sm">
            <span className="text-muted">Star priority: </span>
            {c.starPriority}
          </p>
        </div>
      </section>

      <section className="mb-10" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="mb-3 text-xl font-semibold">
          Skill priority
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="bg-card text-muted">
              <tr>
                <th className="px-4 py-2 text-left font-medium">Skill</th>
                <th className="px-4 py-2 text-left font-medium">Priority</th>
                <th className="px-4 py-2 text-left font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              {c.skillPriority.map((s) => (
                <tr key={s.name} className="border-t border-border">
                  <td className="px-4 py-2 font-medium">{s.name}</td>
                  <td className="px-4 py-2 text-accent">
                    {"★".repeat(s.stars)}
                    <span className="text-muted">
                      {"★".repeat(Math.max(0, 5 - s.stars))}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-muted">{s.note}</td>
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
          <div className="flex flex-wrap gap-2">
            {synergyChars.map(
              (s) =>
                s && (
                  <Link
                    key={s.slug}
                    href={`/characters/${s.slug}`}
                    className="rounded-lg border border-border bg-card px-3 py-2 text-sm hover:bg-card-hover"
                  >
                    {s.name}{" "}
                    <span className="text-muted">({s.role})</span>
                  </Link>
                ),
            )}
          </div>
        </section>
      )}

      <section className="mb-6 rounded-2xl border border-border bg-card p-5">
        <h2 className="mb-3 text-lg font-semibold">FAQ</h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-medium">
              What is the best build for {c.name}?
            </dt>
            <dd className="mt-1 text-muted">
              Use the Quick Build table above for the default loadout, then
              adjust skills for stage constraints.
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
