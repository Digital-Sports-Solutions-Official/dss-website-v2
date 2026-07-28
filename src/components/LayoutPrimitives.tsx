import React from 'react';

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

export type SectionSpacing = 'sm' | 'md' | 'lg';

interface SectionProps {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, spacing = 'md', id, className = '' }) => {
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-16 md:py-20',
    lg: 'py-24 md:py-32',
  };

  return (
    <section 
      id={id}
      className={`w-full ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </section>
  );
};

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {
  return (
    <div 
      className={`mx-auto w-full max-w-[1152px] px-6 sm:px-8 md:px-12 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
};

interface LayoutPatternProps {
  children: React.ReactNode;
  variant: 'grid' | 'flex-row' | 'flex-split';
  className?: string;
}

export const LayoutPattern: React.FC<LayoutPatternProps> = ({ children, variant, className = '' }) => {
  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ${className}`}>
        {children}
      </div>
    );
  }

  if (variant === 'flex-split') {
    return (
      <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 ${className}`}>
      {children}
    </div>
  );
};