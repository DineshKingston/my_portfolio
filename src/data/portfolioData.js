export const portfolioData = {
  personal: {
    name: "Dinesh Kingston S",
    firstName: "Dinesh",
    title: "Student | Aspiring Full-Stack Developer",
    roles: ["Full Stack Developer", "Backend Engineer", "AI Enthusiast", "Cloud & DevOps Learner"],
    email: "dineshkingston94@gmail.com",
    location: "Tirunelveli, Tamil Nadu",
    bio: "Computer Science student and aspiring Full-Stack Developer with strong expertise in backend development using FastAPI and Spring Boot. Experienced in building secure REST APIs with MySQL, JWT authentication, and cloud deployment using AWS, Docker, and CI/CD pipelines. Developed scalable systems including a CSAT Analytics Platform and Velozity Multi-Tenant API. Interested in backend architecture, cloud-native applications, and DevOps practices.",
    shortBio: "Building scalable backend architectures and intelligent systems.",
    availability: "Open to Opportunities",
    stats: [
      { label: "Projects", value: "5+" },
      { label: "Technologies", value: "15+" },
      { label: "CGPA", value: "8.5+" },
      { label: "Experience", value: "Interned"},
    ],
    interests: ["Backend System Design", "Cloud Computing & Deployment", "DevOps & Automation", "AI & Machine Learning", "Learning New Technologies"]
  },

  social: {
    linkedin: "https://www.linkedin.com/in/dinesh-kingston-s-628031259",
    github: "https://www.github.com/DineshKingston",
    email: "mailto:dineshkingston94@gmail.com",
    instagram: "https://www.instagram.com/_b_lank_heart_dinesh_21/",
  },

  skills: {
    frontend: [
      { name: "ReactJS", level: 85 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
    ],
    backend: [
      { name: "Spring Boot", level: 80 },
      { name: "FastAPI", level: 85 },
      { name: "Django", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "RESTful API Design", level: 90 },
      { name: "JWT Authentication", level: 85 },
    ],
    database: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 78 },
    ],
    cloudDevops: [
      { name: "AWS (EC2, ECR, Lambda)", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Nginx", level: 65 },
      { name: "GitHub CI/CD", level: 70 },
      { name: "Postman", level: 90 },
    ],
    languages: ["Java", "Python", "SQL", "C"],
    tools: ["IntelliJ IDEA", "Eclipse", "Git/GitHub", "Postman", "Visual Studio Code"]
  },

  experience: [
    {
      id: 1,
      company: "IPCS Global",
      role: "Backend Developer Intern",
      type: "Internship",
      duration: "2024",
      location: "Tamil Nadu, India",
      description: "Developed a Django-based web application for managing bike rentals and ride bookings with user authentication and real-time ride tracking during my internship at IPCS Global.",
      responsibilities: [
        "Built bike rental management system using Django",
        "Implemented secure user authentication and profile management",
        "Integreated real-time ride tracking functionality",
        "Collaborated on backend architecture for rental workflows"
      ],
      technologies: ["Django", "Python", "MySQL", "JavaScript"],
      color: "cyan"
    },
    {
      id: 2,
      company: "Skill Rank Company",
      role: "Full Stack trainee",
      type: "Training",
      duration: "2024",
      location: "Remote",
      description: "Finished training where I built a Multi-Document AI Assistant with React, MongoDB, Spring Boot, and Gemini API.",
      responsibilities: [
        "Built Multi-Document AI Assistant",
        "Implemented session management and chat history restoration",
        "Integrated Gemini API for natural language processing",
        "Developed keyword search highlighting"
      ],
      technologies: ["React", "MongoDB", "Spring Boot", "Gemini API"],
      color: "purple"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Client Pulse – CSAT Analytics System",
      description: "Production-ready backend API to collect and manage customer feedback. Features admin analytics dashboard, reporting APIs, and AWS integration.",
      technologies: ["FastAPI", "MySQL", "JWT", "AWS S3", "Docker", "AWS ECR", "AWS EC2", "Nginx", "CI/CD"],
      features: [
        "Secure JWT authentication",
        "Admin analytics dashboard",
        "AWS S3 integration for screenshot storage",
        "CSV/Excel report exports",
        "Containerized with Docker & deployed on AWS"
      ],
      github: "https://www.github.com/DineshKingston",
      demo: "#",
      status: "Production Ready",
      category: "Backend/Cloud",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Multi-Document AI Assistant",
      description: "Comprehensive document processing system for analysis and Q&A using Gemini AI and Spring Boot.",
      technologies: ["React", "Spring Boot", "MongoDB", "Gemini API", "Java"],
      features: [
        "Multi-file upload (PDF/DOCX/TXT)",
        "Keyword search highlighting",
        "AI-powered Q&A",
        "Session management & chat history restoration"
      ],
      github: "https://www.github.com/DineshKingston",
      demo: "#",
      status: "Completed",
      category: "AI/ML",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      id: 3,
      title: "Velozity: Production-Grade Multi-Tenant API",
      description: "High-performance REST API built for modern B2B SaaS platforms with strict tenant isolation, cryptographic audit trails, and intelligent rate limiting.",
      technologies: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "Redis", "BullMQ"],
      features: [
        "Absolute Tenant Isolation (Fail-Closed)",
        "Intelligent Rate Limiting (Sliding Window)",
        "Tamper-Evident Audit Trail (SHA-256)",
        "Resilient Email Engine (BullMQ)"
      ],
      github: "https://github.com/DineshKingston/VeloZity_Saas.git",
      demo: "#",
      status: "Completed",
      category: "Backend/SaaS",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      title: "Object Detection — Raspberry Pi",
      description: "Real-time object detection system using Raspberry Pi and OpenCV to identify humans and objects.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "YOLO", "TensorFlow"],
      features: [
        "Real-time object detection",
        "YOLO/TensorFlow integration",
        "Optimized for low-power environments"
      ],
      github: "https://www.github.com/DineshKingston",
      demo: "#",
      status: "Completed",
      category: "IoT",
      gradient: "from-emerald-500 to-teal-600"
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Computer Science and Business Systems",
      college: "Francis Xavier Engineering College",
      location: "Tirunelveli, Tamil Nadu",
      duration: "2022 - 2026",
      status: "Pursuing",
      icon: "🎓"
    }
  ],

  certifications: [
    {
      title: "MERN Stack - 30 Days Training",
      issuer: "Skill Rank Company",
      year: "2024",
      icon: "💻"
    },
    {
      title: "AI & Full Stack Development",
      issuer: "Pantech Prolabs India",
      year: "2024",
      icon: "🤖"
    }
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Tamil", level: "Native" }
  ]
};
