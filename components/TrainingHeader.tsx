
'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { EduLogo } from './EduLogo';
import './TrainingHeader.css';

interface TrainingHeaderProps {
  imageSrc?: string;
  className?: string;
}

export const TrainingHeader: React.FC<TrainingHeaderProps> = ({ 
  imageSrc = "https://images.unsplash.com/photo-1530046339160-711535b94977?q=80&w=2940&auto=format&fit=crop",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // --- INITIAL SETUP ---
      gsap.set('.th-img-container', { clipPath: 'inset(0 100% 0 0)' });
      gsap.set('.th-img-scale', { scale: 1.3 });
      gsap.set('.th-text-reveal', { y: '110%', skewY: 7 }); 
      gsap.set('.th-kicker-line', { width: 0 });
      
      // --- ANIMATION SEQUENCE ---

      // 1. Background
      tl.to('.th-bg-layer', { opacity: 1, duration: 1 });
      
      // 2. Image Reveal (Cinematic Wipe)
      tl.to('.th-img-container', { 
        clipPath: 'inset(0 0% 0 0)', 
        duration: 1.4, 
        ease: 'expo.inOut' 
      }, 0);
      
      // Zoom Out Effect
      tl.to('.th-img-scale', { 
        scale: 1, 
        duration: 1.8, 
        ease: 'power2.out' 
      }, 0);

      // 3. Content Panel Fade In
      tl.fromTo('.th-content-panel',
        { x: -30, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 1 },
        '-=1.2'
      );

      // 4. Kicker
      tl.fromTo('.th-kicker-text', 
        { autoAlpha: 0, x: -10 },
        { autoAlpha: 1, x: 0, duration: 0.6 },
        '-=0.8'
      );

      // 5. Text Reveal (Slide Up + Unskew)
      tl.to('.th-text-reveal', { 
        y: '0%', 
        skewY: 0,
        duration: 1.2, 
        stagger: 0.1, 
        ease: 'power4.out' 
      }, '-=0.7');
      
      // 6. Secondary Content
      tl.fromTo('.th-fade-in', 
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08 },
        '-=0.8'
      );

      // 7. Compact Badge Snappy Entrance
      if (badgeRef.current) {
        tl.fromTo(badgeRef.current,
          { scale: 0.5, autoAlpha: 0, transformOrigin: 'bottom left' },
          { scale: 1, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.5'
        );
        
        // Continuous Floating Animation
        gsap.to(badgeRef.current, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1 // Start floating after entrance
        });
      }

    }, containerRef);
    
    // --- PARALLAX INTERACTION ---
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientWidth, clientHeight } = containerRef.current;
      const xPos = (e.clientX / clientWidth) - 0.5;
      const yPos = (e.clientY / clientHeight) - 0.5;

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: xPos * -25, 
          y: yPos * -25,
          duration: 1.5,
          ease: 'power2.out'
        });
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      ctx.revert();
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className={`th-wrapper ${className}`} ref={containerRef}>
      
      {/* Background Layer with Giant Text */}
      <div className="th-bg-layer">
        <div className="th-grid-pattern"></div>
        <div className="th-giant-text">ACADEMY</div>
      </div>

      <div className="th-layout">
        
        {/* Left: Content Panel */}
        <div className="th-content-panel">
           
           {/* Brand Header */}
           <div className="th-brand-header th-fade-in">
              <EduLogo className="th-logo-small" />
              <div className="th-brand-divider"></div>
              <span className="th-brand-text">ACADEMY DIVISION</span>
           </div>

           {/* Kicker */}
           <div className="th-kicker-wrapper">
             <span className="th-kicker-text">The Most Advanced Learning Hub in BD</span>
           </div>

           {/* Masked Main Title */}
           <h1 className="th-main-title">
             <div className="th-line-mask">
               <span className="th-text-reveal">Automotive</span>
             </div>
             <div className="th-line-mask">
               <span className="th-text-reveal th-outline-text">Engineering</span>
             </div>
             <div className="th-line-mask">
               <span className="th-text-reveal">Mastery</span>
             </div>
           </h1>

           {/* Description */}
           <p className="th-desc th-fade-in">
             Master the complexities of modern vehicle systems. 
             Our OEM-certified curriculum bridges the gap between 
             <strong>theoretical physics</strong> and <strong>hands-on diagnostics</strong>.
           </p>

           {/* Technical Stats */}
           <div className="th-stats-grid th-fade-in">
             <div className="th-stat">
               <span className="th-stat-num">03</span>
               <span className="th-stat-lbl">Campuses</span>
             </div>
             <div className="th-stat-border"></div>
             <div className="th-stat">
               <span className="th-stat-num">100%</span>
               <span className="th-stat-lbl">Placement</span>
             </div>
           </div>
        </div>

        {/* Right: Visual Panel */}
        <div className="th-visual-panel">
          <div className="th-img-container">
             <img 
               ref={imageRef}
               src={imageSrc} 
               alt="Training Workshop" 
               className="th-img-scale"
             />
             <div className="th-img-overlay"></div>
          </div>

          {/* Compact Professional Badge */}
          <div className="th-compact-badge" ref={badgeRef}>
             <div className="th-radar-icon">
               <div className="th-radar-pulse"></div>
               <div className="th-radar-dot"></div>
             </div>
             <div className="th-badge-text-group">
               <span className="th-badge-status-sm">Admissions Open</span>
               <span className="th-badge-year-sm">BATCH 2026</span>
             </div>
             <div className="th-badge-arrow">
               <i className="ri-arrow-right-up-line"></i>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
