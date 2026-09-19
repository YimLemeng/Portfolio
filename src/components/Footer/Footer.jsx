import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github } from '../Icons/Icons';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <span className={styles.logoText}>Yim<span className={styles.accent}> Lemeng</span></span>
            <p className={styles.tagline}>{t.footer.tagline}</p>
          </div>
          
          <div className={styles.socials}>
            <a 
              href="https://github.com/YimLemeng" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.socialLink} 
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:yimlemeng.ym@gmail.com" 
              className={styles.socialLink} 
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} Yim Lemeng. {t.footer.copyright}
          </p>
          
          <button onClick={handleScrollToTop} className={styles.topBtn} aria-label="Scroll to top">
            {t.footer.backToTop} <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
