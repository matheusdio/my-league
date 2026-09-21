import React from 'react';

interface LoadingProps {
  /** Loading variant */
  variant?: 'spinner' | 'skeleton';
  /** Size of the loading element */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether skeleton should animate */
  animate?: boolean;
  /** Width of skeleton (for skeleton variant) */
  width?: string | number;
  /** Height of skeleton (for skeleton variant) */
  height?: string | number;
  /** CSS class for styling */
  className?: string;
  /** All other props */
  [key: string]: any;
}

const Loading: React.FC<LoadingProps> = ({ 
  variant = 'spinner', 
  size = 'md',
  animate = true,
  width,
  height,
  className = '',
  ...props 
}) => {
  // Size styles
  const sizeStyles: Record<string, string> = {
    xs: 'h-2 w-2',
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
    xl: 'h-6 w-6',
  };

  // Base styles
  const baseStyles = 'inline-block';

  // Spinner styles
  const spinnerStyles = 'border-2 border-primary/50 border-t-primary rounded-full';

  // Skeleton styles
  const skeletonBase = 'animate-pulse bg-muted/50 rounded';
  const skeletonStyles = animate ? `${skeletonBase} animate-skeleton` : skeletonBase;

  if (variant === 'spinner') {
    return (
      <span
        className={`${baseStyles} ${sizeStyles[size]} ${spinnerStyles} ${className}`}
        {...props}
      />
    );
  }

  // Skeleton variant
  return (
    <span
      className={`${baseStyles} ${skeletonStyles} ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      {...props}
    />
  );
};

Loading.displayName = 'Loading';
export default Loading;
