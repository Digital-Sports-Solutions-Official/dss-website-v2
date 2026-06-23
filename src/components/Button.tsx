// components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  'aria-label'?: string; // Corrected to valid lowercase hyphenated HTML binding standard
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'ghost',
  'aria-label': ariaLabel,
  className = ''
}) => {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center focus:outline-none transition-all duration-300 transform hover:-translate-y-0.5 rounded ${className}`}
      style={{
        borderColor: 'rgba(253, 149, 93, 0.3)',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: '#FD955D',
        padding: '12px 24px',
        borderWidth: '1px',
        borderStyle: 'solid'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#FF1900';
        e.currentTarget.style.backgroundColor = '#FF1900';
        e.currentTarget.style.color = '#FFFFFF';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(253, 149, 93, 0.3)';
        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.35)';
        e.currentTarget.style.color = '#FD955D';
      }}
    >
      {children}
    </a>
  );
};