import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

export default function SmartDevicesPage() {
  const cards = [
    {
      title: "Built Around You",
      description: "We design each device around your organization, with a modular approach that adapts as your needs change.",
      icon: "fa-puzzle-piece"
    },
    {
      title: "Wireless Control",
      description: "Control devices from a phone or tablet from anywhere, with no cables, no special equipment, and no advanced learning curve.",
      icon: "fa-wifi"
    },
    {
      title: "Built for Real Conditions",
      description: "Portable, durable, and reliable, our hardware sets up in minutes enabling it to perform wherever necessary.",
      icon: "fa-shield-alt"
    },
    {
      title: "One Ecosystem",
      description: "Pair your device with the websites, apps, and dashboards we build alongside it, so everything you count on works in unison.",
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
      bodyText={
        <p>
          When the smart device your organization needs doesn't exist yet, we build it. DSS partners with you to design custom devices around the way your organization operates. No more settling for a generic, off-the-shelf product that never quite solves the problem. Our devices are portable, wireless, and tough enough to take anywhere, designed to solve the problem that was once limiting your organization.
        </p>
      }
    />
  );
}