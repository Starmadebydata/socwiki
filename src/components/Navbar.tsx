import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

const links = [
  { href: "/characters", label: "Characters" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/guides", label: "Guides" },
  { href: "/codes", label: "Codes" },
  { href: "/tools/team-builder", label: "Team Builder" },
];

export function Navbar() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent text-sm">
            SoC
          </span>
          <span>
            {SITE_NAME}
            <span className="ml-2 hidden text-xs font-normal text-muted sm:inline">
              Sword of Convallaria
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm text-muted">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 hover:bg-card-hover hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
