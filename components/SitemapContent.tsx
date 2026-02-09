
'use client';

import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './SitemapContent.module.css';

gsap.registerPlugin(ScrollTrigger);

// --- Data Definition ---
interface PageEntry {
  title: string;
  path: string;
  gist: string; // Short description
}

interface CategoryGroup {
  id: string;
  number: string;
  label: string;
  pages: PageEntry[];
}

const SITE_STRUCTURE: CategoryGroup[] = [
  {
    id: 'core',
    number: '01',
    label: 'Core Navigation',
    pages: [
      { title: 'Home', path: '/', gist: 'The central hub. Overview of services, partners, and our engineering philosophy.' },
      { title: 'About Us', path: '/about', gist: 'Our legacy, mission statement, and the team behind the tools.' },
      { title: 'Services', path: '/services', gist: 'Comprehensive list of technical offerings from ECU tuning to mechanical repairs.' },
      { title: 'Contact', path: '/contact', gist: 'Location map, direct lines, SOS contacts, and visiting hours.' },
    ]
  },
  {
    id: 'engage',
    number: '02',
    label: 'Engagement',
    pages: [
      { title: 'Booking', path: '/booking', gist: 'Schedule a service appointment via our digital intake form.' },
      { title: 'Training Academy', path: '/training', gist: 'Courses and certifications for aspiring automotive technicians.' },
      { title: 'Partnership', path: '/partnership', gist: 'Collaborate with us. Corporate fleets and technology validation programs.' },
      { title: 'Community', path: '/community', gist: 'The hub for reviews, social feed, and workshop announcements.' },
      { title: 'Careers', path: '/careers', gist: 'Job openings and internship programs for skilled professionals.' },
      { title: 'News & Insights', path: '/blogs', gist: 'Technical articles, event recaps, and automotive trends.' },
    ]
  },
  {
    id: 'support',
    number: '03',
    label: 'Support & Standards',
    pages: [
      { title: 'Customer Support', path: '/support', gist: 'Direct assistance channels, invoice queries, and feedback loop.' },
      { title: 'FAQ', path: '/faq', gist: 'Answers to common questions regarding pricing, warranty, and logistics.' },
      { title: 'Safety Standards', path: '/safety', gist: 'Our protocols for workplace safety, HV handling, and risk management.' },
      { title: 'Sustainability', path: '/sustainability', gist: 'Our environmental impact controls and waste management policies.' },
    ]
  },
  {
    id: 'legal',
    number: '04',
    label: 'Legal & Governance',
    pages: [
      { title: 'Terms of Service', path: '/terms-of-service', gist: 'Operational agreements, rights, and responsibilities.' },
      { title: 'Privacy Policy', path: '/privacy-policy', gist: 'How we collect, protect, and use your personal and vehicle data.' },
    ]
  }
];

export const SitemapContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLElement>(null);

  // Filter Logic
  const filteredStructure = useMemo(() => {
    if (!searchTerm) return SITE_STRUCTURE;

    const lowerTerm = searchTerm.toLowerCase();
    
    // Filter pages within categories, remove empty categories
    return SITE_STRUCTURE.map(group => ({
      ...group,
      pages: group.pages.filter(page => 
        page.title.toLowerCase().includes(lowerTerm) || 
        page.gist.toLowerCase().includes(lowerTerm)
      )
    })).filter(group => group.pages.length > 0);

  }, [searchTerm]);

  // Animation on Mount & Search Change
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Cards
      gsap.fromTo('.sm-link-card', 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.05, 
          ease: 'power2.out',
          overwrite: 'auto'
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [filteredStructure]);

  return (
    <section className={styles['sm-section']} ref={containerRef}>
      <div className={styles['sm-container']}>
        
        {/* Search Header */}
        <div className={styles['sm-search-header']}>
          <div className={styles['sm-title-block']}>
            <h2>Global Index</h2>
            <p>A comprehensive directory of all public pages, operational documents, and service portals available on Auto Evolution.</p>
          </div>
          <div className={styles['sm-search-wrapper']}>
            <i className={`ri-search-line ${styles['sm-search-icon']}`}></i>
            <input 
              type="text" 
              placeholder="Filter by keyword (e.g., 'Hybrid', 'Jobs')..." 
              className={styles['sm-search-input']}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Loop */}
        <div className={styles['sm-index-wrapper']}>
          {filteredStructure.length > 0 ? (
            filteredStructure.map((group) => (
              <div key={group.id} className={styles['sm-category-section']}>
                
                {/* Left: Category Label */}
                <div className={styles['sm-cat-label']}>
                  <span className={styles['sm-cat-number']}>{group.number}</span>
                  <span className={styles['sm-cat-name']}>{group.label}</span>
                </div>

                {/* Right: Links Grid */}
                <div className={styles['sm-links-grid']}>
                  {group.pages.map((page) => (
                    <Link key={page.path} href={page.path} className={styles['sm-link-card']}>
                      <div className={styles['sm-link-title']}>
                        {page.title}
                        <i className={`ri-arrow-right-line ${styles['sm-arrow']}`}></i>
                      </div>
                      <p className={styles['sm-link-desc']}>{page.gist}</p>
                    </Link>
                  ))}
                </div>

              </div>
            ))
          ) : (
            <div className={styles['sm-no-results']}>
              No pages found matching "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
