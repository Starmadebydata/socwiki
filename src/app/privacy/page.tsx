import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-muted leading-relaxed">
        We may use analytics and advertising cookies after monetization is
        enabled. No account system is required to browse the wiki. Contact us
        for data requests.
      </p>
    </div>
  );
}
