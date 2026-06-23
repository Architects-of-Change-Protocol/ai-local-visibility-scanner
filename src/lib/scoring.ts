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
    recs.push('Agregá una sección de preguntas frecuentes que responda exactamente lo que los clientes preguntan antes de comprar — es una de las señales de mayor valor para ser considerado en recomendaciones de IA.');
  }
  if (data.hasSeparateServicePages !== 'yes') {
    recs.push('Creá una página dedicada para cada servicio principal para que los sistemas de IA puedan entender tu oferta completa y mostrar la página correcta en recomendaciones.');
  }
  if (data.mentionsServiceAreas !== 'yes') {
    recs.push('Listá claramente cada barrio, ciudad y región donde prestás servicios — los asistentes de IA usan esta información para vincular negocios con consultas locales.');
  }
  const count = parseInt(data.reviewCount, 10) || 0;
  if (count < 30) {
    recs.push('Desarrollá un flujo de captación de reseñas — enviá mensajes de seguimiento a clientes satisfechos pidiéndoles que dejen una reseña en Google.');
  }
  if (data.hasSchema !== 'yes') {
    recs.push('Agregá schema markup de LocalBusiness y Service para que los motores de búsqueda y herramientas de IA puedan leer tu información de forma estructurada — mejora directamente tu visibilidad en recomendaciones.');
  }
  if (data.hasTestimonials !== 'yes' || data.hasLocalPhotos !== 'yes') {
    recs.push('Incorporá testimonios reales de clientes y fotos auténticas de tu negocio — humanizan tu marca para visitantes y son señales de confianza que los sistemas de IA valoran.');
  }
  if (data.showsPricing !== 'yes') {
    recs.push('Agregá precios iniciales o rangos de precios — reducir la ambigüedad de precios aumenta la confianza y reduce la fricción que lleva a los clientes a buscar en otro lado.');
  }
  if (data.hasBookingCTA !== 'yes') {
    recs.push('Colocá un CTA de cotización o reserva visible above the fold en cada página clave para que los clientes puedan actuar de inmediato.');
  }
  if (data.publishesContent !== 'yes') {
    recs.push('Publicá contenido educativo útil que responda preguntas frecuentes de tu rubro — los sistemas de IA aprenden de y referencian contenido local con autoridad.');
  }
  if (data.hasThirdPartyProof !== 'yes') {
    recs.push('Recopilá y mostrá reseñas de Yelp, Facebook, Houzz u otros directorios del rubro — la prueba social de terceros amplifica tu confiabilidad como opción recomendable.');
  }
  if (!data.googleBusinessUrl.trim()) {
    recs.push('Reclamá y completá al 100% tu Google Business Profile — es la señal de IA local más importante que podés controlar directamente.');
  }

  return recs.slice(0, 7);
}

function buildPriorityFixes(recs: string[]): string[] {
  return recs.slice(0, 5);
}

function statusLabel(score: number): { label: string; color: string } {
  if (score >= 85) return { label: 'Alta visibilidad — listo para ser recomendado por IA', color: 'emerald' };
  if (score >= 70) return { label: 'Buena visibilidad, pero faltan señales clave de recomendación', color: 'blue' };
  if (score >= 50) return { label: 'Visible, pero aún no recomendable por IA', color: 'yellow' };
  if (score >= 30) return { label: 'Baja visibilidad en recomendaciones de IA', color: 'orange' };
  return { label: 'Visibilidad muy baja — casi invisible para la IA', color: 'red' };
}

function buildSummary(score: number, businessName: string): string {
  const name = businessName.trim() || 'Tu negocio';
  if (score >= 85) {
    return `${name} está bien posicionado para ser considerado en recomendaciones de IA. Tenés señales sólidas en completitud de perfil, confianza y claridad de contenido. Seguí fortaleciendo tu contenido y datos estructurados para mantener esa ventaja.`;
  }
  if (score >= 70) {
    return `${name} tiene una base sólida pero le faltan algunas señales clave de recomendación que tus competidores pueden tener. Cerrar esas brechas podría llevarte de ser visible a ser recomendado activamente por sistemas de IA.`;
  }
  if (score >= 50) {
    return `${name} es encontrable pero poco claro para los sistemas de IA. Los clientes que buscan a través de asistentes de IA pueden ver tu nombre, pero les faltan las señales de confianza para elegirte. Mejoras focalizadas tendrán impacto inmediato en tu visibilidad en recomendaciones.`;
  }
  if (score >= 30) {
    return `Los sistemas de IA tienen dificultades para entender y considerar a ${name} en recomendaciones. Tenés presencia básica, pero señales débiles de confianza, claridad y estructura hacen fácil que los competidores sean recomendados primero.`;
  }
  return `${name} tiene visibilidad muy baja en recomendaciones de IA. Sin señales claras, los asistentes de IA y motores de búsqueda no pueden entender ni recomendar tu negocio de forma confiable. Un plan de mejora estructurado es esencial.`;
}

function estimatedOpportunity(score: number): string {
  if (score >= 85) return 'Estás capturando la mayor parte del tráfico proveniente de recomendaciones de IA. Enfocate en mantener y expandir tu autoridad de contenido.';
  if (score >= 70) return 'Corregir 2–3 brechas clave podría llevarte a una visibilidad alta en recomendaciones de IA y aumentar notablemente los leads provenientes de IA.';
  if (score >= 50) return 'Los negocios con este puntaje suelen ver un aumento del 30–50% en consultas provenientes de recomendaciones de IA después de mejoras estructuradas.';
  if (score >= 30) return 'Hay una oportunidad significativa sin aprovechar. La mayoría de los negocios con este puntaje ven un aumento considerable en leads dentro de los 60 días de implementar mejoras.';
  return 'Tu oportunidad de mayor prioridad es establecer las bases correctas — una vez hecho, los resultados se van acumulando rápidamente.';
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
