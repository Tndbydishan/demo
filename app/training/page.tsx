
import React from 'react';
import { TrainingHeader } from '../../components/TrainingHeader';
import { PartnerMarquee } from '../../components/PartnerMarquee';

export const metadata = {
  title: 'Training Academy',
  description: 'Industry leading automotive education and certification.',
};

// UPDATED: Using 'trainning%20partners' to handle the space and spelling in the folder name.
const ACADEMIC_PARTNERS = [
  { 
    name: 'Bosch', 
    logo: '/resources/trainning%20partners/bosch.svg', 
    customWidth: '130px' 
  },
  { 
    name: 'AUTO EVOLUTION', 
    logo: '/resources/trainning%20partners/auto-evolution.png', 
    customWidth: '190px' 
  },
  { 
    name: 'Institute of Motor Industry', 
    logo: '/resources/trainning%20partners/imi-logo-min-original.png', 
    customWidth: '170px' 
  },
  { 
    name: 'Texa', 
    logo: '/resources/trainning%20partners/logo-texa.jpg', 
    customWidth: '150px' 
  },
  { 
    name: 'Texa_edu', 
    logo: '/resources/trainning%20partners/texaedu.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ASE', 
    logo: '/resources/trainning%20partners/ase-logo.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ELECTUDE', 
    logo: '/resources/trainning%20partners/electude-logo-png-transparent.png', 
    customWidth: '190px' 
  },
  { 
    name: 'Bosch', 
    logo: '/resources/trainning%20partners/bosch.svg', 
    customWidth: '130px' 
  },
  { 
    name: 'AUTO EVOLUTION', 
    logo: '/resources/trainning%20partners/auto-evolution.png', 
    customWidth: '190px' 
  },
  { 
    name: 'Institute of Motor Industry', 
    logo: '/resources/trainning%20partners/imi-logo-min-original.png', 
    customWidth: '170px' 
  },
  { 
    name: 'Texa', 
    logo: '/resources/trainning%20partners/logo-texa.jpg', 
    customWidth: '150px' 
  },
  { 
    name: 'Texa_edu', 
    logo: '/resources/trainning%20partners/texaedu.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ASE', 
    logo: '/resources/trainning%20partners/ase-logo.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ELECTUDE', 
    logo: '/resources/trainning%20partners/electude-logo-png-transparent.png', 
    customWidth: '190px' 
  },
];

export default function TrainingPage() {
  return (
    <>
      <TrainingHeader />
      <PartnerMarquee partners={ACADEMIC_PARTNERS} 
      speed={70}
      />
    </>
  );
}
