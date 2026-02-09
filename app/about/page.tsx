import React from 'react';
import { PageHero } from '../../components/PageHero';
import { PartnerMarquee } from '../../components/PartnerMarquee';
import { ContactInfoSection } from '../../components/ContactInfoSection';

export const metadata = {
  title: 'About Us',
  description: 'Learn about our legacy, mission, and the team behind Auto Evolution.',
};

const PARTNERS = [
  { name: 'Certified', icon: 'ri-medal-fill' },
  { name: 'Quality', icon: 'ri-shield-check-fill' },
  { name: 'Expert', icon: 'ri-user-star-fill' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero 
        title="ABOUT US"
        subtitle="OUR LEGACY & MISSION"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2944&auto=format&fit=crop"
      />
      <div className="max-w-[1440px] mx-auto">
        <ContactInfoSection />
      </div>
      <PartnerMarquee partners={PARTNERS} />
    </>
  );
}