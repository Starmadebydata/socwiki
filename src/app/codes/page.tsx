import type { Metadata } from "next";
import Link from "next/link";
import { CopyCodeButton } from "@/components/CopyCodeButton";
import { JsonLd } from "@/components/JsonLd";
import {
  CODES_LIST_UPDATED,
  getExpiredCodes,
  getTryFirstCodes,
  type CodeStatus,
  type RedeemCode,
} from "@/data/codes";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Redeem Codes (August 2026)",
  description:
    "Active Sword of Convallaria (SoC) redeem codes for free Luxites and rewards. Updated list with copy buttons — redeem in Settings → Account → Redeem Code.",
  alternates: { canonical: "/codes" },
};

const STATUS_STYLE: Record<CodeStatus, string> = {
  active:
    "border-[var(--tier-s)]/50 bg-[var(--tier-s)]/15 text-[var(--tier-s)]",
  limited:
    "border-[var(--tier-sp)]/50 bg-[var(--tier-sp)]/15 text-[var(--tier-sp)]",
  unverified:
    "border-[var(--border-soft)] bg-[var(--card-deep)] text-muted",
  expired:
    "border-[var(--muted-deep)]/40 bg-black/20 text-muted line-through decoration-muted/50",
};

function StatusBadge({ status }: { status: CodeStatus }) {
  return (
    <span
      className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${STATUS_STYLE[status]}`}
    >
      {status}
    </span>
  );
}

function CodeTable({
  rows,
  showCopy,
}: {
  rows: RedeemCode[];
  showCopy: boolean;
}) {
  if (rows.length === 0) {
    return (
      <p className="text-sm text-muted">No codes in this category right now.</p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-[var(--radius-frame)] border border-[var(--border-soft)]">
      <table className="soc-table min-w-[640px]">
        <thead>
          <tr>
            <th>Code</th>
            <th>Rewards</th>
            <th>Status</th>
            <th>Verified</th>
            {showCopy ? <th className="w-24"> </th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.code}>
              <td className="font-mono text-sm font-semibold tracking-wide text-[var(--accent-bright)]">
                {row.code}
              </td>
              <td className="text-sm text-muted">
                {row.reward}
                {row.note ? (
                  <span className="mt-0.5 block text-xs opacity-80">
                    {row.note}
                  </span>
                ) : null}
              </td>
              <td>
                <StatusBadge status={row.status} />
              </td>
              <td className="whitespace-nowrap text-xs text-muted">
                {row.lastVerified}
              </td>
              {showCopy ? (
                <td className="text-right">
                  <CopyCodeButton code={row.code} />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CodesPage() {
  const tryFirst = getTryFirstCodes();
  const expired = getExpiredCodes();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I redeem Sword of Convallaria codes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Open the Menu → Settings → Account → Redeem Code. Paste the code, confirm, then claim rewards from the Mailbox.",
        },
      },
      {
        "@type": "Question",
        name: "Why did my SoC code fail?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Codes expire without notice, may be region-locked (EN vs other builds), already redeemed on your account, or mistyped. Try the next code on the list.",
        },
      },
      {
        "@type": "Question",
        name: "When was this codes list updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `The SoC Wiki codes list was last refreshed on ${CODES_LIST_UPDATED}. Each row also shows a lastVerified date.`,
        },
      },
    ],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Codes",
        item: `${SITE_URL}/codes`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={[faqLd, breadcrumbLd]} />

      <p className="soc-heading-sm">Rewards</p>
      <h1 className="font-display mt-2 text-3xl font-bold tracking-wide text-[var(--accent-bright)] sm:text-4xl">
        Sword of Convallaria Codes
      </h1>
      <div className="soc-divider my-5 max-w-md" />
      <p className="max-w-2xl text-muted">
        Free Luxites and event items via redeem codes. Codes expire without
        notice — always redeem on your own account. List refreshed{" "}
        <strong className="text-[var(--accent-bright)]">
          {CODES_LIST_UPDATED}
        </strong>
        .
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="soc-stat-chip">
          <strong>{tryFirst.length}</strong> try first
        </span>
        <span className="soc-stat-chip">
          <strong>{expired.length}</strong> historical
        </span>
        <Link href="/guides/beginner" className="soc-btn !py-1.5 !text-xs">
          Beginner guide →
        </Link>
      </div>

      <section className="soc-frame mt-10 p-5 sm:p-6" aria-labelledby="try-first">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 id="try-first" className="soc-heading text-lg">
            Try these first
          </h2>
          <span className="soc-ribbon !min-w-0 !px-4 !text-[0.7rem]">
            Active / limited / unchecked
          </span>
        </div>
        <p className="mb-4 text-sm text-muted">
          Tap <strong className="text-foreground">Copy</strong>, then paste
          in-game. Prefer newer anniversary codes; skip any that error.
        </p>
        <CodeTable rows={tryFirst} showCopy />
      </section>

      <section className="mt-10" aria-labelledby="how-to">
        <h2 id="how-to" className="soc-section-title mb-4">
          How to redeem
        </h2>
        <ol className="soc-notice space-y-2 text-sm text-muted">
          <li className="flex gap-3">
            <span className="font-display text-[var(--accent-bright)]">1</span>
            Open Sword of Convallaria → Menu.
          </li>
          <li className="flex gap-3">
            <span className="font-display text-[var(--accent-bright)]">2</span>
            Settings → Account tab.
          </li>
          <li className="flex gap-3">
            <span className="font-display text-[var(--accent-bright)]">3</span>
            Redeem Code → paste → confirm.
          </li>
          <li className="flex gap-3">
            <span className="font-display text-[var(--accent-bright)]">4</span>
            Claim rewards from the Mailbox.
          </li>
        </ol>
      </section>

      <section className="mt-12" aria-labelledby="history">
        <h2 id="history" className="soc-section-title mb-4">
          Expired / historical codes
        </h2>
        <p className="mb-4 text-sm text-muted">
          Kept for search and transparency. Expect these to fail if already
          claimed or retired by the publisher.
        </p>
        <CodeTable rows={expired} showCopy={false} />
      </section>

      <section className="soc-frame mt-12 p-5" aria-labelledby="faq">
        <h2 id="faq" className="soc-heading mb-3 text-lg">
          FAQ
        </h2>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Code says invalid?
            </dt>
            <dd className="mt-1 text-muted">
              Expired, wrong region (EN vs other clients), already used, or
              mistyped. Try the next code.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Where do rewards go?
            </dt>
            <dd className="mt-1 text-muted">
              Usually the in-game Mailbox after a successful redeem.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-[var(--accent-bright)]">
              Found a working code?
            </dt>
            <dd className="mt-1 text-muted">
              Tell us via{" "}
              <Link href="/contact" className="text-link hover:underline">
                Contact
              </Link>{" "}
              so we can re-verify and bump{" "}
              <code className="text-xs text-foreground">lastVerified</code>.
            </dd>
          </div>
        </dl>
      </section>

      <p className="mt-8 text-xs text-muted">
        Fan resource only. Not affiliated with XD Entertainment. Game content ©
        respective owners.
      </p>
    </div>
  );
}
