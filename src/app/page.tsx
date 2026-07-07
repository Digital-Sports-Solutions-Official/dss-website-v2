// src/app/page.tsx
'use client';

import React from 'react';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { ContentContainer } from '@/components/LayoutPrimitives';
import { SplitSection } from '@/components/SplitSection';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Cleanly updates browser location tracking without forcing hard refreshes
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <main className="w-full bg-[#232323] min-h-screen overflow-x-hidden select-none font-sans">
      
      {/* ==========================================================================
         SECTION 1: HERO CANVAS
         ========================================================================== */}
      <section 
        id="top"
        className="relative w-full flex flex-col justify-between items-center overflow-hidden bg-cover bg-center px-4 sm:px-8 pt-28 pb-8"
        style={{
          minHeight: '100vh',
          backgroundImage: `linear-gradient(to bottom, rgba(23, 23, 23, 0.65), rgba(23, 23, 23, 0.70)), url('/assets/court-referee-bg.jpg')`,
        }}
      >
        <div className="h-8 md:h-12" />
        
        <ContentContainer className="text-center flex flex-col items-center justify-center w-full z-10 my-auto">
          <Typography variant="caption" className="text-[#FD955D] font-mono tracking-[0.25em] font-bold block uppercase mb-4 text-[10px] sm:text-xs">
            Digital Sports Solutions
          </Typography>
          <h1 className="text-white font-extrabold tracking-tight font-sans mx-auto text-balance" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: '1.2', color: '#FAF9F6', maxWidth: '900px', marginBottom: '20px' }}>
            Custom Digital Tools Built<br className="hidden sm:inline" /> to Make Your Organization Stand Out.
          </h1>
          <p className="text-[#D4D4D4] font-sans font-medium leading-relaxed mx-auto text-balance text-xs sm:text-sm md:text-base mb-8" style={{ maxWidth: '640px' }}>
            You bring the challenge. We build the solution. Digital Sports Solutions works directly with your organization to understand what's holding you back to deliver custom digital tools.
          </p>
          <button 
            onClick={() => scrollToSection('founding-story')} 
            className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-[#AEAEAD] hover:text-[#FD955D] transition-colors focus:outline-none group underline decoration-[#3C3C3C] hover:decoration-[#FD955D] underline-offset-4 h-11 px-3"
          >
            Discover Our Origin <span className="ml-2 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
        </ContentContainer>

        <div className="w-full flex flex-col items-center justify-center z-10 mt-8 md:mt-0">
          <button 
            onClick={() => scrollToSection('services')} 
            className="focus:outline-none p-1 group text-[#AEAEAD] hover:text-[#FF1900] transition-colors flex flex-col items-center min-h-[44px] justify-center gap-y-2"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] font-bold opacity-60 group-hover:opacity-100 transition-opacity">Scroll</span>
            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </section>

      {/* ==========================================================================
         SECTION 2: SERVICES PREVIEW GRID
         ========================================================================== */}
      <section id="services" className="bg-[#232323] w-full px-4 sm:px-8 md:px-12 xl:px-16 py-24 flex items-center relative">
        <ContentContainer>
          <div className="flex flex-col items-start text-left mb-12">
            <Typography variant="caption" className="text-[#FF1900] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3">
              What We Build
            </Typography>
            <h2 style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif', fontSize: 'clamp(28px, 4.5vw, 46px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#FAF9F6', margin: 0 }}>
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 w-full items-stretch">
            <Card variant="services-preview" icon="fa-microchip" title="Custom Smart Devices" description="We build simple and effective smart devices tailored to your organization, solving challenges no off-the-shelf solution can." ctaText="Learn More" href="/services/smart-devices" />
            <Card variant="services-preview" icon="fa-laptop-code" title="Websites & Mobile Apps" description="Your organization deserves a modern website and mobile apps built around your goals, designed to impress and grow with you." ctaText="Learn More" href="/services/web-mobile" />
            <Card variant="services-preview" icon="fa-chart-pie" title="Data & Insights" description="Your data should work for you. We build simple online tools that collect, organize, and transform your organization's data into powerful insights." ctaText="Learn More" href="/services/data" />
          </div>
        </ContentContainer>
      </section>

      {/* ==========================================================================
         SECTION 3: FOUNDING STORY (OUR ORIGIN)
         ========================================================================== */}
      <div id="founding-story" className="w-full">
        <SplitSection 
          imageSide="right" 
          eyebrow="OUR ORIGIN" 
          title="Turning Problems Into Possibilities" 
          imageUrl="/assets/court-action.jpg" 
          imageAlt="Digital Sports Solutions on-court hardware tracking deployment"
        >
          <p>
            Our company began when we noticed a problem that was sabotaging an organization, holding back its credibility and the experience it was capable of offering. Off the shelf solutions could not meet their specific needs, so we closely partnered with them to build them a solution.
          </p>
          <p>
            The solution didn't just solve the problem. It delivered when it mattered most, performing reliably on the biggest stages, when reputations and results were on the line. From that single partnership, Digital Sports Solutions was born.
          </p>
          <p>
            That's still who we are. We listen for what's holding an organization back, then turn it into a custom digital solution that helps them operate more efficiently, be more professional, and grow with confidence. What started with one partner is now our promise to every organization we work with.
          </p>
        </SplitSection>
      </div>

      {/* ==========================================================================
         SECTION 4: THE TEAM
         ========================================================================== */}
      <div id="team" className="w-full mt-[-1px]">
        <SplitSection 
          imageSide="left" 
          eyebrow="OUR TEAM" 
          title="A Team You Can Trust" 
          imageUrl="/assets/team-group.jpg" 
          imageAlt="Digital Sports Solutions foundational system engineering core team photo"
        >
          <p>
            Behind every solution we build is a team that has been solving challenges together for years. We grew up building side by side, sharing the same curiosity for engineering and the same drive to get it right. That history means we know how to work as one and deliver when it counts.
          </p>
          <div>
            <p className="mb-4">
              For you, that means a team that listens first, stays accountable, and treats your success as the measure of our own. A partner invested in your goals from the first conversation to the final result.
            </p>
            <div className="pt-2">
              <button 
                onClick={() => scrollToSection('contact-footer')} 
                className="inline-flex items-center font-sans font-bold text-[#FF1900] hover:text-[#FD955D] transition-colors focus:outline-none focus:underline group text-left h-11"
                style={{ fontSize: 'clamp(16px, 1.8vw, 18px)', lineHeight: '1.5' }}
              >
                Let's turn your challenge into your next advantage! 
                <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </SplitSection>
      </div>

    </main>
  );
}