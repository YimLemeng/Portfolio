import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label="Toggle dark/light mode"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        key={theme}
        initial={{ y: -15, opacity: 0, rotate: -45 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 15, opacity: 0, rotate: 45 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={styles.iconContainer}
      >
        {theme === 'light' ? (
          <Moon className={styles.moonIcon} size={20} />
        ) : (
          <Sun className={styles.sunIcon} size={20} />
        )}
      </motion.div>
    </motion.button>
  );
}
