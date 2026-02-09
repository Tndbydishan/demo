
'use client';

import React, { useRef, useLayoutEffect, useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CommunityContent.module.css';

gsap.registerPlugin(ScrollTrigger);

// --- Types ---
type UpdateCategory = 'Service' | 'Community' | 'Alert' | 'Upgrade';

interface UpdateItem {
  id: number;
  category: UpdateCategory;
  date: string;
  title: string;
  desc: string;
  icon: string;
}

// --- Dynamic Data ---
const UPDATES: UpdateItem[] = [
  {
    id: 1,
    category: 'Alert',
    date: 'MAR 01, 2025',
    title: 'Ramadan Operating Hours',
    desc: 'During the holy month of Ramadan, our workshop will operate from 9:00 AM to 4:00 PM. Evening slots available by appointment only.',
    icon: 'ri-time-line'
  },
  {
    id: 2,
    category: 'Upgrade',
    date: 'FEB 20, 2025',
    title: 'Advanced ADAS Calibration',
    desc: 'We have installed a new laser calibration bay for Advanced Driver Assistance Systems. Essential after windshield replacement or suspension work.',
    icon: 'ri-focus-3-line'
  },
  {
    id: 3,
    category: 'Community',
    date: 'FEB 10, 2025',
    title: 'Traffic Safety Awareness Week',
    desc: 'Join us for a free tire and brake check-up clinic this weekend to promote road safety in Dhaka.',
    icon: 'ri-roadster-line'
  },
  {
    id: 4,
    category: 'Service',
    date: 'JAN 25, 2025',
    title: 'Hybrid Battery Health Check',
    desc: 'New proprietary diagnostic software available for Toyota Gen 4 and Honda i-MMD hybrid systems.',
    icon: 'ri-battery-charge-line'
  },
  {
    id: 5,
    category: 'Upgrade',
    date: 'JAN 15, 2025',
    title: 'Waiting Lounge Renovation',
    desc: 'Our customer lounge now features high-speed fiber internet and dedicated workstations for remote professionals.',
    icon: 'ri-cup-line'
  },
  {
    id: 6,
    category: 'Community',
    date: 'DEC 20, 2024',
    title: 'Annual Winter Coat Drive',
    desc: 'We are collecting warm clothes for distribution in northern districts. Drop off donations at the reception.',
    icon: 'ri-hand-heart-line'
  }
];

const REVIEWS = [
  {
    id: 1,
    author: 'Tanvir A.',
    source: 'Google Review',
    stars: 5,
    text: "Exceptional diagnostic skills. They identified a hybrid battery issue that two other workshops missed. Professional, clean, and transparent pricing.",
    initial: 'T'
  },
  {
    id: 2,
    author: 'Sarah K.',
    source: 'Google Review',
    stars: 5,
    text: "The team at Auto Evolution treats my BMW with more care than the dealer. The detailed digital report before any work starts is a game changer.",
    initial: 'S'
  },
  {
    id: 3,
    author: 'Rafiqul I.',
    source: 'Facebook',
    stars: 5,
    text: "Honest advice is rare. They advised against a costly repair because it wasn't necessary yet. That earned my trust for life.",
    initial: 'R'
  }
];

const FILTER_TABS = ['All', 'Service', 'Community', 'Alert', 'Upgrade'];

export const CommunityContent: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // State for Dynamic Feed
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState('');

  // State for Dynamic Operating Hours
  const [shopStatus, setShopStatus] = useState({ 
    isOpen: true, 
    label: 'Open now', 
    subLabel: '• Closes 8 PM', 
    color: '#137333' 
  });
  const [mounted, setMounted] = useState(false);

  // Filter Logic
  const filteredUpdates = useMemo(() => {
    let items = UPDATES;
    
    // 1. Category Filter
    if (activeCategory !== 'All') {
      items = items.filter(item => item.category === activeCategory);
    }

    // 2. Search Filter
    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase();
      items = items.filter(item => 
        item.title.toLowerCase().includes(lowerTerm) || 
        item.desc.toLowerCase().includes(lowerTerm)
      );
    }

    return items;
  }, [activeCategory, searchTerm]);

  const displayedUpdates = filteredUpdates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredUpdates.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleFilterChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(3); // Reset view on filter change
  };

  // Operating Hours Logic (Dhaka Time UTC+6)
  useEffect(() => {
    setMounted(true);
    const checkStatus = () => {
      const now = new Date();
      // Dhaka Timezone Calculation (UTC + 6)
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const dhakaTime = new Date(utc + (3600000 * 6));
      
      const day = dhakaTime.getDay(); // 0=Sun, 5=Fri, 6=Sat
      const hour = dhakaTime.getHours();
      
      // Rule: Fri Closed. Sat-Thu Open 10 AM - 8 PM.
      const isFriday = day === 5;
      const isOpenHours = hour >= 10 && hour < 20; // 10:00 - 19:59

      if (!isFriday && isOpenHours) {
        setShopStatus({
          isOpen: true,
          label: 'Open now',
          subLabel: '• Closes 8 PM',
          color: '#137333' // Google Green
        });
      } else {
        let nextText = '• Opens 10 AM';
        
        if (isFriday) {
          nextText = '• Opens Sat 10 AM';
        } else if (hour >= 20) {
          // If Thu night, next is Sat
          if (day === 4) {
             nextText = '• Opens Sat 10 AM';
          } else {
             nextText = '• Opens Tomorrow 10 AM';
          }
        } else if (hour < 10) {
           nextText = '• Opens 10 AM';
        }

        setShopStatus({
          isOpen: false,
          label: 'Closed now',
          subLabel: nextText,
          color: '#D12027' // Red
        });
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); 
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Intro
      gsap.from('.comm-anim-up', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.comm-intro-block',
          start: 'top 85%'
        }
      });

      // Google Card
      gsap.from('.comm-google-card', {
        x: -30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.comm-google-section',
          start: 'top 75%'
        }
      });

      // Reviews
      gsap.from('.comm-review-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.comm-review-grid',
          start: 'top 80%'
        }
      });

      // Updates (Initial Load Animation)
      gsap.from('.comm-updates-section', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.comm-updates-section',
          start: 'top 80%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className={styles['comm-section']} ref={containerRef}>
      <div className={styles['comm-container']}>
        
        {/* 1. Hero / Invitation */}
        <div className={`${styles['comm-intro-block']} comm-intro-block`}>
          <span className={`${styles['comm-label']} comm-anim-up`}>The Hub</span>
          <h2 className={`${styles['comm-headline']} comm-anim-up`}>
            Stay Connected.<br/> Stay Informed.
          </h2>
          <p className={`${styles['comm-text']} comm-anim-up`}>
            The Auto Evolution Community is where our customers, partners, and followers stay connected. This is an open channel for transparency, feedback, and real-time updates from our workshop floor.
          </p>
          <div className={`${styles['comm-actions']} comm-anim-up`}>
            <a href="https://g.page/AutoEvolutionWorkshop" target="_blank" rel="noreferrer" className={`${styles['comm-btn']} ${styles['primary']}`}>
              <i className="ri-google-fill"></i> Follow on Google
            </a>
            <Link href="/contact" className={`${styles['comm-btn']} ${styles['secondary']}`}>
              Get Support
            </Link>
          </div>
        </div>

        {/* 2. Google Business Profile Integration */}
        <div className={`${styles['comm-google-section']} comm-google-section`}>
          
          {/* Mock Google Card */}
          <div className={styles['comm-google-card']}>
            <div className={styles['comm-google-header']}>
              <div className={styles['comm-g-logo']}>
                <i className="ri-google-fill"></i>
              </div>
              <div className={styles['comm-g-info']}>
                <h3>Auto Evolution Workshop</h3>
                <div className={styles['comm-g-rating']}>
                  4.9 
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <span>(342 reviews)</span>
                </div>
              </div>
            </div>

            <div className={styles['comm-g-details']}>
              <div className={styles['comm-g-detail-item']}>
                <i className="ri-map-pin-2-fill"></i>
                <span>125/1 West Agargaon, Dhaka 1207</span>
              </div>
              <div className={styles['comm-g-detail-item']}>
                <i className="ri-time-fill"></i>
                {/* Dynamic Status */}
                {mounted ? (
                  <>
                    <span style={{color: shopStatus.color, fontWeight: '600'}}>
                      {shopStatus.label}
                    </span>
                    <span>{shopStatus.subLabel}</span>
                  </>
                ) : (
                  <>
                    <span style={{color: '#137333', fontWeight: '600'}}>Open now</span>
                    <span>• Closes 8 PM</span>
                  </>
                )}
              </div>
              <div className={styles['comm-g-detail-item']}>
                <i className="ri-phone-fill"></i>
                <span>+880 1711-278127</span>
              </div>
            </div>

            <div className={styles['comm-g-actions']}>
              <a href="https://g.page/r/CUVvDP67-3COEAE/review" target="_blank" rel="noreferrer" className={`${styles['comm-g-btn']} ${styles['review']}`}>
                Write a Review
              </a>
              <a href="https://maps.app.goo.gl/AutoEvolution" target="_blank" rel="noreferrer" className={`${styles['comm-g-btn']} ${styles['follow']}`}>
                Follow
              </a>
            </div>
          </div>

          {/* Description */}
          <div className={styles['comm-google-desc']}>
            <h2>Our Official <br/>Presence</h2>
            <p>
              Our Google Business Profile is the pulse of our daily operations. Check here for holiday hours, verified location data, and authentic photo updates from the workshop.
            </p>
            <div className={styles['comm-trust-badge']}>
              <i className="ri-shield-check-fill"></i> Verified Business
            </div>
          </div>

        </div>

        {/* 3. Reviews Grid */}
        <div>
          <div className={styles['comm-review-header']}>
            <h2 className={styles['comm-section-title']}>Community Voices</h2>
            <p className={styles['comm-section-sub']}>Real experiences from vehicle owners who trust us with their machines.</p>
          </div>
          
          <div className={`${styles['comm-review-grid']} comm-review-grid`}>
            {REVIEWS.map((review) => (
              <div key={review.id} className={styles['comm-review-card']}>
                <div className={styles['comm-review-stars']}>
                  {[...Array(review.stars)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
                </div>
                <p className={styles['comm-review-text']}>"{review.text}"</p>
                <div className={styles['comm-review-author']}>
                  <div className={styles['comm-avatar']}>{review.initial}</div>
                  <div className={styles['comm-author-info']}>
                    <span className={styles['comm-author-name']}>{review.author}</span>
                    <span className={styles['comm-author-source']}>{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Dynamic Updates Feed */}
        <div className={`${styles['comm-updates-section']} comm-updates-section`}>
          <div className={styles['comm-feed-header']}>
             <div className={styles['comm-feed-title-col']}>
                <h2 className={styles['comm-section-title']}>Workshop Feed</h2>
             </div>
             
             {/* Controls: Search + Filters */}
             <div className={styles['comm-feed-controls']}>
                
                {/* Search Bar */}
                <div className={styles['comm-search-wrapper']}>
                  <i className={`ri-search-line ${styles['comm-search-icon']}`}></i>
                  <input 
                    type="text" 
                    placeholder="Search updates..." 
                    className={styles['comm-search-input']}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Filters */}
                <div className={styles['comm-feed-filters']}>
                  {FILTER_TABS.map((tab) => (
                    <button 
                      key={tab} 
                      onClick={() => handleFilterChange(tab)}
                      className={`${styles['comm-filter-btn']} ${activeCategory === tab ? styles['active'] : ''}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
             </div>
          </div>
          
          <div className={styles['comm-feed-list']}>
            {displayedUpdates.length > 0 ? (
              displayedUpdates.map((item) => (
                <div key={item.id} className={styles['comm-feed-item']}>
                  <div className={styles['comm-feed-icon']}>
                    <i className={item.icon}></i>
                  </div>
                  <div className={styles['comm-feed-content']}>
                    <span className={styles['comm-feed-meta']}>{item.category} • {item.date}</span>
                    <h3 className={styles['comm-feed-title']}>{item.title}</h3>
                    <p className={styles['comm-feed-desc']}>{item.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{color:'#6b7280', textAlign:'center', padding:'2rem'}}>
                No updates found matching your criteria.
              </p>
            )}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className={styles['comm-load-more']}>
              <button onClick={handleLoadMore} className={styles['comm-load-more-btn']}>
                Load More Updates
              </button>
            </div>
          )}
        </div>

        {/* 5. Join / Newsletter */}
        <div className={styles['comm-join-block']}>
          <div className={styles['comm-bg-watermark']}>CONNECT</div>
          <div className={styles['comm-join-content']}>
            <h2 className={styles['comm-join-title']}>Join the Inner Circle</h2>
            <p className={styles['comm-join-text']}>
              Get technical tips, recall alerts, and exclusive event invitations delivered to your inbox. No spam, just engineering.
            </p>
            <div className={styles['comm-input-group']}>
              <input type="email" placeholder="Enter your email address" className={styles['comm-input']} />
              <button className={styles['comm-submit']}>Subscribe</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
