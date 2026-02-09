
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { ContactInfoSection } from '../../components/ContactInfoSection';
import { BookingForm } from '../../components/BookingForm';

export const metadata = {
  title: 'Book a Service',
  description: 'Schedule your next service appointment online.',
};

export default function BookingPage() {
  return (
    <>
      <PageHero 
        title="BOOKING"
        subtitle="SCHEDULE SERVICE"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=2764&auto=format&fit=crop"
      />
      
      {/* 
        Container for the main booking content.
        Spacing top added to separate from Hero.
      */}
      <div className="w-full max-w-[1440px] mx-auto pb-12">
        
        {/* The Google Form Embed Component */}
        <BookingForm />

        {/* Contact Info (Below form for reference) */}
        <div className="px-4 lg:px-12">
           <ContactInfoSection />
        </div>
      </div>
    </>
  );
}
