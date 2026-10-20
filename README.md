# 💼 Jyoti Pomde — Personal Developer Portfolio

A modern, responsive personal developer portfolio built with **React 19**, **Vite**, and customized glassmorphic design system. Features verified work experience, technical skill matrices, full-stack projects, and an interactive in-browser PDF resume viewer.

---

## 🌟 Key Sections

- **Hero:** Role typewriter cycling through target specializations (*Software Engineer*, *Java Developer*, *Full Stack Developer*, *React Developer*) with quick CTAs.
- **About:** Engineering philosophy, problem-solving approach, and core capabilities.
- **Experience:** Interactive timeline detailing verified software engineering roles at **Almatar Software Solutions** and **Dextris Infoservices**.
- **Projects:** Filterable showcase of verified applications with direct GitHub links.
- **Skills:** Categorized skills covering Backend, Frontend, Databases, and DevOps/Tools.
- **Education & Certifications:** Master of Computer Applications (MCA), B.Sc Computer Science, and Google/Deloitte credentials.
- **Contact:** Interactive communication form with direct email copy action and professional networking links.
- **Resume Viewer:** Built-in PDF preview modal and instant download button.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Icons:** Lucide React & Custom SVG Icons
- **Animation & Effects:** Canvas Confetti & Pure CSS Keyframes
- **Styling:** Custom CSS Design System (Tailwind & Glassmorphic Principles)

---

## 🚀 Local Development

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run Development Server
```powershell
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```powershell
npm run build
```

### 4. Code Quality
```powershell
npm run lint
```

---

## 🔄 How to Update Your Portfolio

- **Updating Experience / Skills / Projects:**  
  Edit [`src/data/portfolioData.js`](src/data/portfolioData.js). All site content is centralized in this file.
- **Updating Your Resume:**  
  Replace `public/Jyoti_Pomde_Resume.pdf` with your updated PDF. The preview modal and download buttons will automatically reflect the new file.
- **Updating Your Profile Photo:**  
  Place your photo inside `src/assets/profile.jpg` and reference it in `src/components/Hero.jsx` or `src/components/About.jsx`.

---

## 👤 Author
**Jyoti Pomde**  
- **LinkedIn:** [linkedin.com/in/jyotipomde](https://linkedin.com/in/jyotipomde)
- **GitHub:** [github.com/jyoti-pomde](https://github.com/jyoti-pomde)
- **Email:** jyotipomde2002@gmail.com
