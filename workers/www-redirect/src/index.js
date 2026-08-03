/**
 * Permanent redirect: any request on www.socwiki.app → https://socwiki.app
 * Preserves path + query. Forces HTTPS.
 *
 * Never runs on apex (route is www only). Short-ish cache so mistakes
 * cannot pin the edge for a day.
 */
export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    // Only act on www; if this worker is mis-routed, refuse self-loops.
    if (incoming.hostname !== "www.socwiki.app") {
      return new Response("Not found", { status: 404 });
    }
    const target = new URL(
      incoming.pathname + incoming.search,
      "https://socwiki.app",
    );
    return new Response(null, {
      status: 301,
      headers: {
        Location: target.toString(),
        "Cache-Control": "public, max-age=600, s-maxage=3600",
        Vary: "Host",
      },
    });
  },
};
