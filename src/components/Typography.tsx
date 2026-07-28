import React from 'react';

export type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'bodyLarge'
  | 'caption';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

/**
 * Fluid type scale. Every size is clamped so it reads well from 320px up to
 * desktop without per-page breakpoint overrides.
 */
const variantMapping: Record<TypographyVariant, string> = {
  display:
    'font-display text-[clamp(1.875rem,6.5vw,3.5rem)] font-extrabold tracking-tight text-white leading-[1.12] text-balance',
  h1: 'font-display text-[clamp(1.75rem,6vw,3rem)] font-extrabold tracking-tight text-white leading-[1.15] text-balance',
  h2: 'font-display text-[clamp(1.625rem,5.5vw,2.875rem)] font-extrabold tracking-tight text-white leading-[1.15] text-balance',
  h3: 'font-display text-[clamp(1.125rem,3vw,1.375rem)] font-bold tracking-tight text-white leading-snug',
  h4: 'font-display text-base md:text-lg font-semibold text-white tracking-normal',
  body: 'font-sans text-[0.9375rem] md:text-base font-normal leading-relaxed text-[#D4D4D4]',
  bodyLarge: 'font-sans text-base md:text-lg font-normal leading-relaxed text-[#D4D4D4]',
  caption:
    'font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#FD955D]',
};

const tagMapping: Record<TypographyVariant, React.ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodyLarge: 'p',
  caption: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
}) => {
  const Component = tagMapping[variant];
  const combinedClasses = `${variantMapping[variant]} ${className}`.trim();

  return <Component className={combinedClasses}>{children}</Component>;
};
