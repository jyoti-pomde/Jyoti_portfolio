export const personalInfo = {
  name: "Jyoti Pomde",
  roles: [
    "Software Engineer"
  ],
  location: "Bengaluru, India",
  email: "jyotipomde2002@gmail.com",
  linkedin: "https://linkedin.com/in/jyotipomde",
  github: "https://github.com/jyoti-pomde",
  leetcode: "https://leetcode.com/u/Jyoti_Pomde/",
  resumeUrl: "/Jyoti_Pomde_Resume.pdf",
  bio: "Software Engineer experienced in building scalable applications, designing RESTful APIs, and solving complex technical challenges. Currently working as a Software Engineer at Almatar Software Solutions.",
  stats: [
    { label: "Current Role", value: "Software Engineer" },
    { label: "Company", value: "Almatar" },
    { label: "MCA CGPA", value: "8.5 / 10" },
    { label: "Location", value: "Bengaluru, India" }
  ]
};

export const experiences = [
  {
    company: "Almatar Software Solutions Pvt. Ltd.",
    role: "Software Engineer",
    period: "2026 – Present",
    location: "Bengaluru, India",
    bullets: [
      "Analyze REST APIs, application logs, OpenSearch, and database records to investigate application and integration issues.",
      "Reproduce issues, perform initial root-cause analysis, and collaborate with developers to validate fixes.",
      "Work with frontend and backend components and support reliable application functionality across environments."
    ],
    technologies: ["REST APIs", "OpenSearch", "MySQL", "Application Logs", "Debugging", "Full-Stack Components"]
  },
  {
    company: "Dextris Infoservices Pvt. Ltd.",
    role: "Java Full-Stack Developer",
    period: "Oct 2025 – Mar 2026",
    location: "Bengaluru, India",
    bullets: [
      "Developed web applications using Java, Spring Boot, REST APIs, and MySQL.",
      "Implemented backend business logic, REST services, and database integration.",
      "Worked on frontend-backend integration, debugging, and API testing.",
      "Followed Agile and SDLC practices while developing and troubleshooting application features."
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "Postman", "Agile/Scrum", "SDLC"]
  }
];

export const skillsData = {
  backend: [
    { name: "Java", level: "Advanced" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "Node.js", level: "Proficient" },
    { name: "Express.js", level: "Proficient" },
    { name: "REST APIs", level: "Advanced" },
    { name: "Python", level: "Proficient" }
  ],
  frontend: [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "HTML5 & CSS3", level: "Advanced" },
    { name: "Tailwind CSS", level: "Proficient" },
    { name: "Responsive UI", level: "Advanced" }
  ],
  database: [
    { name: "MySQL", level: "Advanced" },
    { name: "MongoDB", level: "Proficient" },
    { name: "SQL", level: "Advanced" },
    { name: "SQLite", level: "Proficient" }
  ],
  tools: [
    { name: "Git & GitHub", level: "Advanced" },
    { name: "Postman", level: "Advanced" },
    { name: "Docker", level: "Familiar" },
    { name: "OpenSearch", level: "Proficient" },
    { name: "Maven", level: "Advanced" },
    { name: "VS Code & Eclipse", level: "Advanced" }
  ]
};

export const projects = [
  {
    id: "bistro-buddy",
    title: "Bistro Buddy - Food Ordering System",
    category: "Full Stack",
    description: "Restaurant ordering web application built using Spring Boot, React.js, and MySQL. Implemented REST APIs for menu browsing, table booking, and order workflows with role-based access for users and admins.",
    technologies: ["React.js", "Spring Boot", "MySQL", "REST APIs", "JWT"],
    githubUrl: "https://github.com/jyoti-pomde/Bistro_buddy-Food-ordering-application",
    featured: true
  },
  {
    id: "event-seat-booking",
    title: "Event Seating & Reservation Engine",
    category: "Full Stack",
    description: "High-concurrency event reservation system featuring an interactive SVG seating floor plan, atomic 10-minute hold lock engine, QR ticket issuance, and venue occupancy analytics.",
    technologies: ["Python (FastAPI)", "React 19", "SQLAlchemy", "SQLite", "QR Codes"],
    githubUrl: "https://github.com/jyoti-pomde/event-seat-booking-engine",
    featured: true
  },
  {
    id: "travel-planner",
    title: "Smart Travel Itinerary Planner",
    category: "Full Stack",
    description: "Comprehensive itinerary organizer with daily timelines, interactive map integration, JWT security, and client-side JSON/PDF report export capabilities.",
    technologies: ["Java", "Spring Boot 3", "React", "H2 Database", "Leaflet"],
    githubUrl: "https://github.com/jyoti-pomde/travel-itinerary-planner",
    featured: true
  },
  {
    id: "resume-builder",
    title: "Full-Stack Resume Builder",
    category: "Full Stack",
    description: "Web application for creating and customizing resumes with secure JWT authentication, modular profile forms, and persistent backend database integration.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
    githubUrl: "https://github.com/jyoti-pomde/Resume_Builder",
    featured: false
  },
  {
    id: "expense-tracker",
    title: "Personal Expense Tracker",
    category: "Frontend",
    description: "Financial management dashboard with browser-based transaction tracking, category budgets, visual analytics via Chart.js, theme switching, and PDF report exports.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"],
    githubUrl: "https://github.com/jyoti-pomde/Expense_Tracker",
    featured: false
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "BKIT College, Bhalki | VTU Belagavi",
    location: "Karnataka, India",
    period: "2023 – 2025",
    grade: "CGPA: 8.5",
    description: "Advanced studies in software engineering, distributed systems, algorithms, and enterprise application development."
  },
  {
    degree: "Bachelor of Science in Computer Science (B.Sc Computer Science)",
    institution: "Degree in Computer Science",
    location: "Karnataka, India",
    period: "Undergraduate Program",
    grade: "Graduated with Distinction",
    description: "Core foundation in computer science, data structures, object-oriented programming, and relational database systems."
  }
];

export const certifications = [
  {
    title: "Build with AI Bootcamp",
    issuer: "Google Developers + H2S",
    year: "2026",
    id: "2026H2S09BWAIBLR-P00131",
    certificateUrl: "/certificates/build_with_ai_bootcamp.png"
  },
  {
    title: "Google Cloud Generative AI Studio",
    issuer: "Google Cloud",
    year: "2026",
    certificateUrl: null
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    year: "2025",
    id: "cvYzW8mry5qG5zGFM",
    certificateUrl: "/certificates/deloitte_data_analytics.png"
  }
];
