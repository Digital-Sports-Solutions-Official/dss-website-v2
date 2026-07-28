import React from 'react';

interface CardProps {
  variant: 'services-preview' | 'work' | 'case-study' | 'team';
  icon?: string;
  title?: string;
  description: string;
  ctaText?: string;
  href?: string;
  logoUrl?: string;
  logoAlt?: string;
  categoryTag?: string;
}

export function Card({
  variant,
  icon,
  title,
  description,
  ctaText,
  href,
  logoUrl,
  logoAlt,
  categoryTag,
}: CardProps) {
  
  // ==========================================
  // 1. SERVICES PREVIEW VARIANT
  // ==========================================
  if (variant === 'services-preview') {
    const renderIconSvg = (iconName?: string) => {
      switch (iconName) {
        case 'fa-microchip':
          return (
            <svg className="w-5 h-5 text-[#FD955D]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h14v14zM9 0h2v2H9V0zm4 0h2v2h-2V0zM0 9h2v2H0V9zm0 4h2v2H0v-2zm9 9h2v2H9v-2zm4 0h2v2h-2v-2zm6-9h2v2h-2V9zm0 4h2v2h-2v-2zM7 7v10h10V7H7zm8 8H9V9h6v6z" />
            </svg>
          );
        case 'fa-globe':
          return (
            <svg className="w-5 h-5 text-[#FD955D]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          );
        case 'fa-chart-simple':
          return (
            <svg className="w-5 h-5 text-[#FD955D]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 11h3v10H4zm6-7h3v17h-3zm6 11h3v6h-3z" />
            </svg>
          );
        default:
          return null;
      }
    };

    return (
      <a 
        href={href || '#'} 
        className="group flex flex-col justify-between bg-[#202020] border border-[#2B2B2B] rounded-xl pt-8 md:pt-10 px-8 md:px-10 pb-12 md:pb-14 w-full min-h-[460px] transition-all duration-200 hover:border-[#FD955D] hover:scale-[1.01] cursor-pointer outline-none focus-visible:border-[#FD955D]"
      >
        <div>
          <div className="w-11 h-11 rounded-xl bg-[#2A1E18] flex items-center justify-center mb-11 transition-colors group-hover:bg-[#33251D]">
            {renderIconSvg(icon)}
          </div>
          
          <h3 className="text-white text-xl font-bold font-sans tracking-tight mb-4">
            {title}
          </h3>
          <p className="text-[#989898] text-[14px] font-sans font-normal leading-relaxed mb-3">
            {description}
          </p>
        </div>

        <div>
          <div className="w-full h-[1px] bg-[#2B2B2B] group-hover:bg-[#363636]" />
          <span className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-[#FD955D] group-hover:text-[#ffab7c] transition-colors pt-3.5">
            {ctaText || 'Learn More'} →
          </span>
        </div>
      </a>
    );
  }

  // ==========================================
  // 2. OUR WORK VARIANT
  // ==========================================
  if (variant === 'work') {
    return (
      <a 
        href={href || '#'} 
        className="group flex flex-col justify-between bg-[#202020] border border-[#2B2B2B] rounded-xl pt-8 md:pt-10 px-8 md:px-10 pb-12 md:pb-14 w-full min-h-[460px] transition-all duration-200 hover:border-[#FD955D] hover:scale-[1.01] cursor-pointer outline-none focus-visible:border-[#FD955D]"
      >
        <div>
          {/* Increased margin beneath the logo container to mb-11 */}
          {logoUrl && (
            <div className="h-14 w-auto flex items-end mb-11">
              <img 
                src={logoUrl} 
                alt={logoAlt || 'Logo'} 
                className="h-11 w-auto object-contain max-w-[180px]" 
              />
            </div>
          )}

          {/* Increased margin beneath the capsule badge container to mb-11 */}
          {categoryTag && (
            <div className="inline-block bg-[#2A1E18] border border-[#442B1F] rounded-md px-2.5 py-1 mb-11">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FD955D]">
                {categoryTag}
              </span>
            </div>
          )}
          
          <p className="text-[#989898] text-[14px] font-sans font-normal leading-relaxed mb-3">
            {description}
          </p>
        </div>

        <div>
          <div className="w-full h-[1px] bg-[#2B2B2B] group-hover:bg-[#363636]" />
          <span className="inline-flex items-center text-xs font-mono font-bold tracking-wider text-[#FD955D] group-hover:text-[#ffab7c] transition-colors pt-3.5">
            {ctaText || 'Learn More'} →
          </span>
        </div>
      </a>
    );
  }

  // ==========================================
  // 3. FALLBACK DEFAULT VARIANT
  // ==========================================
  return (
    <div className="flex flex-col justify-between bg-[#202020] border border-[#2B2B2B] rounded-xl p-8 w-full h-full">
      <div>
        <p className="text-[#D4D4D4] text-sm font-sans font-normal leading-relaxed mb-6">{description}</p>
      </div>
    </div>
  );
}