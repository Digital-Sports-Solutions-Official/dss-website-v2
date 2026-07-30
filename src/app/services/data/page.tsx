// src/app/services/data/page.tsx
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function DataPage() {
  const cards = [
    {
      title: "Dashboards Built Around You",
      description: "Live, visual dashboards that put your most important numbers a glance away.",
      icon: "fa-chart-bar"
    },
    {
      title: "Stats & Records",
      description: "We capture the data that matters, turning everyday events into actionable insights to guide your next move.",
      icon: "fa-history"
    },
    {
      title: "Reports Worth Sharing",
      description: "Transform your data into professional reports ready to share with your team, your board, or your community members.",
      icon: "fa-file-invoice-dollar"
    },
    {
      title: "One Ecosystem",
      description: "Pair your dashboards with the devices and apps we build, so everything works together.",
      icon: "fa-network-wired"
    }
  ];

  return (
    <ServicePageTemplate
      pageLabel="DATA & INSIGHTS"
      heading="Insights Built Around You"
      imageUrl="/assets/analytics-dashboard.jpeg"
      imageAlt="DSS custom analytics and historical team performance dashboard visualization"
      capabilities={cards}
      processSteps={["Discover", "Design", "Build", "Refine", "Deliver & Support"]}
      ctaText="Learn More →"
      ctaHref="/contact"
      bodyText={
        <p>
          You have the data; we make it meaningful. We partner with you to build dashboards and
          reports designed around the decisions you need to make, not just the metrics you happen
          to collect. The result? Clear, shareable insights that finally put your data to work.
        </p>
      }
    />
  );
}