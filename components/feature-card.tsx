"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PhoneMockup } from "@/components/phone-mockup";
import type { ComponentProps } from "react";

type FeatureCardProps = {
  title: string;
  items: string[];
  icon: LucideIcon;
  phone: ComponentProps<typeof PhoneMockup>["variant"];
};

export function FeatureCard({ title, items, icon: Icon, phone }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      className="group overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent/55 hover:shadow-glow"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="rounded-2xl bg-accent/12 p-3 text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-normal">{title}</h3>
      <ul className="mt-5 grid gap-3 text-sm text-muted">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/8 text-accent">
              <Check className="h-3.5 w-3.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8 h-72 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/25">
        <PhoneMockup
          variant={phone}
          className="origin-top scale-[0.58] transition duration-500 group-hover:scale-[0.62]"
        />
      </div>
    </motion.article>
  );
}
