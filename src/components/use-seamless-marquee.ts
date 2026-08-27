"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

// Avoids the React SSR warning for useLayoutEffect while still measuring
// synchronously (before paint) on the client.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Drives a seamless CSS marquee loop.
 *
 * The previous implementation animated `translateX(-50%)` and assumed that
 * was exactly "one repeating set" of content. That assumption only holds if
 * the track's total width divides perfectly in two — which breaks the
 * moment the track uses `gap` (gap only inserts N-1 gaps for N items, so
 * 50% of the total is short of one true repeat by half a gap), or any other
 * spacing/sizing quirk. It also can't adapt to content whose size changes
 * after mount (images loading, fonts loading, viewport resize).
 *
 * This hook instead measures the *actual* rendered distance between the
 * first item of the original set and the first item of its duplicate, live,
 * via ResizeObserver. That distance is, by construction, exactly "one
 * repeat" — regardless of gaps, margins, padding, item widths, font
 * metrics, or viewport size — because it's read directly from the real
 * layout rather than inferred from it. The animation then travels exactly
 * that many pixels before looping, so the loop point is pixel-identical to
 * the start: no snap, no jump, no reverse.
 *
 * The animation itself stays pure CSS (`animation` on a `transform`), so
 * it's GPU-composited and runs with no JavaScript animation loop — the
 * hook only measures layout, it never drives the motion frame by frame.
 */
export function useSeamlessMarquee<T extends HTMLElement = HTMLElement>(
  speedPxPerSecond: number
) {
  const firstRef = useRef<T | null>(null);
  const secondRef = useRef<T | null>(null);
  const [distance, setDistance] = useState(0);

  const measure = useCallback(() => {
    const a = firstRef.current;
    const b = secondRef.current;
    if (!a || !b) return;
    const d = b.getBoundingClientRect().left - a.getBoundingClientRect().left;
    if (d > 0) setDistance(d);
  }, []);

  // Synchronous first measurement, before the browser paints, so there's no
  // flash of a wrongly-sized (or static) loop on first render.
  useIsomorphicLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    measure();

    const ro = new ResizeObserver(() => measure());
    if (firstRef.current) ro.observe(firstRef.current);
    if (secondRef.current) ro.observe(secondRef.current);
    window.addEventListener("resize", measure);

    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) measure();
      });
    }

    return () => {
      cancelled = true;
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const duration = distance > 0 ? distance / speedPxPerSecond : 0;

  const trackStyle: CSSProperties = {
    ["--marquee-distance" as string]: `${distance}px`,
    animationDuration: distance > 0 ? `${duration}s` : undefined,
    // Hold at the start position (rather than animating with an unset/zero
    // distance) until the first real measurement lands.
    animationPlayState: distance > 0 ? undefined : "paused",
  };

  return { firstRef, secondRef, trackStyle };
}
