// src/app/tinyleague/page.tsx
'use client';

import React from 'react';
import { ContentContainer, Section } from '@/components/LayoutPrimitives';
import { Typography } from '@/components/Typography';

const brandRule = 'h-px w-full bg-[#FF1900]/20';

export default function TinyLeaguePage() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#232323] pt-20 font-sans text-[#FAF9F6] selection:bg-[#FD955D]/30">
      
      {/* ==========================================================================
         PART 1: COMPACT HEADER BAND
         ========================================================================== */}
      <Section className="relative text-center">
        <ContentContainer size="wide" className="flex flex-col items-center">
          
          {/* WORDMARK / COMBINATION MARK PLACEHOLDER BOUNDS */}
          <div className="mb-8 flex w-full max-w-sm flex-col items-center rounded-xl border border-dashed border-[#3A3A3A] bg-[#1b1b1b]/40 p-6">
            <i className="fas fa-image mb-2 text-lg text-[#AEAEAD]" aria-hidden />
            <span className="mb-1 font-mono text-[9px] font-bold uppercase tracking-widest text-[#FD955D]">
              IMAGE PLACEHOLDER
            </span>
            <span className="text-xs font-bold text-[#FAF9F6]">
              TinyLeague Combination Mark
            </span>
            <span className="mt-1 text-center text-[10px] font-medium text-[#AEAEAD]">
              White/peach variant for dark backgrounds
            </span>
          </div>

          {/* HEADLINE */}
          <Typography variant="display" className="mb-5">
            The Future of League Management
          </Typography>

          {/* VALUE PROPOSITION */}
          <p className="max-w-[720px] text-pretty font-sans text-[0.9375rem] font-medium leading-relaxed text-[#AEAEAD] sm:text-base md:text-[19px]">
            TinyLeague is the all-in-one platform that manages your entire league, replacing manual
            work and scattered tools that drain your time and budget. It streamlines operations,
            promotes professionalism, and fosters engagement between players, coaches, and fans
            transforming your league into a community.
          </p>

          {/* SUBTLE SCROLL CUE */}
          <div className="mt-10 text-[#AEAEAD] transition-colors duration-300 hover:text-[#FD955D]">
            <i className="fas fa-chevron-down animate-bounce text-base" aria-hidden />
          </div>

        </ContentContainer>
      </Section>

      <ContentContainer size="wide">
        <div className={brandRule} />
      </ContentContainer>

      {/* ==========================================================================
         PART 2: THE VISION SECTION
         ========================================================================== */}
      <Section className="text-center">
        <ContentContainer size="wide" className="flex flex-col items-center">
          
          <Typography variant="caption" className="mb-6 block sm:mb-8">
            The Vision
          </Typography>

          {/* COMFORTABLE READING COLUMN */}
          <div className="mb-10 flex max-w-[800px] flex-col gap-y-5 text-balance text-center font-sans text-[0.9375rem] font-medium leading-[1.75] text-[#AEAEAD] sm:mb-14 sm:text-base md:text-[18px]">
            <p>
              Many leagues operate on a mess of spreadsheets, group chats, and apps that don&apos;t
              work together. This results in inaccurate data, wasted time, a league that looks
              unprofessional, and a worse experience for coaches, players, and fans.
            </p>
            <p>
              That&apos;s where TinyLeague steps in: an all-in-one platform where live results,
              stats, and other critical information come together, easily accessible to staff,
              coaches, players, and fans whether they&apos;re at the event or catching up online.
            </p>
            <p>
              We make it happen with a connected suite of apps, websites, and smart devices that
              work in unison to streamline data collection and display. That&apos;s the future
              we&apos;re building at Digital Sports Solutions, and it&apos;s already taking shape.
            </p>
          </div>

          {/* PLATFORM-PREVIEW VISUAL PLACEHOLDER */}
          <div className="flex aspect-[4/3] w-full max-w-4xl flex-col items-center justify-center rounded-2xl border border-dashed border-[#3A3A3A] bg-[#1b1b1b]/40 p-6 sm:aspect-[16/9] sm:p-12">
            <i className="fas fa-layer-group mb-3 text-2xl text-[#AEAEAD]" aria-hidden />
            <span className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#FD955D]">
              IMAGE PLACEHOLDER
            </span>
            <span className="text-sm font-bold text-[#FAF9F6] sm:text-base">
              Platform Preview Mockup
            </span>
            <span className="mt-2 max-w-md text-center text-xs font-medium leading-relaxed text-[#AEAEAD]">
              Composite mockup: TinyLeague app + live site + scoring device working together.
              Action photo from an event with the live scoreboard visible.
            </span>
          </div>

        </ContentContainer>
      </Section>

      <ContentContainer size="wide">
        <div className={brandRule} />
      </ContentContainer>

      {/* ==========================================================================
         PART 3: CLOSING CALL TO ACTION
         ========================================================================== */}
      <Section spacing="lg" className="relative bg-[#232323] text-center">
        <ContentContainer size="wide" className="flex flex-col items-center">
          
          <h2 className="mb-8 max-w-2xl text-balance font-sans text-[clamp(1.25rem,4vw,1.75rem)] font-bold tracking-tight text-[#FAF9F6]">
            Curious to learn about what TinyLeague can do for your league?
          </h2>

          <a
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center rounded bg-[#FF1900] px-9 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FAF9F6] shadow-lg shadow-[#FF1900]/10 transition-all duration-300 hover:bg-[#FAF9F6] hover:text-[#171717] sm:w-auto"
          >
            Let&apos;s Talk <span className="ml-2">→</span>
          </a>

        </ContentContainer>
      </Section>

    </main>
  );
}
