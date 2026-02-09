
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { SupportContent } from '../../components/SupportContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Customer Support',
  description: 'Here to Support You—Before, During, and After Service. Track requests, billing, and technical queries.',
};

export default function SupportPage() {
  return (
    <>
      <PageHero 
        title="SUPPORT"
        subtitle="DESIGNED AROUND YOU"
        mediaType="image"
        // Calm, human-centered, professional workspace image
        mediaSource="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
      />
      
      <SupportContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
