// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ContentContainer } from './LayoutPrimitives';

export const Footer: React.FC = () => {
  return (
    <footer 
      role="contentinfo"
      className="w-full bg-[#111111] font-sans select-none"
      style={{ 
        borderTop: '1px solid #222222', 
        paddingTop: '40px', 
        paddingBottom: '24px' 
      }}
    >
      <ContentContainer>
        {/* ==========================================================================
           ROW 1: MAIN COLUMNS (LEFT TO RIGHT)
           ========================================================================== */}
        <div 
          className="grid grid-cols-1 gap-x-8 gap-y-8 text-left sm:grid-cols-2 lg:grid-cols-4"
          style={{ width: '100%', paddingBottom: '32px' }}
        >
          {/* COLUMN 1: LOGO, TAGLINE, SOCIAL MEDIA ICONS */}
          <div className="flex w-full flex-col items-start text-left" style={{ minWidth: '0' }}>
            <Link href="/" className="block rounded focus:outline-none transition-transform active:scale-95" aria-label="DSS Home Anchor">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/assets/dss-combination-mark-white.svg" 
                alt="Digital Sports Solutions Logo" 
                className="block h-10 w-auto object-contain"
              />
            </Link>
            <p 
              className="max-w-[220px] font-sans text-[11px] font-medium leading-relaxed text-[#999999] text-left"
              style={{ margin: 0, marginTop: '14px' }}
            >
              Custom digital tools built to make your organization stand out.
            </p>
            
            {/* SOCIAL MEDIA ICONS CONTAINER */}
            <div 
              className="flex items-center text-left text-sm text-[#999999]" 
              style={{ 
                marginTop: '16px',
                width: '100%',
                maxWidth: '220px',
                minHeight: '28px'
              }}
            >
              <div className="flex w-full items-center justify-between">
                <a href="https://www.youtube.com/channel/UCj6qESOEGemvzRvgxagYHWg" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="transition-colors hover:text-[#FD955D]"><i className="fa-brands fa-youtube" /></a>
                <a href="https://www.instagram.com/digitalsportssolutions?igsh=MTc0YXltdXBmdjFqcw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-[#FD955D]"><i className="fa-brands fa-instagram" /></a>
                <a href="https://www.linkedin.com/company/digitalsportssolutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#FD955D]"><i className="fa-brands fa-linkedin-in" /></a>
                <a href="https://discord.gg/6HjeNJM6F4" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="transition-colors hover:text-[#FD955D]"><i className="fa-brands fa-discord" /></a>
                <a href="https://www.facebook.com/people/Digital-Sports-Solutions/61558423260160/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-[#FD955D]"><i className="fa-brands fa-facebook-f" /></a>
                <Link href="/contact" aria-label="Contact Us" className="transition-colors hover:text-[#FD955D]"><i className="fa-regular fa-envelope" /></Link>
              </div>
            </div>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="flex flex-col items-start gap-y-2.5 text-left">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#FD955D] text-left">
              SERVICES
            </span>
            <div className="flex flex-col gap-y-1.5 text-left text-[11px] font-medium text-[#EEEEEE]">
              <Link href="/services/smart-devices" className="transition-colors hover:text-[#FD955D]">Custom Smart Devices</Link>
              <Link href="/services/web-mobile" className="transition-colors hover:text-[#FD955D]">Websites & Mobile Apps</Link>
              <Link href="/services/data" className="transition-colors hover:text-[#FD955D]">Data & Insights</Link>
            </div>
          </div>

          {/* COLUMN 3: WORK */}
          <div className="flex flex-col items-start gap-y-2.5 text-left">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#FD955D] text-left">
              WORK
            </span>
            <div className="flex flex-col gap-y-1.5 text-left text-[11px] font-medium text-[#EEEEEE]">
              <Link href="/work/ncda-nda" className="transition-colors hover:text-[#FD955D]">NCDA/NDA</Link>
              <Link href="/work/2011-robotics" className="transition-colors hover:text-[#FD955D]">2011 Robotics</Link>
              <Link href="/tinyleague" className="transition-colors hover:text-[#FD955D]">tinyLeague</Link>
            </div>
          </div>

          {/* COLUMN 4: GET IN TOUCH */}
          <div className="flex flex-col items-start gap-y-2.5 text-left">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#FD955D] text-left">
              GET IN TOUCH
            </span>
            <div className="flex w-full flex-col gap-y-1 text-left text-[11px] font-medium text-[#EEEEEE]">
              <a href="mailto:contact@digitalsportssolutions.com" className="transition-colors hover:text-[#FD955D]">contact@digitalsportssolutions.com</a>
              <a href="mailto:support@digitalsportssolutions.com" className="transition-colors hover:text-[#FD955D]">support@digitalsportssolutions.com</a>
              <a href="tel:2169245393" className="pt-0.5 font-bold transition-colors hover:text-[#FD955D]">216-924-5393</a>
            </div>
            
            {/* DOCUMENTATION BUTTON CONTAINER */}
            <div className="flex min-h-[28px] items-center text-left" style={{ marginTop: '16px' }}>
              <Link 
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#D95B32] via-[#C85228] to-[#B6451E] px-3.5 py-1.5 font-sans text-[11px] font-semibold text-white shadow-md shadow-orange-950/30 transition-all duration-200 hover:from-[#EA6538] hover:to-[#C85228] hover:-translate-y-0.5 active:scale-95"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>

        {/* ==========================================================================
           FIRST DIVIDER LINE
           ========================================================================== */}
        <div style={{ width: '100%', borderTop: '1px solid #222222' }} />

        {/* ==========================================================================
           ROW 2: INFORMATIONAL LEGAL DISCLAIMER
           ========================================================================== */}
        <div className="flex items-center justify-center w-full text-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <p 
            className="mx-auto max-w-3xl text-center font-sans text-[10px] font-medium leading-relaxed text-[#888888]"
            style={{ margin: 0 }}
          >
            This website is for information purposes only and does not constitute legal advice. All names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
          </p>
        </div>

        {/* ==========================================================================
           SECOND DIVIDER LINE
           ========================================================================== */}
        <div style={{ width: '100%', borderTop: '1px solid #222222' }} />

        {/* ==========================================================================
           ROW 3: COMPLIANCE STATEMENTS & COPYRIGHT
           ========================================================================== */}
        <div 
          className="flex w-full flex-col items-center justify-between gap-y-2 font-mono text-[10px] text-[#888888] sm:flex-row"
          style={{ paddingTop: '20px' }}
        >
          <span>© 2026 Digital Sports Solutions LLC</span>
          
          <div className="flex items-center gap-x-4 font-sans font-normal text-[#888888]">
            <Link href="/terms" className="transition-colors hover:text-[#FD955D]">Terms of Service</Link>
            <span className="text-[#333333]">|</span>
            <Link href="/privacy" className="transition-colors hover:text-[#FD955D]">Privacy Policy</Link>
          </div>
        </div>

      </ContentContainer>
    </footer>
  );
};