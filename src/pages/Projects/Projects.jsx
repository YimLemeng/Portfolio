import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectInventory from '../../assets/picInventory.png';
import projectBus from '../../assets/bus_station.png';
import projectApi from '../../assets/project_api.jpg';
import projectEmployee from '../../assets/project_employee.jpg';
import styles from './Projects.module.css';


const PROJECTS_DATA = [
  {
    title: 'Customer Management REST API',
    description: 'A robust production-ready backend API service for managing client relationships. Built using clean MVC architecture patterns, enterprise-level exception handlers, and security protocols.',
    features: [
      'Full CRUD Operations for client profiles',
      'DTO (Data Transfer Object) mapping for security',
      'Spring Validation for database constraints',
      'Global Exception Handling with custom error responses',
      'Optimized pagination & database sorting algorithms',
    ],
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'JUnit'],
    image: projectApi,
    githubUrl: 'https://github.com/marcus-vance/customer-management-api',
    demoUrl: 'https://github.com/marcus-vance/customer-management-api#api-docs',
  },
  {
    title: 'Employee Management System',
    description: 'A full-stack dashboard web application that allows corporate administrators to manage personnel structures, audit departments, search personnel databases, and authenticate user sessions.',
    features: [
      'JWT Authentication & Spring Security login workflows',
      'Interactive Employee CRUD grids',
      'Fuzzy search and multi-criteria filters',
      'Seamless React frontend & Spring Boot REST API integration',
    ],
    tags: ['Spring Boot', 'React JS', 'PostgreSQL', 'REST API', 'CSS Modules'],
    image: projectEmployee,
    githubUrl: 'https://github.com/marcus-vance/employee-management-fullstack',
    demoUrl: 'https://github.com/marcus-vance/employee-management-fullstack',
  },
  {
    title: 'Bus Station Management System',
    description: 'A comprehensive desktop application designed to streamline bus station operations, including ticketing, scheduling, and passenger management. Built with C# Windows Forms for a responsive user interface.',
    features: [
      'Manage bus schedules and routes',
      'Ticket booking and cancellation system',
      'Passenger information management',
      'Reporting dashboard for station metrics',
      'Route optimization and real-time updates',
      'Booking Records and Ticket History',
      'Payment Management and Reporting',
      'Driver and Staff Management with Scheduling',
    ],
    tags: ['C# Windows Forms', 'SQL Server', 'ADO.NET'],
    image: projectBus, 
    githubUrl: 'https://github.com/YimLemeng/Bus_station_System.git',
    demoUrl: 'https://drive.google.com/file/d/1Tpz5VcIkaT9X9KGRHU5OZ9Yw9tbbIuOa/view?usp=sharing',
  },
  {
    title: 'Inventory Management System',
    description: 'A comprehensive desktop application designed to streamline inventory tracking and management for businesses. Built with C# Windows Forms, it offers a user-friendly interface and robust database integration.',
    features: [
      'Manage inventory levels and availability status',
      'Manage supplier relationships and orders',
      'Product catalog management',
      'Stock in and out tracking with real-time updates',
      'Reporting Stock levels and generating inventory reports',
    ],
    tags: ['C# Windows Forms', 'SQL Server', 'ADO.NET'],
    image: projectInventory,
    githubUrl: 'https://github.com/YimLemeng/Inventory-System.git',
    demoUrl: 'https://drive.google.com/file/d/1wUR71bAA7KAOp0mi8xy0b8t2X-wXPhfN/view?usp=sharing',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`${styles.projects} section-padding`}>
      <div className="container">
        <SectionHeader title="My Projects" subtitle="Recent Implementations" />
        
        <div className={styles.grid}>
          {PROJECTS_DATA.map((project, idx) => (
            <div key={idx} className={styles.cardContainer}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
