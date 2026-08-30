// src/app/docs/layout.tsx
import React from 'react';
import './[[...slug]]/docs.css';
import { DOCS_THEME_STORAGE_KEY } from '@/components/docs/docs-theme';

/**
 * Resolves the docs theme before the browser paints, so a reader who chose
 * light mode never sees a dark flash on load. It runs during HTML parsing,
 * ahead of React, and writes the attribute the CSS in docs.css keys on.
 *
 * Only /docs reads `data-docs-theme` — the shared navigation and footer are
 * dark in both themes.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('${DOCS_THEME_STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-docs-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-docs-theme', 'dark');
  }
})();
`;

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      {children}
    </>
  );
}
