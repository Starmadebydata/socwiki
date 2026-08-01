import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted">
        That URL is not in the SoC Wiki database yet.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-lg border border-border bg-card px-4 py-2 text-sm hover:bg-card-hover"
      >
        Back to home
      </Link>
    </div>
  );
}
