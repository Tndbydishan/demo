
'use client';
import React from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, SOCIALS } from '../data';
import { PageId } from '../types';
import styles from './Footer.module.css';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
}

// --- New Link Data Configuration ---
const SUPPORT_LINKS = [
  { label: 'Partnership Programme', href: '/partnership' }, // Updated link
  { label: 'Customer Support', href: '/support' },
  { label: 'Book Appointment', href: '/booking' },
  { label: 'FAQ', href: '/faq' },
];

const CONCERN_LINKS = [
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Safety Standards', href: '/safety' },
  { label: 'Community', href: '/community' }, // Updated Link
];

const CORPORATE_LINKS = [
  { label: 'Careers', href: '/careers' },
  { label: 'Sitemap', href: '/sitemap' }, // Updated Link
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
];

export default function Footer({ onNavigate }: FooterProps) {
  
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // If it's a page anchor link like "#contact", we try to use the onNavigate handler
    if (href.startsWith('#') && onNavigate) {
      const id = href.replace('#', '') as PageId;
      // Simple check if the id is roughly valid (optional)
      if (['home', 'about', 'services', 'training', 'blogs', 'contact', 'booking'].includes(id)) {
        e.preventDefault();
        onNavigate(id);
        window.scrollTo(0, 0);
      }
    }
  };

  const renderLinkItem = (label: string, href: string, isPageNav: boolean = false) => (
    <li key={label}>
      <a 
        href={href} 
        className={styles['footer-link']}
        onClick={isPageNav ? (e) => handleNavClick(e, href) : undefined}
      >
        <span>{label}</span>
        <i className={`ri-arrow-right-up-line ${styles['footer-link-icon']}`}></i>
      </a>
    </li>
  );

  return (
    <footer className={styles['footer-section']}>
      <div className={styles['footer-container']}>
        
        {/* TOP SECTION: Brand + 4 Column Grid */}
        <div className={styles['footer-top']}>
          
          {/* Brand Column (Left) */}
          <div className={styles['footer-brand']}>
            <Logo color="#121212" />
            <p className={styles['footer-tagline']}>
              Performance. Precision. Perfection.<br/>
              Defining the future of automotive engineering.
            </p>

            {/* SOS Emergency Button */}
            <a href="tel:+15550123456" className={styles['footer-sos-btn']} aria-label="Call Emergency Services">
              <i className="ri-alarm-warning-fill"></i>
              <span>SOS Emergency</span>
            </a>
          </div>

          {/* Links Grid (Right) */}
          <div className={styles['footer-links-grid']}>
            
            {/* Col 1: Main Menu */}
            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Menu</h4>
              <ul className={styles['footer-link-list']}>
                {NAV_LINKS.map((link) => renderLinkItem(link.label, link.href, true))}
              </ul>
            </div>

            {/* Col 2: Support */}
            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Support</h4>
              <ul className={styles['footer-link-list']}>
                {SUPPORT_LINKS.map((link) => renderLinkItem(link.label, link.href))}
              </ul>
            </div>

            {/* Col 3: Our Concerns */}
            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Our Concerns</h4>
              <ul className={styles['footer-link-list']}>
                {CONCERN_LINKS.map((link) => renderLinkItem(link.label, link.href))}
              </ul>
            </div>

            {/* Col 4: Corporate */}
            <div className={styles['footer-col']}>
              <h4 className={styles['footer-col-title']}>Corporate</h4>
              <ul className={styles['footer-link-list']}>
                {CORPORATE_LINKS.map((link) => renderLinkItem(link.label, link.href))}
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Copyright & Socials */}
        <div className={styles['footer-bottom']}>
          <div className={styles['footer-copyright']}>
            <div>&copy; {currentYear} Auto Evolution Workshop. All Rights Reserved.</div>
            <div className={styles['footer-dev-credit']}>Developed by Merces Tech</div>
          </div>

          <div className={styles['footer-socials']}>
            <span className={styles['footer-follow-text']}>Follow us!</span>
            {SOCIALS.map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles['footer-social-icon']}
                aria-label="Social Link"
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
