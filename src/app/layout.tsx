import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

// 1. Configure Inter (Primary Font)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // CSS variable name to use in Tailwind
});

// 2. Configure Montserrat (Secondary Font)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', // CSS variable name to use in Tailwind
});

export const metadata: Metadata = {
  title: 'Next.js 14 App',
  description: 'Configured with Google Fonts and Lucide Icons',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Inject the font variables into the body className */}
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}