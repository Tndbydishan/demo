
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { CareersContent } from '../../components/CareersContent';
import { JobBoard } from '../../components/JobBoard';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Careers',
  description: 'Join the Auto Evolution team. Explore job openings and internship opportunities.',
};

export default function CareersPage() {
  return (
    <>
      <PageHero 
        title="CAREERS"
        subtitle="JOIN THE EVOLUTION"
        mediaType="image"
        // Cinematic image of team or workshop interaction
        mediaSource="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop"
      />
      
      <CareersContent />
      
      <JobBoard />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12 mt-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
