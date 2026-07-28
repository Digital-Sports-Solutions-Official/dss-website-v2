import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function WebMobilePage() {
  const cards = [
    {
      title: "Built to Represent You",
      description: "We design every website and app around your organization and brand, so your digital presence reflects exactly who you are.",
      icon: "fa-id-badge"
    },
    {
      title: "Web and Mobile",
      description: "From websites and web apps to mobile applications, we build the digital experience your organization can count on.",
      icon: "fa-mobile-alt"
    },
    {
      title: "Polished on Every Screen",
      description: "Your site looks sharp and runs smoothly on phones, tablets, and desktops, so you always present professionally.",
      icon: "fa-laptop"
    },
    {
      title: "One Ecosystem",
      description: "Pair your website and apps with the devices and dashboards we build alongside them, so everything you count on works in unison.",
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
      bodyText={
        <p>
          We partner with you to design and build modern websites, web apps, and mobile applications to professionally represent your organization. By highlighting your unique brand and shaping every detail around you, we deliver a digital presence that is truly unique. Whether it stands alone or integrates with our other services, the result is something you'll be proud to have your name on.
        </p>
      }
    />
  );
}