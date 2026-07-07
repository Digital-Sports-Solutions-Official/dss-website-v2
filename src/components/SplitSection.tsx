// src/components/SplitSection.tsx
'use client';

import React from 'react';

interface SplitSectionProps {
  id?: string;
  imageSide: 'left' | 'right';
  eyebrow: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export const SplitSection: React.FC<SplitSectionProps> = ({
  id,
  imageSide,
  eyebrow,
  title,
  imageUrl,
  imageAlt,
  children
}) => {
  const isImageLeft = imageSide === 'left';

  return (
    <section
      id={id}
      className="w-full bg-[#232323] relative select-none overflow-hidden"
      style={{
        paddingTop: 'clamp(48px, 8vw, 112px)',
        paddingBottom: 'clamp(48px, 8vw, 112px)'
      }}
    >
      {/* SOLID STRIP DIVIDER TRACKS */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#3A3A3A]" />

      <div className="w-full mx-auto px-4 sm:px-8 md:px-12 xl:px-16 max-w-[1400px]">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 items-center"
          style={{ gap: 'clamp(32px, 5vw, 56px)' }}
        >
          {/* IMAGE COLUMN */}
          <div className={`w-full flex justify-center items-center ${isImageLeft ? 'order-2 md:order-1' : 'order-2 md:order-2'}`}>
            <div className="relative w-full overflow-hidden rounded-[12px] border border-[#3a3a3a] aspect-[4/3] md:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={imageAlt} className="w-full h-full md:h-auto object-cover block filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>

          {/* TEXT CONTENT COLUMN */}
          <div className={`w-full flex flex-col items-start text-left ${isImageLeft ? 'order-1 md:order-2' : 'order-1 md:order-1'}`}>
            {/* COLOR FIXED: CHANGED FROM RED TO BRAND ORANGE ACCENT LINE */}
            <div className="w-10 h-[2px] bg-[#FD955D] mb-4" />

            {/* EYEBROW COLOR PATCH */}
            <span className="font-mono font-bold uppercase tracking-[0.3em] block text-[10px] sm:text-[11px] text-[#FD955D] mb-[14px]">
              {eyebrow}
            </span>
            
            <h2 className="text-white font-extrabold font-sans leading-tight text-balance" style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif', fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.02em', margin: '0 0 20px 0' }}>
              {title}
            </h2>

            <div className="flex flex-col gap-y-4 sm:gap-y-6 font-sans text-[#AEAEAD] font-medium text-left text-sm sm:text-base md:text-[18px]" style={{ maxWidth: '520px', lineHeight: '1.7' }}>
              {children}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#3A3A3A]" />
    </section>
  );
};