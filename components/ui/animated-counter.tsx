"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/use-count-up";

type AnimatedCounterProps = {
  value: number;
  suffix: string;
  label: string;
};

export function AnimatedCounter({ value, suffix, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.65 });
  const count = useCountUp({ end: value, enabled: inView });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-card backdrop-blur"
    >
      <div className="text-4xl font-semibold tracking-normal text-white sm:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-muted">{label}</p>
    </motion.div>
  );
}
