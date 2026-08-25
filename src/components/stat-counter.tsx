"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value: string) {
  const match = value.match(/^(\D*)(\d[\d\s.,]*)(.*)$/);
  if (!match) return { target: 0, prefix: "", suffix: value };
  const [, prefix, numeric, suffix] = match;
  const target = parseInt(numeric.replace(/\D/g, ""), 10) || 0;
  return { target, prefix, suffix };
}

export function StatCounter({ value, className }: { value: string; className?: string }) {
  const { target, prefix, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || target === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!started || target === 0) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduceMotion ? 0 : 1400;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  if (target === 0) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}
