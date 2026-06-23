'use client';

import { useRef, useState } from 'react';
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
import type { ScanFormData, ScanResult } from '@/lib/types';

export default function Home() {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [businessName, setBusinessName] = useState('');
  const scannerRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const sampleRef = useRef<HTMLDivElement>(null);

  function scrollTo(ref: React.RefObject<HTMLDivElement | null>) {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleFormSubmit(data: ScanFormData) {
    const result = computeScore(data);
    setScanResult(result);
    setBusinessName(data.businessName);
    setTimeout(() => scrollTo(resultsRef), 100);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Hero
        onScanClick={() => scrollTo(scannerRef)}
        onSampleClick={() => scrollTo(sampleRef)}
      />
      <WhyNowSection />
      <PainSection />
      <HowItWorks />

      <div ref={scannerRef}>
        <ScannerForm onSubmit={handleFormSubmit} />
      </div>

      {scanResult && (
        <div ref={resultsRef}>
          <ScoreResult result={scanResult} businessName={businessName} />
        </div>
      )}

      <div ref={sampleRef}>
        <SampleReport />
      </div>

      <Pricing />
      <FAQSection />
      <FinalCTA onScanClick={() => scrollTo(scannerRef)} />
      <Footer />
    </main>
  );
}
