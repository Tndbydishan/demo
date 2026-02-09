
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
        mediaSource="https://images.unsplash.com/photo-1597762635760-e16d4f0775a2?q=80&w=2940&auto=format&fit=crop"
      />
      
      <SustainabilityContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
