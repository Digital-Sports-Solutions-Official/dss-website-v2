'use client';

import React from 'react';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { ContentContainer } from '@/components/LayoutPrimitives';

export default function NotFound() {
  return (
    <main className="w-full bg-[#181818] min-h-[calc(100vh-80px)] pt-36 sm:pt-48 pb-28 sm:pb-36 text-white font-sans select-none flex flex-col justify-center items-center">
      <ContentContainer className="flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* PAGE NOT FOUND MONOSPACE LABEL */}
        <Typography
          variant="caption"
          className="text-[#FD955D] font-mono tracking-[0.3em] font-bold block uppercase text-[10px] sm:text-[11px] mb-4"
        >
          PAGE NOT FOUND
        </Typography>

        {/* ERROR 404 HEADING */}
        <h1 
          style={{ 
            fontSize: 'clamp(36px, 6vw, 64px)', 
            fontWeight: '800', 
            letterSpacing: '-0.02em', 
            color: '#FAF9F6', 
            margin: '0 0 16px 0',
            lineHeight: '1.1'
          }}
          className="font-sans text-balance text-center"
        >
          Error 404
        </h1>

        {/* SUBTEXT */}
        <p className="text-[#D4D4D4] font-sans text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
          We couldn't find the page you're looking for.
        </p>

        {/* REUSED RECTANGULAR BUTTON COMPONENT WITH EXPLICIT TOP MARGIN */}
        <div className="mt-8 sm:mt-10">
          <Button
            href="/"
            variant="primary"
            className="!rounded-md px-7 py-3 text-xs sm:text-sm inline-flex items-center gap-x-2"
          >
            <span>Back to Home</span>
            <span className="text-base leading-none">→</span>
          </Button>
        </div>

      </ContentContainer>
    </main>
  );
}