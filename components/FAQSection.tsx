
'use client';

import React, { useState, useRef, useLayoutEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './FAQSection.module.css';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: React.ReactNode;
}

const CATEGORIES = ['All', 'Booking', 'Services', 'Pricing', 'Policies', 'Logistics'];

const FAQ_DATA: FAQItem[] = [
  {
    id: '1',
    category: 'Booking',
    question: "How do I book an appointment?",
    answer: "You can book an appointment directly through our website using the 'Booking' page. Alternatively, you can call our hotline or message us on WhatsApp. We recommend booking at least 3 days in advance for major services."
  },
  {
    id: '2',
    category: 'Services',
    question: "What types of services do you offer?",
    answer: "We specialize in comprehensive automotive care, including General Maintenance, ECU Tuning, Hybrid System Repair, Engine Diagnostics, Suspension Overhauls, and Performance Upgrades."
  },
  {
    id: '3',
    category: 'Pricing',
    question: "How is pricing estimated?",
    answer: "Basic services (oil change, inspection) have fixed rates. For repairs and modifications, we provide a preliminary estimate after an initial diagnosis. We believe in transparency—no hidden costs will be added without your prior approval."
  },
  {
    id: '4',
    category: 'Services',
    question: "How long will my service take?",
    answer: "Routine maintenance usually takes 2-4 hours. Complex diagnostics or major repairs may take 2-5 business days. We will provide a timeline upon vehicle inspection and keep you updated throughout the process."
  },
  {
    id: '5',
    category: 'Policies',
    question: "Do you offer a warranty on parts and labor?",
    answer: "Yes. We offer a standard 6-month warranty on labor and a manufacturer-specific warranty on all genuine parts replaced by us. Performance modifications may have different warranty terms which will be discussed prior to installation."
  },
  {
    id: '6',
    category: 'Policies',
    question: "What is your cancellation policy?",
    answer: "We request at least 24 hours' notice for cancellations or rescheduling. This allows us to offer the slot to other customers in need of urgent repairs."
  },
  {
    id: '7',
    category: 'Logistics',
    question: "Can I drop off my vehicle before opening hours?",
    answer: "Yes, we have a secure key-drop service. Please park in the designated area and leave your keys with our security personnel. Ensure you have removed all valuables from the vehicle."
  },
  {
    id: '8',
    category: 'Policies',
    question: "What are my responsibilities as a customer?",
    answer: "Please ensure your vehicle is free of personal belongings before service. You must also authorize the work order before we begin any repairs. Payment is due upon completion of the service."
  },
  {
    id: '9',
    category: 'Policies',
    question: "Where can I find your Terms & Conditions?",
    answer: "Our full Terms & Conditions are available at the workshop reception and are attached to every digital invoice. They cover liability, payment terms, and vehicle storage policies."
  }
];

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter Logic
  const filteredData = useMemo(() => {
    return FAQ_DATA.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Animation when list changes
  useLayoutEffect(() => {
    if (!listRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-item-anim', 
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.05, 
          ease: 'power2.out',
          overwrite: 'auto'
        }
      );
    }, listRef);

    return () => ctx.revert();
  }, [filteredData]); // Re-run animation when data subset changes

  const toggleItem = (id: string) => {
    setActiveIndex(prev => (prev === id ? null : id));
  };

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
    setActiveIndex(null); // Close active item when switching views
  };

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.container}>
        
        {/* Header Area */}
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
             <i className="ri-question-answer-fill"></i>
          </div>
          <h2 className={styles.title}>
            Frequently Asked <span>Questions</span>
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            Find detailed answers about our services, pricing, and workshop policies.
          </p>
        </div>

        {/* Controls: Search & Filter */}
        <div className={styles.controlsWrapper}>
          
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <i className={`ri-search-line ${styles.searchIcon}`}></i>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Tabs */}
          <div className={styles.categoryTabs}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.tabBtn} ${activeCategory === cat ? styles.activeTab : ''}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className={styles.accordion} ref={listRef}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => {
              const isOpen = activeIndex === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`${styles.item} ${isOpen ? styles.activeItem : ''} faq-item-anim`}
                >
                  <button 
                    className={styles.questionButton}
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className={styles.questionContent}>
                      <span className={styles.categoryTag}>{item.category}</span>
                      <span className={styles.questionText}>{item.question}</span>
                    </div>
                    
                    <span className={styles.iconContainer}>
                      <i className={`ri-add-line ${isOpen ? styles.iconOpen : ''}`}></i>
                    </span>
                  </button>
                  
                  <div 
                    id={`faq-answer-${item.id}`}
                    className={`${styles.answerWrapper} ${isOpen ? styles.open : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className={styles.answerInner}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            /* Empty State */
            <div className={styles.noResults}>
              <i className="ri-file-search-line"></i>
              <p>No questions found matching "{searchTerm}"</p>
              <button onClick={() => { setSearchTerm(''); setActiveCategory('All'); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
