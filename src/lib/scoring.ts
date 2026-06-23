import type { ScanFormData, ScanResult, ScoreCategory } from './types';
import type { Language } from './i18n';

const categoryLabels: Record<Language, string[]> = {
  es: [
    'Perfil del negocio',
    'Confianza en reseñas',
    'Claridad del sitio web',
    'Preparación para conversión',
    'Utilidad del contenido',
    'Prueba y autenticidad',
    'Preparación técnica para IA',
  ],
  en: [
    'Business Profile',
    'Review Trust',
    'Website Clarity',
    'Conversion Readiness',
    'Content Usefulness',
    'Proof & Authenticity',
    'Technical & AI Readiness',
  ],
};

const categoryDescriptions: Record<Language, string[]> = {
  es: [
    'Qué tan completa y encontrable es la identidad central de tu negocio.',
    'Volumen y calidad de las reseñas que los sistemas de IA usan como señales de confianza.',
    'Qué tan claramente tu sitio web comunica qué hacés, dónde y a qué costo.',
    'Qué tan fácil es para los clientes tomar acción una vez que te encuentran.',
    'Si tu contenido responde preguntas reales de los clientes antes de que las hagan.',
    'Prueba social y señales auténticas que generan confianza en humanos e IA.',
    'Datos estructurados y señales legibles por máquinas que ayudan a los sistemas de IA a entender tu negocio.',
  ],
  en: [
    'How complete and findable your core business identity is.',
    'Volume and quality of customer reviews that AI systems use as trust signals.',
    'How clearly your website communicates what you do, where, and at what cost.',
    'How easy it is for customers to take action once they find you.',
    'Whether your content answers real customer questions before they ask.',
    'Social proof and authentic signals that build trust with both humans and AI.',
    'Structured data and machine-readable signals that help AI systems parse your business.',
  ],
};

function profileScore(data: ScanFormData, lang: Language): ScoreCategory {
  let score = 0;
  if (data.businessName.trim()) score += 2.5;
  if (data.city.trim()) score += 2.5;
  if (data.category.trim()) score += 2.5;
  if (data.websiteUrl.trim()) score += 2.5;
  if (data.googleBusinessUrl.trim()) score += 2.5;
  if (data.contactLink.trim()) score += 2.5;
  return {
    label: categoryLabels[lang][0],
    score: Math.round(score),
    maxScore: 15,
    description: categoryDescriptions[lang][0],
  };
}

function reviewScore(data: ScanFormData, lang: Language): ScoreCategory {
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
    label: categoryLabels[lang][1],
    score: countPts + ratingPts,
    maxScore: 15,
    description: categoryDescriptions[lang][1],
  };
}

function websiteScore(data: ScanFormData, lang: Language): ScoreCategory {
  let score = 0;
  if (data.hasServicesPage === 'yes') score += 5;
  if (data.mentionsServiceAreas === 'yes') score += 5;
  if (data.hasSeparateServicePages === 'yes') score += 5;
  if (data.showsPricing === 'yes') score += 5;
  return {
    label: categoryLabels[lang][2],
    score,
    maxScore: 20,
    description: categoryDescriptions[lang][2],
  };
}

function conversionScore(data: ScanFormData, lang: Language): ScoreCategory {
  let score = 0;
  if (data.hasBookingCTA === 'yes') score += 5;
  if (data.contactLink.trim()) score += 5;
  return {
    label: categoryLabels[lang][3],
    score,
    maxScore: 10,
    description: categoryDescriptions[lang][3],
  };
}

function contentScore(data: ScanFormData, lang: Language): ScoreCategory {
  let score = 0;
  if (data.hasFAQs === 'yes') score += 7;
  if (data.publishesContent === 'yes') score += 8;
  return {
    label: categoryLabels[lang][4],
    score,
    maxScore: 15,
    description: categoryDescriptions[lang][4],
  };
}

function proofScore(data: ScanFormData, lang: Language): ScoreCategory {
  let score = 0;
  if (data.hasTestimonials === 'yes') score += 5;
  if (data.hasLocalPhotos === 'yes') score += 5;
  if (data.hasThirdPartyProof === 'yes') score += 5;
  return {
    label: categoryLabels[lang][5],
    score,
    maxScore: 15,
    description: categoryDescriptions[lang][5],
  };
}

function techScore(data: ScanFormData, lang: Language): ScoreCategory {
  let score = 0;
  if (data.hasSchema === 'yes') score += 7;
  else if (data.hasSchema === 'unknown') score += 2;
  if (data.hasSeparateServicePages === 'yes') score += 3;
  return {
    label: categoryLabels[lang][6],
    score,
    maxScore: 10,
    description: categoryDescriptions[lang][6],
  };
}

const recommendations: Record<Language, (data: ScanFormData) => string[]> = {
  es: (data) => {
    const recs: string[] = [];
    if (data.hasFAQs !== 'yes') recs.push('Agregá una sección de preguntas frecuentes que responda exactamente lo que los clientes preguntan antes de comprar — es una de las señales de mayor valor para ser considerado en recomendaciones de IA.');
    if (data.hasSeparateServicePages !== 'yes') recs.push('Creá una página dedicada para cada servicio principal para que los sistemas de IA puedan entender tu oferta completa y mostrar la página correcta en recomendaciones.');
    if (data.mentionsServiceAreas !== 'yes') recs.push('Listá claramente cada barrio, ciudad y región donde prestás servicios — los asistentes de IA usan esta información para vincular negocios con consultas locales.');
    const count = parseInt(data.reviewCount, 10) || 0;
    if (count < 30) recs.push('Desarrollá un flujo de captación de reseñas — enviá mensajes de seguimiento a clientes satisfechos pidiéndoles que dejen una reseña en Google.');
    if (data.hasSchema !== 'yes') recs.push('Agregá schema markup de LocalBusiness y Service para que los motores de búsqueda y herramientas de IA puedan leer tu información de forma estructurada — mejora directamente tu visibilidad en recomendaciones.');
    if (data.hasTestimonials !== 'yes' || data.hasLocalPhotos !== 'yes') recs.push('Incorporá testimonios reales de clientes y fotos auténticas de tu negocio — humanizan tu marca para visitantes y son señales de confianza que los sistemas de IA valoran.');
    if (data.showsPricing !== 'yes') recs.push('Agregá precios iniciales o rangos de precios — reducir la ambigüedad de precios aumenta la confianza y reduce la fricción que lleva a los clientes a buscar en otro lado.');
    if (data.hasBookingCTA !== 'yes') recs.push('Colocá un CTA de cotización o reserva visible above the fold en cada página clave para que los clientes puedan actuar de inmediato.');
    if (data.publishesContent !== 'yes') recs.push('Publicá contenido educativo útil que responda preguntas frecuentes de tu rubro — los sistemas de IA aprenden de y referencian contenido local con autoridad.');
    if (data.hasThirdPartyProof !== 'yes') recs.push('Recopilá y mostrá reseñas de Yelp, Facebook, Houzz u otros directorios del rubro — la prueba social de terceros amplifica tu confiabilidad como opción recomendable.');
    if (!data.googleBusinessUrl.trim()) recs.push('Reclamá y completá al 100% tu Google Business Profile — es la señal de IA local más importante que podés controlar directamente.');
    return recs.slice(0, 7);
  },
  en: (data) => {
    const recs: string[] = [];
    if (data.hasFAQs !== 'yes') recs.push('Add an FAQ section that answers exactly what customers ask before buying — it\'s one of the highest-value signals for being considered in AI recommendations.');
    if (data.hasSeparateServicePages !== 'yes') recs.push('Create a dedicated page for each main service so AI systems can understand your full offering and surface the right page in recommendations.');
    if (data.mentionsServiceAreas !== 'yes') recs.push('Clearly list every neighborhood, city, and region where you provide services — AI assistants use this information to match businesses with local queries.');
    const count = parseInt(data.reviewCount, 10) || 0;
    if (count < 30) recs.push('Build a review acquisition flow — send follow-up messages to satisfied customers asking them to leave a review on Google.');
    if (data.hasSchema !== 'yes') recs.push('Add LocalBusiness and Service schema markup so search engines and AI tools can read your information in a structured format — directly improving your visibility in recommendations.');
    if (data.hasTestimonials !== 'yes' || data.hasLocalPhotos !== 'yes') recs.push('Add real customer testimonials and authentic photos of your business — they humanize your brand for visitors and are trust signals that AI systems value.');
    if (data.showsPricing !== 'yes') recs.push('Add starting prices or price ranges — reducing price ambiguity builds trust and reduces the friction that leads customers to look elsewhere.');
    if (data.hasBookingCTA !== 'yes') recs.push('Place a visible quote or booking CTA above the fold on each key page so customers can take action immediately.');
    if (data.publishesContent !== 'yes') recs.push('Publish useful educational content that answers common questions in your industry — AI systems learn from and reference authoritative local content.');
    if (data.hasThirdPartyProof !== 'yes') recs.push('Collect and display reviews from Yelp, Facebook, Houzz, or other industry directories — third-party social proof amplifies your credibility as a recommendable option.');
    if (!data.googleBusinessUrl.trim()) recs.push('Claim and complete your Google Business Profile 100% — it\'s the single most important local AI signal you can directly control.');
    return recs.slice(0, 7);
  },
};

const statusLabels: Record<Language, (score: number) => { label: string; color: string }> = {
  es: (score) => {
    if (score >= 85) return { label: 'Alta visibilidad — listo para ser recomendado por IA', color: 'emerald' };
    if (score >= 70) return { label: 'Buena visibilidad, pero faltan señales clave de recomendación', color: 'blue' };
    if (score >= 50) return { label: 'Visible, pero aún no recomendable por IA', color: 'yellow' };
    if (score >= 30) return { label: 'Baja visibilidad en recomendaciones de IA', color: 'orange' };
    return { label: 'Visibilidad muy baja — casi invisible para la IA', color: 'red' };
  },
  en: (score) => {
    if (score >= 85) return { label: 'High visibility — ready to be recommended by AI', color: 'emerald' };
    if (score >= 70) return { label: 'Good visibility, but missing key recommendation signals', color: 'blue' };
    if (score >= 50) return { label: 'Visible, but not yet AI-recommendable', color: 'yellow' };
    if (score >= 30) return { label: 'Low AI recommendation visibility', color: 'orange' };
    return { label: 'Very low visibility — nearly invisible to AI', color: 'red' };
  },
};

const summaries: Record<Language, (score: number, name: string) => string> = {
  es: (score, businessName) => {
    const name = businessName.trim() || 'Tu negocio';
    if (score >= 85) return `${name} está bien posicionado para ser considerado en recomendaciones de IA. Tenés señales sólidas en completitud de perfil, confianza y claridad de contenido. Seguí fortaleciendo tu contenido y datos estructurados para mantener esa ventaja.`;
    if (score >= 70) return `${name} tiene una base sólida pero le faltan algunas señales clave de recomendación que tus competidores pueden tener. Cerrar esas brechas podría llevarte de ser visible a ser recomendado activamente por sistemas de IA.`;
    if (score >= 50) return `${name} es encontrable pero poco claro para los sistemas de IA. Los clientes que buscan a través de asistentes de IA pueden ver tu nombre, pero les faltan las señales de confianza para elegirte. Mejoras focalizadas tendrán impacto inmediato en tu visibilidad en recomendaciones.`;
    if (score >= 30) return `Los sistemas de IA tienen dificultades para entender y considerar a ${name} en recomendaciones. Tenés presencia básica, pero señales débiles de confianza, claridad y estructura hacen fácil que los competidores sean recomendados primero.`;
    return `${name} tiene visibilidad muy baja en recomendaciones de IA. Sin señales claras, los asistentes de IA y motores de búsqueda no pueden entender ni recomendar tu negocio de forma confiable. Un plan de mejora estructurado es esencial.`;
  },
  en: (score, businessName) => {
    const name = businessName.trim() || 'Your business';
    if (score >= 85) return `${name} is well-positioned to be considered in AI recommendations. You have strong signals across profile completeness, trust, and content clarity. Keep strengthening your content and structured data to maintain that advantage.`;
    if (score >= 70) return `${name} has a solid foundation but is missing some key recommendation signals that your competitors may have. Closing those gaps could move you from being visible to being actively recommended by AI systems.`;
    if (score >= 50) return `${name} is findable but unclear to AI systems. Customers searching via AI assistants may see your name, but they lack the trust signals to choose you. Focused improvements will have immediate impact on your recommendation visibility.`;
    if (score >= 30) return `AI systems struggle to understand and consider ${name} in recommendations. You have basic presence, but weak trust, clarity, and structure signals make it easy for competitors to be recommended first.`;
    return `${name} has very low AI recommendation visibility. Without clear signals, AI assistants and search engines can't reliably understand or recommend your business. A structured improvement plan is essential.`;
  },
};

const opportunities: Record<Language, (score: number) => string> = {
  es: (score) => {
    if (score >= 85) return 'Estás capturando la mayor parte del tráfico proveniente de recomendaciones de IA. Enfocate en mantener y expandir tu autoridad de contenido.';
    if (score >= 70) return 'Corregir 2–3 brechas clave podría llevarte a una visibilidad alta en recomendaciones de IA y aumentar notablemente los leads provenientes de IA.';
    if (score >= 50) return 'Los negocios con este puntaje suelen ver un aumento del 30–50% en consultas provenientes de recomendaciones de IA después de mejoras estructuradas.';
    if (score >= 30) return 'Hay una oportunidad significativa sin aprovechar. La mayoría de los negocios con este puntaje ven un aumento considerable en leads dentro de los 60 días de implementar mejoras.';
    return 'Tu oportunidad de mayor prioridad es establecer las bases correctas — una vez hecho, los resultados se van acumulando rápidamente.';
  },
  en: (score) => {
    if (score >= 85) return 'You\'re capturing most traffic from AI recommendations. Focus on maintaining and expanding your content authority.';
    if (score >= 70) return 'Fixing 2–3 key gaps could move you to high AI recommendation visibility and notably increase AI-sourced leads.';
    if (score >= 50) return 'Businesses at this score typically see a 30–50% increase in inquiries from AI recommendations after structured improvements.';
    if (score >= 30) return 'There\'s a significant untapped opportunity. Most businesses at this score see a notable increase in leads within 60 days of implementing improvements.';
    return 'Your highest-priority opportunity is getting the right foundations in place — once done, results compound quickly.';
  },
};

export function computeScore(data: ScanFormData, language: Language = 'es'): ScanResult {
  const lang = language;
  const cats = [
    profileScore(data, lang),
    reviewScore(data, lang),
    websiteScore(data, lang),
    conversionScore(data, lang),
    contentScore(data, lang),
    proofScore(data, lang),
    techScore(data, lang),
  ];

  const totalScore = Math.min(100, cats.reduce((sum, c) => sum + c.score, 0));
  const { label, color } = statusLabels[lang](totalScore);
  const recs = recommendations[lang](data);

  return {
    totalScore,
    statusLabel: label,
    statusColor: color,
    categories: cats,
    recommendations: recs,
    summary: summaries[lang](totalScore, data.businessName),
    priorityFixes: recs.slice(0, 5),
    estimatedOpportunity: opportunities[lang](totalScore),
  };
}
