// src/components/SplitSection.tsx
'use client';

import React from 'react';

export interface SplitSectionProps {
  imageSide?: 'left' | 'right';
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  customImageElement?: React.ReactNode;
}

export const SplitSection: React.FC<SplitSectionProps> = ({
  imageSide = 'right',
  eyebrow,
  title,
  children,
  imageUrl,
  imageAlt = '',
  customImageElement,
}) => {
  const isImageLeft = imageSide === 'left';

  return (
    <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
      
      {/* TEXT CONTENT COLUMN */}
      <div
        className={`flex flex-col justify-center lg:col-span-6 ${
          isImageLeft ? 'lg:order-2 lg:pl-2' : 'lg:order-1 lg:pr-2'
        }`}
      >
        {/* Top Accent Dash + Eyebrow */}
        {eyebrow && (
          <div className="mb-3 flex flex-col items-start gap-y-2">
            <span className="h-0.5 w-8 bg-[#FD955D]" aria-hidden />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#FD955D] sm:text-[11px] sm:tracking-[0.3em]">
              {eyebrow}
            </span>
          </div>
        )}

        <h2 className="mb-4 font-sans text-[clamp(1.625rem,5.5vw,3rem)] font-extrabold leading-[1.12] tracking-tight text-[#FAF9F6] text-balance sm:mb-5">
          {title}
        </h2>

        {/* Body Text */}
        <div className="max-w-xl font-sans text-[0.9375rem] font-normal leading-relaxed text-[#A3A3A3] md:text-base">
          {children}
        </div>
      </div>

      {/* MEDIA COLUMN */}
      <div
        className={`flex items-center lg:col-span-6 ${
          isImageLeft ? 'lg:order-1 lg:justify-start' : 'lg:order-2 lg:justify-end'
        }`}
      >
        <div className="relative flex aspect-[16/10] w-full max-w-[540px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#1A1A1A] shadow-2xl">
          {customImageElement ? (
            <div className="flex h-full w-full items-center justify-center overflow-hidden [&_video]:h-full [&_video]:w-full [&_video]:object-cover">
              {customImageElement}
            </div>
          ) : imageUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={imageUrl} alt={imageAlt} className="block h-full w-full object-cover" />
          ) : null}
        </div>
      </div>

    </div>
  );
};
