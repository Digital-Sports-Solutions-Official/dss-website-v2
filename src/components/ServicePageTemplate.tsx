'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { ContentContainer, Rule } from '@/components/LayoutPrimitives';

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
    <main className="w-full min-h-screen bg-[#181818] pt-28 pb-20 font-sans text-white select-none sm:pt-36 sm:pb-28 md:pt-40 md:pb-32">
      <ContentContainer className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-20">
        
        {/* ==========================================================================
           HERO SECTION: HEADING + BODY (LEFT) & IMAGE (RIGHT)
           ========================================================================== */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="flex flex-col items-start text-left lg:col-span-7">
            <Typography variant="caption" className="mb-3 block">
              {pageLabel}
            </Typography>

            <Typography variant="h1" className="mb-5">
              {heading}
            </Typography>

            <div className="max-w-xl space-y-4 font-sans text-[0.9375rem] leading-relaxed text-[#D4D4D4] md:text-base">
              {bodyText}
            </div>
          </div>

          {/* RIGHT HERO IMAGE CONTAINER */}
          <div className="flex w-full justify-center lg:col-span-5 lg:justify-end">
            {isPortrait ? (
              /* PORTRAIT / MOBILE DEVICE SHOWCASE FRAME */
              <div className="relative w-full max-w-[260px] rounded-[32px] border border-[#333333] bg-[#121212] p-2 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:max-w-[310px] sm:p-2.5">
                <div className="w-full overflow-hidden rounded-[24px] border border-[#262626]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={imageUrl} alt={imageAlt} className="block h-auto w-full object-contain" />
                </div>
              </div>
            ) : (
              /* LANDSCAPE IMAGE FRAME */
              <div className="aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-2xl border border-[#333333] bg-[#202020] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt={imageAlt} className="block h-full w-full object-cover" />
              </div>
            )}
          </div>

        </div>

        <Rule />

        {/* ==========================================================================
           WHAT WE DELIVER SECTION
           ========================================================================== */}
        <div className="flex flex-col">
          <Typography variant="caption" className="mb-6 block sm:mb-8">
            What We Deliver
          </Typography>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {capabilities.map((card, idx) => (
              <div 
                key={idx} 
                className="flex h-full flex-col items-start rounded-2xl border border-[#2B2B2B] bg-[#202020] p-6 text-left transition-[border-color,box-shadow] duration-200 hover:border-[#FD955D]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] sm:p-7"
              >
                {/* ICON BADGE */}
                <span className="mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#3A3A3A] bg-[#2A1E18] text-[#FD955D]">
                  <i className={`fas ${card.icon} text-sm`} aria-hidden />
                </span>

                {/* TITLE */}
                <h3 className="mb-2.5 font-sans text-lg font-bold tracking-tight text-[#FAF9F6]">
                  {card.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="font-sans text-[0.9375rem] leading-relaxed text-[#9C9C9C]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Rule />

        {/* ==========================================================================
           SIMPLE 5-STEP PROCESS SECTION
           ========================================================================== */}
        <div className="flex flex-col gap-y-8 sm:gap-y-10">
          <Typography variant="caption" className="block">
            Simple 5-Step Process
          </Typography>

          {/* PROCESS STEPPER ROW */}
          <div className="relative w-full">
            {/* CONNECTOR LINE BEHIND BADGES */}
            <div className="absolute left-[10%] right-[10%] top-5 z-0 hidden h-px bg-[#FD955D]/40 md:block" />

            <div className="relative z-10 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-5">
              {processSteps.map((step, index) => {
                const stepNum = String(index + 1).padStart(2, '0');
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* STEP NUMBER BADGE */}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#FD955D] bg-[#181818] font-mono text-xs font-bold text-[#FD955D] shadow-md">
                      {stepNum}
                    </span>

                    <span className="mt-4 font-mono text-xs font-bold uppercase tracking-wider text-[#FAF9F6] sm:mt-6 sm:text-sm md:mt-8">
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Rule />

        {/* ==========================================================================
           CALL TO ACTION
           ========================================================================== */}
        <div className="flex justify-center pt-2 sm:pt-6">
          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-2xl px-8 py-4 text-[0.9375rem] font-semibold tracking-wide text-white shadow-[0_0_25px_rgba(200,90,50,0.35)] transition-transform duration-300 hover:scale-[1.02] active:scale-95 sm:w-auto sm:min-w-[260px] sm:px-14 sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #C85A32 0%, #B04A26 100%)',
            }}
          >
            <span>Learn More</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>

      </ContentContainer>
    </main>
  );
};
