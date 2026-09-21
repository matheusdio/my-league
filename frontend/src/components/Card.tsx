import React from 'react';

interface CardProps {
  /** Card variant */
  variant?: 'default' | 'elevated';
  /** Whether card has header */
  header?: React.ReactNode;
  /** Whether card has footer */
  footer?: React.ReactNode;
  /** CSS class for styling */
  className?: string;
  /** All other props spread to the underlying element */
  [key: string]: any;
}

const Card: React.FC<CardProps> = ({ 
  variant = 'default', 
  header,
  footer,
  className = '',
  ...props 
}) => {
  // Variant styles
  const variantStyles: Record<string, string> = {
    default: 'bg-background border border-border',
    elevated: 'bg-background border border-border shadow-sm hover:shadow-md transition-shadow',
  };

  // Base styles
  const baseStyles = 'rounded-lg overflow-hidden';

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {header && <div className="border-b border-border px-6 py-4">{header}</div>}
      <div className="px-6 py-4">{props.children}</div>
      {footer && <div className="border-t border-border px-6 py-4">{footer}</div>}
    </div>
  );
};

Card.displayName = 'Card';
export default Card;
