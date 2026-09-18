import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './MainLayout.module.css';

export default function MainLayout({ children, theme, toggleTheme }) {
  return (
    <div className={styles.layout}>
      {/* Ambient background decoration */}
      <div className="grid-bg" />
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
}
