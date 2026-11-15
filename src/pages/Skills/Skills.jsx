import React from 'react';
import { 
  Server, Laptop, Database, Wrench,
  Code, Cpu, Coffee, Network, 
  AppWindow, GitBranch, Terminal, PlaySquare
} from 'lucide-react';
import { Github } from '../../components/Icons/Icons';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import SkillBadge from '../../components/SkillBadge/SkillBadge';
import styles from './Skills.module.css';

const CATEGORY_META = [
  { id: 'backend', icon: Server },
  { id: 'desktop', icon: Laptop },
  { id: 'database', icon: Database },
  { id: 'tools', icon: Wrench },
];

const SKILLS_BY_CATEGORY = {
  backend: [
    { name: 'Spring Boot', icon: Cpu },
    { name: 'Java', icon: Coffee },
    { name: 'REST API', icon: Network },
  ],
  desktop: [
    { name: 'C# Windows Forms', icon: AppWindow },
  ],
  database: [
    { name: 'SQL Server', icon: Database },
    { name: 'PostgreSQL', icon: Database },
  ],
  tools: [
    { name: 'Git', icon: GitBranch },
    { name: 'GitHub', icon: Github },
    { name: 'VS Code', icon: Terminal },
    { name: 'IntelliJ IDEA', icon: Code },
    { name: 'Visual Studio', icon: PlaySquare },
  ],
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className={`${styles.skills} section-padding`}>
      <div className="container">
        <SectionHeader title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className={styles.grid}>
          {CATEGORY_META.map((cat) => {
            const CatIcon = cat.icon;
            const skillsList = SKILLS_BY_CATEGORY[cat.id];
            const categoryTitle = t.skills.categories[cat.id] || cat.id;

            return (
              <div 
                key={cat.id} 
                className={`${styles.categoryCard} glass`}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.iconContainer}>
                    <CatIcon size={22} />
                  </div>
                  <h3 className={styles.categoryTitle}>{categoryTitle}</h3>
                </div>
                
                <div className={styles.skillsContainer}>
                  {skillsList.map((skill) => (
                    <SkillBadge 
                      key={skill.name} 
                      name={skill.name} 
                      icon={skill.icon} 
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
