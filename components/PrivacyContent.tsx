
'use client';

import React from 'react';
import styles from './PrivacyContent.module.css';

const SECTIONS = [
  { id: 'commitment', label: '1. Commitment to Privacy' },
  { id: 'collection', label: '2. Information We Collect' },
  { id: 'purpose', label: '3. Purpose of Collection' },
  { id: 'vin-ethics', label: '4. Ethical Use of VIN Data' },
  { id: 'sharing', label: '5. Sharing & Disclosure' },
  { id: 'security', label: '6. Security Measures' },
  { id: 'retention', label: '7. Data Retention' },
  { id: 'rights', label: '8. Your Rights (GDPR/CCPA)' },
  { id: 'contact', label: '9. Contact Information' },
];

export const PrivacyContent: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles['pc-section']}>
      <div className={styles['pc-container']}>
        
        {/* Left: Sticky Navigation */}
        <nav className={styles['pc-nav-wrapper']}>
          <h4 className={styles['pc-nav-title']}>Contents</h4>
          <ul className={styles['pc-nav-list']}>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <a 
                  href={`#${section.id}`} 
                  className={styles['pc-nav-link']}
                  onClick={(e) => scrollToSection(e, section.id)}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Content */}
        <article className={styles['pc-content']}>
          <span className={styles['pc-last-updated']}>Effective Date: March 01, 2025</span>

          <p className={styles['pc-text']}>
            At <strong>Auto Evolution Workshop</strong>, privacy, discretion, and trust are fundamental to our relationship with our clients. As a professional automotive workshop serving premium and performance vehicles, we are committed to safeguarding all personal, vehicle, and technical data entrusted to us.
          </p>
          <p className={styles['pc-text']}>
            This Privacy Policy serves as our formal notice regarding how we act as a Data Controller and how we collect, use, protect, and manage your information in strict accordance with international security standards, including alignment with GDPR and CCPA principles where applicable.
          </p>

          {/* 1. Commitment */}
          <div id="commitment" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>1. Our Commitment to Privacy</h2>
            <p className={styles['pc-text']}>
              We operate with the same principles of confidentiality, precision, and responsibility that define world-class automotive brands. All data collected is handled with care, transparency, and specific purpose.
            </p>
            <p className={styles['pc-text']}>
              We ensure that customer information is used <strong>only</strong> for legitimate service, operational, and legal requirements. We do not engage in unauthorized data sharing, resale, or misuse of customer information under any circumstances.
            </p>
          </div>

          {/* 2. Collection */}
          <div id="collection" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>2. Information We Collect</h2>
            <p className={styles['pc-text']}>
              To provide professional automotive services, we may collect and process the following categories of data:
            </p>
            
            <h3 className={styles['pc-subheading']}>a) Personal Identity Information</h3>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}>Full Legal Name.</li>
              <li className={styles['pc-list-item']}>Contact Data (Phone number, Email address, Physical address).</li>
              <li className={styles['pc-list-item']}>Billing and Invoicing details.</li>
            </ul>

            <h3 className={styles['pc-subheading']}>b) Vehicle Technical Data</h3>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}>Vehicle Identification Number (VIN) / Chassis Number.</li>
              <li className={styles['pc-list-item']}>Registration credentials and ownership proof.</li>
              <li className={styles['pc-list-item']}>Make, model, year, and trim specifications.</li>
              <li className={styles['pc-list-item']}>Service history logs and repair records.</li>
            </ul>

            <h3 className={styles['pc-subheading']}>c) Diagnostic & Telemetry Data</h3>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}>ECU (Engine Control Unit) scan results.</li>
              <li className={styles['pc-list-item']}>DTC (Diagnostic Trouble Codes) and freeze frame data.</li>
              <li className={styles['pc-list-item']}>Software versioning and calibration maps.</li>
            </ul>
          </div>

          {/* 3. Purpose */}
          <div id="purpose" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>3. Legal Basis & Purpose of Collection</h2>
            <p className={styles['pc-text']}>
              We process your data based on <strong>Contractual Necessity</strong> (to repair your vehicle), <strong>Legal Obligation</strong> (tax and safety laws), and <strong>Legitimate Interests</strong> (service improvement). Purposes include:
            </p>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}>Performing accurate vehicle diagnostics, maintenance, and repairs.</li>
              <li className={styles['pc-list-item']}>Maintaining a documented service history for vehicle value retention.</li>
              <li className={styles['pc-list-item']}>Verifying warranty status and checking for safety recalls.</li>
              <li className={styles['pc-list-item']}>Communicating service updates, estimates, and invoices.</li>
              <li className={styles['pc-list-item']}>Internal quality control and technical training.</li>
            </ul>
            <p className={styles['pc-text']}>
              <strong>Note:</strong> No data is collected for marketing resale, profiling, or unrelated third-party commercial activities.
            </p>
          </div>

          {/* 4. VIN Ethics */}
          <div id="vin-ethics" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>4. Ethical Use of VIN & Vehicle Data</h2>
            <p className={styles['pc-text']}>
              We treat VINs and vehicle-specific telemetry as high-sensitivity information. This data is:
            </p>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}>Used exclusively for diagnostic accuracy and parts sourcing.</li>
              <li className={styles['pc-list-item']}>Accessed only by authorized Master Technicians and Service Advisors.</li>
              <li className={styles['pc-list-item']}>Never altered, falsified, or misrepresented in service records.</li>
              <li className={styles['pc-list-item']}>Never used for unauthorized tracking or surveillance.</li>
            </ul>
          </div>

          {/* 5. Sharing */}
          <div id="sharing" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>5. Data Sharing & Disclosure</h2>
            <p className={styles['pc-text']}>
              We maintain a strictly controlled data environment. Your information is only shared when:
            </p>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}><strong>Required by Law:</strong> Complying with regulatory authorities or law enforcement.</li>
              <li className={styles['pc-list-item']}><strong>Operational Necessity:</strong> Interfacing with OEM systems for software updates or ordering specific parts from Tier-1 suppliers.</li>
              <li className={styles['pc-list-item']}><strong>Explicit Consent:</strong> You have authorized us to transfer records (e.g., to a new owner or insurance provider).</li>
            </ul>
          </div>

          {/* 6. Security */}
          <div id="security" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>6. Security & Protection Measures</h2>
            <p className={styles['pc-text']}>
              To prevent unauthorized access, loss, or misuse, we employ robust physical and digital security protocols:
            </p>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}>Encrypted storage for digital invoices and customer databases.</li>
              <li className={styles['pc-list-item']}>Restricted access controls limited to essential personnel.</li>
              <li className={styles['pc-list-item']}>Regular audits of our internal systems.</li>
              <li className={styles['pc-list-item']}>Mandatory data confidentiality training for all staff members.</li>
            </ul>
          </div>

          {/* 7. Retention */}
          <div id="retention" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>7. Data Retention</h2>
            <p className={styles['pc-text']}>
              Customer and vehicle data is retained only for as long as necessary to fulfill service obligations, maintain accurate long-term service records for the vehicle's history, and comply with tax/legal statutes. Once data is no longer required, it is securely deleted or anonymized.
            </p>
          </div>

          {/* 8. Rights */}
          <div id="rights" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>8. Your Rights (GDPR / CCPA)</h2>
            <p className={styles['pc-text']}>
              Regardless of your location, we respect your rights regarding your personal data. You are entitled to:
            </p>
            <ul className={styles['pc-list']}>
              <li className={styles['pc-list-item']}><strong>Right to Access:</strong> Request a copy of the personal or vehicle data we hold.</li>
              <li className={styles['pc-list-item']}><strong>Right to Rectification:</strong> Request corrections to inaccurate information.</li>
              <li className={styles['pc-list-item']}><strong>Right to Erasure:</strong> Request deletion of personal data where legally permissible (Service records may be kept for legal reasons).</li>
              <li className={styles['pc-list-item']}><strong>Right to Portability:</strong> Request your data in a structured, machine-readable format.</li>
            </ul>
          </div>

          {/* 9. Contact */}
          <div id="contact" className={styles['pc-block']}>
            <h2 className={styles['pc-heading']}>9. Contact Information</h2>
            <p className={styles['pc-text']}>
              For privacy-related inquiries, data access requests, or concerns, please contact our administrative team:
            </p>
            <div className="mt-4 p-6 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="font-bold text-gray-900 mb-1">Auto Evolution Workshop</p>
                <p className="text-gray-600 mb-1">125/1 West Agargaon, Dhaka 1207, Bangladesh</p>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> auto.evolution.workshop@gmail.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> +880 1711-278127</p>
            </div>
          </div>

          {/* Trust Statement */}
          <div className={styles['pc-trust-box']}>
            <h3 className={styles['pc-trust-title']}>Statement of Trust</h3>
            <p className={styles['pc-trust-text']}>
              "At Auto Evolution Workshop, your data is protected with the same precision and respect as the vehicles we service. Privacy is not just an obligation—it is a standard of engineering excellence we uphold without compromise."
            </p>
          </div>

        </article>
      </div>
    </section>
  );
};
