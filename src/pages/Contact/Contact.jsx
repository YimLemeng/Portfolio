import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section-padding`}>
      <div className="container">
        <SectionHeader title="Contact Me" subtitle="Get In Touch" />

        <div className={styles.centerWrapper}>
          <motion.div 
            className={styles.infoColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.title}>Let's Connect</h3>
            <p className={styles.subtitle}>
              I am actively seeking opportunities for Backend Developer and Java Developer roles. 
              Feel free to reach out via email, phone, or connect with me on GitHub.
            </p>

            <div className={styles.infoGrid}>
              <a href="mailto:yimlemeng.ym@gmail.com" className={`${styles.infoCard} glass`}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.infoTitle}>Email</h4>
                  <p className={styles.infoValue}>yimlemeng.ym@gmail.com</p>
                </div>
              </a>

              <a href="tel:+85569232123" className={`${styles.infoCard} glass`}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.infoTitle}>Phone Number</h4>
                  <p className={styles.infoValue}>+855 (69) 232-123</p>
                </div>
              </a>

              <a href="https://github.com/YimLemeng" target="_blank" rel="noopener noreferrer" className={`${styles.infoCard} glass`}>
                <div className={styles.iconWrapper}>
                  <Github size={24} />
                </div>
                <div className={styles.cardContent}>
                  <h4 className={styles.infoTitle}>GitHub</h4>
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
