
'use client';

import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './EventSection.css';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// --- Types ---
export interface EventItem {
  id: string;
  slug: string; // Used for URL naming
  title: string;
  date: string;
  thumbnail: string;
  shortDesc: string;
  content: React.ReactNode; // Full article text
  gallery: string[]; // Array of image URLs
}

// --- Dummy Data ---
const EVENTS_DATA: EventItem[] = [
  {
    id: '1',
    slug: 'track-day-championship-2025',
    title: 'Track Day Championship 2025',
    date: 'MARCH 15, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2940&auto=format&fit=crop',
    shortDesc: 'Join us for the ultimate track experience at Dhaka Arena.',
    content: (
      <>
        <p>The 2025 Track Day Championship is set to be our biggest event yet. Bringing together amateur and professional drivers, this event focuses on precision driving, vehicle handling, and safety on the track.</p>
        <p>Participants will undergo a rigorous safety briefing before taking their vehicles to the limit. Our certified instructors will be present to offer guidance on cornering, braking points, and racing lines.</p>
        <h3>Event Highlights</h3>
        <ul>
            <li>Pro-Level Timing Gear</li>
            <li>Vehicle Safety Inspections</li>
            <li>Networking with Industry Experts</li>
        </ul>
      </>
    ),
    gallery: [
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532906619279-a79716768393?q=80&w=2938&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2940&auto=format&fit=crop'
    ]
  },
  {
    id: '2',
    slug: 'hybrid-engine-masterclass',
    title: 'Hybrid Engine Masterclass',
    date: 'APRIL 10, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1486262715619-72a604e3d4b3?q=80&w=2940&auto=format&fit=crop',
    shortDesc: 'Deep dive into the complexities of modern hybrid powertrains.',
    content: (
      <>
        <p>As the automotive industry shifts towards electrification, understanding hybrid systems is crucial. This masterclass covers the fundamental architecture of Series, Parallel, and Series-Parallel hybrids.</p>
        <p>We will dissect a Toyota Prius Gen 4 battery pack and demonstrate proper cell balancing techniques. This is a hands-on workshop designed for technicians looking to upgrade their skills.</p>
        <h3>What You Will Learn</h3>
        <ul>
            <li>Inverter Diagnostics</li>
            <li>High Voltage Safety Protocols</li>
            <li>Regenerative Braking Calibration</li>
        </ul>
      </>
    ),
    gallery: [
       'https://images.unsplash.com/photo-1530046339160-711535b94977?q=80&w=2940&auto=format&fit=crop',
       'https://images.unsplash.com/photo-1504222490245-4815c9e610a8?q=80&w=2940&auto=format&fit=crop'
    ]
  },
  {
    id: '3',
    slug: 'summer-auto-expo',
    title: 'Summer Auto Expo',
    date: 'JUNE 22, 2025',
    thumbnail: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2800&auto=format&fit=crop',
    shortDesc: 'Showcasing the finest modified cars in the region.',
    content: (
      <>
        <p>Auto Evolution Workshop is proud to host the Summer Auto Expo. Expect to see over 50 uniquely modified vehicles ranging from JDM legends to European exotics.</p>
        <p>There will be competitions for Best Stance, Best Engine Bay, and Loudest Exhaust (measured by decibel meter). Food stalls and live music will keep the energy high throughout the day.</p>
      </>
    ),
    gallery: [
      'https://images.unsplash.com/photo-1600706432502-7939e386763d?q=80&w=2787&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562426503-12e6fd634081?q=80&w=2940&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop'
    ]
  }
];

// --- Sub-Component: Event Card ---
interface EventCardProps {
  event: EventItem;
  onClick: (e: EventItem) => void;
}

const EventCard: React.FC<EventCardProps> = ({ 
  event, 
  onClick 
}) => {
  return (
    <div className="ev-card" onClick={() => onClick(event)}>
      <div className="ev-card-image-wrapper">
        <img src={event.thumbnail} alt={event.title} className="ev-card-img" />
        <div className="ev-date-badge">{event.date}</div>
      </div>
      
      {/* Glass Overlay on Hover */}
      <div className="ev-card-overlay">
        <div className="ev-card-content">
          <h3 className="ev-card-title">{event.title}</h3>
          <p className="ev-card-desc">{event.shortDesc}</p>
          <button className="ev-card-btn">
            Read More <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Sub-Component: Event Modal ---
interface EventModalProps {
  event: EventItem;
  onClose: () => void;
  isClosing: boolean;
}

const EventModal = ({ event, onClose, isClosing }: EventModalProps) => {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const [isViewerClosing, setIsViewerClosing] = useState(false);

  // Lock body scroll and compensate for scrollbar width
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalPaddingRight = document.body.style.paddingRight;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';
    
    return () => { 
      document.body.style.overflow = ''; 
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  // Helper to close viewer with animation
  const closeViewer = useCallback(() => {
    setIsViewerClosing(true);
    // Wait for CSS animation to finish (400ms matches CSS)
    setTimeout(() => {
      setViewerIndex(null);
      setIsViewerClosing(false);
    }, 400);
  }, []);

  // Keyboard Navigation for Viewer
  useEffect(() => {
    if (viewerIndex === null) return;

    const handleViewerKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        e.stopImmediatePropagation();
        closeViewer();
      }
      if (e.key === 'ArrowLeft') {
        e.stopPropagation();
        setViewerIndex(prev => (prev !== null && prev > 0 ? prev - 1 : event.gallery.length - 1));
      }
      if (e.key === 'ArrowRight') {
        e.stopPropagation();
        setViewerIndex(prev => (prev !== null && prev < event.gallery.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleViewerKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleViewerKeyDown, { capture: true });
  }, [viewerIndex, event.gallery.length, closeViewer]);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setViewerIndex(prev => (prev !== null && prev < event.gallery.length - 1 ? prev + 1 : 0));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setViewerIndex(prev => (prev !== null && prev > 0 ? prev - 1 : event.gallery.length - 1));
  };

  // Determine animation classes for main modal
  const backdropClass = `ev-modal-backdrop ${isClosing ? 'exiting' : 'entering'}`;
  const contentClass = `ev-modal-glass-container ${isClosing ? 'exiting' : 'entering'}`;

  // Determine animation classes for viewer
  const viewerBackdropClass = `ev-viewer-backdrop ${isViewerClosing ? 'exiting' : 'entering'}`;
  const viewerContentClass = `ev-viewer-content ${isViewerClosing ? 'exiting' : 'entering'}`;

  return (
    <>
      <div className={backdropClass} onClick={onClose}>
        <div className={contentClass} onClick={(e) => e.stopPropagation()}>
          
          {/* Close Button */}
          <button className="ev-modal-close" onClick={onClose} aria-label="Close Modal">
            <i className="ri-close-line"></i>
          </button>

          {/* Scrollable Content */}
          <div className="ev-modal-scroll-area">
            
            {/* Header Image */}
            <div className="ev-modal-header-img" style={{ backgroundImage: `url(${event.thumbnail})` }}>
              <div className="ev-modal-header-overlay">
                <span className="ev-modal-date">{event.date}</span>
                <h2 className="ev-modal-title">{event.title}</h2>
              </div>
            </div>

            <div className="ev-modal-body">
              {/* Article Content */}
              <article className="ev-modal-article">
                {event.content}
              </article>

              {/* Image Gallery */}
              {event.gallery.length > 0 && (
                <div className="ev-modal-gallery">
                  <h4 className="ev-gallery-title">Event Gallery</h4>
                  <div className="ev-gallery-grid">
                    {event.gallery.map((imgSrc, idx) => (
                      <div 
                        key={idx} 
                        className="ev-gallery-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setViewerIndex(idx);
                        }}
                      >
                        <img src={imgSrc} alt={`${event.title} gallery ${idx + 1}`} />
                        <div className="ev-gallery-overlay">
                           <i className="ri-zoom-in-line"></i>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* --- Image Viewer (Lightbox) --- */}
      {viewerIndex !== null && (
         <div 
            className={viewerBackdropClass}
            onClick={(e) => { 
              e.stopPropagation(); 
              closeViewer(); 
            }}
         >
            <div className={viewerContentClass} onClick={(e) => e.stopPropagation()}>
               <button className="ev-viewer-close" onClick={closeViewer} aria-label="Close Viewer">
                  <i className="ri-close-line"></i>
               </button>
               <button className="ev-viewer-prev" onClick={prevImage} aria-label="Previous Image">
                  <i className="ri-arrow-left-s-line"></i>
               </button>
               <img 
                  src={event.gallery[viewerIndex]} 
                  alt={`View ${viewerIndex + 1}`} 
                  className="ev-viewer-img" 
               />
               <button className="ev-viewer-next" onClick={nextImage} aria-label="Next Image">
                  <i className="ri-arrow-right-s-line"></i>
               </button>
               <div className="ev-viewer-counter">
                  {viewerIndex + 1} <span style={{opacity:0.5, margin:'0 5px'}}>/</span> {event.gallery.length}
               </div>
            </div>
         </div>
      )}
    </>
  );
};

// --- Main Component ---
export const EventSection: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // 1. GSAP Animation on Mount
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.ev-header', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ev-header',
          start: 'top 85%',
        }
      });

      gsap.to('.ev-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.ev-grid',
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Initialize & Check URL on Load/Update
  useEffect(() => {
    setMounted(true);
    const eventSlug = searchParams.get('event');
    if (eventSlug) {
      const found = EVENTS_DATA.find(e => e.slug === eventSlug);
      if (found) {
        setSelectedEvent(found);
      }
    } else {
      // If no param, ensure we close
      if (selectedEvent) {
        handleClose();
      }
    }
  }, [searchParams]);

  // 3. Handle Opening
  const openModal = (event: EventItem) => {
    setIsClosing(false);
    setSelectedEvent(event);
    const params = new URLSearchParams(searchParams.toString());
    params.set('event', event.slug);
    window.history.pushState(null, '', `?${params.toString()}`);
  };

  // 4. Handle Closing with Animation Delay
  const handleClose = useCallback(() => {
    if (!selectedEvent) return;
    setIsClosing(true);
    
    // Clean URL immediately for UX, but keep component mounted for animation
    const params = new URLSearchParams(searchParams.toString());
    params.delete('event');
    const newPath = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    window.history.replaceState(null, '', newPath);

    // Unmount after animation finishes (500ms matches CSS)
    setTimeout(() => {
      setSelectedEvent(null);
      setIsClosing(false);
    }, 500);
  }, [pathname, searchParams, selectedEvent]);

  // 5. Close on Escape Key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedEvent) handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [handleClose, selectedEvent]);

  return (
    <section className="ev-section" ref={containerRef}>
      <div className="ev-container">
        <div className="ev-header">
          <h2 className="ev-headline">Upcoming <span style={{ color: '#D12027'}}>Events</span></h2>
          <div className="ev-line"></div>
          <p className="ev-subtext">
            Join the community. Experience the thrill of engineering and performance at our exclusive workshops and meets.
          </p>
        </div>

        <div className="ev-grid">
          {EVENTS_DATA.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={openModal} 
            />
          ))}
        </div>

      </div>

      {mounted && selectedEvent && createPortal(
        <EventModal 
          event={selectedEvent} 
          onClose={handleClose} 
          isClosing={isClosing}
        />,
        document.body
      )}
    </section>
  );
};
