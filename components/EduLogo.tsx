
import React from 'react';

interface EduLogoProps {
  className?: string;
}

export const EduLogo: React.FC<EduLogoProps> = ({ className = "" }) => {
  return (
    <svg 
      id="Layer_1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 159.62 159.6"
      className={className}
      aria-label="EDU Logo"
    >
      {/* Background Rect (Blue) */}
      <rect 
        fill="#00257d" 
        width="159.62" 
        height="159.62" 
      />
      
      {/* Text Group */}
      <text 
        transform="translate(29.88 89.87)" 
        fill="#f7f7f5" 
        style={{ 
          fontFamily: '"Akira Expanded", sans-serif', 
          fontSize: '33.8px', 
          fontWeight: 200 
        }}
      >
        <tspan letterSpacing=".2em" x="0" y="0">e</tspan>
        <tspan letterSpacing=".15em" x="34.98" y="0">d</tspan>
        <tspan letterSpacing=".1em" x="72.34" y="0">u</tspan>
      </text>
    </svg>
  );
};
