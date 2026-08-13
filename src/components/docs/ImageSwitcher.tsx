// src/components/docs/ImageSwitcher.tsx
import React from 'react';

/**
 * Stands in for the Docusaurus `ImageSwitcher` component the docs import.
 *
 * Both sources are rendered and CSS shows the one matching the current docs
 * theme (see the themed-images block in docs.css). Doing it that way keeps this
 * a server component and avoids a flash of the wrong asset while the theme
 * resolves on the client.
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
  // With only one source there is nothing to switch between.
  if (!lightSrc || !darkSrc) {
    const src = darkSrc ?? lightSrc;
    if (!src) return null;
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt ?? ''} style={style} loading="lazy" />;
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={lightSrc}
        alt={alt ?? ''}
        style={style}
        loading="lazy"
        data-docs-img="light"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={darkSrc}
        alt={alt ?? ''}
        style={style}
        loading="lazy"
        data-docs-img="dark"
      />
    </>
  );
}
