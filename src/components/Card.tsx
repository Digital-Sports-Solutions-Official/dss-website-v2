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

/**
 * Height is driven by content and equalised by the grid (`h-full`) rather than a
 * fixed min-height, which previously left a large dead gap above the CTA on mobile.
 */
const cardShell =
  'group flex h-full w-full flex-col justify-between rounded-2xl border border-[#2B2B2B] bg-[#202020] p-6 sm:p-7 md:p-8 outline-none transition-[border-color,box-shadow,transform] duration-200 hover:border-[#FD955D] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] focus-visible:border-[#FD955D] md:hover:-translate-y-0.5';

const bodyText =
  'font-sans text-[0.9375rem] font-normal leading-relaxed text-[#9C9C9C]';

const iconBadge =
  'mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2A1E18] transition-colors group-hover:bg-[#33251D]';

const tagPill =
  'mb-5 inline-flex w-fit items-center rounded-md border border-[#442B1F] bg-[#2A1E18] px-2.5 py-1';

function CardCta({ ctaText }: { ctaText?: string }) {
  return (
    <div className="mt-6 pt-4 border-t border-[#2B2B2B] transition-colors group-hover:border-[#3A3A3A]">
      <span className="inline-flex items-center font-mono text-xs font-bold tracking-wider text-[#FD955D] transition-colors group-hover:text-[#ffab7c]">
        {ctaText || 'Learn More'}
        <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </div>
  );
}

function CardIcon({ name }: { name?: string }) {
  switch (name) {
    case 'fa-microchip':
      return (
        <svg className="h-5 w-5 text-[#FD955D]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M19 19H5V5h14v14zM9 0h2v2H9V0zm4 0h2v2h-2V0zM0 9h2v2H0V9zm0 4h2v2H0v-2zm9 9h2v2H9v-2zm4 0h2v2h-2v-2zm6-9h2v2h-2V9zm0 4h2v2h-2v-2zM7 7v10h10V7H7zm8 8H9V9h6v6z" />
        </svg>
      );
    case 'fa-globe':
      return (
        <svg
          className="h-5 w-5 text-[#FD955D]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          />
        </svg>
      );
    case 'fa-chart-simple':
      return (
        <svg className="h-5 w-5 text-[#FD955D]" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M4 11h3v10H4zm6-7h3v17h-3zm6 11h3v6h-3z" />
        </svg>
      );
    default:
      return null;
  }
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
    return (
      <a href={href || '#'} className={cardShell}>
        <div className="flex flex-col">
          <span className={iconBadge}>
            <CardIcon name={icon} />
          </span>

          <h3 className="mb-3 font-sans text-lg font-bold tracking-tight text-white sm:text-xl">
            {title}
          </h3>
          <p className={bodyText}>{description}</p>
        </div>

        <CardCta ctaText={ctaText} />
      </a>
    );
  }

  // ==========================================
  // 2. OUR WORK VARIANT
  // ==========================================
  if (variant === 'work') {
    return (
      <a href={href || '#'} className={cardShell}>
        <div className="flex flex-col">
          {logoUrl && (
            <span className="mb-6 flex h-11 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl}
                alt={logoAlt || 'Logo'}
                className="block h-full w-auto max-w-[170px] object-contain object-left"
              />
            </span>
          )}

          {categoryTag && (
            <span className={tagPill}>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FD955D]">
                {categoryTag}
              </span>
            </span>
          )}

          <p className={bodyText}>{description}</p>
        </div>

        <CardCta ctaText={ctaText} />
      </a>
    );
  }

  // ==========================================
  // 3. CASE STUDY VARIANT
  // ==========================================
  if (variant === 'case-study') {
    return (
      <a href={href || '#'} className={cardShell}>
        <div className="flex flex-col">
          {categoryTag && (
            <span className={tagPill}>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FD955D]">
                {categoryTag}
              </span>
            </span>
          )}

          {title && (
            <h3 className="mb-3 font-sans text-lg font-bold tracking-tight text-white sm:text-xl">
              {title}
            </h3>
          )}

          <p className={bodyText}>{description}</p>
        </div>

        <CardCta ctaText={ctaText} />
      </a>
    );
  }

  // ==========================================
  // 4. TEAM VARIANT
  // ==========================================
  if (variant === 'team') {
    return (
      <div className={`${cardShell} hover:translate-y-0 md:hover:translate-y-0`}>
        <div className="flex flex-col">
          {title && (
            <h3 className="mb-2 font-sans text-lg font-bold tracking-tight text-white sm:text-xl">
              {title}
            </h3>
          )}
          {categoryTag && (
            <span className="mb-4 font-mono text-[10px] font-bold uppercase tracking-wider text-[#FD955D]">
              {categoryTag}
            </span>
          )}
          <p className={bodyText}>{description}</p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 5. FALLBACK
  // ==========================================
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border border-[#2B2B2B] bg-[#202020] p-6 sm:p-7 md:p-8">
      {title && (
        <h3 className="mb-3 font-sans text-lg font-bold tracking-tight text-white">{title}</h3>
      )}
      <p className={bodyText}>{description}</p>
    </div>
  );
}
