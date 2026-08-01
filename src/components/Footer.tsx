import Link from "next/link";
import { SITE_FULL_NAME, SITE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <div>
          <p className="font-medium text-foreground">
            {SITE_NAME} · {SITE_FULL_NAME}
          </p>
          <p className="mt-1 max-w-md">
            Fan-made database and guides. Not affiliated with XD Entertainment.
            Game content © respective owners.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/editorial-policy" className="hover:text-foreground">
            Editorial
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
