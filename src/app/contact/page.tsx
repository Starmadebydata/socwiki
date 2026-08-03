import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SoC Wiki for corrections, data issues, or partnership inquiries about the Sword of Convallaria fan database at socwiki.app.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-muted leading-relaxed">
        Corrections and partnership inquiries: replace this page with your email
        or form before public launch.
      </p>
    </div>
  );
}
