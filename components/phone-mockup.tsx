"use client";

import { motion } from "framer-motion";
import { Activity, Apple, Bot, Flame, LineChart, Timer, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  variant: "dashboard" | "workout" | "progress" | "nutrition" | "coach";
  className?: string;
  delay?: number;
};

const content = {
  dashboard: {
    title: "Today",
    metric: "82%",
    label: "Readiness",
    icon: Activity,
    color: "from-accent to-cyan-300"
  },
  workout: {
    title: "Push Day",
    metric: "38:12",
    label: "Session",
    icon: Timer,
    color: "from-white to-accent"
  },
  progress: {
    title: "Progress",
    metric: "+14%",
    label: "Strength",
    icon: LineChart,
    color: "from-accent to-violet-300"
  },
  nutrition: {
    title: "Nutrition",
    metric: "2,140",
    label: "Calories",
    icon: Apple,
    color: "from-emerald-300 to-accent"
  },
  coach: {
    title: "AI Coach",
    metric: "Next",
    label: "Recommendation",
    icon: Bot,
    color: "from-accent to-sky-200"
  }
};

export function PhoneMockup({ variant, className, delay = 0 }: PhoneMockupProps) {
  const item = content[variant];
  const Icon = item.icon;

  return (
    <div className={cn("relative mx-auto h-[32rem] w-[16rem]", className)}>
      <motion.div
        initial={{ opacity: 0, y: 48, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, delay, ease: [0.21, 0.72, 0.22, 1] }}
        whileHover={{ y: -10, rotate: 1.5 }}
        className="phone-glass relative h-full w-full rounded-[2.4rem] p-3"
      >
        <div className="absolute left-1/2 top-4 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black/70" />
        <div className="app-screen relative h-full overflow-hidden rounded-[1.9rem] border border-white/10 p-5">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex items-center justify-between pt-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">AthletIQ</p>
              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
            </div>
            <div className="rounded-2xl bg-white/10 p-3">
              <Icon className="h-5 w-5 text-accent" />
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
            <div className={cn("gradient-ring mx-auto flex h-32 w-32 items-center justify-center rounded-full p-[7px]")}>
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#111113]">
                <span className="text-3xl font-semibold">{item.metric}</span>
                <span className="mt-1 text-xs text-muted">{item.label}</span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {["Warm-up", "Main set", "Recovery"].map((label, index) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className={cn("flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br", item.color)}>
                  {index === 0 ? <Zap className="h-4 w-4 text-black" /> : <Flame className="h-4 w-4 text-black" />}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="h-2.5 w-24 rounded-full bg-white/80" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-white/20" />
                </div>
                <span className="text-xs text-muted">{index + 1}</span>
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-2">
            {[38, 64, 48, 82].map((height, index) => (
              <div key={index} className="flex h-20 items-end rounded-xl bg-white/[0.04] p-1">
                <div
                  className="w-full rounded-lg bg-gradient-to-t from-accent to-white"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
