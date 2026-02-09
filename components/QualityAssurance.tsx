
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OemStandardLogo } from './OemStandardLogo';
import { OemQualityLogo } from './OemQualityLogo';
import styles from './QualityAssurance.module.css';

gsap.registerPlugin(ScrollTrigger);

export const QualityAssurance: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- Watermark Parallax ---
      if (watermarkRef.current) {
        gsap.fromTo(watermarkRef.current, 
          { y: -50 },
          { 
            y: 100, 
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          }
        );
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });

      // 1. Left Column (Identity)
      if (leftColRef.current) {
        tl.fromTo(leftColRef.current.children, 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }

      // 2. Feature Cards
      if (featuresRef.current) {
        tl.fromTo(featuresRef.current.children,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.2)' },
          '-=0.4'
        );
      }

      // 3. Stamp Reveal
      if (stampRef.current) {
        tl.fromTo(stampRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['qa-section']} ref={sectionRef}>
      
      {/* Decorative Watermark */}
      <div className={styles['qa-watermark']} ref={watermarkRef}>QUALITY</div>

      {/* Decorative vertical line */}
      <div className={styles['qa-bg-line']}></div>

      <div className={styles['qa-container']}>
        <div className={styles['qa-grid']}>
          
          {/* LEFT COLUMN: BRAND IDENTITY */}
          <div className={styles['qa-identity-col']} ref={leftColRef}>
            <div className={styles['qa-label']}>Service Protocols</div>
            
            {/* SVG 1: Main Brand Mark */}
            <div className="w-full">
               <OemStandardLogo className={styles['qa-main-logo']} />
            </div>

            <h2 className={styles['qa-headline']}>
              ZERO <br/> <span>COMPROMISE</span>
            </h2>
            
            <p className={styles['qa-description']}>
              Quality isn't an act, it's a habit. We enforce strict OEM protocols ensuring every bolt, sensor, and diagnostic reading is verified against manufacturer specifications.
            </p>
          </div>

          {/* RIGHT COLUMN: PILLARS */}
          <div className={styles['qa-pillars-col']}>
            
            <div className={styles['qa-features-list']} ref={featuresRef}>
              
              {/* Card 1 */}
              <div className={styles['qa-card']}>
                <i className={`ri-qr-scan-2-line ${styles['qa-card-icon']}`}></i>
                <h3 className={styles['qa-card-title']}>Digital Audit</h3>
                <p className={styles['qa-card-text']}>
                  Every vehicle undergoes a 50-point digital health check. Reports are generated instantly and shared via cloud link.
                </p>
              </div>

              {/* Card 2 */}
              <div className={styles['qa-card']}>
                <i className={`ri-settings-5-line ${styles['qa-card-icon']}`}></i>
                <h3 className={styles['qa-card-title']}>Genuine Parts</h3>
                <p className={styles['qa-card-text']}>
                  We strictly use OEM or equivalent Tier-1 supplier parts (Bosch, Denso, NGK) to maintain factory warranties.
                </p>
              </div>

              {/* Card 3 */}
              <div className={styles['qa-card']}>
                <i className={`ri-shield-keyhole-line ${styles['qa-card-icon']}`}></i>
                <h3 className={styles['qa-card-title']}>Data Integrity</h3>
                <p className={styles['qa-card-text']}>
                  ECU mapping and coding are backed up on secure servers. Your vehicle's digital footprint is safe with us.
                </p>
              </div>

              {/* Card 4 */}
              <div className={styles['qa-card']}>
                <i className={`ri-checkbox-circle-line ${styles['qa-card-icon']}`}></i>
                <h3 className={styles['qa-card-title']}>Final Inspection</h3>
                <p className={styles['qa-card-text']}>
                  A 3-stage quality check by a Master Technician is mandatory before any vehicle is released to the client.
                </p>
              </div>

            </div>

            {/* STAMP OF APPROVAL (SVG 2) */}
            <div className={styles['qa-stamp-wrapper']} ref={stampRef}>
               <div className={styles['qa-stamp-container']}>
                  <span className={styles['qa-stamp-label']}>
                    Authorized Service Center Protocol
                  </span>
                  <OemQualityLogo className={styles['qa-secondary-logo']} />
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};