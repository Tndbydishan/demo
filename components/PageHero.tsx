
import React from 'react';
import Image from 'next/image';
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
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          >
            <source src={mediaSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          /* Use next/image for optimized loading with Priority */
          <Image
            src={mediaSource}
            alt="Page Hero Background"
            fill
            priority
            className={styles['page-hero-media']}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={90}
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
