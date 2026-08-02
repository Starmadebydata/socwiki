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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-[#0c1018cc] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent/90 to-amber-700 text-sm font-bold text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            SoC
          </span>
          <span className="flex flex-col leading-tight">
            <span>{SITE_NAME}</span>
            <span className="hidden text-[10px] font-normal text-muted sm:block">
              Sword of Convallaria Database
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-0.5 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-2.5 py-1.5 transition hover:bg-card-hover hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
