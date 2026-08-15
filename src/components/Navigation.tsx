// src/components/Navigation.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomepage = pathname === '/';

  // Lock body scroll when overlay is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Handle scroll detection for sticky navbar emergence
  useEffect(() => {
    const handleScroll = () => {
      if (isHomepage) {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  // Handle Escape key to close menu overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', id: 'top', targetId: 'top' },
    { name: 'Services', id: 'services', targetId: 'services' },
    { name: 'Work', id: 'work', targetId: 'work' },
    { name: 'tinyLeague™', id: 'tinyleague', href: '/tinyleague' },
    { name: 'About', id: 'about', targetId: 'founding-story' },
    { name: 'Team', id: 'team', targetId: 'team' },
    { name: 'Contact', id: 'contact', href: '/contact' },
    { name: 'Docs', id: 'docs', href: '/docs' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId?: string,
    href?: string
  ) => {
    setIsMenuOpen(false);

    if (href) {
      if (href.startsWith('http')) {
        window.open(href, '_blank', 'noopener,noreferrer');
        e.preventDefault();
      } else {
        e.preventDefault();
        router.push(href);
      }
      return;
    }

    e.preventDefault();
    if (pathname !== '/') {
      router.push(`/#${targetId}`);
      return;
    }

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    const targetElement = document.getElementById(targetId || '');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed left-0 top-0 z-50 h-[80px] w-full font-sans select-none border-b transition-all duration-300 ${
          isHomepage && !isScrolled && !isMenuOpen
            ? 'pointer-events-none -translate-y-2 border-transparent bg-transparent opacity-0'
            : 'pointer-events-auto translate-y-0 opacity-100'
        }`}
        style={{
          backgroundColor: isScrolled || isMenuOpen ? '#171717' : 'transparent',
          borderColor: isScrolled ? '#232323' : 'transparent',
        }}
      >
        <div className="relative mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
          
          {/* BRAND IDENTITY LOGO */}
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="focus:outline-none relative z-50 flex items-center justify-center rounded p-1 transition-transform active:scale-95"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/dss-combination-mark-white.svg"
              alt="Digital Sports Solutions Logo"
              className="block h-11 w-auto object-contain"
            />
          </Link>

          {/* HAMBURGER / CLOSE ICON CONTROLLER */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none relative z-50 flex cursor-pointer flex-col items-end justify-center gap-y-1.5 border-0 bg-transparent p-2.5"
            style={{ width: '44px', height: '44px' }}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <div
              className="h-[2px] w-6 rounded bg-[#FAF9F6] transition-all duration-300"
              style={{
                transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none',
              }}
            />
            <div
              className="h-[2px] w-6 rounded bg-[#FAF9F6] transition-all duration-200"
              style={{
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <div
              className="h-[2px] w-6 rounded bg-[#FAF9F6] transition-all duration-300"
              style={{
                transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* FULL-SCREEN OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-40 flex min-h-[100svh] w-full flex-col items-center justify-between overflow-y-auto bg-[#141414] px-5 py-6 font-sans select-none transition-all duration-300 ease-in-out sm:px-8 ${
          isMenuOpen
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-98 opacity-0'
        }`}
      >
        {/* TOP EQUALIZER SPACER */}
        <div className="h-20 w-full shrink-0" />

        {/* PERFECTLY CENTERED LINK STACK */}
        <div className="my-auto flex w-full max-w-xl flex-col items-center justify-center gap-y-2 text-center sm:gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href || `/#${item.targetId}`}
              onClick={(e) => handleNavClick(e, item.targetId, item.href)}
              className="group relative inline-block rounded-lg px-6 py-1.5 text-center font-extrabold tracking-tight text-white transition-all duration-200 hover:text-[#FD955D] focus:outline-none active:scale-95"
              style={{
                fontSize: 'clamp(28px, 5.5vw, 44px)',
                lineHeight: '1.2',
              }}
            >
              <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-1">
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* LOWER ACCENT BRANDING WATERMARK */}
        <div className="flex h-20 w-full shrink-0 items-center justify-center opacity-25">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo-white.svg"
            alt="Digital Sports Solutions Watermark Logo"
            className="block h-6 w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};