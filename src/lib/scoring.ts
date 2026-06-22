import type { ScanFormData, ScanResult, ScoreCategory } from './types';

function profileScore(data: ScanFormData): ScoreCategory {
  let score = 0;
  if (data.businessName.trim()) score += 2.5;
  if (data.city.trim()) score += 2.5;
  if (data.category.trim()) score += 2.5;
  if (data.websiteUrl.trim()) score += 2.5;
  if (data.googleBusinessUrl.trim()) score += 2.5;
  if (data.contactLink.trim()) score += 2.5;
  return {
    label: 'Business Profile',
    score: Math.round(score),
    maxScore: 15,
    description: 'How complete and findable your core business identity is.',
  };
}

function reviewScore(data: ScanFormData): ScoreCategory {
  const count = parseInt(data.reviewCount, 10) || 0;
  const rating = parseFloat(data.averageRating) || 0;

  let countPts = 0;
  if (count >= 100) countPts = 8;
  else if (count >= 30) countPts = 5;
  else if (count >= 1) countPts = 2;

  let ratingPts = 0;
  if (rating >= 4.5) ratingPts = 7;
  else if (rating >= 4.0) ratingPts = 5;
  else if (rating >= 3.5) ratingPts = 3;
  else if (rating > 0) ratingPts = 1;

  return {
    label: 'Review Trust',
    score: countPts + ratingPts,
    maxScore: 15,
    description: 'Volume and quality of customer reviews that AI systems use as trust signals.',
  };
}

function websiteScore(data: ScanFormData): ScoreCategory {
  let score = 0;
  if (data.hasServicesPage === 'yes') score += 5;
  if (data.mentionsServiceAreas === 'yes') score += 5;
  if (data.hasSeparateServicePages === 'yes') score += 5;
  if (data.showsPricing === 'yes') score += 5;
  return {
    label: 'Website Clarity',
    score,
    maxScore: 20,
    description: 'How clearly your website communicates what you do, where, and at what cost.',
  };
}

function conversionScore(data: ScanFormData): ScoreCategory {
  let score = 0;
  if (data.hasBookingCTA === 'yes') score += 5;
  if (data.contactLink.trim()) score += 5;
  return {
    label: 'Conversion Readiness',
    score,
    maxScore: 10,
    description: 'How easy it is for customers to take action once they find you.',
  };
}

function contentScore(data: ScanFormData): ScoreCategory {
  let score = 0;
  if (data.hasFAQs === 'yes') score += 7;
  if (data.publishesContent === 'yes') score += 8;
  return {
    label: 'Content Usefulness',
    score,
    maxScore: 15,
    description: 'Whether your content answers real customer questions before they ask.',
  };
}

function proofScore(data: ScanFormData): ScoreCategory {
  let score = 0;
  if (data.hasTestimonials === 'yes') score += 5;
  if (data.hasLocalPhotos === 'yes') score += 5;
  if (data.hasThirdPartyProof === 'yes') score += 5;
  return {
    label: 'Proof & Authenticity',
    score,
    maxScore: 15,
    description: 'Social proof and authentic signals that build trust with both humans and AI.',
  };
}

function techScore(data: ScanFormData): ScoreCategory {
  let score = 0;
  if (data.hasSchema === 'yes') score += 7;
  else if (data.hasSchema === 'unknown') score += 2;
  if (data.hasSeparateServicePages === 'yes') score += 3;
  return {
    label: 'Technical & AI Readiness',
    score,
    maxScore: 10,
    description: 'Structured data and machine-readable signals that help AI systems parse your business.',
  };
}

function buildRecommendations(data: ScanFormData): string[] {
  const recs: string[] = [];

  if (data.hasFAQs !== 'yes') {
    recs.push('Add a FAQ section that answers the exact questions customers ask before buying — this is one of the highest-value AI signals.');
  }
  if (data.hasSeparateServicePages !== 'yes') {
    recs.push('Create a dedicated page for each main service so AI systems can understand your full offering and surface the right page.');
  }
  if (data.mentionsServiceAreas !== 'yes') {
    recs.push('Clearly list every neighborhood, city, and region you serve — AI assistants use this to match businesses to local queries.');
  }
  const count = parseInt(data.reviewCount, 10) || 0;
  if (count < 30) {
    recs.push('Build a review acquisition workflow — send follow-up messages asking happy customers to leave a Google review.');
  }
  if (data.hasSchema !== 'yes') {
    recs.push('Add LocalBusiness and Service schema markup so search engines and AI tools can read your data in a structured way.');
  }
  if (data.hasTestimonials !== 'yes' || data.hasLocalPhotos !== 'yes') {
    recs.push('Add real customer testimonials and authentic business photos — these humanize your brand for both visitors and AI systems.');
  }
  if (data.showsPricing !== 'yes') {
    recs.push('Add starting prices or price ranges — reducing pricing ambiguity increases trust and reduces the friction that causes customers to look elsewhere.');
  }
  if (data.hasBookingCTA !== 'yes') {
    recs.push('Place a direct quote or booking CTA above the fold on every key page so customers can act immediately.');
  }
  if (data.publishesContent !== 'yes') {
    recs.push('Publish helpful educational content that answers common questions in your industry — AI systems learn from and reference authoritative local content.');
  }
  if (data.hasThirdPartyProof !== 'yes') {
    recs.push('Gather and display reviews from Yelp, Facebook, Houzz, or industry directories — third-party proof amplifies your trustworthiness.');
  }
  if (!data.googleBusinessUrl.trim()) {
    recs.push('Claim and fully complete your Google Business Profile — it is the single most important local AI signal you control.');
  }

  return recs.slice(0, 7);
}

function buildPriorityFixes(recs: string[]): string[] {
  return recs.slice(0, 5);
}

function statusLabel(score: number): { label: string; color: string } {
  if (score >= 85) return { label: 'AI-Ready Local Authority', color: 'emerald' };
  if (score >= 70) return { label: 'Strong, but missing key AI signals', color: 'blue' };
  if (score >= 50) return { label: 'Visible, but not AI-ready', color: 'yellow' };
  if (score >= 30) return { label: 'Hard for AI to trust', color: 'orange' };
  return { label: 'Nearly invisible to AI discovery', color: 'red' };
}

function buildSummary(score: number, businessName: string): string {
  const name = businessName.trim() || 'Your business';
  if (score >= 85) {
    return `${name} is well-positioned for AI-era discovery. You have strong signals across profile completeness, trust, and content clarity. Keep building on your content and structured data to maintain authority.`;
  }
  if (score >= 70) {
    return `${name} has a solid foundation but is missing a few key AI signals that competitors may have. Closing these gaps could move you from being visible to being recommended.`;
  }
  if (score >= 50) {
    return `${name} is findable but unclear to AI systems. Customers searching through AI assistants may see your name but lack the trust signals to choose you. Targeted improvements will have immediate impact.`;
  }
  if (score >= 30) {
    return `AI systems struggle to confidently understand and recommend ${name}. You have the basic presence, but weak signals across trust, clarity, and structure make it easy for competitors to get chosen first.`;
  }
  return `${name} is largely invisible to AI-powered discovery. Without clear signals, AI assistants and search engines cannot reliably surface or recommend your business. A structured improvement plan is essential.`;
}

function estimatedOpportunity(score: number): string {
  if (score >= 85) return 'You are capturing most AI-driven traffic. Focus on maintaining and expanding content authority.';
  if (score >= 70) return 'Fixing 2–3 key gaps could move you into AI-ready status and noticeably increase AI-referred leads.';
  if (score >= 50) return 'Businesses at this score commonly see a 30–50% increase in AI-referred inquiries after structured improvements.';
  if (score >= 30) return 'There is significant untapped opportunity. Most competitors at this score see meaningful lead increases within 60 days of improvement.';
  return 'Your highest-priority opportunity is getting the basics right — once done, results can compound quickly.';
}

export function computeScore(data: ScanFormData): ScanResult {
  const categories = [
    profileScore(data),
    reviewScore(data),
    websiteScore(data),
    conversionScore(data),
    contentScore(data),
    proofScore(data),
    techScore(data),
  ];

  const totalScore = Math.min(100, categories.reduce((sum, c) => sum + c.score, 0));
  const { label, color } = statusLabel(totalScore);
  const recommendations = buildRecommendations(data);
  const priorityFixes = buildPriorityFixes(recommendations);
  const summary = buildSummary(totalScore, data.businessName);
  const opportunity = estimatedOpportunity(totalScore);

  return {
    totalScore,
    statusLabel: label,
    statusColor: color,
    categories,
    recommendations,
    summary,
    priorityFixes,
    estimatedOpportunity: opportunity,
  };
}
