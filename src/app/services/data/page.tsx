import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function DataPage() {
  const cards = [
    {
      title: "Dashboards Built Around You",
      description: "Live, visual dashboards designed around the decisions you actually need to make, so your most important numbers are always a glance away.",
      icon: "fa-chart-bar"
    },
    {
      title: "Stats & Records",
      description: "We track the stats and records that matter to you automatically, turning everyday activities into history you can learn from.",
      icon: "fa-history"
    },
    {
      title: "Reports Worth Sharing",
      description: "Turn your data into clean, professional reports ready for your team, your board, or your community.",
      icon: "fa-file-invoice-dollar"
    },
    {
      title: "One Ecosystem",
      description: "Your dashboards connect to the devices and apps we build alongside them, so your data flows into one place instead of scattered across tools.",
      icon: "fa-network-wired"
    }
  ];

  return (
    <ServicePageTemplate
      pageLabel="DATA & INSIGHTS"
      heading="Insights Built Around You"
      imageUrl="/assets/court-action.jpg"
      imageAlt="DSS real-time telemetry administrative visualization dashboard"
      capabilities={cards}
      processSteps={["Discover", "Design", "Build", "Refine", "Deliver & Support"]}
      bodyText={
        <p>
          Your organization already generates valuable data, but raw numbers in a spreadsheet rarely tell you much. DSS partners with you to turn that data into clear dashboards, live stats, and reports that actually mean something. We shape every view around the decisions you need to make, so the information you rely on is easy to read, easy to share, and easy to generate insights. The result is data that finally works for you.
        </p>
      }
    />
  );
}