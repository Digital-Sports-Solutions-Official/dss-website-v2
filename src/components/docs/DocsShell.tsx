// src/components/docs/DocsShell.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PanelLeft, X } from 'lucide-react';

/**
 * Three-column documentation layout: sidebar, article, table of contents.
 * On small screens the sidebar collapses into a slide-in drawer and the table
 * of contents into a sticky disclosure above the article.
 */
export function DocsShell({
  sidebar,
  toc,
  tocCompact,
  children,
}: {
  sidebar: React.ReactNode;
  toc: React.ReactNode;
  tocCompact: React.ReactNode;
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever navigation lands on a new page.
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
      <div className="flex gap-8">
        {/* DESKTOP SIDEBAR */}
        <aside className="sticky top-[80px] hidden h-[calc(100vh-80px)] w-64 shrink-0 overflow-y-auto border-r border-docs-border py-8 pr-3 lg:block">
          {sidebar}
        </aside>

        {/* ARTICLE COLUMN */}
        <div className="min-w-0 flex-1 py-8">
          {/* STICKY PAGE BAR
              Carries the sidebar trigger below lg and the page outline below
              xl, on one line rather than two stacked blocks. `sticky` also
              makes it the containing block for the outline's floating panel.
              With no outline to show it is only needed below lg, where the
              sidebar itself is hidden. */}
          <div
            className={`sticky top-[80px] z-30 mb-6 flex items-center gap-3 border-b border-docs-border bg-docs-bg ${
              tocCompact ? 'xl:hidden' : 'lg:hidden'
            }`}
          >
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Browse docs"
              className="flex shrink-0 items-center gap-2 py-3 text-sm font-semibold text-docs-heading transition-colors hover:text-docs-accent lg:hidden"
            >
              <PanelLeft size={16} aria-hidden="true" />
              <span className="hidden sm:inline">Browse docs</span>
            </button>
            {tocCompact && (
              <span
                aria-hidden="true"
                className="h-5 w-px shrink-0 bg-docs-border lg:hidden"
              />
            )}
            {tocCompact}
          </div>
          {children}
        </div>

        {/* TABLE OF CONTENTS */}
        <aside className="sticky top-[80px] hidden h-[calc(100vh-80px)] w-56 shrink-0 overflow-y-auto py-8 xl:block">
          {toc}
        </aside>
      </div>

      {/* MOBILE DRAWER
          The sidebar is rendered twice, so while the drawer is closed its copy
          is marked inert — that takes the duplicate version switcher, theme
          toggle and links out of both the tab order and the accessibility tree.
          aria-hidden alone would leave them focusable. */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[80px] z-40 lg:hidden ${
          isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        inert={!isDrawerOpen}
      >
        <div
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-docs-bg shadow-2xl transition-transform duration-200 ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-docs-border px-4 py-4">
            <span className="text-sm font-bold uppercase tracking-wide text-docs-muted">
              Documentation
            </span>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close documentation menu"
              className="rounded p-1 text-docs-heading transition-colors hover:text-docs-accent"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-4 pr-2">{sidebar}</div>
        </div>
      </div>
    </div>
  );
}
