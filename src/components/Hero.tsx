// src/components/Hero.tsx
'use client';

import React from 'react';
import { DSS_TOKENS } from '@/config/theme';

export const Hero: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: DSS_TOKENS.colors.bg.secondary,
        paddingTop: 'clamp(100px, 12vw, 160px)',
        paddingBottom: 'clamp(60px, 10vw, 120px)',
        minHeight: 'calc(100vh - 80px)'
      }}
      className="w-full relative select-none overflow-hidden flex items-center justify-center border-b border-[#232323]"
    >
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 max-w-[1400px] relative z-10 flex flex-col items-center text-center">
        
        {/* CONSTRAINED HEADING */}
        <h1 
          style={{ 
            fontFamily: 'var(--font-montserrat), system-ui, sans-serif',
            fontSize: 'clamp(32px, 6vw, 64px)', 
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}
          className="text-white font-black max-w-[1000px] mb-6 text-balance"
        >
          Engineered to Win. Built to Last.
        </h1>

        {/* COMPACT DESCRIPTION BOUNDARY */}
        <p 
          style={{ 
            color: DSS_TOKENS.colors.text.muted,
            fontSize: 'clamp(14px, 2vw, 20px)',
            maxWidth: '680px'
          }}
          className="font-sans font-medium leading-relaxed mb-10 text-balance"
        >
          We build custom courtside smart devices, lightning-fast streaming engines, and advanced telemetry dashboards for high-stakes sports environments.
        </p>

        {/* DEFENSIVE BUTTON LAYOUT */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="/#services"
            style={{ backgroundColor: DSS_TOKENS.colors.brand.orange, minHeight: '48px' }}
            className="w-full sm:w-auto inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest text-[#171717] hover:bg-white hover:text-[#171717] transition-all duration-300 rounded px-8"
          >
            Explore Services
          </a>
          <a
            href="#contact-footer"
            style={{ borderColor: DSS_TOKENS.colors.border.medium, minHeight: '48px' }}
            className="w-full sm:w-auto inline-flex items-center justify-center font-mono text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-[#171717] border transition-all duration-300 rounded px-8"
          >
            Let's Build
          </a>
        </div>

      </div>
    </section>
  );
};