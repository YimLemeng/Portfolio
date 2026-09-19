import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import profilePhoto from '../../assets/Meng.jpg';
import styles from './Hero.module.css';

const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_DURATION = 2000;

export default function Hero() {
  const { t, language } = useLanguage();
  const titles = t.hero.titles;
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset typewriter when language changes
  useEffect(() => {
    setTitleIndex(0);
    setCurrentText('');
    setIsDeleting(false);
  }, [language]);

  useEffect(() => {
    let timer;
    const currentFullTitle = titles[titleIndex] || titles[0];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentFullTitle.substring(0, currentText.length - 1));
      }, DELETING_SPEED);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentFullTitle.substring(0, currentText.length + 1));
      }, TYPING_SPEED);
    }

    if (!isDeleting && currentText === currentFullTitle) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  const handleContactScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const top = el.offsetTop - 70;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', '#contact');
    }
  };

  const handleDownloadCV = () => {
    const cvContent = t.hero.cvContent;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = t.hero.cvFileName || 'Yim_Lemeng_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className={`${styles.hero} section-padding`}>
      <div className={`${styles.heroContainer} container`}>
        {/* Intro text */}
        <motion.div 
          className={styles.introContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={`${styles.tagline} glass`}>
            <Terminal size={14} className={styles.tagIcon} />
            <span>{t.hero.tagline}</span>
          </div>
          
          <h1 className={styles.greeting}>
            {t.hero.greeting} <span className={styles.name}>{t.hero.name}</span>
          </h1>
          
          <div className={styles.animatedTitleWrapper}>
            <span className={styles.animatedTitle}>{currentText}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.bio}>
            {t.hero.bio}
          </p>

          <div className={styles.ctaGroup}>
            <button onClick={handleDownloadCV} className={styles.btnPrimary}>
              {t.hero.downloadCv} <Download size={18} />
            </button>
            <a href="#contact" onClick={handleContactScroll} className={styles.btnSecondary}>
              {t.hero.contactMe} <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image card */}
        <motion.div 
          className={styles.imageCardWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.imageBorderGlow}>
            <div className={`${styles.imageCard} glass`}>
              <img src={profilePhoto} alt="Yim Lemeng Profile Photo" className={styles.profileImg} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
