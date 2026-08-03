import type { Metadata } from "next";
import Link from "next/link";
import {
  CONTACT_EMAIL,
  SITE_FOUNDER,
  SITE_FULL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "About SoC Wiki & the Editor",
  description:
    "About SoC Wiki: an independent Sword of Convallaria fan database founded by Jason (WindFlash). How we build guides, update tiers, and stay non-official.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Trust</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        About {SITE_NAME}
      </h1>
      <div className="soc-divider my-5 max-w-md" />

      <div className="space-y-5 text-[15px] leading-relaxed text-muted">
        <p>
          <strong className="text-foreground">{SITE_FULL_NAME}</strong> (
          <a href={SITE_URL} className="text-link hover:underline">
            socwiki.app
          </a>
          ) is an independent, fan-made English database and guide site for the
          mobile strategy RPG <em>Sword of Convallaria</em> (SoC). We publish
          character builds, skill priorities, tier opinions, gear notes, faction
          shells, redeem-code lists, and a free team builder—structured so you
          can look something up in under a minute, then click deeper if you want
          the why.
        </p>

        <h2 className="soc-heading pt-2 text-xl text-foreground">
          Who runs this site
        </h2>
        <p>
          {SITE_FOUNDER.bioShort} He founded and operates{" "}
          <a
            href={SITE_FOUNDER.sites[0].href}
            className="text-link hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {SITE_FOUNDER.sites[0].label}
          </a>{" "}
          and{" "}
          <a
            href={SITE_FOUNDER.sites[1].href}
            className="text-link hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            {SITE_FOUNDER.sites[1].label}
          </a>
          , and treats SoC Wiki as a passion project: the same product instincts
          (clear IA, honest labels, ship-and-fix) applied to a game he actually
          plays.
        </p>
        <p>
          Editorial voice on the site is signed as{" "}
          <strong className="text-foreground">
            {SITE_FOUNDER.name}, {SITE_FOUNDER.role}
          </strong>
          , with help from structured data passes and community reports. When
          something is wrong—expired codes, bad gear mapping, outdated
          stars—email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          and we correct it with a visible last-updated stamp where it matters.
        </p>

        <h2 className="soc-heading pt-2 text-xl text-foreground">
          What we are not
        </h2>
        <p>
          SoC Wiki is <strong className="text-foreground">not</strong> owned,
          endorsed, or operated by XD Entertainment or any official Sword of
          Convallaria publisher. Game names, characters, artwork, and systems
          belong to their respective rights holders. We do not sell accounts,
          gold, or unofficial clients. See our{" "}
          <Link href="/disclaimer" className="text-link hover:underline">
            Disclaimer
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-link hover:underline">
            Terms
          </Link>
          .
        </p>

        <h2 className="soc-heading pt-2 text-xl text-foreground">
          How content is produced
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Play-first opinions.</strong>{" "}
            Tier and “worth building” notes reflect how kits feel in real
            clears—story, trials, and longer modes—not pure theorycraft from a
            single spreadsheet.
          </li>
          <li>
            <strong className="text-foreground">Structured pages.</strong>{" "}
            Builds, skill tables, and gear links use a consistent template so
            comparisons are fair. Top cores get hand-written deep guides on top
            of that skeleton.
          </li>
          <li>
            <strong className="text-foreground">Public sources + rewrite.</strong>{" "}
            Skill names and community consensus are cross-checked against public
            guides and in-game UI; wording is original to this site. See{" "}
            <Link
              href="/editorial-policy"
              className="text-link hover:underline"
            >
              Editorial policy
            </Link>
            .
          </li>
          <li>
            <strong className="text-foreground">Tools with a purpose.</strong>{" "}
            The{" "}
            <Link
              href="/tools/team-builder"
              className="text-link hover:underline"
            >
              Team Builder
            </Link>{" "}
            exists to stress-test role holes and faction stacks before you spend
            stamina—not as a gimmick page.
          </li>
        </ul>

        <h2 className="soc-heading pt-2 text-xl text-foreground">
          Update rhythm
        </h2>
        <p>
          Codes and banner-sensitive pages are checked when new strings appear
          in community channels or after login events. Character and tier pages
          get batch reviews when the meta shifts (new limiteds, balance notes, or
          major mode releases). Dates on individual pages beat any global
          “always current” claim—if a page looks stale, tell us.
        </p>

        <h2 className="soc-heading pt-2 text-xl text-foreground">
          Privacy &amp; analytics
        </h2>
        <p>
          We use Google Analytics to understand aggregate traffic. Details live
          on the{" "}
          <Link href="/privacy" className="text-link hover:underline">
            Privacy Policy
          </Link>
          . Advertising may be added later only if the site can host it without
          burying guides under clutter; policies will be updated first.
        </p>

        <h2 className="soc-heading pt-2 text-xl text-foreground">Contact</h2>
        <p>
          Corrections, data rights requests, partnership, or press:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          . We aim to reply within a few business days.
        </p>
      </div>
    </article>
  );
}
