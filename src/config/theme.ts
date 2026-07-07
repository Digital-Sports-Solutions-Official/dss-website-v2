// src/config/theme.ts

export const DSS_TOKENS = {
  colors: {
    bg: {
      primary: '#232323',      // Base deep gray background
      secondary: '#171717',    // Pure dark footer/nav background
      card: '#1b1b1b',         // Translucent card base
      cardHover: '#2a2a2a',    // Elevated hover state surface
    },
    text: {
      light: '#FAF9F6',       // Off-white primary title text
      muted: '#AEAEAD',       // Mid-tone gray body content text
      disabled: '#525252',    // Deep slate text for minor metadata
    },
    brand: {
      orange: '#FD955D',      // Core interface highlight/accent text color
      red: '#FF1900',         // Call to action surface button color
    },
    border: {
      dark: '#232323',
      medium: '#3A3A3A',
      light: '#424b63',
    }
  },
  spacing: {
    sectionPt: 'clamp(48px, 8vw, 112px)',
    sectionPb: 'clamp(48px, 8vw, 112px)',
    gapDesktop: '32px',
    gapMobile: '16px',
  },
  transitions: {
    default: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  }
} as const;