/** Base URL for canonical, OG, sitemap. Set NEXT_PUBLIC_SITE_URL in .env or it falls back to this. */
export const siteUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL) ||
  "https://www.futureedge.it.com";
