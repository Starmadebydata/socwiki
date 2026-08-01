import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TierBadge } from "@/components/TierBadge";
import {
  getCharactersByRole,
  ROLES,
  sortByOverallTier,
} from "@/data/characters";
import type { Role } from "@/types/character";

type Props = { params: Promise<{ role: string }> };

const ROLE_BLURBS: Record<Role, string> = {
  Breaker: "Melee physical attackers. Advantage vs Defenders; weak vs Seekers.",
  Defender: "Defensive tanks and controllers. Advantage vs Seekers; weak vs Breakers.",
  Destroyer: "Ranged / dark magic pressure. Weak to Watchers; solid otherwise.",
  Watcher: "Ranged / light magic supports and attackers. Advantage vs Destroyers.",
  Seeker: "Mobile physical units. Advantage vs Breakers; weak vs Defenders.",
};

function normalizeRole(raw: string): Role | null {
  const found = ROLES.find((r) => r.toLowerCase() === raw.toLowerCase());
  return found ?? null;
}

export async function generateStaticParams() {
  return ROLES.map((role) => ({ role: role.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { role: raw } = await params;
  const role = normalizeRole(raw);
  if (!role) return { title: "Role not found" };
  return {
    title: `${role} Characters`,
    description: `All ${role} characters in Sword of Convallaria with tier ratings and build links. ${ROLE_BLURBS[role]}`,
    alternates: { canonical: `/characters/role/${role.toLowerCase()}` },
  };
}

export default async function RoleHubPage({ params }: Props) {
  const { role: raw } = await params;
  const role = normalizeRole(raw);
  if (!role) notFound();

  const list = sortByOverallTier(getCharactersByRole(role));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/characters" className="hover:text-foreground">
          Characters
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{role}</span>
      </nav>

      <h1 className="text-3xl font-bold">{role} Characters</h1>
      <p className="mt-2 max-w-2xl text-muted">{ROLE_BLURBS[role]}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {ROLES.map((r) => (
          <Link
            key={r}
            href={`/characters/role/${r.toLowerCase()}`}
            className={`rounded-full border px-3 py-1 text-sm ${
              r === role
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-card text-muted hover:text-foreground"
            }`}
          >
            {r}
          </Link>
        ))}
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {list.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/characters/${c.slug}`}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 hover:bg-card-hover"
            >
              <div>
                <div className="font-medium">{c.name}</div>
                <div className="text-xs text-muted">{c.factions.join(" · ")}</div>
              </div>
              <TierBadge tier={c.tier.overall} />
            </Link>
          </li>
        ))}
      </ul>
      {list.length === 0 && (
        <p className="mt-8 text-muted">No characters in this role yet.</p>
      )}
    </div>
  );
}
