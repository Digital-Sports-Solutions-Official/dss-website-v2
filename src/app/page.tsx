// src/app/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import Image from 'next/image';
import {
  ContentContainer,
  Section,
  SectionDivider,
  SectionHeading,
} from '@/components/LayoutPrimitives';

const bodyCopy = 'font-sans text-[0.9375rem] md:text-base font-normal leading-relaxed text-[#D4D4D4]';

const inlineLink =
  'inline-flex items-center font-sans text-[0.9375rem] font-bold text-[#FD955D] transition-colors hover:text-[#ffab7c]';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <main className="w-full overflow-x-hidden bg-[#181818] font-sans select-none">
      
      {/* 1. HERO */}
      <section
        id="top"
        className="relative flex min-h-[100svh] w-full flex-col items-center justify-between overflow-hidden bg-cover bg-center pt-24 pb-6 sm:pt-28 sm:pb-8"
        style={{
          backgroundImage:
            `linear-gradient(to bottom, rgba(24, 24, 24, 0.65), rgba(24, 24, 24, 0.70)), url('/assets/court-referee-bg.jpg')`,
        }}
      >
        <div aria-hidden />

        <ContentContainer className="z-10 my-auto flex w-full flex-col items-center py-8 text-center">
          <Typography variant="caption" className="mb-4 block">
            Digital Sports Solutions
          </Typography>

          <Typography variant="display" className="mx-auto mb-5 max-w-[20ch] sm:max-w-[900px]">
            Custom Digital Tools Built
            <br className="hidden sm:inline" />{' '}
            to Make Your Organization Stand Out.
          </Typography>

          <p className={`${bodyCopy} mx-auto mb-8 max-w-[42rem] text-pretty`}>
            You bring the challenge. We build the solution. We partner directly with your
            organization to turn what&apos;s holding you back into custom digital tools that help you
            run more efficiently, look more professional, and grow with confidence.
          </p>

          <Link
            href="/tinyleague"
            className="group inline-flex min-h-11 items-center justify-center px-3 font-mono text-xs font-bold tracking-widest text-[#AEAEAD] underline decoration-[#3C3C3C] underline-offset-4 transition-colors hover:text-[#FD955D] hover:decoration-[#FD955D]"
          >
            Discover TinyLeague
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </ContentContainer>

        {/* SCROLL INDICATOR (Pure Visual Cue) */}
        <div className="z-10 flex w-full flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="group flex min-h-11 items-center justify-center p-2 text-[#AEAEAD] transition-colors hover:text-[#FD955D]"
            aria-label="Scroll to services"
          >
            <span className="text-2xl font-bold transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </button>
        </div>
      </section>

      {/* 2. SERVICES PREVIEW */}
      <Section id="services" spacing="lg">
        <ContentContainer>
          <SectionHeading
            eyebrow="WHAT WE BUILD"
            title="Our Services"
            className="mb-10 sm:mb-14"
          />

          <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card
              variant="services-preview"
              icon="fa-microchip"
              title="Custom Smart Devices"
              description="We build simple and effective smart devices tailored to your organization, solving challenges no off-the-shelf solution can."
              ctaText="Learn More"
              href="/services/smart-devices"
            />
            <Card
              variant="services-preview"
              icon="fa-globe"
              title="Websites & Mobile Apps"
              description="Your organization deserves a modern website and mobile apps built around your goals, designed to impress and grow with you."
              ctaText="Learn More"
              href="/services/web-mobile"
            />
            <Card
              variant="services-preview"
              icon="fa-chart-simple"
              title="Data & Insights"
              description="Your data should work for you. We turn it into clear dashboards and insights you can trust and count on."
              ctaText="Learn More"
              href="/services/data"
            />
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

      {/* 3. OUR WORK */}
      <Section id="work">
        <ContentContainer>
          <SectionHeading
            eyebrow="OUR WORK"
            title="Real problems, real organizations, real solutions."
            className="mb-10 sm:mb-14"
          />

          <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
            <Card
              variant="work"
              logoUrl="/assets/ncda-nda-logo.png"
              logoAlt="NCDA and NDA Logos"
              categoryTag="Custom Smart Devices"
              description="Modernized competitive dodgeball with a custom wireless throw clock system, now the official timing technology of the NCDA and NDA."
              ctaText="Learn More"
              href="/work/ncda-nda"
            />
            <Card
              variant="work"
              logoUrl="/assets/robotics-2011-logo.png"
              logoAlt="2011 Robotics Logo"
              categoryTag="Website & Data"
              description="Developed a data-driven website for the world-class 2011 Robotics organization, giving their elite on-field reputation a digital presence to match."
              ctaText="Learn More"
              href="/work/2011-robotics"
            />
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

      {/* 4. TINYLEAGUE */}
      <Section id="tinyleague-teaser">
        <ContentContainer>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
            <div className="flex w-full justify-center md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/tinyLeague_CombinationMark_fullcolorInWHITE.png"
                alt="tinyLeague"
                className="h-auto w-full max-w-[240px] object-contain sm:max-w-[320px] md:max-w-[420px]"
              />
            </div>

            <div className="flex w-full flex-col items-start text-left md:w-1/2">
              <SectionHeading
                eyebrow="OUR VISION"
                title="Meet tinyLeague"
                accent="orange"
                className="mb-4"
              />
              <p className={bodyCopy}>
                The all-in-one platform that brings professional level operations, data analytics,
                and a fan experience like no other to any league.
              </p>
              <Link href="/tinyleague" className={`${inlineLink} mt-5 min-h-11`}>
                <span>Discover tinyLeague</span>
                <span className="ml-1.5" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

      {/* 5. OUR ORIGIN */}
      <Section id="founding-story">
        <ContentContainer>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
            <div className="order-2 flex w-full flex-col items-start text-left md:order-1 md:w-1/2">
              <SectionHeading
                eyebrow="OUR ORIGIN"
                title="From Problems to Solutions"
                className="mb-5"
              />
              <div className={`${bodyCopy} flex max-w-[540px] flex-col gap-y-4`}>
                <p>
                  Digital Sports Solutions began by solving a problem no off-the-shelf product
                  could fix, and that&apos;s still what we do. We find what&apos;s holding an
                  organization back and turn it into custom solutions that help them run more
                  efficiently, look more professional, and grow with confidence. That&apos;s the
                  promise we make to every organization we work with.
                </p>
              </div>
            </div>

            <div className="order-1 flex w-full justify-center md:order-2 md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/court-action.jpg"
                alt="DSS Deployment"
                className="aspect-[4/3] h-auto w-full max-w-[540px] rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

  {/* 6. OUR TEAM */}
<Section id="team">
  <ContentContainer>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
      <div className="flex w-full justify-center md:w-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/team-group.jpg"
          alt="Core Team"
          className="aspect-[4/3] h-auto w-full max-w-[540px] rounded-2xl object-cover shadow-xl"
        />
      </div>

      <div className="flex w-full flex-col items-start text-left md:w-1/2">
        <SectionHeading
          eyebrow="OUR TEAM"
          title="A Team You Can Trust"
          className="mb-5"
        />
        <div className={`${bodyCopy} flex max-w-[540px] flex-col gap-y-4`}>
          <p>
            Behind every solution we build is a team that has worked side by side for years.
            That means a team that listens first, stays accountable, and treats your success as
            the measure of our own, from the first conversation to the final result.
          </p>
        </div>
        <Link href="/contact" className={`${inlineLink} mt-5 min-h-11`}>
          <span>Let&apos;s turn your challenge into your next advantage</span>
          <span className="ml-1.5" aria-hidden>→</span>
        </Link>
      </div>
    </div>
  </ContentContainer>
</Section>

      <SectionDivider />

      {/* 7. CONTACT */}
      <Section id="contact" spacing="lg" className="relative overflow-hidden bg-[#181818]">
        <ContentContainer size="prose" className="relative z-10 flex flex-col items-center text-center">
          <Typography variant="caption" className="mb-4 block sm:mb-5">
            CONTACT
          </Typography>

          <Typography variant="h1" className="mb-8">
            Your Next Advantage Awaits
          </Typography>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-x-2 rounded-xl bg-[#FF1900] px-9 py-3.5 text-[0.9375rem] font-bold text-[#FAF9F6] shadow-lg shadow-[#FF1900]/25 transition-all duration-300 hover:bg-[#FD955D] hover:shadow-[#FD955D]/30 sm:w-auto sm:text-base"
          >
            <span>Start a Conversation</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </ContentContainer>

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[200px] w-[min(100%,600px)] -translate-x-1/2 -translate-y-1/2 opacity-15 blur-3xl sm:h-[300px]"
          style={{
            background: 'radial-gradient(circle, rgba(253,149,93,0.8) 0%, rgba(24,24,24,0) 70%)',
          }}
          aria-hidden
        />
      </Section>

    </main>
  );
}