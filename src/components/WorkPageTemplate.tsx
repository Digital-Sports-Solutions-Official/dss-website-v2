// src/components/WorkPageTemplate.tsx
'use client';

import React from 'react';
import { SplitSection } from './SplitSection';

export interface WorkPageSection {
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  customElement?: React.ReactNode;
}

export interface WorkPageTemplateProps {
  clientName: string;
  clientSubtitle: string;
  logoUrl?: string;
  headline: string;
  categoryTag?: string;
  sections: WorkPageSection[];
}

export const WorkPageTemplate: React.FC<WorkPageTemplateProps> = ({
  clientName,
  clientSubtitle,
  logoUrl,
  headline,
  categoryTag,
  sections,
}) => {
  return (
    <main className="w-full bg-[#121212] min-h-screen text-[#FAF9F6] pt-28 sm:pt-36 pb-24 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HERO HEADER SECTION */}
        <header className="flex flex-col items-start max-w-5xl mb-14 sm:mb-20">
          
          {/* TOP ROW: Accent Line + Logo + Orange Subtitle Text */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="w-6 h-[2px] bg-[#FD955D]" />

            {logoUrl && (
              <div className="h-7 sm:h-9 shrink-0 flex items-center max-w-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl}
                  alt={clientName}
                  className="h-full w-auto max-w-full object-contain block"
                />
              </div>
            )}

            {/* Subtle, smaller orange top line */}
            <span className="text-[#FD955D] font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
              {clientName} — {clientSubtitle}
            </span>
          </div>

          {/* LOWER CONTAINER: Headline & Tag shifted down */}
          <div className="mt-6 sm:mt-8 flex flex-col items-start gap-y-5">
            {/* Very prominent main hero title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#FAF9F6] leading-[1.1]">
              {headline}
            </h1>

            {categoryTag && (
              <div className="inline-block px-2.5 py-1 border border-[#FD955D]/40 bg-[#FD955D]/10 rounded">
                <span className="text-[#FD955D] font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] block leading-none">
                  {categoryTag}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* HERO ORANGE GRADIENT DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FD955D]/40 to-transparent my-10 sm:my-14" />

        {/* WORK SECTIONS LIST */}
        <div className="flex flex-col">
          {sections.map((section, idx) => {
            const isEven = idx % 2 === 0;
            const imageSide = isEven ? 'right' : 'left';

            return (
              <React.Fragment key={idx}>
                <div className="py-12 sm:py-16 md:py-20">
                  <SplitSection
                    imageSide={imageSide}
                    eyebrow={section.eyebrow}
                    title={section.heading}
                    imageUrl={section.imageUrl}
                    imageAlt={section.imageAlt}
                    customImageElement={section.customElement}
                  >
                    {section.body}
                  </SplitSection>
                </div>

                {/* ORANGE GRADIENT SECTION DIVIDER */}
                {idx < sections.length - 1 && (
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FD955D]/40 to-transparent" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </main>
  );
};