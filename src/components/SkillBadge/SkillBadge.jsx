import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillBadge.module.css';

export default function SkillBadge({ name, icon: Icon }) {
  return (
    <motion.div
      className={`${styles.badge} glass`}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {Icon && <Icon className={styles.icon} size={18} />}
      <span className={styles.name}>{name}</span>
    </motion.div>
  );
}
