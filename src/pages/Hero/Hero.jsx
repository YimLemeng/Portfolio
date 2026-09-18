import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import profilePhoto from '../../assets/Meng.jpg';
import styles from './Hero.module.css';

const TITLES = [
  'Backend Developer',
  'Java / Spring Boot Developer',
  'C# .NET Desktop Developer',
];

const TYPING_SPEED = 150;
const DELETING_SPEED = 75;
const PAUSE_DURATION = 2000;

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullTitle = TITLES[titleIndex];

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
      setTitleIndex((prevIndex) => (prevIndex + 1) % TITLES.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex]);

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
    const cvContent = `YIM LEMENG - BACKEND DEVELOPER RESUME\n\nContact: yimlemeng.ym@gmail.com | +855 (69) 232-123\nGitHub: github.com/yim-lemeng\n\nTECHNICAL SKILLS:\n- Backend: Spring Boot, Java, REST APIs\n- Desktop Development: C# Windows Forms\n- Databases: SQL Server, PostgreSQL\n- Tools: Git, GitHub, VS Code, IntelliJ IDEA, Visual Studio\n\nPROJECTS:\n1. Bus Station Management System (C# Windows Forms, SQL Server)\n2. Customer Management REST API (Spring Boot, PostgreSQL)\n3. Employee Management System (Spring Boot, React JS, PostgreSQL)\n\nEDUCATION:\nBachelor of Science in Information Technology.`;
    
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Yim_Lemeng_Resume.txt';
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
            <span>Ready for Opportunities</span>
          </div>
          
          <h1 className={styles.greeting}>
            Hi, I'm <span className={styles.name}>Yim Lemeng</span>
          </h1>
          
          <div className={styles.animatedTitleWrapper}>
            <span className={styles.animatedTitle}>{currentText}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.bio}>
            A versatile software developer specializing in building robust enterprise backend architectures using 
            <strong> Spring Boot & Java</strong> and desktop client solutions with <strong>C# Windows Forms</strong>. 
            Focused on clean code, REST APIs, and relational databases.
          </p>

          <div className={styles.ctaGroup}>
            <button onClick={handleDownloadCV} className={styles.btnPrimary}>
              Download CV <Download size={18} />
            </button>
            <a href="#contact" onClick={handleContactScroll} className={styles.btnSecondary}>
              Contact Me <ArrowRight size={18} />
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
