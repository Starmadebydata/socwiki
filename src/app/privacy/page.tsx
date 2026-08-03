import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, GA_MEASUREMENT_ID, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${SITE_NAME} privacy policy: analytics (Google Analytics), cookies, future ads, and how to contact us at ${CONTACT_EMAIL}.`,
  alternates: { canonical: "/privacy" },
};

const UPDATED = "2026-08-03";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <p className="soc-heading-sm">Legal · Updated {UPDATED}</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="soc-divider my-5 max-w-md" />

      <div className="space-y-5 text-[15px] leading-relaxed text-muted">
        <p>
          This policy describes how{" "}
          <strong className="text-foreground">{SITE_NAME}</strong> (
          {SITE_URL}) handles information when you browse the site. We do not
          require an account to read guides or use the team builder.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Information we collect
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">Usage analytics.</strong> We use
            Google Analytics 4 (measurement ID{" "}
            <code className="text-foreground/90">{GA_MEASUREMENT_ID}</code>) to
            learn which pages are visited, approximate geography, device type,
            referrers, and similar aggregate metrics. Google may process data as
            described in Google&apos;s privacy documentation and may use cookies
            or local storage.
          </li>
          <li>
            <strong className="text-foreground">Server / edge logs.</strong>{" "}
            Hosting (Cloudflare and related infrastructure) may automatically
            log IP addresses, user agents, and request paths for security,
            debugging, and abuse prevention. Logs are retained only as long as
            needed for those purposes.
          </li>
          <li>
            <strong className="text-foreground">Email you send us.</strong> If
            you write to {CONTACT_EMAIL}, we keep the message and your address
            to respond and track corrections.
          </li>
          <li>
            <strong className="text-foreground">No account database.</strong> We
            do not run user logins, profiles, or payment processing on this site
            today.
          </li>
        </ul>

        <h2 className="soc-heading text-xl text-foreground">Cookies</h2>
        <p>
          Analytics cookies (or similar identifiers) may be set by Google when
          Analytics loads. You can block cookies in your browser, use tracking
          protection, or Google&apos;s opt-out tools. Essential hosting cookies
          (if any) are used only to deliver the site securely.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Advertising (future)
        </h2>
        <p>
          The site may display third-party advertisements in the future (for
          example Google AdSense) to help cover hosting costs. If ads are
          enabled:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Ad partners may use cookies or similar technologies to show ads,
            measure performance, and—where allowed—personalize ads.
          </li>
          <li>
            We will not run ads that intentionally mimic in-game UI to trick
            clicks, or cover content so that reading requires accidental clicks.
          </li>
          <li>
            This Privacy Policy and, if needed, a dedicated cookie notice will
            be updated before ads go live. Continued use after that update means
            you understand the change.
          </li>
        </ul>

        <h2 className="soc-heading text-xl text-foreground">
          How we use information
        </h2>
        <p>
          To operate and improve {SITE_NAME}, fix bugs, understand which guides
          help players, prevent abuse, and respond to your emails. We do not
          sell personal information.
        </p>

        <h2 className="soc-heading text-xl text-foreground">Sharing</h2>
        <p>
          We share data with processors who help run the site (hosting, CDN,
          analytics, and—if enabled—ad networks) under their respective terms.
          We may disclose information if required by law or to protect the site
          and its users from fraud or security threats.
        </p>

        <h2 className="soc-heading text-xl text-foreground">
          Children&apos;s privacy
        </h2>
        <p>
          The site discusses a general-audience game guide. It is not directed
          at children under 13 (or the equivalent age in your jurisdiction). If
          you believe we have collected personal data from a child, contact us
          and we will delete it where required.
        </p>

        <h2 className="soc-heading text-xl text-foreground">Your choices</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Browser controls for cookies and third-party scripts.</li>
          <li>
            Email us to ask what correspondence we hold or to request deletion
            of emails you sent, subject to legal retention needs.
          </li>
        </ul>

        <h2 className="soc-heading text-xl text-foreground">Contact</h2>
        <p>
          Privacy questions:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Privacy`}
            className="text-link hover:underline"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          (subject line “Privacy” helps).
        </p>

        <p className="text-sm">
          See also{" "}
          <Link href="/terms" className="text-link hover:underline">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="/disclaimer" className="text-link hover:underline">
            Disclaimer
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
