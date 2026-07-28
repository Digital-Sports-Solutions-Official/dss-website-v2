'use client';

import React from 'react';
import Link from 'next/link';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
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
      
      {/* HERO */}
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

          <p className={`${bodyCopy} mx-auto mb-8 max-w-[38rem] text-pretty`}>
            You bring the challenge. We build the solution. Digital Sports Solutions works
            directly with your organization to understand what&apos;s holding you back to deliver
            custom digital tools.
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

        {/* SCROLL INDICATOR */}
        <div className="z-10 flex w-full flex-col items-center justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="group flex min-h-11 flex-col items-center justify-center gap-y-1.5 p-1 text-[#AEAEAD] transition-colors hover:text-[#FD955D]"
            aria-label="Scroll to services"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 transition-opacity group-hover:opacity-100">
              scroll
            </span>
            <svg
              className="h-4 w-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <Section id="services" spacing="lg">
        <ContentContainer>
          <SectionHeading
            eyebrow="What We Build"
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
              description="Your data should work for you. We build simple online tools that collect, organize, and transform your organization's data into powerful insights you can trust and count on."
              ctaText="Learn More"
              href="/services/data"
            />
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

      {/* OUR WORK */}
      <Section id="work">
        <ContentContainer>
          <SectionHeading
            eyebrow="Our Work"
            title="Real problems, real organizations, real solutions."
            className="mb-10 sm:mb-14"
          />

          <div className="grid w-full grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-8">
            <Card
              variant="work"
              logoUrl="/assets/ncda-nda-logo.png"
              logoAlt="NCDA and NDA Logos"
              categoryTag="Custom Smart Devices"
              description="Modernized competitive dodgeball by replacing manual counting with a custom built wireless throw clock system that is now the official timing technology of both the NCDA and NDA."
              ctaText="Learn More"
              href="/work/ncda-nda"
            />
            <Card
              variant="work"
              logoUrl="/assets/robotics-2011-logo.png"
              logoAlt="2011 Robotics Logo"
              categoryTag="Websites & Data"
              description="Developed a data-driven website for the world-class 2011 Robotics organization to highlight their teams, stats, sponsors, and club history."
              ctaText="Learn More"
              href="/work/2011-robotics"
            />
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

      {/* TINYLEAGUE */}
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
                eyebrow="Our Vision"
                title="Meet tinyLeague"
                accent="orange"
                className="mb-4"
              />
              <p className={bodyCopy}>
                The all-in-one management platform bringing pro-level operations, advanced data
                analytics, and a fan experience like no other to any league.
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

      {/* ORIGIN */}
      <Section id="founding-story">
        <ContentContainer>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12 lg:gap-16">
            <div className="order-2 flex w-full flex-col items-start text-left md:order-1 md:w-1/2">
              <SectionHeading
                eyebrow="Our Origin"
                title="Turning Problems Into Possibilities"
                className="mb-5"
              />
              <div className={`${bodyCopy} flex max-w-[540px] flex-col gap-y-4`}>
                <p>
                  Our company began when we noticed a problem that was sabotaging an organization,
                  holding back its credibility and the experience it was capable of offering. Off
                  the shelf solutions could not meet their specific needs, so we closely partnered
                  with them to build them a solution.
                </p>
                <p>
                  The solution didn&apos;t just solve the problem. It delivered when it mattered
                  most, performing reliably on the biggest stages, when reputations and results
                  were on the line. From that single partnership, Digital Sports Solutions was
                  born.
                </p>
                <p>
                  That&apos;s still who we are. We listen for what&apos;s holding an organization
                  back, then turn it into a custom digital solution that helps them operate more
                  efficiently, be more professional, and grow with confidence. What started with
                  one partner is now our promise to every organization we work with.
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

      {/* TEAM */}
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
                eyebrow="Our Team"
                title="A Team You Can Count On"
                className="mb-5"
              />
              <div className={`${bodyCopy} flex max-w-[540px] flex-col gap-y-4`}>
                <p>
                  Behind every solution we build is a team that has been solving challenges
                  together for years. We grew up building things side by side, sharing the same
                  curiosity for engineering and the same drive to get it right. That history means
                  we know how to work as one and how to deliver when it counts.
                </p>
                <p>
                  For you, that means a team that listens first, stays accountable, and treats the
                  success of your organization as the measure of our own. It also means a partner
                  who stays with you from the first conversation through the final result, invested
                  every step of the way.
                </p>
              </div>
              <Link href="/contact" className={`${inlineLink} mt-5 min-h-11`}>
                <span>Let&apos;s turn your challenge into your next advantage!</span>
                <span className="ml-1.5" aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </ContentContainer>
      </Section>

      <SectionDivider />

      {/* CONTACT CTA */}
      <Section id="contact" spacing="lg" className="relative overflow-hidden bg-[#181818]">
        <ContentContainer size="prose" className="relative z-10 flex flex-col items-center text-center">
          <Typography variant="caption" className="mb-4 block sm:mb-5">
            Contact
          </Typography>

          <Typography variant="h1" className="mb-8">
            Let&apos;s Turn Your Challenge Into Your Next Advantage
          </Typography>

          <Link
            href="/contact"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-x-2 rounded-xl px-7 py-3.5 text-[0.9375rem] font-semibold text-white shadow-lg transition-transform duration-200 active:scale-95 sm:w-auto sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #d86835 0%, #ba4d1d 100%)',
              boxShadow: '0 4px 20px rgba(216, 104, 53, 0.35)',
            }}
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
