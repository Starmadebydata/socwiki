/**
 * Permanent redirect: any request on www.socwiki.app → https://socwiki.app
 * Preserves path, query, and fragment-less URL. Forces HTTPS.
 */
export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const target = new URL(incoming.pathname + incoming.search, "https://socwiki.app");
    return new Response(null, {
      status: 301,
      headers: {
        Location: target.toString(),
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
        Vary: "Host",
      },
    });
  },
};
