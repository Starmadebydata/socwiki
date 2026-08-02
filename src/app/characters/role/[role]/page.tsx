import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CharacterCard } from "@/components/CharacterCard";
import {
  getCharactersByRole,
  ROLES,
  sortByOverallTier,
} from "@/data/characters";
import type { Role } from "@/types/character";
import { roleStyle } from "@/lib/role-styles";

type Props = { params: Promise<{ role: string }> };

const ROLE_BLURBS: Record<Role, string> = {
  Breaker: "Melee physical attackers. Advantage vs Defenders; weak vs Seekers.",
  Defender: "Defensive tanks and controllers. Advantage vs Seekers; weak vs Breakers.",
  Destroyer: "Ranged / dark magic pressure. Weak to Watchers; solid otherwise.",
  Watcher: "Ranged / light magic supports and attackers. Advantage vs Destroyers.",
  Seeker: "Mobile physical units. Advantage vs Breakers; weak vs Defenders.",
};

function normalizeRole(raw: string): Role | null {
  return ROLES.find((r) => r.toLowerCase() === raw.toLowerCase()) ?? null;
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
  const rs = roleStyle(role);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/characters" className="hover:text-foreground">
          Characters
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{role}</span>
      </nav>

      <div
        className="mb-8 rounded-3xl border border-border p-6"
        style={{
          background: `linear-gradient(135deg, ${rs.soft}, transparent 70%)`,
        }}
      >
        <h1 className="text-3xl font-bold" style={{ color: rs.hex }}>
          {role} Characters
        </h1>
        <p className="mt-2 max-w-2xl text-muted">{ROLE_BLURBS[role]}</p>
        <p className="mt-2 text-sm text-muted">{list.length} units in database</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {ROLES.map((r) => {
          const s = roleStyle(r);
          return (
            <Link
              key={r}
              href={`/characters/role/${r.toLowerCase()}`}
              className="rounded-full border px-3 py-1 text-sm"
              style={
                r === role
                  ? {
                      borderColor: s.hex,
                      backgroundColor: s.soft,
                      color: s.hex,
                    }
                  : undefined
              }
            >
              {r}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <CharacterCard key={c.slug} character={c} />
        ))}
      </div>
    </div>
  );
}
