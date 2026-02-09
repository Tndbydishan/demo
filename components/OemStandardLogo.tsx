
import React from 'react';

interface Props {
  className?: string;
}

export const OemStandardLogo: React.FC<Props> = ({ className }) => {
  return (
    <svg 
      id="Layer_1" 
      data-name="Layer 1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 391.7 60.04" 
      className={className}
      aria-label="OEM Standard Certified"
    >
      <defs>
        <style>{`
          .osl-cls-1{letter-spacing:.11em;}
          .osl-cls-2{letter-spacing:-.04em;}
          .osl-cls-3{letter-spacing:.21em;}
          .osl-cls-4{letter-spacing:.17em;}
          .osl-cls-5{letter-spacing:.27em;}
          .osl-cls-6{letter-spacing:.08em;}
          .osl-cls-7{letter-spacing:.22em;}
          .osl-cls-8{letter-spacing:.17em;}
          .osl-cls-9{letter-spacing:.22em;}
          .osl-cls-10{letter-spacing:.27em;}
          .osl-cls-11{letter-spacing:.15em;}
          .osl-cls-12{fill:#231f20;font-size:21.71px;}
          .osl-cls-12,.osl-cls-13{font-family: "Akira Expanded", sans-serif;font-weight:700;}
          .osl-cls-14{letter-spacing:.15em;}
          .osl-cls-15{letter-spacing:.15em;}
          .osl-cls-16{letter-spacing:.25em;}
          .osl-cls-17{letter-spacing:.21em;}
          .osl-cls-13{fill:#d02028;font-size:54.28px;}
          .osl-cls-18{letter-spacing:.28em;}
          .osl-cls-19{letter-spacing:.23em;}
        `}</style>
      </defs>
      <text className="osl-cls-13" transform="translate(0 46.15)">
        <tspan className="osl-cls-3" x="0" y="0">O</tspan>
        <tspan className="osl-cls-16" x="62.51" y="0">E</tspan>
        <tspan className="osl-cls-14" x="121.3" y="0">M</tspan>
      </text>
      <text className="osl-cls-12" transform="translate(205.52 25.71)">
        <tspan className="osl-cls-1" x="0" y="0">S</tspan>
        <tspan className="osl-cls-2" x="22.83" y="0">T</tspan>
        <tspan className="osl-cls-15" x="41.79" y="0">A</tspan>
        <tspan className="osl-cls-18" x="67.1" y="0">N</tspan>
        <tspan className="osl-cls-6" x="93.71" y="0">D</tspan>
        <tspan className="osl-cls-11" x="116.09" y="0">A</tspan>
        <tspan className="osl-cls-17" x="141.4" y="0">R</tspan>
        <tspan className="osl-cls-11" x="165.57" y="0">D</tspan>
      </text>
      <text className="osl-cls-12" transform="translate(204.88 48.7)">
        <tspan className="osl-cls-9" x="0" y="0">C</tspan>
        <tspan className="osl-cls-10" x="25.22" y="0">E</tspan>
        <tspan className="osl-cls-8" x="49.18" y="0">R</tspan>
        <tspan className="osl-cls-19" x="72.52" y="0">T</tspan>
        <tspan className="osl-cls-10" x="97.25" y="0">I</tspan>
        <tspan className="osl-cls-7" x="107.94" y="0">F</tspan>
        <tspan className="osl-cls-5" x="130.89" y="0">IE</tspan>
        <tspan className="osl-cls-4" x="165.53" y="0">D</tspan>
      </text>
    </svg>
  );
};
