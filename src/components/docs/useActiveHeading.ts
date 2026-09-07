// src/components/docs/useActiveHeading.ts
'use client';

import { useEffect, useState } from 'react';
import type { TocEntry } from '@/lib/docs/mdx';

/**
 * Id of the last heading to have scrolled past the sticky navbar.
 *
 * Shared by the desktop table of contents and the compact one below xl, so
 * both highlight the same entry from one scroll listener each rather than
 * drifting apart.
 */
export function useActiveHeading(entries: TocEntry[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(entries[0]?.id);

  useEffect(() => {
    if (entries.length === 0) return;

    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);

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

  return activeId;
}
