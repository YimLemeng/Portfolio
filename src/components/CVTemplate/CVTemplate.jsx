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
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '100%' }} />
              </div>
            </div>
            <div className={styles.langItem}>
              <div className={styles.langHeader}>
                <span>{isKhmer ? 'ភាសាអង់គ្លេស' : 'English (Working)'}</span>
              </div>
              <div className={styles.barTrack}>
                <div className={styles.barFill} style={{ width: '75%' }} />
              </div>
            </div>
          </div>

          {/* Technical Skills Section */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ជំនាញបច្ចេកទេស' : 'TECHNICAL SKILLS'}</h3>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Backend</h4>
              <p className={styles.skillDesc}>Java, Spring Boot, REST APIs</p>
            </div>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Desktop</h4>
              <p className={styles.skillDesc}>C# Windows Forms, ADO.NET</p>
            </div>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Database</h4>
              <p className={styles.skillDesc}>SQL Server, PostgreSQL, MySQL</p>
            </div>
            <div className={styles.skillGroup}>
              <h4 className={styles.skillLabel}>Tools & IDEs</h4>
              <p className={styles.skillDesc}>Git, GitHub, Docker, IntelliJ, VS Code</p>
            </div>
          </div>

          {/* Soft Skills & Interests */}
          <div className={styles.sideSection}>
            <h3 className={styles.sideTitle}>{isKhmer ? 'ចំណុចខ្លាំង' : 'KEY STRENGTHS'}</h3>
            <ul className={styles.sideBullets}>
              <li>Clean Code & MVC</li>
              <li>Problem Solving & Logic</li>
              <li>Team Collaboration</li>
              <li>Continuous Learning</li>
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
                ? 'និស្សិតឆ្នាំទី ៣ ផ្នែក IT ដែលមានចំណង់ចំណូលចិត្តខ្លាំងលើ Backend និង Desktop Development។ មានបទពិសោធន៍ក្នុងការកសាងប្រព័ន្ធដោយប្រើ Java (Spring Boot), C# WinForms និង Database (SQL Server, PostgreSQL)។'
                : 'Dedicated Year 3 IT student specializing in Backend and Desktop Development. Strong practical foundation in Java (Spring Boot), C# (.NET WinForms), and relational databases (SQL Server, PostgreSQL), passionate about engineering clean and efficient solutions.'}
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
                      {isKhmer ? 'បរិញ្ញាបត្រ វិទ្យាសាស្ត្រព័ត៌មានវិទ្យា (IT) - ឆ្នាំទី ៣' : 'Bachelor of Science in Information Technology (Year 3)'}
                    </h4>
                    <span className={styles.entryDate}>2024 – Present</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'សាកលវិទ្យាល័យ បៀលប្រាយ (BBU) — រាជធានីភ្នំពេញ' : 'Build Bright University — Phnom Penh, Cambodia'}
                  </p>
                </div>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>
                      {isKhmer ? 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)' : 'High School Diploma'}
                    </h4>
                    <span className={styles.entryDate}>2015 – 2018</span>
                  </div>
                  <p className={styles.entrySub}>
                    {isKhmer ? 'វិទ្យាល័យ ព្រះមុនីវង្ស — ខេត្តបាត់ដំបង' : 'Preah Monivong High School — Battambang, Cambodia'}
                  </p>
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
                  <p className={styles.entrySub}>Desktop Application</p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer 
                        ? 'កម្មវិធី Desktop សម្រាប់កក់សំបុត្រ រៀបចំកាលវិភាគឡានក្រុង និងគ្រប់គ្រងអ្នកដំណើរ។'
                        : 'Full desktop software managing ticket bookings, bus schedules, and passenger records.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'មាន Dashboard គណនាប្រាក់ចំណូល ប្រវត្តិកក់សំបុត្រ និងស្ថិតិស្ថានីយជាក់ស្តែង។'
                        : 'Interactive station analytics dashboard tracking revenue and real-time bookings.'}
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
                  <p className={styles.entrySub}>Desktop Application</p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'កម្មវិធីគ្រប់គ្រងស្តុកទំនិញ តាមដានការនាំចូល (Stock In) និងនាំចេញ (Stock Out)។'
                        : 'Inventory tracking desktop software managing stock levels, low-stock alerts, and orders.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'ចាត់តាំងទំនិញតាមប្រភេទ និងបង្កើតរបាយការណ៍លក់ និងស្តុកលម្អិត។'
                        : 'Categorized catalog system with automated reporting and database transactions.'}
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
                  <p className={styles.entrySub}>Backend Web Service</p>
                  <ul className={styles.bulletList}>
                    <li>
                      {isKhmer
                        ? 'សេវាកម្ម Backend API សម្រាប់គ្រប់គ្រងទិន្នន័យអតិថិជនជាមួយ MVC Architecture និង DTOs។'
                        : 'Robust RESTful backend service with MVC architecture, DTO mapping, and Spring Validation.'}
                    </li>
                    <li>
                      {isKhmer
                        ? 'ប្រព័ន្ធ Global Exception Handling និងការរៀបចំ Pagination & Sorting មានប្រសិទ្ធភាព។'
                        : 'Global Exception Handling with custom error responses and optimized query pagination.'}
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
                    <h4 className={styles.entryRole}>{isKhmer ? 'អ្នកបើកបរដឹកជញ្ជូន (Driver)' : 'Express Delivery Driver'}</h4>
                    <span className={styles.entryDate}>2023 – 2024</span>
                  </div>
                  <p className={styles.entrySub}>Nham 24 Express — Phnom Penh</p>
                </div>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>{isKhmer ? 'បុគ្គលិកដឹកជញ្ជូន (Delivery Courier)' : 'Delivery Courier'}</h4>
                    <span className={styles.entryDate}>2020 – 2023</span>
                  </div>
                  <p className={styles.entrySub}>J&T Express — Phnom Penh</p>
                </div>
              </div>

              <div className={styles.entryBlock}>
                <div className={styles.entryDot} />
                <div className={styles.entryContent}>
                  <div className={styles.entryTopRow}>
                    <h4 className={styles.entryRole}>{isKhmer ? 'បុគ្គលិកទទួលភ្ញៀវ (Front Desk Receptionist)' : 'Front Desk Receptionist'}</h4>
                    <span className={styles.entryDate}>2019 – 2020</span>
                  </div>
                  <p className={styles.entrySub}>Jasmine Hotel — Phnom Penh</p>
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
