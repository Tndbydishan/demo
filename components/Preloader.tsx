
'use client';

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import styles from './Preloader.module.css';

interface PreloaderProps {
  /** 
   * The SVG Logo to animate. 
   * MUST contain elements with classes: 'logo-shapes-group' and 'logo-text-group' 
   * for the animation to work correctly.
   */
  children: React.ReactNode;
  /** Callback function triggered when the exit animation is complete */
  onComplete?: () => void;
  /** Optional class name for the root container */
  className?: string;
}

export const Preloader: React.FC<PreloaderProps> = ({ 
  children, 
  onComplete, 
  className = '' 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useLayoutEffect(() => {
    // Scope GSAP to this component to avoid conflicts
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onCompleteRef.current) onCompleteRef.current();
        }
      });

      // --- INITIAL SETUP ---
      gsap.set(containerRef.current, { autoAlpha: 1 });
      
      // 1. Logo Geometry (Shapes)
      // Start Invisible, Centered, and Large
      gsap.set(".logo-shapes-group", { 
        autoAlpha: 0, 
        scale: 1.5,
        x: 145, // Approximation for centering; adjust based on SVG viewBox if needed
        transformOrigin: "center center",
        transformBox: "view-box" 
      });

      // 2. Logo Text
      // Hidden and shifted right initially
      gsap.set(".logo-text-group", { 
        autoAlpha: 0, 
        x: 40,
        transformBox: "fill-box"
      });

      // --- ANIMATION SEQUENCE ---

      // Step 1: Fade In Geometry
      tl.to(".logo-shapes-group", {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.out"
      });

      // Step 2: Brief Hold
      tl.to({}, { duration: 0.6 });

      // Step 3: Shrink to normal size
      tl.to(".logo-shapes-group", {
        scale: 1,
        duration: 1.0,
        ease: "power2.inOut"
      });

      // Step 4: Move Left (Formation) & Reveal Text
      tl.to(".logo-shapes-group", {
        x: 0,
        duration: 1.2,
        ease: "expo.inOut"
      }, "formation");

      tl.to(".logo-text-group", {
        autoAlpha: 1,
        x: 0,
        duration: 1.2,
        ease: "expo.inOut"
      }, "formation");

      // Step 5: Final Hold (Readability)
      tl.to({}, { duration: 0.7 });

      // Step 6: Exit Sequence
      // Logo fades out in place
      tl.to(logoWrapperRef.current, {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.in"
      });

      // Curtain lifts up
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 1.0,
        ease: "expo.inOut"
      }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []); 

  return (
    <div 
      ref={containerRef}
      className={`${styles['preloader-overlay']} ${className}`}
    >
      <div className={styles['preloader-content']}>
        <div ref={logoWrapperRef} className={styles['preloader-logo-wrapper']}>
          {children}
        </div>
      </div>
    </div>
  );
};