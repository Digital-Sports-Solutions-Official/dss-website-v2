// src/app/work/2011-robotics/page.tsx
'use client';

import React from 'react';
import { WorkPageTemplate } from '@/components/WorkPageTemplate';

export default function RoboticsWorkPage() {
  return (
    <WorkPageTemplate
      clientName="2011 Robotics"
      clientSubtitle="World-Class Competitive Robotics Organization"
      logoUrl="/assets/robotics-2011-logo.png"
      headline="A World-Class Legacy"
      categoryTag="Websites & Data"
      sections={[
        {
          eyebrow: "THE PROBLEM",
          heading: "An Elite Team Hidden Offline",
          imageUrl: "/assets/robotics-problem.jpeg",
          imageAlt: "Robotics arena match play with competing hardware platforms",
          body: (
            <p className="max-w-xl text-sm font-normal leading-relaxed text-[#A3A3A3] sm:text-base">
              On the field, Team 2011 is defined by a legacy of excellence. Off the field,
              however, the organization had no digital footprint to showcase its brand.
              Without a website, their rich history, competitive statistics, and the crucial
              sponsors supporting this world-class team remained entirely out of sight.
            </p>
          )
        },
        {
          eyebrow: "THE SOLUTION",
          heading: "A Modern, Data-Driven Digital Portal",
          imageUrl: "/assets/robotics-solution.jpeg",
          imageAlt: "Responsive design interface screenshot exhibiting modern portal features",
          body: (
            <p className="max-w-xl text-sm font-normal leading-relaxed text-[#A3A3A3] sm:text-base">
              A modern, fully responsive digital portal showcasing statistics, events, sponsors,
              pictures, and more. Backed by seamless data integration, it looks great on every
              device from phones to desktops and allows administrators to easily manage content
              with minimal technical experience.
            </p>
          )
        },
        {
          eyebrow: "THE OUTCOME",
          heading: "A Digital Presence That Matches the Legacy",
          imageUrl: "/assets/robotics-outcome.jpeg",
          imageAlt: "Team members collaborating effectively with digital marketing portals",
          body: (
            <div className="flex max-w-xl flex-col gap-y-4 text-sm sm:text-base text-[#A3A3A3]">
              <ul className="list-disc pl-5 space-y-2 leading-relaxed font-normal">
                <li>
                  Established a professional digital portal that matches the team&apos;s off-field
                  presence to its elite on-field reputation.
                </li>
                <li>
                  Now, this organization can showcase their accomplishments to inspire new members and
                  sponsors.
                </li>
              </ul>

              <div className="pt-1">
                <a
                  href="https://2011robotics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-sm font-bold text-[#FD955D] transition-colors hover:text-white sm:text-base"
                >
                  See now!
                  <span className="ml-2 inline-block transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          )
        }
      ]}
    />
  );
}