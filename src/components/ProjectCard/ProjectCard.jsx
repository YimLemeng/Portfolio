import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import { Github } from '../Icons/Icons';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  title,
  description,
  features = [],
  tags = [],
  image,
  githubUrl,
  demoUrl,
}) {
  const { t } = useLanguage();

  return (
    <motion.div
      className={`${styles.card} glass`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.overlay}>
          <div className={styles.overlayLinks}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label={`View ${title} source on GitHub`}
              >
                <Github size={20} />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconLink}
                aria-label={`View live demo of ${title}`}
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {features.length > 0 && (
          <div className={styles.featuresSection}>
            <h4 className={styles.featuresTitle}>{t.projects.keyFeatures}</h4>
            <ul className={styles.featuresList}>
              {features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <CheckCircle size={14} className={styles.checkIcon} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        
        <div className={styles.actions}>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtnSecondary}
            >
              <Github size={16} /> {t.projects.codeBtn}
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtnPrimary}
            >
              {t.projects.demoBtn} <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
