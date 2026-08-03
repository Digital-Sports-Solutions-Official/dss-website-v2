import React from 'react';

/**
 * The single horizontal gutter for the whole site. Only ContentContainer (or a
 * component explicitly documented as a container) may apply it — nesting two
 * gutters is what previously squeezed mobile content to ~279px on a 375px screen.
 */
export const PAGE_GUTTER = 'px-5 sm:px-8 lg:px-12';

/** Standard reading/content width. Wide pages opt in via ContentContainer's `size`. */
export const CONTENT_WIDTHS = {
  prose: 'max-w-[720px]',
  default: 'max-w-[1152px]',
  wide: 'max-w-[1400px]',
} as const;

export type ContentWidth = keyof typeof CONTENT_WIDTHS;

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`w-full min-h-screen flex flex-col justify-between bg-[#3C3C3C] text-[#FAF9F6] ${className}`}
      style={{ minHeight: '100dvh' }}
    >
      {children}
    </div>
  );
};

export type SectionSpacing = 'none' | 'sm' | 'md' | 'lg';

/** Vertical rhythm scale. Mobile stays tighter so pages don't feel padded apart. */
const SECTION_SPACING: Record<SectionSpacing, string> = {
  none: '',
  sm: 'py-10 sm:py-12 md:py-16',
  md: 'py-14 sm:py-20 md:py-24',
  lg: 'py-20 sm:py-28 md:py-32',
};

interface SectionProps {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

/** A full-bleed band. Never apply horizontal padding here — nest a ContentContainer. */
export const Section: React.FC<SectionProps> = ({
  children,
  spacing = 'md',
  id,
  className = '',
}) => {
  return (
    <section id={id} className={`w-full ${SECTION_SPACING[spacing]} ${className}`}>
      {children}
    </section>
  );
};

interface ContentContainerProps {
  children: React.ReactNode;
  size?: ContentWidth;
  className?: string;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  size = 'default',
  className = '',
}) => {
  return (
    <div className={`mx-auto w-full ${CONTENT_WIDTHS[size]} ${PAGE_GUTTER} ${className}`}>
      {children}
    </div>
  );
};

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  align?: 'left' | 'center';
  accent?: 'red' | 'orange';
  className?: string;
  eyebrowClassName?: string;
}

/** Eyebrow + heading pairing used at the top of nearly every section. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  align = 'left',
  accent = 'orange',
  className = '',
  eyebrowClassName = '',
}) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  
  // FIXED: orange -> #FD955D, red -> #FF1900
  const accentColor = accent === 'red' ? 'text-[#FF1900]' : 'text-[#FD955D]';

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span
          className={`${accentColor} font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-3 ${eyebrowClassName}`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-sans font-extrabold tracking-tight text-[#FAF9F6] text-[clamp(1.625rem,5.5vw,2.875rem)] leading-[1.15] text-balance">
        {title}
      </h2>
    </div>
  );
};

interface LayoutPatternProps {
  children: React.ReactNode;
  variant: 'grid' | 'flex-row' | 'flex-split';
  className?: string;
}

export const LayoutPattern: React.FC<LayoutPatternProps> = ({
  children,
  variant,
  className = '',
}) => {
  if (variant === 'grid') {
    return (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 ${className}`}
      >
        {children}
      </div>
    );
  }

  if (variant === 'flex-split') {
    return (
      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

/** Bare divider rule. Use inside an existing ContentContainer. */
export const Rule: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`h-px w-full bg-gradient-to-r from-transparent via-[#FF1900]/30 to-transparent ${className}`}
  />
);

/** Divider for use between top-level sections; brings its own gutter. */
export const SectionDivider: React.FC<{ width?: ContentWidth }> = ({ width = 'wide' }) => (
  <ContentContainer size={width}>
    <Rule />
  </ContentContainer>
);