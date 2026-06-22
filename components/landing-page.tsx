"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Dumbbell,
  LineChart,
  Play,
  Salad,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound
} from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { AppButton } from "@/components/app-button";
import { FeatureCard } from "@/components/feature-card";
import { PhoneMockup } from "@/components/phone-mockup";

const features = [
  {
    title: "Smart Workout Programs",
    icon: Dumbbell,
    phone: "workout" as const,
    items: ["Personalized plans", "Exercise videos", "Rest timer", "Beginner to advanced"]
  },
  {
    title: "Nutrition",
    icon: Salad,
    phone: "nutrition" as const,
    items: ["Calories", "Macros", "Meal plans", "Shopping lists"]
  },
  {
    title: "Progress Tracking",
    icon: LineChart,
    phone: "progress" as const,
    items: ["Weight history", "Progress charts", "Progress photos", "PR tracking"]
  },
  {
    title: "AI Coach",
    icon: Bot,
    phone: "coach" as const,
    items: ["Ask fitness questions", "Adapt workouts", "Nutrition advice", "Daily recommendations"]
  }
];

const steps = [
  { title: "Create your profile.", icon: UserRound },
  { title: "Choose your goal.", icon: Target },
  { title: "Get your personalized plan.", icon: Sparkles },
  { title: "Track your progress.", icon: LineChart }
];

export function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 py-8 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,140,255,0.24),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.10),transparent_24%),linear-gradient(135deg,#09090B_0%,#101014_48%,#09090B_100%)]" />
      <motion.div
        aria-hidden
        animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-[20%] h-20 w-20 rounded-[1.6rem] border border-white/10 bg-white/[0.04] backdrop-blur"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[16%] right-[9%] h-28 w-28 rounded-full border border-accent/30 bg-accent/10 blur-[1px]"
      />
      <div className="noise-overlay" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="pt-12 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.04] px-4 py-2 text-sm text-muted">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Built for consistent, measurable progress
          </div>
          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Everything you need to transform your body.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            Workout plans, nutrition, progress tracking and AI coaching. All in one place.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <AppButton icon={<ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}>
              Start for free
            </AppButton>
            <AppButton variant="secondary" icon={<Play className="h-4 w-4 fill-white/20" />}>
              Watch demo
            </AppButton>
          </div>
        </motion.div>

        <div className="relative min-h-[42rem]">
          <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
          <PhoneMockup variant="dashboard" className="absolute left-1/2 top-16 z-20 -translate-x-1/2 lg:left-[43%]" />
          <PhoneMockup
            variant="workout"
            delay={0.15}
            className="absolute left-0 top-36 z-10 hidden rotate-[-8deg] scale-90 md:block"
          />
          <PhoneMockup
            variant="progress"
            delay={0.3}
            className="absolute right-0 top-32 z-10 hidden rotate-[8deg] scale-90 md:block"
          />
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
        <AnimatedCounter value={100} suffix="k+" label="Workouts completed" />
        <AnimatedCounter value={10} suffix="k+" label="Active users" />
        <AnimatedCounter value={95} suffix="%" label="User satisfaction" />
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Training system"
          title="Four pillars, one plan."
          description="Every workout, meal and recovery cue is connected, so progress feels less random and more repeatable."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="How it works"
          title="From first check-in to visible progress."
          description="A guided setup turns your goal, schedule and experience level into a plan you can actually follow."
        />
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent via-border to-transparent md:left-0 md:right-0 md:top-1/2 md:mx-auto md:h-px md:w-full" />
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="relative rounded-[2rem] border border-border bg-card p-6 shadow-card"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-8 text-sm font-medium uppercase tracking-[0.18em] text-accent">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenshotsSection() {
  return (
    <section className="overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="App screenshots"
          title="Every screen is built for momentum."
          description="A focused mobile experience for training, eating, recovering and checking in with your coach."
        />
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl gap-5 overflow-x-auto pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {(["dashboard", "workout", "nutrition", "progress", "coach"] as const).map((screen, index) => (
          <div key={screen} className="min-w-[17rem] md:min-w-[18rem]">
            <PhoneMockup variant={screen} delay={index * 0.06} />
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="px-5 pb-10 pt-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-card sm:p-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Ready when you are</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Start building the body your routine can support.
            </h2>
          </div>
          <AppButton icon={<ArrowRight className="h-4 w-4" />}>Start for free</AppButton>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
    </motion.div>
  );
}
