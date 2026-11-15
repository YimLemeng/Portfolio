import React from 'react';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className={styles.header}>
      {subtitle && (
        <div className={styles.subtitleBadge}>
          <span className={styles.badgeDot} />
          <span>{subtitle}</span>
        </div>
      )}
      
      <h2 className={styles.title}>
        {title}
      </h2>
      
      <div className={styles.line} />
    </div>
  );
}
