import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import CVTemplate from '../CVTemplate/CVTemplate';
import CVModal from '../CVModal/CVModal';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navbar.module.css';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef(null);
  const cvRef = useRef(null);
  const { t, language } = useLanguage();
  const showViewCv = import.meta.env.DEV;

  const navItems = [
    { label: t.nav.home, href: '#home', id: 'home' },
    { label: t.nav.about, href: '#about', id: 'about' },
    { label: t.nav.skills, href: '#skills', id: 'skills' },
    { label: t.nav.projects, href: '#projects', id: 'projects' },
    { label: t.nav.experience, href: '#experience', id: 'experience' },
    { label: t.nav.contact, href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Native IntersectionObserver: runs on compositor thread, 0 layout thrashing!
    const observerCallback = (entries) => {
      if (isClickScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const wasOpen = isOpen;
    setIsOpen(false);
    setActiveSection(id);

    isClickScrolling.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 700);

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', `#${id}`);
      }
    };

    if (wasOpen) {
      setTimeout(scrollToTarget, 80);
    } else {
      scrollToTarget();
    }
  };

  const handleDownloadCV = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const { jsPDF } = await import('jspdf');
      const element = cvRef.current;

      if (!element) {
        throw new Error('CV element not found');
      }

      const fileName = language === 'km' ? 'Yim_Lemeng_CV_KH.pdf' : 'Yim_Lemeng_CV_EN.pdf';

      const opt = {
        margin: 0,
        filename: fileName,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'portrait',
        },
      };

      const canvas = await html2pdf().from(element).set(opt).toCanvas().get('canvas');
      const pdf = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait',
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);

      const containerRect = element.getBoundingClientRect();
      const links = element.querySelectorAll('a[href]');

      links.forEach((a) => {
        const href = a.getAttribute('href');
        if (!href) return;

        const rects = a.getClientRects();
        const clientRects = rects.length > 0 ? Array.from(rects) : [a.getBoundingClientRect()];

        clientRects.forEach((rect) => {
          if (rect.width === 0 || rect.height === 0) return;

          const relX = rect.left - containerRect.left;
          const relY = rect.top - containerRect.top;
          const pdfX = (relX / containerRect.width) * 210;
          const pdfY = (relY / containerRect.height) * 297;
          const pdfW = (rect.width / containerRect.width) * 210;
          const pdfH = (rect.height / containerRect.height) * 297;

          pdf.link(pdfX, pdfY, pdfW, pdfH, { url: href });
        });
      });

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
    <>
      {showViewCv && <CVTemplate ref={cvRef} language={language} />}
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} glass`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={styles.logo}>
          <div className={styles.logoIconBox}>
            <Terminal className={styles.logoIcon} size={18} />
          </div>
          <span className={styles.logoText}>Yim<span className={styles.accent}> Lemeng</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Toggle, Theme Toggle & Mobile Menu Trigger */}
        <div className={styles.actions}>
          {showViewCv && (
            <button
              type="button"
              onClick={() => setIsCvModalOpen(true)}
              className={styles.cvNavBtn}
              title={language === 'km' ? 'មើលប្រវត្តិរូបសង្ខេប (CV)' : 'View Curriculum Vitae (CV)'}
            >
              <Eye size={15} />
              <span>{t.hero.viewCv}</span>
            </button>
          )}
          <LanguageToggle />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.menuBtn}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`${styles.mobileMenu} glass`}
          >
            <div className={styles.mobileLinks}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                >
                  {item.label}
                </a>
              ))}
              {showViewCv && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsCvModalOpen(true);
                  }}
                  className={styles.mobileCvBtn}
                >
                  <Eye size={18} />
                  <span>{t.hero.viewCv}</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

    {showViewCv && (
      <CVModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onDownloadPdf={handleDownloadCV}
        isGeneratingPdf={isGeneratingPdf}
      />
    )}
    </>
  );
}
