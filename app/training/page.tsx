
import React from 'react';
import { TrainingHeader } from '../../components/TrainingHeader';
import { PartnerMarquee } from '../../components/PartnerMarquee';

export const metadata = {
  title: 'Training Academy',
  description: 'Industry leading automotive education and certification.',
};

const ACADEMIC_PARTNERS = [
  { 
    name: 'City & Guilds', 
    logo: '/resources/images/city-guilds.png', 
    customWidth: '140px' 
  },
  { 
    name: 'BTEB', 
    logo: '/resources/images/bteb.png', 
    customWidth: '110px' 
  },
  { 
    name: 'NSDA', 
    logo: '/resources/images/nsda.png', 
    customWidth: '150px' 
  },
  { 
    name: 'IMI', 
    logo: '/resources/images/imi.png', 
    customWidth: '120px' 
  },
];

export default function TrainingPage() {
  return (
    <>
      <TrainingHeader />
      <PartnerMarquee partners={ACADEMIC_PARTNERS} />
    </>
  );
}
