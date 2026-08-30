// src/lib/docs/content.ts
//
// Reads the Docusaurus-authored markdown under `docs/versioned_docs` and turns it
// into the version list, sidebar tree, and route table used by /docs.
//
// URL scheme is kept identical to the old Docusaurus site so existing links and
// search results keep working:
//   /docs                       -> latest version, index.md
//   /docs/founders-edition/...  -> latest version
//   /docs/1.0.1/...             -> older versions
//
// The last path segment comes from a doc's frontmatter `id`, not its filename
// (e.g. `tinyLeague-app/how-to-install.md` has `id: app-installation`, so it is
// served at /docs/tinyLeague-app/app-installation).

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const DOCS_DIR = path.join(process.cwd(), 'docs');
const VERSIONED_DOCS_DIR = path.join(DOCS_DIR, 'versioned_docs');
const VERSIONS_FILE = path.join(DOCS_DIR, 'versions.json');

export const DOCS_BASE_PATH = '/docs';

export interface Doc {
  version: string;
  /** Route path within the version, '' for the version index. */
  routePath: string;
  href: string;
  title: string;
  sidebarLabel: string;
  hideTitle: boolean;
  position: number;
  description?: string;
  /** Absolute path on disk. */
  filePath: string;
  /** URL directory the doc sits in, relative to the version root. '' at the root. */
  routeDir: string;
}

export interface SidebarDoc {
  type: 'doc';
  label: string;
  href: string;
  routePath: string;
  position: number;
}

export interface SidebarCategory {
  type: 'category';
  label: string;
  position: number;
  items: SidebarItem[];
}

export type SidebarItem = SidebarDoc | SidebarCategory;

interface VersionContent {
  version: string;
  sidebar: SidebarItem[];
  docs: Doc[];
  byRoutePath: Map<string, Doc>;
}

/** Docs whose filename makes them the index of their directory. */
const INDEX_BASENAMES = new Set(['index', 'readme']);

/**
 * Docusaurus built route segments straight from directory and file names, which
 * lets characters like ™ into URLs. Next.js cannot match a prerendered route
 * containing those, so segments are reduced to URL-safe ASCII —
 * `tinyLeague™` is served at /docs/tinyLeague/…
 */
function toUrlSegment(name: string): string {
  const segment = name
    .replace(/\s+/g, '-')
    .replace(/[^A-Za-z0-9._-]/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/^-+|-+$/g, '');
  return segment || 'section';
}

/** Sorts by explicit position first, then alphabetically by label. */
function compareItems(a: SidebarItem, b: SidebarItem): number {
  if (a.position !== b.position) return a.position - b.position;
  return a.label.localeCompare(b.label);
}

export function getVersions(): string[] {
  const raw = JSON.parse(fs.readFileSync(VERSIONS_FILE, 'utf8')) as string[];
  return raw;
}

export function getLatestVersion(): string {
  return getVersions()[0];
}

export function isKnownVersion(candidate: string): boolean {
  return getVersions().includes(candidate);
}

export function docHref(version: string, routePath: string): string {
  const base =
    version === getLatestVersion()
      ? DOCS_BASE_PATH
      : `${DOCS_BASE_PATH}/${version}`;
  return routePath ? `${base}/${routePath}` : base;
}

function readCategory(absDir: string): { label?: string; position?: number } {
  const file = path.join(absDir, '_category_.json');
  if (!fs.existsSync(file)) return {};
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return {};
  }
}

function readDirectory(
  absDir: string,
  routeDir: string,
  version: string,
  docs: Doc[]
): SidebarItem[] {
  const items: SidebarItem[] = [];

  for (const entry of fs.readdirSync(absDir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;

    const abs = path.join(absDir, entry.name);

    if (entry.isDirectory()) {
      const childRouteDir = [routeDir, toUrlSegment(entry.name)]
        .filter(Boolean)
        .join('/');
      const children = readDirectory(abs, childRouteDir, version, docs);
      if (children.length === 0) continue;
      const category = readCategory(abs);
      items.push({
        type: 'category',
        label: category.label ?? entry.name,
        position: category.position ?? Number.MAX_SAFE_INTEGER,
        items: children,
      });
      continue;
    }

    if (!/\.mdx?$/i.test(entry.name)) continue;

    const basename = entry.name.replace(/\.mdx?$/i, '');
    const { data } = matter(fs.readFileSync(abs, 'utf8'));

    const routePath = INDEX_BASENAMES.has(basename.toLowerCase())
      ? routeDir
      : [routeDir, toUrlSegment(data.id ?? basename)].filter(Boolean).join('/');

    const title = data.title ?? basename;
    const doc: Doc = {
      version,
      routePath,
      href: docHref(version, routePath),
      title,
      sidebarLabel: data.sidebar_label ?? title,
      hideTitle: data.hide_title === true,
      position: data.sidebar_position ?? Number.MAX_SAFE_INTEGER,
      description: data.description,
      filePath: abs,
      routeDir,
    };

    docs.push(doc);
    items.push({
      type: 'doc',
      label: doc.sidebarLabel,
      href: doc.href,
      routePath: doc.routePath,
      position: doc.position,
    });
  }

  return items.sort(compareItems);
}

const versionCache = new Map<string, VersionContent>();

export function getVersionContent(version: string): VersionContent {
  const cached = versionCache.get(version);
  if (cached) return cached;

  const root = path.join(VERSIONED_DOCS_DIR, `version-${version}`);
  if (!fs.existsSync(root)) {
    throw new Error(`No docs found for version ${version} at ${root}`);
  }

  const docs: Doc[] = [];
  const sidebar = readDirectory(root, '', version, docs);
  const content: VersionContent = {
    version,
    sidebar,
    docs,
    byRoutePath: new Map(docs.map((doc) => [doc.routePath, doc])),
  };

  versionCache.set(version, content);
  return content;
}

export function getSidebar(version: string): SidebarItem[] {
  return getVersionContent(version).sidebar;
}

export function getDoc(version: string, routePath: string): Doc | undefined {
  return getVersionContent(version).byRoutePath.get(routePath);
}

/**
 * Splits a /docs catch-all slug into a version and a route path. A leading
 * segment matching a known version selects that version; otherwise the latest
 * version is used.
 */
export function resolveSlug(slug: string[] = []): {
  version: string;
  routePath: string;
} {
  const [first, ...rest] = slug;
  if (first && isKnownVersion(first)) {
    return { version: first, routePath: rest.join('/') };
  }
  return { version: getLatestVersion(), routePath: slug.join('/') };
}

/** Sidebar order, flattened — used for previous/next links. */
export function flattenSidebar(items: SidebarItem[]): SidebarDoc[] {
  return items.flatMap((item) =>
    item.type === 'category' ? flattenSidebar(item.items) : [item]
  );
}

export function getNeighbors(
  version: string,
  routePath: string
): { previous?: SidebarDoc; next?: SidebarDoc } {
  const flat = flattenSidebar(getSidebar(version));
  const index = flat.findIndex((item) => item.routePath === routePath);
  if (index === -1) return {};
  return { previous: flat[index - 1], next: flat[index + 1] };
}

/**
 * Link to the same page in another version, falling back to that version's home
 * page when the page does not exist there — pages come and go between releases.
 */
export function getVersionHref(version: string, routePath: string): string {
  return docHref(version, getDoc(version, routePath) ? routePath : '');
}

/** Every version, with the best link for the page the reader is currently on. */
export function getVersionSwitchTargets(
  routePath: string
): { version: string; href: string; isLatest: boolean }[] {
  const latest = getLatestVersion();
  return getVersions().map((version) => ({
    version,
    href: getVersionHref(version, routePath),
    isLatest: version === latest,
  }));
}

/** Every routable doc across every version, for generateStaticParams. */
export function getAllDocParams(): { slug: string[] }[] {
  const latest = getLatestVersion();
  const params: { slug: string[] }[] = [];

  for (const version of getVersions()) {
    for (const doc of getVersionContent(version).docs) {
      const segments = doc.routePath ? doc.routePath.split('/') : [];
      params.push({
        slug: version === latest ? segments : [version, ...segments],
      });
    }
  }

  return params;
}
