
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { SocialFeed } from '../../components/SocialFeed';
import { EventSection } from '../../components/EventSection';

export const metadata = {
  title: 'News & Insights',
  description: 'Latest automotive trends, technical guides, and workshop news.',
};

export default function BlogsPage() {
  return (
    <>
      <PageHero 
        title="INSIGHTS"
        subtitle="NEWS & UPDATES"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1507767386712-0c34a011042f?q=80&w=2940&auto=format&fit=crop"
      />
      <EventSection />
      <SocialFeed />
    </>
  );
}
