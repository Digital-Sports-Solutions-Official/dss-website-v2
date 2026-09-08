// src/lib/site.ts

// The apex domain 308-redirects to www, so www is the canonical origin. Pointing
// canonical tags or sitemap entries at the apex would name a host that
// immediately redirects, which is the problem those tags exist to prevent.
export const SITE_URL = 'https://www.digitalsportssolutions.com';
