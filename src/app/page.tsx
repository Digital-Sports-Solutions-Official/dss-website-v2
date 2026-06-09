// src/app/page.tsx
import React from 'react';
import { Typography } from '@/components/Typography';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary p-6 md:p-12 font-sans selection:bg-[#FF1900] selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Navigation & Brand Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-neutral-dark pb-6 gap-4">
          <div>
            <Typography variant="h1">
              Digital Sports Solutions
            </Typography>
            <Typography variant="caption" className="block mt-1">
              B2B Sports Technology Consulting
            </Typography>
          </div>
          <a 
            href="/design-system" 
            className="text-xs font-mono font-bold uppercase tracking-wider text-white bg-neutral-black hover:bg-neutral-medium hover:text-neutral-black px-3 py-2 rounded-md transition-all duration-fast"
          >
            Dev Sandbox ➔
          </a>
        </header>

        {/* Hero Section */}
        <section className="space-y-4 max-w-2xl">
          <Typography variant="h2" className="text-brand-peach">
            We bridge the gap between low-level hardware and real-time cloud software.
          </Typography>
          <Typography variant="body">
            DSS engineers bespoke embedded systems, low-latency Bluetooth Low Energy (BLE) infrastructure, and scalable mobile frameworks built to survive high-stress athletic tournament conditions.
          </Typography>
          <div className="pt-2">
            {/* FIXED FORCED INLINE BUTTON BACKGROUND */}
            <button className="bg-[#FF1900] hover:bg-[#FF5900] text-white px-6 py-3 rounded-md font-sans font-semibold text-sm shadow-md transition-colors duration-fast">
              Schedule Technical Discovery Call
            </button>
          </div>
        </section>

        {/* Highlighted Flagship Proof Component */}
        <section className="bg-bg-secondary p-6 rounded-lg border border-neutral-dark shadow-lg transition-all duration-normal ease-dss hover:shadow-hardware">
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-2 w-2 bg-[#FF1900] rounded-full animate-pulse" />
            <Typography variant="caption">
              Flagship Case Study Showcase
            </Typography>
          </div>
          <Typography variant="h3" className="mb-2">
            The tinyLeague™ IoT Scoreboard Ecosystem
          </Typography>
          <Typography variant="body" className="mb-4">
            Our end-to-end proprietary product suite featuring custom VHDL-designed RGB LED shotclocks natively paired over BLE to low-level mobile controller configurations. Battle-tested across 6 regional tournaments in official partnership with the National Collegiate Dodgeball Association (NCDA).
          </Typography>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-mono font-bold text-brand-peach bg-accent-subtle px-2.5 py-1 rounded-sm">Firmware (C/Asm)</span>
            <span className="text-xs font-mono font-bold text-brand-peach bg-accent-subtle px-2.5 py-1 rounded-sm">BLE Architecture</span>
            <span className="text-xs font-mono font-bold text-brand-peach bg-accent-subtle px-2.5 py-1 rounded-sm">Next.js Web Dashboards</span>
          </div>
        </section>

      </div>
    </main>
  );
}