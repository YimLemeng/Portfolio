import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Navbar.module.css';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isClickScrolling = useRef(false);
  const clickTimeoutRef = useRef(null);
  const { t } = useLanguage();

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
      setScrolled(window.scrollY > 20);

      // If user clicked a link, don't let scroll spy overwrite the active section during smooth scroll
      if (isClickScrolling.current) return;

      // Bottom of page detection (Contact is the last section)
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      // Robust top-crossing scroll spy using viewport-relative bounding rect
      const headerOffset = 100;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= headerOffset) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);

    isClickScrolling.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} glass`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={styles.logo}>
          <Terminal className={styles.logoIcon} size={22} />
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
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className={styles.activeIndicator}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Language Toggle, Theme Toggle & Mobile Menu Trigger */}
        <div className={styles.actions}>
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
