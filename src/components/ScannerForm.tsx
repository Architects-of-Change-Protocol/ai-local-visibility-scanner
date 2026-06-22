'use client';

import { useState } from 'react';
import { Building2, Star, Globe, Zap, ArrowRight, Loader2 } from 'lucide-react';
import type { ScanFormData, YesNo, YesNoUnknown } from '@/lib/types';
import { BUSINESS_CATEGORIES } from '@/lib/constants';

interface ScannerFormProps {
  onSubmit: (data: ScanFormData) => void;
}

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
        <option value="" className="bg-slate-900">Select a category…</option>
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
            {opt === 'yes' ? 'Yes' : 'No'}
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
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'unknown', label: "Don't know" },
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

export default function ScannerForm({ onSubmit }: ScannerFormProps) {
  const [form, setForm] = useState<ScanFormData>(defaultForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ScanFormData, string>>>({});
  const [loading, setLoading] = useState(false);

  function set<K extends keyof ScanFormData>(key: K, value: ScanFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ScanFormData, string>> = {};
    if (!form.businessName.trim()) newErrors.businessName = 'Business name is required.';
    if (!form.city.trim()) newErrors.city = 'City is required.';
    if (!form.category) newErrors.category = 'Please select a category.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSubmit(form);
    }, 800);
  }

  return (
    <section id="scanner" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-3">AI Visibility Scanner</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Scan your business{' '}
            <span className="gradient-text">right now</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Answer 20 quick questions. Get your score in seconds.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-6">
            {/* Section A: Business Basics */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Building2} label="Section A" title="Business Basics" />
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <TextInput
                    label="Business Name"
                    placeholder="e.g. Escazú Dental Studio"
                    value={form.businessName}
                    onChange={(v) => set('businessName', v)}
                    required
                    hint="The exact name customers see on Google."
                  />
                  {errors.businessName && (
                    <p className="text-rose-400 text-xs mt-1">{errors.businessName}</p>
                  )}
                </div>
                <div>
                  <TextInput
                    label="City / Market"
                    placeholder="e.g. San José, Costa Rica"
                    value={form.city}
                    onChange={(v) => set('city', v)}
                    required
                    hint="Primary city or metro where you serve customers."
                  />
                  {errors.city && (
                    <p className="text-rose-400 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <SelectInput
                    label="Business Category"
                    value={form.category}
                    onChange={(v) => set('category', v)}
                    options={BUSINESS_CATEGORIES}
                    required
                    hint="Choose the category that best fits your business."
                  />
                  {errors.category && (
                    <p className="text-rose-400 text-xs mt-1">{errors.category}</p>
                  )}
                </div>
                <TextInput
                  label="Website URL"
                  placeholder="https://yourbusiness.com"
                  value={form.websiteUrl}
                  onChange={(v) => set('websiteUrl', v)}
                  type="url"
                  hint="Leave blank if you don't have a website."
                />
                <TextInput
                  label="Google Business Profile URL"
                  placeholder="https://g.page/yourbusiness"
                  value={form.googleBusinessUrl}
                  onChange={(v) => set('googleBusinessUrl', v)}
                  type="url"
                  hint="Your Google Maps listing URL."
                />
                <TextInput
                  label="WhatsApp or Contact Link"
                  placeholder="https://wa.me/1234567890"
                  value={form.contactLink}
                  onChange={(v) => set('contactLink', v)}
                  hint="WhatsApp, phone link, or direct contact URL."
                />
              </div>
            </div>

            {/* Section B: Trust Signals */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Star} label="Section B" title="Trust Signals" />
              <div className="grid sm:grid-cols-2 gap-5">
                <TextInput
                  label="Number of Google Reviews"
                  placeholder="e.g. 47"
                  value={form.reviewCount}
                  onChange={(v) => set('reviewCount', v)}
                  type="number"
                  hint="Approximate count from your Google Business Profile."
                />
                <TextInput
                  label="Average Star Rating"
                  placeholder="e.g. 4.7"
                  value={form.averageRating}
                  onChange={(v) => set('averageRating', v)}
                  type="number"
                  hint="Your current Google rating (out of 5)."
                />
                <YesNoToggle
                  label="Do you show real customer testimonials on your website?"
                  value={form.hasTestimonials}
                  onChange={(v) => set('hasTestimonials', v)}
                  hint="Written or video testimonials from named customers."
                />
                <YesNoToggle
                  label="Do you have local or team photos on your website?"
                  value={form.hasLocalPhotos}
                  onChange={(v) => set('hasLocalPhotos', v)}
                  hint="Real photos of your location, team, or work — not stock images."
                />
                <div className="sm:col-span-2">
                  <YesNoToggle
                    label="Do you have social proof from third-party platforms?"
                    value={form.hasThirdPartyProof}
                    onChange={(v) => set('hasThirdPartyProof', v)}
                    hint="Yelp, Facebook, Houzz, TripAdvisor, or industry-specific directories."
                  />
                </div>
              </div>
            </div>

            {/* Section C: Local Search Signals */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Globe} label="Section C" title="Local Search Signals" />
              <div className="grid sm:grid-cols-2 gap-5">
                <YesNoToggle
                  label="Do you have a clear services page?"
                  value={form.hasServicesPage}
                  onChange={(v) => set('hasServicesPage', v)}
                  hint="A page that clearly lists your services and explains what you offer."
                />
                <YesNoToggle
                  label="Do you have separate pages for each main service?"
                  value={form.hasSeparateServicePages}
                  onChange={(v) => set('hasSeparateServicePages', v)}
                  hint="Individual pages like /teeth-whitening, /hvac-repair, /family-law."
                />
                <YesNoToggle
                  label="Do you mention your service areas clearly?"
                  value={form.mentionsServiceAreas}
                  onChange={(v) => set('mentionsServiceAreas', v)}
                  hint="Neighborhoods, cities, or regions you serve listed on your site."
                />
                <YesNoToggle
                  label="Do you show prices or starting prices?"
                  value={form.showsPricing}
                  onChange={(v) => set('showsPricing', v)}
                  hint="Even price ranges reduce friction and increase AI clarity."
                />
              </div>
            </div>

            {/* Section D: AI / Agent Readiness */}
            <div className="glass rounded-2xl p-6 sm:p-8">
              <SectionHeader icon={Zap} label="Section D" title="AI & Agent Readiness" />
              <div className="grid sm:grid-cols-2 gap-5">
                <YesNoToggle
                  label="Do you have FAQs on your website?"
                  value={form.hasFAQs}
                  onChange={(v) => set('hasFAQs', v)}
                  hint="A FAQ section that answers common pre-purchase questions."
                />
                <YesNoToggle
                  label="Do you publish helpful educational content?"
                  value={form.publishesContent}
                  onChange={(v) => set('publishesContent', v)}
                  hint="Blog posts, guides, or articles that help your customers make decisions."
                />
                <YesNoToggle
                  label="Do you have a booking or quote request CTA?"
                  value={form.hasBookingCTA}
                  onChange={(v) => set('hasBookingCTA', v)}
                  hint="A clear call-to-action button above the fold (book, quote, contact)."
                />
                <div className="sm:col-span-1">
                  <ThreeWayToggle
                    label="Do you have schema / structured data?"
                    value={form.hasSchema}
                    onChange={(v) => set('hasSchema', v)}
                    hint="LocalBusiness, Service, or FAQ schema markup in your site's code."
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full group flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-70 text-slate-950 font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/25"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Calculating your score…
                </>
              ) : (
                <>
                  Get My AI Findability Score
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
