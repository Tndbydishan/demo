
'use client';

import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './PartnershipContent.module.css';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const PARTNER_TYPES = [
  {
    id: 'corporate',
    label: 'Corporate Fleets',
    title: 'Enterprise Efficiency',
    desc: 'For organizations with multi-vehicle operations. We reduce downtime and administrative burden through consolidated reporting and priority scheduling.',
    checks: ['Priority Servicing', 'Consolidated Billing', 'Fleet Health Analytics'],
    icon: 'ri-building-2-line'
  },
  {
    id: 'logistics',
    label: 'Transport & Logistics',
    title: 'Operational Reliability',
    desc: 'Keep your commercial assets moving. Our program focuses on preventive maintenance cycles aligned with your utilization schedules to prevent costly breakdowns.',
    checks: ['High-Utilization Maintenance', '24/7 Recovery Access', 'Compliance Documentation'],
    icon: 'ri-truck-line'
  },
  {
    id: 'tech',
    label: 'Auto-Tech Innovators',
    title: 'R&D Validation',
    desc: 'A sandbox for automotive technology companies. Test your sensors, telematics, or diagnostic tools in a real-world service environment.',
    checks: ['Real-world Testing', 'Structured Feedback Loops', 'Data Confidentiality'],
    icon: 'ri-cpu-line'
  }
];

export const PartnershipContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('corporate');
  const containerRef = useRef<HTMLElement>(null);

  const activeContent = PARTNER_TYPES.find(p => p.id === activeTab);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Intro Animation
      gsap.from('.pt-anim-up', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.pt-intro-block',
          start: 'top 85%'
        }
      });

      // Models Grid Stagger
      gsap.from('.pt-model-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.pt-models-grid',
          start: 'top 80%'
        }
      });

      // Steps Timeline
      gsap.from('.pt-process-step', {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.pt-process-wrapper',
          start: 'top 75%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['pt-section']} ref={containerRef}>
      <div className={styles['pt-container']}>
        
        {/* 1. Intro */}
        <div className={`${styles['pt-intro-block']} pt-intro-block`}>
          <span className={`${styles['pt-label']} pt-anim-up`}>Shared Progress</span>
          <h2 className={`${styles['pt-headline']} pt-anim-up`}>
            Partnerships, Not <span style={{color: '#D12027'}}>Transactions</span>.
          </h2>
          <p className={`${styles['pt-text']} pt-anim-up`}>
            We operate at the intersection of real-world automotive service and technical insight. We work alongside corporate fleets and technology innovators to improve reliability, efficiency, and performance through disciplined service and data-driven feedback.
          </p>
        </div>

        {/* 2. Interactive Selector */}
        <div className={styles['pt-selector-wrapper']}>
          <div className={styles['pt-tabs']}>
            {PARTNER_TYPES.map(type => (
              <button
                key={type.id}
                className={`${styles['pt-tab-btn']} ${activeTab === type.id ? styles['active'] : ''}`}
                onClick={() => setActiveTab(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className={styles['pt-display-card']}>
            <div>
              <h3 className={styles['pt-display-title']}>{activeContent?.title}</h3>
              <p className={styles['pt-display-desc']}>{activeContent?.desc}</p>
              <div className={styles['pt-check-list']}>
                {activeContent?.checks.map((check, idx) => (
                  <div key={idx} className={styles['pt-check-item']}>
                    <i className="ri-checkbox-circle-fill"></i> {check}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles['pt-display-visual']}>
               <i className={`${activeContent?.icon} ${styles['pt-visual-icon']}`}></i>
            </div>
          </div>
        </div>

        {/* 3. Models Grid */}
        <div>
          <h3 className={styles['pt-label']}>Engagement Models</h3>
          <div className={`${styles['pt-models-grid']} pt-models-grid`}>
            
            {/* Model A */}
            <div className={styles['pt-model-card']}>
              <i className={`ri-service-line ${styles['pt-model-icon']}`}></i>
              <h4 className={styles['pt-model-title']}>Service Partner</h4>
              <p className={styles['pt-text']} style={{fontSize:'0.9rem'}}>Designed for organizations requiring priority servicing and dedicated account handling.</p>
              <ul className={styles['pt-model-list']}>
                <li>SLA-based response times</li>
                <li>Preventive planning</li>
                <li>Digital service logs</li>
              </ul>
              <div className={styles['pt-model-outcome']}>Outcome: Predictable Operations</div>
            </div>

            {/* Model B */}
            <div className={styles['pt-model-card']}>
              <i className={`ri-bar-chart-box-line ${styles['pt-model-icon']}`}></i>
              <h4 className={styles['pt-model-title']}>Fleet Scale</h4>
              <p className={styles['pt-text']} style={{fontSize:'0.9rem'}}>Built for high-utilization logistics operators requiring cost transparency and safety compliance.</p>
              <ul className={styles['pt-model-list']}>
                <li>Bulk inspection programs</li>
                <li>Utilization alignment</li>
                <li>Cost-per-mile analysis</li>
              </ul>
              <div className={styles['pt-model-outcome']}>Outcome: Asset Reliability</div>
            </div>

            {/* Model C */}
            <div className={styles['pt-model-card']}>
              <i className={`ri-flask-line ${styles['pt-model-icon']}`}></i>
              <h4 className={styles['pt-model-title']}>Tech Lab</h4>
              <p className={styles['pt-text']} style={{fontSize:'0.9rem'}}>For automotive innovators needing controlled evaluation of devices and software.</p>
              <ul className={styles['pt-model-list']}>
                <li>Bug identification</li>
                <li>Stress testing</li>
                <li>Usability insights</li>
              </ul>
              <div className={styles['pt-model-outcome']}>Outcome: Validated Products</div>
            </div>

          </div>
        </div>

        {/* 4. Process Flow */}
        <div className={styles['pt-process-wrapper']}>
           <div className={styles['pt-process-step']}>
             <div className={styles['pt-step-number']}>01</div>
             <div className={styles['pt-step-content']}>
               <h4 className={styles['pt-step-title']}>Initial Conversation</h4>
               <p className={styles['pt-step-desc']}>A structured meeting to understand your objectives, fleet size, or technical challenges.</p>
             </div>
           </div>
           <div className={styles['pt-process-step']}>
             <div className={styles['pt-step-number']}>02</div>
             <div className={styles['pt-step-content']}>
               <h4 className={styles['pt-step-title']}>Framework Definition</h4>
               <p className={styles['pt-step-desc']}>We define the scope of collaboration, SLA requirements, data handling protocols, and success metrics.</p>
             </div>
           </div>
           <div className={styles['pt-process-step']}>
             <div className={styles['pt-step-number']}>03</div>
             <div className={styles['pt-step-content']}>
               <h4 className={styles['pt-step-title']}>Onboarding</h4>
               <p className={styles['pt-step-desc']}>Formal agreement, assignment of a dedicated account manager, and alignment of digital systems.</p>
             </div>
           </div>
           <div className={styles['pt-process-step']}>
             <div className={styles['pt-step-number']}>04</div>
             <div className={styles['pt-step-content']}>
               <h4 className={styles['pt-step-title']}>Collaboration</h4>
               <p className={styles['pt-step-desc']}>Ongoing service execution, regular performance reviews, and continuous improvement loops.</p>
             </div>
           </div>
        </div>

        {/* 5. Innovation Loop (Dark Section) */}
        <div className={styles['pt-tech-section']}>
          <div>
            <span className={styles['pt-tech-badge']}>For Technology Partners</span>
            <h3 className={styles['pt-tech-title']}>Innovation Feedback Loop</h3>
            <p className={styles['pt-tech-text']}>
              Your products are evaluated where they matter most: in actual service environments. We provide structured feedback to help you iterate faster.
            </p>
          </div>
          <div className={styles['pt-tech-grid']}>
            <div className={styles['pt-tech-card']}>
              <h4><i className="ri-bug-line"></i> Bug Reports</h4>
              <p>Detailed logs of anomalies found during diagnostic sessions.</p>
            </div>
            <div className={styles['pt-tech-card']}>
              <h4><i className="ri-pulse-line"></i> Stress Testing</h4>
              <p>Environmental and operational load testing on devices.</p>
            </div>
            <div className={styles['pt-tech-card']}>
              <h4><i className="ri-user-search-line"></i> Usability</h4>
              <p>Technician-centric feedback on UI/UX and ergonomics.</p>
            </div>
            <div className={styles['pt-tech-card']}>
              <h4><i className="ri-shield-check-line"></i> Privacy</h4>
              <p>Feedback is shared responsibly—never publicly.</p>
            </div>
          </div>
        </div>

        {/* 6. Governance & CTA */}
        <div className={styles['pt-gov-block']}>
          <h3 className={styles['pt-gov-title']}>Governance & Trust</h3>
          <p className={styles['pt-gov-text']}>
            Every partnership is governed by clear agreements regarding confidentiality, IP protection, and ethical data usage. We protect partner data and operational secrets with the same rigor as our own. Trust is contractual—and cultural.
          </p>
        </div>

        <div className={styles['pt-cta-block']}>
          <a href="/contact" className={styles['pt-cta-btn']}>
            Schedule a Partnership Discussion
          </a>
          <span className={styles['pt-cta-sub']}>No obligation. Just a conversation about what we can build together.</span>
        </div>

      </div>
    </section>
  );
};
