
'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { NAV_LINKS } from '../data';
import { NavTheme } from '../types';
import styles from './Navbar.module.css';

interface NavbarProps {
  theme?: NavTheme;
}

export default function Navbar({ theme = 'light' }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  
  const pathname = usePathname();
  const router = useRouter();

  const activePage = NAV_LINKS.find(link => link.href === pathname)?.id || 'home';

  // Responsive Check
  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1440;
      setIsDesktop(isLargeScreen);
      
      if (isLargeScreen && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMobileMenuOpen]);

  // Handlers
  const handleToggle = () => {
    if (isMobileMenuOpen) {
      setTimeout(() => setActiveMobileSubmenu(null), 300);
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigate = (href: string) => {
    router.push(href);
    if (!isDesktop && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setTimeout(() => setActiveMobileSubmenu(null), 300);
    }
  };

  const onLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    handleNavigate(href);
  };

  return (
    <>
      {/* =========================================
          🖥️ DESKTOP ELEMENTS 
      ========================================= */}
      {isDesktop && (
        <nav className={`${styles['nav-navbar']} ${styles[theme]}`}>
          <ul className={styles['nav-list']}>
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.id;
              
              return (
                <li key={link.id} className={styles['nav-item']}>
                  <Link 
                    href={link.href} 
                    onClick={(e) => onLinkClick(e, link.href)}
                    className={`${styles['nav-link']} ${isActive ? styles['active'] : ''}`}
                  >
                    {link.label}
                  </Link>

                  {/* Dropdown */}
                  {link.subItems && (
                    <div className={styles['nav-dropdown']}>
                       <div className={styles['nav-dropdown-content']}>
                         {link.subItems.map((sub, sIdx) => (
                           <Link 
                            key={sIdx} 
                            href={sub.href} 
                            className={styles['nav-dropdown-link']}
                           >
                             {sub.label}
                           </Link>
                         ))}
                       </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      {/* =========================================
          📱 MOBILE NAVBAR 
      ========================================= */}
      {!isDesktop && (
        <>

          {/* Hamburger Button */}
          <button
            onClick={handleToggle}
            className={`${styles['nav-hamburger']} ${styles[theme]}`}
            aria-label="Toggle Menu"
          >
             {/* Open Icon (Hamburger) */}
             <i className={`${styles['nav-icon']} ${styles['nav-icon-open']} ${isMobileMenuOpen ? styles['hidden'] : styles['visible']} ri-menu-4-line`}></i>
             
             {/* Close Icon (X) */}
             <i className={`${styles['nav-icon']} ${styles['nav-icon-close']} ${isMobileMenuOpen ? styles['visible'] : styles['hidden']} ri-close-line`}></i>
          </button>

          {/* Full Screen Overlay */}
          <div className={`${styles['nav-mobile-overlay']} ${isMobileMenuOpen ? styles['open'] : ''}`}>
            
             <div className={styles['nav-mobile-content-wrapper']}>
                
                {/* Main Menu Layer */}
                <div className={`${styles['nav-mobile-menu-container']} ${activeMobileSubmenu ? styles['shifted'] : ''}`}>
                   <ul className={styles['nav-mobile-list']}>
                     {NAV_LINKS.map((link, idx) => {
                        const isActive = activePage === link.id;
                        // Stagger delay
                        const delayStyle = { transitionDelay: isMobileMenuOpen ? `${0.2 + (idx * 0.05)}s` : '0s' };

                        return (
                          <li key={link.id} className={styles['nav-mobile-anim-item']} style={delayStyle}>
                             {link.subItems ? (
                                <button 
                                  onClick={() => setActiveMobileSubmenu(link.id)}
                                  className={`${styles['nav-mobile-link-btn']} ${isActive ? styles['active'] : ''}`}
                                >
                                  {link.label}
                                  <i className="ri-arrow-right-line" style={{ fontSize: '20px', opacity: 0.5 }}></i>
                                </button>
                             ) : (
                                <a 
                                  href={link.href}
                                  onClick={(e) => onLinkClick(e, link.href)}
                                  className={`${styles['nav-mobile-link']} ${isActive ? styles['active'] : ''}`}
                                >
                                  {link.label}
                                </a>
                             )}
                          </li>
                        );
                     })}

                     {/* Inquire Button (Mobile) */}
                     <li className={styles['nav-mobile-anim-item']} style={{ transitionDelay: isMobileMenuOpen ? `${0.2 + (NAV_LINKS.length * 0.05)}s` : '0s' }}>
                       <div style={{ marginTop: '1rem' }}>
                         <button 
                           onClick={() => handleNavigate('/booking')}
                           className={styles['nav-mobile-inquire']}
                         >
                           Inquire
                         </button>
                       </div>
                     </li>
                   </ul>
                </div>

                {/* Submenu Layers */}
                {NAV_LINKS.map(link => link.subItems && (
                  <div 
                    key={link.id}
                    className={`${styles['nav-mobile-submenu-container']} ${activeMobileSubmenu === link.id ? styles['active'] : ''}`}
                  >
                    <button 
                      onClick={() => setActiveMobileSubmenu(null)}
                      className={styles['nav-mobile-back']}
                    >
                      <i className="ri-arrow-left-line"></i> 
                      <span>Back</span>
                    </button>
                    
                    <h3 className={styles['nav-mobile-submenu-title']}>
                      {link.label}
                    </h3>

                    <ul className={styles['nav-mobile-submenu-list']}>
                      {link.subItems.map((sub, sIdx) => (
                        <li key={sIdx} style={{ 
                            opacity: activeMobileSubmenu === link.id ? 1 : 0,
                            transform: activeMobileSubmenu === link.id ? 'translateX(0)' : 'translateX(30px)',
                            transition: `all 0.6s cubic-bezier(0.65, 0, 0.35, 1) ${0.1 + (sIdx * 0.05)}s`
                        }}>
                          <a 
                            href={sub.href} 
                            onClick={(e) => onLinkClick(e, sub.href)}
                            className={styles['nav-mobile-submenu-link']}
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                
             </div>
          </div>
        </>
      )}
    </>
  );
};
