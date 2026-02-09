
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { FAQSection } from '../../components/FAQSection';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'FAQ',
  description: 'Common questions about appointments, services, and policies.',
};

export default function FAQPage() {
  return (
    <>
      <PageHero 
        title="SUPPORT"
        subtitle="FREQUENTLY ASKED QUESTIONS"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1632823471415-3bd4426569cc?q=80&w=2940&auto=format&fit=crop"
      />
      
      <div className="w-full max-w-[1440px] mx-auto pb-12">
        <FAQSection />
        
        <div className="px-4 lg:px-12 mt-8">
           <ContactInfoSection />
        </div>
      </div>
    </>
  );
}
