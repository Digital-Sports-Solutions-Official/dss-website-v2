// src/app/services/smart-devices/page.tsx
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function SmartDevicesPage() {
  const cards = [
    {
      title: "Built Around You",
      description: "We design each device around your organization and can adapt as your needs change.",
      icon: "fa-puzzle-piece"
    },
    {
      title: "Effortless Control",
      description: "Wirelessly control your devices using a phone or tablet with minimal learning curve.",
      icon: "fa-wifi"
    },
    {
      title: "Built for Real Conditions",
      description: "Durable and built to withstand real-world conditions, operating wherever your organization goes.",
      icon: "fa-shield-alt"
    },
    {
      title: "One Ecosystem",
      description: "Pair your device with the websites, apps, and dashboards we build, so everything works together.",
      icon: "fa-project-diagram"
    }
  ];

  return (
    <ServicePageTemplate
      pageLabel="CUSTOM SMART DEVICES"
      heading="Hardware Built Around You"
      imageUrl="/assets/shot-clock.jpg"
      imageAlt="DSS Custom sports shot clock smart device"
      capabilities={cards}
      processSteps={["Discover", "Prototype", "Field-Test", "Iterate", "Deploy & Support"]}
      ctaText="Learn More →"
      ctaHref="/contact"
      bodyText={
        <p>
          When the smart device your organization needs doesn&apos;t exist yet, we partner with
          you to design and build it exactly around your needs. No more settling for a generic,
          off-the-shelf product that never quite fits. Our devices are portable, wireless, and
          engineered to fit seamlessly into how your organization already works.
        </p>
      }
    />
  );
}