
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { ContactInfoSection } from '../../components/ContactInfoSection';
import { Map } from '../../components/Map';
import { SOS } from '../../components/SOS';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team. Located in West Agargaon, Dhaka.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      
      {/* 1. Cinematic Page Hero */}
      <PageHero 
        title="Contact."
        subtitle="Get In Touch"
        mediaType="image"
        // Using a high-quality dark automotive aesthetic image
        mediaSource="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2800&auto=format&fit=crop"
      />
      
      {/* 
         Main Page Container
         - Max width 2560px (4K support)
         - Component spacing handled internally by CSS modules
      */}
      <div className="w-full max-w-[2560px] mx-auto pb-24 lg:pb-40 mt-12 md:mt-24 lg:mt-32">
        
        {/* Contact Info Section */}
        <ContactInfoSection />

        {/* Map Section */}
        <Map 
          locationName={
            <>
              OUR <span>LOCATION</span>
            </>
          }
          address="125/1 West Agargaon, Dhaka 1207"
        />

        {/* SOS Emergency Section */}
        <SOS />

      </div>
    </div>
  );
}