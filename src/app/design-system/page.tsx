// src/app/design-system/page.tsx
import React from 'react';
import { Typography } from '@/components/Typography';
import { Logo } from '@/components/Logo';

export default function DesignSystemPage() {
  const colors = [
    { name: 'Pure Red', hex: '#FF0000' },
    { name: 'Vibrant Orange', hex: '#FF1900' },
    { name: 'Burnt Orange', hex: '#FF5900' },
    { name: 'Peach Tint', hex: '#FD955D' },
    { name: 'Cream Canvas', hex: '#FBDECD' },
    { name: 'Off White', hex: '#FAF9F6' },
    { name: 'Light Gray', hex: '#D4D4D4' },
    { name: 'Charcoal', hex: '#3C3C3C' },
    { name: 'Pure Black', hex: '#232323' }
  ];

  return (
    <main className="min-h-screen bg-[#3C3C3C] text-[#FAF9F6] p-6 font-sans selection:bg-[#FF1900] selection:text-white">
      <div className="max-w-4xl mx-auto space-y-12">
        
        <header className="border-b border-[#232323] pb-4">
          <Typography variant="h1">DSS Design System</Typography>
          <Typography variant="caption" className="text-[#FD955D]">Route: /design-system</Typography>
        </header>

        {/* 1. COLOR PALETTE */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">1. Color Palette</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {colors.map((c) => (
              <div key={c.hex} className="p-2 bg-[#232323] rounded border border-[#3C3C3C] flex items-center space-x-3">
                <div className="w-10 h-10 rounded shadow-sm shrink-0" style={{ backgroundColor: c.hex }} />
                <div>
                  <Typography variant="h4" className="text-white text-sm">{c.name}</Typography>
                  <code className="text-xs text-[#D4D4D4] font-mono">{c.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. TYPOGRAPHY */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">2. Typography Variants</Typography>
          <div className="p-4 bg-[#232323] rounded border border-[#3C3C3C] space-y-4">
            <div><code className="text-xs text-[#FD955D]">variant="h1"</code> <Typography variant="h1">Consulting Frame</Typography></div>
            <div><code className="text-xs text-[#FD955D]">variant="h2"</code> <Typography variant="h2">Embedded Systems</Typography></div>
            <div><code className="text-xs text-[#FD955D]">variant="h3"</code> <Typography variant="h3">Low-Latency Data</Typography></div>
            <div><code className="text-xs text-[#FD955D]">variant="body"</code> <Typography variant="body">B2B sports tracking integrations built for athletic tournament conditions.</Typography></div>
            <div><code className="text-xs text-[#FD955D]">variant="caption"</code> <br/><Typography variant="caption">NODE-BLE-01</Typography></div>
          </div>
        </section>

        {/* 3. INTERACTIVE BUTTONS */}
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

        {/* 4. CARDS & ELEVATION */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">4. Core Asset Cards</Typography>
          <div className="bg-[#232323] p-6 rounded-lg border border-[#3C3C3C] shadow-md transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(255,25,0,0.3)] hover:-translate-y-1">
            <Typography variant="caption" className="text-[#FD955D] block mb-1">Interactive Sandbox Block</Typography>
            <Typography variant="h3" className="mb-2">The tinyLeague™ Scoreboard Ecosystem</Typography>
            <Typography variant="body" className="mb-4">Hover over this panel container zone to test your hardware orange drop shadow elevation.</Typography>
            <button className="bg-[#FF1900] hover:bg-[#FF5900] text-white px-4 py-2 rounded text-sm font-medium transition-colors">Run Hardware Test</button>
          </div>
        </section>

        {/* NEW SECTION 5: LOGO VARIANTS MATRIX */}
        <section className="space-y-4">
          <Typography variant="h2" className="border-l-4 border-[#FF1900] pl-2">5. Reusable Brand Logo Variants</Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Full-Color Audit Block */}
            <div className="p-4 bg-[#FAF9F6] rounded-lg border border-[#D4D4D4] flex flex-col items-center justify-between min-h-[140px] text-center">
              <Logo variant="full-color" width={160} height={40} />
              <div className="mt-2">
                <code className="text-[11px] text-[#3C3C3C] font-mono block font-bold">variant="full-color"</code>
                <span className="text-[10px] text-[#AEAEAD] font-sans">Context: Light/Off-White BG</span>
              </div>
            </div>

            {/* White Audit Block */}
            <div className="p-4 bg-[#232323] rounded-lg border border-[#111111] flex flex-col items-center justify-between min-h-[140px] text-center">
              <Logo variant="white" width={160} height={40} />
              <div className="mt-2">
                <code className="text-[11px] text-[#D4D4D4] font-mono block font-bold">variant="white"</code>
                <span className="text-[10px] text-[#AEAEAD] font-sans">Context: Dark Charcoal/Black BG</span>
              </div>
            </div>

            {/* Black Audit Block */}
            <div className="p-4 bg-[#D4D4D4] rounded-lg border border-[#AEAEAD] flex flex-col items-center justify-between min-h-[140px] text-center">
              <Logo variant="black" width={160} height={40} />
              <div className="mt-2">
                <code className="text-[11px] text-[#232323] font-mono block font-bold">variant="black"</code>
                <span className="text-[10px] text-[#3C3C3C] font-sans">Context: High-Contrast Light Matrix</span>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}