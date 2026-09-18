import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Brain, Users } from 'lucide-react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import styles from './About.module.css';

const VALUES = [
  {
    icon: Code,
    title: 'Clean Code',
    desc: 'Writing clean, scalable, and maintainable software architecture using modern design patterns.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    desc: 'Passionate about picking up new frameworks, learning system designs, and staying up-to-date with industry trends.',
  },
  {
    icon: Brain,
    title: 'Problem Solver',
    desc: 'Approaching challenges analytically, dissecting complex bugs, and designing efficient algorithms.',
  },
  {
    icon: Users,
    title: 'Team Player',
    desc: 'Thriving in collaborative agile environments, conducting peer code reviews, and contributing to group success.',
  },
];

export default function About() {
  return (
    <section id="about" className={`${styles.about} section-padding`}>
      <div className="container">
        <SectionHeader title="About Me" subtitle="My Journey" />

        <div className={styles.contentGrid}>
          {/* Detailed Biography & Career Objectives */}
          <motion.div 
            className={styles.bioColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className={styles.subHeading}>Who I Am</h3>
            <p className={styles.paragraph}>
              I am a dedicated, result-oriented Software Developer with a strong foundation in backend development and desktop application design.
               My technical core is anchored in Java / Spring Boot, C# Windows Forms, and Relational Databases (SQL Server, PostgreSQL).
            </p>
            <p className={styles.paragraph}>
              My journey in software development stems from a deep curiosity about how large-scale enterprise systems work. 
              Whether it's building multi-threaded booking desktop software or developing secure REST APIs with validation and pagination, 
              I strive for excellence in coding standards and database performance.
            </p>
            
            <h3 className={styles.subHeading}>Career Objective</h3>
            <p className={styles.paragraph}>
              My goal is to secure a Software Developer, Backend Developer, or Java Developer position within a dynamic tech company where I can apply my expertise in object-oriented programming, API design, and database normalization. 
              I am eager to contribute to building reliable, high-performance services and writing clean, maintainable code.
            </p>
          </motion.div>

          {/* Cards showcasing core strengths */}
          <div className={styles.valuesColumn}>
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={idx}
                  className={`${styles.valueCard} glass`}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6, borderColor: 'var(--accent-primary)' }}
                >
                  <div className={styles.iconContainer}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.valueText}>
                    <h4 className={styles.valueTitle}>{val.title}</h4>
                    <p className={styles.valueDesc}>{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
