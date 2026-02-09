
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
        mediaSource="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
