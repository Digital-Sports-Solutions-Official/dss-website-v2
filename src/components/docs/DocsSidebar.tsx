// src/components/docs/DocsSidebar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import type { SidebarItem } from '@/lib/docs/content';

function containsHref(items: SidebarItem[], href: string): boolean {
  return items.some((item) =>
    item.type === 'category' ? containsHref(item.items, href) : item.href === href
  );
}

function DocEntry({ href, label, depth }: { href: string; label: string; depth: number }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // A page at the root of the sidebar sits alongside categories, so it gets the
  // same weight and colour they do — otherwise "Getting Started" and "FAQ" read
  // as subordinate to "Founders Edition". Nested pages stay muted.
  const restingStyle =
    depth === 0
      ? 'font-semibold text-docs-heading hover:bg-docs-hover'
      : 'text-docs-muted hover:bg-docs-hover hover:text-docs-heading';

  return (
    <Link
      href={href}
      className={`block rounded-md py-1.5 pr-3 text-sm transition-colors ${
        isActive ? 'bg-docs-active font-semibold text-docs-accent' : restingStyle
      }`}
      style={{ paddingLeft: `${12 + depth * 14}px` }}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

function CategoryEntry({
  category,
  depth,
}: {
  category: Extract<SidebarItem, { type: 'category' }>;
  depth: number;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(() => containsHref(category.items, pathname));

  return (
    <li>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-2 rounded-md py-1.5 pr-2 text-left text-sm font-semibold text-docs-heading transition-colors hover:bg-docs-hover"
        style={{ paddingLeft: `${12 + depth * 14}px` }}
      >
        <span>{category.label}</span>
        <ChevronDown
          size={15}
          className={`shrink-0 text-docs-muted transition-transform duration-200 ${
            isOpen ? '' : '-rotate-90'
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && <SidebarList items={category.items} depth={depth + 1} />}
    </li>
  );
}

function SidebarList({ items, depth }: { items: SidebarItem[]; depth: number }) {
  return (
    <ul className="flex flex-col gap-0.5">
      {items.map((item) =>
        item.type === 'category' ? (
          <CategoryEntry key={`${item.label}-${depth}`} category={item} depth={depth} />
        ) : (
          <li key={item.href}>
            <DocEntry href={item.href} label={item.label} depth={depth} />
          </li>
        )
      )}
    </ul>
  );
}

export function DocsSidebar({ items }: { items: SidebarItem[] }) {
  return (
    <nav aria-label="Documentation">
      <SidebarList items={items} depth={0} />
    </nav>
  );
}
