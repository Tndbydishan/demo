
import React from 'react';
import { PageHero } from '../../components/PageHero';

export const metadata = {
  title: 'Services',
  description: 'Expert ECU Tuning, Hybrid Repair, and Advanced Diagnostics.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero 
        title="SERVICES"
        subtitle="PREMIUM CARE"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1597762635760-e16d4f0775a2?q=80&w=2940&auto=format&fit=crop"
      />
    </>
  );
}
