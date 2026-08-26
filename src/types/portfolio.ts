export interface PersonalInfo {
  name: string;
  pronouns: string;
  role: string;
  headline: string;
  subHeadline: string;
  status: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profileImage?: string;
  aboutBio: string;
  currentPursuits: string[];
  pastHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  period: string;
  description: string;
  keyContributions: string[];
  skills: string[];
  thumbnail?: string;
  thumbnailLabel?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Edge AI & Vision' | 'Deep Learning & Neural Systems' | 'Embedded & Systems' | 'Time Series & Scientific';
  featured: boolean;
  date: string;
  description: string;
  architectureDetails?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: {
    url: string;
    caption: string;
  }[];
  badge?: string;
  mentor?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  domain: string;
  focus: string;
  description: string;
  technologies: string[];
  institutions?: string;
  keyInnovations: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export interface TrainingWorkshopItem {
  title: string;
  institution: string;
  year: string;
  description: string;
  category?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  issueDate: string;
  skills: string[];
  thumbnail?: string;
  credentialUrl?: string;
}
