// components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'tinyLeague', path: '/case-studies/tinyleague' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      role="navigation"
      aria-label="Main Corporate Navigation"
      className="fixed top-0 left-0 w-full z-50 border-b flex items-center select-none"
      style={{ 
        height: '64px',
        backgroundColor: isScrolled ? 'rgba(35, 35, 35, 0.95)' : '#232323',
        borderBottomColor: isScrolled ? '#4A4A4A' : '#3C3C3C',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' : 'none',
        transition: 'all 0.30s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="max-w-6xl mx-auto w-full px-4 flex items-center justify-between">
        
        {/* BRAND LOGO PORTAL */}
        <a 
          href="/" 
          className="focus:outline-none rounded p-1 flex items-center justify-center min-h-[40px]" 
          aria-label="Digital Sports Solutions Home Portal"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Logo variant="white" width={130} height={32} />
        </a>

        {/* DESKTOP VIEWPORTS MATRIX LAYOUT */}
        {!isMobile && (
          <div className="font-mono text-xs font-bold uppercase tracking-wider flex items-center ml-auto mr-7 gap-x-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative py-2 focus:outline-none rounded px-1 transition-colors"
                  style={{ color: isActive ? '#FF1900' : '#FAF9F6' }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#FD955D'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#FAF9F6'; }}
                >
                  {link.label}
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-[2px]" 
                    style={{
                      backgroundColor: '#FF1900',
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                      transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                      transformOrigin: 'center'
                    }}
                  />
                </a>
              );
            })}
          </div>
        )}

        {/* DESKTOP DOCUMENTATION PORTAL ACCESSIBILITY NODE */}
        {!isMobile && (
          <a
            href="https://docs.digitalsportssolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded text-[11px] font-bold transition-all focus:outline-none"
            style={{
              borderColor: 'rgba(255, 89, 0, 0.4)',
              backgroundColor: 'rgba(255, 89, 0, 0.1)',
              color: '#FD955D',
              padding: '6px 14px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF1900';
              e.currentTarget.style.borderColor = '#FF1900';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 89, 0, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 89, 0, 0.4)';
              e.currentTarget.style.color = '#FD955D';
            }}
          >
            Docs ↗
          </a>
        )}

        {/* MOBILE MENU TOGGLE SYSTEM */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            className="p-2 focus:outline-none rounded transition-colors"
            style={{ color: isOpen ? '#FF1900' : '#FAF9F6' }}
            aria-label={isOpen ? "Close main structural menu" : "Open main structural menu"}
          >
            <div style={{ width: '22px', height: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ width: '100%', height: '2px', backgroundColor: 'currentColor', transform: isOpen ? 'translateY(6px) rotate(45deg)' : 'none', transition: 'all 0.25s' }} />
              <span style={{ width: '100%', height: '2px', backgroundColor: 'currentColor', opacity: isOpen ? 0 : 1, transform: isOpen ? 'scaleX(0)' : 'none', transition: 'all 0.25s' }} />
              <span style={{ width: '100%', height: '2px', backgroundColor: 'currentColor', transform: isOpen ? 'translateY(-6px) rotate(-45deg)' : 'none', transition: 'all 0.25s' }} />
            </div>
          </button>
        )}
      </div>

      {/* MOBILE EXPANSION DRAWER LAYER CONTAINER */}
      {isMobile && (
        <div
          id="mobile-navigation-drawer"
          className="fixed inset-x-0"
          style={{
            top: '64px',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: 40,
            backgroundColor: '#232323',
            borderTop: '1px solid #3C3C3C',
            transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? 'auto' : 'none',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in-out'
          }}
        >
          <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className="focus:outline-none rounded py-1"
                  style={{
                    color: isActive ? '#FF1900' : '#FAF9F6',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '700',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em',
                    paddingLeft: isActive ? '12px' : '0',
                    borderLeft: isActive ? '3px solid #FF1900' : 'none',
                    display: 'block',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#FD955D'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#FAF9F6'; }}
                >
                  {link.label}
                </a>
              );
            })}

            {/* RESTORED MOBILE DOCUMENTATION PORTAL ANCHOR TERMINAL */}
            <div className="pt-4 border-t border-[#3C3C3C] mt-2">
              <a
                href="https://docs.digitalsportssolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="border rounded text-center text-sm font-bold transition-all focus:outline-none block w-full"
                style={{
                  borderColor: 'rgba(255, 89, 0, 0.4)',
                  backgroundColor: 'rgba(255, 89, 0, 0.1)',
                  color: '#FD955D',
                  padding: '12px'
                }}
              >
                Docs ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};