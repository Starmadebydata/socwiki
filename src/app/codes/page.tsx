import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redeem Codes",
  description:
    "Active Sword of Convallaria (SoC) redeem codes for free Luxites and rewards. Updated regularly — redeem in Settings → Account → Redeem Code.",
  alternates: { canonical: "/codes" },
};

/** Community-reported codes. Verify in-game; expired codes may still appear briefly. */
const CODES: {
  code: string;
  reward: string;
  status: "active" | "unverified" | "expired";
  note?: string;
}[] = [
  {
    code: "2YEARSWITHEN",
    reward: "Event rewards (2nd anniversary)",
    status: "unverified",
    note: "Reported July 2026 — try first",
  },
  {
    code: "EN2NDANNIV",
    reward: "Event rewards (2nd anniversary)",
    status: "unverified",
  },
  {
    code: "THANKYOU2EN",
    reward: "Event rewards",
    status: "unverified",
  },
  {
    code: "elamanEN2026",
    reward: "300 Luxite",
    status: "unverified",
  },
  {
    code: "1NHALFHBDEN",
    reward: "200 Luxite",
    status: "unverified",
  },
  {
    code: "ENFUTURE",
    reward: "200 Luxite",
    status: "unverified",
  },
  {
    code: "PEACE26EN",
    reward: "200 Luxite",
    status: "unverified",
  },
  {
    code: "SOCWITCHER3EN",
    reward: "200 Luxite",
    status: "unverified",
  },
  {
    code: "ENMOONCAKE",
    reward: "300 Luxite",
    status: "unverified",
  },
  {
    code: "1STANNIVEN",
    reward: "300 Luxite",
    status: "unverified",
  },
  {
    code: "FORPEACEEN",
    reward: "300 Luxite",
    status: "unverified",
  },
  {
    code: "SUPERJULY7",
    reward: "300 Luxite",
    status: "unverified",
  },
  {
    code: "SOC365EN",
    reward: "300 Luxite",
    status: "unverified",
  },
  {
    code: "SOC1YEARDEVEN",
    reward: "300 Luxite",
    status: "unverified",
  },
];

export default function CodesPage() {
  const updated = "2026-08-02";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Sword of Convallaria Codes</h1>
      <p className="mt-2 max-w-2xl text-muted">
        Redeem codes for free Luxites and items. Codes expire without notice —
        if one fails, skip it. Last list refresh: {updated}. Always redeem on
        your own account; we cannot guarantee validity.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="bg-card text-muted">
            <tr>
              <th className="px-4 py-3 text-left font-medium">Code</th>
              <th className="px-4 py-3 text-left font-medium">Rewards</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {CODES.map((row) => (
              <tr key={row.code} className="border-t border-border">
                <td className="px-4 py-3 font-mono font-semibold tracking-wide">
                  {row.code}
                </td>
                <td className="px-4 py-3 text-muted">
                  {row.reward}
                  {row.note ? (
                    <span className="mt-0.5 block text-xs opacity-80">
                      {row.note}
                    </span>
                  ) : null}
                </td>
                <td className="px-4 py-3 capitalize text-muted">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-lg font-semibold">How to redeem</h2>
      <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted">
        <li>Open Sword of Convallaria and open the Menu.</li>
        <li>Go to Settings → Account tab.</li>
        <li>Select Redeem Code.</li>
        <li>Paste a code and claim rewards from the Mailbox.</li>
      </ol>

      <p className="mt-6 text-xs text-muted">
        Fan resource only. Not affiliated with XD Entertainment. Report dead
        codes via the Contact page so we can prune the list.
      </p>
    </div>
  );
}
