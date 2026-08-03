import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_FOUNDER, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${SITE_NAME} at ${CONTACT_EMAIL} for corrections, partnership, privacy requests, or questions about Sword of Convallaria guides.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Trust</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Contact
      </h1>
      <div className="soc-divider my-5 max-w-md" />

      <div className="space-y-5 text-[15px] leading-relaxed text-muted">
        <p>
          The fastest way to reach the editor is email.{" "}
          <strong className="text-foreground">{SITE_FOUNDER.name}</strong> (
          {SITE_FOUNDER.role}) reads this inbox for SoC Wiki.
        </p>

        <div className="soc-frame p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
            Email
          </p>
          <p className="mt-2 font-display text-xl font-semibold tracking-wide text-[var(--accent-bright)]">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-3 text-sm">
            Typical response window: <strong className="text-foreground">2–5 business days</strong>.
            Complex data pulls or partnership asks may take longer.
          </p>
        </div>

        <h2 className="soc-heading text-xl text-foreground">
          What to include
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Corrections:</strong> page URL,
            what is wrong, and what you believe is correct (with a public source
            if you have one).
          </li>
          <li>
            <strong className="text-foreground">Codes:</strong> the string, where
            you saw it, and whether redeem succeeded or failed on your client.
          </li>
          <li>
            <strong className="text-foreground">Privacy / data:</strong> mark the
            subject line “Privacy” so we prioritize rights requests.
          </li>
          <li>
            <strong className="text-foreground">Partnerships:</strong> who you
            are, what you propose, and any timeline. We ignore mass SEO spam and
            paid-link schemes.
          </li>
        </ul>

        <h2 className="soc-heading text-xl text-foreground">
          What we will not do
        </h2>
        <p>
          We do not buy or sell game accounts, share private player data, or
          host unofficial APKs. Abuse, threats, or illegal requests are ignored
          and may be reported.
        </p>

        <p className="text-sm">
          Related:{" "}
          <Link href="/about" className="text-link hover:underline">
            About
          </Link>
          {" · "}
          <Link href="/privacy" className="text-link hover:underline">
            Privacy
          </Link>
          {" · "}
          <Link href="/editorial-policy" className="text-link hover:underline">
            Editorial policy
          </Link>
          {" · "}
          <Link href="/disclaimer" className="text-link hover:underline">
            Disclaimer
          </Link>
        </p>
      </div>
    </article>
  );
}
