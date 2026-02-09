
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { TermsContent } from '../../components/TermsContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Terms of Service',
  description: 'Operational terms, intellectual property rights, and service agreements.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero 
        title="TERMS OF SERVICE"
        subtitle="RIGHTS & RESPONSIBILITIES"
        mediaType="image"
        // Using a professional abstract image (handshake/contract/office vibe)
        mediaSource="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2940&auto=format&fit=crop"
      />
      
      <TermsContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
