// src/app/work/ncda-nda/page.tsx
'use client';

import React from 'react';
import { ContentContainer } from '@/components/LayoutPrimitives';
import { SplitSection } from '@/components/SplitSection';

export default function NcdaNdaWorkPage() {
  return (
    <main className="w-full bg-[#232323] min-h-screen overflow-x-hidden select-none font-sans pt-[160px] pb-12">

      {/* ==========================================================================
         HERO HEADER SECTION
         ========================================================================== */}
      <ContentContainer>
        <div className="mb-24 flex flex-col items-start">
          {/* Red Accent Bar */}
          <div className="w-10 h-[2px] bg-[#FF1900] mb-8" />
          
          {/* Logo and Client Eyebrow */}
          <div className="flex flex-row items-center gap-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/ncda-nda-logo.png" 
              alt="NCDA & NDA Logo" 
              className="block"
              style={{ height: '28px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} 
            />
            <span className="text-[#FD955D] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest mt-1">
              NCDA & NDA — Collegiate & Semi-Pro Dodgeball
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-[#FAF9F6] font-extrabold tracking-tight font-sans text-balance max-w-4xl mb-6" 
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.1' }}
          >
            Bringing Accurate Timing to Competitive Dodgeball
          </h1>

          {/* Category Tag */}
          <span className="inline-block border border-[#FD955D]/20 bg-[#FD955D]/10 text-[#FD955D] text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
            Custom Smart Devices
          </span>
        </div>
      </ContentContainer>

      {/* EDGE-FADING DIVIDER */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />
      </div>

      {/* ==========================================================================
         SECTION 1: THE PROBLEM
         ========================================================================== */}
      <div className="w-full">
        <SplitSection
          imageSide="right"
          eyebrow="THE PROBLEM"
          title="Manual Counting Was Costing the Game"
          imageUrl="/assets/ncda-problem.jpg" 
          imageAlt="Manual counting issues in competitive dodgeball"
        >
          <p className="text-[#AEAEAD] font-medium leading-relaxed text-sm sm:text-base md:text-[17px]">
            In competitive dodgeball, teams have 15 seconds to throw or face a rule violation. Relying on manual countdowns historically caused inconsistent timing and unfair advantages, frustrating players and compromising the league's image.
          </p>
        </SplitSection>
      </div>

      {/* EDGE-FADING DIVIDER */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />
      </div>

      {/* ==========================================================================
         SECTION 2: THE SOLUTION
         ========================================================================== */}
      <div className="w-full">
        <SplitSection
          imageSide="left"
          eyebrow="THE SOLUTION"
          title="A Wireless Shot Clock, Controlled From a Phone"
          imageUrl="/assets/ncda-solution.jpg" 
          imageAlt="DSS wireless dodgeball shot clock hardware"
        >
          <p className="text-[#AEAEAD] font-medium leading-relaxed text-sm sm:text-base md:text-[17px]">
            Engineered a wireless shot-clock system featuring a portable display controlled via a smartphone app. By enabling referees to reset the countdown from their phones, the system minimizes human error, reduces rule disputes, and ensures fair gameplay.
          </p>
        </SplitSection>
      </div>

      {/* EDGE-FADING DIVIDER */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-16">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />
      </div>

      {/* ==========================================================================
         SECTION 3: THE OUTCOME
         ========================================================================== */}
      <div className="w-full">
        <SplitSection
          imageSide="right"
          eyebrow="THE OUTCOME"
          title="The Official Timing Technology of the Sport"
          imageUrl="/assets/ncda-outcome.jpg" 
          imageAlt="Dodgeball players using the official DSS timing technology on the court"
        >
          <div className="flex flex-col gap-y-6 text-[#AEAEAD] font-medium leading-relaxed text-sm sm:text-base md:text-[17px]">
            <p>
              Official timing partner for the <span className="text-[#FD955D] font-bold">NCDA</span> and <span className="text-[#FD955D] font-bold">NDA</span>.
            </p>
            <p>
              Tried and tested at regional and national championship events across numerous seasons.
            </p>
            <p className="italic text-[#FAF9F6]">
              “Digital shot clocking is the future of the sport.”
              <span className="block not-italic text-[#AEAEAD] mt-1 font-mono text-[11px] uppercase tracking-widest">— Former NCDA President</span>
            </p>
          </div>
        </SplitSection>
      </div>

    </main>
  );
}