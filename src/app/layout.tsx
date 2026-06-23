import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escaneo de Visibilidad en Recomendaciones de IA — AI Recommendation Visibility Scan",
  description:
    "Descubrí si tu negocio tiene las señales de claridad, confianza y relevancia que ayudan a ser entendido, comparado y considerado en recomendaciones generadas por inteligencia artificial.",
  openGraph: {
    title: "Escaneo de Visibilidad en Recomendaciones de IA",
    description:
      "Descubrí si tu negocio tiene las señales de claridad, confianza y relevancia que ayudan a ser entendido, comparado y considerado en recomendaciones generadas por inteligencia artificial.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Escaneo de Visibilidad en Recomendaciones de IA",
    description:
      "Descubrí si tu negocio tiene las señales de claridad, confianza y relevancia que ayudan a ser entendido, comparado y considerado en recomendaciones generadas por inteligencia artificial.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
