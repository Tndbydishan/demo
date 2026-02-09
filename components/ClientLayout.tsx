
'use client';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { Logo } from './Logo';
import { Preloader } from './Preloader';
import styles from './ClientLayout.module.css';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  
  // PRELOADER LOGIC
  // We initialize to false to match server HTML (prevent hydration mismatch).
  // We use useLayoutEffect to switch it to true BEFORE the browser paints.
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    // Only run on home page
    if (pathname === '/') {
      const hasSeen = sessionStorage.getItem('hasSeenPreloader');
      if (!hasSeen) {
        setIsLoading(true);
        document.body.style.overflow = 'hidden';
      }
    }
  }, [pathname]);

  const handlePreloaderComplete = () => {
    // Fade out sequence
    setIsLoading(false);
    document.body.style.overflow = ''; // Restore scroll
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <div className={styles.container}>
      
      {/* PRELOADER - Condition ensures it blocks view if active */}
      {isLoading && (
        <Preloader onComplete={handlePreloaderComplete}>
          <Logo disableLink color="#141414" />
        </Preloader>
      )}

      {/* FIXED LOGO (Top Left) */}
      <div className={styles.fixedLogo}>
        <Logo color="#121212" />
      </div>

      {/* FIXED INQUIRE BUTTON (Top Right - Desktop Only) */}
      <div className={styles.fixedButtonWrapper}>
        <Link href="/booking" className={styles.fixedButton}>
          Inquire
        </Link>
      </div>

      {/* NAVBAR (Floating Pill) */}
      <Navbar />

      {/* MAIN CONTENT */}
      {/* Opacity transition allows smooth entry after preloader */}
      <main className={`${styles.main} ${!isLoading ? styles.fadeInPage : ''}`}>
        {children}
        <Footer />
      </main>

    </div>
  );
};
