type LogoProps = { className?: string };

export function LogoMark({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="iron-mark" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a894ff" />
          <stop offset="55%" stopColor="#7c5cff" />
          <stop offset="100%" stopColor="#3ee0e8" />
        </linearGradient>
      </defs>
      <path
        d="M7 5h18v4.2h-6.4v13.6H25V27H7v-4.2h6.4V9.2H7V5z"
        fill="url(#iron-mark)"
      />
    </svg>
  );
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
      <span className="flex items-baseline gap-1.5">
        <span className="text-metal text-xl font-extrabold tracking-tight sm:text-2xl">
          IRON
        </span>
        <span className="h-3 w-px shrink-0 bg-gradient-to-b from-primary-light via-blue to-cyan sm:h-3.5" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-cyan sm:text-xs">
          TV
        </span>
      </span>
    </span>
  );
}
