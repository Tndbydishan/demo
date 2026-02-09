
import React from 'react';
import styles from './SOS.module.css';

interface SOSProps {
  phoneNumber?: string;
  className?: string;
}

export const SOS: React.FC<SOSProps> = ({
  phoneNumber = "+8801716815647", // Default emergency line
  className = ""
}) => {
  return (
    <div className={`${styles['sos-container']} ${className}`}>
      
      {/* Background Icon Watermark */}
      <div className={styles['sos-watermark']}>
        <i className={`ri-alarm-warning-fill ${styles['sos-watermark-icon']}`}></i>
      </div>

      <div className={styles['sos-grid']}>
        
        {/* LEFT COLUMN: ACTION */}
        <div className={styles['sos-action-col']}>
            <div className={styles['sos-header-group']}>
                <div className={styles['sos-icon-pulse']}>
                   <i className="ri-alarm-warning-fill"></i>
                </div>
                <h2 className={styles['sos-title']}>
                    SOS <span>EMERGENCY</span>
                </h2>
            </div>
            
            <p className={styles['sos-description']}>
                Critical vehicle failure? Stranded in an unsafe location? 
                Our Quick Response Team (QRT) is on standby 24/7.
            </p>

            {/* BUTTON */}
            <a href={`tel:${phoneNumber}`} className={`${styles['sos-btn']} group`}>
                <div className={styles['sos-btn-icon-wrapper']}>
                     <i className="ri-phone-fill text-lg"></i>
                </div>
                
                <div className={styles['sos-btn-text-col']}>
                    <span className={styles['sos-btn-label-sm']}>
                        24/7 Priority
                    </span>
                    <span className={styles['sos-btn-label-lg']}>
                        Call SOS Now
                    </span>
                </div>
            </a>
            
            <p className={styles['sos-disclaimer']}>
                * By clicking, you will be connected to our priority dispatch line.
            </p>
        </div>

        {/* RIGHT COLUMN: INFORMATION */}
        <div className={styles['sos-info-col']}>
            
            {/* Usage Scenarios */}
            <div>
                <h3 className={styles['sos-section-heading']}>
                    <i className="ri-question-fill"></i> When to use SOS?
                </h3>
                <ul className={styles['sos-list-grid']}>
                    {[
                        "Severe Engine Failure",
                        "Accident Recovery",
                        "Tyre Blowout on Highway",
                        "Dead Battery in Remote Area",
                        "Critical Overheating",
                        "Suspension Collapse"
                    ].map((item, i) => (
                        <li key={i} className={styles['sos-list-item']}>
                             <span className={styles['sos-bullet']}></span>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Implementation & Instructions */}
            <div className={styles['sos-implementation-wrapper']}>
                <div>
                    <h3 className={styles['sos-section-heading']}>
                        Implementation & Coverage
                    </h3>
                    <p className={styles['sos-text']}>
                        Implemented exclusively for the <strong>Greater Dhaka Metropolitan Area</strong>. 
                        Our recovery units are stationed at strategic points to ensure a <strong>maximum 30-minute response time</strong> within city limits.
                    </p>
                </div>

                <div>
                    <h3 className={styles['sos-section-heading']}>
                        Directions for Use
                    </h3>
                    <ol className={styles['sos-ordered-list']}>
                        <li>Ensure you and your passengers are in a safe position.</li>
                        <li>Press the SOS button to contact our dispatcher.</li>
                        <li>Share your live GPS location via WhatsApp/SMS when prompted.</li>
                    </ol>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};
