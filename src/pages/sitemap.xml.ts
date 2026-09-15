import { SITE_URL } from "../data/site.js";

// Generováno z SITE_URL, ať adresa webu nikde nezůstane napsaná natvrdo.
const paths = ["/", "/portfolio", "/o-mne", "/sluzby"];

export function GET() {
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, SITE_URL).toString()}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
