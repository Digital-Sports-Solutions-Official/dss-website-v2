'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when full-screen menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, href?: string) => {
    // If the item has a dedicated href (e.g. /contact, /tinyleague, or https://...), allow default navigation
    if (href) {
      setIsMobileMenuOpen(false);
      return;
    }

    if (window.location.pathname !== '/') return;

    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  // Nav items configuration with explicit route for Contact
  const navItems = [
    { name: 'Home', id: 'top' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'tinyLeague', id: 'tinyleague-teaser', href: '/tinyleague' },
    { name: 'About', id: 'founding-story' },
    { name: 'Contact', id: 'contact-page', href: '/contact' },
    { name: 'Docs', id: 'docs', href: 'https://www.digitalsportssolutions.com/docs/' },
  ];

  return (
    <>
      <nav
        role="navigation"
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b select-none"
        style={{
          backgroundColor: isScrolled ? '#171717' : 'transparent',
          borderColor: isScrolled ? '#232323' : 'transparent',
          height: '80px'
        }}
      >
        <div className="w-full h-full mx-auto px-6 max-w-[1400px] flex items-center justify-between relative">
          
          {/* BRAND IDENTITY */}
          <Link href="/" className="focus:outline-none rounded p-1 flex items-center justify-center relative z-50 transition-transform active:scale-95">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/dss-combination-mark-white.svg" alt="Digital Sports Solutions Logo" className="h-11 w-auto object-contain block" />
          </Link>

          {/* HAMBURGER CONTROLLER */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center items-end gap-y-1.5 focus:outline-none relative z-50 bg-transparent border-0 cursor-pointer"
            style={{ width: '44px', height: '44px', padding: '10px' }}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation links drawer"
          >
            <div className="bg-[#FAF9F6] h-[2px] transition-all duration-300 rounded" style={{ width: '24px', transform: isMobileMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }} />
            <div className="bg-[#FAF9F6] h-[2px] transition-all duration-200 rounded" style={{ width: '24px', opacity: isMobileMenuOpen ? 0 : 1 }} />
            <div className="bg-[#FAF9F6] h-[2px] transition-all duration-300 rounded" style={{ width: '24px', transform: isMobileMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN IMMERSIVE NAV OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 min-h-screen w-full bg-[#141414] z-40 flex flex-col justify-between items-center pt-28 pb-12 px-6 font-sans overflow-y-auto select-none">
          
          {/* CENTERED LINK STACK */}
          <div className="flex flex-col items-center justify-center my-auto gap-y-4 w-full max-w-2xl">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href || `/#${item.id}`}
                onClick={(e) => handleScrollToSection(e, item.id, item.href)}
                className="text-white font-extrabold tracking-tight text-center transition-colors hover:text-[#FD955D] focus:outline-none py-1.5 px-6 rounded-lg w-auto active:scale-95 duration-150 block"
                style={{ 
                  fontSize: 'clamp(26px, 5vw, 42px)', 
                  lineHeight: '1.2'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* LOWER ACCENT BRANDING WATERMARK */}
          <div className="flex justify-center items-center mt-6 h-5 opacity-25 w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/logo-white.svg" 
              alt="Digital Sports Solutions Footer Watermark Logo" 
              className="h-full w-auto object-contain block mx-auto" 
            />
          </div>
        </div>
      )}
    </>
  );
};