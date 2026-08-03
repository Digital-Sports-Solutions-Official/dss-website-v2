// src/components/WorkPageTemplate.tsx
'use client';

import React from 'react';
import { SplitSection } from './SplitSection';
import { ContentContainer } from './LayoutPrimitives';
import { Typography } from './Typography';

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

const redRule = 'h-px w-full bg-gradient-to-r from-transparent via-[#FF1900]/40 to-transparent';

export const WorkPageTemplate: React.FC<WorkPageTemplateProps> = ({
  clientName,
  clientSubtitle,
  logoUrl,
  headline,
  categoryTag,
  sections,
}) => {
  return (
    <main className="w-full min-h-screen bg-[#171717] pt-28 pb-20 font-sans text-[#FAF9F6] sm:pt-36 sm:pb-24">
      <ContentContainer size="wide">
        
        {/* HERO HEADER SECTION */}
        <header className="flex max-w-5xl flex-col items-start">
          
          {/* TOP ROW: Logo + Orange Subtitle Text */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
            {logoUrl && (
              <span className="flex h-7 max-w-[180px] shrink-0 items-center sm:h-9 sm:max-w-[200px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logoUrl}
                  alt={clientName}
                  className="block h-full w-auto max-w-full object-contain"
                />
              </span>
            )}

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FD955D] sm:text-xs">
              {clientName} — {clientSubtitle}
            </span>
          </div>

          {/* LOWER CONTAINER: Headline & Tag */}
          <div className="mt-6 flex flex-col items-start gap-y-5 sm:mt-8">
            <Typography variant="display">{headline}</Typography>

            {categoryTag && (
              <span className="inline-block rounded border border-[#FD955D]/40 bg-[#FD955D]/10 px-2.5 py-1">
                <span className="block font-mono text-[9px] font-semibold uppercase leading-none tracking-[0.25em] text-[#FD955D] sm:text-[10px]">
                  {categoryTag}
                </span>
              </span>
            )}
          </div>
        </header>

        {/* HERO GRADIENT DIVIDER */}
        <div className={`${redRule} my-10 sm:my-14`} />

        {/* WORK SECTIONS LIST */}
        <div className="flex flex-col">
          {sections.map((section, idx) => {
            const isEven = idx % 2 === 0;
            const imageSide = isEven ? 'right' : 'left';

            return (
              <React.Fragment key={idx}>
                <div className="py-10 sm:py-14 md:py-20">
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

                {idx < sections.length - 1 && <div className={redRule} />}
              </React.Fragment>
            );
          })}
        </div>

      </ContentContainer>
    </main>
  );
};