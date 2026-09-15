import { SITE_URL } from "../data/site.js";

// Generováno z SITE_URL, ať adresa webu nikde nezůstane napsaná natvrdo.
export function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
