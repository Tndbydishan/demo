import React from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
  color?: string;
  disableLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className, color, disableLink }) => {
  const Component = disableLink ? 'div' : 'a';
  const props = disableLink ? {} : { href: "/", "aria-label": "Nav Home" };

  return (
    <Component 
      className={`${styles['nav-logo-link']} ${className || ''}`} 
      style={{ color: color || 'inherit' }} 
      {...props}
    >
      <svg 
        className={styles['nav-logo-svg']} 
        viewBox="0 0 417.18 72.17" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Text Group */}
        <g className="logo-text-group">
          {/* Text Group: AUTO */}
          <g transform="translate(124.23 31.08)" className={styles['nav-logo-text-group']}>
            <text>
              <tspan style={{ letterSpacing: '0em' }}>A</tspan>
              <tspan x="23.11" style={{ letterSpacing: '.13em' }}>U</tspan>
              <tspan x="47.37" style={{ letterSpacing: '.07em' }}>TO</tspan>
            </text>
          </g>

          {/* Text Group: EVOLUTION */}
          <g transform="translate(228.98 30.89)" className={styles['nav-logo-text-group']}>
            <text>
              <tspan style={{ letterSpacing: '.07em' }}>E</tspan>
              <tspan x="20.33" style={{ letterSpacing: '0em' }}>V</tspan>
              <tspan x="42.74" style={{ letterSpacing: '.13em' }}>O</tspan>
              <tspan x="66.93" style={{ letterSpacing: '.07em' }}>L</tspan>
              <tspan x="87.38" style={{ letterSpacing: '.13em' }}>U</tspan>
              <tspan x="111.64" style={{ letterSpacing: '.13em' }}>T</tspan>
              <tspan x="135.1" style={{ letterSpacing: '.11em' }}>I</tspan>
              <tspan x="142.57" style={{ letterSpacing: '.13em' }}>O</tspan>
              <tspan x="166.76" style={{ letterSpacing: '.07em' }}>N</tspan>
            </text>
          </g>

          {/* Text Group: WORKSHOP */}
          <g transform="translate(123.82 54.87)" className={styles['nav-logo-text-group']}>
            <text>
              <tspan style={{ letterSpacing: '.02em' }}>W</tspan>
              <tspan x="35.66" style={{ letterSpacing: '.13em' }}>O</tspan>
              <tspan x="59.85" style={{ letterSpacing: '.13em' }}>R</tspan>
              <tspan x="83.18" style={{ letterSpacing: '.02em' }}>K</tspan>
              <tspan x="104.78" style={{ letterSpacing: '.12em' }}>S</tspan>
              <tspan x="128.64" style={{ letterSpacing: '.14em' }}>H</tspan>
              <tspan x="153.13" style={{ letterSpacing: '.13em' }}>O</tspan>
              <tspan x="177.32" style={{ letterSpacing: '.07em' }}>P</tspan>
            </text>
          </g>
        </g>

        {/* Shapes Group */}
        <g className="logo-shapes-group">
          {/* Static Brand Color Accents (Red) */}
          <polygon className={styles['nav-logo-red']} points="36.68 72.17 52.89 72.17 72.65 25.54 56.44 25.55 36.68 72.17"/>
          <polygon className={styles['nav-logo-red']} points="88.12 46.63 104.34 46.63 124.1 0 107.89 0 88.12 46.63"/>
          <polygon className={styles['nav-logo-red']} points="76.98 25.06 93.2 25.05 78.83 58.98 62.61 58.98 76.98 25.06"/>

          {/* Dynamic Color Shapes (Inherits currentColor) */}
          <polygon className={styles['nav-logo-dynamic']} points="42.26 58.99 58.48 58.99 78.24 12.36 62.03 12.37 42.26 58.99"/>
          <polygon className={styles['nav-logo-dynamic']} points="82.89 58.98 99.11 58.98 118.87 12.35 102.65 12.35 82.89"/>
          <path className={styles['nav-logo-dynamic']} d="M22.04,59.02h16.03S57.83,12.4,57.83,12.4l-26.33-.27c-7.07-.07-13.48,4.14-16.23,10.66L0,59.03h16.15l14.91-35.12c.36-.85.92-1.59,1.64-2.17l6.02-4.61h1.08s-17.76,41.89-17.76,41.89Z"/>
        </g>
      </svg>
    </Component>
  );
};
