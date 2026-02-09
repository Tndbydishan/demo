
import React from 'react';
import { PageHero } from '../components/PageHero';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { ContactInfoSection } from '../components/ContactInfoSection';
import { BoldStatement } from '../components/BoldStatement';
import { QualityAssurance } from '../components/QualityAssurance';
import { TechnicianCertification } from '../components/TechnicianCertification';

export const metadata = {
  title: 'Home',
  description: 'Auto Evolution Workshop - Precision, Performance, Perfection.',
};

const PARTNERS = [
  { 
    name: 'Motul', 
    logo: '/resources/images/motul.png',
    customWidth: '120px'
  },
  { 
    name: 'Bosch', 
    logo: '/resources/images/bosch.png',
    customWidth: '140px'
  },
  { 
    name: 'Brembo', 
    logo: '/resources/images/brembo.png',
    customWidth: '130px'
  },
  { 
    name: 'K&N', 
    logo: '/resources/images/kn.png',
    customWidth: '100px'
  },
  { 
    name: 'Mobil 1', 
    logo: '/resources/images/mobil1.png',
    customWidth: '110px'
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero 
        title={<>AUTO EVOLUTION<br/><span style={{color: '#D12027'}}>WORKSHOP</span></>}
        subtitle="EST. 2018 | PREMIER AUTOMOTIVE CARE"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1486262715619-72a604e3d4b3?q=80&w=2940&auto=format&fit=crop"
      />
      
      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12 max-w-[1440px] mx-auto">
         <ContactInfoSection />
      </div>

      <BoldStatement />

      <QualityAssurance />

      <TechnicianCertification />

      <PartnerMarquee 
        partners={PARTNERS} 
        title="Our Trusted Partners" 
        showUnderline={false}
        speed={20}
        gap="2rem"
        height="80px"
        padding="2rem 0"
      />
    </>
  );
}
