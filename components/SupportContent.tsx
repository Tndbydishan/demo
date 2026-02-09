
'use client';

import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SupportContent.module.css';

gsap.registerPlugin(ScrollTrigger);

// Support Paths Data
const SUPPORT_PATHS = [
  {
    icon: 'ri-time-line',
    title: 'Service Status',
    desc: 'Check the real-time progress of your vehicle repair or maintenance.',
    href: '#', // Placeholder for portal logic
  },
  {
    icon: 'ri-file-list-3-line',
    title: 'Billing & Invoices',
    desc: 'Request copies of invoices, estimates, or clarify payment details.',
    href: '#',
  },
  {
    icon: 'ri-file-search-line',
    title: 'Reports & Docs',
    desc: 'Access digital diagnostic reports, inspection sheets, and health checks.',
    href: '#',
  },
  {
    icon: 'ri-cpu-line',
    title: 'Technical Qs',
    desc: 'Clarifications on parts, modifications, or specific engineering concerns.',
    href: '/faq', // Route to FAQ
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Appointments',
    desc: 'Reschedule an existing booking or arrange a follow-up inspection.',
    href: '/booking',
  },
  {
    icon: 'ri-discuss-line',
    title: 'Feedback',
    desc: 'Share your experience. We take every concern as an opportunity to improve.',
    href: '/contact',
  },
];

export const SupportContent: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Intro Fade Up
      gsap.from('.sup-anim-up', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.sup-intro-block',
          start: 'top 85%',
        }
      });

      // Grid Cards Stagger
      gsap.from('.sup-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.sup-path-grid',
          start: 'top 80%',
        }
      });

      // Split Section Reveal
      gsap.from('.sup-split-col', {
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.sup-split-section',
          start: 'top 75%',
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['sup-section']} ref={containerRef}>
      <div className={styles['sup-container']}>
        
        {/* 1. Intro */}
        <div className={`${styles['sup-intro-block']} sup-intro-block`}>
          <span className={`${styles['sup-label']} sup-anim-up`}>Customer Care</span>
          <h2 className={`${styles['sup-headline']} sup-anim-up`}>
            Support Designed <br/>Around <span style={{color:'#D12027'}}>You</span>.
          </h2>
          <p className={`${styles['sup-text']} sup-anim-up`}>
            At Auto Evolution, customer support is an extension of our workmanship. Every question, concern, and request is handled with care, clarity, and respect—because trust is built long after the service is complete.
          </p>
        </div>

        {/* 2. Path Selector Grid */}
        <div className={`${styles['sup-path-grid']} sup-path-grid`}>
          {SUPPORT_PATHS.map((item, idx) => (
            <Link key={idx} href={item.href} className={styles['sup-card']}>
              <div className={styles['sup-card-icon']}>
                <i className={item.icon}></i>
              </div>
              <h3 className={styles['sup-card-title']}>{item.title}</h3>
              <p className={styles['sup-card-desc']}>{item.desc}</p>
              <i className={`ri-arrow-right-line ${styles['sup-card-arrow']}`}></i>
            </Link>
          ))}
        </div>

        {/* 3. Channels & Standards */}
        <div className={`${styles['sup-split-section']} sup-split-section`}>
          
          {/* Left: Direct Support Channels */}
          <div className="sup-split-col">
            <h3 className={styles['sup-section-title']}>Direct Assistance</h3>
            
            <div className={styles['sup-channel-list']}>
              <div className={styles['sup-channel-item']}>
                <i className={`ri-phone-fill ${styles['sup-channel-icon']}`}></i>
                <div className={styles['sup-channel-info']}>
                  <h4>Phone Support</h4>
                  <p>Immediate assistance during business hours (10 AM - 8 PM).</p>
                  <a href="tel:+8801711278127" className={styles['sup-channel-link']}>
                    +880 1711-278127
                  </a>
                </div>
              </div>

              <div className={styles['sup-channel-item']}>
                <i className={`ri-mail-send-fill ${styles['sup-channel-icon']}`}></i>
                <div className={styles['sup-channel-info']}>
                  <h4>Email & Digital</h4>
                  <p>For documentation, detailed queries, or feedback. Response within 24 hours.</p>
                  <a href="mailto:support@autoevolution.com" className={styles['sup-channel-link']}>
                    support@autoevolution.com
                  </a>
                </div>
              </div>

              <div className={styles['sup-channel-item']}>
                <i className={`ri-chat-smile-3-fill ${styles['sup-channel-icon']}`}></i>
                <div className={styles['sup-channel-info']}>
                  <h4>Social & Chat</h4>
                  <p>Quick queries via WhatsApp or Messenger.</p>
                  <a href="#" className={styles['sup-channel-link']}>
                    Start Chat <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Standards & Philosophy */}
          <div className="sup-split-col">
            <h3 className={styles['sup-section-title']}>Our Commitment</h3>
            <ul className={styles['sup-standards-list']}>
              <li className={styles['sup-std-item']}>
                <span className={styles['sup-std-title']}>Respectful Resolution</span>
                <p className={styles['sup-std-desc']}>
                  We encourage open feedback. If something isn't right, we don't make excuses—we find a solution. Every concern is treated as an opportunity to improve.
                </p>
              </li>
              <li className={styles['sup-std-item']}>
                <span className={styles['sup-std-title']}>Transparency</span>
                <p className={styles['sup-std-desc']}>
                  No hidden terms, no technical jargon used to confuse. We explain issues simply and honestly, providing evidence for every repair recommendation.
                </p>
              </li>
              <li className={styles['sup-std-item']}>
                <span className={styles['sup-std-title']}>Data Privacy</span>
                <p className={styles['sup-std-desc']}>
                  Your service history, vehicle data, and personal details are handled with strict confidentiality, accessible only to authorized staff.
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* 4. Human Touch / Bottom CTA */}
        <div className={styles['sup-human-block']}>
          <div className={styles['sup-bg-pattern']}></div>
          <div className={styles['sup-human-content']}>
            <p className={styles['sup-human-quote']}>
              "Behind every support request is a person. We listen carefully, respond thoughtfully, and act responsibly."
            </p>
            <Link href="/contact" className={styles['sup-human-cta']}>
              Contact Us Directly
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
