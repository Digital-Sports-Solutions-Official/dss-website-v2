// src/components/docs/useActiveHeading.ts
'use client';

import { useEffect, useState } from 'react';
import type { TocEntry } from '@/lib/docs/mdx';

/** Fallback matching --docs-anchor-offset in docs.css, for the first paint
 *  before the stylesheet is queryable. */
const DEFAULT_ANCHOR_OFFSET = 100;

/**
 * Distance from the viewport top that counts as "the top of the page", read
 * from the same custom property that gives headings their scroll-margin-top.
 * Sharing it is what keeps a jump and the highlight in agreement: land a
 * heading at 152px while testing against 120px and the entry that lights up is
 * the one before it.
 */
function readAnchorOffset(): number {
  const root = document.querySelector('.docs-root');
  if (!root) return DEFAULT_ANCHOR_OFFSET;
  const raw = getComputedStyle(root).getPropertyValue('--docs-anchor-offset');
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : DEFAULT_ANCHOR_OFFSET;
}

/**
 * Id of the last heading to have scrolled past the sticky navbar.
 *
 * Shared by the desktop table of contents and the compact one below xl, so
 * both highlight the same entry from one implementation instead of drifting
 * apart.
 */
export function useActiveHeading(entries: TocEntry[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(entries[0]?.id);

  useEffect(() => {
    if (entries.length === 0) return;

    const headings = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);

    // A couple of pixels of slack so a heading resting exactly on the offset
    // after a jump counts as arrived despite subpixel rounding.
    let cutoff = readAnchorOffset() + 4;

    const update = () => {
      let current = headings[0];
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= cutoff) current = heading;
        else break;
      }
      setActiveId(current?.id);
    };

    // The offset changes at the xl breakpoint, so re-read it before measuring.
    const onResize = () => {
      cutoff = readAnchorOffset() + 4;
      update();
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', onResize);
    };
  }, [entries]);

  return activeId;
}
