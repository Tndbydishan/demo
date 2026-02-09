
'use client';

import React, { useState } from 'react';
import styles from './BookingForm.module.css';

export const BookingForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Glassmorphic Container */}
        <div className={styles.glassWrapper}>
          
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
               <i className="ri-calendar-check-fill"></i>
            </div>
            <h2 className={styles.title}>
              Service <span>Booking</span>
            </h2>
            <div className={styles.divider}></div>
            <p className={styles.subtitle}>
              Fill out the form below to secure your appointment. Our team will confirm your slot shortly.
            </p>
          </div>

          {/* Form Wrapper */}
          <div className={styles.iframeContainer}>
            
            {/* Loading Spinner */}
            {isLoading && (
              <div className={styles.loaderOverlay}>
                <div className={styles.spinner}></div>
                <span>Loading Form...</span>
              </div>
            )}

            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSezIyOfKAlgjuuziGqQMPnPCltcovp59_QFfjk8tNe1DS4k3A/viewform?embedded=true" 
              width="640" 
              height="1702" 
              className={styles.iframe}
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              onLoad={() => setIsLoading(false)}
              title="Auto Evolution Booking Form"
            >
              Loading…
            </iframe>
            
          </div>

          <div className={styles.footerNote}>
            <p><i className="ri-lock-2-line"></i> Your data is processed securely via Google Forms.</p>
          </div>

        </div>
      </div>
    </section>
  );
};
