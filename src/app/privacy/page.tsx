import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "SoC Wiki privacy policy: how we handle analytics, cookies, and visitor data on socwiki.app. No account is required to browse the Sword of Convallaria wiki.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <div className="mt-4 space-y-4 text-muted leading-relaxed">
        <p>
          No account is required to browse SoC Wiki. We do not sell personal
          data.
        </p>
        <p>
          <strong className="text-foreground">Analytics.</strong> We use Google
          Analytics 4 (measurement ID{" "}
          <code className="text-foreground/90">G-D1R4M8PKM1</code>) to
          understand aggregate traffic (pages viewed, referrers, approximate
          region). Google may set cookies or use similar technologies as
          described in Google&apos;s privacy documentation. You can limit
          analytics via browser settings, extensions, or Google&apos;s opt-out
          tools.
        </p>
        <p>
          Contact us for data requests or corrections. Advertising cookies may
          be added later if monetization is enabled; this page will be updated
          first.
        </p>
      </div>
    </div>
  );
}
