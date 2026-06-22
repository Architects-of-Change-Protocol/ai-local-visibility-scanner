export type YesNo = 'yes' | 'no';
export type YesNoUnknown = 'yes' | 'no' | 'unknown';

export interface ScanFormData {
  businessName: string;
  city: string;
  category: string;
  websiteUrl: string;
  googleBusinessUrl: string;
  contactLink: string;
  reviewCount: string;
  averageRating: string;
  hasServicesPage: YesNo | '';
  hasFAQs: YesNo | '';
  showsPricing: YesNo | '';
  hasTestimonials: YesNo | '';
  hasLocalPhotos: YesNo | '';
  hasSeparateServicePages: YesNo | '';
  hasBookingCTA: YesNo | '';
  hasSchema: YesNoUnknown | '';
  publishesContent: YesNo | '';
  mentionsServiceAreas: YesNo | '';
  hasThirdPartyProof: YesNo | '';
}

export interface ScoreCategory {
  label: string;
  score: number;
  maxScore: number;
  description: string;
}

export interface ScanResult {
  totalScore: number;
  statusLabel: string;
  statusColor: string;
  categories: ScoreCategory[];
  recommendations: string[];
  summary: string;
  priorityFixes: string[];
  estimatedOpportunity: string;
}
