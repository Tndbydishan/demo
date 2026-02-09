
'use client';
import React, { useState, useEffect } from 'react';
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
  // Initialize to false to match server rendering (prevents hydration mismatch)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only run on client
    // logic: Show preloader if we are on Home page AND haven't seen it in this session
    if (pathname === '/') {
      const hasSeen = sessionStorage.getItem('hasSeenPreloader');
      if (!hasSeen) {
        setIsLoading(true);
        // Lock scroll when preloader is active
        document.body.style.overflow = 'hidden';
      }
    }
  }, [pathname]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = ''; // Restore scroll
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <div className={styles.container}>
      
      {/* PRELOADER - Only rendered if isLoading becomes true on client */}
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
      <main className={`${styles.main} ${styles.fadeInPage}`}>
        {children}
        <Footer />
      </main>

    </div>
  );
};
