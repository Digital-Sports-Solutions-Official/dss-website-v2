'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { ContentContainer } from '@/components/LayoutPrimitives';

const SectionDivider = () => (
  <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-8">
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent" />
  </div>
);

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <main className="w-full bg-[#181818] min-h-screen overflow-x-hidden select-none font-sans">
      
      {/* HERO CANVAS */}
      <section id="top" className="relative w-full flex flex-col justify-between items-center overflow-hidden bg-cover bg-center px-4 sm:px-8 pt-28 pb-8" style={{ minHeight: '100vh', backgroundImage: `linear-gradient(to bottom, rgba(24, 24, 24, 0.65), rgba(24, 24, 24, 0.70)), url('/assets/court-referee-bg.jpg')` }}>
        <div className="h-8 md:h-12" />
        <ContentContainer className="text-center flex flex-col items-center justify-center w-full z-10 my-auto">
          <Typography variant="caption" className="text-[#FD955D] font-mono tracking-[0.25em] font-bold block uppercase mb-4 text-[10px] sm:text-xs">Digital Sports Solutions</Typography>
          <h1 className="text-white font-extrabold tracking-tight font-sans mx-auto text-balance" style={{ fontSize: 'clamp(28px, 5vw, 56px)', lineHeight: '1.2', color: '#FAF9F6', maxWidth: '900px', marginBottom: '20px' }}>Custom Digital Tools Built<br className="hidden sm:inline" /> to Make Your Organization Stand Out.</h1>
          <p className="text-[#D4D4D4] font-sans font-medium leading-relaxed mx-auto text-balance text-xs sm:text-sm md:text-base mb-8" style={{ maxWidth: '640px' }}>You bring the challenge. We build the solution. Digital Sports Solutions works directly with your organization to understand what's holding you back to deliver custom digital tools.</p>
          
          <a 
            href="/tinyleague" 
            className="inline-flex items-center text-xs font-mono font-bold tracking-widest text-[#AEAEAD] hover:text-[#FD955D] transition-colors focus:outline-none group underline decoration-[#3C3C3C] hover:decoration-[#FD955D] underline-offset-4 h-11 px-3"
          >
            Discover TinyLeague <span className="ml-2 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </ContentContainer>
        
        {/* SCROLL INDICATOR */}
        <div className="w-full flex flex-col items-center justify-center z-10 mt-8 md:mt-0">
          <button 
            onClick={() => scrollToSection('services')} 
            className="focus:outline-none p-1 group text-[#AEAEAD] hover:text-[#FD955D] transition-colors flex flex-col items-center min-h-[44px] justify-center gap-y-1.5"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
              scroll
            </span>
            <svg 
              className="w-4 h-4 stroke-current" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="3"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full pt-32 pb-20">
        <ContentContainer>
          <div className="flex flex-col items-start text-left mb-16 md:mb-20">
            <Typography variant="caption" className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3">
              What We Build
            </Typography>
            <h2 
              style={{ 
                fontSize: 'clamp(28px, 4.5vw, 46px)', 
                fontWeight: '800', 
                letterSpacing: '-0.02em', 
                color: '#FAF9F6', 
                margin: 0 
              }}
              className="font-sans"
            >
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full items-stretch mb-20">
            <Card 
              variant="services-preview" 
              icon="fa-microchip" 
              title="Custom Smart Devices" 
              description="We build simple and effective smart devices tailored to your organization, solving challenges no off-the-shelf solution can." 
              ctaText="Learn More" 
              href="/services/smart-devices" 
            />
            <Card 
              variant="services-preview" 
              icon="fa-globe" 
              title="Websites & Mobile Apps" 
              description="Your organization deserves a modern website and mobile apps built around your goals, designed to impress and grow with you." 
              ctaText="Learn More" 
              href="/services/web-mobile" 
            />
            <Card 
              variant="services-preview" 
              icon="fa-chart-simple" 
              title="Data & Insights" 
              description="Your data should work for you. We build simple online tools that collect, organize, and transform your organization's data into powerful insights you can trust and count on." 
              ctaText="Learn More" 
              href="/services/data" 
            />
          </div>
        </ContentContainer>
      </section>
      <SectionDivider />

      {/* OUR WORK */}
      <section id="work" className="w-full pt-20 pb-20">
        <ContentContainer>
          <div className="flex flex-col items-start text-left mb-16 md:mb-20">
            <Typography variant="caption" className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3">
              Our Work
            </Typography>
            <h2 
              style={{ 
                fontSize: 'clamp(28px, 4.5vw, 46px)', 
                fontWeight: '800', 
                letterSpacing: '-0.02em', 
                color: '#FAF9F6', 
                margin: 0 
              }}
              className="font-sans"
            >
              Real problems, real organizations, real solutions.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10 w-full items-stretch mb-20">
            <div className="flex-1 min-w-[280px] w-full">
              <Card 
                variant="work" 
                logoUrl="/assets/ncda-nda-logo.png" 
                logoAlt="NCDA and NDA Logos" 
                categoryTag="Custom Smart Devices" 
                description="Modernized competitive dodgeball by replacing manual counting with a custom built wireless throw clock system that is now the official timing technology of both the NCDA and NDA." 
                ctaText="Learn More" 
                href="/work/ncda-nda" 
              />
            </div>
            <div className="flex-1 min-w-[280px] w-full">
              <Card 
                variant="work" 
                logoUrl="/assets/robotics-2011-logo.png" 
                logoAlt="2011 Robotics Logo" 
                categoryTag="Websites & Data" 
                description="Developed a data-driven website for the world-class 2011 Robotics organization to highlight their teams, stats, sponsors, and club history." 
                ctaText="Learn More" 
                href="/work/2011-robotics" 
              />
            </div>
          </div>
        </ContentContainer>
      </section>
      <SectionDivider />

      {/* TINYLEAGUE (OUR VISION) */}
      <section id="tinyleague-teaser" className="w-full pt-20 pb-20">
        <ContentContainer>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src="/assets/tinyLeague_CombinationMark_fullcolorInWHITE.png" alt="tinyLeague" className="max-w-[340px] sm:max-w-[420px] h-auto object-contain" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <Typography variant="caption" className="text-[#FF1900] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3">OUR VISION</Typography>
              <h2 
                style={{ 
                  fontSize: 'clamp(28px, 4.5vw, 46px)', 
                  fontWeight: '800', 
                  letterSpacing: '-0.02em', 
                  color: '#FAF9F6', 
                  margin: '0 0 16px 0' 
                }}
                className="font-sans"
              >
                Meet tinyLeague
              </h2>
              <p className="text-[#D4D4D4] font-sans font-normal leading-relaxed text-sm">
                The all-in-one management platform bringing pro-level operations, advanced data analytics, and a fan experience like no other to any league.{' '}
                <a href="/tinyleague" className="inline-flex items-center font-sans font-bold text-[#FD955D] hover:text-[#ffab7c] transition-colors ml-1 whitespace-nowrap">
                  Discover tinyLeague →
                </a>
              </p>
            </div>
          </div>
        </ContentContainer>
      </section>
      <SectionDivider />

      {/* ORIGIN */}
      <section id="founding-story" className="w-full pt-20 pb-20">
        <ContentContainer>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <Typography variant="caption" className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3">
                OUR ORIGIN
              </Typography>
              <h2 
                style={{ 
                  fontSize: 'clamp(28px, 4.5vw, 46px)', 
                  fontWeight: '800', 
                  letterSpacing: '-0.02em', 
                  color: '#FAF9F6', 
                  margin: '0 0 24px 0' 
                }}
                className="font-sans"
              >
                Turning Problems Into Possibilities
              </h2>
              <div className="flex flex-col gap-y-5 text-[#D4D4D4] font-sans font-normal leading-relaxed text-sm max-w-[540px]">
                <p>
                  Our company began when we noticed a problem that was sabotaging an organization, holding back its credibility and the experience it was capable of offering. Off the shelf solutions could not meet their specific needs, so we closely partnered with them to build them a solution.
                </p>
                <p>
                  The solution didn't just solve the problem. It delivered when it mattered most, performing reliably on the biggest stages, when reputations and results were on the line. From that single partnership, Digital Sports Solutions was born.
                </p>
                <p>
                  That's still who we are. We listen for what's holding an organization back, then turn it into a custom digital solution that helps them operate more efficiently, be more professional, and grow with confidence. What started with one partner is now our promise to every organization we work with.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="/assets/court-action.jpg" 
                alt="DSS Deployment" 
                className="w-full max-w-[540px] h-auto rounded-2xl shadow-xl object-cover aspect-[4/3]" 
              />
            </div>
          </div>
        </ContentContainer>
      </section>
      <SectionDivider />

      {/* TEAM */}
      <section id="team" className="w-full pt-20 pb-20">
        <ContentContainer>
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="/assets/team-group.jpg" 
                alt="Core Team" 
                className="w-full max-w-[540px] h-auto rounded-2xl shadow-xl object-cover aspect-[4/3]" 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <Typography variant="caption" className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-3">
                OUR TEAM
              </Typography>
              <h2 
                style={{ 
                  fontSize: 'clamp(28px, 4.5vw, 46px)', 
                  fontWeight: '800', 
                  letterSpacing: '-0.02em', 
                  color: '#FAF9F6', 
                  margin: '0 0 24px 0' 
                }}
                className="font-sans"
              >
                A Team You Can Count On
              </h2>
              <div className="flex flex-col gap-y-5 text-[#D4D4D4] font-sans font-normal leading-relaxed text-sm max-w-[540px]">
                <p>
                  Behind every solution we build is a team that has been solving challenges together for years. We grew up building things side by side, sharing the same curiosity for engineering and the same drive to get it right. That history means we know how to work as one and how to deliver when it counts.
                </p>
                <p>
                  For you, that means a team that listens first, stays accountable, and treats the success of your organization as the measure of our own. It also means a partner who stays with you from the first conversation through the final result, invested every step of the way.{' '}
                  <Link 
                    href="/contact" 
                    className="inline items-center font-sans font-bold text-[#FD955D] hover:text-[#ffab7c] transition-colors text-left focus:outline-none"
                  >
                    Let's turn your challenge into your next advantage! →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </ContentContainer>
      </section>
      <SectionDivider />

      {/* CONTACT CTA SECTION */}
      <section 
        id="contact" 
        className="w-full bg-[#181818] text-white py-24 md:py-32 px-6 relative overflow-hidden select-none"
      >
        <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center text-center relative z-10">
          
          {/* SUBTITLE ACCENT */}
          <Typography 
            variant="caption" 
            className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-6"
          >
            CONTACT
          </Typography>

          {/* MAIN HEADING */}
          <div className="max-w-4xl mb-10">
            <h2 
              className="font-extrabold tracking-tight text-[#FAF9F6] leading-[1.1] font-sans mx-auto text-balance"
              style={{ fontSize: 'clamp(32px, 5.5vw, 60px)' }}
            >
              Let's Turn Your Challenge Into Your Next Advantage
            </h2>
          </div>

          {/* CALL TO ACTION BUTTON -> LINKS TO /contact */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-x-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base transition-all duration-200 group relative overflow-hidden active:scale-95 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #d86835 0%, #ba4d1d 100%)',
              boxShadow: '0 4px 20px rgba(216, 104, 53, 0.35)'
            }}
          >
            <span>Start a Conversation</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
              &rarr;
            </span>
          </Link>

        </div>

        {/* RADIAL BACKGROUND AMBIENT GLOW */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none -z-0 opacity-15 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(253,149,93,0.8) 0%, rgba(24,24,24,0) 70%)'
          }}
        />
      </section>

    </main>
  );
}