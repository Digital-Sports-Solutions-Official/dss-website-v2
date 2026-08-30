// src/app/docs/[[...slug]]/page.tsx
import fs from 'node:fs/promises';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import {
  getAllDocParams,
  getDoc,
  getLatestVersion,
  getNeighbors,
  getSidebar,
  getVersionHref,
  getVersionSwitchTargets,
  resolveSlug,
} from '@/lib/docs/content';
import { renderDoc } from '@/lib/docs/mdx';
import { getMdxComponents } from '@/components/docs/MdxComponents';
import { DocsShell } from '@/components/docs/DocsShell';
import { DocsSidebar } from '@/components/docs/DocsSidebar';
import { DocsToc } from '@/components/docs/DocsToc';
import { VersionSwitcher } from '@/components/docs/VersionSwitcher';
import { DocsThemeToggle } from '@/components/docs/DocsThemeToggle';

// Every docs page is known at build time; anything else is a 404.
export const dynamicParams = false;

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

export function generateStaticParams() {
  return getAllDocParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { version, routePath } = resolveSlug(slug);
  const doc = getDoc(version, routePath);
  if (!doc) return {};

  // Archived versions point at themselves and stay out of the index, so the
  // latest copy of a page is the one search engines surface.
  const isLatest = version === getLatestVersion();
  return {
    title: `${doc.title} | tinyLeague™ Docs`,
    description:
      doc.description ??
      'Documentation for the tinyLeague™ hardware, app, and accessories.',
    alternates: { canonical: doc.href },
    robots: isLatest ? undefined : { index: false, follow: true },
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const { version, routePath } = resolveSlug(slug);
  const latest = getLatestVersion();

  // The latest version has no /docs/<version>/ prefix; next.config.ts redirects
  // the prefixed form so there is only ever one URL per page.
  const doc = getDoc(version, routePath);
  if (!doc) notFound();

  const source = await fs.readFile(doc.filePath, 'utf8');
  const { Content, toc } = await renderDoc(source);
  const { previous, next } = getNeighbors(version, routePath);

  return (
    <main className="docs-root w-full pt-[80px] font-sans">
      <DocsShell
        sidebar={
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2 px-3">
              <VersionSwitcher
                current={version}
                options={getVersionSwitchTargets(routePath)}
              />
              <DocsThemeToggle />
            </div>
            <DocsSidebar items={getSidebar(version)} />
          </div>
        }
        toc={<DocsToc entries={toc} />}
      >
        {version !== latest && (
          <div className="mb-8 rounded-lg border border-docs-accent/40 bg-docs-active px-5 py-4 text-sm text-docs-heading">
            You are reading the documentation for version <strong>{version}</strong>.{' '}
            <Link href={getVersionHref(latest, routePath)} className="font-semibold text-docs-accent underline">
              Go to the latest version ({latest})
            </Link>
            .
          </div>
        )}

        <article className="docs-prose">
          {!doc.hideTitle && <h1>{doc.title}</h1>}
          <Content components={getMdxComponents(version, doc.routeDir)} />
        </article>

        <nav
          aria-label="Documentation pages"
          className="mt-16 flex flex-col gap-4 border-t border-docs-border pt-8 sm:flex-row sm:justify-between"
        >
          {previous ? (
            <Link
              href={previous.href}
              className="group flex flex-1 items-center gap-3 rounded-lg border border-docs-border px-4 py-3 transition-colors hover:border-docs-accent"
            >
              <ArrowLeft size={18} className="shrink-0 text-docs-muted transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-docs-muted">Previous</span>
                <span className="block truncate font-semibold text-docs-heading">{previous.label}</span>
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}

          {next ? (
            <Link
              href={next.href}
              className="group flex flex-1 items-center justify-end gap-3 rounded-lg border border-docs-border px-4 py-3 text-right transition-colors hover:border-docs-accent"
            >
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wide text-docs-muted">Next</span>
                <span className="block truncate font-semibold text-docs-heading">{next.label}</span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-docs-muted transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </nav>
      </DocsShell>
    </main>
  );
}
