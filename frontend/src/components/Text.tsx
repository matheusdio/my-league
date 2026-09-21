import React from 'react';

interface TextProps {
  /** Variant of the text */
  variant?: 'display' | 'heading' | 'title' | 'body' | 'label' | 'caption';
  /** CSS class for styling */
  className?: string;
  /** All other props spread to the underlying element */
  [key: string]: any;
}

const Text: React.FC<TextProps> = ({ 
  variant = 'body', 
  className = '',
  ...props 
}) => {
  // Variant styles
  const variantStyles: Record<string, string> = {
    display: 'text-3xl font-bold tracking-tighter',
    heading: 'text-2xl font-semibold tracking-tight',
    title: 'text-xl font-semibold',
    body: 'text-base font-normal',
    label: 'text-sm font-medium text-text-secondary',
    caption: 'text-xs font-normal text-text-secondary',
  };

  return (
    <span
      className={`${variantStyles[variant]} ${className}`}
      {...props}
    />
  );
};

Text.displayName = 'Text';
export default Text;
