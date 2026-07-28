// src/app/work/ncda-nda/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { WorkPageTemplate } from '@/components/WorkPageTemplate';

/* Helper Component to Ensure Autoplay Works Seamlessly */
function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay prevented:", err);
      });
    }
  }, []);

  return (
    <div className="w-full aspect-[16/10] rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] overflow-hidden shadow-2xl relative">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover block"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
    </div>
  );
}

export default function NcdaNdaWorkPage() {
  return (
    <WorkPageTemplate
      clientName="NCDA & NDA"
      clientSubtitle="Collegiate & Semi-Pro Dodgeball"
      logoUrl="/assets/ncda-nda-logo.png"
      headline="Bringing Accurate Timing to Competitive Dodgeball"
      categoryTag="Custom Smart Devices"
      sections={[
        {
          eyebrow: "THE PROBLEM",
          heading: "Manual Counting Was Costing the Game",
          customElement: (
            /* Stopwatch Placeholder Container matching Wireframe */
            <div className="w-full aspect-[16/10] rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center p-8 shadow-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#242424] border border-[#333333] flex items-center justify-center text-[#FD955D] shadow-inner">
                <i className="fas fa-stopwatch text-2xl" />
              </div>
            </div>
          ),
          body: (
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              In competitive dodgeball, teams have 15 seconds to throw or face a rule violation. Relying on manual countdowns historically caused inconsistent timing and unfair advantages, frustrating players and compromising the league's image.
            </p>
          )
        },
        {
          eyebrow: "THE SOLUTION",
          heading: "A Wireless Shot Clock, Controlled From a Phone",
          customElement: <VideoPlayer src="/assets/ProductVideoFoundersEdition.mp4" />,
          body: (
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Engineered a wireless shot-clock system featuring a portable display controlled via a smartphone app. By enabling referees to reset the countdown from their phones, the system minimizes human error, reduces rule disputes, and ensures fair gameplay.
            </p>
          )
        },
        {
          eyebrow: "THE OUTCOME",
          /* Transformed to large, high-impact wireframe typography */
          heading: "The Official Timing Technology of the Sport",
          imageUrl: "/assets/ncda-outcome.jpg",
          imageAlt: "Dodgeball players using the official DSS timing technology on the court",
          body: (
            <div className="flex flex-col gap-y-4 text-base sm:text-lg md:text-xl text-[#FAF9F6] leading-relaxed max-w-xl">
              <p className="font-semibold text-zinc-300">
                Official timing partner for the{' '}
                <a
                  href="https://ncdadodgeball.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD955D] font-bold hover:underline transition-all"
                >
                  NCDA
                </a>{' '}
                and{' '}
                <a
                  href="https://www.ndadodgeball.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FD955D] font-bold hover:underline transition-all"
                >
                  NDA
                </a>
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                Tried and tested at regional and national championship events across numerous seasons.
              </p>

              <div className="pt-2">
                <p className="italic font-serif text-lg sm:text-xl text-[#FAF9F6]">
                  “Digital shot clocking is the future of the sport.”
                </p>
                <span className="block not-italic text-zinc-500 mt-2 font-mono text-xs uppercase tracking-widest">
                  — Former NCDA President
                </span>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}