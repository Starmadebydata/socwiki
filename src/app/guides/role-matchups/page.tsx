import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import type { Role } from "@/types/character";
import { AuthorByline } from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Role Matchups Guide — Visual Chart (2026)",
  description:
    "Sword of Convallaria role matchups explained: Breaker, Defender, Seeker, Watcher, and Destroyer advantage cycle with visual chart and tips.",
  alternates: { canonical: "/guides/role-matchups" },
};

const UPDATED = "2026-08-03";

const ROLE_META: Record<
  Role,
  { color: string; soft: string; hub: string; blurb: string }
> = {
  Breaker: {
    color: "#e74c3c",
    soft: "rgba(231,76,60,0.2)",
    hub: "/characters/role/breaker",
    blurb: "Anti-tank pressure. Ideal into Defenders; punished by Seekers.",
  },
  Defender: {
    color: "#27ae60",
    soft: "rgba(39,174,96,0.2)",
    hub: "/characters/role/defender",
    blurb: "Frontline soak and cover. Strong into Seekers; weak into Breakers.",
  },
  Seeker: {
    color: "#3498db",
    soft: "rgba(52,152,219,0.2)",
    hub: "/characters/role/seeker",
    blurb: "Physical hunters. Slice Breakers; struggle into Defenders.",
  },
  Watcher: {
    color: "#f1c40f",
    soft: "rgba(241,196,15,0.18)",
    hub: "/characters/role/watcher",
    blurb: "Support / hybrid lane. Favored into Destroyers.",
  },
  Destroyer: {
    color: "#9b59b6",
    soft: "rgba(155,89,182,0.2)",
    hub: "/characters/role/destroyer",
    blurb: "Magic / DoT pressure. Soft into Watchers.",
  },
};

/** Physical triangle + magic pair */
const MATCHUPS: {
  role: Role;
  advantage: Role | null;
  disadvantage: Role | null;
}[] = [
  { role: "Breaker", advantage: "Defender", disadvantage: "Seeker" },
  { role: "Defender", advantage: "Seeker", disadvantage: "Breaker" },
  { role: "Seeker", advantage: "Breaker", disadvantage: "Defender" },
  { role: "Watcher", advantage: "Destroyer", disadvantage: null },
  { role: "Destroyer", advantage: null, disadvantage: "Watcher" },
];

export default function RoleMatchupsPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do role matchups work in Sword of Convallaria?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Attacking a role you counter deals increased damage; attacking a role that counters you deals less. Breaker, Defender, and Seeker form a triangle. Watcher and Destroyer form a pair where Watcher has the edge into Destroyer.",
        },
      },
      {
        "@type": "Question",
        name: "Does role matchup override skills and positioning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Matchups are a damage modifier layer. Grid position, skills, buffs, and gear still decide fights—but free matchup damage is the easiest win condition to claim.",
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
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Role Matchups",
        item: `${SITE_URL}/guides/role-matchups`,
      },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />

      <nav className="mb-4 text-sm text-muted">
        <Link href="/guides" className="hover:text-foreground">
          Guides
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Role matchups</span>
      </nav>

      <p className="soc-heading-sm">Systems · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Role Matchups Guide
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <div className="mb-6">
        <AuthorByline updated={UPDATED} compact />
      </div>
      <p className="text-lg leading-relaxed text-[var(--foreground)]/90">
        Five roles shape combat math in Sword of Convallaria. Attacking a
        countered role deals{" "}
        <strong className="text-foreground">more</strong> damage; attacking into
        your counter deals{" "}
        <strong className="text-foreground">less</strong>. Learn the cycle once
        — every stage becomes easier to plan.
      </p>

      {/* Visual: physical triangle */}
      <section className="mt-10" aria-labelledby="viz">
        <h2 id="viz" className="soc-section-title mb-4">
          Visual chart
        </h2>

        <div className="soc-frame relative overflow-hidden p-6 sm:p-8">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
            Physical triangle · arrows = advantage
          </p>

          {/* CSS triangle layout */}
          <div className="relative mx-auto h-[280px] max-w-md sm:h-[320px]">
            {/* SVG arrows behind nodes */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 320 320"
              aria-hidden
            >
              <defs>
                <marker
                  id="arrow"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="rgba(212,181,106,0.85)" />
                </marker>
              </defs>
              {/* Breaker (bottom-left) -> Defender (top) */}
              <line
                x1="70"
                y1="250"
                x2="150"
                y2="70"
                stroke="rgba(212,181,106,0.55)"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
              {/* Defender (top) -> Seeker (bottom-right) */}
              <line
                x1="170"
                y1="70"
                x2="250"
                y2="250"
                stroke="rgba(212,181,106,0.55)"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
              {/* Seeker (bottom-right) -> Breaker (bottom-left) */}
              <line
                x1="240"
                y1="265"
                x2="90"
                y2="265"
                stroke="rgba(212,181,106,0.55)"
                strokeWidth="2"
                markerEnd="url(#arrow)"
              />
            </svg>

            {/* Nodes */}
            <RoleNode
              role="Defender"
              className="absolute left-1/2 top-0 -translate-x-1/2"
            />
            <RoleNode
              role="Breaker"
              className="absolute bottom-0 left-0 sm:left-2"
            />
            <RoleNode
              role="Seeker"
              className="absolute bottom-0 right-0 sm:right-2"
            />
          </div>

          <div className="mt-8 border-t border-[var(--border-soft)] pt-6">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
              Magic pair
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <RoleNode role="Watcher" />
              <div className="flex flex-col items-center text-[var(--accent-bright)]">
                <span className="text-2xl" aria-hidden>
                  →
                </span>
                <span className="text-[10px] uppercase tracking-wide text-muted">
                  advantage
                </span>
              </div>
              <RoleNode role="Destroyer" />
            </div>
            <p className="mt-4 text-center text-xs text-muted">
              Watcher deals more into Destroyer; Destroyer deals less into
              Watcher.
            </p>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="mt-12" aria-labelledby="table">
        <h2 id="table" className="soc-section-title mb-4">
          Full matchup table
        </h2>
        <div className="overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
          <table className="soc-table min-w-[480px] text-sm">
            <thead>
              <tr>
                <th>Role</th>
                <th>Advantage vs</th>
                <th>Disadvantage vs</th>
                <th>Hub</th>
              </tr>
            </thead>
            <tbody>
              {MATCHUPS.map((row) => {
                const meta = ROLE_META[row.role];
                return (
                  <tr key={row.role}>
                    <td>
                      <span
                        className="inline-flex items-center gap-2 font-semibold"
                        style={{ color: meta.color }}
                      >
                        <span
                          className="inline-block h-2.5 w-2.5 rounded-full"
                          style={{ background: meta.color }}
                        />
                        {row.role}
                      </span>
                    </td>
                    <td className="text-muted">
                      {row.advantage ?? (
                        <span className="opacity-50">—</span>
                      )}
                    </td>
                    <td className="text-muted">
                      {row.disadvantage ?? (
                        <span className="opacity-50">—</span>
                      )}
                    </td>
                    <td>
                      <Link
                        href={meta.hub}
                        className="text-link text-xs hover:underline"
                      >
                        units →
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Role cards */}
      <section className="mt-12" aria-labelledby="roles">
        <h2 id="roles" className="soc-section-title mb-4">
          Role cheat sheet
        </h2>
        <ul className="space-y-3">
          {(Object.keys(ROLE_META) as Role[]).map((role) => {
            const m = ROLE_META[role];
            const row = MATCHUPS.find((x) => x.role === role)!;
            return (
              <li key={role}>
                <Link
                  href={m.hub}
                  className="soc-frame block p-4 transition hover:border-[var(--border-bright)]"
                  style={{
                    borderColor: `${m.color}55`,
                    boxShadow: `inset 3px 0 0 ${m.color}`,
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className="font-display text-lg font-semibold tracking-wide"
                      style={{ color: m.color }}
                    >
                      {role}
                    </span>
                    <span className="text-xs text-muted">
                      {row.advantage
                        ? `↑ ${row.advantage}`
                        : "no physical edge"}
                      {row.disadvantage ? ` · ↓ ${row.disadvantage}` : ""}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{m.blurb}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="tips">
        <h2 id="tips" className="soc-section-title mb-4">
          How to use this in real fights
        </h2>
        <ul className="space-y-3 text-sm text-muted">
          <li className="soc-frame p-4">
            <strong className="text-foreground">Scout before deploy</strong>
            <p className="mt-1">
              Identify the enemy’s main shell (tanks, seeker backline, mage
              clump). Bring at least one unit that owns that matchup.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Don’t force bad trades</strong>
            <p className="mt-1">
              A Seeker slamming a Defender wastes a turn even with good gear.
              Reposition, Act Again, or swap focus.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Watcher ≠ free win into magic</strong>
            <p className="mt-1">
              Watcher into Destroyer is favored, but pure support Watchers still
              need a real damage plan for the rest of the map.
            </p>
          </li>
          <li className="soc-frame p-4">
            <strong className="text-foreground">Build teams with holes in mind</strong>
            <p className="mt-1">
              Use the{" "}
              <Link href="/tools/team-builder" className="text-link">
                Team Builder
              </Link>{" "}
              to spot missing roles, then fill from the role hubs above.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12 flex flex-wrap gap-2">
        <Link href="/tools/team-builder" className="soc-btn !text-xs">
          Team Builder →
        </Link>
        <Link href="/guides/party-building" className="soc-btn !text-xs">
          Party building →
        </Link>
        <Link href="/guides/early-teams" className="soc-btn !text-xs">
          Early teams →
        </Link>
        <Link href="/tier-list" className="soc-btn !text-xs">
          Tier list →
        </Link>
      </section>

      <section className="soc-frame mt-12 p-5" aria-labelledby="faq">
        <h2 id="faq" className="soc-heading text-lg">
          FAQ
        </h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Is the triangle exact numbers?
            </dt>
            <dd className="mt-1 text-muted">
              Exact % can change with balance patches. The direction of the
              cycle (who beats whom) is what matters for draft and targeting.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Do skills ignore matchups?
            </dt>
            <dd className="mt-1 text-muted">
              Some kits have multi-hit, true damage themes, or utility that
              bypasses pure ATK trading — but baseline hits still feel the
              modifier.
            </dd>
          </div>
        </dl>
      </section>

      <p className="mt-10 text-xs text-muted">
        Fan guide for educational use. Not affiliated with XD Entertainment.
      </p>
    </article>
  );
}

function RoleNode({
  role,
  className = "",
}: {
  role: Role;
  className?: string;
}) {
  const m = ROLE_META[role];
  return (
    <Link
      href={m.hub}
      className={`flex w-[7.5rem] flex-col items-center rounded-2xl border px-3 py-3 text-center shadow-lg backdrop-blur-sm transition hover:scale-105 sm:w-32 ${className}`}
      style={{
        borderColor: `${m.color}99`,
        background: `linear-gradient(160deg, ${m.soft}, rgba(20,24,34,0.92))`,
        boxShadow: `0 8px 24px rgba(0,0,0,0.35), 0 0 20px ${m.soft}`,
      }}
    >
      <span
        className="font-display text-sm font-bold tracking-wide sm:text-base"
        style={{ color: m.color }}
      >
        {role}
      </span>
      <span className="mt-1 text-[10px] leading-tight text-muted">
        {role === "Breaker" && "beats Def"}
        {role === "Defender" && "beats Seek"}
        {role === "Seeker" && "beats Brk"}
        {role === "Watcher" && "beats Des"}
        {role === "Destroyer" && "loses Wth"}
      </span>
    </Link>
  );
}
