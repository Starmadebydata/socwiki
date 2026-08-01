import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beginner Guide",
  description:
    "Sword of Convallaria beginner guide: early game priorities, team building, and resource tips.",
  alternates: { canonical: "/guides/beginner" },
};

export default function BeginnerGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 prose-muted">
      <h1 className="text-3xl font-bold text-foreground">
        Sword of Convallaria Beginner Guide
      </h1>
      <p className="mt-4 leading-relaxed">
        Welcome to SoC Wiki&apos;s early-game path. Focus on a small core of
        units, learn role matchups, and funnel materials into carries before
        spreading investment thin.
      </p>
      <h2 className="mt-8 text-xl font-semibold text-foreground">
        First week checklist
      </h2>
      <ol className="mt-3 list-decimal space-y-2 pl-5">
        <li>
          Check the{" "}
          <Link href="/tier-list/reroll" className="text-link hover:underline">
            reroll tier list
          </Link>{" "}
          if you are starting fresh.
        </li>
        <li>
          Learn{" "}
          <Link
            href="/guides/role-matchups"
            className="text-link hover:underline"
          >
            role matchups
          </Link>{" "}
          so you stop losing free damage.
        </li>
        <li>
          Build one carry + one support (for example a Seeker DPS + Inanna-style
          support) before expanding the roster.
        </li>
        <li>
          Redeem active{" "}
          <Link href="/codes" className="text-link hover:underline">
            codes
          </Link>{" "}
          for free resources.
        </li>
      </ol>
      <h2 className="mt-8 text-xl font-semibold text-foreground">
        What to open next
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li>
          <Link href="/tier-list" className="text-link hover:underline">
            Character tier list
          </Link>
        </li>
        <li>
          <Link href="/characters" className="text-link hover:underline">
            Character database
          </Link>
        </li>
        <li>
          <Link
            href="/tools/team-builder"
            className="text-link hover:underline"
          >
            Team Builder
          </Link>
        </li>
      </ul>
    </article>
  );
}
