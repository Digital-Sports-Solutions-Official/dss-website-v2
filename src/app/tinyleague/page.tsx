// src/app/tinyleague/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { ContentContainer, Section } from '@/components/LayoutPrimitives';
import { Typography } from '@/components/Typography';

// Standardized section divider matching the rest of the site
const StandardDivider = () => (
  <ContentContainer size="wide">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />
  </ContentContainer>
);

export default function TinyLeaguePage() {
  const scrollToVision = () => {
    const visionSection = document.getElementById('vision');
    if (visionSection) {
      visionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#171717] pt-20 font-sans text-[#FAF9F6] selection:bg-[#FD955D]/30">
      
      {/* ==========================================================================
         ORANGE GLOW ACCENT AT THE TOP
         ========================================================================== */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[450px] w-full max-w-5xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF1900]/15 via-[#FD955D]/5 to-transparent blur-3xl"
      />

      {/* ==========================================================================
         PART 1: COMPACT HEADER BAND
         ========================================================================== */}
      <Section className="relative text-center">
        <ContentContainer size="wide" className="flex flex-col items-center">
          
          {/* COMBINATION MARK IMAGE */}
          <div className="mb-8 flex w-full max-w-xs items-center justify-center">
            <Image
              src="/assets/tinyLeague_CombinationMark_fullColorInWhite.png"
              alt="TinyLeague Logo"
              width={280}
              height={80}
              priority
              className="h-auto w-auto max-h-16 object-contain"
            />
          </div>

          {/* HEADLINE */}
          <Typography variant="display" className="mb-5">
            The Future of League Management
          </Typography>

          {/* VALUE PROPOSITION */}
          <p className="max-w-[720px] text-pretty font-sans text-[0.9375rem] font-medium leading-relaxed text-[#AEAEAD] sm:text-base md:text-[19px]">
            tinyLeague is the all-in-one platform built to replace the scattered tools, manual
            work, and hidden costs draining your budget. Designed to scale, it grows right
            alongside your organization. The result is a modern, professional experience that
            keeps players, coaches, and fans connected while boosting long-term satisfaction and
            retention.
          </p>

          {/* CLICKABLE ORANGE SCROLL ARROW */}
          <button
            onClick={scrollToVision}
            aria-label="Scroll to Vision section"
            className="mt-10 inline-flex items-center justify-center p-2 text-[#FF1900] transition-transform duration-300 hover:scale-110 hover:text-[#FD955D] focus:outline-none"
          >
            <i className="fas fa-chevron-down animate-bounce text-xl" aria-hidden />
          </button>

        </ContentContainer>
      </Section>

      <StandardDivider />

      {/* ==========================================================================
         PART 2: THE VISION SECTION
         ========================================================================== */}
      <Section id="vision" className="text-center">
        <ContentContainer size="wide" className="flex flex-col items-center">
          
          <Typography variant="caption" className="mb-6 block sm:mb-8">
            THE VISION
          </Typography>

          {/* COMFORTABLE READING COLUMN */}
          <div className="mb-10 flex max-w-[800px] flex-col gap-y-5 text-balance text-center font-sans text-[0.9375rem] font-medium leading-[1.75] text-[#AEAEAD] sm:mb-14 sm:text-base md:text-[18px]">
            <p>
              Many organizations rely on a messy mix of spreadsheets, chats, and disconnected apps.
              This leads to inaccurate data, wasted time, drained budgets, and frustrated coaches,
              players, and fans.
            </p>
            <p>
              tinyLeague solves this with an integrated suite of apps, websites, and smart devices
              that deliver live results and real-time stats directly into everyone&apos;s hands.
            </p>
            <p>
              This eliminates admin headaches and drives competitive, well-run events at any
              scale, keeping everyone engaged and returning season after season.
            </p>
          </div>

          {/* PLATFORM-PREVIEW VISION DIAGRAM */}
          <div className="relative w-full max-w-4xl overflow-hidden p-2 sm:p-4">
            <Image
              src="/assets/TinyLeagueVision.png"
              alt="TinyLeague Connected Ecosystem Vision Diagram"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl object-contain mix-blend-screen"
            />
          </div>

        </ContentContainer>
      </Section>

      <StandardDivider />

      {/* ==========================================================================
         PART 3: CLOSING CALL TO ACTION
         ========================================================================== */}
      <Section spacing="lg" className="relative text-center">
        <ContentContainer size="wide" className="flex flex-col items-center">
          
          <h2 className="mb-8 max-w-2xl text-balance font-sans text-[clamp(1.25rem,4vw,1.75rem)] font-bold tracking-tight text-[#FAF9F6]">
            Curious to learn more about what tinyLeague can do for you?
          </h2>

          <a
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded bg-[#FF1900] px-9 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FAF9F6] shadow-lg shadow-[#FF1900]/25 transition-all duration-300 hover:bg-[#FD955D] hover:shadow-[#FD955D]/30 sm:w-auto"
          >
            Let&apos;s Talk <span className="ml-2">→</span>
          </a>

        </ContentContainer>
      </Section>

    </main>
  );
}