import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Role Matchups Guide",
  description:
    "Sword of Convallaria role matchups: Breaker, Defender, Seeker, Watcher, and Destroyer advantages explained.",
  alternates: { canonical: "/guides/role-matchups" },
};

export default function RoleMatchupsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Role Matchups Guide</h1>
      <p className="mt-3 text-muted leading-relaxed">
        Five roles define combat math in Sword of Convallaria. Attacking a
        countered role deals increased damage; attacking a countering role deals
        less.
      </p>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-card text-muted">
            <tr>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Advantage vs</th>
              <th className="px-4 py-2 text-left">Disadvantage vs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">
                <Link
                  href="/characters/role/defender"
                  className="text-link hover:underline"
                >
                  Defender
                </Link>
              </td>
              <td className="px-4 py-2">Seeker</td>
              <td className="px-4 py-2">Breaker</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">
                <Link
                  href="/characters/role/seeker"
                  className="text-link hover:underline"
                >
                  Seeker
                </Link>
              </td>
              <td className="px-4 py-2">Breaker</td>
              <td className="px-4 py-2">Defender</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">
                <Link
                  href="/characters/role/breaker"
                  className="text-link hover:underline"
                >
                  Breaker
                </Link>
              </td>
              <td className="px-4 py-2">Defender</td>
              <td className="px-4 py-2">Seeker</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">
                <Link
                  href="/characters/role/watcher"
                  className="text-link hover:underline"
                >
                  Watcher
                </Link>
              </td>
              <td className="px-4 py-2">Destroyer</td>
              <td className="px-4 py-2">—</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">
                <Link
                  href="/characters/role/destroyer"
                  className="text-link hover:underline"
                >
                  Destroyer
                </Link>
              </td>
              <td className="px-4 py-2">—</td>
              <td className="px-4 py-2">Watcher</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
}
