// src/components/docs/docs-theme.ts
//
// Shared between the blocking script in the docs layout and the toggle
// component, so the storage key and attribute name cannot drift apart.

export type DocsTheme = 'light' | 'dark';

export const DOCS_THEME_STORAGE_KEY = 'dss-docs-theme';
export const DOCS_THEME_ATTRIBUTE = 'data-docs-theme';

export function readStoredTheme(): DocsTheme | null {
  try {
    const stored = localStorage.getItem(DOCS_THEME_STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

export function preferredTheme(): DocsTheme {
  return readStoredTheme() ??
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
}

export function applyTheme(theme: DocsTheme): void {
  document.documentElement.setAttribute(DOCS_THEME_ATTRIBUTE, theme);
}
