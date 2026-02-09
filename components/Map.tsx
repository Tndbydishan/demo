
import React from 'react';
import styles from './Map.module.css';

interface MapProps {
  locationName?: string | React.ReactNode;
  address?: string;
  embedUrl?: string;
  className?: string;
}

export const Map: React.FC<MapProps> = ({
  locationName = (
    <>
      OUR <span>LOCATION</span>
    </>
  ),
  address = "125/1 West Agargaon, Dhaka 1207",
  // Default embed URL pointing to West Agargaon area
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1150.0175037951637!2d90.3677859765794!3d23.780245907931672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c100715bbf59%3A0x8e1fbdb9ecf0eae5!2sAuto%20Evolution%20Workshop!5e0!3m2!1sen!2sbd!4v1770009619518!5m2!1sen!2sbd",
  className = ""
}) => {
  return (
    <div className={`${styles['map-container']} ${className}`}>
      
      {/* Header Section */}
      <div className={styles['map-header']}>
        <h2 className={styles['map-title']}>
          {locationName}
        </h2>
        <p className={styles['map-address']}>
          <i className={`ri-map-pin-line ${styles['map-pin-icon']}`}></i>
          {address}
        </p>
      </div>

      {/* Map Iframe Container */}
      <div className={styles['map-frame-wrapper']}>
        <iframe 
          src={embedUrl}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Map Location"
          className={styles['map-iframe']}
        />
      </div>

    </div>
  );
};
