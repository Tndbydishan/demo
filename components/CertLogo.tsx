
import React from 'react';

interface CertLogoProps {
  className?: string;
}

export const CertLogo: React.FC<CertLogoProps> = ({ className }) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 305.99 89.21"
      className={className}
      aria-label="EDU Certified Technicians Logo"
    >
      {/* Group 1: The Blue Box and EDU Text */}
      <g className="cl-group-box">
        <rect fill="#00257d" width="89.23" height="89.21"/>
        <text 
          transform="translate(16.7 50.23)" 
          fill="#f7f7f5" 
          style={{ 
            fontFamily: '"Akira Expanded", sans-serif', 
            fontSize: '18.93px', 
            fontWeight: 700 
          }}
        >
          <tspan letterSpacing=".2em" x="0" y="0">e</tspan>
          <tspan letterSpacing=".15em" x="19.55" y="0">d</tspan>
          <tspan letterSpacing=".1em" x="40.44" y="0">u</tspan>
        </text>
      </g>
      
      {/* Group 2: The Certified Technicians Text */}
      <g className="cl-group-text">
        <text 
          transform="translate(110.92 41.66)"
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: '29.39px',
            fill: '#121212' // Defaulting to dark for visibility on light bg
          }}
        >
          <tspan letterSpacing=".15em" x="0" y="0">CE</tspan>
          <tspan letterSpacing=".14em" x="49.46" y="0">R</tspan>
          <tspan letterSpacing=".15em" x="74.94" y="0">TIFIED</tspan>
        </text>
        
        <text 
          transform="translate(113.27 70.46)"
          style={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 500,
            fontSize: '21.65px',
            fill: '#121212'
          }}
        >
          <tspan letterSpacing=".17em" x="0" y="0">T</tspan>
          <tspan letterSpacing=".17em" x="16.39" y="0">E</tspan>
          <tspan letterSpacing=".17em" x="34.56" y="0">CHNICIANS</tspan>
        </text>
      </g>
    </svg>
  );
};
