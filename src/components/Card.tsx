// components/Card.tsx
import React from 'react';
import { Typography } from './Typography';

export type CardVariant = 'service' | 'case-study' | 'team';

interface CardProps {
  variant: CardVariant;
  title: string;
  subtitle?: string;
  description: string;
  icon?: string;
  tags?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
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
  onCtaClick,
  avatarUrl,
  imageUrl
}) => {
  return (
    <section 
      aria-label={`${variant === 'team' ? 'Team Member Profile' : variant === 'case-study' ? 'Case Study' : 'Service Capability'}: ${title}`}
      style={{
        backgroundColor: '#232323',
        border: '1px solid #3C3C3C',
        borderRadius: '8px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        transform: 'translateY(0)',
        transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'rgba(255, 89, 0, 0.35)';
        e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(255, 25, 0, 0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = '#3C3C3C';
        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px', flexGrow: 1, marginBottom: '20px' }}>
        {variant === 'case-study' && (
          <div 
            style={{ 
              width: '100%', 
              aspectRatio: '16 / 9',
              borderRadius: '6px', 
              backgroundColor: '#1A1A1A', 
              backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid #3C3C3C',
              marginBottom: '4px',
              overflow: 'hidden'
            }} 
            aria-hidden="true"
          />
        )}

        {variant === 'service' && icon && (
          <div 
            style={{ height: '40px', width: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255, 25, 0, 0.1)', borderRadius: '6px', marginBottom: '4px' }}
            aria-hidden="true"
          >
            <i className={`fa-solid ${icon}`} style={{ color: '#FF1900', fontSize: '18px' }} />
          </div>
        )}

        {variant === 'team' && (
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '16px', marginBottom: '4px' }}>
            <div 
              style={{ 
                height: '56px', 
                width: '56px', 
                borderRadius: '50%', 
                backgroundColor: '#3C3C3C', 
                backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '2px solid #4A4A4A',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} 
              aria-hidden="true"
            >
              {!avatarUrl && <i className="fa-solid fa-user" style={{ color: '#AEAEAD', fontSize: '20px' }} />}
            </div>
            <div>
              <Typography variant="h3" className="text-white" style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>{title}</Typography>
              {subtitle && <Typography variant="caption" className="text-[#FD955D] block font-mono" style={{ fontSize: '11px', marginTop: '2px' }}>{subtitle}</Typography>}
            </div>
          </div>
        )}

        {variant !== 'team' && (
          <div>
            {subtitle && (
              <Typography variant="caption" className="text-[#FD955D] block font-mono tracking-widest mb-1">
                {variant === 'case-study' ? `Client: ${subtitle}` : subtitle}
              </Typography>
            )}
            <Typography variant="h3" className="text-white" style={{ margin: 0, fontSize: variant === 'case-study' ? '18px' : '20px' }}>
              {title}
            </Typography>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '6px' }}>
          {variant === 'case-study' && (
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#AEAEAD', textTransform: 'uppercase' }} aria-hidden="true">
              Project Performance Outcome:
            </span>
          )}
          <Typography variant="body" style={{ color: '#D4D4D4', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
            {description}
          </Typography>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
        {variant === 'case-study' && tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }} aria-label="Project technology stack tokens">
            {tags.map((tag) => (
              <span 
                key={tag}
                style={{
                  fontSize: '11px',
                  fontFamily: 'monospace',
                  fontWeight: '700',
                  color: '#FD955D',
                  backgroundColor: 'rgba(255, 25, 0, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 89, 0, 0.15)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {variant !== 'team' && ctaText && (
          <button
            onClick={onCtaClick}
            className="focus:outline-none transition-all"
            aria-label={`${ctaText} for ${title}`}
            style={{
              width: '100%',
              backgroundColor: '#232323',
              border: '1px solid #3C3C3C',
              color: '#FAF9F6',
              padding: '10px 16px',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '11px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FF1900';
              e.currentTarget.style.borderColor = '#FF1900';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#232323';
              e.currentTarget.style.borderColor = '#3C3C3C';
              e.currentTarget.style.color = '#FAF9F6';
            }}
          >
            {ctaText} ➔
          </button>
        )}
      </div>
    </section>
  );
};