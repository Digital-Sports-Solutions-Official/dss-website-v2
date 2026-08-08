// src/components/docs/DocsToc.tsx
'use client';

import React, { useEffect, useState } from 'react';
import type { TocEntry } from '@/lib/docs/mdx';

export function DocsToc({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(entries[0]?.id);

  useEffect(() => {
    if (entries.length === 0) return;

    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);

    // Highlight the last heading that has scrolled past the sticky navbar.
    const update = () => {
      const cutoff = 120;
      let current = headings[0];
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= cutoff) current = heading;
        else break;
      }
      setActiveId(current?.id);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#AEAEAD]">
        On this page
      </p>
      <ul className="flex flex-col gap-1 border-l border-white/10">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              className={`-ml-px block border-l-2 py-1 transition-colors ${
                activeId === entry.id
                  ? 'border-[#FD955D] text-[#FD955D]'
                  : 'border-transparent text-[#AEAEAD] hover:text-[#FAF9F6]'
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
