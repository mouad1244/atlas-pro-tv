"use client";

import { useEffect, useState } from "react";

function getTarget() {
  // Rolling 48h offer window, recalculated per session.
  const target = new Date();
  target.setHours(target.getHours() + 48);
  return target.getTime();
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown({ className }: { className?: string }) {
  const [target] = useState(getTarget);
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (remaining === null) {
    return <div className={className}>&nbsp;</div>;
  }

  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);

  const units = [
    { label: "h", value: hours },
    { label: "m", value: minutes },
    { label: "s", value: seconds },
  ];

  return (
    <div className={className}>
      {units.map((u, i) => (
        <span key={u.label} className="inline-flex items-baseline gap-0.5">
          <span className="tabular-nums">{pad(u.value)}</span>
          <span className="text-[0.8em] opacity-70">{u.label}</span>
          {i < units.length - 1 && <span className="mx-1 opacity-40">:</span>}
        </span>
      ))}
    </div>
  );
}
