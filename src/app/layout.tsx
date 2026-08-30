// src/app/layout.tsx
import './globals.css';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Digital Sports Solutions',
  description: 'Custom Digital Tools Built to Make Your Organization Stand Out.',
  icons: {
    icon: '/assets/logo-color.svg', // Maps to public/assets/logo-color.svg
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // `.variable` defines --font-montserrat, which tailwind's `font-sans` and the
  // typography rules in globals.css reference. Without it that variable is
  // undefined and every one of those rules silently falls back to inheritance.
  return (
    <html lang="en" className={`${montserrat.variable} ${montserrat.className}`}>
      <head>
        <link 
          rel="icon" 
          type="image/svg+xml" 
          href="/assets/logo-color.svg" 
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className="bg-[#3C3C3C] text-[#FAF9F6] min-h-screen flex flex-col justify-between font-sans">
        
        <Navigation />

        <div className="flex-grow">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}