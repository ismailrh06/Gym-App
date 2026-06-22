import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AthletIQ | AI Fitness Coaching",
  description:
    "Workout plans, nutrition, progress tracking and AI coaching in one premium fitness app.",
  keywords: [
    "fitness app",
    "AI coach",
    "workout planner",
    "nutrition tracking",
    "progress tracking"
  ],
  openGraph: {
    title: "AthletIQ | Everything you need to transform your body",
    description:
      "Personalized training, nutrition and progress insights for ambitious fitness goals.",
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
    <html lang="en" className="dark">
      <body className="bg-background font-sans text-white antialiased">{children}</body>
    </html>
  );
}
