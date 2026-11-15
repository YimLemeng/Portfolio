import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './Experience.module.css';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className={`${styles.experience} section-padding`}>
      <div className="container">
        <SectionHeader title={t.experience.title} subtitle={t.experience.subtitle} />
        
        <div className={styles.grid}>
          {/* Work Experience Timeline */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.headerIconBox}>
                <Briefcase className={styles.headerIcon} size={20} />
              </div>
              <h3 className={styles.columnTitle}>{t.experience.workTitle}</h3>
            </div>
            
            <div className={styles.timeline}>
              {t.experience.workList.map((item, idx) => (
                <div 
                  key={idx}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineDot}>
                    <Briefcase size={14} />
                  </div>
                  <div className={`${styles.timelineContent} glass`}>
                    <span className={styles.period}>{item.period}</span>
                    <h4 className={styles.roleTitle}>{item.role}</h4>
                    <h5 className={styles.orgName}>{item.organization}</h5>
                    <p className={styles.description}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training Timeline */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <div className={styles.headerIconBox}>
                <GraduationCap className={styles.headerIcon} size={20} />
              </div>
              <h3 className={styles.columnTitle}>{t.experience.eduTitle}</h3>
            </div>
            
            <div className={styles.timeline}>
              {t.experience.eduList.map((item, idx) => (
                <div 
                  key={idx}
                  className={styles.timelineItem}
                >
                  <div className={styles.timelineDot}>
                    <GraduationCap size={14} />
                  </div>
                  <div className={`${styles.timelineContent} glass`}>
                    <span className={styles.period}>{item.period}</span>
                    <h4 className={styles.roleTitle}>{item.title}</h4>
                    <h5 className={styles.orgName}>{item.organization}</h5>
                    <p className={styles.description}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
