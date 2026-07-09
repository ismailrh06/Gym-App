import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AthletIQ — Coaching fitness premium",
  description: "Programmes, nutrition et coaching IA pour atteindre vos objectifs avec méthode.",
  keywords: [
    "coaching fitness",
    "coach IA",
    "programme entraînement",
    "suivi nutrition",
    "suivi progression"
  ],
  openGraph: {
    title: "AthletIQ — Coaching fitness premium",
    description: "Programmes personnalisés, nutrition et suivi pour des résultats durables.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-background font-sans text-white antialiased">{children}</body>
    </html>
  );
}
