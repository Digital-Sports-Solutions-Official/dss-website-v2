'use client';

import React from 'react';
import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { ContentContainer } from '@/components/LayoutPrimitives';

export default function NotFound() {
  return (
    <main className="w-full bg-[#181818] min-h-[calc(100vh-80px)] pt-36 sm:pt-48 pb-28 sm:pb-36 text-white font-sans select-none flex flex-col justify-center items-center">
      <ContentContainer size="prose" className="flex flex-col items-center text-center">
        
        {/* PAGE NOT FOUND MONOSPACE LABEL */}
        <Typography variant="caption" className="mb-4 block">
          Page Not Found
        </Typography>

        {/* ERROR 404 HEADING */}
        <Typography variant="display" className="mb-4">
          Error 404
        </Typography>

        {/* SUBTEXT */}
        <p className="text-[#D4D4D4] font-sans text-[0.9375rem] leading-relaxed max-w-md mx-auto">
          We couldn&apos;t find the page you&apos;re looking for.
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