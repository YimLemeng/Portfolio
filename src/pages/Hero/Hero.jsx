import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import profilePhoto from '../../assets/Meng.png';
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

  const handleSectionScroll = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <section id="home" className={styles.hero}>

      <div className={`${styles.heroContainer} container`}>
        {/* Intro text */}
        <motion.div 
          className={styles.introContent}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Status Radar Badge */}
          <div className={styles.statusPill}>
            <span className={styles.radarPingWrapper}>
              <span className={styles.radarPing} />
              <span className={styles.radarDot} />
            </span>
            <span className={styles.statusPillText}>
              {t.hero.tagline}
            </span>
          </div>
          
          <h1 className={`${styles.greeting} ${language === 'km' ? 'khmer-moul ' + styles.greetingKhmer : ''}`}>
            {t.hero.greeting} <span className="gradient-text">{t.hero.name}</span>
          </h1>
          
          <div className={styles.animatedTitleWrapper}>
            <div className={styles.codePromptBox}>
              <span className={styles.codePrompt}>$</span>
              <span className={styles.animatedTitle}>{currentText}</span>
              <span className={styles.cursor}>_</span>
            </div>
          </div>

          <p className={styles.bio}>
            {t.hero.bio}
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="#projects"
              onClick={(e) => handleSectionScroll(e, 'projects')}
              className={styles.btnPrimary}
            >
              <span>{t.hero.viewProjects}</span>
              <Layers size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSectionScroll(e, 'contact')}
              className={styles.btnSecondary}
            >
              <span>{t.hero.contactMe}</span>
              <ArrowRight size={18} className={styles.arrowIcon} />
            </a>
          </div>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div 
          className={styles.imageCardWrapper}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className={styles.imageBorderGlow}>
            <div className={styles.imageCard}>
              <img src={profilePhoto} alt="Yim Lemeng Profile Photo" className={styles.profileImg} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
