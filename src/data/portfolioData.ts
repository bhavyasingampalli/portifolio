import type { Project, Certification, Achievement, LearningItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Bhavya Singampalli',
  shortName: 'BHAVYA',
  role: 'Computer Science & Information Technology Student',
  tagline: 'Building with Data & Code.',
  status: 'Open to Internships & Opportunities',
  bio: 'B.Tech CSIT student passionate about Data Analytics, Full-Stack Development and problem solving.',
  aboutSummary: `I am a Computer Science & Information Technology student who enjoys solving problems, building practical applications and learning emerging technologies.

My current focus is on strengthening Data Structures & Algorithms, SQL, Data Analytics and Web Development while continuing to build real-world software projects.`,
  email: 'bhavyasingampalli3838@gmail.com',
  github: 'https://github.com/bhavyasingampalli',
  linkedin: 'https://linkedin.com/in/bhavyasingampalli',
  leetcode: 'https://leetcode.com', // Placeholder URL
  resumeUrl: '#resume-download', // Placeholder constant
};

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'B.Tech CSIT',
    subtitle: 'Computer Science & Info Tech',
    description: 'Undergraduate student building strong fundamentals in computing and software engineering.',
    icon: 'GraduationCap',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Problem Solving',
    subtitle: 'Data Structures & Algorithms',
    description: 'Active problem solver focusing on optimal algorithmic solutions and logical reasoning.',
    icon: 'Code2',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Data Analytics',
    subtitle: 'SQL & Data Insights',
    description: 'Analyzing structured datasets, querying complex databases, and deriving actionable insights.',
    icon: 'BarChart3',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Full-Stack Dev',
    subtitle: 'Modern Web Solutions',
    description: 'Crafting responsive, user-centric web applications using modern frontend and backend stacks.',
    icon: 'Layers',
    color: 'from-amber-500 to-orange-500',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Programming',
    skills: [
      { name: 'Python', icon: 'FileCode', highlight: true, description: 'Data Analysis & Scripting' },
      { name: 'JavaScript', icon: 'Code', highlight: true, description: 'Modern Web Logic & ES6+' },
      { name: 'SQL', icon: 'Database', highlight: true, description: 'Database Querying & Data Manipulation' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: 'Atom', highlight: true, description: 'Component Architecture & Interactive UIs' },
      { name: 'Tailwind CSS', icon: 'Palette', highlight: true, description: 'Utility-First Responsive Styling' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', icon: 'Zap', highlight: true, description: 'High-Performance Python Web APIs' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'Table', highlight: false, description: 'Relational Database Management' },
      { name: 'MongoDB', icon: 'Server', highlight: false, description: 'NoSQL Document Store' },
    ],
  },
  {
    category: 'Tools & Cloud',
    skills: [
      { name: 'Git', icon: 'GitBranch', highlight: false, description: 'Version Control' },
      { name: 'GitHub', icon: 'Github', highlight: false, description: 'Collaboration & Repositories' },
      { name: 'Docker', icon: 'Box', highlight: false, description: 'Containerization Basics' },
      { name: 'AWS', icon: 'Cloud', highlight: false, description: 'Cloud Services & Hosting' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-bus-ticketing',
    title: 'Smart Bus Digital Ticketing System',
    tagline: 'Streamlined bus ticket booking & digital payments platform',
    description: 'A smart digital bus ticketing platform designed to simplify bus ticket booking and digital payments.',
    fullDescription: 'An end-to-end digital ticketing solution that eliminates physical queue wait times. Features real-time seat reservation, digital pass generation, automated payment processing via Razorpay, and live route navigation powered by Google Maps API.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Razorpay', 'Google Maps API'],
    features: [
      'Digital ticket booking with seat selection',
      'Secure online payment integration via Razorpay',
      'Location and interactive route map integration',
      'Responsive, high-performance web interface',
    ],
    category: 'Full-Stack',
    demoUrl: '#demo-smart-bus',
    githubUrl: '#github-smart-bus',
    caseStudy: {
      problem: 'Commuters face long waiting queues and friction with physical cash ticketing on municipal and regional bus systems.',
      solution: 'Built a web-based digital ticketing application enabling passengers to select seats, pay digitally via UPI/Cards, and receive instant QR tickets with live route updates.',
      architecture: [
        'React SPA for instant route search & interactive seat map rendering',
        'Node.js REST API handling booking transactions and order creation',
        'Razorpay checkout integration for payment processing',
        'Google Maps API for visualization of bus stops and active routes',
      ],
      keyTakeaways: [
        'Mastered third-party API integrations (Payments & Maps)',
        'Optimized frontend render performance for seat matrix grid',
        'Implemented resilient payment verification flow',
      ],
    },
    featured: true,
    accentColor: 'from-blue-600/30 to-cyan-500/20 border-cyan-500/40',
  },
  {
    id: 'mediguard-ai',
    title: 'MediGuard AI',
    tagline: 'AI-powered medicine reminder & intelligent healthcare assistant',
    description: 'An AI-powered medicine reminder and healthcare assistance platform designed to help users manage medicines and communicate with an intelligent multilingual assistant.',
    fullDescription: 'MediGuard AI simplifies medication management through automated schedule tracking, intelligent pill reminders, caregiver monitoring dashboards, and an NLP-driven multilingual virtual healthcare assistant.',
    technologies: ['FastAPI', 'MongoDB', 'JWT', 'AI', 'NLP'],
    features: [
      'Automated medicine reminder scheduling',
      'AI healthcare assistant with natural conversation',
      'Multilingual interaction capabilities',
      'Caregiver dashboard for monitoring prescriptions',
      'Secure user authentication via JWT',
    ],
    category: 'AI / ML',
    demoUrl: '#demo-mediguard',
    githubUrl: '#github-mediguard',
    caseStudy: {
      problem: 'Patients and elderly individuals frequently miss medication doses due to complex prescription schedules or language barriers with healthcare apps.',
      solution: 'Developed an intelligent assistant that sends automated notifications and allows patients to ask medication questions in their native language using natural language processing.',
      architecture: [
        'FastAPI asynchronous backend for handling concurrent reminder timers and queries',
        'MongoDB document store for flexible patient medical records and schedules',
        'NLP model integration for multilingual natural language query resolution',
        'JWT-based role authentication for patients and caregivers',
      ],
      keyTakeaways: [
        'Engineered scalable asynchronous API endpoints in FastAPI',
        'Designed schema-less MongoDB storage for variable prescription inputs',
        'Implemented localized prompt pipelines for multilingual healthcare context',
      ],
    },
    featured: true,
    accentColor: 'from-emerald-600/30 to-teal-500/20 border-emerald-500/40',
  },
  {
    id: 'elderly-care-portal',
    title: 'Elderly Care Awareness Portal',
    tagline: 'Accessible digital portal providing vital elderly-care information',
    description: 'A digital awareness platform focused on providing useful elderly-care information through a simple and accessible interface.',
    fullDescription: 'Designed with maximum accessibility and high legibility, this web portal provides curated resources, wellness guides, emergency contact directories, and healthcare advice for senior citizens and caregivers.',
    technologies: ['React', 'JavaScript', 'CSS'],
    features: [
      'Accessibility-first responsive web design',
      'Curated wellness & healthcare information guides',
      'Simplified navigation with high contrast visual mode',
      'Interactive resource directory',
    ],
    category: 'Web Apps',
    demoUrl: '#demo-elderly-care',
    githubUrl: '#github-elderly-care',
    caseStudy: {
      problem: 'Elderly individuals struggle with visually cluttered web applications and complex navigation menus when looking for essential health information.',
      solution: 'Created a minimal, high-accessibility information portal tailored specifically for elderly users with scalable font options, clean typography, and zero-distraction layouts.',
      architecture: [
        'React frontend built with responsive web components',
        'Custom modular CSS design system optimized for contrast and readability',
        'Structured content categories for quick information discovery',
      ],
      keyTakeaways: [
        'Applied WCAG accessibility guidelines for contrast and legibility',
        'Fostered user-centric UI design thinking for senior target demographics',
      ],
    },
    featured: true,
    accentColor: 'from-purple-600/30 to-pink-500/20 border-purple-500/40',
  },
  {
    id: 'ai-faq-voice-assistant',
    title: 'AI FAQ Voice Assistant',
    tagline: 'Natural voice interaction AI assistant for instant Q&A',
    description: 'An AI-powered FAQ assistant with voice interaction designed to provide users with quick answers through natural language.',
    fullDescription: 'An interactive voice-enabled assistant that allows users to ask questions hands-free. Integrates speech recognition, semantic natural language query resolution, and text-to-speech engine.',
    technologies: ['Python', 'AI', 'NLP', 'Voice APIs'],
    features: [
      'Real-time voice query input & speech-to-text conversion',
      'AI-driven semantic context lookup for precise answers',
      'Text-to-speech audio feedback generation',
      'Modular command pipeline for custom FAQ datasets',
    ],
    category: 'AI / ML',
    demoUrl: '#demo-ai-voice',
    githubUrl: '#github-ai-voice',
    caseStudy: {
      problem: 'Users finding information in lengthy text documentation often prefer verbal inquiry for faster answers.',
      solution: 'Built a Python voice pipeline combining speech recognition with NLP text classification to answer user queries conversationally in real-time.',
      architecture: [
        'SpeechRecognition Python pipeline to process audio inputs',
        'NLP classifier engine matching query embeddings to target FAQ intents',
        'Text-To-Speech (TTS) synthesizer streaming voice answers back to user',
      ],
      keyTakeaways: [
        'Implemented audio stream processing in Python',
        'Refined semantic search accuracy for conversational prompts',
      ],
    },
    featured: true,
    accentColor: 'from-amber-600/30 to-orange-500/20 border-amber-500/40',
  },
];

export const DSA_JOURNEY = {
  totalSolved: 70,
  platform: 'LeetCode',
  headline: 'DSA & Problem Solving',
  summary: 'Consistently solving data structure and algorithmic challenges to build strong analytical skills, spatial reasoning, and computational efficiency.',
  topics: [
    { name: 'Arrays', problemsCount: 15, tags: ['Searching', 'Sorting', '2D Matrices'], status: 'Mastered' as const },
    { name: 'Strings', problemsCount: 12, tags: ['Parsing', 'Pattern Matching', 'Palindromes'], status: 'Mastered' as const },
    { name: 'Two Pointers', problemsCount: 8, tags: ['In-place Swap', 'Subarrays', 'Partitioning'], status: 'Mastered' as const },
    { name: 'Hashing', problemsCount: 10, tags: ['HashMap', 'HashSet', 'Frequency Counting'], status: 'Mastered' as const },
    { name: 'Sliding Window', problemsCount: 6, tags: ['Dynamic Window', 'Fixed Window', 'Substrings'], status: 'Practicing' as const },
    { name: 'Prefix Sum', problemsCount: 5, tags: ['Range Queries', 'Subarray Sums'], status: 'Practicing' as const },
    { name: 'Linked Lists', problemsCount: 6, tags: ['Singly', 'Doubly', 'Cycle Detection'], status: 'Practicing' as const },
    { name: 'Trees', problemsCount: 5, tags: ['Binary Trees', 'BST', 'Traversals'], status: 'Exploring' as const },
    { name: 'Graphs', problemsCount: 3, tags: ['BFS', 'DFS', 'Adjacency List'], status: 'Exploring' as const },
  ],
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'sih',
    title: 'Smart India Hackathon (SIH)',
    organization: 'Ministry of Education, Govt. of India',
    type: 'National Hackathon',
    date: 'Hackathon Participation',
    description: 'Participated in India’s premier national hackathon addressing real-world problem statements with technology solutions.',
    highlights: [
      'Collaborated in a team environment to engineer problem solutions under tight deadlines',
      'Developed proof-of-concept prototypes and presented technical demos',
    ],
    icon: 'Trophy',
  },
  {
    id: 'gdg-wow',
    title: 'GDG WOW (Wonder of Wonders)',
    organization: 'Google Developer Groups',
    type: 'Developer Community Event',
    date: 'Tech Summit',
    description: 'Engaged in developer workshops and technology showcases led by Google Developer Groups community experts.',
    highlights: [
      'Expanded technical knowledge in cloud, web, and AI ecosystems',
      'Networked with industry mentors and peer software builders',
    ],
    icon: 'Sparkles',
  },
  {
    id: 'lnit-summit',
    title: 'LNIT Summit',
    organization: 'LNIT Tech Forum',
    type: 'Technical Innovation Summit',
    date: 'Technical Summit',
    description: 'Participated in LNIT tech discussions, project demonstrations, and engineering solution presentations.',
    highlights: [
      'Showcased student technical initiatives and software projects',
      'Gained insights on software architecture trends and industry expectations',
    ],
    icon: 'Award',
  },
  {
    id: 'technical-projects',
    title: 'Technical Projects Showcase',
    organization: 'Academic & Personal Projects',
    type: 'Project Development',
    date: 'Continuous Innovation',
    description: 'Successfully engineered and deployed multi-domain technical projects across AI, Web Development, and Accessibility.',
    highlights: [
      'Built full-stack web applications with modern frameworks',
      'Integrated payment gateways, APIs, and AI models into usable apps',
    ],
    icon: 'Code2',
  },
  {
    id: 'coding-practice',
    title: 'Consistent Coding Practice',
    organization: 'Self-Driven Learning',
    type: 'Algorithmic Rigor',
    date: 'Daily Practice',
    description: 'Dedicated focus on Data Structures & Algorithms, strengthening foundational problem-solving capabilities daily.',
    highlights: [
      'Solved 70+ algorithmic problems across core CS topics',
      'Built structured knowledge in complexity analysis & memory optimization',
    ],
    icon: 'Target',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cisco-python',
    title: 'Data Science Essentials with Python',
    issuer: 'Cisco Networking Academy',
    year: '2024',
    badgeText: 'Verified Specialist',
    credentialUrl: '#credential-cisco',
    skillsLearned: ['Python for Data Science', 'Data Analysis', 'NumPy & Pandas Foundations'],
    accent: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30',
  },
  {
    id: 'nptel-esd',
    title: 'Education for Sustainable Development',
    issuer: 'NPTEL',
    year: '2024',
    badgeText: 'Elite Certificate',
    credentialUrl: '#credential-nptel',
    skillsLearned: ['Sustainable Systems', 'Environmental Technology', 'Systems Thinking'],
    accent: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
  },
  {
    id: 'gfg-sql',
    title: 'SQL Course',
    issuer: 'GeeksforGeeks',
    year: '2024',
    badgeText: 'Course Completion',
    credentialUrl: '#credential-gfg',
    skillsLearned: ['Relational Database Queries', 'JOINS & Aggregations', 'Database Design'],
    accent: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  },
  {
    id: 'hackerrank-sql',
    title: 'SQL Assessment',
    issuer: 'HackerRank',
    year: '2024',
    badgeText: 'Skills Certified',
    credentialUrl: '#credential-hackerrank',
    skillsLearned: ['Complex Querying', 'Subqueries & Indexing', 'Data Analytics Logic'],
    accent: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
  },
];

export const CURRENTLY_LEARNING: LearningItem[] = [
  {
    topic: 'Data Structures & Algorithms',
    description: 'Deepening graph algorithms, dynamic programming strategies, and advanced tree structures.',
    status: 'Active Practice',
    tags: ['Graphs', 'DP', 'Trees', 'Time Complexity'],
    icon: 'Binary',
  },
  {
    topic: 'Advanced SQL',
    description: 'Mastering window functions, CTEs, query optimization, indexing strategies, and analytical queries.',
    status: 'Deep Dive',
    tags: ['Window Functions', 'CTEs', 'Query Plan', 'Indexing'],
    icon: 'Database',
  },
  {
    topic: 'Data Analytics',
    description: 'Exploratory data analysis (EDA), data cleaning pipelines, visualization with Python libraries.',
    status: 'Building Projects',
    tags: ['Pandas', 'Matplotlib', 'EDA', 'Data Wrangling'],
    icon: 'LineChart',
  },
  {
    topic: 'DevOps',
    description: 'Understanding CI/CD pipelines, containerization workflows with Docker, and cloud deployments.',
    status: 'Active Practice',
    tags: ['Docker', 'CI/CD', 'Linux CLI', 'Cloud Deployment'],
    icon: 'Container',
  },
  {
    topic: 'Computer Networks',
    description: 'Core concepts of TCP/IP, OSI model, HTTP/HTTPS protocols, socket programming, and DNS routing.',
    status: 'Active Practice',
    tags: ['TCP/IP', 'HTTP/HTTPS', 'DNS', 'Socket API'],
    icon: 'Network',
  },
];
