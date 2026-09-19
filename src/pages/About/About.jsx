import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Brain, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './About.module.css';

const VALUE_ICONS = [Code, BookOpen, Brain, Users];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />

        <div className={styles.contentGrid}>
          {/* Detailed Biography & Career Objectives */}
          <motion.div 
            className={styles.bioColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.subHeading}>{t.about.whoIAm}</h3>
            <p className={styles.paragraph}>
              {t.about.paragraph1}
            </p>
            <p className={styles.paragraph}>
              {t.about.paragraph2}
            </p>
            
            <h3 className={styles.subHeading}>{t.about.careerObjective}</h3>
            <p className={styles.paragraph}>
              {t.about.objectiveParagraph}
            </p>
          </motion.div>

          {/* Cards showcasing core strengths */}
          <div className={styles.valuesColumn}>
            {t.about.values.map((val, idx) => {
              const Icon = VALUE_ICONS[idx] || Code;
              return (
                <motion.div
                  key={idx}
                  className={`${styles.valueCard} glass`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6, borderColor: 'var(--accent-primary)' }}
                >
                  <div className={styles.iconContainer}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.valueText}>
                    <h4 className={styles.valueTitle}>{val.title}</h4>
                    <p className={styles.valueDesc}>{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
