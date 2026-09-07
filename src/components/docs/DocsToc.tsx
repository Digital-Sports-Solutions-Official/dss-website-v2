// src/components/docs/DocsToc.tsx
'use client';

import React from 'react';
import type { TocEntry } from '@/lib/docs/mdx';
import { useActiveHeading } from './useActiveHeading';

/** The "On this page" aside, shown from xl up. DocsTocCompact covers narrower
 *  viewports, where there is no room for a third column. */
export function DocsToc({ entries }: { entries: TocEntry[] }) {
  const activeId = useActiveHeading(entries);

  if (entries.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-docs-muted">
        On this page
      </p>
      <ul className="flex flex-col gap-1 border-l border-docs-border">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={`-ml-px block border-l-2 py-1 transition-colors ${
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
