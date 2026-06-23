// src/app/page.tsx
'use client';

import React from 'react';
import { Typography } from '@/components/Typography';
import { Logo } from '@/components/Logo';
import { Card } from '@/components/Card';
import { Section, ContentContainer } from '@/components/LayoutPrimitives';

export default function HomePage() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight - 20,
      behavior: 'smooth',
    });
  };

  return (
    <main className="w-full bg-[#232323] min-h-screen overflow-x-hidden select-none font-sans">
      
      {/* ==========================================================================
         SECTION 1: IMMERSIVE HERO CANVAS (Verified at 320px, 768px, 1024px, 1440px)
         ========================================================================== */}
      <section 
        className="relative w-full flex flex-col justify-between items-center overflow-hidden bg-cover bg-center px-4 sm:px-8 pt-24 pb-8"
        style={{
          height: '100vh',
          height: '100dvh', // Prevents layout snapping on mobile browser window shifts
          backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.65), rgba(23, 23, 23, 0.70)), url('/assets/court-referee-bg.jpg')`,
        }}
      >
        {/* STANDALONE HERO BRAND SIGNIFIER */}
        <div className="absolute top-6 left-6 sm:left-8 z-20">
          <a 
            href="/" 
            className="focus:outline-none rounded p-1 block min-w-[44px] min-h-[44px] flex items-center" 
            aria-label="DSS Home Anchor Link"
          >
            <Logo variant="white" width={110} height={28} />
          </a>
        </div>

        {/* Dynamic layout engine spacer block */}
        <div className="h-4" />

        {/* CENTRAL COPY LAYER CONSOLE */}
        <ContentContainer className="text-center flex flex-col items-center justify-center w-full z-10 my-auto">
          
          {/* BRAND EYEBROW */}
          <Typography 
            variant="caption" 
            className="text-[#FD955D] font-mono tracking-[0.25em] font-bold block uppercase mb-4 text-[11px] sm:text-xs"
          >
            Digital Sports Solutions
          </Typography>

          {/* FLUID WHITE HEADLINE */}
          <h1 
            className="text-white font-extrabold tracking-tight font-sans mx-auto text-balance"
            style={{ 
              fontSize: 'clamp(32px, 5vw, 56px)', 
              lineHeight: '1.15',
              color: '#FAF9F6',
              maxWidth: '900px',
              marginBottom: '24px'
            }}
          >
            Custom Digital Tools Built<br className="hidden sm:inline" /> to Make Your Organization Stand Out.
          </h1>

          {/* CONSTRAINED DESCRIPTION COPY BLOCKS */}
          <p 
            className="text-[#D4D4D4] font-sans font-medium leading-relaxed mx-auto text-balance text-xs sm:text-sm md:text-base" 
            style={{ color: '#D4D4D4', maxWidth: '640px', marginBottom: '32px' }}
          >
            You bring the challenge. We build the solution. Digital Sports Solutions works directly with your organization to understand what's holding you back to deliver custom digital tools to help you run more efficiently, present more professionally, and grow with confidence.
          </p>

          {/* SECONDARY SUBTLE LINK */}
          <div className="flex items-center justify-center">
            <a 
              href="/case-studies/tinyleague"
              aria-label="Discover tinyLeague platform architecture layout metrics"
              className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-[#AEAEAD] hover:text-[#FD955D] transition-colors focus:outline-none group underline decoration-[#3C3C3C] hover:decoration-[#FD955D] underline-offset-4"
              style={{ 
                fontSize: '11px',
                minHeight: '44px',
                padding: '0 12px'
              }}
            >
              Discover tinyLeague 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </ContentContainer>

        {/* ANNOTATED SCROLL INDICATOR LINK (FIXED OVERLAP STRIP) */}
        <div className="w-full flex flex-col items-center justify-center z-10">
          <button 
            onClick={handleScrollDown}
            className="focus:outline-none p-1 group text-[#AEAEAD] hover:text-[#FF1900] transition-colors flex flex-col items-center min-h-[44px] justify-center"
            style={{ gap: '12px' }} // Immutably forces vertical separation grid bounds
            aria-label="Scroll downward directly to capabilities segments rows"
          >
            <span 
              className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold opacity-60 group-hover:opacity-100 transition-opacity" 
              style={{ color: '#AEAEAD', fontSize: '9px', margin: 0, padding: 0, lineHeight: '1' }}
            >
              Scroll
            </span>
            <svg 
              className="w-4 h-4 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              style={{ animationDuration: '2s', color: '#FD955D', margin: 0, display: 'block' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* ==========================================================================
         SECTION 2: SERVICES PREVIEW FRAMEWORK (Fluid Breakpoint Execution)
         ========================================================================== */}
      <section 
        id="services-preview" 
        className="bg-[#232323] border-b border-[#1a1a1a] w-full px-6 md:px-12 xl:px-16"
        style={{ 
          paddingTop: 'clamp(80px, 10vw, 140px)', 
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center' 
        }}
      >
        <ContentContainer>
          
          {/* HEADER LAYER BLOCK */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', marginBottom: 'clamp(48px, 6vw, 80px)' }}>
            <Typography 
              variant="caption" 
              className="text-[#FF1900] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px]"
              style={{ color: '#FF1900', marginBottom: '12px' }}
            >
              What We Build
            </Typography>
            
            <h2 
              style={{ 
                fontFamily: 'var(--font-montserrat), system-ui, -apple-system, sans-serif',
                fontSize: 'clamp(32px, 4.5vw, 46px)', 
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: '#FAF9F6', 
                margin: 0,
                lineHeight: '1.15'
              }}
            >
              Our Services
            </h2>
          </div>

          {/* GRID BREAKPOINT CONTROL LAYER MATRIX */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10"
            style={{ 
              width: '100%',
              alignItems: 'stretch'
            }}
          >
            <Card 
              variant="services-preview"
              icon="fa-microchip"
              title="Custom Smart Devices"
              description="We build simple and effective smart devices tailored to your organization, solving challenges no off-the-shelf solution can."
              ctaText="Learn More"
              href="/services#smart-devices"
            />

            <Card 
              variant="services-preview"
              icon="fa-laptop-code"
              title="Websites & Mobile Apps"
              description="Your organization deserves a modern website and mobile apps built around your goals, designed to impress and grow with you."
              ctaText="Learn More"
              href="/services#web-mobile"
            />

            <Card 
              variant="services-preview"
              icon="fa-chart-pie" 
              title="Data & Insights"
              description="Your data should work for you. We build simple online tools that collect, organize, and transform your organization's data into powerful insights you can trust and count on."
              ctaText="Learn More"
              href="/services#data"
            />
          </div>
        </ContentContainer>
      </section>

    </main>
  );
}