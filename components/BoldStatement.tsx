
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './BoldStatement.module.css';

gsap.registerPlugin(ScrollTrigger);

export const BoldStatement: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- 1. Parallax Watermark (Scrub) ---
      if (watermarkRef.current) {
        gsap.fromTo(watermarkRef.current, 
          { y: -50 },
          { 
            y: 100, 
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          }
        );
      }

      // --- 2. Main Entrance Animation ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // Text Reveal
      tl.fromTo(headlineRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );

      // Description Reveal
      tl.fromTo(textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
        '-=0.6'
      );

      // Strike Line Animation (finding the strike element)
      const strikeLine = containerRef.current?.querySelector(`.${styles['bs-strike-line']}`);
      if (strikeLine) {
        tl.fromTo(strikeLine, 
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'expo.inOut', transformOrigin: 'left center' },
          '-=0.8'
        );
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['bs-section']} ref={containerRef}>
      <div className={styles['bs-container']}>
        
        <div className={styles['bs-content-grid']}>
          {/* HEADLINE COLUMN */}
          <div className={styles['bs-headline-wrapper']}>
            <span className={styles['bs-label']}>Universal Compatibility</span>
            <h2 className={styles['bs-headline']} ref={headlineRef}>
              WE SUPPORT <br />
              <span className={styles['bs-strike-wrapper']}>
                MULTI
                <span className={styles['bs-strike-line']}></span>
              </span>
              <span className={styles['bs-highlight']}> ALL BRANDS</span>
            </h2>
          </div>

          {/* DESCRIPTION COLUMN */}
          <div className={styles['bs-text-wrapper']}>
            <p className={styles['bs-description']} ref={textRef}>
              At <strong style={{ color: '#121212' }}>Auto Evolution</strong>, we transcend the limitations of traditional mechanics. 
              Merging proprietary diagnostic technology with master craftsmanship, we deliver precision care for every badge on the road. 
              From JDM legends to European exotics, we are the <span style={{ color: '#D12027' }}>future</span> of automotive engineering.
            </p>
            
            <div className={styles['bs-badges']}>
              <div className={styles['bs-badge']}>
                <i className="ri-cpu-line"></i>
                <span>Advanced Diagnostics</span>
              </div>
              <div className={styles['bs-badge']}>
                <i className="ri-settings-4-line"></i>
                <span>OEM Compliance</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Decorative Background Text */}
      <div className={styles['bs-bg-text']} ref={watermarkRef}>EVOLUTION</div>
    </section>
  );
};
