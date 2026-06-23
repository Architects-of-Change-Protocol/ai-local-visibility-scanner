'use client';

import { useState } from 'react';
import { Building2, Star, Globe, Zap, ArrowRight, Loader2, Lock } from 'lucide-react';
import type { ScanFormData, YesNo, YesNoUnknown } from '@/lib/types';
import { BUSINESS_CATEGORIES } from '@/lib/constants';

const STORAGE_KEY = 'ai_visibility_scan_form';

const defaultForm: ScanFormData = {
  businessName: '',
  city: '',
  category: '',
  websiteUrl: '',
  googleBusinessUrl: '',
  contactLink: '',
  reviewCount: '',
  averageRating: '',
  hasServicesPage: '',
  hasFAQs: '',
  showsPricing: '',
  hasTestimonials: '',
  hasLocalPhotos: '',
  hasSeparateServicePages: '',
  hasBookingCTA: '',
  hasSchema: '',
  publishesContent: '',
  mentionsServiceAreas: '',
  hasThirdPartyProof: '',
};

function SectionHeader({ icon: Icon, label, title }: { icon: React.ElementType; label: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-xl bg-emerald-500/15 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-emerald-400" />
      </div>
      <div>
        <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">{label}</p>
        <h3 className="text-white font-bold">{title}</h3>
      </div>
    </div>
  );
}

function TextInput({
  label,
  placeholder,
  hint,
  value,
  onChange,
  required,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} {required && <span className="text-emerald-400">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-slate-900/60 border border-slate-700 hover:border-slate-600 focus:border-emerald-500 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-colors text-sm"
      />
      {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
    </div>
  );
}

function SelectInput({
  label,
  hint,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-1.5">
        {label} {required && <span className="text-emerald-400">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-slate-900/60 border border-slate-700 hover:border-slate-600 focus:border-emerald-500 focus:outline-none rounded-xl px-4 py-3 text-white transition-colors text-sm appearance-none"
      >
        <option value="" className="bg-slate-900">Seleccioná una categoría…</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
        ))}
      </select>
      {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
    </div>
  );
}

function YesNoToggle({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: YesNo | '';
  onChange: (v: YesNo) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <div className="flex gap-2">
        {(['yes', 'no'] as YesNo[]).map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 border ${
              value === opt
                ? opt === 'yes'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : 'bg-rose-500/20 border-rose-500 text-rose-300'
                : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
            }`}
          >
            {opt === 'yes' ? 'Sí' : 'No'}
          </button>
        ))}
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
    </div>
  );
}

function ThreeWayToggle({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint?: string;
  value: YesNoUnknown | '';
  onChange: (v: YesNoUnknown) => void;
}) {
  const opts: { value: YesNoUnknown; label: string }[] = [
    { value: 'yes', label: 'Sí' },
    { value: 'no', label: 'No' },
    { value: 'unknown', label: 'No sé' },
  ];

  return (
    <div>
      <label className="block text-sm font-medium text-slate-300 mb-2">{label}</label>
      <div className="flex gap-2">
        {opts.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 border ${
              value === opt.value
                ? opt.value === 'yes'
                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                  : opt.value === 'no'
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                  : 'bg-slate-500/20 border-slate-500 text-slate-300'
                : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
    </div>
  );
}

interface ScannerFormProps {
  cancelledPayment?: boolean;
}

export default function ScannerForm({ cancelledPayment }: ScannerFormProps) {
  const [form, setForm] = useState<ScanFormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ScanFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  function set<K extends keyof ScanFormData>(key: K, value: ScanFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ScanFormData, string>> = {};
    if (!form.businessName.trim()) newErrors.businessName = 'El nombre del negocio es requerido.';
    if (!form.city.trim()) newErrors.city = 'La ciudad es requerida.';
    if (!form.category) newErrors.category = 'Por favor seleccioná una categoría.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setCheckoutError('');

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
    } catch {
      // localStorage unavailable — proceed anyway, will show error post-payment if missing
    }

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: form.businessName,
          category: form.category,
          city: form.city,
        }),
      });

      const data: { url?: string; error?: string } = await res.json();

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setCheckoutError(
        data.error ?? 'No se pudo iniciar el pago. Por favor intentá de nuevo.'
      );
    } catch {
      setCheckoutError('Error de conexión. Por favor intentá de nuevo.');
    }

    setLoading(false);
  }

  return (
    <section id="scanner" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Escaneo de Visibilidad en Recomendaciones de IA
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Completá el formulario y{' '}
            <span className="gradient-text">desbloqueá tu resultado</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Completá el formulario y desbloqueá tu resultado por $30.
          </p>
        </div>

        {cancelledPayment && (
          <div className="mb-8 glass rounded-2xl px-5 py-4 border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-3">
            <span className="text-yellow-400 text-lg leading-none mt-0.5">⚠</span>
            <p className="text-yellow-300 text-sm leading-relaxed">
              El pago fue cancelado. Podés intentarlo de nuevo cuando querás.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            {/* Section A: Business Basics */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Building2} label="Sección A" title="Datos del negocio" />
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <TextInput
                    label="Nombre del negocio"
                    placeholder="ej. Escazú Dental Studio"
                    value={form.businessName}
                    onChange={(v) => set('businessName', v)}
                    required
                    hint="El nombre exacto que los clientes ven en Google."
                  />
                  {errors.businessName && (
                    <p className="text-rose-400 text-xs mt-1">{errors.businessName}</p>
                  )}
                </div>
                <div>
                  <TextInput
                    label="Ciudad / Mercado"
                    placeholder="ej. San José, Costa Rica"
                    value={form.city}
                    onChange={(v) => set('city', v)}
                    required
                    hint="Ciudad principal donde atendés clientes."
                  />
                  {errors.city && (
                    <p className="text-rose-400 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <SelectInput
                    label="Categoría del negocio"
                    value={form.category}
                    onChange={(v) => set('category', v)}
                    options={BUSINESS_CATEGORIES}
                    required
                    hint="Elegí la categoría que mejor representa tu negocio."
                  />
                  {errors.category && (
                    <p className="text-rose-400 text-xs mt-1">{errors.category}</p>
                  )}
                </div>
                <TextInput
                  label="URL del sitio web"
                  placeholder="https://tunegocio.com"
                  value={form.websiteUrl}
                  onChange={(v) => set('websiteUrl', v)}
                  type="url"
                  hint="Dejá vacío si no tenés sitio web."
                />
                <TextInput
                  label="URL de Google Business Profile"
                  placeholder="https://g.page/tunegocio"
                  value={form.googleBusinessUrl}
                  onChange={(v) => set('googleBusinessUrl', v)}
                  type="url"
                  hint="Tu URL de Google Maps / Google Business."
                />
                <TextInput
                  label="WhatsApp o link de contacto"
                  placeholder="https://wa.me/1234567890"
                  value={form.contactLink}
                  onChange={(v) => set('contactLink', v)}
                  hint="WhatsApp, link de teléfono o URL de contacto directo."
                />
              </div>
            </div>

            {/* Section B: Trust Signals */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Star} label="Sección B" title="Señales de confianza" />
              <div className="grid sm:grid-cols-2 gap-5">
                <TextInput
                  label="Cantidad de reseñas de Google"
                  placeholder="ej. 47"
                  value={form.reviewCount}
                  onChange={(v) => set('reviewCount', v)}
                  type="number"
                  hint="Cantidad aproximada en tu Google Business Profile."
                />
                <TextInput
                  label="Calificación promedio"
                  placeholder="ej. 4.7"
                  value={form.averageRating}
                  onChange={(v) => set('averageRating', v)}
                  type="number"
                  hint="Tu calificación actual en Google (sobre 5)."
                />
                <YesNoToggle
                  label="¿Mostrás testimonios reales de clientes en tu sitio web?"
                  value={form.hasTestimonials}
                  onChange={(v) => set('hasTestimonials', v)}
                  hint="Testimonios escritos o en video de clientes con nombre."
                />
                <YesNoToggle
                  label="¿Tenés fotos del local o del equipo en tu sitio web?"
                  value={form.hasLocalPhotos}
                  onChange={(v) => set('hasLocalPhotos', v)}
                  hint="Fotos reales de tu espacio, equipo o trabajo — no imágenes de stock."
                />
                <div className="sm:col-span-2">
                  <YesNoToggle
                    label="¿Tenés prueba social de plataformas de terceros?"
                    value={form.hasThirdPartyProof}
                    onChange={(v) => set('hasThirdPartyProof', v)}
                    hint="Yelp, Facebook, Houzz, TripAdvisor u otros directorios del rubro."
                  />
                </div>
              </div>
            </div>

            {/* Section C: Local Search Signals */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Globe} label="Sección C" title="Señales de búsqueda local" />
              <div className="grid sm:grid-cols-2 gap-5">
                <YesNoToggle
                  label="¿Tenés una página clara de servicios?"
                  value={form.hasServicesPage}
                  onChange={(v) => set('hasServicesPage', v)}
                  hint="Una página que lista y explica claramente qué ofrecés."
                />
                <YesNoToggle
                  label="¿Tenés páginas separadas para cada servicio principal?"
                  value={form.hasSeparateServicePages}
                  onChange={(v) => set('hasSeparateServicePages', v)}
                  hint="Páginas individuales como /blanqueamiento, /reparacion-hvac, /derecho-familiar."
                />
                <YesNoToggle
                  label="¿Mencionás claramente tus áreas de servicio?"
                  value={form.mentionsServiceAreas}
                  onChange={(v) => set('mentionsServiceAreas', v)}
                  hint="Barrios, ciudades o regiones donde operás, listados en tu sitio."
                />
                <YesNoToggle
                  label="¿Mostrás precios o precios iniciales?"
                  value={form.showsPricing}
                  onChange={(v) => set('showsPricing', v)}
                  hint="Incluso rangos de precio reducen la fricción y mejoran la claridad para la IA."
                />
              </div>
            </div>

            {/* Section D: AI / Agent Readiness */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Zap} label="Sección D" title="Preparación para IA" />
              <div className="grid sm:grid-cols-2 gap-5">
                <YesNoToggle
                  label="¿Tenés preguntas frecuentes (FAQs) en tu sitio web?"
                  value={form.hasFAQs}
                  onChange={(v) => set('hasFAQs', v)}
                  hint="Una sección de FAQ que responde preguntas comunes antes de la compra."
                />
                <YesNoToggle
                  label="¿Publicás contenido educativo útil?"
                  value={form.publishesContent}
                  onChange={(v) => set('publishesContent', v)}
                  hint="Posts de blog, guías o artículos que ayudan a los clientes a tomar decisiones."
                />
                <YesNoToggle
                  label="¿Tenés un CTA de reserva o solicitud de cotización?"
                  value={form.hasBookingCTA}
                  onChange={(v) => set('hasBookingCTA', v)}
                  hint="Un botón de acción claro above the fold (reservar, cotizar, contactar)."
                />
                <ThreeWayToggle
                  label="¿Tenés schema / datos estructurados?"
                  value={form.hasSchema}
                  onChange={(v) => set('hasSchema', v)}
                  hint="Schema markup de LocalBusiness, Service o FAQ en el código de tu sitio."
                />
              </div>
            </div>

            {checkoutError && (
              <div className="glass rounded-xl px-5 py-4 border border-rose-500/20 bg-rose-500/5">
                <p className="text-rose-300 text-sm">{checkoutError}</p>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full group flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-70 text-slate-950 font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Redirigiendo al pago…
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Ver mi resultado — $30
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-center text-slate-500 text-xs mt-3 flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3" />
                Pago seguro con Stripe. El resultado se muestra después del pago.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
