
import React from 'react';
import { PageHero } from '../components/PageHero';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { ContactInfoSection } from '../components/ContactInfoSection';
import { BoldStatement } from '../components/BoldStatement';
import { TechnicianCertification } from '../components/TechnicianCertification';
import { QualityAssurance } from '../components/QualityAssurance';

export const metadata = {
  title: 'Auto Evolution Workshop',
  description: 'Industry leading automotive service center.',
};

const PARTNERS = [
  { 
    name: '', 
    logo: '/public/resources/Certified/Oem.png',
    customWidth: '150px'
  },
    { 
    name: '', 
    logo: '/public/resources/Certified/Certified.png',
    customWidth: '130px'
  },
  { 
    name: '', 
    logo: '/public/resources/Certified/quality.png',
    customWidth: '140px'
  },
  { 
    name: '', 
    logo: '/public/resources/Certified/Oem.png',
    customWidth: '130px'
  },
  { 
    name: '', 
    logo: '/public/resources/Certified/Certified.png',
    customWidth: '150px'
  },
    { 
    name: '', 
    logo: '/public/resources/Certified/quality.png',
    customWidth: '140px'
  },
  { 
    name: '', 
    logo: '/public/resources/Certified/Oem.png',
    customWidth: '150px'
  },
 
    { 
    name: '', 
    logo: '/public/resources/Certified/Certified.png',
    customWidth: '130px'
  },

];

export default function HomePage() {
  return (
    <>
      <PageHero 
        title={<>AUTO EVOLUTION<br/><span style={{color: '#D12027'}}>WORKSHOP</span></>}
        subtitle="EST. 2018 | PREMIER AUTOMOTIVE CARE"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1653618293287-a66eb0c4271a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12 max-w-[1440px] mx-auto">
         <ContactInfoSection />
      </div>

            <BoldStatement />

                  <QualityAssurance />

            <TechnicianCertification />

      <PartnerMarquee 
        partners={PARTNERS} 
        title="" 
        showUnderline={false}
        speed={35}
        gap="5rem"
        height="50px"
        padding="2rem 0"
      />
    </>
  );
}
