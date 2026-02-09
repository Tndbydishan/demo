
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { SafetyContent } from '../../components/SafetyContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Safety Standards',
  description: 'Safety Without Compromise. Our comprehensive protocols for workplace, vehicle, and personnel safety.',
};

export default function SafetyPage() {
  return (
    <>
      <PageHero 
        title="SAFETY STANDARDS"
        subtitle="SYSTEMS & PROTOCOLS"
        mediaType="image"
        // Industrial / Technical / Safe aesthetic
        mediaSource="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2938&auto=format&fit=crop"
      />
      
      <SafetyContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
