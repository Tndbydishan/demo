
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SustainabilityContent.module.css';

gsap.registerPlugin(ScrollTrigger);

export const SustainabilityContent: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Philosophy Section
      gsap.from('.sus-anim-up', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.sus-philosophy',
          start: 'top 80%',
        }
      });

      // Animate Case Cards
      gsap.from('.sus-case-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sus-cases-grid',
          start: 'top 80%',
        }
      });

      // Animate Practice Grid
      gsap.from('.sus-prac-item', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.sus-practice-grid',
          start: 'top 85%',
        }
      });

      // Animate Book Showcase
      gsap.from('.sus-book-visual', {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.sus-book-showcase',
          start: 'top 70%',
        }
      });

      gsap.from('.sus-book-content', {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.sus-book-showcase',
          start: 'top 70%',
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['sus-section']} ref={containerRef}>
      <div className={styles['sus-container']}>
        
        {/* 1. Philosophy */}
        <div className={`${styles['sus-philosophy']} sus-philosophy`}>
          <div>
            <span className={`${styles['sus-label']} sus-anim-up`}>Core Philosophy</span>
            <h2 className={`${styles['sus-headline']} sus-anim-up`}>
              Precision is the Ultimate <span style={{color: '#D12027'}}>Sustainability</span>.
            </h2>
          </div>
          <div>
            <p className={`${styles['sus-lead-text']} sus-anim-up`}>
              True sustainability in automotive service isn't about slogans; it's about engineering restraint. Our goal is to extend the operational lifespan of every vehicle we touch, reducing the global burden of manufacturing new machines.
            </p>
            <p className={`${styles['sus-text']} sus-anim-up`}>
              By diagnosing accurately, we prevent the wasteful replacement of functional components. By maintaining rigorously, we keep engines efficient and emissions low. This is stewardship through precision.
            </p>
          </div>
        </div>

        {/* 2. Real-World Case Studies */}
        <div>
          <h3 className={styles['sus-label']} style={{marginBottom:'2rem'}}>Engineering Cases</h3>
          <div className={`${styles['sus-cases-grid']} sus-cases-grid`}>
            
            {/* Case 1 */}
            <div className={styles['sus-case-card']}>
              <span className={styles['sus-case-number']}>01</span>
              <h4 className={styles['sus-case-title']}>Precision Diagnostics</h4>
              <div className={styles['sus-case-flow']}>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Problem</span>
                  <span className={styles['sus-flow-val']}>Guesswork leads to entire modules being discarded for minor faults.</span>
                </div>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Action</span>
                  <span className={styles['sus-flow-val']}>Component-level logic analysis using oscilloscopes.</span>
                </div>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Outcome</span>
                  <span className={`${styles['sus-flow-val']} ${styles['outcome']}`}>90% Waste Reduction on healthy parts.</span>
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className={styles['sus-case-card']}>
              <span className={styles['sus-case-number']}>02</span>
              <h4 className={styles['sus-case-title']}>Closed-Loop Fluids</h4>
              <div className={styles['sus-case-flow']}>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Problem</span>
                  <span className={styles['sus-flow-val']}>Improper disposal of oils and coolants contaminates groundwater.</span>
                </div>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Action</span>
                  <span className={styles['sus-flow-val']}>Zero-spill extraction & certified recycling partnerships.</span>
                </div>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Outcome</span>
                  <span className={`${styles['sus-flow-val']} ${styles['outcome']}`}>100% Fluid Accountability.</span>
                </div>
              </div>
            </div>

            {/* Case 3 */}
            <div className={styles['sus-case-card']}>
              <span className={styles['sus-case-number']}>03</span>
              <h4 className={styles['sus-case-title']}>Lifecycle Extension</h4>
              <div className={styles['sus-case-flow']}>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Problem</span>
                  <span className={styles['sus-flow-val']}>Premature vehicle retirement due to poor maintenance.</span>
                </div>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Action</span>
                  <span className={styles['sus-flow-val']}>Predictive maintenance based on telemetry data.</span>
                </div>
                <div className={styles['sus-flow-item']}>
                  <span className={styles['sus-flow-label']}>Outcome</span>
                  <span className={`${styles['sus-flow-val']} ${styles['outcome']}`}>+5 Years Operational Lifespan.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Operational Control Book Showcase */}
        <div className={`${styles['sus-book-showcase']} sus-book-showcase`}>
          
          {/* Left: Book Visual */}
          <div className={styles['sus-book-visual']}>
            <div className={styles['sus-book-3d']}>
              <div className={styles['sus-book-cover']}>
                <img 
                  src="/resources/sustainability_cover.png" 
                  height={400}
                  width={220}
                  alt="Sustainability Control Framework Cover" 
                  className={styles['sus-book-img']}
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className={styles['sus-book-content']}>
            <span className={styles['sus-book-label']}>Transparency Initiative</span>
            <h3 className={styles['sus-book-heading']}>
              Sustainability Control & Responsibility Framework
            </h3>
            <p className={styles['sus-book-abstract']}>
              This document outlines the engineering protocols we use to enforce sustainability. It is not a marketing brochure; it is a rulebook for our technicians, covering environmental controls, process accountability, and documentation standards.
            </p>
            
            <ul className={styles['sus-book-list']}>
              <li className={styles['sus-book-item']}>
                <i className="ri-check-line"></i> Hazardous Material Handling Standards
              </li>
              <li className={styles['sus-book-item']}>
                <i className="ri-check-line"></i> Repair vs. Replace Decision Matrix
              </li>
              <li className={styles['sus-book-item']}>
                <i className="ri-check-line"></i> Vendor & Supply Chain Compliance
              </li>
            </ul>

            <div>
              <a href="/resources/media/sustainability-framework.pdf" download className={styles['sus-download-btn']}>
                <i className="ri-download-cloud-2-line"></i> Download Framework (PDF)
              </a>
              <span className={styles['sus-download-meta']}>PDF | 2.4 MB | Last Updated: Jan 2025</span>
            </div>
          </div>

        </div>

        {/* 4. Sustainability In Practice (Operational Grid) */}
        <div className={styles['sus-practice-section']}>
          <div className={styles['sus-practice-header']}>
            <h3 className={styles['sus-headline']} style={{fontSize: '1.5rem', marginBottom: '1rem'}}>
              Operational Control
            </h3>
            <p className={styles['sus-text']}>
              Sustainability is embedded into our daily workflow through strict operational controls. Every decision on the shop floor is guided by these four pillars.
            </p>
          </div>

          <div className={`${styles['sus-practice-grid']} sus-practice-grid`}>
            
            <div className={styles['sus-prac-item']}>
              <h4><i className="ri-file-list-3-line"></i> Process Audit</h4>
              <p>Regular internal audits ensuring technicians adhere to diagnostic flowcharts to prevent waste.</p>
            </div>

            <div className={styles['sus-prac-item']}>
              <h4><i className="ri-database-2-line"></i> Digital Trail</h4>
              <p>Full digitization of service logs reducing paper dependency and ensuring long-term data retention.</p>
            </div>

            <div className={styles['sus-prac-item']}>
              <h4><i className="ri-shield-check-line"></i> Vendor Ethics</h4>
              <p>We only source parts from suppliers who meet our standards for packaging and material quality.</p>
            </div>

            <div className={styles['sus-prac-item']}>
              <h4><i className="ri-user-settings-line"></i> Staff Training</h4>
              <p>Continuous education on high-voltage safety and the environmental impact of chemical mishandling.</p>
            </div>

          </div>
        </div>

        {/* 5. Transparency */}
        <div className={styles['sus-transparency']}>
          <div className={styles['sus-transparency-box']}>
            <h4 className={styles['sus-transparency-head']}>Transparency Statement</h4>
            <p className={styles['sus-transparency-text']}>
              "We avoid greenwashing. We are an automotive workshop dealing with hydrocarbons, metals, and chemicals. Our commitment is to manage these elements with the highest level of professional responsibility, minimizing impact through engineered process control."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
