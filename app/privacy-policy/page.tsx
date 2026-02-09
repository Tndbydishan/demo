
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { PrivacyContent } from '../../components/PrivacyContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Our commitment to data protection, digital identity privacy, and ethical information handling.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero 
        title="PRIVACY POLICY"
        subtitle="DATA PROTECTION & ETHICS"
        mediaType="image"
        // Using a clean, abstract technical image to represent data/security
        mediaSource="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2800&auto=format&fit=crop"
      />
      
      <PrivacyContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
