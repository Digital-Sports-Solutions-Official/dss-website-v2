// src/app/design-system/page.tsx
'use client';

import React, { useState } from 'react';
import { Typography } from '@/components/Typography';
import { Logo } from '@/components/Logo';
import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { Section, ContentContainer, LayoutPattern, SectionSpacing } from '@/components/LayoutPrimitives';

export default function DesignSystemPage() {
  // DEVTOOLS DIAGNOSTIC INTERACTIVE STATES
  const [activePadding, setActivePadding] = useState<SectionSpacing>('md');
  const [activeCanvasBg, setActiveCanvasBg] = useState<string>('#232323');
  const [columnToggle, setColumnToggle] = useState<number>(3);

  // Strict Design Token Token Mapping Matrix
  const colors = [
    { name: 'Pure Red', hex: '#FF0000', styleBg: '#FF0000' },
    { name: 'Vibrant Orange', hex: '#FF1900', styleBg: '#FF1900' },
    { name: 'Burnt Orange', hex: '#FF5900', styleBg: '#FF5900' },
    { name: 'Peach Tint', hex: '#FD955D', styleBg: '#FD955D' },
    { name: 'Cream Canvas', hex: '#FBDECD', styleBg: '#FBDECD' },
    { name: 'Off White', hex: '#FAF9F6', styleBg: '#FAF9F6' },
    { name: 'Light Gray', hex: '#D4D4D4', styleBg: '#D4D4D4' },
    { name: 'Charcoal', hex: '#3C3C3C', styleBg: '#3C3C3C' },
    { name: 'Pure Black', hex: '#232323', styleBg: '#232323' }
  ];

  return (
    <main className="min-h-screen bg-[#3C3C3C] text-[#FAF9F6] pt-24 p-6 selection:bg-[#FF1900] selection:text-white font-sans">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Core Dashboard Header */}
        <header className="border-b border-[#232323] pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <Typography variant="h1" className="mb-2">DSS Integrated Component Registry</Typography>
            <Typography variant="caption" className="text-[#FD955D] font-mono">Week 3 Deployment Validation System</Typography>
          </div>
          <div className="bg-[#232323] border border-[#3C3C3C] px-3 py-1.5 rounded text-[11px] font-mono text-[#AEAEAD] self-start md:self-auto">
            DevTools Mode: <span className="text-[#FF1900] font-bold">Active</span>
          </div>
        </header>

        {/* 🛠️ LIVE INTERACTIVE DEVTOOLS CONTROL CONSOLE */}
        <section className="p-6 bg-[#1A1A1A] rounded-lg border-2 border-[#FF1900]/40 space-y-6 shadow-xl">
          <div className="flex items-center gap-x-2 border-b border-[#3C3C3C] pb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF1900] animate-pulse" />
            <Typography variant="caption" className="text-[#FAF9F6] font-mono font-bold uppercase tracking-wider text-xs">
              Token Inspector & Sandbox Diagnostics Control Panel
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
            {/* Control A: Spacing Simulator */}
            <div className="flex flex-col gap-y-2">
              <span className="text-[#FD955D] font-bold">1. Section Vertical Rhythm</span>
              <div className="grid grid-cols-3 gap-2">
                {(['sm', 'md', 'lg'] as SectionSpacing[]).map((space) => (
                  <button
                    key={space}
                    onClick={() => setActivePadding(space)}
                    className="p-2 border uppercase font-bold rounded transition-all text-[11px]"
                    style={{
                      borderColor: activePadding === space ? '#FF1900' : '#3C3C3C',
                      backgroundColor: activePadding === space ? '#FF1900' : '#232323',
                      color: activePadding === space ? '#FFFFFF' : '#AEAEAD'
                    }}
                  >
                    {space}
                  </button>
                ))}
              </div>
            </div>

            {/* Control B: Color Canvas Background */}
            <div className="flex flex-col gap-y-2">
              <span className="text-[#FD955D] font-bold">2. Canvas Context Color</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Black', hex: '#232323' },
                  { label: 'Charcoal', hex: '#3C3C3C' },
                  { label: 'White', hex: '#FAF9F6' }
                ].map((bg) => (
                  <button
                    key={bg.hex}
                    onClick={() => setActiveCanvasBg(bg.hex)}
                    className="p-2 border font-bold rounded transition-all text-[11px]"
                    style={{
                      borderColor: activeCanvasBg === bg.hex ? '#FF1900' : '#3C3C3C',
                      backgroundColor: activeCanvasBg === bg.hex ? '#FF1900' : '#232323',
                      color: activeCanvasBg === bg.hex ? '#FFFFFF' : '#AEAEAD'
                    }}
                  >
                    {bg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control C: Grid Column Count */}
            <div className="flex flex-col gap-y-2">
              <span className="text-[#FD955D] font-bold">3. Card Responsiveness</span>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setColumnToggle(num)}
                    className="p-2 border font-bold rounded transition-all text-[11px]"
                    style={{
                      borderColor: columnToggle === num ? '#FF1900' : '#3C3C3C',
                      backgroundColor: columnToggle === num ? '#FF1900' : '#232323',
                      color: columnToggle === num ? '#FFFFFF' : '#AEAEAD'
                    }}
                  >
                    {num} {num === 1 ? 'Col' : 'Cols'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1. COLOR TOKENS MAP (Enforced Native Color Rendering) */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">1. Color Palette Tokens</Typography>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="p-3 bg-[#232323] rounded-lg border border-[#3C3C3C] flex items-center space-x-4">
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '4px',
                    backgroundColor: c.styleBg,
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.15)',
                    flexShrink: 0
                  }} 
                />
                <div>
                  <Typography variant="h4" className="text-white text-sm font-semibold m-0">{c.name}</Typography>
                  <code className="text-xs text-[#FD955D] font-mono mt-0.5 block">{c.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. TYPOGRAPHY MATRIX (Clean Montserrat Verification Scaling) */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">2. Typography Scale</Typography>
          <div className="p-6 bg-[#232323] rounded-lg border border-[#3C3C3C] space-y-6">
            <div className="border-b border-[#3C3C3C]/60 pb-4">
              <code className="text-xs text-[#FD955D] font-mono block mb-1">variant="h1" (Montserrat Bold 32px / 1.2)</code> 
              <Typography variant="h1">Consulting Frame Header</Typography>
            </div>
            <div className="border-b border-[#3C3C3C]/60 pb-4">
              <code className="text-xs text-[#FD955D] font-mono block mb-1">variant="h2" (Montserrat Semibold 24px / 1.3)</code> 
              <Typography variant="h2">Embedded Firmware Systems</Typography>
            </div>
            <div className="border-b border-[#3C3C3C]/60 pb-4">
              <code className="text-xs text-[#FD955D] font-mono block mb-1">variant="h3" (Montserrat Medium 20px / 1.4)</code> 
              <Typography variant="h3">Low-Latency Data Networks</Typography>
            </div>
            <div className="border-b border-[#3C3C3C]/60 pb-4">
              <code className="text-xs text-[#FD955D] font-mono block mb-1">variant="body" (Montserrat Regular 14px / 1.6)</code> 
              <Typography variant="body">B2B sports tracking integrations built for athletic tournament conditions. Real-time telemetry ingestion pipelines mapping hardware fields cleanly.</Typography>
            </div>
            <div>
              <code className="text-xs text-[#FD955D] font-mono block mb-1">variant="caption" (Montserrat Monospace Monitored 12px / Tracking Wide)</code> 
              <Typography variant="caption">NODE-BLE-01 // TELEMETRY_ONLINE</Typography>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE ACTIONS */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">3. Interactive Buttons</Typography>
          <div className="p-6 bg-[#232323] rounded border border-[#3C3C3C] space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-[#FF1900] hover:bg-[#FF5900] text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors">Small CTA</button>
              <button className="bg-[#FF1900] hover:bg-[#FF5900] text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors">Medium Default</button>
              <button className="bg-[#FF1900] hover:bg-[#FF5900] text-white px-7 py-3.5 rounded text-base font-bold transition-colors">Large Scale</button>
            </div>
            <div className="flex flex-wrap items-center gap-4 border-t border-[#3C3C3C] pt-4">
              <button className="bg-[#232323] border border-[#3C3C3C] hover:border-[#AEAEAD] text-white px-4 py-2 rounded text-sm transition-all">Secondary</button>
              <button className="bg-transparent border-2 border-[#FF1900] text-[#FF1900] hover:bg-[#FF1900] hover:text-white px-4 py-2 rounded text-sm font-bold transition-all">Ghost Link</button>
              <button className="bg-[#331111] text-[#FD955D] px-4 py-2 rounded text-sm border border-[#FF5900]/20 opacity-50 cursor-not-allowed" disabled>Disabled State</button>
            </div>
          </div>
        </section>

        {/* 4. HEADER INTERACTION PROFILE */}
        <section style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">4. Navigation Interaction Layer (Week 3 Live)</Typography>
          <div style={{ backgroundColor: '#232323', borderRadius: '8px', border: '1px solid #4A4A4A', padding: '24px', display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
            <Typography variant="caption" className="text-[#FD955D] font-mono">Performance Audit Parameters</Typography>
            <p className="text-xs text-[#D4D4D4] leading-relaxed margin-0">Scroll the browser viewport or adjust window widths to verify real-time opacity shifts and mobile hamburger morph configurations seamlessly.</p>
          </div>
        </section>

        {/* 5. BRAND VECTOR SAMPLES */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">5. Reusable Brand Logo Variants</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FAF9F6] rounded-lg border border-[#D4D4D4] flex flex-col items-center justify-between min-h-[140px] text-center">
              <Logo variant="full-color" width={160} height={40} />
              <code className="text-[11px] text-[#3C3C3C] font-mono block font-bold mt-2">variant="full-color"</code>
            </div>
            <div className="p-4 bg-[#232323] rounded-lg border border-[#111111] flex flex-col items-center justify-between min-h-[140px] text-center">
              <Logo variant="white" width={160} height={40} />
              <code className="text-[11px] text-[#D4D4D4] font-mono block font-bold mt-2">variant="white"</code>
            </div>
            <div className="p-4 bg-[#D4D4D4] rounded-lg border border-[#AEAEAD] flex flex-col items-center justify-between min-h-[140px] text-center">
              <Logo variant="black" width={160} height={40} />
              <code className="text-[11px] text-[#232323] font-mono block font-bold mt-2">variant="black"</code>
            </div>
          </div>
        </section>

        {/* 6. RESPONSIVE COMPONENT PANEL TILES (CONNECTED TO LIVE INSPECTOR STATES) */}
        <section style={{ display: 'flex', flexDirection: 'column', rowGap: '24px', paddingTop: '24px', borderTop: '1px solid #232323' }}>
          <div>
            <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">6. Reusable Card Family Blueprint</Typography>
            <Typography variant="caption" className="text-[#AEAEAD] font-mono block mt-1">
              Live Inspector Canvas (Currently rendering in <span className="text-[#FF1900] font-bold">{columnToggle} Column Grid</span>)
            </Typography>
          </div>

          {/* DYNAMIC DESIGN SYSTEM TESTING GRID */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: `repeat(${columnToggle}, minmax(0, 1fr))`, 
              gap: '24px',
              backgroundColor: activeCanvasBg,
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #3C3C3C',
              transition: 'all 0.3s ease'
            }}
          >
            <Card 
              variant="service"
              icon="fa-microchip"
              title="IoT Hardware Firmware Architecture"
              subtitle="Embedded Systems Tier"
              description="Custom low-level system designs in VHDL and micro-controller assembly code tracking active athletic metadata fields cleanly."
              ctaText="Request Tech Capabilities"
            />

            <Card 
              variant="case-study"
              imageUrl="/assets/case-tinyleague-preview.jpg"
              subtitle="National Dodgeball Association (NDA)"
              title="The tinyLeague™ Low-Latency Scoreboard System"
              description="Constructed an end-to-end proprietary protocol suite natively paired over BLE to low-level controller units. Reduced signal transmission latency down to 4.2ms across 6 regional match deployments."
              tags={['Firmware (C)', 'BLE Protocol', 'Next.js Router']}
              ctaText="Review Case Architecture"
            />

            <Card 
              variant="team"
              title="Alex Rivera"
              subtitle="Principal Embedded Systems Engineer"
              description="Former Digital Logic Lab researcher at OSU specialized in ultra-low latency FPGA firmware design matrices and BLE token tracking maps over athletic tournament bounds."
            />
          </div>
        </section>

        {/* 7. LAYOUT PRIMITIVES UTILITY ACCESSIBILITY SANDBOX (CONNECTED TO LIVE INSPECTOR STATES) */}
        <section style={{ display: 'flex', flexDirection: 'column', rowGap: '24px', paddingTop: '24px', borderTop: '1px solid #232323' }}>
          <div>
            <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">7. Layout Primitives Framework Matrix</Typography>
            <Typography variant="caption" className="text-[#AEAEAD] font-mono block mt-1">
              Visual Verification (Currently simulating <span className="text-[#FF1900] font-bold">"{activePadding}" spacing</span>)
            </Typography>
          </div>

          {/* DYNAMIC PADDING SIMULATOR ELEMENT */}
          <Section spacing={activePadding} className="bg-[#232323] rounded-lg border border-[#3C3C3C] overflow-hidden">
            <ContentContainer>
              <div className="p-6 border border-dashed border-[#FF1900]/40 rounded bg-[#FF1900]/5 text-center">
                <Typography variant="h3" className="text-white" style={{ fontSize: '15px', margin: 0 }}>
                  Active Section Primitive Box Frame
                </Typography>
                <p className="text-xs text-[#AEAEAD] mt-1 font-mono">
                  Padding dimensions are currently shifting in real-time under state processing logic loop directives.
                </p>
              </div>
            </ContentContainer>
          </Section>

          <div style={{ backgroundColor: '#232323', borderRadius: '8px', border: '1px solid #3C3C3C', overflow: 'hidden', marginTop: '12px' }}>
            <div style={{ padding: '12px 16px', backgroundColor: '#1A1A1A', borderBottom: '1px solid #3C3C3C' }}>
              <Typography variant="caption" className="text-[#FD955D] font-mono font-bold">Layout Primitive Specifications Matrix</Typography>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px', fontFamily: 'monospace' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #3C3C3C', color: '#AEAEAD' }}>
                    <th style={{ padding: '12px 16px' }}>Primitive Name</th>
                    <th style={{ padding: '12px 16px' }}>Properties Scope</th>
                    <th style={{ padding: '12px 16px' }}>Constraint Definition</th>
                    <th style={{ padding: '12px 16px' }}>Structural Strategy</th>
                  </tr>
                </thead>
                <tbody style={{ color: '#D4D4D4' }}>
                  <tr style={{ borderBottom: '1px solid #232323' }}>
                    <td style={{ padding: '12px 16px', color: '#FD955D', fontWeight: 'bold' }}>PageWrapper</td>
                    <td style={{ padding: '12px 16px' }}>className?: string</td>
                    <td style={{ padding: '12px 16px' }}>w-full min-h-screen</td>
                    <td style={{ padding: '12px 16px' }}>Provides outer structural scaffolding and locks footers flush to the baseline.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #232323' }}>
                    <td style={{ padding: '12px 16px', color: '#FD955D', fontWeight: 'bold' }}>Section</td>
                    <td style={{ padding: '12px 16px' }}>spacing?: 'sm' | 'md' | 'lg'</td>
                    <td style={{ padding: '12px 16px' }}>32px / 64px / 128px y-axis</td>
                    <td style={{ padding: '12px 16px' }}>Establishes high-fidelity vertical rhythm consistency across marketing rows.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #232323' }}>
                    <td style={{ padding: '12px 16px', color: '#FD955D', fontWeight: 'bold' }}>ContentContainer</td>
                    <td style={{ padding: '12px 16px' }}>className?: string</td>
                    <td style={{ padding: '12px 16px' }}>max-w-6xl (1152px) mx-auto</td>
                    <td style={{ padding: '12px 16px' }}>Centers viewports and standardizes safety tracking margins recursively.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', color: '#FD955D', fontWeight: 'bold' }}>LayoutPattern</td>
                    <td style={{ padding: '12px 16px' }}>variant: 'grid' | 'flex-row' | 'flex-split'</td>
                    <td style={{ padding: '12px 16px' }}>Responsive Flex/Grid Resizing</td>
                    <td style={{ padding: '12px 16px' }}>Safeguards content stacks from breaking bounds across breakpoints.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. MASTER ACCESSIBILITY SCHEDULER AUDIT */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">8. Core Accessibility & Layout Audit Matrix</Typography>
          <div className="border border-[#232323] rounded-lg bg-[#232323] overflow-hidden shadow-md">
            <div className="grid grid-cols-3 bg-black p-3 text-xs font-mono font-bold text-[#D4D4D4] border-b border-[#3C3C3C]">
              <div>Audit Scope Matrix</div>
              <div>Standard Framework</div>
              <div>Component Compliance Strategy</div>
            </div>
            <div className="divide-y divide-[#3C3C3C] text-xs font-mono">
              <div className="grid grid-cols-3 p-3 items-center">
                <span className="text-[#FD955D] font-bold">Contrast Levels</span>
                <span className="text-[#AEAEAD]">WCAG 2.1 AA Compliant</span>
                <span className="text-white">Text colors pass 4.5:1 strict verification checks against dark secondary canvases.</span>
              </div>
              <div className="grid grid-cols-3 p-3 items-center">
                <span className="text-[#FD955D] font-bold">Keyboard Navigation</span>
                <span className="text-[#AEAEAD]">Tab Focus Management</span>
                <span className="text-white">All buttons, anchors, and active inputs inherit high-visibility glowing orange focus-visible vectors.</span>
              </div>
              <div className="grid grid-cols-3 p-3 items-center">
                <span className="text-[#FD955D] font-bold">Screen Readers</span>
                <span className="text-[#AEAEAD]">ARIA Roles & Labels</span>
                <span className="text-white">Semantic navigation tags, page landmarks, dynamic state parameters, and descriptions are live.</span>
              </div>
              <div className="grid grid-cols-3 p-3 items-center">
                <span className="text-[#FD955D] font-bold">Viewport Reflow</span>
                <span className="text-[#AEAEAD]">Responsive Layout Shift</span>
                <span className="text-white">Grid nodes collapse into isolated columns to guard against horizontal overlap.</span>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* GLOBAL FOOTER TESTING ELEMENT */}
      <div className="border-t border-[#232323] mt-24 pt-4">
        <Typography variant="caption" className="text-center block text-[#AEAEAD] font-mono text-[10px] mb-2">
          Global Layout System Render Environment — Previewing Global Footer Attachment
        </Typography>
        <Footer />
      </div>
    </main>
  );
}