// src/components/Footer.tsx
'use client';

import React from 'react';
import { ContentContainer } from './LayoutPrimitives';

export const Footer: React.FC = () => {
  return (
    <footer 
      role="contentinfo"
      className="w-full bg-[#111111] select-none font-sans"
      style={{ 
        borderTop: '1px solid #222222', 
        paddingTop: '40px', 
        paddingBottom: '24px' 
      }}
    >
      <ContentContainer>
        {/* ==========================================================================
           TOP SECTION: 4-COLUMN MASTER DIRECTORY GRID
           ========================================================================== */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 text-left"
          style={{ width: '100%', paddingBottom: '32px' }}
        >
          {/* COLUMN 1: NAV LOGO, TAGLINE & SOCIAL CHANNELS */}
          <div className="flex flex-col items-start text-left w-full" style={{ minWidth: '0' }}>
            <a href="/" className="focus:outline-none rounded block transition-transform active:scale-95" aria-label="DSS Home Anchor">
              <img 
                src="/assets/dss-combination-mark-white.svg" 
                alt="Digital Sports Solutions Logo" 
                className="h-10 w-auto object-contain block"
              />
            </a>
            <p 
              className="text-[#999999] text-[11px] font-medium elegance leading-relaxed max-w-[220px] text-left"
              style={{ margin: 0, marginTop: '14px' }}
            >
              Custom digital tools for sports organizations. Built to impress, designed to grow.
            </p>
            
            <div 
              className="flex items-center text-[#999999] text-sm text-left" 
              style={{ 
                marginTop: '28px',
                width: '100%',
                maxWidth: '220px',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <a href="https://www.youtube.com/channel/UCj6qESOEGemvzRvgxagYHWg" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1900] transition-colors"><i className="fa-brands fa-youtube" /></a>
              <a href="https://www.instagram.com/digitalsportssolutions?igsh=MTc0YXltdXBmdjFqcw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1900] transition-colors"><i className="fa-brands fa-instagram" /></a>
              <a href="https://www.linkedin.com/company/digitalsportssolutions/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1900] transition-colors"><i className="fa-brands fa-linkedin-in" /></a>
              <a href="https://discord.gg/6HjeNJM6F4" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1900] transition-colors"><i className="fa-brands fa-discord" /></a>
              <a href="https://www.facebook.com/people/Digital-Sports-Solutions/61558423260160/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF1900] transition-colors"><i className="fa-brands fa-facebook-f" /></a>
              <a href="mailto:contact@digitalsportssolutions.com" className="hover:text-[#FF1900] transition-colors"><i className="fa-regular fa-envelope" /></a>
            </div>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="flex flex-col items-start gap-y-2.5 text-left">
            <span className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-[#FD955D] text-left">
              Services
            </span>
            <div className="flex flex-col gap-y-1.5 text-[11px] font-medium text-[#EEEEEE] text-left">
              <a href="/services/smart-devices" className="hover:text-[#FF1900] transition-colors">Custom Smart Devices</a>
              <a href="/services/web-mobile" className="hover:text-[#FF1900] transition-colors">Websites & Mobile Apps</a>
              <a href="/services/data" className="hover:text-[#FF1900] transition-colors">Data & Insights</a>
            </div>
          </div>

          {/* COLUMN 3: WORK */}
          <div className="flex flex-col items-start gap-y-2.5 text-left">
            <span className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-[#FD955D] text-left">
              Work
            </span>
            <div className="flex flex-col gap-y-1.5 text-[11px] font-medium text-[#EEEEEE] text-left">
              <a href="/work/ncda-nda" className="hover:text-[#FF1900] transition-colors">NCDA/NDA</a>
              <a href="/work/2011-robotics" className="hover:text-[#FF1900] transition-colors">2011 Robotics</a>
            </div>
          </div>

          {/* COLUMN 4: GET IN TOUCH */}
          <div className="flex flex-col items-start gap-y-2.5 text-left">
            <span className="text-[9px] font-mono uppercase font-bold tracking-[0.2em] text-[#FD955D] text-left">
              Get In Touch
            </span>
            <div className="flex flex-col gap-y-1 text-[11px] font-medium text-[#EEEEEE] w-full text-left">
              <a href="mailto:contact@digitalsportssolutions.com" className="hover:text-[#FF1900] transition-colors">contact@digitalsportssolutions.com</a>
              <a href="mailto:support@digitalsportssolutions.com" className="hover:text-[#FF1900] transition-colors">support@digitalsportssolutions.com</a>
              <a href="tel:2169245393" className="font-bold pt-0.5">216-924-5393</a>
            </div>
            
            <div className="pt-1 w-full sm:w-auto text-left">
              <a 
                href="https://www.digitalsportssolutions.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-[10px] font-bold text-[#FD955D] rounded border border-[#2A2A2A] hover:border-[#FD955D] bg-transparent hover:bg-[#FD955D]/5 px-3 py-1.5 transition-all duration-200"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>

        {/* ==========================================================================
           FIRST DIVIDER LINE
           ========================================================================== */}
        <div style={{ width: '100%', borderTop: '1px solid #222222' }} />

        {/* ==========================================================================
           LOWER MIDDLE: INFORMATIONAL LEGAL DISCLAIMER
           ========================================================================== */}
        <div className="w-full text-center flex justify-center items-center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <p 
            className="text-[10px] font-medium leading-relaxed max-w-3xl mx-auto text-[#888888] text-center"
            style={{ margin: 0 }}
          >
            This website is for informational purposes only and does not constitute legal advice. All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
          </p>
        </div>

        {/* ==========================================================================
           SECOND DIVIDER LINE
           ========================================================================== */}
        <div style={{ width: '100%', borderTop: '1px solid #222222' }} />

        {/* ==========================================================================
           BOTTOM SECTION: COMPLIANCE STATEMENTS & COPYRIGHT
           ========================================================================== */}
        <div 
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-y-2 text-[10px] font-mono text-[#888888]"
          style={{ paddingTop: '20px' }}
        >
          <span>© 2026 Digital Sports Solutions LLC</span>
          
          <div className="flex items-center gap-x-4 font-sans font-normal text-[#888888]">
            <a href="/terms-of-service" className="hover:text-[#FFFFFF] transition-colors">Terms of Service</a>
            <span className="text-[#333333]">|</span>
            <a href="/privacy-policy" className="hover:text-[#FFFFFF] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </ContentContainer>
    </footer>
  );
};