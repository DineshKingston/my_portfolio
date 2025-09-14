export const portfolioData = {
  personal: {
    name: "Dinesh Kingston S",
    title: "Full Stack Developer & AI Enthusiast", 
    email: "dineshkingston94@gmail.com",
    location: "Tirunelveli, Tamil Nadu",
    bio: "A dedicated Computer Science student with hands-on experience in full-stack development and AI integration. Passionate about technology and eager to explore Machine Learning and Java Development."
  },
  
  social: {
    linkedin: "https://www.linkedin.com/in/dinesh-kingston-s-628031259/",
    github: "https://github.com/DineshKingston", 
    instagram: "https://www.instagram.com/_b_lank.heart_dinesh_21/",
    facebook: "https://www.facebook.com/dinesh.221204/",
    discord: "https://discord.com/channels/dinesh_86507"
  },
  
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    backend: ["Java", "Spring Boot", "Node.js", "Python"],
    database: ["MySQL", "MongoDB"],
    languages: ["C", "Java", "Python"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker"]
  },
  
  projects: [
    {
      id: 1,
      title: "Document Read AI Agent",
      description: "An advanced AI-powered document processing application built with React frontend and Spring Boot backend. Features intelligent document analysis, search functionality, and multi-format file support (PDF, DOCX, TXT) using Google's Gemini AI API for natural language processing and document understanding.",
      technologies: ["React.js", "Spring Boot", "MongoDB", "Gemini AI API", "Java", "JavaScript", "REST API"],
      features: [
        "Multi-file document upload (PDF, DOCX, TXT)",
        "AI-powered document analysis and summarization",
        "Advanced search with highlighting functionality", 
        "Session management and document history",
        "Natural language query processing",
        "Real-time document processing status"
      ],
      github: "https://github.com/DineshKingston/document-ai-agent",
      demo: "#",
      status: "Completed",
      category: "AI/ML"
    },
    {
      id: 2, 
      title: "ML Multiple Disease Prediction",
      description: "A comprehensive machine learning project that predicts multiple diseases based on symptoms and medical parameters using various ML algorithms including Random Forest, SVM, and Neural Networks.",
      technologies: ["Python", "Machine Learning", "Scikit-learn", "Flask", "Pandas", "NumPy", "Matplotlib"],
      features: [
        "Multi-disease prediction system",
        "Symptom-based diagnosis",
        "Machine learning model comparison",
        "Interactive web interface",
        "Data visualization and analytics"
      ],
      github: "https://github.com/DineshKingston/disease-prediction-ml",
      demo: "#",
      status: "Completed",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Object Detection Using Raspberry Pi", 
      description: "Real-time object detection system using Raspberry Pi and OpenCV to identify humans, bottles, and specific objects with YOLO/TensorFlow integration for efficient recognition in low-power environments.",
      technologies: ["Python", "OpenCV", "Raspberry Pi", "YOLO", "TensorFlow", "Computer Vision"],
      features: [
        "Real-time object detection",
        "Multi-object recognition (humans, bottles, etc.)",
        "Low-power optimization for Raspberry Pi",
        "Pre-trained model integration",
        "Live camera feed processing"
      ],
      github: "https://github.com/DineshKingston/raspberry-pi-object-detection",
      demo: "#",
      status: "Completed",
      category: "IoT"
    },
    {
      id: 4,
      title: "Online Fees Payment System",
      description: "A secure online fee payment system with comprehensive admin and student portals. Features JWT authentication, Razorpay integration, and MySQL database for managing college fee structures and payment processing.",
      technologies: ["React.js", "Spring Boot", "MySQL", "Razorpay API", "JWT", "HTML/CSS"],
      features: [
        "Admin dashboard for fee management",
        "Student portal for payments",
        "Secure payment gateway integration",
        "JWT-based authentication",
        "Payment history and receipts",
        "Responsive design"
      ],
      github: "https://github.com/DineshKingston/online-fees-payment",
      demo: "#",
      status: "Completed",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Voice Recognition System",
      description: "A web-based voice recognition system using HTML, CSS, and JavaScript to capture and process voice commands with real-time speech-to-text functionality and interactive UI elements.",
      technologies: ["HTML", "CSS", "JavaScript", "Web Speech API", "Voice Recognition"],
      features: [
        "Real-time speech-to-text conversion",
        "Voice command processing",
        "Interactive UI with visual feedback",
        "Cross-browser compatibility",
        "Responsive design"
      ],
      github: "https://github.com/DineshKingston/voice-recognition-system",
      demo: "#",
      status: "Completed",
      category: "Web Development"
    }
  ],
  
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science and Business System", 
    college: "Francis Xavier Engineering College",
    duration: "2022 - 2026",
    grade: "Pursuing"
  }
};
