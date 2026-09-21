import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  children,
}) => {
  // Variant styles
  const variantStyles: Record<string, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
    outline: 'border border-primary text-primary hover:bg-primary/10',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  // Size styles
  const sizeStyles: Record<string, string> = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-base font-medium',
    lg: 'h-11 px-5 text-lg font-medium',
  };

  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded-md gap-2 transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

  // Loading spinner
  const loadingIndicator = isLoading ? (
    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary/50 border-t-primary"></span>
  ) : null;

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || isLoading}
    >
      {loadingIndicator}
      {children}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
