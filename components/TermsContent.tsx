
'use client';

import React from 'react';
import styles from './TermsContent.module.css';

// Navigation Data Structure
const SECTIONS = [
  { 
    group: 'Part I: Operational',
    items: [
      { id: 'introduction', label: '1. Introduction' },
      { id: 'scope', label: '2. Scope of Services' },
      { id: 'responsibilities', label: '3. Customer Responsibilities' },
      { id: 'intake', label: '4. Vehicle Intake & Auth' },
      { id: 'parts', label: '5. Parts & Modifications' },
      { id: 'pricing', label: '6. Pricing & Payments' },
      { id: 'warranty', label: '7. Warranty & Limitations' },
      { id: 'storage', label: '8. Storage & Abandonment' },
    ]
  },
  {
    group: 'Part II: Proprietary Rights',
    items: [
      { id: 'ip-rights', label: '9. Intellectual Property' },
      { id: 'inspection-methods', label: '10. Proprietary Methods' },
      { id: 'reports-license', label: '11. Reports License' },
      { id: 'data-protection', label: '12. Diagnostic Data' },
      { id: 'confidentiality', label: '13. Confidentiality' },
      { id: 'reverse-engineering', label: '14. Anti-Reverse Engineering' },
      { id: 'media-policy', label: '15. Media & Recording' },
      { id: 'enforcement', label: '16. Enforcement' },
    ]
  }
];

export const TermsContent: React.FC = () => {
  
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles['tc-section']}>
      <div className={styles['tc-container']}>
        
        {/* Left: Sticky Navigation */}
        <nav className={styles['tc-nav-wrapper']}>
          <h4 className={styles['tc-nav-title']}>Table of Contents</h4>
          
          {SECTIONS.map((group, idx) => (
            <div key={idx}>
              <div className={styles['tc-nav-group-label']}>{group.group}</div>
              <ul className={styles['tc-nav-list']}>
                {group.items.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={`#${item.id}`} 
                      className={styles['tc-nav-link']}
                      onClick={(e) => scrollToSection(e, item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Right: Content */}
        <article className={styles['tc-content']}>
          <span className={styles['tc-last-updated']}>Last Updated: March 01, 2025</span>

          <p className={styles['tc-intro-text']}>
            Welcome to Auto Evolution Workshop. These Terms of Service ("Terms") govern your access to and use of our workshop services, facilities, website, and related offerings. By booking a service, visiting our premises, or engaging with us in any manner, you agree to be bound by these Terms.
          </p>

          {/* ================= PART I ================= */}
          <div className={styles['tc-section-divider']}>Part I: Operational Terms</div>

          {/* 1. Introduction */}
          <div id="introduction" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>1. Introduction & Acceptance</h2>
            <p className={styles['tc-text']}>
              At Auto Evolution Workshop, we operate with precision, transparency, and professionalism consistent with premium automotive service standards. These Terms establish a clear framework for rights, responsibilities, and expectations between the workshop and its customers.
            </p>
            <p className={styles['tc-text']}>
              <strong>If you do not agree with any part of these Terms, you should refrain from using our services.</strong>
            </p>
          </div>

          {/* 2. Scope */}
          <div id="scope" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>2. Scope of Services</h2>
            <p className={styles['tc-text']}>
              We provide professional automotive services including, but not limited to:
            </p>
            <ul className={styles['tc-list']}>
              <li className={styles['tc-list-item']}>Vehicle diagnostics and multi-point inspections.</li>
              <li className={styles['tc-list-item']}>Mechanical, electrical, and hybrid system repairs.</li>
              <li className={styles['tc-list-item']}>Software diagnostics, coding, and calibration.</li>
              <li className={styles['tc-list-item']}>Performance tuning and specialty workshop services.</li>
            </ul>
          </div>

          {/* 3. Responsibilities */}
          <div id="responsibilities" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>3. Customer Responsibilities</h2>
            <p className={styles['tc-text']}>
              To ensure efficient service, customers agree to:
            </p>
            <ul className={styles['tc-list']}>
              <li className={styles['tc-list-item']}>Provide accurate personal and vehicle information (including VIN).</li>
              <li className={styles['tc-list-item']}>Disclose known vehicle issues, prior modifications, or non-standard parts.</li>
              <li className={styles['tc-list-item']}>Authorize only lawful and ethical service requests.</li>
              <li className={styles['tc-list-item']}>Ensure vehicles are delivered in a condition safe for inspection (free of hazardous materials).</li>
            </ul>
          </div>

          {/* 4. Intake */}
          <div id="intake" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>4. Vehicle Intake & Authorization</h2>
            <h3 className={styles['tc-subheading']}>a) Estimates</h3>
            <p className={styles['tc-text']}>
              Estimates are based on initial inspections. If additional issues are discovered during disassembly or detailed diagnostics, customers will be informed prior to proceeding with further work.
            </p>
            <h3 className={styles['tc-subheading']}>b) Authorization</h3>
            <p className={styles['tc-text']}>
              By approving a service request (digital or written), you authorize Auto Evolution to operate the vehicle for testing/verification and to use OEM or equivalent-quality parts unless otherwise specified.
            </p>
          </div>

          {/* 5. Parts */}
          <div id="parts" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>5. Parts, Materials & Modifications</h2>
            <ul className={styles['tc-list']}>
              <li className={styles['tc-list-item']}>We prioritize OEM, OEM-equivalent, or performance-grade parts.</li>
              <li className={styles['tc-list-item']}><strong>Customer-Supplied Parts:</strong> Installed strictly at the customer’s risk. We offer no warranty on labor or functionality for parts not sourced by us.</li>
              <li className={styles['tc-list-item']}><strong>Modifications:</strong> Modified or aftermarket vehicles may carry additional risks. We do not guarantee longevity of non-OEM components.</li>
            </ul>
          </div>

          {/* 6. Pricing */}
          <div id="pricing" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>6. Pricing & Payments</h2>
            <p className={styles['tc-text']}>
              All prices are exclusive of applicable taxes unless stated otherwise. Payment is due strictly upon service completion. Late payments may result in storage fees or retention of the vehicle under lawful lien rights until outstanding balances are settled.
            </p>
          </div>

          {/* 7. Warranty */}
          <div id="warranty" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>7. Warranty & Service Limitations</h2>
            <p className={styles['tc-text']}>
              We warrant our workmanship for a limited period, subject to normal use and proper maintenance.
            </p>
            <h3 className={styles['tc-subheading']}>Exclusions</h3>
            <ul className={styles['tc-list']}>
              <li className={styles['tc-list-item']}>Wear-and-tear components (brakes, tires, fluids).</li>
              <li className={styles['tc-list-item']}>Failures caused by pre-existing conditions or lack of maintenance.</li>
              <li className={styles['tc-list-item']}>Damage resulting from misuse, accidents, or unauthorized post-service alterations.</li>
            </ul>
          </div>

          {/* 8. Storage */}
          <div id="storage" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>8. Vehicle Storage & Abandonment</h2>
            <p className={styles['tc-text']}>
              Vehicles not collected within 3 days of service completion notification will incur daily storage fees. Vehicles left uncollected beyond statutory periods (30 days) may be deemed abandoned and processed according to applicable laws.
            </p>
          </div>

          {/* ================= PART II ================= */}
          <div className={styles['tc-section-divider']}>Part II: Intellectual Property & Proprietary Rights</div>

          {/* 9. IP Rights */}
          <div id="ip-rights" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>9. Brand Identity & Trademark Protection</h2>
            <p className={styles['tc-text']}>
              All trademarks, service marks, trade names, logos, visual identities, and brand expressions associated with <strong>Auto Evolution Workshop</strong> are protected intellectual property.
            </p>
            <p className={styles['tc-text']}>
              Unauthorized use, reproduction, imitation, or representation of our brand for commercial purposes, or to imply false affiliation/endorsement, is strictly prohibited.
            </p>
          </div>

          {/* 10. Inspection Methods */}
          <div id="inspection-methods" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>10. Proprietary Inspection Methods</h2>
            <p className={styles['tc-text']}>
              All inspection methods, diagnostic workflows, evaluation frameworks, internal scoring systems, and custom checklists used by Auto Evolution constitute <strong>proprietary trade secrets</strong> and confidential know-how.
            </p>
            <p className={styles['tc-text']}>
              Customers purchase the <em>outcome</em> of the service (the report or repair), not the ownership of our underlying methodologies.
            </p>
          </div>

          {/* 11. Reports License */}
          <div id="reports-license" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>11. Use of Reports & Documentation</h2>
            <p className={styles['tc-text']}>
              Inspection reports, diagnostic summaries, and technical documentation are provided under a <strong>limited, non-transferable license</strong> for personal use only.
            </p>
            <ul className={styles['tc-list']}>
              <li className={styles['tc-list-item']}><strong>No Commercial Use:</strong> Reproduction, redistribution, or use of our reports for commercial listings/marketing without written consent is prohibited.</li>
              <li className={styles['tc-list-item']}><strong>No Third-Party Reliance:</strong> Reports are not intended for legal proceedings, insurance claims, or third-party reliance unless expressly agreed in writing.</li>
            </ul>
          </div>

          {/* 12. Data Protection */}
          <div id="data-protection" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>12. Data & Diagnostic System Protection</h2>
            <p className={styles['tc-text']}>
              Customers may not access, copy, photograph, record, or attempt to replicate proprietary diagnostic systems, software interfaces, or internal data outputs used by our technicians.
            </p>
          </div>

          {/* 13. Confidentiality */}
          <div id="confidentiality" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>13. Confidentiality</h2>
            <p className={styles['tc-text']}>
              Any non-public information disclosed during the course of service (including specific pricing structures, internal documentation, or vendor relationships) shall be treated as confidential and may not be disclosed to third parties without written authorization.
            </p>
          </div>

          {/* 14. Reverse Engineering */}
          <div id="reverse-engineering" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>14. Anti-Reverse Engineering</h2>
            <p className={styles['tc-text']}>
              Customers and competitors shall not attempt to analyze, reverse engineer, replicate, or derive methodologies, processes, or operational models from any service, report, or interaction with Auto Evolution.
            </p>
          </div>

          {/* 15. Media Policy */}
          <div id="media-policy" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>15. Media & Recording Policy</h2>
            <p className={styles['tc-text']}>
              To protect our proprietary processes and staff privacy, <strong>photography, videography, or audio recording within workshop premises is prohibited</strong> without prior written approval from management.
            </p>
          </div>

          {/* 16. Enforcement */}
          <div id="enforcement" className={styles['tc-block']}>
            <h2 className={styles['tc-heading']}>16. Enforcement & Remedies</h2>
            <p className={styles['tc-text']}>
              Any breach of intellectual property, confidentiality, or proprietary rights may result in immediate termination of services, permanent ban from our facilities, and pursuit of legal remedies, including injunctive relief and damages to the fullest extent of the law.
            </p>
          </div>

          {/* Trust Statement */}
          <div className={styles['tc-standards-box']}>
            <h3 className={styles['tc-standards-title']}>Statement of Professional Standards</h3>
            <p className={styles['tc-standards-text']}>
              "At Auto Evolution Workshop, every service is delivered with precision, discretion, and accountability. These Terms exist to protect both our valued customers and the integrity of our world-class engineering operations."
            </p>
          </div>

        </article>
      </div>
    </section>
  );
};
