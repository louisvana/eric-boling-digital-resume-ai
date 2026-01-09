
export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  location: string;
  linkedinUrl: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description?: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  year: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  logo: string;
  year?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ResumeContent {
  header: {
    name: string;
    title: string;
    contact: ContactInfo;
  };
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: SkillGroup[];
}

export interface PortfolioHero {
  name: string;
  role: string;
  tagline: string;
  abstract: string;
  image: string;
}

export interface PortfolioIntroduction {
  philosophy: string;
}

export interface ProcessStep {
  stage: string;
  description: string;
}

export interface MetricData {
  label: string;
  before: number;
  after: number;
  unit: string;
}

export interface PerformanceMetric {
  project: string;
  data: MetricData[];
}

export interface CaseStudyStat {
  label: string;
  value: string;
  icon: 'trending' | 'dollar' | 'users' | 'cart' | 'zap' | 'target';
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string; // The "Choice" title
  hook: string; // The high-contrast headline
  role: string;
  stats: CaseStudyStat[];
  context: string;
  pivot: {
    problem: string;
    solution: string;
  };
  strategy: string;
  strategyTitle?: string;
  techStack: string[];
}

export interface PortfolioContact {
  email: string;
  linkedin: string;
  portfolio: string;
}

export interface EmploymentRequirement {
  label: string;
  value: string;
}

export interface EmploymentData {
  title: string;
  intro: string;
  items: EmploymentRequirement[];
}

export interface PortfolioData {
  hero: PortfolioHero;
  introduction: PortfolioIntroduction;
  process_diagram: ProcessStep[];
  performance_metrics: PerformanceMetric[];
  case_studies: CaseStudy[];
  credentials: string[];
  contact: PortfolioContact;
  faqs: FAQItem[];
}
