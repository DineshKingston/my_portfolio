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
      { label: "Projects", value: "6+" },
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
    instagram: "https://www.instagram.com/its_me_dinesh3_/",
  },

  skills: {
    frontend: [
      { name: "Flutter / Dart", level: 92 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript (ES6+)", level: 82 },
      { name: "ReactJS", level: 85 },
    ],
    backend: [
      { name: "Spring Boot", level: 85 },
      { name: "Fast API", level: 85 },
      { name: "Django", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "RESTful API Design", level: 90 },
      { name: "JWT Authentication", level: 85 },
      { name: "Flask", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Redis", level: 70 },
    ],
    database: [
      { name: "PostgreSQL + pgvector", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
    ],
    cloudDevops: [
      { name: "AWS EC2", level: 80 },
      { name: "k6 Performance Testing", level: 90 },
      { name: "Prometheus & Grafana", level: 85 },
      { name: "Docker", level: 85 },
      { name: "GitHub CI/CD", level: 85 },
      { name: "Nginx", level: 75 },
      { name: "AWS ECR", level: 75 },
      { name: "AWS Lambda", level: 75 },
    ],
    languages: ["Dart", "Java", "Python", "SQL", "C"],
    tools: ["IntelliJ IDEA", "Android Studio", "VS Code", "Git/GitHub", "Postman", "Nova API Studio", "k6 Engine"]

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
      title: "LifeOS — AI-Powered Personal Operating System",
      description: "Enterprise-grade personal operating system featuring streaming AI assistance, RAG document knowledge vault, goal feasibility tracking, k6 load testing certification, and automated task rescheduling.",
      technologies: ["Flutter", "Spring Boot 3.3", "PostgreSQL", "pgvector", "AWS EC2", "Docker", "Prometheus", "Grafana", "k6 Testing", "OpenRouter AI"],
      features: [
        "SSE Streaming AI Chat Engine (DeepSeek V4)",
        "RAG Knowledge Vault (pgvector HNSW indexes)",
        "k6 Load Certified (339.81 RPS @ 0% Error)"
      ],
      github: "https://github.com/DineshKingston/LifeOS-Showcase",
      demo: "https://github.com/DineshKingston/LifeOS-Showcase/raw/main/releases/app-arm64-v8a-release.apk",
      status: "Production Certified",
      category: "Full-Stack AI",
      gradient: "from-indigo-600 to-cyan-500"
    },
    {
      id: 2,
      title: "Nova API Studio — Desktop API Client (Postman Alternative)",
      description: "Lightweight, privacy-first Windows desktop API testing platform supporting HTTP/REST, WebSocket, GraphQL, and gRPC testing with local SQLite vault, vm2 scripting sandbox, and embedded mock server.",
      technologies: ["Electron", "React 18", "TypeScript", "SQLite", "Monaco Editor", "Tailwind CSS", "Axios", "Zustand", "vm2 Sandbox"],
      features: [
        "Multi-Protocol Execution (HTTP, WS, GraphQL & gRPC)",
        "Local Encrypted Vault (SQLite & Windows Credential Manager)",
        "Embedded Mock Server Engine & vm2 Scripting Sandbox",
        "Collection Runner with multi-format report exports"
      ],
      github: "https://github.com/DineshKingston/nova-api-studio",
      demo: "https://github.com/DineshKingston/nova-api-studio",
      status: "v1.0.0 Released",
      category: "Desktop App",
      gradient: "from-cyan-600 to-emerald-500"
    },

    {
      id: 3,
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
      github: "https://www.github.com/DineshKingston/CSAT-forms.git",
      demo: "#",
      status: "Production Ready",
      category: "Backend/Cloud",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
