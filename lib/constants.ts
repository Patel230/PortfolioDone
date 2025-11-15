export const SECTIONS = {
  HERO: 0,
  ABOUT: 1,
  PROJECTS: 2,
  CONTACT: 3,
};

export const CAMERA_POSITIONS = [
  { x: 0, y: 0, z: 5 },      // Hero
  { x: -3, y: 2, z: 3 },     // About
  { x: 3, y: 1, z: 4 },      // Projects
  { x: 0, y: -1, z: 6 },     // Contact
];

export const CONTENT = {
  hero: {
    title: "Lakshman Patel",
    subtitle: "Software Developer | Python Backend Specialist",
    description: "Scroll down to explore my work",
  },
  about: {
    title: "About Me",
    description: "Experienced software developer with 3+ years specializing in Python backend development, cloud infrastructure, and building scalable solutions. Previously developed smart autonomous agricultural systems at Monarch Tractor. M.Tech in Information Security from ABV-IIITM Gwalior.",
    skills: [
      "Python, Flask, Django & FastAPI",
      "RESTful API & GraphQL",
      "Data Structures & Algorithms",
      "System Design (LLD & HLD)",
      "Microservices Architecture",
      "PostgreSQL, MySQL & MongoDB",
      "Redis & Caching Strategies",
      "SQLAlchemy & Django ORM",
      "AWS (EC2, Lambda, S3, RDS, SQS)",
      "Docker & Kubernetes",
      "CI/CD & DevOps Automation",
      "Message Queues (RabbitMQ, Kafka)",
      "Celery & Async Task Processing",
      "WebSockets & Real-time APIs",
      "OAuth2, JWT & API Security",
      "Database Indexing & Query Optimization",
      "Unit Testing, Pytest & TDD",
      "Git & Version Control",
      "Linux/Unix Server Management",
      "Nginx & Load Balancing",
      "Monitoring (Grafana, Telegraf, Prometheus)",
      "Event-Driven Architecture",
      "gRPC & Protocol Buffers",
      "Python Async (asyncio, aiohttp)",
      "Artificial Intelligence & Machine Learning",
      "Deep Learning (TensorFlow, PyTorch)",
      "Natural Language Processing (NLP)",
      "Computer Vision & Image Processing",
      "Scikit-learn & Data Science",
      "LangChain & LLM Integration",
      "Agentic AI & MCP Servers",
      "ML Model Deployment & MLOps",
      "NumPy, Pandas & Data Analysis",
      "OpenAI API & GPT Integration",
      "Hugging Face Transformers",
      "Vector Databases (Pinecone, Weaviate)",
    ],
  },
  projects: [
    {
      id: 1,
      title: "Smart Autonomous Tractor",
      description: "Developed critical APIs and cloud infrastructure for Monarch Tractor's autonomous farming solution, enhancing productivity and sustainability",
      tech: ["Python", "Flask", "AWS", "MySQL", "Redis", "ROS"],
      color: "#3b82f6",
    },
    {
      id: 2,
      title: "Tractor One-plus Migration System",
      description: "Built migration and integration modules for tractor systems, optimizing performance and ensuring seamless operations",
      tech: ["Python", "FastAPI", "AWS Lambda", "SQS", "CloudWatch"],
      color: "#8b5cf6",
    },
    {
      id: 3,
      title: "Verizon Sim Card API Integration",
      description: "Designed and implemented APIs for Verizon SIM card management, ensuring reliable connectivity for IoT devices",
      tech: ["Python", "Django", "AWS", "MQTT", "CloudFormation"],
      color: "#ec4899",
    },
    {
      id: 4,
      title: "OpenVPN Integration",
      description: "Implemented secure VPN infrastructure and authentication system for enterprise remote access, ensuring encrypted connections and secure data transmission",
      tech: ["Python", "OpenVPN", "Flask", "PostgreSQL", "OAuth2", "Linux"],
      color: "#06b6d4",
    },
    {
      id: 5,
      title: "Smart Power Grid",
      description: "Developed IoT-based smart grid monitoring system for real-time energy management, load balancing, and predictive analytics to optimize power distribution",
      tech: ["Python", "Django", "InfluxDB", "MQTT", "Grafana", "Machine Learning"],
      color: "#10b981",
    },
  ],
  contact: {
    title: "Let's Connect",
    description: "Interested in collaborating or have a project in mind? Let's build something innovative together.",
    email: "lakshmanp230@gmail.com",
    social: {
      github: "https://github.com/Patel230",
      linkedin: "https://linkedin.com/in/lakshman-patel",
      phone: "+91 9713946578",
    },
  },
};
