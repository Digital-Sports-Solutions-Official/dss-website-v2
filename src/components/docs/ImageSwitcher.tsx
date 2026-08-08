// src/components/docs/ImageSwitcher.tsx
import React from 'react';

/**
 * Stands in for the Docusaurus `ImageSwitcher` component the docs import. The
 * DSS site renders on a single dark theme, so the dark asset is the one that
 * belongs here; `lightSrc` is kept as the fallback for pages that only set one.
 */
export function ImageSwitcher({
  lightSrc,
  darkSrc,
  alt,
  style,
}: {
  lightSrc?: string;
  darkSrc?: string;
  alt?: string;
  style?: React.CSSProperties;
}) {
  const src = darkSrc ?? lightSrc;
  if (!src) return null;

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt ?? ''} style={style} loading="lazy" />;
}
