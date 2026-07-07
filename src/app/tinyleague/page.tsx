// src/app/tinyleague/page.tsx
'use client';

import React from 'react';

export default function TinyLeaguePage() {
  return (
    <main className="w-full bg-[#232323] min-h-screen text-[#FAF9F6] font-sans selection:bg-[#FD955D]/30 overflow-x-hidden pt-20">
      
      {/* ==========================================================================
         PART 1: COMPACT HEADER BAND (Natural height with center-constrained stacks)
         ========================================================================== */}
      <section className="w-full px-6 md:px-12 xl:px-16 pt-20 pb-16 relative text-center">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
          
          {/* WORDMARK / COMBINATION MARK PLACEHOLDER BOUNDS */}
          <div className="mb-8 border border-dashed border-[#3A3A3A] bg-[#1b1b1b]/40 rounded-xl p-6 max-w-sm w-full flex flex-col items-center">
            <i className="fas fa-image text-[#AEAEAD] text-lg mb-2" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#FD955D] font-bold mb-1">
              IMAGE PLACEHOLDER
            </span>
            <span className="text-xs text-[#FAF9F6] font-bold">
              TinyLeague Combination Mark
            </span>
            <span className="text-[10px] text-[#AEAEAD] mt-1 text-center font-medium">
              White/peach variant for dark backgrounds
            </span>
          </div>

          {/* HEADLINE */}
          <h1 
            style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)' }}
            className="text-[#FAF9F6] font-extrabold tracking-tight leading-tight mb-6"
          >
            The Future of League Management
          </h1>

          {/* VALUE PROPOSITION CONTAINER */}
          <p 
            style={{ maxWidth: '720px' }}
            className="text-[#AEAEAD] font-medium text-base sm:text-lg md:text-[19px] leading-relaxed text-balance"
          >
            TinyLeague is the all-in-one platform that manages your entire league, replacing manual work and scattered tools that drain your time and budget. It streamlines operations, promotes professionalism, and fosters engagement between players, coaches, and fans transforming your league into a community.
          </p>

          {/* SUBTLE SCROLL CUE */}
          <div className="mt-12 text-[#AEAEAD] hover:text-[#FD955D] transition-colors duration-300">
            <i className="fas fa-chevron-down text-base animate-bounce" />
          </div>

        </div>
      </section>

      {/* THIN BRAND-RED DIVIDER LINE 1 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
        <div className="w-full h-[1px] bg-[#FF1900]/20" />
      </div>

      {/* ==========================================================================
         PART 2: THE VISION SECTION (Single comfortable reading column layout)
         ========================================================================== */}
      <section className="w-full px-6 md:px-12 xl:px-16 py-20 text-center">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
          
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.3em] text-[#FD955D] block uppercase mb-8">
            THE VISION
          </span>

          {/* COMFORTABLE READING COLUMN */}
          <div 
            style={{ maxWidth: '800px', lineHeight: '1.75' }}
            className="text-sm sm:text-base md:text-[18px] text-[#AEAEAD] font-medium flex flex-col gap-y-6 text-center text-balance mb-16"
          >
            <p>
              Many leagues operate on a mess of spreadsheets, group chats, and apps that don't work together. This results in inaccurate data, wasted time, a league that looks unprofessional, and a worse experience for coaches, players, and fans.
            </p>
            <p>
              That's where TinyLeague steps in: an all-in-one platform where live results, stats, and other critical information come together, easily accessible to staff, coaches, players, and fans whether they're at the event or catching up online. 
            </p>
            <p>
              We make it happen with a connected suite of apps, websites, and smart devices that work in unison to streamline data collection and display. That's the future we're building at Digital Sports Solutions, and it's already taking shape.
            </p>
          </div>

          {/* OPTIONAL PLATFORM-PREVIEW VISUAL PLACEHOLDER */}
          <div className="w-full max-w-4xl border border-dashed border-[#3A3A3A] bg-[#1b1b1b]/40 rounded-2xl p-12 flex flex-col items-center aspect-[16/9] justify-center">
            <i className="fas fa-layer-group text-[#AEAEAD] text-2xl mb-3" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#FD955D] font-bold mb-2">
              IMAGE PLACEHOLDER
            </span>
            <span className="text-sm sm:text-base text-[#FAF9F6] font-bold">
              Platform Preview Mockup
            </span>
            <span className="text-xs text-[#AEAEAD] mt-2 max-w-md text-center font-medium leading-relaxed">
              Composite mockup: TinyLeague app + live site + scoring device working together. Action photo from an event with the live scoreboard visible.
            </span>
          </div>

        </div>
      </section>

      {/* THIN BRAND-RED DIVIDER LINE 2 */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 xl:px-16">
        <div className="w-full h-[1px] bg-[#FF1900]/20" />
      </div>

      {/* ==========================================================================
         PART 3: CLOSING CALL TO ACTION SECTION
         ========================================================================== */}
      <section className="w-full bg-[#232323] py-24 px-6 text-center relative">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
          
          <h2 
            style={{ fontSize: 'clamp(20px, 3.5vw, 28px)' }}
            className="text-[#FAF9F6] font-bold font-sans tracking-tight mb-8 text-balance max-w-2xl"
          >
            Curious to learn about what TinyLeague can do for your league?
          </h2>

          <a
            href="/contact"
            className="inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest text-[#FAF9F6] bg-[#FF1900] hover:bg-[#FAF9F6] hover:text-[#171717] transition-all duration-300 rounded shadow-lg shadow-[#FF1900]/10"
            style={{ 
              minHeight: '48px',
              paddingLeft: '36px',
              paddingRight: '36px',
              letterSpacing: '0.2em'
            }}
          >
            Let's Talk <span className="ml-2">→</span>
          </a>

        </div>
      </section>

    </main>
  );
}