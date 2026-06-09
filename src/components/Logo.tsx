// components/Logo.tsx
import React from 'react';
import Image from 'next/image';

export type LogoVariant = 'full-color' | 'white' | 'black';

interface LogoProps {
  variant?: LogoVariant;
  width?: number;
  height?: number;
  className?: string;
}

const assetMapping: Record<LogoVariant, string> = {
  'full-color': '/assets/logo-color.svg',
  'white': '/assets/logo-white.svg',
  'black': '/assets/logo-black.svg',
};

const altTextMapping: Record<LogoVariant, string> = {
  'full-color': 'Digital Sports Solutions Corporate Logo',
  'white': 'Digital Sports Solutions Corporate Logo (White High-Contrast Variant)',
  'black': 'Digital Sports Solutions Corporate Logo (Black Monochrome Variant)',
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full-color',
  width = 180,
  height = 45,
  className = '',
}) => {
  return (
    <div className={`relative inline-block select-none ${className}`}>
      <Image
        src={assetMapping[variant]}
        alt={altTextMapping[variant]}
        width={width}
        height={height}
        priority
        className="object-contain"
      />
    </div>
  );
}