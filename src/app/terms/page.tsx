import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_FULL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SITE_NAME} (socwiki.app): acceptable use, intellectual property, and contact for legal notices.`,
  alternates: { canonical: "/terms" },
};

const UPDATED = "2026-08-03";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Legal · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Terms of Use
      </h1>
      <div className="soc-divider my-5 max-w-md" />

      <div className="space-y-5 text-[15px] leading-relaxed text-muted">
        <p>
          These Terms govern access to{" "}
          <strong className="text-foreground">{SITE_FULL_NAME}</strong> at{" "}
          {SITE_URL}. By using the site you agree to them. If you do not agree,
          do not use the site.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          1. The service
        </h2>
        <p>
          We provide free informational pages and tools about{" "}
          <em>Sword of Convallaria</em>. Features may change, break, or be
          discontinued without notice. We may throttle or block traffic that
          threatens stability or security.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          2. Acceptable use
        </h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Scrape the site in a way that degrades service for others.</li>
          <li>
            Attempt to break authentication, inject malware, or probe systems
            you do not own.
          </li>
          <li>
            Use site content to operate phishing, account trading, or unofficial
            game clients.
          </li>
          <li>Misrepresent yourself as an official SoC or XD employee.</li>
        </ul>

        <h2 className="soc-heading text-xl text-foreground">
          3. Intellectual property
        </h2>
        <p>
          Original text, selection, arrangement, and site code on {SITE_NAME}{" "}
          are protected to the extent allowed by law. Game assets and trademarks
          remain with their owners. You may link to our pages; wholesale
          republication of our original guides without permission is not
          allowed. For permissions or takedown notices, email{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Legal`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          4. User submissions
        </h2>
        <p>
          If you email corrections or suggestions, you grant us a non-exclusive
          right to use that information to improve the site. Do not send
          confidential or personal data you do not want processed.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          5. Disclaimers &amp; liability
        </h2>
        <p>
          The site is provided as-is. Our{" "}
          <Link href="/disclaimer" className="text-link hover:underline">
            Disclaimer
          </Link>{" "}
          is incorporated by reference. Liability is limited to the maximum
          extent permitted by applicable law.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          6. Privacy
        </h2>
        <p>
          Our{" "}
          <Link href="/privacy" className="text-link hover:underline">
            Privacy Policy
          </Link>{" "}
          explains analytics and data practices.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          7. Changes
        </h2>
        <p>
          We may update these Terms by posting a new version with a revised
          date. Continued use after changes constitutes acceptance.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          8. Contact
        </h2>
        <p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </article>
  );
}
