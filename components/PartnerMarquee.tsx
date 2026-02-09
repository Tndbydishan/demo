
'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './PartnerMarquee.css';

export interface Partner {
  name: string;
  icon?: string;         
  logo?: string;         
  href?: string;         
  customWidth?: string;  
}

interface PartnerMarqueeProps {
  partners: Partner[];
  title?: string;
  showUnderline?: boolean;
  /** Duration of one full loop in seconds. Default: 20 */
  speed?: number;
  /** Gap between items. Default: '4rem' */
  gap?: string;
  /** Height of the logo items. Default: '80px' */
  height?: string;
  /** Vertical padding of the section. Default: '4rem 0' */
  padding?: string;
  className?: string;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ 
  partners, 
  title = "Official Education Partners",
  showUnderline = true,
  speed = 20,
  gap = "4rem",
  height = "80px",
  padding = "4rem 0",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // We duplicate the partners list to create the seamless loop effect.
  // Quadruple the list to ensure the track is long enough for wide screens
  // before the GSAP loop resets.
  const renderList = [...partners, ...partners, ...partners, ...partners]; 

  const renderPartner = (p: Partner, index: number) => {
    // Composite key for React list stability
    const key = `partner-${index}-${p.name.replace(/\s+/g, '-')}`;
    
    const content = (
      <>
        {p.logo ? (
          /* 
             CRITICAL ARCHITECTURE DECISION:
             Use standard <img> tag for marquees.
             1. next/image lazy loading breaks inside transform-translated containers.
             2. decoding="async" prevents main thread blocking during animation.
             3. loading="eager" forces network request immediately, fixing "pending" state.
          */
          <img 
            src={p.logo} 
            alt={`${p.name || 'Partner'} Logo`} 
            className="pm-partner-logo"
            draggable={false}
            loading="eager" 
            decoding="async"
            style={{ 
              width: p.customWidth ? p.customWidth : 'auto',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'contain'
            }}
          />
        ) : (
          <>
            {p.icon && <i className={`${p.icon} pm-partner-icon`}></i>}
            <span className="pm-partner-text">{p.name}</span>
          </>
        )}
      </>
    );

    const itemStyle = { height };

    if (p.href) {
      return (
        <a 
          key={key} 
          href={p.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pm-partner-item"
          style={itemStyle}
        >
          {content}
        </a>
      );
    }
    return (
      <div 
        key={key} 
        className="pm-partner-item"
        style={itemStyle}
      >
        {content}
      </div>
    );
  };

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // Logic: The list is quadrupled. We animate -50% (two full sets) and then loop.
      // This is smoother than -25% for very long lists and ensures no gap.
      gsap.to(track, { 
        xPercent: -50, 
        duration: speed, 
        ease: "none",
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, [partners, speed]); 

  return (
    <section 
      className={`pm-section ${className}`} 
      ref={containerRef}
      style={{ padding }}
    >
      
      {title && (
        <div className="pm-header">
          <h3 className="pm-title">{title}</h3>
          {showUnderline && <div className="pm-line"></div>}
        </div>
      )}
      
      <div className="pm-marquee-wrapper">
        <div 
          className="pm-track" 
          ref={trackRef}
          style={{ gap }}
        >
          {renderList.map((p, i) => renderPartner(p, i))}
        </div>
      </div>

    </section>
  );
};
