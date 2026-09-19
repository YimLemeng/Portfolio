import React, { forwardRef } from 'react';
import profilePhoto from '../../assets/cv_profile.jpg';
import styles from './CVTemplate.module.css';

const CVTemplate = forwardRef(({ language = 'en' }, ref) => {
  const isKhmer = language === 'km';

  return (
    <div className={styles.cvWrapper}>
      <div ref={ref} className={`${styles.cvContainer} ${isKhmer ? styles.khmerFont : ''}`}>
        {/* Left Column (Sidebar) */}
        <aside className={styles.sidebar}>
          <div className={styles.photoContainer}>
            <img src={profilePhoto} alt="Yim Lemeng" className={styles.profileImage} />
          </div>

          {/* Contact */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>{isKhmer ? 'ព័ត៌មានទំនាក់ទំនង' : 'CONTACT'}</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'អ៊ីមែល' : 'EMAIL'}</span>
                <span className={styles.contactVal}>yimlemeng.ym@gmail.com</span>
              </li>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'លេខទូរស័ព្ទ' : 'PHONE'}</span>
                <span className={styles.contactVal}>+855 (69) 232-123</span>
              </li>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'GITHUB' : 'GITHUB'}</span>
                <span className={styles.contactVal}>github.com/YimLemeng</span>
              </li>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'ទីលំនៅបច្ចុប្បន្ន' : 'LOCATION'}</span>
                <span className={styles.contactVal}>{isKhmer ? 'ភ្នំពេញ, កម្ពុជា' : 'Phnom Penh, Cambodia'}</span>
              </li>
            </ul>
          </div>

          {/* Technical Skills */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>{isKhmer ? 'ជំនាញបច្ចេកទេស' : 'SKILLS'}</h3>
            
            <div className={styles.skillBlock}>
              <span className={styles.skillCat}>Backend</span>
              <span className={styles.skillList}>Spring Boot, Java, REST APIs</span>
            </div>

            <div className={styles.skillBlock}>
              <span className={styles.skillCat}>Desktop</span>
              <span className={styles.skillList}>C# Windows Forms, ADO.NET</span>
            </div>

            <div className={styles.skillBlock}>
              <span className={styles.skillCat}>Databases</span>
              <span className={styles.skillList}>SQL Server, PostgreSQL, MySQL</span>
            </div>

            <div className={styles.skillBlock}>
              <span className={styles.skillCat}>Tools</span>
              <span className={styles.skillList}>Git, GitHub, VS Code, IntelliJ IDEA</span>
            </div>
          </div>

          {/* Languages */}
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>{isKhmer ? 'ភាសា' : 'LANGUAGES'}</h3>
            <ul className={styles.langList}>
              <li>
                <span className={styles.langName}>{isKhmer ? 'ភាសាខ្មែរ' : 'Khmer'}:</span>
                <span className={styles.langLevel}>{isKhmer ? 'ភាសាកំណើត (Native)' : 'Native'}</span>
              </li>
              <li>
                <span className={styles.langName}>{isKhmer ? 'ភាសាអង់គ្លេស' : 'English'}:</span>
                <span className={styles.langLevel}>{isKhmer ? 'ទំនាក់ទំនងការងារ' : 'Working Proficiency'}</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Column (Main Content) */}
        <main className={styles.mainContent}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.name}>{isKhmer ? 'យីម លីម៉េង' : 'YIM LEMENG'}</h1>
            <p className={styles.jobTitle}>
              {isKhmer ? 'SOFTWARE & BACKEND DEVELOPER' : 'SOFTWARE & BACKEND DEVELOPER'}
            </p>
            <div className={styles.headerBar} />
          </header>

          {/* Professional Summary */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {isKhmer ? 'សេចក្តីសង្ខេបប្រវត្តិរូប (SUMMARY)' : 'PROFESSIONAL SUMMARY'}
            </h2>
            <p className={styles.summaryText}>
              {isKhmer
                ? 'និស្សិតឆ្នាំទី ៣ ផ្នែក IT ដែលមានមូលដ្ឋានគ្រឹះរឹងមាំលើការអភិវឌ្ឍប្រព័ន្ធ Backend (Java / Spring Boot) និងកម្មវិធី Desktop (C# Windows Forms)។ ផ្តោតលើការសរសេរកូដស្អាតមានរបៀប (Clean Code), REST APIs និងការគ្រប់គ្រង Database (SQL Server, PostgreSQL)។'
                : 'Dedicated Software Developer with strong foundation in backend development (Spring Boot / Java) and desktop applications (C# Windows Forms). Focused on clean architecture, robust RESTful APIs, and reliable relational database management.'}
            </p>
          </section>

          {/* Key Projects */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {isKhmer ? 'គម្រោងស្នាដៃសំខាន់ៗ (PROJECTS)' : 'KEY PROJECTS'}
            </h2>

            {/* Project 1 */}
            <div className={styles.projectItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemTitle}>Bus Station Management System</span>
                <span className={styles.itemTech}>C# WinForms | SQL Server</span>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  {isKhmer
                    ? 'កម្មវិធី Desktop សម្រាប់កក់សំបុត្រ រៀបចំកាលវិភាគឡានក្រុង និងគ្រប់គ្រងអ្នកដំណើរ។'
                    : 'Desktop app for bus ticketing, schedule dispatching, and passenger records management.'}
                </li>
                <li>
                  {isKhmer
                    ? 'មាន Dashboard គណនាប្រាក់ចំណូល ប្រវត្តិកក់សំបុត្រ និងស្ថិតិស្ថានីយជាក់ស្តែង។'
                    : 'Features analytics dashboard calculating live station revenues and booking histories.'}
                </li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className={styles.projectItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemTitle}>Inventory Management System</span>
                <span className={styles.itemTech}>C# WinForms | SQL Server</span>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  {isKhmer
                    ? 'កម្មវិធីគ្រប់គ្រងស្តុកទំនិញ តាមដានការនាំចូល (Stock In) និងនាំចេញ (Stock Out)។'
                    : 'Inventory tracking software managing stock levels, low-stock alerts, and suppliers.'}
                </li>
                <li>
                  {isKhmer
                    ? 'ចាត់តាំងទំនិញតាមប្រភេទ និងបង្កើតរបាយការណ៍លក់ និងស្តុកលម្អិត។'
                    : 'Categorized product catalog with automated sales and stock reporting.'}
                </li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className={styles.projectItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemTitle}>Customer Management REST API</span>
                <span className={styles.itemTech}>Spring Boot | PostgreSQL</span>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  {isKhmer
                    ? 'សេវាកម្ម Backend API សម្រាប់គ្រប់គ្រងទិន្នន័យអតិថិជនជាមួយ MVC Architecture និង DTOs។'
                    : 'Backend API service with full CRUD operations, DTO mapping, and Spring Validation.'}
                </li>
                <li>
                  {isKhmer
                    ? 'ប្រព័ន្ធ Global Exception Handling និងការរៀបចំ Pagination & Sorting មានប្រសិទ្ធភាព។'
                    : 'Engineered custom global exception handlers and optimized database pagination.'}
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {isKhmer ? 'ការអប់រំ (EDUCATION)' : 'EDUCATION'}
            </h2>
            
            <div className={styles.eduItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemTitle}>
                  {isKhmer ? 'បរិញ្ញាបត្រ វិទ្យាសាស្ត្រព័ត៌មានវិទ្យា (IT) - ឆ្នាំទី ៣' : 'Bachelor of Science in Information Technology (Year 3)'}
                </span>
                <span className={styles.itemDate}>2024 - Present</span>
              </div>
              <p className={styles.institution}>
                {isKhmer ? 'សាកលវិទ្យាល័យ បៀលប្រាយ (BBU) - ភ្នំពេញ' : 'Build Bright University - Phnom Penh, Cambodia'}
              </p>
            </div>

            <div className={styles.eduItem}>
              <div className={styles.itemHeader}>
                <span className={styles.itemTitle}>
                  {isKhmer ? 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)' : 'High School Diploma'}
                </span>
                <span className={styles.itemDate}>2015 - 2018</span>
              </div>
              <p className={styles.institution}>
                {isKhmer ? 'វិទ្យាល័យ ព្រះមុនីវង្ស - បាត់ដំបង' : 'Preah Monivong High School - Battambang, Cambodia'}
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>
              {isKhmer ? 'បទពិសោធន៍ការងារ (EXPERIENCE)' : 'WORK EXPERIENCE'}
            </h2>
            
            <div className={styles.workRow}>
              <div className={styles.workEntry}>
                <span className={styles.workRole}>{isKhmer ? 'អ្នកបើកបរ' : 'Driver'}</span>
                <span className={styles.workOrg}>Nham 24 Express (2023 - 2024)</span>
              </div>
              <div className={styles.workEntry}>
                <span className={styles.workRole}>{isKhmer ? 'បុគ្គលិកដឹកជញ្ជូន' : 'Delivery Driver'}</span>
                <span className={styles.workOrg}>J&T Express (2020 - 2023)</span>
              </div>
              <div className={styles.workEntry}>
                <span className={styles.workRole}>{isKhmer ? 'បុគ្គលិកទទួលភ្ញៀវ' : 'Receptionist'}</span>
                <span className={styles.workOrg}>Jasmine Hotel (2019 - 2020)</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});

export default CVTemplate;
