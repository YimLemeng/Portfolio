import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, BookOpen } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './Experience.module.css';

const WORK_EXPERIENCE = [
  {
    role: 'Receptionist',
    organization: 'Jasmine Hotel',
    period: '2019 - 2020',
    desc: 'Received guests, including guest check-ins and check-outs, reservations, and customer inquiries. Developed strong communication and organizational skills while ensuring a positive guest experience.',
    icon: Briefcase,
  },
  {
    role: 'Delivery Driver',
    organization: 'J&T Express',
    period: '2020 - 2023',
    desc: 'Responsible for delivering packages and goods to various locations, ensuring timely and accurate deliveries. Gained experience in route planning, time management, and customer service.',
    icon: Briefcase,
  },
  {
    role: 'Driver',
    organization: 'Nham 24 Express',
    period: '2023 - 2024',
    desc: 'Provided transportation services for clients, ensuring safe and efficient travel. Developed strong navigation skills and maintained a high level of professionalism in client interactions.',
    icon: Briefcase,
  },
];

const EDUCATION_TRAINING = [
  {
    title: 'Study High School Diploma',
    organization: 'Preah Monivong High School, Battambang, Cambodia',
    period: '2015 - 2018',
    desc: 'Completed high school education.',
    icon: GraduationCap,
  },
  {
    title: 'Study Bachelor of Science in Information Technology',
    organization: 'Build Bright University (Year 3), Phnom Penh, Cambodia',
    period: '2024 - Present',
    desc: 'Pursuing a Bachelor of Science in Information Technology with a focus on software development, database management, and web technologies. Engaging in projects that enhance practical skills in Java and C#.',
    icon: GraduationCap,
  },
];



export default function Experience() {
  return (
    <section id="experience" className={`${styles.experience} section-padding`}>
      <div className="container">
        <SectionHeader title="Experience & Education" subtitle="My Career Pathway" />
        
        <div className={styles.grid}>
          {/* Work Experience Timeline */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <Briefcase className={styles.headerIcon} size={22} />
              <h3 className={styles.columnTitle}>Work Experience</h3>
            </div>
            
            <div className={styles.timeline}>
              {WORK_EXPERIENCE.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className={styles.timelineDot}>
                      <Icon size={14} />
                    </div>
                    <div className={`${styles.timelineContent} glass`}>
                      <span className={styles.period}>{item.period}</span>
                      <h4 className={styles.roleTitle}>{item.role}</h4>
                      <h5 className={styles.orgName}>{item.organization}</h5>
                      <p className={styles.description}>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education & Training Timeline */}
          <div className={styles.column}>
            <div className={styles.columnHeader}>
              <GraduationCap className={styles.headerIcon} size={22} />
              <h3 className={styles.columnTitle}>Education & Training</h3>
            </div>
            
            <div className={styles.timeline}>
              {EDUCATION_TRAINING.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    className={styles.timelineItem}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    <div className={styles.timelineDot}>
                      <Icon size={14} />
                    </div>
                    <div className={`${styles.timelineContent} glass`}>
                      <span className={styles.period}>{item.period}</span>
                      <h4 className={styles.roleTitle}>{item.title}</h4>
                      <h5 className={styles.orgName}>{item.organization}</h5>
                      <p className={styles.description}>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
