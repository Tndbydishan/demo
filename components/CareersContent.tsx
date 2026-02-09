
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CareersContent.module.css';

gsap.registerPlugin(ScrollTrigger);

export const CareersContent: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Story Animation
      gsap.from('.cc-story-anim', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.cc-story-block',
          start: 'top 80%'
        }
      });

      // Internship Animation
      gsap.from('.cc-intern-content', {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.cc-intern-grid',
          start: 'top 75%'
        }
      });

      gsap.from('.cc-intern-visual', {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.cc-intern-grid',
          start: 'top 75%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['cc-section']} ref={containerRef}>
      <div className={styles['cc-container']}>
        
        {/* 1. Our Story */}
        <div className={styles['cc-story-block']}>
          <div className={styles['cc-watermark']}>HERITAGE</div>
          <span className={`${styles['cc-label']} cc-story-anim`}>Who We Are</span>
          <h2 className={`${styles['cc-headline']} cc-story-anim`}>
            Craftsmanship. Precision. Progress.
          </h2>
          <p className={`${styles['cc-text']} cc-story-anim`}>
            At Auto Evolution, our history is built on technical excellence, ethical service, and respect for engineering. We are more than a workshop—we are a place where skills are refined, knowledge is shared, and careers are built with purpose. Every vehicle we service reflects our standards—precision, accountability, and continuous improvement.
          </p>
        </div>

        {/* 2. Internship Program */}
        <div className={styles['cc-intern-grid']}>
          <div className="cc-intern-content">
            <h2 className={styles['cc-intern-title']}>
              Learn & <span>Grow</span>
            </h2>
            <p className={styles['cc-text']}>
              We believe mastery is developed, not rushed. Our Internship Program is designed for individuals who want to build a strong technical foundation. Internships are structured, supervised, and focused on long-term growth—not labor substitution.
            </p>
            <ul className={styles['cc-list']}>
              <li className={styles['cc-list-item']}>
                <i className="ri-check-double-line"></i>
                Learn real-world automotive diagnostics.
              </li>
              <li className={styles['cc-list-item']}>
                <i className="ri-check-double-line"></i>
                Work alongside Master Technicians.
              </li>
              <li className={styles['cc-list-item']}>
                <i className="ri-check-double-line"></i>
                Understand professional workshop ethics.
              </li>
            </ul>
          </div>

          <div className="cc-intern-visual">
             <div className={styles['cc-stat-box']}>
               <span className={styles['cc-stat-num']}>06</span>
               <span className={styles['cc-stat-desc']}>Month Intensive Program</span>
             </div>
             <div className={styles['cc-stat-box']}>
               <span className={styles['cc-stat-num']}>100%</span>
               <span className={styles['cc-stat-desc']}>Hands-on Training</span>
             </div>
          </div>
        </div>

        {/* 3. Professional Standards */}
        <div className={styles['cc-standards-box']}>
           <div className={styles['cc-std-bg-text']}>VALUES</div>
           <h3 className={styles['cc-standards-title']}>Professional Standards</h3>
           
           <div className={styles['cc-standards-grid']}>
             <div className={styles['cc-std-item']}>
               <i className={`ri-medal-fill ${styles['cc-std-icon']}`}></i>
               <span className={styles['cc-std-text']}>Technical Discipline</span>
             </div>
             <div className={styles['cc-std-item']}>
               <i className={`ri-shake-hands-fill ${styles['cc-std-icon']}`}></i>
               <span className={styles['cc-std-text']}>Ethical Conduct</span>
             </div>
             <div className={styles['cc-std-item']}>
               <i className={`ri-file-shield-2-fill ${styles['cc-std-icon']}`}></i>
               <span className={styles['cc-std-text']}>Data Privacy</span>
             </div>
             <div className={styles['cc-std-item']}>
               <i className={`ri-user-star-fill ${styles['cc-std-icon']}`}></i>
               <span className={styles['cc-std-text']}>Accountability</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};
