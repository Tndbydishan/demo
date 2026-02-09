
import React from 'react';
import styles from './PageHero.module.css';

export type MediaType = 'image' | 'video';

interface PageHeroProps {
  /** The main large heading text */
  title: string | React.ReactNode;
  /** Small accent text above the title */
  subtitle?: string;
  /** 'image' (includes gifs) or 'video' (mp4/webm) */
  mediaType: MediaType;
  /** URL to the media asset */
  mediaSource: string;
  /** Optional override for height (e.g., '100vh') */
  height?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  mediaType,
  mediaSource,
  height,
  className = ""
}) => {
  
  const customStyle = height ? { height } : {};

  return (
    <div 
      className={`${styles['page-hero-container']} ${className}`} 
      style={customStyle}
    >
      
      {/* 1. Media Layer */}
      <div className={styles['page-hero-media-wrapper']}>
        {mediaType === 'video' ? (
          <video
            className={styles['page-hero-media']}
            autoPlay
            loop
            muted
            playsInline
            // Ensure video covers the area without black bars
            style={{ objectFit: 'cover' }}
          >
            <source src={mediaSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={mediaSource} 
            alt="Page Header" 
            className={styles['page-hero-media']} 
            loading="eager"
          />
        )}
      </div>

      {/* 2. Gradient Overlay */}
      <div className={styles['page-hero-overlay']}></div>

      {/* 3. Text Content */}
      <div className={styles['page-hero-content']}>
        {subtitle && (
          <span className={styles['page-hero-subtitle']}>
            {subtitle}
          </span>
        )}
        <h1 className={styles['page-hero-title']}>
          {title}
        </h1>
      </div>

    </div>
  );
};