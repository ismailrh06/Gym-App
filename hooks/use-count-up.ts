"use client";

import { useEffect, useMemo, useState } from "react";

type UseCountUpOptions = {
  end: number;
  duration?: number;
  enabled?: boolean;
};

export function useCountUp({ end, duration = 1400, enabled = true }: UseCountUpOptions) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.round(end * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [duration, enabled, end]);

  return useMemo(() => value, [value]);
}
