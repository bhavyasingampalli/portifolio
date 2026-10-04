export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  category: 'Full-Stack' | 'AI / ML' | 'Web Apps';
  demoUrl?: string;
  githubUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    architecture: string[];
    keyTakeaways: string[];
  };
  featured: boolean;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Intermediate", "Exploring"
    highlight?: boolean;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badgeText?: string;
  credentialUrl: string;
  skillsLearned: string[];
  accent: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  type: string;
  date: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface DSATopic {
  name: string;
  problemsCount: number;
  tags: string[];
  status: 'Mastered' | 'Practicing' | 'Exploring';
}

export interface LearningItem {
  topic: string;
  description: string;
  status: 'Deep Dive' | 'Active Practice' | 'Building Projects';
  tags: string[];
  icon: string;
}
