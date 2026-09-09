// src/app/sitemap.ts
//
// Search engines had no way to discover the 30 documentation pages: the site
// shipped without a sitemap of any kind. Doc routes are derived from the same
// helper the route table uses, so a new page appears here without an edit.

import type { MetadataRoute } from 'next';
import { getAllDocParams, isKnownVersion } from '@/lib/docs/content';
import { SITE_URL } from '@/lib/site';

// Hand-maintained because the App Router offers no way to enumerate static page
// routes at build time. `/design-system` is an internal reference page and is
// deliberately absent.
const MARKETING_ROUTES = [
  '',
  '/tinyleague',
  '/contact',
  '/services/smart-devices',
  '/services/web-mobile',
  '/services/data',
  '/work/2011-robotics',
  '/work/ncda-nda',
  '/privacy',
  '/terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  // getAllDocParams() covers every version. Archived pages carry their version as
  // the first slug segment and already render `noindex` (see the docs page's
  // generateMetadata), so listing them here would contradict that.
  const docRoutes = getAllDocParams()
    .filter(({ slug }) => !(slug.length > 0 && isKnownVersion(slug[0])))
    .map(({ slug }) => `/docs${slug.length > 0 ? `/${slug.join('/')}` : ''}`);

  return [...MARKETING_ROUTES, ...docRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
