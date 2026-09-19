import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectInventory from '../../assets/picInventory.png';
import projectBus from '../../assets/bus_station.png';
import projectApi from '../../assets/project_api.jpg';
import projectEmployee from '../../assets/project_employee.jpg';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Projects.module.css';

const PROJECT_IMAGES = {
  'customer-api': projectApi,
  'employee-system': projectEmployee,
  'bus-station': projectBus,
  'inventory-system': projectInventory,
};

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className={`${styles.projects} section-padding`}>
      <div className="container">
        <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />
        
        <div className={styles.grid}>
          {t.projects.items.map((project) => (
            <div key={project.id} className={styles.cardContainer}>
              <ProjectCard 
                {...project} 
                image={PROJECT_IMAGES[project.id]} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
