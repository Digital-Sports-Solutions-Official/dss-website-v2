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

const STYLES: Record<
  AdmonitionType,
  { label: string; accent: string; tint: string; Icon: React.ElementType }
> = {
  note: { label: 'Note', accent: '#AEAEAD', tint: 'rgba(174, 174, 173, 0.1)', Icon: Pencil },
  tip: { label: 'Tip', accent: '#4ADE80', tint: 'rgba(74, 222, 128, 0.1)', Icon: Lightbulb },
  info: { label: 'Info', accent: '#60A5FA', tint: 'rgba(96, 165, 250, 0.1)', Icon: Info },
  caution: { label: 'Caution', accent: '#FD955D', tint: 'rgba(253, 149, 93, 0.12)', Icon: AlertTriangle },
  warning: { label: 'Warning', accent: '#FD955D', tint: 'rgba(253, 149, 93, 0.12)', Icon: AlertTriangle },
  danger: { label: 'Danger', accent: '#FF4B33', tint: 'rgba(255, 75, 51, 0.12)', Icon: OctagonAlert },
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
  const { label, accent, tint, Icon } = STYLES[type] ?? STYLES.note;

  return (
    <aside
      className="docs-admonition my-6 rounded-lg border-l-4 px-5 py-4"
      style={{ borderLeftColor: accent, backgroundColor: tint }}
    >
      <p
        className="m-0 flex items-center gap-2 text-sm font-bold uppercase tracking-wide"
        style={{ color: accent }}
      >
        <Icon size={16} aria-hidden="true" />
        {title || label}
      </p>
      <div className="docs-admonition-body mt-2">{children}</div>
    </aside>
  );
}
