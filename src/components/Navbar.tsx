import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const links = [
  { href: "/characters", label: "Characters" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/weapons", label: "Gear" },
  { href: "/guides", label: "Guides" },
  { href: "/codes", label: "Codes" },
  { href: "/tools/team-builder", label: "Builder" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[#0a0b12ee] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border-bright)] bg-gradient-to-br from-[#3d4354] via-[#2a2e3a] to-[#1a1e28] text-xs font-bold text-[var(--accent-bright)] shadow-[0_0_20px_rgba(212,181,106,0.2)] font-display">
            SoC
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[var(--foreground)]">
              {SITE_NAME}
            </span>
            <span className="hidden text-[10px] font-normal tracking-wide text-muted sm:block">
              Sword of Convallaria Database
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-0.5 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-2.5 py-1.5 transition hover:border-[var(--border-soft)] hover:bg-[var(--card)] hover:text-[var(--accent-bright)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
