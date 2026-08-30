// src/components/docs/DocsThemeToggle.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import {
  DOCS_THEME_STORAGE_KEY,
  applyTheme,
  preferredTheme,
  type DocsTheme,
} from './docs-theme';

/**
 * Light/dark switch for the documentation only. The shared navigation and
 * footer stay dark in both themes.
 *
 * The blocking script in the docs layout sets the initial attribute before
 * paint, but it does not run again on a client-side navigation into /docs, so
 * this also re-applies the stored choice on mount.
 */
export function DocsThemeToggle() {
  const [theme, setTheme] = useState<DocsTheme | null>(null);

  useEffect(() => {
    const current = preferredTheme();
    applyTheme(current);
    setTheme(current);
  }, []);

  const toggle = () => {
    const next: DocsTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
    setTheme(next);
    try {
      localStorage.setItem(DOCS_THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing with storage blocked — the theme still applies for
      // this page view, it just will not be remembered.
    }
  };

  // Render the control only once the theme is known, so the icon never shows
  // the wrong state during hydration.
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-docs-border text-docs-muted transition-colors hover:border-docs-accent hover:text-docs-accent"
    >
      {theme === null ? (
        <span className="block h-4 w-4" />
      ) : isLight ? (
        <Moon size={16} aria-hidden="true" />
      ) : (
        <Sun size={16} aria-hidden="true" />
      )}
    </button>
  );
}
