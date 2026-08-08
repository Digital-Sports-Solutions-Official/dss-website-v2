// src/components/docs/VersionSwitcher.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export interface VersionOption {
  version: string;
  href: string;
  isLatest: boolean;
}

export function VersionSwitcher({
  current,
  options,
}: {
  current: string;
  options: VersionOption[];
}) {
  const router = useRouter();

  return (
    <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#AEAEAD]">
      Version
      <select
        value={current}
        onChange={(event) => {
          const target = options.find((o) => o.version === event.target.value);
          if (target) router.push(target.href);
        }}
        className="cursor-pointer rounded-md border border-white/15 bg-[#232323] px-2 py-1.5 text-sm font-semibold normal-case tracking-normal text-[#FAF9F6] transition-colors hover:border-[#FD955D] focus:border-[#FD955D] focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.version} value={option.version}>
            {option.version}
            {option.isLatest ? ' (latest)' : ''}
          </option>
        ))}
      </select>
    </label>
  );
}
