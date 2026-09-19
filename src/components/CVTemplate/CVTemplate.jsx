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

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>{isKhmer ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'CONTACT'}</h3>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'អ៊ីមែល' : 'Email'}:</span>
                <span className={styles.contactVal}>yimlemeng.ym@gmail.com</span>
              </li>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'ទូរស័ព្ទ' : 'Phone'}:</span>
                <span className={styles.contactVal}>+855 (69) 232-123</span>
              </li>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'ហ្គីតហាប់' : 'GitHub'}:</span>
                <span className={styles.contactVal}>github.com/YimLemeng</span>
              </li>
              <li>
                <span className={styles.contactLabel}>{isKhmer ? 'ទីតាំង' : 'Location'}:</span>
                <span className={styles.contactVal}>{isKhmer ? 'រាជធានីភ្នំពេញ, កម្ពុជា' : 'Phnom Penh, Cambodia'}</span>
              </li>
            </ul>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>{isKhmer ? 'ជំនាញបច្ចេកទេស' : 'TECHNICAL SKILLS'}</h3>
            
            <div className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>Backend</h4>
              <p className={styles.skillItems}>Spring Boot, Java, REST APIs</p>
            </div>

            <div className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>Desktop</h4>
              <p className={styles.skillItems}>C# Windows Forms, .NET</p>
            </div>

            <div className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>Databases</h4>
              <p className={styles.skillItems}>SQL Server, PostgreSQL, MySQL</p>
            </div>

            <div className={styles.skillGroup}>
              <h4 className={styles.skillGroupTitle}>Tools & IDEs</h4>
              <p className={styles.skillItems}>Git, GitHub, IntelliJ IDEA, Visual Studio, VS Code</p>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarHeading}>{isKhmer ? 'ភាសា' : 'LANGUAGES'}</h3>
            <ul className={styles.languageList}>
              <li>
                <strong>{isKhmer ? 'ភាសាខ្មែរ' : 'Khmer'}:</strong> {isKhmer ? 'ភាសាកំណើត (Native)' : 'Native'}
              </li>
              <li>
                <strong>{isKhmer ? 'ភាសាអង់គ្លេស' : 'English'}:</strong> {isKhmer ? 'កម្រិតទំនាក់ទំនងការងារ' : 'Professional Working'}
              </li>
            </ul>
          </div>
        </aside>

        {/* Right Column (Main Content) */}
        <main className={styles.mainContent}>
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.name}>{isKhmer ? 'យីម លីម៉េង' : 'YIM LEMENG'}</h1>
            <h2 className={styles.jobTitle}>
              {isKhmer ? 'អ្នកអភិវឌ្ឍន៍ SOFTWARE & BACKEND DEVELOPER' : 'SOFTWARE & BACKEND DEVELOPER'}
            </h2>
            <div className={styles.headerLine} />
          </header>

          {/* Profile Summary */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{isKhmer ? 'ប្រវត្តិសង្ខេប & គោលដៅការងារ' : 'PROFESSIONAL SUMMARY'}</h3>
            <p className={styles.summaryText}>
              {isKhmer
                ? 'និស្សិតបច្ចេកវិទ្យាព័ត៌មានវិទ្យា (IT) ឆ្នាំទី ៣ ដែលមានការតាំងចិត្តខ្ពស់ និងជំនាញរឹងមាំក្នុងការអភិវឌ្ឍប្រព័ន្ធ Backend ដោយប្រើប្រាស់ Java / Spring Boot និងកម្មវិធី Desktop ដោយប្រើប្រាស់ C# Windows Forms។ ផ្តោតសំខាន់លើការសរសេរកូដស្អាតមានរបៀប (Clean Code), ប្រព័ន្ធសុវត្ថិភាពទិន្នន័យ និង RESTful APIs។'
                : 'Enthusiastic and detail-oriented Software Developer with solid foundations in backend architectures (Java / Spring Boot) and desktop application development (C# Windows Forms). Passionate about writing clean, maintainable code, designing scalable RESTful APIs, and implementing robust relational database management.'}
            </p>
          </section>

          {/* Key Projects */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{isKhmer ? 'គម្រោង និងស្នាដៃសំខាន់ៗ' : 'KEY PROJECTS'}</h3>

            <div className={styles.projectItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>Bus Station Management System</h4>
                <span className={styles.itemMeta}>C# Windows Forms | SQL Server | ADO.NET</span>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  {isKhmer
                    ? 'បង្កើតកម្មវិធីគ្រប់គ្រងស្ថានីយរថយន្តក្រុង សម្រាប់កក់សំបុត្រ កំណត់កាលវិភាគ និងគ្រប់គ្រងអ្នកដំណើរ។'
                    : 'Developed a full-featured desktop solution for bus schedules, ticket bookings, cancellations, and route dispatching.'}
                </li>
                <li>
                  {isKhmer
                    ? 'មាន Dashboard បង្ហាញស្ថិតិចំណូល ប្រវត្តិការកក់ និងរបាយការណ៍ហិរញ្ញវត្ថុជាក់ស្តែង។'
                    : 'Built interactive dashboard analytics for real-time station revenues and booking metrics.'}
                </li>
              </ul>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>Inventory Management System</h4>
                <span className={styles.itemMeta}>C# Windows Forms | SQL Server | ADO.NET</span>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  {isKhmer
                    ? 'កម្មវិធីគ្រប់គ្រងស្តុកទំនិញ តាមដានការនាំចូល (Stock In) និងនាំចេញ (Stock Out) យ៉ាងរហ័ស។'
                    : 'Streamlined inventory tracking, supplier ordering, and automated low-stock alert monitoring.'}
                </li>
                <li>
                  {isKhmer
                    ? 'រៀបចំទិន្នន័យទំនិញតាមប្រភេទ និងបង្កើតរបាយការណ៍លម្អិតសម្រាប់អាជីវកម្ម។'
                    : 'Structured product categorization and generated comprehensive sales and inventory reports.'}
                </li>
              </ul>
            </div>

            <div className={styles.projectItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>Customer Management REST API</h4>
                <span className={styles.itemMeta}>Spring Boot | Java | PostgreSQL | JUnit</span>
              </div>
              <ul className={styles.bulletList}>
                <li>
                  {isKhmer
                    ? 'បង្កើតសេវាកម្ម Backend API សម្រាប់គ្រប់គ្រងទិន្នន័យអតិថិជនតាមស្តង់ដារ MVC Architecture។'
                    : 'Engineered high-performance RESTful API endpoints with DTO mapping and Spring Validation.'}
                </li>
                <li>
                  {isKhmer
                    ? 'រៀបចំប្រព័ន្ធ Global Exception Handling និងមុខងារ Pagination & Sorting កម្រិតខ្ពស់។'
                    : 'Implemented global exception handling and optimized database query pagination.'}
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{isKhmer ? 'ការអប់រំ និងបណ្តុះបណ្តាល' : 'EDUCATION'}</h3>
            
            <div className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>
                  {isKhmer ? 'បរិញ្ញាបត្រ វិទ្យាសាស្ត្របច្ចេកវិទ្យាព័ត៌មាន (IT)' : 'Bachelor of Science in Information Technology'}
                </h4>
                <span className={styles.dateBadge}>2024 - Present</span>
              </div>
              <p className={styles.institution}>
                {isKhmer ? 'សាកលវិទ្យាល័យ បៀលប្រាយ (ឆ្នាំទី ៣) - រាជធានីភ្នំពេញ' : 'Build Bright University (Year 3) - Phnom Penh, Cambodia'}
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>
                  {isKhmer ? 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)' : 'High School Diploma'}
                </h4>
                <span className={styles.dateBadge}>2015 - 2018</span>
              </div>
              <p className={styles.institution}>
                {isKhmer ? 'វិទ្យាល័យ ព្រះមុនីវង្ស - ខេត្តបាត់ដំបង' : 'Preah Monivong High School - Battambang, Cambodia'}
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>{isKhmer ? 'បទពិសោធន៍ការងារ' : 'WORK EXPERIENCE'}</h3>
            
            <div className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>{isKhmer ? 'អ្នកបើកបរ (Driver)' : 'Driver'}</h4>
                <span className={styles.dateBadge}>2023 - 2024</span>
              </div>
              <p className={styles.institution}>Nham 24 Express</p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <h4 className={styles.itemTitle}>{isKhmer ? 'បុគ្គលិកដឹកជញ្ជូន (Delivery Driver)' : 'Delivery Driver'}</h4>
                <span className={styles.dateBadge}>2020 - 2023</span>
              </div>
              <p className={styles.institution}>J&T Express</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
});

export default CVTemplate;
