import React from 'react';

interface DSLogoProps {
  className?: string;
  size?: number | string;
  color?: string;
}

/**
 * DSLogo Component — Custom DS Monogram Logo (Diptangsu Sasmal)
 * Precise SVG vector representation of the brand mark.
 */
export const DSLogo: React.FC<DSLogoProps> = ({
  className = '',
  size = 28,
  color = 'currentColor',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DS Monogram Logo"
    >
      <g stroke={color} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer D Frame with bottom extended stroke */}
        <path d="M 24 86 L 60 86 C 78 86 90 72 90 50 C 90 28 78 14 60 14 L 38 14 C 36 14 36 16 36 20 L 36 86" />
        
        {/* Inner S Curve */}
        <path d="M 44 33 C 60 33 68 33 68 42 C 68 51 44 47 44 58 C 44 68 58 68 68 68" />
      </g>
    </svg>
  );
};

export default DSLogo;
