// src/components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopView, setIsDesktopView] = useState(true);

  useEffect(() => {
    const handleViewportCheck = () => {
      setIsDesktopView(window.innerWidth >= 768);
    };
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleViewportCheck();
    handleScroll();

    window.addEventListener('resize', handleViewportCheck);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleViewportCheck);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (window.location.pathname !== '/') {
      return;
    }

    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <nav
      role="navigation"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b select-none"
      style={{
        backgroundColor: isScrolled || isMobileMenuOpen ? '#171717' : 'transparent',
        borderColor: isScrolled ? '#232323' : 'transparent',
        height: '80px'
      }}
    >
      <div className="w-full h-full mx-auto px-6 max-w-[1400px] flex items-center justify-between relative">
        
        {/* BRAND IDENTITY: ENLARGED PRODUCTION SVG LINK */}
        <a 
          href="/" 
          className="focus:outline-none rounded p-1 flex items-center justify-center min-w-[44px] min-h-[44px] relative z-50 transition-transform active:scale-95"
          aria-label="DSS Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/dss-combination-mark-white.svg" 
            alt="Digital Sports Solutions Logo" 
            className="h-11 w-auto object-contain block transition-all" /* Increased height variant track to h-11 */
          />
        </a>

        {/* DESKTOP NAVIGATION LAYOUT LINK MATRIX */}
        {isDesktopView && (
          <div 
            style={{ display: 'flex', alignItems: 'center', gap: '32px' }}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[#AEAEAD]"
          >
            <a
              href="/#services"
              onClick={(e) => handleScrollToSection(e, 'services')}
              className="hover:text-[#FD955D] transition-colors focus:outline-none flex items-center h-11 px-2"
            >
              Services
            </a>
            
            <a
              href="/tinyleague"
              className="hover:text-[#FD955D] transition-colors focus:outline-none flex items-center h-11 px-2"
            >
              tinyLeague™
            </a>

            <a
              href="/#founding-story"
              onClick={(e) => handleScrollToSection(e, 'founding-story')}
              className="hover:text-[#FD955D] transition-colors focus:outline-none flex items-center h-11 px-2"
            >
              About
            </a>
            <a
              href="/#team"
              onClick={(e) => handleScrollToSection(e, 'team')}
              className="hover:text-[#FD955D] transition-colors focus:outline-none flex items-center h-11 px-2"
            >
              Team
            </a>
          </div>
        )}

        {/* MOBILE HAMBURGER CONTROLLER */}
        {!isDesktopView && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center items-end gap-y-1.5 focus:outline-none relative z-50 bg-transparent border-0 cursor-pointer"
            style={{ 
              width: '44px', 
              height: '44px', 
              padding: '10px'
            }}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation links drawer"
          >
            <div 
              className="bg-[#FAF9F6] h-[2px] transition-all duration-300 rounded" 
              style={{ 
                width: '24px', 
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' 
              }} 
            />
            <div 
              className="bg-[#FAF9F6] h-[2px] transition-all duration-200 rounded" 
              style={{ 
                width: '24px', 
                opacity: isMobileMenuOpen ? 0 : 1 
              }} 
            />
            <div 
              className="bg-[#FAF9F6] h-[2px] transition-all duration-300 rounded" 
              style={{ 
                width: '24px', 
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' 
              }} 
            />
          </button>
        )}

      </div>

      {/* MOBILE EXPANDED DROPDOWN NAVIGATION ACCORDION */}
      {(!isDesktopView && isMobileMenuOpen) && (
        <div 
          className="absolute top-[80px] left-0 w-full bg-[#171717] border-b border-[#232323] transition-all duration-300 z-40"
          style={{ height: '264px', opacity: 1 }}
        >
          <div className="flex flex-col items-start px-6 py-4 gap-y-1 font-mono text-xs font-bold uppercase tracking-widest text-[#AEAEAD]">
            <a
              href="/#services"
              onClick={(e) => handleScrollToSection(e, 'services')}
              className="w-full flex items-center hover:text-[#FD955D] transition-colors focus:outline-none"
              style={{ minHeight: '44px' }}
            >
              Services
            </a>
            
            <a
              href="/tinyleague"
              className="w-full flex items-center hover:text-[#FD955D] transition-colors focus:outline-none"
              style={{ minHeight: '44px' }}
            >
              tinyLeague™
            </a>

            <a
              href="/#founding-story"
              onClick={(e) => handleScrollToSection(e, 'founding-story')}
              className="w-full flex items-center hover:text-[#FD955D] transition-colors focus:outline-none"
              style={{ minHeight: '44px' }}
            >
              About
            </a>
            <a
              href="/#team"
              onClick={(e) => handleScrollToSection(e, 'team')}
              className="w-full flex items-center hover:text-[#FD955D] transition-colors focus:outline-none"
              style={{ minHeight: '44px' }}
            >
              Team
            </a>
          </div>
        </div>
      )}

    </nav>
  );
};