
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CertLogo } from './CertLogo';
import styles from './TechnicianCertification.module.css';

gsap.registerPlugin(ScrollTrigger);

export const TechnicianCertification: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5
            }
          }
        );
      }

      // --- 2. Main Entrance Timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%', // Slightly earlier trigger
          toggleActions: 'play none none reverse'
        }
      });

      // A. Visual Side (Left) - Elastic Scale In
      tl.fromTo(logoRef.current,
        { scale: 0.9, y: 30, autoAlpha: 0 },
        { scale: 1, y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }
      );

      // B. Floating Badge - Slide In & Pop
      tl.fromTo(badgeRef.current,
        { x: -30, autoAlpha: 0, scale: 0.8 },
        { x: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: 'back.out(1.5)' },
        '-=0.7'
      );

      // C. Content Side (Right) - Cascading Reveal
      const contentChildren = contentRef.current?.children;
      if (contentChildren) {
        tl.fromTo(contentChildren,
          { y: 20, autoAlpha: 0 },
          { 
            y: 0, 
            autoAlpha: 1, 
            duration: 0.6, 
            stagger: 0.08, 
            ease: 'power2.out' 
          },
          '-=0.5'
        );
      }

      // D. Spec Cards - Optimized 3D Reveal
      // Reduced rotationX and duration for smoother (less laggy) feel
      const cards = cardsRef.current?.children;
      if (cards) {
        tl.fromTo(cards,
          { y: 30, autoAlpha: 0, rotationX: 15, transformOrigin: "top center" },
          { 
            y: 0, 
            autoAlpha: 1, 
            rotationX: 0, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: 'back.out(1.2)' 
          },
          '-=0.3'
        );
      }

      // --- 3. Continuous "Alive" Animation for Badge ---
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1.5
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['tc-section']} ref={sectionRef}>
      {/* Decorative Background Text */}
      <div className={styles['tc-watermark']} ref={watermarkRef}>CERTIFIED</div>

      <div className={styles['tc-container']}>
        <div className={styles['tc-grid']}>
          
          {/* LEFT: Visual Identity */}
          <div className={styles['tc-visual-col']}>
             <div className={styles['tc-logo-wrapper']} ref={logoRef}>
               <CertLogo className={styles['tc-logo-svg']} />
             </div>
             
             {/* Floating Badge */}
             <div className={styles['tc-floating-stat']} ref={badgeRef}>
                <div className={styles['tc-stat-icon']}>
                  <i className="ri-shield-check-fill"></i>
                </div>
                <div className={styles['tc-stat-text']}>
                   <span className={styles['tc-stat-label']}>Official Standard</span>
                   <span className={styles['tc-stat-value']}>OEM COMPLIANT</span>
                </div>
             </div>
          </div>

          {/* RIGHT: Content */}
          <div className={styles['tc-content-col']}>
             <div className={styles['tc-content-wrapper']} ref={contentRef}>
               
               {/* 1. Header Group */}
               <div className={styles['tc-header-group']}>
                  <span className={styles['tc-pre-title']}>Engineering Division</span>
                  <h2 className={styles['tc-headline']}>
                    FACTORY LEVEL <br/>
                    <span className={styles['tc-highlight']}>MASTERY</span>
                  </h2>
               </div>

               {/* 2. Description */}
               <p className={styles['tc-description']}>
                 We don't just fix cars; we engineer solutions. Our <strong>EDU Division</strong> produces factory-level technicians rigorously trained in advanced diagnostics, hybrid architecture, and precision repair protocols.
               </p>

               {/* 3. Specs Grid (Ref separated for stagger) */}
               <div className={styles['tc-specs-list']} ref={cardsRef}>
                  <div className={styles['tc-spec-card']}>
                     <i className="ri-global-line"></i>
                     <div className={styles['tc-spec-info']}>
                       <h4>Euro / JDM</h4>
                       <span>Certified Expert</span>
                     </div>
                  </div>
                  <div className={styles['tc-spec-card']}>
                     <i className="ri-flashlight-fill"></i>
                     <div className={styles['tc-spec-info']}>
                       <h4>Hybrid / EV</h4>
                       <span>High Voltage</span>
                     </div>
                  </div>
                  <div className={styles['tc-spec-card']}>
                     <i className="ri-settings-6-fill"></i>
                     <div className={styles['tc-spec-info']}>
                       <h4>Diagnostics</h4>
                       <span>Level 4 Logic</span>
                     </div>
                  </div>
               </div>

               {/* 4. CTA */}
               <div className={styles['tc-cta-row']}>
                  <a href="/training" className={styles['tc-link']}>
                    Explore Academy <i className="ri-arrow-right-line"></i>
                  </a>
               </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
