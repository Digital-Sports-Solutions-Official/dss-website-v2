// src/components/ServicePageTemplate.tsx
'use client';

import React from 'react';
import { SplitSection } from '@/components/SplitSection';

interface CapabilityCard {
  title: string;
  description: string;
  icon: string;
}

interface ServicePageTemplateProps {
  pageLabel: string;
  heading: string;
  bodyText: React.ReactNode;
  imageUrl: string;
  imageAlt: string;
  capabilitiesTitle?: string;
  capabilities: CapabilityCard[];
  processSteps: string[];
  ctaHref?: string;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  pageLabel,
  heading,
  bodyText,
  imageUrl,
  imageAlt,
  capabilitiesTitle = "WHAT WE DELIVER",
  capabilities,
  processSteps,
  ctaHref = "/contact"
}) => {
  return (
    <main className="w-full bg-[#232323] min-h-screen text-[#FAF9F6] font-sans selection:bg-[#FD955D]/30 overflow-x-hidden">
      
      {/* PART 1: INTRO SPLIT SECTION */}
      <div className="w-full">
        <SplitSection
          imageSide="right"
          eyebrow={pageLabel}
          title={heading}
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        >
          <div className="text-sm sm:text-base md:text-[18px] text-[#AEAEAD] font-medium leading-loose flex flex-col gap-y-6">
            {bodyText}
          </div>
        </SplitSection>
      </div>

      {/* ==========================================================================
         PART 2: WHAT WE DELIVER CAPABILITIES GRID (Color-Matched to Brand Orange)
         ========================================================================== */}
      <section className="w-full bg-[#232323] pt-24 pb-20 px-4 sm:px-8 md:px-12 xl:px-16 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#3A3A3A]" />
        <div className="max-w-[1400px] mx-auto w-full">
          
          {/* Updated section label header text color matching orange asset tokens */}
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#FD955D] block uppercase mb-12">
            {capabilitiesTitle}
          </span>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '32px', 
              width: '100%' 
            }}
          >
            {capabilities.map((card, idx) => (
              <div 
                key={idx}
                style={{ 
                  flex: '1 1 calc(25% - 32px)', 
                  minWidth: '260px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                className="bg-[#1b1b1b]/40 border border-[#3A3A3A]/60 rounded-xl p-8 hover:border-[#FD955D]/40 transition-all duration-300 group"
              >
                {/* Updated icon color state token definitions from brand-red to brand-orange */}
                <div className="w-10 h-10 rounded-lg bg-[#2a2a2a] border border-[#3A3A3A] text-[#FD955D] flex items-center justify-center mb-6 group-hover:bg-[#FD955D] group-hover:text-[#171717] transition-all duration-300 shrink-0">
                  <i className={`fas ${card.icon} text-sm`} />
                </div>
                <h3 className="text-base sm:text-[17px] font-bold font-sans text-[#FAF9F6] mb-4 tracking-tight shrink-0">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#AEAEAD] font-medium leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         PART 3: SIMPLE 5-STEP PROCESS DIAGRAM
         ========================================================================== */}
      <section className="w-full bg-[#232323] pt-24 pb-24 px-4 sm:px-8 md:px-12 xl:px-16 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#3A3A3A]" />
        <div className="max-w-[1400px] mx-auto w-full">
          
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#FD955D] block uppercase mb-16">
            SIMPLE 5-STEP PROCESS
          </span>

          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              gap: '40px',
              width: '100%'
            }}
          >
            {processSteps.map((step, idx) => (
              <div 
                key={idx} 
                style={{ flex: '1 1 calc(20% - 40px)', minWidth: '160px' }}
                className="flex flex-row md:flex-col items-center md:items-start text-left relative z-10 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#1b1b1b] border-2 border-[#3A3A3A] text-xs font-mono font-bold text-[#AEAEAD] flex items-center justify-center shrink-0 mr-4 md:mr-0 md:mb-6 group-hover:border-[#FD955D] group-hover:text-[#FAF9F6] transition-all duration-300">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono tracking-widest text-[#AEAEAD] font-bold uppercase group-hover:text-[#FD955D] transition-colors">
                    {step}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================================================
         PART 4: FOOTER ACTION TRIGGER SECTION
         ========================================================================== */}
      <section className="w-full bg-[#232323] py-28 px-4 text-center relative border-b border-[#171717]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#3A3A3A]" />
        <div className="max-w-md mx-auto flex flex-col items-center">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest text-[#FAF9F6] bg-[#FF1900] hover:bg-[#FAF9F6] hover:text-[#171717] transition-all duration-300 rounded shadow-lg shadow-[#FF1900]/10 hover:shadow-none"
            style={{ 
              minHeight: '48px',
              paddingLeft: '36px',
              paddingRight: '36px',
              letterSpacing: '0.2em'
            }}
          >
            Learn More <span className="ml-2">→</span>
          </a>
        </div>
      </section>

    </main>
  );
};