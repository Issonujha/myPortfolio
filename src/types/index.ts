export type ThemeMode = 'dark' | 'light';
export type AccentColor = 'cyan' | 'emerald' | 'violet' | 'amber';

export interface ServiceFeature {
  id: string;
  name: string;
  description: string;
  additionalDays: number;
  additionalPrice: number;
  isPopular?: boolean;
}

export interface ServiceOffering {
  id: string;
  name: string;
  badge: string;
  headline: string;
  description: string;
  baseDeliveryDays: number;
  basePrice: number;
  category: 'Engineering' | 'Design & Creative' | 'Data & Automation';
  features: ServiceFeature[];
  deliverables: string[];
  techStack: string[];
  icon: string;
}

export interface CustomerInquiry {
  id: string;
  clientName: string;
  clientEmail: string;
  serviceId: string;
  serviceName: string;
  selectedFeatures: string[];
  estimatedDays: number;
  estimatedCost: number;
  status: 'New Lead' | 'Proposal Sent' | 'In Discussion' | 'Contract Signed';
  targetDeadline: string;
  createdAt: string;
  notes?: string;
}

export interface OrderMilestone {
  id: string;
  orderNumber: string;
  clientName: string;
  projectTitle: string;
  stage: 'Discovery' | 'Architecture' | 'Implementation' | 'QA & Testing' | 'Launched';
  progressPercentage: number;
  slaRemainingHours: number;
  deadlineDate: string;
  status: 'In Progress' | 'In Review' | 'Ready for Launch' | 'Delivered';
  assignedLead: string;
}

export interface ProductCaseStudy {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  image?: string;
  imageCaption?: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  techStack: string[];
  githubUrl?: string;
  apkUrl?: string;
}
