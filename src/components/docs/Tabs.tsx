// src/components/docs/Tabs.tsx
'use client';

import React, { useState } from 'react';

interface TabItemProps {
  value: string;
  label?: string;
  default?: boolean;
  children?: React.ReactNode;
}

/**
 * Stands in for Docusaurus's @theme/TabItem. It is only ever rendered through
 * <Tabs>, which reads these props off the element rather than mounting it
 * directly.
 */
export function TabItem({ children }: TabItemProps) {
  return <>{children}</>;
}

export function Tabs({ children }: { children?: React.ReactNode }) {
  const items = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabItemProps> =>
      React.isValidElement(child) && typeof child.props === 'object' && child.props !== null && 'value' in child.props
  );

  const initial =
    items.find((item) => item.props.default)?.props.value ??
    items[0]?.props.value;
  const [active, setActive] = useState<string | undefined>(initial);

  if (items.length === 0) return null;

  const current = items.find((item) => item.props.value === active) ?? items[0];

  return (
    <div className="docs-tabs my-6">
      <div
        role="tablist"
        className="flex flex-wrap gap-1 border-b border-docs-border"
      >
        {items.map((item) => {
          const isActive = item.props.value === current.props.value;
          return (
            <button
              key={item.props.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(item.props.value)}
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'border-docs-accent text-docs-accent'
                  : 'border-transparent text-docs-muted hover:text-docs-heading'
              }`}
            >
              {item.props.label ?? item.props.value}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="pt-4">
        {current.props.children}
      </div>
    </div>
  );
}
