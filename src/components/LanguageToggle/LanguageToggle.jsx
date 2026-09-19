import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={styles.toggleBtn}
      aria-label="Toggle Khmer/English language"
      title={language === 'en' ? 'ប្តូរទៅជាភាសាខ្មែរ (Switch to Khmer)' : 'Switch to English'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Languages size={17} className={styles.langIcon} />
      <AnimatePresence mode="wait">
        <motion.span
          key={language}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 8, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={styles.langLabel}
        >
          {language === 'en' ? 'EN' : 'KH'}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
