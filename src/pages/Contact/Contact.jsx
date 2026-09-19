import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className="container">
        <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className={styles.centerWrapper}>
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.title}>{t.contact.connectHeading}</h3>
            <p className={styles.subtitle}>
              {t.contact.connectSubtitle}
            </p>

            <div className={styles.infoGrid}>
              <a href="mailto:yimlemeng.ym@gmail.com" className={`${styles.infoCard} glass`}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.infoTitle}>{t.contact.emailLabel}</h4>
                  <p className={styles.infoValue}>yimlemeng.ym@gmail.com</p>
                </div>
              </a>

              <a href="tel:+85569232123" className={`${styles.infoCard} glass`}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.infoTitle}>{t.contact.phoneLabel}</h4>
                  <p className={styles.infoValue}>+855 (69) 232-123</p>
                </div>
              </a>

              <a href="https://github.com/YimLemeng" target="_blank" rel="noopener noreferrer" className={`${styles.infoCard} glass`}>
                <div className={styles.iconWrapper}>
                  <Github size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.infoTitle}>{t.contact.githubLabel}</h4>
                  <p className={styles.infoValue}>github.com/YimLemeng</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
