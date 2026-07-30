// src/app/services/web-mobile/page.tsx
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function WebMobilePage() {
  const cards = [
    {
      title: "Built to Represent You",
      description: "We design every website and app around your organization, professionally reflecting your brand.",
      icon: "fa-id-badge"
    },
    {
      title: "Update It Yourself",
      description: "Update pages, photos, and content yourself, anytime, with no developer experience required.",
      icon: "fa-edit"
    },
    {
      title: "Polished on Every Screen",
      description: "Your site is sharp and performs effortlessly on phones, tablets, and computers.",
      icon: "fa-laptop"
    },
    {
      title: "One Ecosystem",
      description: "Pair your website and apps with the devices and dashboards we build, so everything works together.",
      icon: "fa-sync-alt"
    }
  ];

  return (
    <ServicePageTemplate
      pageLabel="WEBSITES & MOBILE APPS"
      heading="A Digital Presence Built Around You"
      imageUrl="/assets/mobile-showcase.webp"
      imageAlt="Mobile shot clock controller interface application"
      capabilities={cards}
      processSteps={["Discover", "Design", "Build", "Refine", "Launch & Support"]}
      ctaText="Learn More →"
      ctaHref="/contact"
      bodyText={
        <p>
          We partner with you to design and build websites, web apps, and mobile apps to
          represent your organization and brand. Your digital presence is often the people’s
          first impression, so it should be something you&apos;re proud to put your name on.
          Our websites and apps are modern and able to grow alongside your organization as
          it changes.
        </p>
      }
    />
  );
}