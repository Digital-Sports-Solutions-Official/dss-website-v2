// components/Footer.tsx
'use client';

import React from 'react';
import { Logo } from './Logo';
import { ContentContainer } from './LayoutPrimitives';

export const Footer: React.FC = () => {
  return (
    <footer 
      role="contentinfo"
      className="w-full bg-[#171717] select-none font-sans"
      style={{ 
        borderTop: '1px solid #232323', 
        paddingTop: '80px', 
        paddingBottom: '32px' 
      }}
    >
      <ContentContainer>
        {/* ==========================================================================
           TOP SECTION: 4-COLUMN MASTER DIRECTORY GRID
           ========================================================================== */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12"
          style={{ width: '100%' }}
        >
          {/* COLUMN 1: LOGO, TAGLINE & REFACTORED SOCIAL MEDIA CHANNELS */}
          <div className="flex flex-col items-start gap-y-4">
            <a href="/" className="focus:outline-none rounded p-0.5 block" aria-label="DSS Home Anchor">
              <Logo variant="full-color" width={24} height={24} />
            </a>
            <p 
              className="text-[#AEAEAD] text-xs font-medium leading-relaxed max-w-[240px]"
              style={{ margin: 0 }}
            >
              Custom digital tools for sports organizations. Built to impress, designed to grow.
            </p>
            
            {/* EXACT SPECIFICATION INBOUND SOCIAL LINKS */}
            <div className="flex items-center gap-x-3.5 pt-2 text-[#AEAEAD] text-base">
              <a 
                href="https://www.youtube.com/channel/UCj6qESOEGemvzRvgxagYHWg" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF1900] transition-colors"
                aria-label="Digital Sports Solutions YouTube Feed Channel"
              >
                <i className="fa-brands fa-youtube" />
              </a>
              <a 
                href="https://www.instagram.com/digitalsportssolutions?igsh=MTc0YXltdXBmdjFqcw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF1900] transition-colors"
                aria-label="Digital Sports Solutions Instagram Profile Space"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a 
                href="https://www.linkedin.com/company/digitalsportssolutions/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF1900] transition-colors"
                aria-label="Digital Sports Solutions Corporate LinkedIn Node"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
              <a 
                href="https://discord.com/invite/T2qfkr3JqT" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF1900] transition-colors"
                aria-label="Digital Sports Solutions Engineering Community Discord Guild Server"
              >
                <i className="fa-brands fa-discord" />
              </a>
              <a 
                href="https://www.facebook.com/people/Digital-Sports-Solutions/61558423260160/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-[#FF1900] transition-colors"
                aria-label="Digital Sports Solutions Corporate Facebook Page Ledger"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a 
                href="mailto:contact@digitalsportssolutions.com" 
                className="hover:text-[#FF1900] transition-colors"
                aria-label="Dispatch direct electronic dispatch to DSS internal team members"
              >
                <i className="fa-regular fa-envelope" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: SERVICES CAPABILITIES */}
          <div className="flex flex-col items-start gap-y-3.5">
            <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] text-[#FD955D]">
              Services
            </span>
            <div className="flex flex-col gap-y-2.5 text-xs font-semibold text-[#FAF9F6]">
              <a href="/services#smart-devices" className="hover:text-[#FF1900] transition-colors">Custom Smart Devices</a>
              <a href="/services#web-mobile" className="hover:text-[#FF1900] transition-colors">Websites & Mobile Apps</a>
              <a href="/services#data" className="hover:text-[#FF1900] transition-colors">Data & Insights</a>
            </div>
          </div>

          {/* COLUMN 3: CASE STUDIES PORTFOLIOS */}
          <div className="flex flex-col items-start gap-y-3.5">
            <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] text-[#FD955D]">
              Case Studies
            </span>
            <div className="flex flex-col gap-y-2.5 text-xs font-semibold text-[#FAF9F6]">
              <a href="/case-studies/dodgeball" className="hover:text-[#FF1900] transition-colors">NCDA Dodgeball Tracking</a>
              <a href="/case-studies/tinyleague" className="hover:text-[#FF1900] transition-colors">tinyLeague™ Scoring System</a>
              <a href="/case-studies/vault" className="hover:text-[#FF1900] transition-colors">NDA Vault</a>
              <a href="/case-studies/robotics" className="hover:text-[#FF1900] transition-colors">2011 Robotics Archive</a>
            </div>
          </div>

          {/* COLUMN 4: COMMUNICATIONS INBOUNDS & DOCUMENTATION BUTTON */}
          <div className="flex flex-col items-start gap-y-3.5">
            <span className="text-[10px] font-mono uppercase font-bold tracking-[0.25em] text-[#FD955D]">
              Get In Touch
            </span>
            <div className="flex flex-col gap-y-2 text-xs font-semibold text-[#FAF9F6] w-full">
              <a href="mailto:contact@digitalsportssolutions.com" className="hover:text-[#FF1900] transition-colors select-all">contact@digitalsportssolutions.com</a>
              <a href="mailto:support@digitalsportssolutions.com" className="hover:text-[#FF1900] transition-colors select-all">support@digitalsportssolutions.com</a>
              <a href="tel:2169245393" className="text-sm font-bold select-all pt-0.5">216-924-5393</a>
            </div>
            
            {/* BOXED DOCUMENTATION CTA AFFORDANCE */}
            <div className="pt-2 w-full sm:w-auto">
              <a 
                href="https://www.digitalsportssolutions.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-x-2 text-xs font-bold text-[#FD955D] rounded border border-[#3C3C3C] hover:border-[#FD955D] bg-transparent hover:bg-[#FD955D]/5 px-4 py-2.5 transition-all duration-200 w-full sm:w-auto"
              >
                <i className="fa-regular fa-arrow-up-right-from-square text-[10px]" />
                Documentation
              </a>
            </div>
          </div>

        </div>

        {/* ==========================================================================
           MIDDLE SECTION: SECURE SYSTEM CREATOR CREDITS BOUNDARY LAYER
           ========================================================================== */}
        <div 
          className="w-full flex flex-wrap justify-between items-center gap-4 py-5 border-t border-[#232323] border-b border-[#232323] text-[11px] font-mono"
        >
          <div className="flex items-center gap-x-2">
            <span className="text-[#737373] font-bold">GRAPHIC ELEMENTS CREATOR:</span>
            <span className="text-[#AEAEAD] font-sans font-semibold">Matt Kerekanich</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-[#737373] font-bold">WEBSITE DESIGNER & CREATOR:</span>
            <span className="text-[#AEAEAD] font-sans font-semibold">Anirudh Chinthagunta</span>
          </div>
        </div>

        {/* ==========================================================================
           LOWER MIDDLE: INFORMATIONAL LEGAL DISCLAIMER STRING PARAGRAPH
           ========================================================================== */}
        <div className="w-full py-8 text-center border-b border-[#232323]/40">
          <p 
            className="text-[11px] font-medium leading-relaxed max-w-4xl mx-auto text-[#525252]"
            style={{ margin: 0 }}
          >
            This website is for informational purposes only and does not constitute legal advice. All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
          </p>
        </div>

        {/* ==========================================================================
           BOTTOM SECTION: COMPLIANCE REGULATION STATEMENTS & COPYRIGHT METRICS
           ========================================================================== */}
        <div 
          className="w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-y-4 text-[11px] font-mono text-[#525252]"
        >
          <span>© 2026 Digital Sports Solutions LLC</span>
          
          <div className="flex items-center gap-x-6 font-medium text-[#525252]">
            <a href="/terms-of-service" className="hover:text-[#AEAEAD] transition-colors">Terms of Service</a>
            <span className="text-[#232323]">|</span>
            <a href="/privacy-policy" className="hover:text-[#AEAEAD] transition-colors">Privacy Policy</a>
          </div>
        </div>

      </ContentContainer>
    </footer>
  );
};