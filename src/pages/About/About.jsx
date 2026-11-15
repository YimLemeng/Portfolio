import React from 'react';
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
          <div className={styles.bioColumn}>
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
          </div>

          {/* Cards showcasing core strengths */}
          <div className={styles.valuesColumn}>
            {t.about.values.map((val, idx) => {
              const Icon = VALUE_ICONS[idx] || Code;
              return (
                <div
                  key={idx}
                  className={`${styles.valueCard} glass`}
                >
                  <div className={styles.iconContainer}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.valueText}>
                    <h4 className={styles.valueTitle}>{val.title}</h4>
                    <p className={styles.valueDesc}>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
