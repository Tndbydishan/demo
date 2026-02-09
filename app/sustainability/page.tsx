
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { SustainabilityContent } from '../../components/SustainabilityContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Sustainability',
  description: 'Responsible Service. Sustainable Practice. Our commitment to efficient and ethical automotive care.',
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero 
        title="SUSTAINABILITY"
        subtitle="RESPONSIBLE SERVICE"
        mediaType="image"
        // Using a clean, bright, technical workshop image (not a forest)
        mediaSource="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <SustainabilityContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
