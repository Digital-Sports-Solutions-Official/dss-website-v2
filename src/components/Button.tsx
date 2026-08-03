// components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  disabled?: boolean;
  'aria-label'?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  'aria-label': ariaLabel,
  className = ''
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium focus:outline-none transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'w-full py-3.5 px-6 rounded-xl text-white font-semibold shadow-lg shadow-orange-950/40 bg-gradient-to-r from-[#D95B32] via-[#C85228] to-[#B6451E] hover:from-[#EA6538] hover:to-[#C85228] hover:shadow-orange-600/20 hover:-translate-y-0.5',
    secondary:
      'py-3 px-6 rounded-xl text-[#FD955D] bg-[#000000]/35 border border-[#FD955D]/30 hover:bg-[#FF1900] hover:border-[#FF1900] hover:text-white hover:-translate-y-0.5',
    ghost:
      'py-2 px-4 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={combinedClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};