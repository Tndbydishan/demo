
import React from 'react';
import styles from './ContactInfoSection.module.css';

export const ContactInfoSection: React.FC = () => {
  // Seamless loop configuration
  const repetitions = [1, 2, 3, 4]; 

  return (
    <div className={styles['cis-container']}>
      
      {/* 1. Infinite Scroll Marquee */}
      <div className={styles['cis-marquee-wrapper']}>
        <div className={styles['cis-marquee-track']}>
          {/* First Set */}
          {repetitions.map((i) => (
             <React.Fragment key={`set1-${i}`}>
               <span className={styles['cis-marquee-item']}>
                 THE PLACE YOU CAN <span className="cis-text-outline">TRUST</span>
               </span>
               <span className={styles['cis-marquee-item']}>
                 <span className="cis-star">✦</span>
               </span>
             </React.Fragment>
          ))}
          {/* Duplicate Set (For seamless loop) */}
          {repetitions.map((i) => (
             <React.Fragment key={`set2-${i}`}>
               <span className={styles['cis-marquee-item']}>
                 THE PLACE YOU CAN <span className="cis-text-outline">TRUST</span>
               </span>
               <span className={styles['cis-marquee-item']}>
                 <span className="cis-star">✦</span>
               </span>
             </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Content & Contact Details */}
      <div className={styles['cis-content-wrapper']}>
        
        {/* Description Text */}
        <p className={styles['cis-description']}>
          Need a quote? or want to contact us? Feel free to Connect. 
          We are open for <strong>Collaboration</strong> and committed to provide the best service.
        </p>

        {/* Contact Grid */}
        <div className={styles['cis-details-grid']}>
          
          {/* Email Card */}
          <a href="mailto:auto.evolution.workshop@gmail.com" className={styles['cis-detail-card']}>
            <div className={styles['cis-icon-box']}>
              <i className="ri-mail-send-fill"></i>
            </div>
            <div className={styles['cis-detail-info']}>
              <span className={styles['cis-detail-label']}>Email Us</span>
              <span className={styles['cis-detail-value']}>auto.evolution.workshop@gmail.com</span>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+8801711278127" className={styles['cis-detail-card']}>
            <div className={styles['cis-icon-box']}>
              <i className="ri-phone-fill"></i>
            </div>
            <div className={styles['cis-detail-info']}>
              <span className={styles['cis-detail-label']}>Call Us</span>
              <span className={styles['cis-detail-value']}>+8801711-278127</span>
            </div>
          </a>

          {/* Location Card */}
          <a 
            href="https://maps.google.com/?q=125/1+West+Agargaon,+Dhaka+1207" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['cis-detail-card']}
          >
            <div className={styles['cis-icon-box']}>
              <i className="ri-map-pin-fill"></i>
            </div>
            <div className={styles['cis-detail-info']}>
              <span className={styles['cis-detail-label']}>Visit Us</span>
              <span className={styles['cis-detail-value']}>125/1 West Agargaon, Dhaka</span>
            </div>
          </a>

          {/* Opening Hours Card */}
          <div className={styles['cis-detail-card']}>
            <div className={styles['cis-icon-box']}>
              <i className="ri-time-fill"></i>
            </div>
            <div className={styles['cis-detail-info']}>
              <span className={styles['cis-detail-label']}>Opening Hours</span>
              <span className={styles['cis-detail-value']}>Sat - Thu: 10:00 AM - 8:00 PM</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
