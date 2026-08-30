// src/components/docs/Admonition.tsx
import React from 'react';
import {
  Info,
  Lightbulb,
  AlertTriangle,
  OctagonAlert,
  Pencil,
} from 'lucide-react';

type AdmonitionType = 'note' | 'tip' | 'info' | 'caution' | 'warning' | 'danger';

// Colours live in docs.css so they can flip with the theme; this only picks the
// label and the icon.
const VARIANTS: Record<AdmonitionType, { label: string; Icon: React.ElementType }> = {
  note: { label: 'Note', Icon: Pencil },
  tip: { label: 'Tip', Icon: Lightbulb },
  info: { label: 'Info', Icon: Info },
  caution: { label: 'Caution', Icon: AlertTriangle },
  warning: { label: 'Warning', Icon: AlertTriangle },
  danger: { label: 'Danger', Icon: OctagonAlert },
};

export function Admonition({
  type = 'note',
  title,
  children,
}: {
  type?: AdmonitionType;
  title?: string;
  children?: React.ReactNode;
}) {
  const { label, Icon } = VARIANTS[type] ?? VARIANTS.note;

  return (
    <aside className={`docs-admonition docs-admonition--${type}`}>
      <p className="docs-admonition-label">
        <Icon size={16} aria-hidden="true" />
        {title || label}
      </p>
      <div className="docs-admonition-body">{children}</div>
    </aside>
  );
}
