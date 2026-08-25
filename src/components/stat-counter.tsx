"use client";

import { useEffect, useRef, useState } from "react";

function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

export function StatCounter({
  value,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(node);

        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) {
          setDisplay(value);
          return;
        }

        setAnimating(true);
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          setDisplay(Math.round(easeOutQuint(progress) * value));
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setAnimating(false);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={`${className} ${animating ? "stat-counting" : ""}`}>
      {new Intl.NumberFormat("fr-FR").format(display)}
      {suffix}
    </span>
  );
}
