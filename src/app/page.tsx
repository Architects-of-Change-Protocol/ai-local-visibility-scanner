'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyNowSection from '@/components/WhyNowSection';
import PainSection from '@/components/PainSection';
import HowItWorks from '@/components/HowItWorks';
import ScannerForm from '@/components/ScannerForm';
import ScoreResult from '@/components/ScoreResult';
import SampleReport from '@/components/SampleReport';
import Pricing from '@/components/Pricing';
import FAQSection from '@/components/FAQSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import { computeScore } from '@/lib/scoring';
import type { Language } from '@/lib/i18n';
import type { ScanFormData, ScanResult } from '@/lib/types';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

const FORM_STORAGE_KEY = 'ai_visibility_scan_form';
const PAID_STORAGE_KEY = 'ai_visibility_scan_paid';
const SESSION_STORAGE_KEY = 'ai_visibility_scan_session_id';
const LANG_STORAGE_KEY = 'ai_visibility_language';

type PaymentState = 'idle' | 'verifying' | 'success' | 'cancelled' | 'error';

interface InitialPaymentData {
  state: PaymentState;
  sessionId: string | null;
}

function readInitialPaymentData(): InitialPaymentData {
  if (typeof window === 'undefined') return { state: 'idle', sessionId: null };
  const params = new URLSearchParams(window.location.search);
  const payment = params.get('payment');
  const sessionId = params.get('session_id');
  if (payment) window.history.replaceState({}, '', window.location.pathname);
  if (payment === 'success' && sessionId) return { state: 'verifying', sessionId };
  if (payment === 'cancelled') return { state: 'cancelled', sessionId: null };
  return { state: 'idle', sessionId: null };
}

function readSavedLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved === 'en' || saved === 'es') return saved;
  } catch {
    // ignore storage errors
  }
  return 'es';
}

export default function Home() {
  const [language, setLanguageState] = useState<Language>(readSavedLanguage);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [businessName, setBusinessName] = useState('');
  const [paymentState, setPaymentState] = useState<PaymentState>('idle');
  const [paymentErrorMessage, setPaymentErrorMessage] = useState('');

  const scannerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const sampleRef = useRef<HTMLDivElement>(null);
  const initialData = useRef<InitialPaymentData | null>(null);

  if (initialData.current === null) {
    initialData.current = readInitialPaymentData();
  }

  function setLanguage(lang: Language) {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // ignore storage errors
    }
  }

  function scrollToRef(ref: React.RefObject<HTMLDivElement | null>) {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handlePaymentSuccess = useCallback(async (sessionId: string) => {
    try {
      const res = await fetch(`/api/checkout/verify?session_id=${encodeURIComponent(sessionId)}`);
      const data: { paid: boolean; sessionId?: string; customerEmail?: string; error?: string } =
        await res.json();

      if (!data.paid) {
        setPaymentState('error');
        setPaymentErrorMessage(
          language === 'en'
            ? 'Could not confirm payment. If you completed the payment, please contact us.'
            : 'No se pudo confirmar el pago. Si realizaste el pago, por favor contactanos.'
        );
        setTimeout(() => scrollToRef(scannerRef), 100);
        return;
      }

      let formData: ScanFormData | null = null;
      try {
        const saved = localStorage.getItem(FORM_STORAGE_KEY);
        if (saved) formData = JSON.parse(saved) as ScanFormData;
      } catch {
        // ignore parse errors
      }

      if (!formData) {
        setPaymentState('error');
        setPaymentErrorMessage(
          language === 'en'
            ? 'Payment confirmed, but we could not find your form data. Please contact us with your payment receipt.'
            : 'Pago confirmado, pero no encontramos los datos del formulario. Por favor contactanos con tu comprobante de pago.'
        );
        setTimeout(() => scrollToRef(scannerRef), 100);
        return;
      }

      const result = computeScore(formData, language);
      try {
        localStorage.setItem(PAID_STORAGE_KEY, 'true');
        localStorage.setItem(SESSION_STORAGE_KEY, sessionId);
      } catch {
        // ignore storage errors
      }

      setScanResult(result);
      setBusinessName(formData.businessName);
      setPaymentState('success');

      setTimeout(() => scrollToRef(resultsRef), 100);
    } catch {
      setPaymentState('error');
      setPaymentErrorMessage(
        language === 'en'
          ? 'Error verifying payment. Please try again or contact us.'
          : 'Error al verificar el pago. Por favor intentá de nuevo o contactanos.'
      );
      setTimeout(() => scrollToRef(scannerRef), 100);
    }
  }, [language]);

  useEffect(() => {
    const { state, sessionId } = initialData.current!;
    if (state === 'verifying' && sessionId) {
      setPaymentState('verifying');
      handlePaymentSuccess(sessionId);
    } else if (state === 'cancelled') {
      setPaymentState('cancelled');
      setTimeout(() => scrollToRef(scannerRef), 100);
    }
  }, [handlePaymentSuccess]);

  const paymentSuccessBanner =
    language === 'en'
      ? 'Payment confirmed. Your result is unlocked.'
      : 'Pago confirmado. Tu resultado está desbloqueado.';

  const verifyingText = language === 'en'
    ? { title: 'Verifying your payment…', sub: 'This takes a few seconds.' }
    : { title: 'Verificando tu pago…', sub: 'Esto toma unos segundos.' };

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden pt-16 sm:pt-[70px]">
        <Hero
          language={language}
          onScanClick={() => scrollToRef(scannerRef)}
          onSampleClick={() => scrollToRef(sampleRef)}
        />
        <WhyNowSection language={language} />
        <PainSection language={language} />
        <HowItWorks language={language} />

        {paymentState === 'verifying' && (
          <div className="py-16 flex flex-col items-center gap-4 text-center px-4">
            <Loader2 className="w-10 h-10 text-emerald-400 animate-spin" />
            <p className="text-white font-semibold text-lg">{verifyingText.title}</p>
            <p className="text-slate-400 text-sm">{verifyingText.sub}</p>
          </div>
        )}

        {paymentState === 'success' && scanResult && (
          <div ref={resultsRef}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
              <div className="glass rounded-2xl px-5 py-4 border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-3 mb-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <p className="text-emerald-300 text-sm font-medium">{paymentSuccessBanner}</p>
              </div>
            </div>
            <ScoreResult result={scanResult} businessName={businessName} language={language} />
          </div>
        )}

        {paymentState === 'error' && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="glass rounded-2xl px-5 py-4 border border-rose-500/20 bg-rose-500/5 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <p className="text-rose-300 text-sm">{paymentErrorMessage}</p>
            </div>
          </div>
        )}

        <div ref={scannerRef}>
          <ScannerForm language={language} cancelledPayment={paymentState === 'cancelled'} />
        </div>

        <div ref={sampleRef}>
          <SampleReport language={language} />
        </div>

        <Pricing language={language} />
        <FAQSection language={language} />
        <FinalCTA language={language} onScanClick={() => scrollToRef(scannerRef)} />
      </main>
      <Footer language={language} />
    </>
  );
}
