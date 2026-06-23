// components/Card.tsx
import React, { useState } from 'react';
import { Typography } from './Typography';

export type CardVariant = 'service' | 'case-study' | 'team' | 'services-preview';

interface CardProps {
  variant: CardVariant;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  tags?: string[];
  ctaText?: string;
  href?: string;
  avatarUrl?: string;
  imageUrl?: string;
}

export const Card: React.FC<CardProps> = ({
  variant,
  title,
  subtitle,
  description,
  icon,
  tags = [],
  ctaText,
  href,
  avatarUrl,
  imageUrl
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Fallback anchor routing safety
  const linkPath = href || '#';

  if (variant === 'services-preview') {
    return (
      <a
        href={linkPath}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-col justify-between w-full h-full rounded-xl overflow-hidden text-left decoration-0 focus:outline-none"
        style={{
          backgroundColor: '#2b2b2b',
          border: '1px solid #3c3c3c',
          padding: '32px 28px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
          transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s ease',
          borderColor: isHovered ? '#4a4a4a' : '#3c3c3c',
          minHeight: '340px'
        }}
      >
        {/* BRAND RED TOP ACCENT BAR - Animates from left to right on card hover */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '3px',
            backgroundColor: '#FF1900',
            width: '100%',
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* TOP INTERNAL LAYER: ICON & TEXT BLURB */}
        <div className="flex flex-col gap-y-5">
          {/* 50x50px Red-Tinted Icon Tile */}
          {icon && (
            <div 
              style={{ 
                height: '50px', 
                width: '50px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                backgroundColor: 'rgba(255, 25, 0, 0.1)', 
                borderRadius: '8px' 
              }} 
              aria-hidden="true"
            >
              <i className={`fa-solid ${icon}`} style={{ color: '#FF1900', fontSize: '20px' }} />
            </div>
          )}

          <div className="flex flex-col gap-y-3">
            <Typography 
              variant="h3" 
              className="text-white tracking-tight" 
              style={{ fontSize: '21px', fontWeight: '700', color: '#FAF9F6' }}
            >
              {title}
            </Typography>
            
            <p 
              className="text-[#AEAEAD] font-sans text-xs sm:text-sm font-medium leading-relaxed"
              style={{ color: '#AEAEAD', margin: 0 }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* BOTTOM INTERNAL LAYER: DIVIDER & CTA */}
        <div className="w-full mt-6">
          {/* Semantic Border Line */}
          <div className="w-full h-[1px] bg-[#3c3c3c] mb-4" aria-hidden="true" />
          
          <div 
            className="inline-flex items-center text-xs font-mono font-bold tracking-wider uppercase transition-colors"
            style={{ color: isHovered ? '#FD955D' : '#FF1900', fontSize: '11px' }}
          >
            {ctaText || 'Learn More'} 
            <span 
              className="ml-2 transition-transform duration-200" 
              style={{ transform: isHovered ? 'translateX(3px)' : 'translateX(0)' }}
            >
              →
            </span>
          </div>
        </div>
      </a>
    );
  }

  // Fallback layout legacy handlers left untouched to maintain backwards systems isolation
  return (
    <article style={{ backgroundColor: '#232323', border: '1px solid #3C3C3C', borderRadius: '8px', padding: '24px' }}>
      <Typography variant="h3" className="text-white">{title}</Typography>
      <Typography variant="body" style={{ color: '#D4D4D4' }}>{description}</Typography>
    </article>
  );
};