import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_FOUNDER, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: `${SITE_NAME} editorial policy: how Jason and the site rate tiers, source skill names, handle corrections, and label opinions vs facts.`,
  alternates: { canonical: "/editorial-policy" },
};

const UPDATED = "2026-08-03";

export default function EditorialPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Trust · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Editorial Policy
      </h1>
      <div className="soc-divider my-5 max-w-md" />

      <div className="space-y-5 text-[15px] leading-relaxed text-muted">
        <p>
          {SITE_NAME} publishes structured game guides. This page explains how
          we decide what goes on a page, what is opinion, and how mistakes get
          fixed. Lead editor:{" "}
          <strong className="text-foreground">
            {SITE_FOUNDER.name}, {SITE_FOUNDER.role}
          </strong>
          .
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Facts vs opinions
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Closer to facts:</strong> role
            labels, faction tags, skill names as shown in client UI, movement
            values we list, and “this gear appears in our build database for
            these characters.”
          </li>
          <li>
            <strong className="text-foreground">Opinions:</strong> tier ranks
            (SSS–C), “worth building,” sample teams, star priority order, and
            coaching notes. Two good players can disagree; we document{" "}
            <em>our</em> current call and revise when the meta moves.
          </li>
        </ul>

        <h2 className="soc-heading text-xl text-foreground">Sources</h2>
        <p>
          We combine hands-on play, public community guides (for skill naming
          and consensus checks), and structured site data. We do not copy other
          sites’ full articles. Skill descriptions on this wiki are rewritten in
          our own words and may simplify numbers—always verify critical values
          in your client after patches.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Tier list standards
        </h2>
        <p>
          Tiers answer “how much does this unit help a typical invested account
          clear current PvE content?” not “who wins tournament day-one.” Limited
          availability, ease of play, and enable value (e.g. Act Again supports)
          can raise a unit even if pure DPS charts look different. Reroll tiers
          answer a different question: “is this worth restarting an account
          for?”
        </p>

        <h2 className="soc-heading text-xl text-foreground">Updates</h2>
        <p>
          Pages that change often (codes, new limiteds) are prioritized. Quiet
          characters may keep older timestamps until a meta pass. When we change
          a tier or recommended weapon, we update the page date. There is no
          claim of real-time patch monitoring 24/7.
        </p>

        <h2 className="soc-heading text-xl text-foreground">Corrections</h2>
        <p>
          Email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Correction`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          with the URL and evidence. Good reports include a screenshot or a
          public patch note. We do not pay for exclusive tips; we do credit
          useful community flags when practical.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Conflicts of interest
        </h2>
        <p>
          The site may later use ads or affiliate links. Editorial rankings will
          not be sold. Sponsored content—if any ever appears—will be labeled.
          Jason’s other products (WindFlash) are separate businesses and do not
          pay for favorable SoC placements.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          AI and automation
        </h2>
        <p>
          We use software to help format tables, generate internal links, and
          draft structural copy. Human editing sets tier calls, deep-guide
          voice, and final publish decisions. Mass low-value page spam is not
          our model; if a page is thin, we would rather improve it than hide the
          weakness behind filler.
        </p>

        <p className="text-sm">
          <Link href="/about" className="text-link hover:underline">
            About
          </Link>
          {" · "}
          <Link href="/disclaimer" className="text-link hover:underline">
            Disclaimer
          </Link>
          {" · "}
          <Link href="/contact" className="text-link hover:underline">
            Contact
          </Link>
        </p>
      </div>
    </article>
  );
}
