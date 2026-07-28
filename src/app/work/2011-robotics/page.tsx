// src/app/work/2011-robotics/page.tsx
'use client';

import React from 'react';
import { WorkPageTemplate } from '@/components/WorkPageTemplate';

export default function RoboticsWorkPage() {
  return (
    <WorkPageTemplate
      clientName="2011 Robotics"
      clientSubtitle="World-Class Competitive Robotics"
      logoUrl="/assets/robotics-2011-logo.png"
      headline="A World-Class Robotics Legacy"
      categoryTag="Websites & Data"
      sections={[
        {
          eyebrow: "THE PROBLEM",
          heading: "An Elite Team Hidden Offline",
          imageUrl: "/assets/robotics-problem.jpeg",
          imageAlt: "Robotics arena match play with competing hardware platforms",
          body: (
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              On the field, Team 2011 is defined by a legacy of excellence. Off the field, however, the organization had no digital footprint to showcase its brand. Without a website, their rich history, competitive statistics, and the crucial sponsors supporting this world-class team remained entirely out of sight.
            </p>
          )
        },
        {
          eyebrow: "THE SOLUTION",
          heading: "A Modern, Data-Driven Web Portal",
          imageUrl: "/assets/robotics-solution.jpeg",
          imageAlt: "Responsive design interface screenshot exhibiting modern administration CMS options",
          body: (
            <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              A modern, fully responsive website that serves as the organization’s digital portal, showcasing statistics, upcoming events, sponsors, and event photos. Alongside seamless data integration, the website features a full content management system (CMS), enabling administrators to update pages with minimal technical expertise.
            </p>
          )
        },
        {
          eyebrow: "THE OUTCOME",
          heading: "A Digital Presence That Matches the Legacy",
          imageUrl: "/assets/robotics-outcome.jpeg",
          imageAlt: "Team members collaborating effectively with digital marketing portals",
          body: (
            <div className="flex flex-col gap-y-4 text-base sm:text-lg md:text-xl text-[#FAF9F6] leading-relaxed max-w-xl">
              <p className="font-semibold text-zinc-300">
                Established a professional digital portal that matches the team's off-field presence to its elite on-field reputation.
              </p>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                Now, this organization can showcase their accomplishments to inspiring new members and sponsors worldwide.
              </p>

              <div className="pt-2">
                <a 
                  href="https://www.2011robotics.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-[#FD955D] font-bold text-sm sm:text-base hover:text-white transition-colors group"
                >
                  Visit Website
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform inline-block">→</span>
                </a>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}