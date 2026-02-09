
'use client';

import React, { useEffect, useRef } from 'react';
import './SocialFeed.css';

// Declare FB on window to prevent TS errors
declare global {
  interface Window {
    FB: any;
  }
}

export const SocialFeed: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Load Facebook SDK on component mount
  useEffect(() => {
    // 1. Initial Render
    const initFacebook = () => {
      if (window.FB) {
        window.FB.XFBML.parse(containerRef.current); 
      } else {
        // Inject SDK if not present
        if (!document.getElementById('facebook-jssdk')) {
            const script = document.createElement('script');
            script.id = 'facebook-jssdk';
            script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0";
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            document.body.appendChild(script);
        }
      }
    };

    initFacebook();

    // 2. Handle Resize (Debounced)
    // The plugin needs to be re-parsed to adapt to new container widths on resize/orientation change
    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.FB && containerRef.current) {
          // Reset width to ensure it recalculates correctly
          window.FB.XFBML.parse(containerRef.current);
        }
      }, 250); // 250ms debounce
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <div className="sf-wrapper">
      <div id="fb-root"></div>
      
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Header - Responsive alignment via CSS */}
        <div className="sf-header">
            <h2 className="sf-headline">
              Social <span>Feed</span>
            </h2>
            <div className="sf-underline"></div>
            <p className="sf-subtitle">
              Follow our latest projects, community events, and workshop updates directly from our official page.
            </p>
        </div>

        {/* Facebook Container */}
        <div className="sf-facebook-container" ref={containerRef}>
          <div className="sf-facebook-glass-wrapper">
            
            {/* Robust Card Header */}
            <div className="sf-card-header">
               <div className="sf-card-icon">
                 <i className="ri-facebook-fill"></i>
               </div>
               <span className="sf-card-title">Facebook</span>
            </div>

            {/* Plugin Wrapper */}
            <div className="sf-plugin-wrapper">
              <div 
                className="fb-page" 
                data-href="https://www.facebook.com/AutoEvolutionWorkshopLtd" 
                data-tabs="timeline" 
                data-width="450" /* Leave empty to allow full fluidity up to 500px parent */
                data-height="600" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true">
                  <blockquote cite="https://www.facebook.com/facebook" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/facebook">Facebook</a>
                  </blockquote>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};
