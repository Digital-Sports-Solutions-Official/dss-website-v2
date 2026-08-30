// src/components/docs/MdxComponents.tsx
import React from 'react';
import Link from 'next/link';
import { Admonition } from './Admonition';
import { Tabs, TabItem } from './Tabs';
import { ImageSwitcher } from './ImageSwitcher';
import { DOCS_BASE_PATH, docHref, getLatestVersion } from '@/lib/docs/content';

/**
 * The content links to other pages as `/docs/some/page` regardless of which
 * version it lives in — that is how Docusaurus authored them. When the reader
 * is on an older version, keep them there instead of bouncing them to latest.
 * Relative links (`./practice-mode`) resolve against the current directory.
 */
function resolveDocHref(href: string, version: string, routeDir: string): string {
  if (href.startsWith('./') || href.startsWith('../')) {
    // The dummy origin is only there so URL() will do the ../ arithmetic.
    const resolved = new URL(href, `https://docs.invalid${docHref(version, routeDir)}/`);
    return resolved.pathname + resolved.hash;
  }

  if (version !== getLatestVersion() && href.startsWith(`${DOCS_BASE_PATH}/`)) {
    return `${DOCS_BASE_PATH}/${version}/${href.slice(DOCS_BASE_PATH.length + 1)}`;
  }

  return href;
}

function isExternal(href: string): boolean {
  return /^(https?:)?\/\//.test(href) || href.startsWith('mailto:');
}

export function getMdxComponents(version: string, routeDir: string) {
  function DocLink({
    href = '',
    children,
    ...rest
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    if (isExternal(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    }

    if (href.startsWith('#')) {
      return (
        <a href={href} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={resolveDocHref(href, version, routeDir)} {...rest}>
        {children}
      </Link>
    );
  }

  return {
    a: DocLink,
    Admonition,
    Tabs,
    TabItem,
    ImageSwitcher,
  };
}
