
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
        mediaSource="https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=731&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </>
  );
}