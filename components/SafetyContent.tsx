
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SafetyContent.module.css';

gsap.registerPlugin(ScrollTrigger);

export const SafetyContent: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Philosophy
      gsap.from('.safe-anim-up', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.safe-philosophy',
          start: 'top 80%'
        }
      });

      // 2. Protocol Grid Cards
      gsap.from('.safe-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.safe-grid',
          start: 'top 80%'
        }
      });

      // 3. HV Section
      gsap.from('.safe-hv-content', {
        x: -30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.safe-hv-section',
          start: 'top 75%'
        }
      });

      gsap.from('.safe-stat-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.safe-hv-section',
          start: 'top 75%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['safe-section']} ref={containerRef}>
      <div className={styles['safe-container']}>
        
        {/* 1. Philosophy */}
        <div className={`${styles['safe-philosophy']} safe-philosophy`}>
          <div>
            <span className={`${styles['safe-label']} safe-anim-up`}>Safety Philosophy</span>
            <h2 className={`${styles['safe-headline']} safe-anim-up`}>
              Safety Without <span style={{color: '#D12027'}}>Compromise</span>.
            </h2>
          </div>
          <div>
            <p className={`${styles['safe-lead-text']} safe-anim-up`}>
              At Auto Evolution, safety is not a checklist—it is a system. Every inspection, repair, and operational decision is governed by structured standards designed to protect our people, our customers, and the integrity of our work.
            </p>
            <p className={`${styles['safe-text']} safe-anim-up`}>
              We operate on three core principles: Prevention before correction, Controlled processes over assumptions, and Responsibility at every level.
            </p>
          </div>
        </div>

        {/* 2. Protocol Grid */}
        <div className={`${styles['safe-grid']} safe-grid`}>
          
          {/* Card 1: Environment */}
          <div className={styles['safe-card']}>
            <i className={`ri-store-2-line ${styles['safe-card-icon']}`}></i>
            <h3 className={styles['safe-card-title']}>Work Environment</h3>
            <ul className={styles['safe-list']}>
              <li className={styles['safe-list-item']}>Clearly defined work zones and access control.</li>
              <li className={styles['safe-list-item']}>Non-slip flooring and organized tool storage.</li>
              <li className={styles['safe-list-item']}>Designated pathways for vehicle movement.</li>
            </ul>
          </div>

          {/* Card 2: PPE */}
          <div className={styles['safe-card']}>
            <i className={`ri-user-protect-line ${styles['safe-card-icon']}`}></i>
            <h3 className={styles['safe-card-title']}>Personnel Safety</h3>
            <ul className={styles['safe-list']}>
              <li className={styles['safe-list-item']}>Mandatory safety briefings and refresher sessions.</li>
              <li className={styles['safe-list-item']}>Task-specific PPE (gloves, eye protection) enforcement.</li>
              <li className={styles['safe-list-item']}>Ongoing technical training on new systems.</li>
            </ul>
          </div>

          {/* Card 3: Vehicle Handling */}
          <div className={styles['safe-card']}>
            <i className={`ri-car-washing-line ${styles['safe-card-icon']}`}></i>
            <h3 className={styles['safe-card-title']}>Vehicle Handling</h3>
            <ul className={styles['safe-list']}>
              <li className={styles['safe-list-item']}>Initial safety inspection before work begins.</li>
              <li className={styles['safe-list-item']}>Certified lifting equipment and load limits.</li>
              <li className={styles['safe-list-item']}>Secure positioning procedures for diagnostics.</li>
            </ul>
          </div>

          {/* Card 4: Chemicals */}
          <div className={styles['safe-card']}>
            <i className={`ri-flask-line ${styles['safe-card-icon']}`}></i>
            <h3 className={styles['safe-card-title']}>Hazardous Materials</h3>
            <ul className={styles['safe-list']}>
              <li className={styles['safe-list-item']}>Secure storage of oils, fuels, and solvents.</li>
              <li className={styles['safe-list-item']}>Spill prevention and containment measures.</li>
              <li className={styles['safe-list-item']}>Environmentally responsible disposal methods.</li>
            </ul>
          </div>

          {/* Card 5: Equipment */}
          <div className={styles['safe-card']}>
            <i className={`ri-tools-fill ${styles['safe-card-icon']}`}></i>
            <h3 className={styles['safe-card-title']}>Tools & Machinery</h3>
            <ul className={styles['safe-list']}>
              <li className={styles['safe-list-item']}>Regular calibration of diagnostic tools.</li>
              <li className={styles['safe-list-item']}>Immediate removal of damaged equipment.</li>
              <li className={styles['safe-list-item']}>Strict operational guidelines for machinery.</li>
            </ul>
          </div>

          {/* Card 6: Customer */}
          <div className={styles['safe-card']}>
            <i className={`ri-shield-user-line ${styles['safe-card-icon']}`}></i>
            <h3 className={styles['safe-card-title']}>Customer Safety</h3>
            <ul className={styles['safe-list']}>
              <li className={styles['safe-list-item']}>Restricted access to active service areas.</li>
              <li className={styles['safe-list-item']}>Final safety checks before vehicle release.</li>
              <li className={styles['safe-list-item']}>Clear communication of safety findings.</li>
            </ul>
          </div>

        </div>

        {/* 3. High Voltage Section */}
        <div className={`${styles['safe-hv-section']} safe-hv-section`}>
          <div className={styles['safe-hv-bg-icon']}>
            <i className="ri-flashlight-line"></i>
          </div>
          
          <div className={styles['safe-hv-content']}>
            <span className={styles['safe-hv-badge']}>EV & Hybrid Protocol</span>
            <h2 className={styles['safe-hv-title']}>High Voltage Safety</h2>
            <p className={styles['safe-hv-text']}>
              For modern electric platforms, additional controls apply. No high-voltage work is performed without certified protocols, insulated tools, and strict isolation procedures to protect our technicians and your vehicle's electronics.
            </p>
          </div>

          <div className={styles['safe-hv-stats']}>
            <div className={styles['safe-stat-item']}>
              <i className={`ri-lock-password-line ${styles['safe-stat-icon']}`}></i>
              <span className={styles['safe-stat-label']}>Isolation Protocol</span>
            </div>
            <div className={styles['safe-stat-item']}>
              <i className={`ri-tools-line ${styles['safe-stat-icon']}`}></i>
              <span className={styles['safe-stat-label']}>Insulated Tools</span>
            </div>
          </div>
        </div>

        {/* 4. Governance & Transparency */}
        <div className={styles['safe-gov-grid']}>
          
          <div>
            <h3 className={styles['safe-gov-title']}>Incident Reporting</h3>
            <p className={styles['safe-gov-text']}>
              We maintain a culture of immediate reporting for incidents or near-misses. Every report triggers a root-cause analysis, leading to process updates and training adjustments. We do not conceal risk; we manage it.
            </p>
            <h3 className={styles['safe-gov-title']}>Compliance</h3>
            <p className={styles['safe-gov-text']}>
              Our safety standards are aligned with applicable workplace safety regulations, automotive service industry best practices, and environmental laws regarding hazardous material handling.
            </p>
          </div>

          <div>
            <div className={styles['safe-transparency-box']}>
              <h3 className={styles['safe-gov-title']}>Transparency Statement</h3>
              <p className={styles['safe-transparency-quote']}>
                "We do not claim zero risk. We commit to risk awareness, disciplined control, and continuous improvement in everything we do. Safety is not delegated—it is owned by every member of our team."
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
