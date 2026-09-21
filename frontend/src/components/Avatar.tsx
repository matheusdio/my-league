import React from 'react';

interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Alternative text for image */
  alt?: string;
  /** Fallback text when image fails to load */
  fallback?: string;
  /** Size of the avatar */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Shape of the avatar */
  shape?: 'circle' | 'square';
  /** CSS class for styling */
  className?: string;
  /** All other props spread to the underlying element */
  [key: string]: any;
}

const Avatar: React.FC<AvatarProps> = ({ 
  src, 
  alt, 
  fallback,
  size = 'md',
  shape = 'circle',
  className = '',
  ...props 
}) => {
  // Size styles
  const sizeStyles: Record<string, string> = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-14 w-14',
  };

  // Shape styles
  const shapeStyles: Record<string, string> = {
    circle: 'rounded-full',
    square: 'rounded-md',
  };

  // Base styles
  const baseStyles = 'flex-shrink-0 overflow-hidden';

  // Fallback content
  const fallbackContent = fallback ? (
    <span className="flex h-full w-full items-center justify-center text-sm font-medium">
      {fallback}
    </span>
  ) : (
    <span className="flex h-full w-full items-center justify-center text-sm font-medium">
      {src ? alt?.charAt(0).toUpperCase() : '?'}
    </span>
  );

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${shapeStyles[shape]} ${className}`}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? ''}
          className="object-cover h-full w-full"
          onError={(e) => {
            // Fallback to initials if image fails
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
      ) : fallbackContent}
    </span>
  );
};

Avatar.displayName = 'Avatar';
export default Avatar;
