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
    <header className="soc-nav sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="soc-logo-gem" aria-hidden>
            <span className="relative z-[1]">SoC</span>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[var(--foreground)]">
              {SITE_NAME}
            </span>
            <span className="hidden text-[10px] font-normal tracking-[0.12em] text-muted uppercase sm:block">
              Sword of Convallaria
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-0.5 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="soc-nav-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
