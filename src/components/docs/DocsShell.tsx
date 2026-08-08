// src/components/docs/DocsShell.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { PanelLeft, X } from 'lucide-react';

/**
 * Three-column documentation layout: sidebar, article, table of contents.
 * On small screens the sidebar collapses into a slide-in drawer.
 */
export function DocsShell({
  sidebar,
  toc,
  children,
}: {
  sidebar: React.ReactNode;
  toc: React.ReactNode;
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
        <aside className="sticky top-[80px] hidden h-[calc(100vh-80px)] w-64 shrink-0 overflow-y-auto border-r border-white/10 py-8 pr-3 lg:block">
          {sidebar}
        </aside>

        {/* ARTICLE COLUMN */}
        <div className="min-w-0 flex-1 py-8">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="mb-6 flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-[#FAF9F6] transition-colors hover:border-[#FD955D] hover:text-[#FD955D] lg:hidden"
          >
            <PanelLeft size={16} aria-hidden="true" />
            Browse docs
          </button>
          {children}
        </div>

        {/* TABLE OF CONTENTS */}
        <aside className="sticky top-[80px] hidden h-[calc(100vh-80px)] w-56 shrink-0 overflow-y-auto py-8 xl:block">
          {toc}
        </aside>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isDrawerOpen}
      >
        <div
          onClick={() => setIsDrawerOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-200 ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-[#171717] shadow-2xl transition-transform duration-200 ${
            isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
            <span className="text-sm font-bold uppercase tracking-wide text-[#AEAEAD]">
              Documentation
            </span>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close documentation menu"
              className="rounded p-1 text-[#FAF9F6] transition-colors hover:text-[#FD955D]"
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
