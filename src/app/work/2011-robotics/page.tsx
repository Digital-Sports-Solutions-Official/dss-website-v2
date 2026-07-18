// src/app/work/2011-robotics/page.tsx
'use client';

import React from 'react';
import { ContentContainer } from '@/components/LayoutPrimitives';
import { SplitSection } from '@/components/SplitSection';

export default function RoboticsWorkPage() {
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
            {/* STRICT BOUNDS: Prevents the high-res PNG from blowing out the flex container */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/robotics-2011-logo.png" 
              alt="2011 Robotics Logo" 
              className="block filter brightness-0 invert"
              style={{ height: '28px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} 
            />
            <span className="text-[#FD955D] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest mt-1">
              2011 Robotics — World-Class Competitive Robotics
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-[#FAF9F6] font-extrabold tracking-tight font-sans text-balance max-w-4xl mb-6" 
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.1' }}
          >
            A World-Class Robotics Legacy
          </h1>

          {/* Category Tag */}
          <span className="inline-block border border-[#FD955D]/20 bg-[#FD955D]/10 text-[#FD955D] text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
            Websites & Data
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
          title="An Elite Team Hidden Offline"
          imageUrl="/assets/robotics-problem.jpeg" 
          imageAlt="Robotics arena match play with competing hardware platforms"
        >
          <p className="text-[#AEAEAD] font-medium leading-relaxed text-sm sm:text-base md:text-[17px]">
            On the field, Team 2011 is defined by a legacy of excellence. Off the field, however, the organization had no digital footprint to showcase its brand. Without a website, their rich history, competitive statistics, and the crucial sponsors supporting this world-class team remained entirely out of sight.
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
          title="A Modern, Data-Driven Web Portal"
          imageUrl="/assets/robotics-solution.jpeg" 
          imageAlt="Responsive design interface screenshot exhibiting modern administration CMS options"
        >
          <p className="text-[#AEAEAD] font-medium leading-relaxed text-sm sm:text-base md:text-[17px]">
            A modern, fully responsive website that serves as the organization’s digital portal, showcasing statistics, upcoming events, sponsors, and event photos. Alongside seamless data integration, the website features a full content management system (CMS), enabling administrators to update pages with minimal technical expertise.
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
          title="A Digital Presence That Matches the Legacy"
          imageUrl="/assets/robotics-outcome.jpeg" 
          imageAlt="Team members collaborating effectively with digital marketing portals"
        >
          <div className="flex flex-col gap-y-6 text-[#AEAEAD] font-medium leading-relaxed text-sm sm:text-base md:text-[17px]">
            <p>
              Established a professional digital portal that matches the team's off-field presence to its elite on-field reputation. Now, this organization can showcase their accomplishments to inspiring new members and sponsors.
            </p>
            <div>
              <a 
                href="https://www.2011robotics.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-[#FD955D] font-bold hover:text-white transition-colors group"
              >
                See now! 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>
          </div>
        </SplitSection>
      </div>

    </main>
  );
}