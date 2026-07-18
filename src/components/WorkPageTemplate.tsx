// src/components/WorkPageTemplate.tsx
'use client';

import React from 'react';
import { SplitSection } from '@/components/SplitSection';
import { DSS_TOKENS } from '@/config/theme';

interface WorkSectionBlock {
  heading: string;
  body: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
}

interface WorkPageTemplateProps {
  clientName: string;
  categoryTag: string;
  headline: string;
  logoUrl: string;
  sections: WorkSectionBlock[];
}

export const WorkPageTemplate: React.FC<WorkPageTemplateProps> = ({
  clientName,
  categoryTag,
  headline,
  logoUrl,
  sections
}) => {
  return (
    <main 
      style={{ backgroundColor: DSS_TOKENS.colors.bg.primary }} 
      className="w-full min-h-screen text-white overflow-x-hidden pt-24 selection:bg-[#FD955D]/30"
    >
      
      {/* HERO HEADER BRAND STRIP BAR BLOCK */}
      <header className="w-full px-4 sm:px-8 md:px-12 xl:px-16 pt-16 pb-12 max-w-[1400px] mx-auto flex flex-col items-start text-left">
        <div style={{ backgroundColor: DSS_TOKENS.colors.brand.red }} className="w-10 h-[2px] mb-6" />
        
        <div className="flex flex-wrap items-center gap-4 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoUrl} alt={`${clientName} Logo`} className="h-8 w-auto object-contain block" />
          <span style={{ color: DSS_TOKENS.colors.text.muted }} className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest block">
            // {clientName}
          </span>
        </div>

        <h1 
          style={{ 
            fontFamily: 'var(--font-montserrat), system-ui, sans-serif', 
            fontSize: 'clamp(28px, 5vw, 46px)' 
          }} 
          className="font-extrabold tracking-tight leading-tight mb-6 text-balance max-w-4xl"
        >
          {headline}
        </h1>

        <span 
          style={{ 
            color: DSS_TOKENS.colors.brand.orange, 
            borderColor: `${DSS_TOKENS.colors.brand.orange}33` 
          }} 
          className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 border rounded"
        >
          {categoryTag}
        </span>
      </header>

      {/* DYNAMIC SECTION MATRIX LOOP: Alternates sides dynamically down the column stream */}
      <div className="w-full flex flex-col">
        {sections.map((sec, idx) => (
          <SplitSection
            key={idx}
            imageSide={idx % 2 === 0 ? 'right' : 'left'}
            eyebrow={`PHASE ${String(idx + 1).padStart(2, '0')}`}
            title={sec.heading}
            imageUrl={sec.imageUrl}
            imageAlt={sec.imageAlt}
          >
            <div style={{ color: DSS_TOKENS.colors.text.muted }} className="text-sm sm:text-base font-medium leading-relaxed flex flex-col gap-y-4">
              {sec.body}
            </div>
          </SplitSection>
        ))}
      </div>
    </main>
  );
};