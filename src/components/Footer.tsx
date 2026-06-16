// components/Footer.tsx
import React from 'react';
import { Typography } from './Typography';
import { Logo } from './Logo';
import { Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="w-full bg-[#232323] border-t border-[#3C3C3C] pt-16 pb-8 px-6 text-left select-none font-sans"
      aria-label="DSS Corporate Footprint Directory"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
        <div className="flex flex-col gap-y-4 font-sans">
          <Logo variant="white" width={140} height={35} />
          <p className="text-xs text-[#D4D4D4] leading-relaxed max-w-xs mt-2 font-sans">
            B2B Sports Technology Consulting. Bridging the gap between low-level digital logic firmware execution and scalable cloud operations.
          </p>
          
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 pt-2 text-[#D4D4D4]">
            <a 
              href="https://www.linkedin.com/company/digitalsportssolutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FF1900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1900] rounded p-0.5"
              aria-label="Connect with DSS professional operations teams on LinkedIn"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a 
              href="https://www.youtube.com/channel/UCj6qESOEGemvzRvgxagYHWg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FF1900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1900] rounded p-0.5"
              aria-label="Watch DSS hardware engineering breakdowns and platform demos on YouTube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/digitalsportssolutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FF1900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1900] rounded p-0.5"
              aria-label="Follow DSS tournament lab insights and firmware testing highlights on Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a 
              href="https://discord.com/invite/T2qfkr3JqT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FF1900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1900] rounded p-0.5"
              aria-label="Join our engineering community workspace on Discord"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V6c0-1.1-.9-2-2-2z" />
                <circle cx="8" cy="12" r="1.5" fill="currentColor" stroke="none" />
                <circle cx="16" cy="12" r="1.5" fill="currentColor" stroke="none" />
                <path d="M9 15c1.5 1 4.5 1 6 0" />
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/people/Digital-Sports-Solutions/61558423260160/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#FF1900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1900] rounded p-0.5"
              aria-label="View community corporate announcements on our Facebook business profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a 
              href="mailto:contact@digitalsportssolutions.com" 
              className="hover:text-[#FF1900] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF1900] rounded p-0.5"
              aria-label="Submit an architectural intake dispatch directly to our consulting office"
            >
              <Mail className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-3">
          <Typography variant="caption" className="text-[#FD955D] font-bold uppercase tracking-wider text-sm mb-1">
            Engineering Services
          </Typography>
          <ul className="flex flex-col text-sm text-[#D4D4D4] font-sans">
            <li><a href="/services/iot-embedded" className="hover:text-white transition-colors block py-1.5 leading-normal">IoT & Embedded Systems</a></li>
            <li><a href="/services/web-mobile" className="hover:text-white transition-colors block py-1.5 leading-normal">Web & Mobile Application Layer</a></li>
            <li><a href="/services/cloud-realtime" className="hover:text-white transition-colors block py-1.5 leading-normal">Cloud & Real-Time Architecture</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3">
          <Typography variant="caption" className="text-[#FD955D] font-bold uppercase tracking-wider text-sm mb-1">
            Case Studies
          </Typography>
          <ul className="flex flex-col text-sm text-[#D4D4D4] font-sans">
            <li><a href="/case-studies/ncda" className="hover:text-white transition-colors block py-1.5 leading-normal">NCDA Dodgeball Tracking Sync</a></li>
            <li><a href="/case-studies/tinyleague" className="hover:text-white transition-colors block py-1.5 leading-normal">tinyLeague™ Scoring Ecosystem</a></li>
            <li><a href="/case-studies/nda" className="hover:text-white transition-colors block py-1.5 leading-normal">National Dodgeball Association (NDA) Vault</a></li>
            <li><a href="/case-studies/2011robotics" className="hover:text-white transition-colors block py-1.5 leading-normal">2011 Robotics Legacy Archive</a></li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 font-sans">
          <Typography variant="caption" className="text-[#FD955D] font-bold uppercase tracking-wider text-sm mb-1">
            Consulting Office
          </Typography>
          <div className="text-sm text-[#D4D4D4] flex flex-col gap-y-2.5 font-sans">
            <p className="text-[#AEAEAD] margin-0">Columbus, Ohio Region</p>
            <p className="text-[#FAF9F6] font-semibold select-all margin-0 font-mono">216-924-5393</p>
            <div className="flex flex-col gap-y-1 text-xs font-mono text-[#D4D4D4]">
              <p className="margin-0">Intake: <span className="text-[#FF1900] font-bold select-all break-all">contact@digitalsportssolutions.com</span></p>
              <p className="margin-0">Support: <span className="text-[#FD955D] font-bold select-all break-all">support@digitalsportssolutions.com</span></p>
            </div>
            <div className="pt-2">
              <a 
                href="/contact" 
                className="text-xs font-semibold uppercase text-white border border-[#3C3C3C] hover:border-[#FF1900] hover:bg-[#FF1900]/10 px-4 py-2.5 rounded transition-all block w-full sm:w-fit text-center"
              >
                Schedule Discovery Call ➔
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#3C3C3C]/60 pt-4 pb-2 text-[10px] font-sans text-[#AEAEAD] leading-relaxed text-justify sm:text-left">
        <p className="margin-0">
          This website is for informational purposes only and does not constitute legal advice. All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
        </p>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#3C3C3C] pt-4 flex flex-col sm:flex-row justify-between items-center text-xs font-sans text-[#AEAEAD] gap-y-4 text-center sm:text-left">
        <span>© 2026 Digital Sports Solutions LLC. All rights reserved.</span>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span className="hover:text-white cursor-pointer transition-colors">Security Ledger</span>
          <span className="hover:text-white cursor-pointer transition-colors">Compliance Infrastructure</span>
        </div>
      </div>
    </footer>
  );
};