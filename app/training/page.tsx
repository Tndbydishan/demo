
import React from 'react';
import { TrainingHeader } from '../../components/TrainingHeader';
import { PartnerMarquee } from '../../components/PartnerMarquee';

export const metadata = {
  title: 'Training Academy',
  description: 'Industry leading automotive education and certification.',
};

const ACADEMIC_PARTNERS = [
  { 
    name: 'Bosch', 
    logo: '/resources/trainning partners/bosch.svg', 
    customWidth: '130px' 
  },
  { 
    name: 'AUTO EVOLUTION', 
    logo: '/resources/trainning partners/auto-evolution.png', 
    customWidth: '190px' 
  },
  { 
    name: 'Institute of Motor Industry', 
    logo: '/resources/trainning partners/imi-logo-min-original.png', 
    customWidth: '170px' 
  },
  { 
    name: 'Texa', 
    logo: '/resources/trainning partners/logo-TEXA.jpg', 
    customWidth: '150px' 
  },
  { 
    name: 'Texa_edu', 
    logo: '/resources/trainning partners/texaedu.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ASE', 
    logo: '/resources/trainning partners/ase-logo.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ELECTUDE', 
    logo: '/resources/trainning partners/electude-logo-png-transparent.png', 
    customWidth: '190px' 
  },
  { 
    name: 'Bosch', 
    logo: '/resources/trainning partners/bosch.svg', 
    customWidth: '130px' 
  },
  { 
    name: 'AUTO EVOLUTION', 
    logo: '/resources/trainning partners/auto-evolution.png', 
    customWidth: '190px' 
  },
  { 
    name: 'Institute of Motor Industry', 
    logo: '/resources/trainning partners/imi-logo-min-original.png', 
    customWidth: '170px' 
  },
  { 
    name: 'Texa', 
    logo: '/resources/trainning partners/logo-TEXA.jpg', 
    customWidth: '150px' 
  },
  { 
    name: 'Texa_edu', 
    logo: '/resources/trainning partners/texaedu.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ASE', 
    logo: '/resources/trainning partners/ase-logo.png', 
    customWidth: '130px' 
  },
  { 
    name: 'ELECTUDE', 
    logo: '/resources/trainning partners/electude-logo-png-transparent.png', 
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
