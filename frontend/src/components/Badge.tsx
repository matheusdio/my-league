import React from 'react';

interface BadgeProps {
  /** Badge variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  /** Whether badge should be outline style */
  outline?: boolean;
  /** CSS class for styling */
  className?: string;
  /** All other props spread to the underlying element */
  [key: string]: any;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  outline = false,
  className = '',
  ...props 
}) => {
  // Variant styles
  const variantStyles: Record<string, string> = {
    default: 'bg-muted text-muted-foreground',
    primary: outline 
      ? 'border border-primary text-primary hover:bg-primary/10' 
      : 'bg-primary text-primary-foreground',
    secondary: outline 
      ? 'border border-secondary text-secondary hover:bg-secondary/10' 
      : 'bg-secondary text-secondary-foreground',
    success: outline 
      ? 'border border-success text-success hover:bg-success/10' 
      : 'bg-success text-success-foreground',
    warning: outline 
      ? 'border border-warning text-warning hover:bg-warning/10' 
      : 'bg-warning text-warning-foreground',
    error: outline 
      ? 'border border-error text-error hover:bg-error/10' 
      : 'bg-error text-error-foreground',
    info: outline 
      ? 'border border-info text-info hover:bg-info/10' 
      : 'bg-info text-info-foreground',
  };

  // Base styles
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-all';

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};

Badge.displayName = 'Badge';
export default Badge;
