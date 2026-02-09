
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { CommunityContent } from '../../components/CommunityContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Community',
  description: 'Join the Auto Evolution Community. Updates, reviews, and direct support.',
};

export default function CommunityPage() {
  return (
    <>
      <PageHero 
        title="COMMUNITY"
        subtitle="HUB & UPDATES"
        mediaType="image"
        // Friendly, community-oriented image (people talking near cars)
        mediaSource="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop"
      />
      
      <CommunityContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
