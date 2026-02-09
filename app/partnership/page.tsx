
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { PartnershipContent } from '../../components/PartnershipContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Partnership Programme',
  description: 'Collaborate with Auto Evolution. Corporate fleets, logistics support, and automotive technology validation.',
};

export default function PartnershipPage() {
  return (
    <>
      <PageHero 
        title="PARTNERSHIP"
        subtitle="PROGRAMME"
        mediaType="image"
        // Professional meeting / blueprint / architectural vibe
        mediaSource="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
      />
      
      <PartnershipContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
