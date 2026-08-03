import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `${SITE_NAME} disclaimer: unofficial fan site, no affiliation with XD Entertainment, tier lists are opinions, play at your own risk.`,
  alternates: { canonical: "/disclaimer" },
};

const UPDATED = "2026-08-03";

export default function DisclaimerPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Legal · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Disclaimer
      </h1>
      <div className="soc-divider my-5 max-w-md" />

      <div className="space-y-5 text-[15px] leading-relaxed text-muted">
        <p>
          <strong className="text-foreground">{SITE_FULL_NAME}</strong> is a
          fan-made information site. By using socwiki.app you acknowledge the
          following.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          No official affiliation
        </h2>
        <p>
          This website is <strong className="text-foreground">not</strong>{" "}
          affiliated with, endorsed by, sponsored by, or associated with XD
          Entertainment or any official publisher, developer, or licensor of{" "}
          <em>Sword of Convallaria</em>. All game titles, character names,
          images, logos, and related marks are the property of their respective
          owners and are used here for identification and commentary under
          applicable fan / fair-use principles in our jurisdiction. We will
          remove or adjust material upon a valid rights-holder request sent to{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Copyright`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          No warranties
        </h2>
        <p>
          Guides, tier lists, skill tables, codes, and team suggestions are
          provided <strong className="text-foreground">“as is”</strong> without
          warranty of accuracy, completeness, or fitness for a particular
          purpose. Game patches can change numbers overnight. Always confirm
          critical mechanics in your own client.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Opinions only
        </h2>
        <p>
          Rankings and “best build” language reflect editorial judgment at the
          time of writing—not objective truth and not financial or professional
          advice. Your roster, luck, and goals may reasonably lead to different
          choices.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Redeem codes &amp; rewards
        </h2>
        <p>
          Codes may expire, be region-locked, or fail without notice. We are not
          responsible for missed rewards, account issues, or decisions you make
          after reading a code list. Redeem only through official in-game or
          official web channels.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          External links
        </h2>
        <p>
          Links to third-party sites (including the founder’s other projects)
          are for convenience. We do not control their content or privacy
          practices.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Limitation of liability
        </h2>
        <p>
          To the fullest extent permitted by law, {SITE_NAME} and its operators
          are not liable for any indirect, incidental, or consequential damages
          arising from use of the site—including lost progress, lost currency,
          or account penalties resulting from following a guide.
        </p>

        <p className="text-sm">
          <Link href="/terms" className="text-link hover:underline">
            Terms of Use
          </Link>
          {" · "}
          <Link href="/privacy" className="text-link hover:underline">
            Privacy Policy
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
