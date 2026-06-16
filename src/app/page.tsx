// src/app/page.tsx
'use client';

import React from 'react';
import { Typography } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Section, ContentContainer, LayoutPattern } from '@/components/LayoutPrimitives';

export default function HomePage() {
  return (
    <ContentContainer>
      <Section spacing="lg" className="border-b border-[#232323]/40">
        <div className="max-w-2xl">
          <Typography variant="caption" className="text-[#FD955D] font-mono tracking-widest uppercase block mb-2">
            Digital Sports Solutions // Operational Hub
          </Typography>
          <Typography variant="h1" className="mb-4">
            Low-Latency Hardware Meets Scalable Cloud Architecture.
          </Typography>
          <Typography variant="body" className="text-[#D4D4D4] text-base leading-relaxed">
            We consult with athletic organizations to engineer custom digital logic firmware, high-precision BLE tracking sensors, and robust real-time web platforms that stand up to active tournament conditions.
          </Typography>
          <div className="pt-6">
            <a 
              href="/contact" 
              className="inline-block bg-[#FF1900] hover:bg-[#FF5900] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded transition-all font-mono"
            >
              Initialize Technical Intake ➔
            </a>
          </div>
        </div>
      </Section>

      <Section spacing="md">
        <div className="mb-8">
          <Typography variant="caption" className="text-[#FF1900] font-mono uppercase tracking-wider block mb-1">
            Capabilities Matrix
          </Typography>
          <Typography variant="h2">Expertise Fields</Typography>
        </div>

        <LayoutPattern variant="grid">
          <Card 
            variant="service"
            icon="fa-microchip"
            title="IoT Hardware Firmware Architecture"
            subtitle="Embedded Systems Tier"
            description="Custom low-level system designs in VHDL, micro-controller assembly, and C optimized to process and serialize active athletic tracking metadata without standard CPU overhead limits."
            ctaText="Request Tech Capabilities"
          />

          <Card 
            variant="service"
            icon="fa-server"
            title="Real-Time Cloud Synchronization"
            subtitle="Infrastructure Tier"
            description="Constructing low-latency database engines, optimized pipeline sockets, and server networks engineered to ingest data arrays from thousand-node arrays simultaneously."
            ctaText="Review Cloud Frameworks"
          />

          <Card 
            variant="service"
            icon="fa-globe"
            title="Next-Generation Web Platforms"
            subtitle="Application Tier"
            description="High-fidelity, responsive administration dashboards built with Next.js App Router, strict TypeScript tracking architectures, and optimized server-rendered layouts."
            ctaText="Explore Frontend Specs"
          />
        </LayoutPattern>
      </Section>

      <Section spacing="md" className="border-t border-[#232323]/40">
        <LayoutPattern variant="flex-split" className="mb-8">
          <div>
            <Typography variant="caption" className="text-[#FF1900] font-mono uppercase tracking-wider block mb-1">
              Field Deployments
            </Typography>
            <Typography variant="h2">Proven In Competition</Typography>
          </div>
          <a 
            href="/case-studies" 
            className="text-xs font-bold uppercase tracking-wider border border-[#3C3C3C] hover:border-[#FF1900] px-4 py-2.5 rounded transition-all font-mono block w-fit"
          >
            All Case Portfolios
          </a>
        </LayoutPattern>

        <LayoutPattern variant="grid">
          <Card 
            variant="case-study"
            imageUrl="/assets/case-tinyleague-preview.jpg"
            subtitle="National Dodgeball Association"
            title="The tinyLeague™ Low-Latency Scoreboard System"
            description="Constructed an end-to-end proprietary protocol suite natively paired over BLE to low-level controller units. Reduced court signal transmission latency down to 4.2ms across 6 regional match deployments."
            tags={['Firmware (C)', 'BLE Protocol', 'Next.js Router']}
            ctaText="Review Case Architecture"
          />

          <Card 
            variant="case-study"
            imageUrl="/assets/case-robotics-preview.jpg"
            subtitle="Legacy Historical Archive"
            title="2011 Robotics Synchronization Restructuring"
            description="Re-engineered asynchronous timing matrices on older controller setups. Eliminated priority inversions across multi-thread nodes, achieving a 23% boost in path calculation times."
            tags={['Real-Time OS', 'Systems Optimization']}
            ctaText="Inspect Legacy Audit"
          />

          <Card 
            variant="case-study"
            imageUrl="/assets/case-secure-preview.jpg"
            subtitle="Enterprise Secure Vault"
            title="Data Pipeline Isolation Infrastructure"
            description="Designed a zero-trust encrypted transport tier under strict NDA rules to protect multi-tenant cloud storage engines from cross-talk or sniffing operations."
            tags={['Network Isolation', 'Crypto Modules']}
            ctaText="Review Security Protocol"
          />
        </LayoutPattern>
      </Section>
    </ContentContainer>
  );
}