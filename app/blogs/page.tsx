
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
        mediaSource="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <EventSection />
      <SocialFeed />
    </>
  );
}
