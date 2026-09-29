import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import CVTemplate from '../../components/CVTemplate/CVTemplate';
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
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const cvRef = useRef(null);

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

  const handleDownloadCV = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const element = cvRef.current;

      if (!element) {
        throw new Error('CV element not found');
      }

      const fileName = language === 'km' ? 'Yim_Lemeng_CV_KH.pdf' : 'Yim_Lemeng_CV_EN.pdf';

      // Clone element to body at fixed 0, 0 to ensure flawless html2canvas coordinates without offscreen clipping
      const clone = element.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.top = '0';
      clone.style.left = '0';
      clone.style.zIndex = '999999';
      clone.style.pointerEvents = 'none';
      document.body.appendChild(clone);

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        logging: false,
        width: 740,
        height: 1047,
        scrollX: 0,
        scrollY: 0,
      });

      document.body.removeChild(clone);

      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      // Full bleed 210mm x 297mm to guarantee 100% full coverage without bottom or side cutoffs
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
      pdf.save(fileName);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
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
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section id="home" className={`${styles.hero} section-padding`}>
      {/* Hidden CV template used for generating PDF */}
      <CVTemplate ref={cvRef} language={language} />

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
            <button 
              onClick={handleDownloadCV} 
              disabled={isGeneratingPdf} 
              className={styles.btnPrimary}
              title="Download Professional PDF Resume"
            >
              {isGeneratingPdf ? (
                <>
                  {language === 'km' ? 'កំពុងបង្កើត PDF...' : 'Generating PDF...'} <Loader2 className={styles.spinner} size={18} />
                </>
              ) : (
                <>
                  {t.hero.downloadCv} (PDF) <Download size={18} />
                </>
              )}
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
