
'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './JobBoard.module.css';

// --- Types ---
export interface Job {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  location: string;
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  docs: string[];
}

// --- Data ---
const JOBS: Job[] = [
  {
    id: 'tech-sr',
    title: 'Senior Technician',
    department: 'Service Division',
    type: 'Full-time',
    location: 'West Agargaon, Dhaka',
    experience: '5+ Years',
    overview: 'We are seeking a master-level technician with deep expertise in European and JDM drivetrains. You will be responsible for complex diagnostics, engine overhauls, and mentoring junior staff.',
    responsibilities: [
      'Perform advanced diagnostics using OEM tools (Launch, Autel, Snap-on).',
      'Execute engine and transmission rebuilds with precision.',
      'Supervise and train junior technicians.',
      'Maintain digital service records and quality control logs.'
    ],
    requirements: [
      'Proven experience with Hybrid/EV systems is a plus.',
      'Certification from recognized vocational institute (BTEB/City & Guilds).',
      'Strong problem-solving skills and attention to detail.',
      'Ability to work under pressure in a fast-paced environment.'
    ],
    docs: ['Updated Resume/CV', 'Technical Certifications', 'National ID Copy']
  },
  {
    id: 'advisor',
    title: 'Service Advisor',
    department: 'Customer Relations',
    type: 'Full-time',
    location: 'West Agargaon, Dhaka',
    experience: '3+ Years',
    overview: 'The bridge between our technical team and our clients. You will manage appointments, prepare estimates, and ensure customer satisfaction through clear communication.',
    responsibilities: [
      'Greet customers and inspect vehicles for initial assessment.',
      'Prepare accurate cost estimates and explain technical issues to clients.',
      'Manage workflow scheduling and parts ordering.',
      'Follow up with clients post-service to ensure satisfaction.'
    ],
    requirements: [
      'Excellent verbal and written communication skills (Bangla & English).',
      'Basic automotive technical knowledge.',
      'Proficiency in CRM software and MS Office.',
      'Customer-first attitude.'
    ],
    docs: ['Resume/CV', 'Academic Certificates', 'Reference Letters']
  },
  {
    id: 'intern',
    title: 'Workshop Intern',
    department: 'Academy Division',
    type: 'Internship',
    location: 'Dhaka',
    experience: 'Fresh Graduate',
    overview: 'A structured 6-month program for aspiring automotive engineers. You will rotate through diagnostics, mechanical repair, and electrical systems under the supervision of Master Technicians.',
    responsibilities: [
      'Assist senior technicians with routine maintenance.',
      'Learn proper tool handling and workshop safety protocols.',
      'Maintain workshop cleanliness and organization.',
      'Participate in weekly technical training sessions.'
    ],
    requirements: [
      'Diploma or BSc in Automobile/Mechanical/Power Engineering.',
      'Passion for automotive technology.',
      'Willingness to learn and perform manual labor.',
      'Discipline and punctuality.'
    ],
    docs: ['Resume/CV', 'Academic Transcripts', 'Cover Letter']
  }
];

export const JobBoard: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedJob]);

  return (
    <section className={styles['jb-section']} id="openings">
      <div className={styles['jb-container']}>
        
        {/* Header */}
        <div className={styles['jb-header']}>
          <h2 className={styles['jb-title']}>
            Open <span>Positions</span>
          </h2>
          <p className={styles['jb-subtitle']}>
            Explore current opportunities to join our team. We hire for character and train for skill.
          </p>
        </div>

        {/* Grid */}
        <div className={styles['jb-grid']}>
          {JOBS.map((job) => (
            <div 
              key={job.id} 
              className={styles['jb-card']}
              onClick={() => setSelectedJob(job)}
            >
              <div>
                <div className={styles['jb-card-header']}>
                  <span className={styles['jb-card-dept']}>{job.department}</span>
                  <h3 className={styles['jb-card-title']}>{job.title}</h3>
                </div>
                
                <div className={styles['jb-card-meta']}>
                  <div className={styles['jb-meta-item']}>
                    <i className="ri-briefcase-line"></i> {job.type}
                  </div>
                  <div className={styles['jb-meta-item']}>
                    <i className="ri-map-pin-line"></i> {job.location}
                  </div>
                  <div className={styles['jb-meta-item']}>
                    <i className="ri-time-line"></i> {job.experience}
                  </div>
                </div>
              </div>

              <div className={styles['jb-card-footer']}>
                <span className={styles['jb-view-btn']}>
                  View Details <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal Portal */}
      {isMounted && selectedJob && createPortal(
        <div className={`${styles['jb-modal-backdrop']} ${selectedJob ? styles['open'] : ''}`} onClick={() => setSelectedJob(null)}>
          <div className={styles['jb-modal-container']} onClick={(e) => e.stopPropagation()}>
            
            <button className={styles['jb-modal-close']} onClick={() => setSelectedJob(null)}>
              <i className="ri-close-line"></i>
            </button>

            <div className={styles['jb-modal-content']}>
              
              <div className={styles['jb-modal-header']}>
                <span className={styles['jb-modal-dept']}>{selectedJob.department}</span>
                <h2 className={styles['jb-modal-title']}>{selectedJob.title}</h2>
                <div className={styles['jb-meta-item']}>
                   <i className="ri-map-pin-line"></i> {selectedJob.location} &nbsp;|&nbsp; {selectedJob.type}
                </div>
              </div>

              <div className={styles['jb-modal-grid']}>
                
                {/* Left: Description */}
                <div>
                  <div className={styles['jb-section-title']}>Role Overview</div>
                  <p className={styles['jb-text-block']}>{selectedJob.overview}</p>

                  <div className={styles['jb-section-title']}>Key Responsibilities</div>
                  <ul className={styles['jb-list']}>
                    {selectedJob.responsibilities.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>

                  <div className={styles['jb-section-title']}>Requirements</div>
                  <ul className={styles['jb-list']}>
                    {selectedJob.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Right: Sidebar */}
                <div>
                  <div className={styles['jb-sidebar-box']}>
                    <div className={styles['jb-info-row']}>
                      <span className={styles['jb-info-label']}>Experience Level</span>
                      <span className={styles['jb-info-value']}>{selectedJob.experience}</span>
                    </div>
                    
                    <div className={styles['jb-info-row']}>
                      <span className={styles['jb-info-label']}>Required Documents</span>
                      <ul style={{ paddingLeft: '1rem', marginTop: '0.5rem', fontSize: '0.9rem', color: '#374151' }}>
                        {selectedJob.docs.map((doc, i) => <li key={i} style={{marginBottom:'4px'}}>{doc}</li>)}
                      </ul>
                    </div>

                    <a href="mailto:careers@autoevolution.com" className={styles['jb-apply-btn']}>
                      Apply Now
                    </a>
                    <p style={{fontSize:'0.7rem', color:'#9ca3af', textAlign:'center', marginTop:'0.5rem'}}>
                      Send your CV with the Job Title in the Subject line.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};
