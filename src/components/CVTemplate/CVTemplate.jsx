import React, { forwardRef } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Github } from '../Icons/Icons';
import profilePhoto from '../../assets/Meng.png';
import styles from './CVTemplate.module.css';

const CVTemplate = forwardRef(({ language = 'en' }, ref) => {
  const isKhmer = language === 'km';

  return (
    <div className={styles.cvWrapper}>
      <div ref={ref} className={`${styles.cvContainer} ${isKhmer ? styles.khmerFont : ''}`}>
        
        {/* ================= LEFT SIDEBAR ================= */}
        <aside className={styles.sidebar}>
          {/* Avatar with White Border & Oval Shape */}
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarOval}>
              <img src={profilePhoto} alt="Yim Lemeng" className={styles.avatarImg} />
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ទំនាក់ទំនង' : 'CONTACT'}</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.iconBox}><Phone size={13} /></span>
                <span>+855 (69) 232-123</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.iconBox}><Mail size={13} /></span>
                <span className={styles.emailText}>yimlemeng.ym@gmail.com</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.iconBox}><Github size={13} /></span>
                <span>github.com/YimLemeng</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.iconBox}><MapPin size={13} /></span>
                <span>{isKhmer ? 'រាជធានីភ្នំពេញ, កម្ពុជា' : 'Phnom Penh, Cambodia'}</span>
              </li>
            </ul>
          </div>

          {/* Personal Information Section */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ព័ត៌មានផ្ទាល់ខ្លួន' : 'PERSONAL DETAILS'}</h3>
            <div className={styles.personalList}>
              <div className={styles.personalRow}>
                <span className={styles.personalLabel}>{isKhmer ? 'ភេទ' : 'Sex'}:</span>
                <span className={styles.personalValue}>{isKhmer ? 'ប្រុស' : 'Male'}</span>
              </div>
              <div className={styles.personalRow}>
                <span className={styles.personalLabel}>{isKhmer ? 'ថ្ងៃកំណើត' : 'Date of Birth'}:</span>
                <span className={styles.personalValue}>12-05-2000</span>
              </div>
              <div className={styles.personalRow}>
                <span className={styles.personalLabel}>{isKhmer ? 'សញ្ជាតិ' : 'Nationality'}:</span>
                <span className={styles.personalValue}>{isKhmer ? 'កម្ពុជា' : 'Cambodian'}</span>
              </div>
              <div className={styles.personalRow}>
                <span className={styles.personalLabel}>{isKhmer ? 'ជនជាតិ' : 'Ethnic'}:</span>
                <span className={styles.personalValue}>{isKhmer ? 'ខ្មែរ' : 'Khmer'}</span>
              </div>
              <div className={styles.personalRow}>
                <span className={styles.personalLabel}>{isKhmer ? 'សាសនា' : 'Religion'}:</span>
                <span className={styles.personalValue}>{isKhmer ? 'ព្រះពុទ្ធ' : 'Buddhism'}</span>
              </div>
              <div className={styles.personalRow}>
                <span className={styles.personalLabel}>{isKhmer ? 'កម្ពស់' : 'Height'}:</span>
                <span className={styles.personalValue}>1.65 m</span>
              </div>
              <div className={styles.personalPlace}>
                <span className={styles.personalLabel}>{isKhmer ? 'ទីកន្លែងកំណើត' : 'Place of Birth'}:</span>
                <span className={styles.personalPlaceVal}>
                  {isKhmer ? 'ក្រុងបាត់ដំបង ខេត្តបាត់ដំបង' : 'Battambang City, Battambang Province'}
                </span>
              </div>
            </div>
          </div>

          {/* Languages Section */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ភាសា' : 'LANGUAGES'}</h3>
            <div className={styles.langItem}>
              <div className={styles.langHeader}>
                <span>{isKhmer ? 'ភាសាខ្មែរ' : 'Khmer (Native)'}</span>
                <span className={styles.langLevel}>100%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '100%' }} />
              </div>
            </div>
            <div className={styles.langItem}>
              <div className={styles.langHeader}>
                <span>{isKhmer ? 'ភាសាអង់គ្លេស' : 'English (Working)'}</span>
                <span className={styles.langLevel}>65%</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '65%' }} />
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ជំនាញបច្ចេកទេស' : 'TECHNICAL SKILLS'}</h3>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Backend</h4>
              <p className={styles.skillDesc}>Java, Spring Boot, REST APIs, OOP</p>
            </div>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Desktop</h4>
              <p className={styles.skillDesc}>C#, .NET Windows Forms, ADO.NET</p>
            </div>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Database</h4>
              <p className={styles.skillDesc}>SQL Server, PostgreSQL</p>
            </div>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Tools & DevOps</h4>
              <p className={styles.skillDesc}>Git, GitHub, Docker, Postman, VS Code</p>
            </div>
          </div>

          {/* Key Strengths */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ចំណុចខ្លាំង' : 'KEY STRENGTHS'}</h3>
            <ul className={styles.sideBullets}>
              <li>Clean Code & Layered Architecture</li>
              <li>Problem Solving & Algorithmic Logic</li>
              <li>Team Collaboration & Reliability</li>
              <li>Fast Learner & Adaptability</li>
            </ul>
          </div>
        </aside>

        {/* ================= RIGHT MAIN CONTENT ================= */}
        <main className={styles.mainContent}>
          
          {/* Header */}
          <header className={styles.header}>
            <h1 className={styles.name}>{isKhmer ? 'យឹម លីម៉េង' : 'YIM LEMENG'}</h1>
            <h2 className={styles.jobTitle}>
              {isKhmer ? 'អ្នកអភិវឌ្ឍន៍ SOFTWARE & BACKEND DEVELOPER' : 'SOFTWARE & BACKEND DEVELOPER'}
            </h2>
            <p className={styles.summaryText}>
              {isKhmer
                ? 'និស្សិតឆ្នាំទី ៣ ផ្នែក IT ដែលមានចំណង់ចំណូលចិត្តខ្ពស់លើការអភិវឌ្ឍ Backend និង Desktop Applications។ មានមូលដ្ឋានគ្រឹះរឹងមាំលើ Java (Spring Boot) និង C# (.NET WinForms) ជាមួយបទពិសោធន៍ជាក់ស្តែងក្នុងការរចនា Database (SQL Server, PostgreSQL) និង RESTful APIs។ ត្រៀមខ្លួនជាស្រេចក្នុងការចូលរួមចំណែកបង្កើត Software ប្រកបដោយគុណភាពខ្ពស់។'
                : 'Dedicated Year 3 IT student specializing in Backend and Desktop Application Development. Strong practical foundation in Java (Spring Boot), C# (.NET WinForms), and relational databases (SQL Server, PostgreSQL). Passionate about building clean, well-architected software solutions and eager to contribute to innovative engineering teams.'}
            </p>
          </header>

          {/* Timeline Wrapper with Continuous Left Axis Line */}
          <div className={styles.timelineBody}>
            <div className={styles.verticalTrack} />

            {/* ===== EDUCATION ===== */}
            <div className={styles.timelineSection}>
              <div className={styles.sectionHeaderRow}>
                <div className={styles.sectionDot} />
                <h3 className={styles.sectionHeading}>{isKhmer ? 'ការអប់រំ និងបណ្តុះបណ្តាល' : 'EDUCATION'}</h3>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>
                      {isKhmer ? 'បរិញ្ញាបត្រ វិទ្យាសាស្ត្រព័ត៌មានវិទ្យា (IT) — ឆ្នាំទី ៣' : 'Bachelor of Science in Information Technology (Year 3)'}
                    </h4>
                    <span className={styles.entryDate}>2024 – Present</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'សាកលវិទ្យាល័យ បៀលប្រាយ (BBU) — រាជធានីភ្នំពេញ' : 'Build Bright University — Phnom Penh, Cambodia'}
                  </p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'ផ្តោតលើ Software Engineering, Database Systems, Object-Oriented Programming (OOP) និង Web Services។'
                        : 'Core coursework: Software Engineering, Database Management Systems, Object-Oriented Programming, and Web APIs.'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>
                      {isKhmer ? 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)' : 'High School Diploma (BacII)'}
                    </h4>
                    <span className={styles.entryDate}>2015 – 2018</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'វិទ្យាល័យ ព្រះមុនីវង្ស — ខេត្តបាត់ដំបង' : 'Preah Monivong High School — Battambang, Cambodia'}
                  </p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'បានបញ្ចប់ការប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិថ្នាក់ជាតិ (បាក់ឌុប) ផ្នែកវិទ្យាសាស្ត្រពិត។'
                        : 'Graduated with National High School Examination Certification (BacII) in Science.'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== FEATURED PROJECTS ===== */}
            <div className={styles.timelineSection}>
              <div className={styles.sectionHeaderRow}>
                <div className={styles.sectionDot} />
                <h3 className={styles.sectionHeading}>{isKhmer ? 'គម្រោងស្នាដៃសំខាន់ៗ' : 'FEATURED PROJECTS'}</h3>
              </div>

              {/* Project 1 */}
              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>Bus Station Management System</h4>
                    <span className={styles.techBadge}>C# WinForms | SQL Server</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'កម្មវិធី Desktop Application គ្រប់គ្រងស្ថានីយរថយន្តក្រុង' : 'Desktop Enterprise Software Solution'}
                  </p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer 
                        ? 'បង្កើតប្រព័ន្ធគ្រប់គ្រងការកក់សំបុត្រ រៀបចំកៅអីអ្នកដំណើរ និងកាលវិភាគចេញដំណើរប្រកបដោយប្រសិទ្ធភាព។'
                        : 'Engineered a comprehensive desktop management system handling seat bookings, bus schedules, and passenger check-ins.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'រចនា Database លើ SQL Server ដោយប្រើ Stored Procedures និង Database Transactions ដើម្បីធានាសុក្រឹតភាពទិន្នន័យ។'
                        : 'Designed normalized SQL Server database with transactional integrity, stored procedures, and concurrency control.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'បង្កើតផ្ទាំង Dashboard គណនាប្រាក់ចំណូល ស្ថិតិកក់ជាក់ស្តែង និងប្រព័ន្ធចេញវិក្កយបត្រ (Receipts)។'
                        : 'Built an interactive analytics dashboard tracking daily revenue, operational metrics, and automated receipt printing.'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project 2 */}
              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>Inventory Management System</h4>
                    <span className={styles.techBadge}>C# WinForms | SQL Server</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'កម្មវិធី Desktop Application គ្រប់គ្រងស្តុកទំនិញ' : 'Desktop Inventory & Stock Control System'}
                  </p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'គ្រប់គ្រងលំហូរទំនិញនាំចូល (Stock In) និងនាំចេញ (Stock Out) ព្រមទាំងតាមដានទិន្នន័យអ្នកផ្គត់ផ្គង់ (Vendors)។'
                        : 'Developed stock tracking software managing incoming/outgoing inventory levels, reorder points, and supplier logs.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'ប្រព័ន្ធជូនដំណឹងស្វ័យប្រវត្តិនៅពេលទំនិញជិតអស់ពីស្តុក (Low Stock Alert) និងកត់ត្រាប្រវត្តិប្រតិបត្តិការ។'
                        : 'Integrated automated low-stock threshold alerts, category management, and detailed transaction audit trails.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'បង្កើតមុខងារស្វែងរកកម្រិតខ្ពស់ (Filter & Search) និងរបាយការណ៍ស្តុកលម្អិតសម្រាប់ធ្វើសេចក្តីសម្រេចចិត្ត។'
                        : 'Implemented multi-criteria filtering, fast keyword searches, and comprehensive monthly inventory reports.'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project 3 */}
              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>Customer Management REST API</h4>
                    <span className={styles.techBadge}>Spring Boot | PostgreSQL</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'សេវាកម្ម Backend Web API' : 'Backend REST API Service'}
                  </p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'បង្កើត RESTful API តាមស្តង់ដារ Layered Architecture ដោយប្រើ DTO Pattern និង Spring Data JPA / Hibernate។'
                        : 'Architected robust RESTful API following Layered Architecture, Data Transfer Objects (DTOs), and Spring Data JPA.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'រៀបចំប្រព័ន្ធ Global Exception Handling និង Spring Validation សម្រាប់ការពារ និងឆ្លើយតបកំហុសបានច្បាស់លាស់។'
                        : 'Implemented Global Exception Handling with custom error responses and comprehensive request payload validation.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'គាំទ្រ Dynamic Pagination និង Multi-field Sorting ជួយបង្កើនល្បឿនក្នុងការទាញយកទិន្នន័យពី PostgreSQL។'
                        : 'Optimized PostgreSQL data retrieval with dynamic query pagination, multi-column sorting, and Swagger documentation.'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== WORK EXPERIENCE ===== */}
            <div className={styles.timelineSection}>
              <div className={styles.sectionHeaderRow}>
                <div className={styles.sectionDot} />
                <h3 className={styles.sectionHeading}>{isKhmer ? 'បទពិសោធន៍ការងារ' : 'WORK EXPERIENCE'}</h3>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>{isKhmer ? 'អ្នកបើកបរដឹកជញ្ជូនរហ័ស (Express Driver)' : 'Express Delivery Driver'}</h4>
                    <span className={styles.entryDate}>2023 – 2024</span>
                  </div>
                  <p className={styles.entrySub}>Nham 24 Express — Phnom Penh, Cambodia</p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'ផ្តល់សេវាកម្មដឹកជញ្ជូនរហ័សទាន់ពេលវេលាប្រកបដោយទំនួលខុសត្រូវខ្ពស់ និងការប្រាស្រ័យទាក់ទងល្អជាមួយអតិថិជន។'
                        : 'Maintained outstanding punctuality and customer satisfaction delivering time-critical orders across Phnom Penh.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'គ្រប់គ្រងផែនទី និងផ្លូវធ្វើដំណើរប្រកបដោយប្រសិទ្ធភាពខ្ពស់ ព្រមទាំងសម្របសម្រួលតាមប្រព័ន្ធឌីជីថល (Mobile App)។'
                        : 'Utilized mobile navigation tools to optimize routes, resolve address discrepancies, and manage delivery status.'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>{isKhmer ? 'បុគ្គលិកដឹកជញ្ជូនកញ្ចប់ទំនិញ (Courier)' : 'Delivery Courier'}</h4>
                    <span className={styles.entryDate}>2020 – 2023</span>
                  </div>
                  <p className={styles.entrySub}>J&T Express — Phnom Penh, Cambodia</p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'គ្រប់គ្រងការបែងចែកកញ្ចប់ទំនិញប្រចាំថ្ងៃ និងចែកចាយតាមតំបន់ទទួលខុសត្រូវដោយគ្មានការបាត់បង់ ឬខូចខាត។'
                        : 'Managed daily parcel sorting, route distribution, and safe door-to-door delivery across assigned districts.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'ទូទាត់ប្រាក់ និងបញ្ជីទំនិញ COD (Cash on Delivery) ប្រកបដោយភាពត្រឹមត្រូវ ១០០% ជាមួយផ្នែកគណនេយ្យ។'
                        : 'Processed cash-on-delivery (COD) collections with 100% financial accuracy and strict audit compliance.'}
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>{isKhmer ? 'បុគ្គលិកទទួលភ្ញៀវសណ្ឋាគារ (Receptionist)' : 'Front Desk Receptionist'}</h4>
                    <span className={styles.entryDate}>2019 – 2020</span>
                  </div>
                  <p className={styles.entrySub}>Jasmine Hotel — Phnom Penh, Cambodia</p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'ទទួលស្វាគមន៍ភ្ញៀវជាតិ និងអន្តរជាតិ រៀបចំការចុះឈ្មោះ Check-in/Check-out និងដោះស្រាយសំណូមពរភ្ញៀវ។'
                        : 'Welcomed local and international guests, executed seamless check-ins/check-outs, and resolved guest requests.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'គ្រប់គ្រងកាលវិភាគបន្ទប់ និងសហការជាមួយផ្នែកពាក់ព័ន្ធដើម្បីធានាសេវាកម្មប្រកបដោយស្តង់ដារ។'
                        : 'Maintained room reservation schedules and collaborated with housekeeping and operations teams.'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
});

export default CVTemplate;
