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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center w-full py-4 sm:py-8">
      
      {/* TEXT CONTENT COLUMN */}
      <div
        className={`lg:col-span-6 flex flex-col justify-center ${
          isImageLeft ? 'lg:order-2 lg:pl-2' : 'lg:order-1 lg:pr-2'
        }`}
      >
        {/* Top Accent Dash + Eyebrow */}
        {eyebrow && (
          <div className="flex flex-col items-start gap-y-2 mb-3">
            {/* Orange dash matching the hero header accent */}
            <div className="w-8 h-[2px] bg-[#FD955D]" />
            <span className="text-[#FD955D] font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] block">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Large White Section Heading (matching the wireframe scale) */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF9F6] tracking-tight leading-[1.1] mb-5">
          {title}
        </h2>

        {/* Body Text */}
        <div className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
          {children}
        </div>
      </div>

      {/* MEDIA COLUMN */}
      <div
        className={`lg:col-span-6 flex items-center ${
          isImageLeft ? 'lg:order-1 lg:justify-start' : 'lg:order-2 lg:justify-end'
        }`}
      >
        <div className="w-full max-w-[540px] aspect-[16/10] my-2 sm:my-4 rounded-2xl overflow-hidden bg-[#1A1A1A] border border-[#2A2A2A] shadow-2xl flex items-center justify-center relative shrink-0">
          {customImageElement ? (
            <div className="w-full h-full flex items-center justify-center overflow-hidden [&_video]:w-full [&_video]:h-full [&_video]:object-cover">
              {customImageElement}
            </div>
          ) : imageUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover block"
            />
          ) : null}
        </div>
      </div>

    </div>
  );
};