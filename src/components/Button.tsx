import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Base structural layout styles (handling focus rings for keyboard navigation)
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold rounded-md transition-all duration-fast ease-dss focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  // Variant design token mapping (WCAG AA Contrast Validated)
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-brand-orange text-neutral-white hover:bg-brand-burnt active:bg-brand-burnt focus-visible:ring-brand-orange',
    secondary: 'bg-neutral-black text-neutral-white hover:bg-neutral-dark active:bg-neutral-dark focus-visible:ring-neutral-black',
    ghost: 'bg-transparent text-text-primary hover:bg-neutral-light focus-visible:ring-neutral-medium border border-transparent hover:border-neutral-medium',
  };

  // Size increments mapping
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-xs px-3 py-1.5 h-8',
    md: 'text-sm px-4 py-2 h-10',
    lg: 'text-base px-6 py-3 h-12',
  };

  const combinedClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `.trim();

  return (
    <button 
      className={combinedClasses} 
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};