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
import {
  faqAnswers,
  gearDeepDive,
  investmentGuide,
  roleMatchupBlurb,
  rotationTips,
  teamPlan,
} from "@/lib/character-content";
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

  const faqs = faqAnswers(
    c,
    weapon?.name ?? c.build.weaponSlug,
    trinket?.name ?? c.build.trinketSlug,
    tarot?.name ?? c.build.tarotSlug,
  );

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const gearLines = gearDeepDive(c, weapon, trinket, tarot);
  const tips = rotationTips(c);
  const sameRole = getAllCharacters()
    .filter((x) => x.role === c.role && x.slug !== c.slug)
    .sort((a, b) => {
      const order = ["SSS", "SS", "S+", "S", "A", "B", "C"];
      return (
        order.indexOf(a.tier.overall) - order.indexOf(b.tier.overall) ||
        a.name.localeCompare(b.name)
      );
    })
    .slice(0, 4);

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

      {/* Hero — gold frame + client art */}
      <header className="soc-frame relative mb-8 overflow-hidden p-5 sm:p-7">
        {images?.art && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={images.art}
            alt={`${c.name} splash art`}
            className="pointer-events-none absolute inset-y-0 right-0 h-full w-[55%] object-cover object-top opacity-40 sm:w-[48%] sm:opacity-50"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--card-deep)] via-[var(--card-deep)]/92 to-transparent sm:via-[var(--card-deep)]/78"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-25 blur-3xl"
          style={{ background: rs.hex }}
        />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4 sm:gap-5">
            <RoleAvatar name={c.name} role={c.role} slug={c.slug} size="xl" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-display text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
                  {c.name}
                </h1>
                <TierBadge tier={c.tier.overall} />
                {isRefined && (
                  <span className="rounded-full border border-[var(--border-bright)] bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
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
          <Link href="/tier-list" className="soc-btn shrink-0 text-xs">
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
          <div key={label} className="soc-frame px-4 py-3">
            <div className="soc-heading-sm text-[10px]">{label}</div>
            <div className="font-display mt-1 text-lg font-semibold text-[var(--accent-bright)]">
              {value}
            </div>
          </div>
        ))}
      </section>

      {/* Investment + matchup (SEO depth) */}
      <section className="mb-10 grid gap-6 lg:grid-cols-2">
        <div className="soc-frame p-5">
          <h2 className="soc-heading mb-3 text-lg">
            Is {c.name} worth building?
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            {investmentGuide(c)}
          </p>
        </div>
        <div className="soc-frame p-5">
          <h2 className="soc-heading mb-3 text-lg">Role & matchups</h2>
          <p className="text-sm leading-relaxed text-muted">
            {roleMatchupBlurb(c)}{" "}
            <Link
              href="/guides/role-matchups"
              className="text-link hover:underline"
            >
              Full role chart →
            </Link>
          </p>
        </div>
      </section>

      {/* Quick Build */}
      <section className="mb-10" aria-labelledby="build-heading">
        <div className="mb-3 flex items-center gap-3">
          <span className="soc-ribbon">Quick Build</span>
        </div>
        <h2 id="build-heading" className="sr-only">
          Quick Build
        </h2>
        <div className="overflow-x-auto">
          <table className="soc-table min-w-[520px]">
            <thead>
              <tr>
                <th>Slot</th>
                <th>Recommendation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium text-muted">Basic Attack</td>
                <td>{c.build.basicAttack}</td>
              </tr>
              <tr>
                <td className="font-medium text-muted">Reaction</td>
                <td>{c.build.reaction}</td>
              </tr>
              <tr>
                <td className="font-medium text-muted">Skills</td>
                <td>{c.build.skills.join(" · ")}</td>
              </tr>
              {gearRows.map(([label, item]) => (
                <tr key={label}>
                  <td className="font-medium text-muted">{label}</td>
                  <td>
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

      <section className="mb-10 grid gap-6 lg:grid-cols-2">
        <div className="soc-frame p-5">
          <h2 className="soc-heading mb-3 text-lg">Pros</h2>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted">
            {c.pros.map((p) => (
              <li key={p} className="text-foreground/90">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="soc-frame p-5">
          <h2 className="soc-heading mb-3 text-lg">How to use</h2>
          <p className="text-sm leading-relaxed text-muted">{c.howToUse}</p>
          <p className="mt-3 text-sm">
            <span className="text-muted">Star priority: </span>
            <span className="text-accent">{c.starPriority}</span>
          </p>
        </div>
      </section>

      <section className="mb-10 grid gap-6 lg:grid-cols-2">
        <div className="soc-frame p-5">
          <h2 className="soc-heading mb-3 text-lg">Gear deep dive</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted">
            {gearLines.map((line) => (
              <li key={line} className="text-foreground/90">
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-muted">
            Open each gear page for alternatives and Best on lists.
          </p>
        </div>
        <div className="soc-frame p-5">
          <h2 className="soc-heading mb-3 text-lg">Team plan</h2>
          <p className="text-sm leading-relaxed text-muted">{teamPlan(c)}</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted">
            {tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <Link href="/tools/team-builder" className="soc-btn !py-1">
              Team Builder →
            </Link>
            <Link href="/guides/party-building" className="soc-btn !py-1">
              Party building →
            </Link>
            <Link href="/guides/act-again" className="soc-btn !py-1">
              Act Again →
            </Link>
          </div>
        </div>
      </section>

      {/* Full skill table */}
      <section className="mb-10" aria-labelledby="skills-heading">
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <span className="soc-ribbon">Skill table</span>
        </div>
        <h2 id="skills-heading" className="sr-only">
          Skill table
        </h2>
        <p className="mb-3 text-sm text-muted">
          Priority stars are SoC Wiki recommendations for general PvE. NRG/CD
          values are approximate guide bands—confirm in-game for patches.
        </p>
        <div className="overflow-x-auto">
          <table className="soc-table min-w-[720px]">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Type</th>
                <th>NRG</th>
                <th>CD</th>
                <th>Priority</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {c.skillPriority.map((s) => (
                <tr key={s.name} className="align-top">
                  <td className="font-display font-medium tracking-wide">
                    {s.name}
                  </td>
                  <td>
                    <span className="rounded-full border border-[var(--border-soft)] bg-[var(--card-deep)] px-2 py-0.5 text-[11px] text-muted">
                      {s.kind}
                    </span>
                  </td>
                  <td className="text-muted">{s.nrg ?? "—"}</td>
                  <td className="text-muted">{s.cd ?? "—"}</td>
                  <td className="whitespace-nowrap text-accent">
                    {"★".repeat(s.stars)}
                    <span className="text-muted">
                      {"★".repeat(Math.max(0, 5 - s.stars))}
                    </span>
                  </td>
                  <td className="text-muted">
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
          <h2 id="synergy-heading" className="soc-heading mb-3 text-lg">
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

      {sameRole.length > 0 && (
        <section className="mb-10" aria-labelledby="same-role-heading">
          <h2 id="same-role-heading" className="soc-heading mb-3 text-lg">
            Other {c.role}s to compare
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sameRole.map((s) => (
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
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{s.name}</div>
                  <div className="text-xs text-muted">{s.tier.overall}</div>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted">
            Browse the full{" "}
            <Link
              href={`/characters/role/${c.role.toLowerCase()}`}
              className="text-link hover:underline"
            >
              {c.role} roster
            </Link>
            .
          </p>
        </section>
      )}

      <section className="panel mb-6 p-5">
        <h2 className="mb-3 text-lg font-semibold">FAQ</h2>
        <dl className="space-y-4 text-sm">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
