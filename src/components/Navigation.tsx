// components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'TinyLeague', path: '/case-studies/tinyleague' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Docs', path: 'https://www.digitalsportssolutions.com/docs/' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') {
        setIsSticky(true);
        return;
      }
      const heroThreshold = window.innerHeight * 0.9;
      setIsSticky(window.scrollY > heroThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100vw';
    } else {
      document.body.style.overflow = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* ==========================================================================
         TOP MASTER NAVIGATION BAR STRIP (HEIGHT EXPANDED TO 80PX)
         ========================================================================== */}
      <nav 
        role="navigation"
        aria-label="Main Navigation Landmark"
        className="fixed top-0 left-0 w-full z-50 flex items-center select-none"
        style={{ 
          height: '80px', // Increased from 64px
          backgroundColor: '#171717',
          borderBottom: '1px solid #232323',
          transform: isSticky || isOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isSticky || isOpen ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-in-out'
        }}
      >
        <div className="w-full px-8 md:px-16 flex items-center justify-between">
          
          {/* UPSCALED LOGO EMBED FRAME */}
          <a href="/" className="focus:outline-none rounded p-1 flex items-center justify-center" aria-label="DSS Corporate Index">
            <Logo variant="full-color" width={38} height={38} /> {/* Increased from 24x24 */}
          </a>

          {/* LARGE, HEAVY HAMBURGER INTERACTIVE TRIGGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="fullscreen-navigation-overlay"
            className="p-3 focus:outline-none text-[#FAF9F6] hover:text-[#FF1900] transition-colors rounded-md"
            style={{ minWidth: '48px', minHeight: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label={isOpen ? "Close navigation directory overlay" : "Open navigation directory overlay"}
          >
            {/* Dimensions upscaled for explicit structural weight */}
            <div style={{ width: '32px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} aria-hidden="true">
              <span style={{ width: '100%', height: '3px', backgroundColor: 'currentColor', transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none', transition: 'all 0.25s' }} />
              <span style={{ width: '100%', height: '3px', backgroundColor: 'currentColor', opacity: isOpen ? 0 : 1, transform: isOpen ? 'scaleX(0)' : 'none', transition: 'all 0.25s' }} />
              <span style={{ width: '100%', height: '3px', backgroundColor: 'currentColor', transform: isOpen ? 'translateY(-9px) rotate(-45deg)' : 'none', transition: 'all 0.25s' }} />
            </div>
          </button>
        </div>
      </nav>

      {/* ==========================================================================
         FULL-SCREEN OVERLAY MENU LANDMARK (ENLARGED TYPOGRAPHY RUNTIMES)
         ========================================================================== */}
      <div
        id="fullscreen-navigation-overlay"
        className="fixed top-0 left-0 w-screen h-screen min-h-screen flex flex-col justify-between items-center px-8 py-16 select-none"
        style={{
          backgroundColor: '#171717',
          zIndex: 9999,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transform: isOpen ? 'scale(1)' : 'scale(1.02)',
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s'
        }}
      >
        {/* Top Header Row within Overlay Canvas */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
          <Logo variant="full-color" width={38} height={38} />
          
          {/* Heavy, prominent closure button node */}
          <button 
            onClick={() => setIsOpen(false)}
            className="p-3 focus:outline-none text-[#AEAEAD] hover:text-white transition-colors font-sans font-medium"
            style={{ fontSize: '28px', lineHeight: '1' }}
            aria-label="Dismiss directory panel matrix"
          >
            ✕
          </button>
        </div>

        {/* HIGH-HIERARCHY GIANT ROUTING LIST VERTICAL MATRIX */}
        <div className="flex flex-col items-center justify-center text-center gap-y-8 sm:gap-y-10 my-auto">
          {navLinks.map((link) => {
            const isExternal = link.path.startsWith('http');
            const isActive = pathname === link.path;

            return (
              <a
                key={link.path}
                href={link.path}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className="font-extrabold tracking-tight transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 block py-1"
                style={{ 
                  fontFamily: 'var(--font-montserrat), system-ui, sans-serif',
                  fontSize: 'clamp(32px, 6vw, 52px)', // Massive typography parameters
                  color: isActive ? '#FF1900' : '#FAF9F6',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#FD955D'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#FAF9F6'; }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Enlarged Bottom Branding Watermark Component Accent */}
        <div className="opacity-15 transition-opacity hover:opacity-30 duration-300">
          <Logo variant="full-color" width={44} height={44} />
        </div>

      </div>
    </>
  );
};