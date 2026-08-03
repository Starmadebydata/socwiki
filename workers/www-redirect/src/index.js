/**
 * DEPRECATED — do not assign routes to this worker.
 *
 * www.socwiki.app is handled by the main `socwiki` Worker + src/middleware.ts
 * so we never dual-deploy two scripts that can race on zone routes.
 *
 * Kept as a no-op safety valve: any residual traffic 301s to apex.
 */
export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const target = new URL(
      incoming.pathname + incoming.search,
      "https://socwiki.app",
    );
    // Never 404 — always send users to the live apex site.
    return Response.redirect(target.toString(), 301);
  },
};
