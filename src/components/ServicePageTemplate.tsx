'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { ContentContainer } from '@/components/LayoutPrimitives';

export interface CapabilityCard {
  title: string;
  description: string;
  icon: string;
}

export interface ServicePageTemplateProps {
  pageLabel: string;
  heading: string;
  imageUrl: string;
  imageAlt: string;
  bodyText: React.ReactNode;
  capabilities: CapabilityCard[];
  processSteps: string[];
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  pageLabel,
  heading,
  imageUrl,
  imageAlt,
  bodyText,
  capabilities,
  processSteps,
}) => {
  // Check if image is a vertical/portrait asset (like mobile-showcase.webp)
  const isPortrait = imageUrl.includes('.webp') || imageUrl.includes('mobile');

  return (
    <main className="w-full bg-[#181818] min-h-screen pt-32 sm:pt-40 pb-40 text-white font-sans select-none">
      <ContentContainer className="flex flex-col gap-y-16 sm:gap-y-20">
        
        {/* ==========================================================================
           HERO SECTION: HEADING + BODY (LEFT) & IMAGE (RIGHT)
           ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Typography
              variant="caption"
              className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3"
            >
              {pageLabel}
            </Typography>

            <h1 
              style={{ 
                fontSize: 'clamp(32px, 4.5vw, 52px)', 
                fontWeight: '800', 
                letterSpacing: '-0.02em', 
                color: '#FAF9F6', 
                margin: '0 0 20px 0',
                lineHeight: '1.15'
              }}
              className="font-sans text-balance"
            >
              {heading}
            </h1>

            <div className="text-[#D4D4D4] font-sans text-xs sm:text-sm md:text-base leading-relaxed space-y-4 max-w-xl">
              {bodyText}
            </div>
          </div>

          {/* RIGHT HERO IMAGE CONTAINER */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            {isPortrait ? (
              /* PORTRAIT / MOBILE DEVICE SHOWCASE FRAME */
              <div className="relative max-w-[280px] sm:max-w-[310px] w-full bg-[#121212] rounded-[32px] p-2 sm:p-2.5 border border-[#333333] shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <div className="w-full rounded-[24px] overflow-hidden border border-[#262626]">
                  <img 
                    src={imageUrl} 
                    alt={imageAlt} 
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </div>
            ) : (
              /* LANDSCAPE IMAGE FRAME */
              <div className="w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden border border-[#333333] shadow-2xl bg-[#202020]">
                <img 
                  src={imageUrl} 
                  alt={imageAlt} 
                  className="w-full h-full object-cover block"
                />
              </div>
            )}
          </div>

        </div>

        {/* SECTION DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />

        {/* ==========================================================================
           WHAT WE DELIVER SECTION
           ========================================================================== */}
        <div className="flex flex-col">
          <Typography
            variant="caption"
            className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-8 sm:mb-10"
          >
            WHAT WE DELIVER
          </Typography>

          {/* CARDS GRID WITH SPACING ABOVE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 w-full items-stretch pt-4 sm:pt-6">
            {capabilities.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-[#202020] border border-[#333333] rounded-2xl p-6 sm:p-7 flex flex-col items-start text-left hover:border-[#FD955D]/40 transition-colors duration-200"
              >
                {/* ICON BADGE */}
                <div className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center mb-5 text-[#FD955D]">
                  <i className={`fas ${card.icon} text-sm`} />
                </div>

                {/* TITLE */}
                <h3 className="text-base sm:text-lg font-bold text-[#FAF9F6] mb-2 font-sans">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-[#A3A3A3] text-xs sm:text-sm leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />

        {/* ==========================================================================
           SIMPLE 5-STEP PROCESS SECTION
           ========================================================================== */}
        <div className="flex flex-col gap-y-10">
          <Typography
            variant="caption"
            className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px]"
          >
            SIMPLE 5-STEP PROCESS
          </Typography>

          {/* PROCESS STEPPER ROW */}
          <div className="relative w-full">
            {/* CONNECTOR LINE BEHIND BADGES */}
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-[1px] bg-[#FD955D]/40 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => {
                const stepNum = String(index + 1).padStart(2, '0');
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* STEP NUMBER BADGE */}
                    <div className="w-10 h-10 bg-[#181818] border border-[#FD955D] flex items-center justify-center text-[#FD955D] font-mono text-xs font-bold shadow-md">
                      {stepNum}
                    </div>

                    {/* GAP BEFORE WHITE TEXT */}
                    <span className="text-xs sm:text-sm font-bold text-[#FAF9F6] font-mono tracking-wider uppercase mt-8 sm:mt-10">
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION DIVIDER */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />

        {/* ==========================================================================
           CALL TO ACTION BUTTON (MATCHING CONTACT SECTION BUTTON STYLE)
           ========================================================================== */}
        <div className="flex justify-center pt-8 pb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-2 px-12 sm:px-14 py-4 min-w-[240px] sm:min-w-[260px] rounded-2xl text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 group whitespace-nowrap shadow-[0_0_25px_rgba(200,90,50,0.35)]"
            style={{
              background: 'linear-gradient(135deg, #C85A32 0%, #B04A26 100%)',
            }}
          >
            <span>Learn More</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
              &rarr;
            </span>
          </Link>
        </div>

      </ContentContainer>
    </main>
  );
};