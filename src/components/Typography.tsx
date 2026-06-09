import React from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
}

const variantMapping: Record<TypographyVariant, string> = {
  h1: 'font-display text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight',
  h2: 'font-display text-xl md:text-2xl font-bold tracking-tight text-white leading-snug',
  h3: 'font-display text-lg md:text-xl font-semibold text-white leading-normal',
  h4: 'font-display text-base md:text-lg font-medium text-text-primary tracking-normal',
  body: 'font-sans text-sm md:text-base font-normal leading-relaxed text-text-secondary antialiased',
  caption: 'font-sans text-xs font-bold tracking-widest uppercase text-brand-peach',
};

const tagMapping: Record<TypographyVariant, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
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