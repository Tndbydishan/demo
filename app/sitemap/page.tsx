
import React from 'react';
import { PageHero } from '../../components/PageHero';
import { SitemapContent } from '../../components/SitemapContent';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'Sitemap',
  description: 'Complete index of Auto Evolution website pages, services, and operational documents.',
};

export default function SitemapPage() {
  return (
    <>
      <PageHero 
        title="SITE MAP"
        subtitle="ARCHITECTURE & INDEX"
        mediaType="image"
        // Architectural / Blueprint / Schematic style image
        mediaSource="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2940&auto=format&fit=crop"
      />
      
      <SitemapContent />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 pb-12">
         <ContactInfoSection />
      </div>
    </>
  );
}
