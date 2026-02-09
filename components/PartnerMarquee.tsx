
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
  // [Set 1] [Set 2 (Clone)]
  const baseList = [...partners, ...partners]; 
  const renderList = [...baseList, ...baseList]; // Double again for smoother seamless logic on wide screens

  const renderPartner = (p: Partner, index: number) => {
    const content = (
      <>
        {p.logo ? (
          <img 
            src={p.logo} 
            alt={`${p.name} Logo`} 
            className="pm-partner-logo"
            // Important: prevent dragging to not interfere with scroll events
            draggable={false}
            // CRITICAL FIX: Animated marquees break lazy loading detection.
            // We must force eager loading to ensure the browser requests the image immediately.
            loading="eager"
            style={{ 
              width: p.customWidth ? p.customWidth : 'auto',
              maxHeight: '100%' 
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

    const key = `partner-${index}-${p.name}`;
    
    // Wrapper style for individual items
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
      // 1. Setup the Infinite Animation
      // We animate x from 0 to -50% (because the track contains exactly 2 copies of the base list logic)
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
