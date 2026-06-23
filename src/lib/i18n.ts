export type Language = 'es' | 'en';

export const translations = {
  es: {
    header: {
      logoSub: 'Recomendaciones de IA',
      nav: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Cómo funciona', href: '#how-it-works' },
        { label: 'Escaneo', href: '#scanner' },
        { label: 'Precios', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Ver mi resultado — $30',
    },
    hero: {
      badge: 'Escaneo de Visibilidad en Recomendaciones de IA',
      headline1: '¿Tu negocio aparece como una',
      headlineHighlight: 'opción recomendable',
      headline2: 'para la IA?',
      subheadline:
        'Descubrí en menos de 2 minutos si tu presencia digital tiene las señales de claridad, confianza y relevancia que ayudan a que sistemas de IA puedan entender, comparar y considerar tu negocio en recomendaciones.',
      primaryCta: 'Escanear mi negocio',
      secondaryCta: 'Ver ejemplo de reporte',
      trustLine: 'Completá el escaneo y desbloqueá tu resultado por $30.',
      mockReport: {
        label: 'Ejemplo de reporte',
        business: 'Clínica dental',
        status: 'Visible, pero aún no recomendable por IA',
        weakLabel: 'Áreas débiles:',
        weakAreas: ['Prueba local', 'Claridad de servicios', 'FAQs', 'Datos estructurados'],
        categories: [
          { label: 'Perfil', score: 10, max: 15 },
          { label: 'Reseñas', score: 9, max: 15 },
          { label: 'Sitio web', score: 8, max: 20 },
          { label: 'Contenido', score: 5, max: 15 },
        ],
      },
    },
    whyNow: {
      eyebrow: 'Por qué importa ahora',
      headline1: 'La forma en que los clientes encuentran negocios',
      headlineHighlight: 'cambió fundamentalmente',
      subheadline:
        'Los asistentes de IA se convirtieron en la nueva primera página del descubrimiento local. La mayoría de los negocios no están listos — y no lo saben.',
      stats: [
        { value: '60%+', label: 'de las búsquedas ya tienen respuestas generadas por IA' },
        { value: '3×', label: 'más probable que elijan negocios recomendados por IA' },
        { value: '2025', label: 'el año en que la IA cambió la búsqueda local para siempre' },
      ],
      shifts: [
        {
          title: 'De resultados de búsqueda a resúmenes de IA',
          body: 'Los clientes ya no revisan diez links. Le hacen una pregunta a un asistente de IA y reciben una respuesta curada — usualmente con uno o dos negocios.',
        },
        {
          title: 'La IA lee tus señales, no tus intenciones',
          body: 'Los sistemas de IA evalúan negocios basándose en información estructurada: qué ofrecés, dónde, a quién servís, qué dicen los clientes y si tus datos son claros y consistentes.',
        },
        {
          title: 'Las conversaciones reemplazan las búsquedas por palabras clave',
          body: '"Mejor dentista cerca de mí que atienda sábados con buenas reseñas" — así buscan los clientes hoy. Tu negocio necesita ser considerado en esas consultas complejas y ricas en intención.',
        },
        {
          title: 'Los que ganan obtienen ventajas que se acumulan',
          body: 'Los negocios con señales fuertes de visibilidad son citados, resumidos y recomendados más seguido — lo que construye reputación, reseñas y más citas de IA con el tiempo.',
        },
      ],
    },
    pain: {
      eyebrow: 'El problema',
      headline1: 'Cuatro razones por las que la IA está',
      headlineHighlight: 'dejando negocios afuera',
      subheadline:
        'La mayoría de los negocios locales no saben cómo los evalúan los sistemas de IA — ni que ya están perdiendo clientes frente a competidores mejor posicionados.',
      cards: [
        {
          title: 'Los clientes le piden recomendaciones a la IA',
          body: 'En lugar de buscar en Google, millones de clientes ahora le preguntan a ChatGPT, Gemini, Perplexity o Siri: "¿Quién es el mejor plomero cerca de mí?" Tu negocio necesita aparecer como una opción recomendable.',
        },
        {
          title: 'La IA resume en lugar de mostrar links',
          body: 'Las herramientas de IA no listan diez opciones. Eligen una o dos, explican por qué son confiables y las presentan como la respuesta. Si no sos claro, no sos elegido.',
        },
        {
          title: 'Los negocios poco claros son ignorados',
          body: 'Si tu sitio web, perfil de Google y contenido no explican claramente qué hacés, a quién servís y dónde — los sistemas de IA pasan al competidor que sí lo hace.',
        },
        {
          title: 'Las señales de confianza importan más que nunca',
          body: 'Los sistemas de IA evalúan reseñas, datos estructurados, información NAP consistente y descripciones de servicios claras. Que falte alguna de estas señales es una barrera que te cuesta recomendaciones.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'Cómo funciona',
      headline1: 'Tu puntaje de visibilidad en recomendaciones de IA',
      headlineHighlight: 'en tres pasos',
      subheadline:
        'Sin configuración técnica. Solo respondés las preguntas y obtenés un reporte claro y accionable.',
      steps: [
        {
          title: 'Ingresá los datos de tu negocio',
          body: 'Respondé 20 preguntas rápidas sobre tu presencia digital, reseñas, estructura del sitio web y contenido. No se requiere conocimiento técnico.',
        },
        {
          title: 'Obtenés tu Puntaje de Visibilidad en Recomendaciones de IA',
          body: 'Nuestro modelo de puntaje evalúa 7 dimensiones de visibilidad en recomendaciones y te da un score claro del 0 al 100 con el desglose de dónde estás parado.',
        },
        {
          title: 'Recibís un plan de acción práctico',
          body: 'Obtené recomendaciones priorizadas y específicas según tus respuestas — para que sepas exactamente qué mejorar primero para mayor impacto en tu visibilidad.',
        },
      ],
    },
    scanner: {
      eyebrow: 'Escaneo de Visibilidad en Recomendaciones de IA',
      headline1: 'Completá el formulario y',
      headlineHighlight: 'desbloqueá tu resultado',
      subheadline: 'Completá el formulario y desbloqueá tu resultado por $30.',
      cancelledNotice: 'El pago fue cancelado. Podés intentarlo de nuevo cuando querás.',
      sections: {
        a: { label: 'Sección A', title: 'Datos del negocio' },
        b: { label: 'Sección B', title: 'Señales de confianza' },
        c: { label: 'Sección C', title: 'Señales de búsqueda local' },
        d: { label: 'Sección D', title: 'Preparación para IA' },
      },
      fields: {
        businessName: {
          label: 'Nombre del negocio',
          placeholder: 'ej. Escazú Dental Studio',
          hint: 'El nombre exacto que los clientes ven en Google.',
        },
        city: {
          label: 'Ciudad / Mercado',
          placeholder: 'ej. San José, Costa Rica',
          hint: 'Ciudad principal donde atendés clientes.',
        },
        category: {
          label: 'Categoría del negocio',
          placeholder: 'Seleccioná una categoría…',
          hint: 'Elegí la categoría que mejor representa tu negocio.',
        },
        websiteUrl: {
          label: 'URL del sitio web',
          placeholder: 'https://tunegocio.com',
          hint: 'Dejá vacío si no tenés sitio web.',
        },
        googleBusinessUrl: {
          label: 'URL de Google Business Profile',
          placeholder: 'https://g.page/tunegocio',
          hint: 'Tu URL de Google Maps / Google Business.',
        },
        contactLink: {
          label: 'WhatsApp o link de contacto',
          placeholder: 'https://wa.me/1234567890',
          hint: 'WhatsApp, link de teléfono o URL de contacto directo.',
        },
        reviewCount: {
          label: 'Cantidad de reseñas de Google',
          placeholder: 'ej. 47',
          hint: 'Cantidad aproximada en tu Google Business Profile.',
        },
        averageRating: {
          label: 'Calificación promedio',
          placeholder: 'ej. 4.7',
          hint: 'Tu calificación actual en Google (sobre 5).',
        },
        hasTestimonials: {
          label: '¿Mostrás testimonios reales de clientes en tu sitio web?',
          hint: 'Testimonios escritos o en video de clientes con nombre.',
        },
        hasLocalPhotos: {
          label: '¿Tenés fotos del local o del equipo en tu sitio web?',
          hint: 'Fotos reales de tu espacio, equipo o trabajo — no imágenes de stock.',
        },
        hasThirdPartyProof: {
          label: '¿Tenés prueba social de plataformas de terceros?',
          hint: 'Yelp, Facebook, Houzz, TripAdvisor u otros directorios del rubro.',
        },
        hasServicesPage: {
          label: '¿Tenés una página clara de servicios?',
          hint: 'Una página que lista y explica claramente qué ofrecés.',
        },
        hasSeparateServicePages: {
          label: '¿Tenés páginas separadas para cada servicio principal?',
          hint: 'Páginas individuales como /blanqueamiento, /reparacion-hvac, /derecho-familiar.',
        },
        mentionsServiceAreas: {
          label: '¿Mencionás claramente tus áreas de servicio?',
          hint: 'Barrios, ciudades o regiones donde operás, listados en tu sitio.',
        },
        showsPricing: {
          label: '¿Mostrás precios o precios iniciales?',
          hint: 'Incluso rangos de precio reducen la fricción y mejoran la claridad para la IA.',
        },
        hasFAQs: {
          label: '¿Tenés preguntas frecuentes (FAQs) en tu sitio web?',
          hint: 'Una sección de FAQ que responde preguntas comunes antes de la compra.',
        },
        publishesContent: {
          label: '¿Publicás contenido educativo útil?',
          hint: 'Posts de blog, guías o artículos que ayudan a los clientes a tomar decisiones.',
        },
        hasBookingCTA: {
          label: '¿Tenés un CTA de reserva o solicitud de cotización?',
          hint: 'Un botón de acción claro above the fold (reservar, cotizar, contactar).',
        },
        hasSchema: {
          label: '¿Tenés schema / datos estructurados?',
          hint: 'Schema markup de LocalBusiness, Service o FAQ en el código de tu sitio.',
        },
      },
      yesLabel: 'Sí',
      noLabel: 'No',
      unknownLabel: 'No sé',
      errors: {
        businessName: 'El nombre del negocio es requerido.',
        city: 'La ciudad es requerida.',
        category: 'Por favor seleccioná una categoría.',
      },
      submitButton: 'Ver mi resultado — $30',
      submitLoading: 'Redirigiendo al pago…',
      trustLine: 'Pago seguro con Stripe. El resultado se muestra después del pago.',
      checkoutError: 'No se pudo iniciar el pago. Por favor intentá de nuevo.',
      connectionError: 'Error de conexión. Por favor intentá de nuevo.',
    },
    scoreResult: {
      eyebrow: 'Tus resultados',
      headline: 'Puntaje de Visibilidad en Recomendaciones de IA',
      breakdownTitle: 'Desglose del puntaje',
      recommendationsTitle: 'Acciones recomendadas',
      recommendationsSubtitle: 'Priorizadas según tus respuestas — las mejoras de mayor impacto primero.',
      opportunityTitle: 'Oportunidad estimada',
      upsellTitle: '¿Querés que implementemos las mejoras?',
      upsellBody:
        'Ya tenés el diagnóstico. Podemos ayudarte a convertir estas prioridades en mejoras concretas para que tu negocio sea más claro, confiable y visible en recomendaciones de IA.',
      proAuditCta: 'Agendar Auditoría Pro — $99',
      implementationCta: 'Cotizar Implementación',
      whatsappCta: 'Enviar resultado por WhatsApp',
    },
    sampleReport: {
      eyebrow: 'Ejemplo de reporte',
      headline1: 'Mirá cómo se ve un',
      headlineHighlight: 'escaneo real',
      subheadline:
        'Este es un ejemplo de reporte para una clínica dental local — un caso común: negocios consolidados que son encontrables pero aún no están listos para ser recomendados por IA.',
      scoreLabel: 'Puntaje de Visibilidad en Recomendaciones de IA',
      businessName: 'Escazú Dental Studio',
      businessMeta: 'San José, Costa Rica · Clínica dental',
      status: 'Visible, pero aún no recomendable por IA',
      breakdownTitle: 'Desglose del puntaje',
      strengthsTitle: 'Lo que está funcionando',
      weaknessesTitle: 'Áreas débiles',
      summaryLabel: 'Resumen',
      summaryText:
        'Escazú Dental Studio tiene señales de reseñas sólidas y un perfil de Google completo, pero carece del contenido estructurado y las señales legibles por IA que permitirían a los asistentes de IA recomendarlo con confianza. Mejoras focalizadas en páginas de servicios, contenido FAQ y schema podrían mover este puntaje a 82+ en 30 días.',
      categories: [
        { label: 'Perfil del negocio', score: 12, maxScore: 15 },
        { label: 'Confianza en reseñas', score: 13, maxScore: 15 },
        { label: 'Claridad del sitio web', score: 10, maxScore: 20 },
        { label: 'Preparación para conversión', score: 5, maxScore: 10 },
        { label: 'Utilidad del contenido', score: 7, maxScore: 15 },
        { label: 'Prueba y autenticidad', score: 10, maxScore: 15 },
        { label: 'Preparación técnica para IA', score: 5, maxScore: 10 },
      ],
      strengths: [
        'Google Business Profile completo con fotos',
        '87 reseñas de Google con promedio de 4.8 estrellas',
        'Página de servicios clara con los tratamientos principales',
      ],
      weaknesses: [
        'Sin páginas dedicadas por servicio (ej. /blanqueamiento, /implantes-dentales)',
        'Sin sección de FAQ que responda preguntas previas a la consulta',
        'Buenas reseñas de Google pero ninguna usada como testimonio en el sitio web',
        'Sin página clara de área de cobertura geográfica',
        'Sin schema de LocalBusiness o Service detectado',
      ],
    },
    pricing: {
      eyebrow: 'Precios',
      headline1: 'De la visibilidad a la',
      headlineHighlight: 'implementación',
      subheadline: 'Empezá con el escaneo y sumá apoyo según lo que necesitás para mejorar.',
      plans: [
        {
          name: 'Escaneo Inicial',
          price: '$30',
          badge: 'Punto de entrada',
          description: 'Completá el formulario y desbloqueá tu resultado',
          features: [
            'Puntaje de Visibilidad en Recomendaciones de IA',
            'Señales fuertes y débiles',
            'Prioridades recomendadas',
            'Plan inicial de mejora',
            'Resultado desbloqueado después del pago',
          ],
          cta: 'Escanear mi negocio — $30',
        },
        {
          name: 'Auditoría Pro',
          price: '$99',
          badge: 'Más popular',
          description: 'Para negocios locales que toman en serio su visibilidad',
          features: [
            'Revisión manual del sitio web y Google Business Profile',
            'Comparación con competidores',
            'Recomendaciones personalizadas',
            'Video explicativo',
            'Seguimiento a 30 días',
          ],
          cta: 'Reservar Auditoría Pro',
        },
        {
          name: 'Implementación Completa',
          price: 'desde $499',
          badge: null,
          description: 'Para negocios que quieren que alguien más lo haga',
          features: [
            'Mejoras de copy en el sitio web',
            'Sección de preguntas frecuentes',
            'Páginas de servicios locales',
            'Mejoras de CTA',
            'Recomendaciones de contenido estructurado',
            'Configuración de schema markup',
          ],
          cta: 'Cotizar Implementación',
        },
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      headline1: 'Preguntas frecuentes,',
      headlineHighlight: 'respuestas honestas',
      items: [
        {
          q: '¿Esto garantiza que ChatGPT va a recomendar mi negocio?',
          a: 'No. El escaneo ayuda a identificar las señales que hacen tu negocio más claro, confiable y fácil de entender para sistemas de IA. Ninguna herramienta puede garantizar que un sistema de IA te recomiende — esa determinación la toma la IA. Lo que sí podemos hacer es ayudarte a eliminar las barreras que hacen que la IA ignore o malinterprete tu negocio.',
        },
        {
          q: '¿Esto es SEO?',
          a: 'Incluye fundamentos de SEO, pero el enfoque va más allá. La visibilidad en recomendaciones de IA se trata de claridad, confianza, información estructurada y responder preguntas reales de los clientes — no solo de rankear por palabras clave. Pensalo como la siguiente capa sobre el SEO local tradicional.',
        },
        {
          q: '¿Necesito un sitio web nuevo?',
          a: 'Casi nunca. Muchas de las mejoras de mayor impacto — agregar FAQs, testimonios, detalles del área de servicio, rangos de precios y schema markup — se pueden incorporar al sitio web que ya tenés sin necesidad de un rediseño. Un sitio nuevo rara vez es la primera prioridad.',
        },
        {
          q: '¿Las agencias pueden usar esta herramienta?',
          a: 'Sí. Las agencias pueden usar el Escaneo de Visibilidad en Recomendaciones de IA como herramienta de generación de leads y diagnóstico para clientes locales. Corré un escaneo durante una llamada de ventas para demostrar de inmediato las brechas y oportunidades. Nuestros planes Pro y de Implementación Completa están diseñados para flujos de trabajo de agencias.',
        },
        {
          q: '¿Cuánto tarda el escaneo?',
          a: 'Menos de 2 minutos. El formulario hace 20 preguntas de sí/no y de completar sobre tu presencia digital actual. Sin integraciones, sin configuración técnica. Tu resultado se desbloquea después del pago.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'No esperes más',
      headline1: 'No dejes que la IA',
      headlineHighlight: 'malinterprete',
      headline2: 'tu negocio.',
      body: 'Cada día sin señales claras es un día en que tus competidores son considerados como opciones recomendables y vos no. Menos de 2 minutos para saber dónde estás parado.',
      cta: 'Escanear mi negocio — $30',
      trustLine: 'Pago seguro con Stripe. Resultado desbloqueado después del pago.',
    },
    footer: {
      logoSub: 'AI Recommendation Visibility Scan',
      tagline:
        'Escaneo de Visibilidad en Recomendaciones de IA para negocios que quieren ser más fáciles de entender, comparar y considerar por sistemas de inteligencia artificial.',
      nav: [
        { label: 'Inicio', href: '#hero' },
        { label: 'Cómo funciona', href: '#how-it-works' },
        { label: 'Escaneo', href: '#scanner' },
        { label: 'Precios', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      disclaimer:
        'Este escaneo es educativo y orientativo. No garantiza posiciones, rankings, menciones, citas o recomendaciones en ningún buscador, plataforma o sistema de inteligencia artificial.',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    header: {
      logoSub: 'AI Recommendations',
      nav: [
        { label: 'Home', href: '#hero' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Scan', href: '#scanner' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'View my result — $30',
    },
    hero: {
      badge: 'AI Recommendation Visibility Scan',
      headline1: 'Is your business visible as a',
      headlineHighlight: 'recommendable option',
      headline2: 'for AI?',
      subheadline:
        'Find out in under 2 minutes whether your digital presence has the clarity, trust, and relevance signals that help AI systems understand, compare, and consider your business in recommendations.',
      primaryCta: 'Scan my business',
      secondaryCta: 'View sample report',
      trustLine: 'Complete the scan and unlock your result for $30.',
      mockReport: {
        label: 'Sample report',
        business: 'Dental clinic',
        status: 'Visible, but not yet AI-recommendable',
        weakLabel: 'Weak areas:',
        weakAreas: ['Local proof', 'Service clarity', 'FAQs', 'Structured data'],
        categories: [
          { label: 'Profile', score: 10, max: 15 },
          { label: 'Reviews', score: 9, max: 15 },
          { label: 'Website', score: 8, max: 20 },
          { label: 'Content', score: 5, max: 15 },
        ],
      },
    },
    whyNow: {
      eyebrow: 'Why it matters now',
      headline1: 'The way customers find businesses has',
      headlineHighlight: 'fundamentally changed',
      subheadline:
        'AI assistants have become the new front page of local discovery. Most businesses aren\'t ready — and they don\'t know it.',
      stats: [
        { value: '60%+', label: 'of searches already have AI-generated answers' },
        { value: '3×', label: 'more likely to choose AI-recommended businesses' },
        { value: '2025', label: 'the year AI changed local search forever' },
      ],
      shifts: [
        {
          title: 'From search results to AI summaries',
          body: 'Customers no longer scroll ten links. They ask an AI assistant and receive a curated answer — usually featuring one or two businesses.',
        },
        {
          title: 'AI reads your signals, not your intentions',
          body: 'AI systems evaluate businesses based on structured information: what you offer, where, who you serve, what customers say, and whether your data is clear and consistent.',
        },
        {
          title: 'Conversations replace keyword searches',
          body: '"Best dentist near me open Saturdays with great reviews" — that\'s how customers search today. Your business needs to be considered in those complex, intent-rich queries.',
        },
        {
          title: 'Winners get compounding advantages',
          body: 'Businesses with strong visibility signals get cited, summarized, and recommended more often — building reputation, reviews, and more AI citations over time.',
        },
      ],
    },
    pain: {
      eyebrow: 'The problem',
      headline1: 'Four reasons AI is',
      headlineHighlight: 'leaving businesses out',
      subheadline:
        'Most local businesses don\'t know how AI systems evaluate them — or that they\'re already losing customers to better-positioned competitors.',
      cards: [
        {
          title: 'Customers ask AI for recommendations',
          body: 'Instead of Googling, millions of customers now ask ChatGPT, Gemini, Perplexity, or Siri: "Who\'s the best plumber near me?" Your business needs to show up as a recommendable option.',
        },
        {
          title: 'AI summarizes instead of listing links',
          body: 'AI tools don\'t list ten options. They pick one or two, explain why they\'re trustworthy, and present them as the answer. If you\'re not clear, you\'re not chosen.',
        },
        {
          title: 'Unclear businesses get ignored',
          body: 'If your website, Google profile, and content don\'t clearly explain what you do, who you serve, and where — AI systems move on to the competitor that does.',
        },
        {
          title: 'Trust signals matter more than ever',
          body: 'AI systems evaluate reviews, structured data, consistent NAP information, and clear service descriptions. Missing any of these signals is a barrier that costs you recommendations.',
        },
      ],
    },
    howItWorks: {
      eyebrow: 'How it works',
      headline1: 'Your AI recommendation visibility score',
      headlineHighlight: 'in three steps',
      subheadline:
        'No technical setup. Just answer the questions and get a clear, actionable report.',
      steps: [
        {
          title: 'Enter your business details',
          body: 'Answer 20 quick questions about your digital presence, reviews, website structure, and content. No technical knowledge required.',
        },
        {
          title: 'Get your AI Recommendation Visibility Score',
          body: 'Our scoring model evaluates 7 visibility dimensions and gives you a clear score from 0 to 100 with a breakdown of exactly where you stand.',
        },
        {
          title: 'Receive a practical action plan',
          body: 'Get prioritized, specific recommendations based on your answers — so you know exactly what to improve first for maximum visibility impact.',
        },
      ],
    },
    scanner: {
      eyebrow: 'AI Recommendation Visibility Scan',
      headline1: 'Complete the form and',
      headlineHighlight: 'unlock your result',
      subheadline: 'Complete the form and unlock your result for $30.',
      cancelledNotice: 'Payment was cancelled. You can try again whenever you\'re ready.',
      sections: {
        a: { label: 'Section A', title: 'Business details' },
        b: { label: 'Section B', title: 'Trust signals' },
        c: { label: 'Section C', title: 'Local search signals' },
        d: { label: 'Section D', title: 'AI readiness' },
      },
      fields: {
        businessName: {
          label: 'Business name',
          placeholder: 'e.g. Escazú Dental Studio',
          hint: 'The exact name customers see on Google.',
        },
        city: {
          label: 'City / Market',
          placeholder: 'e.g. San José, Costa Rica',
          hint: 'Your primary city where you serve customers.',
        },
        category: {
          label: 'Business category',
          placeholder: 'Select a category…',
          hint: 'Choose the category that best represents your business.',
        },
        websiteUrl: {
          label: 'Website URL',
          placeholder: 'https://yourbusiness.com',
          hint: 'Leave blank if you don\'t have a website.',
        },
        googleBusinessUrl: {
          label: 'Google Business Profile URL',
          placeholder: 'https://g.page/yourbusiness',
          hint: 'Your Google Maps / Google Business URL.',
        },
        contactLink: {
          label: 'WhatsApp or contact link',
          placeholder: 'https://wa.me/1234567890',
          hint: 'WhatsApp, phone link, or direct contact URL.',
        },
        reviewCount: {
          label: 'Number of Google reviews',
          placeholder: 'e.g. 47',
          hint: 'Approximate count on your Google Business Profile.',
        },
        averageRating: {
          label: 'Average rating',
          placeholder: 'e.g. 4.7',
          hint: 'Your current Google rating (out of 5).',
        },
        hasTestimonials: {
          label: 'Do you display real customer testimonials on your website?',
          hint: 'Written or video testimonials from named customers.',
        },
        hasLocalPhotos: {
          label: 'Do you have photos of your location or team on your website?',
          hint: 'Real photos of your space, team, or work — not stock images.',
        },
        hasThirdPartyProof: {
          label: 'Do you have social proof from third-party platforms?',
          hint: 'Yelp, Facebook, Houzz, TripAdvisor, or other industry directories.',
        },
        hasServicesPage: {
          label: 'Do you have a clear services page?',
          hint: 'A page that lists and clearly explains what you offer.',
        },
        hasSeparateServicePages: {
          label: 'Do you have separate pages for each main service?',
          hint: 'Individual pages like /teeth-whitening, /hvac-repair, /family-law.',
        },
        mentionsServiceAreas: {
          label: 'Do you clearly mention your service areas?',
          hint: 'Neighborhoods, cities, or regions where you operate, listed on your site.',
        },
        showsPricing: {
          label: 'Do you show prices or starting prices?',
          hint: 'Even price ranges reduce friction and improve clarity for AI.',
        },
        hasFAQs: {
          label: 'Do you have an FAQ section on your website?',
          hint: 'A FAQ section that answers common pre-purchase questions.',
        },
        publishesContent: {
          label: 'Do you publish useful educational content?',
          hint: 'Blog posts, guides, or articles that help customers make decisions.',
        },
        hasBookingCTA: {
          label: 'Do you have a booking or quote request CTA?',
          hint: 'A clear action button above the fold (book, quote, contact).',
        },
        hasSchema: {
          label: 'Do you have schema / structured data?',
          hint: 'LocalBusiness, Service, or FAQ schema markup in your site code.',
        },
      },
      yesLabel: 'Yes',
      noLabel: 'No',
      unknownLabel: 'Not sure',
      errors: {
        businessName: 'Business name is required.',
        city: 'City is required.',
        category: 'Please select a category.',
      },
      submitButton: 'View my result — $30',
      submitLoading: 'Redirecting to payment…',
      trustLine: 'Secure payment with Stripe. Result shown after payment.',
      checkoutError: 'Could not initiate payment. Please try again.',
      connectionError: 'Connection error. Please try again.',
    },
    scoreResult: {
      eyebrow: 'Your results',
      headline: 'AI Recommendation Visibility Score',
      breakdownTitle: 'Score breakdown',
      recommendationsTitle: 'Recommended actions',
      recommendationsSubtitle: 'Prioritized based on your answers — highest-impact improvements first.',
      opportunityTitle: 'Estimated opportunity',
      upsellTitle: 'Want us to implement the improvements?',
      upsellBody:
        'You have the diagnosis. We can help you turn these priorities into concrete improvements so your business is clearer, more trustworthy, and more visible in AI recommendations.',
      proAuditCta: 'Book Pro Audit — $99',
      implementationCta: 'Get Implementation Quote',
      whatsappCta: 'Share result via WhatsApp',
    },
    sampleReport: {
      eyebrow: 'Sample report',
      headline1: 'See what a',
      headlineHighlight: 'real scan looks like',
      subheadline:
        'This is a sample report for a local dental clinic — a common case: established businesses that are findable but not yet ready to be recommended by AI.',
      scoreLabel: 'AI Recommendation Visibility Score',
      businessName: 'Escazú Dental Studio',
      businessMeta: 'San José, Costa Rica · Dental clinic',
      status: 'Visible, but not yet AI-recommendable',
      breakdownTitle: 'Score breakdown',
      strengthsTitle: 'What\'s working',
      weaknessesTitle: 'Weak areas',
      summaryLabel: 'Summary',
      summaryText:
        'Escazú Dental Studio has strong review signals and a complete Google profile, but lacks the structured content and AI-readable signals that would allow AI assistants to recommend it with confidence. Focused improvements to service pages, FAQ content, and schema could move this score to 82+ within 30 days.',
      categories: [
        { label: 'Business Profile', score: 12, maxScore: 15 },
        { label: 'Review Trust', score: 13, maxScore: 15 },
        { label: 'Website Clarity', score: 10, maxScore: 20 },
        { label: 'Conversion Readiness', score: 5, maxScore: 10 },
        { label: 'Content Usefulness', score: 7, maxScore: 15 },
        { label: 'Proof & Authenticity', score: 10, maxScore: 15 },
        { label: 'Technical & AI Readiness', score: 5, maxScore: 10 },
      ],
      strengths: [
        'Complete Google Business Profile with photos',
        '87 Google reviews averaging 4.8 stars',
        'Clear services page listing main treatments',
      ],
      weaknesses: [
        'No dedicated pages per service (e.g. /teeth-whitening, /dental-implants)',
        'No FAQ section answering pre-consultation questions',
        'Good Google reviews but none used as testimonials on the website',
        'No clear geographic coverage / service area page',
        'No LocalBusiness or Service schema detected',
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      headline1: 'From visibility to',
      headlineHighlight: 'implementation',
      subheadline: 'Start with the scan and add support as needed to improve.',
      plans: [
        {
          name: 'Initial Scan',
          price: '$30',
          badge: 'Entry point',
          description: 'Complete the form and unlock your result',
          features: [
            'AI Recommendation Visibility Score',
            'Strong and weak signals',
            'Recommended priorities',
            'Initial improvement plan',
            'Result unlocked after payment',
          ],
          cta: 'Scan my business — $30',
        },
        {
          name: 'Pro Audit',
          price: '$99',
          badge: 'Most popular',
          description: 'For local businesses serious about their visibility',
          features: [
            'Manual website and Google Business Profile review',
            'Competitor comparison',
            'Personalized recommendations',
            'Explanatory video',
            '30-day follow-up',
          ],
          cta: 'Book Pro Audit',
        },
        {
          name: 'Full Implementation',
          price: 'from $499',
          badge: null,
          description: 'For businesses that want someone else to do it',
          features: [
            'Website copy improvements',
            'FAQ section',
            'Local service pages',
            'CTA improvements',
            'Structured content recommendations',
            'Schema markup setup',
          ],
          cta: 'Get Implementation Quote',
        },
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      headline1: 'Common questions,',
      headlineHighlight: 'honest answers',
      items: [
        {
          q: 'Does this guarantee ChatGPT will recommend my business?',
          a: 'No. The scan helps identify the signals that make your business clearer, more trustworthy, and easier to understand for AI systems. No tool can guarantee an AI system will recommend you — that determination is made by the AI. What we can do is help you remove the barriers that cause AI to ignore or misinterpret your business.',
        },
        {
          q: 'Is this just SEO?',
          a: 'It includes SEO fundamentals, but goes further. AI recommendation visibility is about clarity, trust, structured information, and answering real customer questions — not just ranking for keywords. Think of it as the next layer on top of traditional local SEO.',
        },
        {
          q: 'Do I need a new website?',
          a: 'Almost never. Many of the highest-impact improvements — adding FAQs, testimonials, service area details, price ranges, and schema markup — can be incorporated into your existing website without a redesign. A new site is rarely the first priority.',
        },
        {
          q: 'Can agencies use this tool?',
          a: 'Yes. Agencies can use the AI Recommendation Visibility Scan as a lead generation and diagnostic tool for local clients. Run a scan during a sales call to immediately demonstrate gaps and opportunities. Our Pro and Full Implementation plans are designed for agency workflows.',
        },
        {
          q: 'How long does the scan take?',
          a: 'Under 2 minutes. The form asks 20 yes/no and fill-in questions about your current digital presence. No integrations, no technical setup. Your result is unlocked after payment.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Don\'t wait',
      headline1: 'Don\'t let AI',
      headlineHighlight: 'misinterpret',
      headline2: 'your business.',
      body: 'Every day without clear signals is a day your competitors are considered as recommendable options and you\'re not. Under 2 minutes to know where you stand.',
      cta: 'Scan my business — $30',
      trustLine: 'Secure payment with Stripe. Result unlocked after payment.',
    },
    footer: {
      logoSub: 'AI Recommendation Visibility Scan',
      tagline:
        'AI Recommendation Visibility Scan for businesses that want to be easier to understand, compare, and consider by AI systems.',
      nav: [
        { label: 'Home', href: '#hero' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Scan', href: '#scanner' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
      disclaimer:
        'This scan provides an educational visibility assessment. It does not guarantee rankings, mentions, citations, or recommendations from any search engine, platform, or AI system.',
      rights: 'All rights reserved.',
    },
  },
} as const;

export type Translations = typeof translations;
