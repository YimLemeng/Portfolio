<div align="center">

# 🚀 Yim Lemeng — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Nginx](https://img.shields.io/badge/Nginx-Production-009639?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  A modern, high-performance, and fully responsive Developer Portfolio website built for <strong>Yim Lemeng</strong>, a Software Developer specializing in <strong>Java / Spring Boot</strong>, <strong>C# Windows Forms</strong>, <strong>RESTful APIs</strong>, and <strong>Relational Databases</strong>.
</p>

</div>

---

## 🌟 Key Features

- 🌐 **Bilingual Support (EN / KH)**: Full dynamic language switcher supporting both **English** and **Khmer (ភាសាខ្មែរ)** with typography optimization (`Kantumruy Pro`).
- 🌓 **Dark & Light Mode**: Theme switcher with smooth micro-animations and CSS variable persistence.
- 📄 **Automated PDF CV Generator**: Instant client-side generation and download of professional single-page A4 PDF resumes in English or Khmer.
- 🐳 **Docker & Docker Compose**: Production-ready multi-stage Docker build utilizing lightweight Nginx Alpine container for high-speed delivery.
- 📱 **Fully Responsive**: Optimized UI/UX across all device form factors (Mobile, Tablet, Desktop).
- 🎨 **Modern Glassmorphism & Animations**: Fluid page transitions powered by **Framer Motion** and modern glowing glassmorphism effects.
- 💼 **Project Showcase**: Showcasing enterprise backend architectures, database models, and desktop applications with live demo & GitHub repository links.

---

## 🛠️ Tech Stack

### Frontend & UI
- **Framework**: [React.js](https://react.dev/) (Functional Components & Hooks)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: CSS Modules, CSS Custom Variables, Responsive Grid & Flexbox
- **Fonts**: Plus Jakarta Sans, Inter, Kantumruy Pro (Google Fonts)
- **PDF Generation**: [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/)

### DevOps & Deployment
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx Alpine (with SPA routing configuration)

---

## 📂 Project Structure

```bash
Portfolio/
├── public/                # Static assets (favicons, icons)
├── src/
│   ├── assets/            # Project screenshots & profile images
│   ├── components/        # Reusable UI components
│   │   ├── CVTemplate/    # A4 Resume template for PDF generation
│   │   ├── Footer/        # Footer component
│   │   ├── Icons/         # Custom SVG brand icons
│   │   ├── LanguageToggle/# Bilingual EN/KH switch toggle
│   │   ├── Navbar/        # Navigation header with scroll spy
│   │   ├── ProjectCard/   # Project card with tags and action links
│   │   ├── SectionHeader/ # Standardized section title header
│   │   ├── SkillBadge/    # Interactive skill badges
│   │   └── ThemeToggle/   # Light/Dark mode toggle button
│   ├── context/           # React Context (LanguageContext)
│   ├── hooks/             # Custom hooks (useTheme, useLocalStorage)
│   ├── layouts/           # Main application layouts
│   ├── pages/             # Page sections (Hero, About, Skills, Projects, Experience, Contact)
│   ├── routes/            # React Router configuration
│   ├── services/          # API & Form services
│   ├── styles/            # Global styling, themes & CSS variables
│   ├── translations/      # English & Khmer translation dictionary
│   ├── App.jsx            # Application root
│   └── main.jsx           # Vite entry point
├── Dockerfile             # Multi-stage Docker build configuration
├── docker-compose.yml     # Docker Compose orchestration configuration
├── nginx.conf             # Custom Nginx SPA configuration
├── package.json           # Project dependencies & scripts
└── vite.config.js         # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (Optional, for containerized run)

### 1. Clone the Repository
```bash
git clone https://github.com/YimLemeng/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## 🐳 Run with Docker & Docker Compose

Deploy the production build inside a lightweight Docker container with a single command:

```bash
# Build and run container in background
docker compose up -d --build
```

Access the application at: **`http://localhost:8080`**

To stop the container:
```bash
docker compose down
```

---

## 👤 Author

**Yim Lemeng**
- **Role**: Software Developer / Backend Developer
- **Email**: [yimlemeng.ym@gmail.com](mailto:yimlemeng.ym@gmail.com)
- **Phone**: [+855 (69) 232-123](tel:+85569232123)
- **GitHub**: [@YimLemeng](https://github.com/YimLemeng)
- **Location**: Phnom Penh, Cambodia

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
