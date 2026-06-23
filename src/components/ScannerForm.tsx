'use client';

import { useState } from 'react';
import { Building2, Star, Globe, Zap, ArrowRight, Loader2, Lock } from 'lucide-react';
import type { ScanFormData, YesNo, YesNoUnknown } from '@/lib/types';
import { BUSINESS_CATEGORIES } from '@/lib/constants';
import { translations } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

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
  label, placeholder, hint, value, onChange, required, type = 'text',
}: {
  label: string; placeholder: string; hint?: string; value: string;
  onChange: (v: string) => void; required?: boolean; type?: string;
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
  label, hint, value, onChange, options, placeholder, required,
}: {
  label: string; hint?: string; value: string; onChange: (v: string) => void;
  options: string[]; placeholder: string; required?: boolean;
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
        <option value="" className="bg-slate-900">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-slate-900">{opt}</option>
        ))}
      </select>
      {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
    </div>
  );
}

function YesNoToggle({
  label, hint, value, onChange, yesLabel, noLabel,
}: {
  label: string; hint?: string; value: YesNo | ''; onChange: (v: YesNo) => void;
  yesLabel: string; noLabel: string;
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
            {opt === 'yes' ? yesLabel : noLabel}
          </button>
        ))}
      </div>
      {hint && <p className="text-xs text-slate-500 mt-1.5">{hint}</p>}
    </div>
  );
}

function ThreeWayToggle({
  label, hint, value, onChange, yesLabel, noLabel, unknownLabel,
}: {
  label: string; hint?: string; value: YesNoUnknown | ''; onChange: (v: YesNoUnknown) => void;
  yesLabel: string; noLabel: string; unknownLabel: string;
}) {
  const opts: { value: YesNoUnknown; label: string }[] = [
    { value: 'yes', label: yesLabel },
    { value: 'no', label: noLabel },
    { value: 'unknown', label: unknownLabel },
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
  language: Language;
  cancelledPayment?: boolean;
}

export default function ScannerForm({ language, cancelledPayment }: ScannerFormProps) {
  const [form, setForm] = useState<ScanFormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ScanFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  const t = translations[language].scanner;
  const f = t.fields;

  function set<K extends keyof ScanFormData>(key: K, value: ScanFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ScanFormData, string>> = {};
    if (!form.businessName.trim()) newErrors.businessName = t.errors.businessName;
    if (!form.city.trim()) newErrors.city = t.errors.city;
    if (!form.category) newErrors.category = t.errors.category;
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
      // localStorage unavailable — proceed anyway
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

      setCheckoutError(data.error ?? t.checkoutError);
    } catch {
      setCheckoutError(t.connectionError);
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
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.eyebrow}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.headline1}{' '}
            <span className="gradient-text">{t.headlineHighlight}</span>
          </h2>
          <p className="text-slate-400 text-lg">{t.subheadline}</p>
        </div>

        {cancelledPayment && (
          <div className="mb-8 glass rounded-2xl px-5 py-4 border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-3">
            <span className="text-yellow-400 text-lg leading-none mt-0.5">⚠</span>
            <p className="text-yellow-300 text-sm leading-relaxed">{t.cancelledNotice}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            {/* Section A */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Building2} label={t.sections.a.label} title={t.sections.a.title} />
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <TextInput
                    label={f.businessName.label}
                    placeholder={f.businessName.placeholder}
                    hint={f.businessName.hint}
                    value={form.businessName}
                    onChange={(v) => set('businessName', v)}
                    required
                  />
                  {errors.businessName && <p className="text-rose-400 text-xs mt-1">{errors.businessName}</p>}
                </div>
                <div>
                  <TextInput
                    label={f.city.label}
                    placeholder={f.city.placeholder}
                    hint={f.city.hint}
                    value={form.city}
                    onChange={(v) => set('city', v)}
                    required
                  />
                  {errors.city && <p className="text-rose-400 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <SelectInput
                    label={f.category.label}
                    placeholder={f.category.placeholder}
                    hint={f.category.hint}
                    value={form.category}
                    onChange={(v) => set('category', v)}
                    options={BUSINESS_CATEGORIES}
                    required
                  />
                  {errors.category && <p className="text-rose-400 text-xs mt-1">{errors.category}</p>}
                </div>
                <TextInput
                  label={f.websiteUrl.label}
                  placeholder={f.websiteUrl.placeholder}
                  hint={f.websiteUrl.hint}
                  value={form.websiteUrl}
                  onChange={(v) => set('websiteUrl', v)}
                  type="url"
                />
                <TextInput
                  label={f.googleBusinessUrl.label}
                  placeholder={f.googleBusinessUrl.placeholder}
                  hint={f.googleBusinessUrl.hint}
                  value={form.googleBusinessUrl}
                  onChange={(v) => set('googleBusinessUrl', v)}
                  type="url"
                />
                <TextInput
                  label={f.contactLink.label}
                  placeholder={f.contactLink.placeholder}
                  hint={f.contactLink.hint}
                  value={form.contactLink}
                  onChange={(v) => set('contactLink', v)}
                />
              </div>
            </div>

            {/* Section B */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Star} label={t.sections.b.label} title={t.sections.b.title} />
              <div className="grid sm:grid-cols-2 gap-5">
                <TextInput
                  label={f.reviewCount.label}
                  placeholder={f.reviewCount.placeholder}
                  hint={f.reviewCount.hint}
                  value={form.reviewCount}
                  onChange={(v) => set('reviewCount', v)}
                  type="number"
                />
                <TextInput
                  label={f.averageRating.label}
                  placeholder={f.averageRating.placeholder}
                  hint={f.averageRating.hint}
                  value={form.averageRating}
                  onChange={(v) => set('averageRating', v)}
                  type="number"
                />
                <YesNoToggle
                  label={f.hasTestimonials.label}
                  hint={f.hasTestimonials.hint}
                  value={form.hasTestimonials}
                  onChange={(v) => set('hasTestimonials', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <YesNoToggle
                  label={f.hasLocalPhotos.label}
                  hint={f.hasLocalPhotos.hint}
                  value={form.hasLocalPhotos}
                  onChange={(v) => set('hasLocalPhotos', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <div className="sm:col-span-2">
                  <YesNoToggle
                    label={f.hasThirdPartyProof.label}
                    hint={f.hasThirdPartyProof.hint}
                    value={form.hasThirdPartyProof}
                    onChange={(v) => set('hasThirdPartyProof', v)}
                    yesLabel={t.yesLabel}
                    noLabel={t.noLabel}
                  />
                </div>
              </div>
            </div>

            {/* Section C */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Globe} label={t.sections.c.label} title={t.sections.c.title} />
              <div className="grid sm:grid-cols-2 gap-5">
                <YesNoToggle
                  label={f.hasServicesPage.label}
                  hint={f.hasServicesPage.hint}
                  value={form.hasServicesPage}
                  onChange={(v) => set('hasServicesPage', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <YesNoToggle
                  label={f.hasSeparateServicePages.label}
                  hint={f.hasSeparateServicePages.hint}
                  value={form.hasSeparateServicePages}
                  onChange={(v) => set('hasSeparateServicePages', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <YesNoToggle
                  label={f.mentionsServiceAreas.label}
                  hint={f.mentionsServiceAreas.hint}
                  value={form.mentionsServiceAreas}
                  onChange={(v) => set('mentionsServiceAreas', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <YesNoToggle
                  label={f.showsPricing.label}
                  hint={f.showsPricing.hint}
                  value={form.showsPricing}
                  onChange={(v) => set('showsPricing', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
              </div>
            </div>

            {/* Section D */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Zap} label={t.sections.d.label} title={t.sections.d.title} />
              <div className="grid sm:grid-cols-2 gap-5">
                <YesNoToggle
                  label={f.hasFAQs.label}
                  hint={f.hasFAQs.hint}
                  value={form.hasFAQs}
                  onChange={(v) => set('hasFAQs', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <YesNoToggle
                  label={f.publishesContent.label}
                  hint={f.publishesContent.hint}
                  value={form.publishesContent}
                  onChange={(v) => set('publishesContent', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <YesNoToggle
                  label={f.hasBookingCTA.label}
                  hint={f.hasBookingCTA.hint}
                  value={form.hasBookingCTA}
                  onChange={(v) => set('hasBookingCTA', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                />
                <ThreeWayToggle
                  label={f.hasSchema.label}
                  hint={f.hasSchema.hint}
                  value={form.hasSchema}
                  onChange={(v) => set('hasSchema', v)}
                  yesLabel={t.yesLabel}
                  noLabel={t.noLabel}
                  unknownLabel={t.unknownLabel}
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
                    {t.submitLoading}
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    {t.submitButton}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-center text-slate-500 text-xs mt-3 flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3" />
                {t.trustLine}
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
