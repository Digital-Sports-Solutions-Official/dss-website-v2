// src/components/docs/DocsTocCompact.tsx
'use client';

import React, { useEffect, useId, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, List } from 'lucide-react';
import type { TocEntry } from '@/lib/docs/mdx';
import { useActiveHeading } from './useActiveHeading';

/**
 * "On this page" for viewports below xl, where the third column is hidden.
 *
 * A disclosure rather than a drawer: it sticks under the navbar so the reader
 * keeps the outline and their current position at any scroll depth, which is
 * the part of the desktop aside worth carrying over. Collapsed, it names the
 * section currently in view.
 */
export function DocsTocCompact({ entries }: { entries: TocEntry[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveHeading(entries);
  const panelId = useId();
  const pathname = usePathname();

  // A new page means a new outline; never carry the open state across.
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  if (entries.length === 0) return null;

  const active = entries.find((entry) => entry.id === activeId);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[80px] z-30 mb-6 border-b border-docs-border bg-docs-bg xl:hidden"
    >
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center gap-2 py-3 text-left text-sm font-semibold text-docs-heading transition-colors hover:text-docs-accent"
      >
        <List size={16} className="shrink-0" aria-hidden="true" />
        <span className="shrink-0">On this page</span>
        {!isOpen && active && (
          <span className="truncate font-normal text-docs-muted">
            <span aria-hidden="true" className="mr-2 text-docs-border">
              /
            </span>
            {active.text}
          </span>
        )}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`ml-auto shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Capped so a long outline cannot cover the whole screen. */}
      <ul
        id={panelId}
        hidden={!isOpen}
        className="max-h-[50vh] overflow-y-auto border-l border-docs-border pb-4"
      >
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              onClick={() => setIsOpen(false)}
              className={`-ml-px block border-l-2 py-1.5 text-sm transition-colors ${
                activeId === entry.id
                  ? 'border-docs-accent text-docs-accent'
                  : 'border-transparent text-docs-muted hover:text-docs-heading'
              }`}
              style={{ paddingLeft: `${12 + (entry.depth - 2) * 12}px` }}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
