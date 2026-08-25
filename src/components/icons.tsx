type IconProps = { className?: string };

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.7 4.56 1.9 6.4L4 29l7.8-1.85A11.9 11.9 0 0016.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.63 1.1 1.13-4.5-.25-.4A9.6 9.6 0 016.4 15c0-5.3 4.32-9.6 9.62-9.6 5.3 0 9.6 4.3 9.6 9.6s-4.3 9.7-9.6 9.7zm5.32-7.2c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.14-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.2.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.19 2.06 3.14 5 4.4.7.3 1.24.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
    </svg>
  );
}

export function TvIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M11 19h2" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 8.2L12 3.5l8.5 4.7v8.6L12 21.5l-8.5-4.7V8.2z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <path d="M3.7 8.3L12 13l8.3-4.7M12 13v8.4" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.6l-6.1 3.1 1.5-6.7-5.1-4.6 6.8-.7L12 2.5z" />
    </svg>
  );
}

export function ZapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l7 3v5.2c0 4.6-3 8.6-7 9.8-4-1.2-7-5.2-7-9.8V6l7-3z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 13v-1a8 8 0 1116 0v1"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
      <rect x="3" y="13" width="4.5" height="6" rx="1.6" stroke="currentColor" strokeWidth={1.7} />
      <rect x="16.5" y="13" width="4.5" height="6" rx="1.6" stroke="currentColor" strokeWidth={1.7} />
      <path d="M20.5 19v.5a3 3 0 01-3 3H14" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <path d="M3.5 12L12 16.5 20.5 12M3.5 16.5L12 21l8.5-4.5" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth={1.7} />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FilmIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth={1.7} />
      <path d="M8 4v16M16 4v16M3 9h5M16 9h5M3 15h5M16 15h5" stroke="currentColor" strokeWidth={1.7} />
    </svg>
  );
}

export function GiftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="9" width="17" height="4.2" rx="1" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <path d="M5 13.2V20a1.2 1.2 0 001.2 1.2h11.6A1.2 1.2 0 0019 20v-6.8" stroke="currentColor" strokeWidth={1.7} strokeLinejoin="round" />
      <path d="M12 9v12.2" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path
        d="M12 9c0-2.4-1.6-4.3-3.5-4.3S6 6.3 6.6 7.7C7.2 9 9.2 9 12 9zM12 9c0-2.4 1.6-4.3 3.5-4.3S18 6.3 17.4 7.7C16.8 9 14.8 9 12 9z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.5v13l11-6.5-11-6.5z" />
    </svg>
  );
}

export function TrophyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 4h10v5a5 5 0 01-10 0V4z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <path
        d="M7 5H4v1.5A3.5 3.5 0 007.5 10M17 5h3v1.5A3.5 3.5 0 0116.5 10"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 14v3.5M9 20.5h6M9.5 20.5c0-1.8.7-2.7 2.5-3 1.8.3 2.5 1.2 2.5 3" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CameraIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.5 8.2c0-1 .8-1.7 1.7-1.7h2l1.1-1.8h7.4l1.1 1.8h2c1 0 1.7.8 1.7 1.7v9.6c0 1-.8 1.7-1.7 1.7H5.2c-1 0-1.7-.8-1.7-1.7V8.2z"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <circle cx="12" cy="13" r="3.6" stroke="currentColor" strokeWidth={1.7} />
    </svg>
  );
}

export function NewsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={1.7} />
      <path
        d="M7 9h4M7 12.5h10M7 15.5h10"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
      />
      <circle cx="16.2" cy="9" r="0.15" stroke="currentColor" strokeWidth={1.7} />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5c.6 3.6 2.2 5.2 5.8 5.8-3.6.6-5.2 2.2-5.8 5.8-.6-3.6-2.2-5.2-5.8-5.8 3.6-.6 5.2-2.2 5.8-5.8z" />
      <path d="M18.5 14.5c.35 2 1.25 2.9 3.25 3.25-2 .35-2.9 1.25-3.25 3.25-.35-2-1.25-2.9-3.25-3.25 2-.35 2.9-1.25 3.25-3.25z" />
    </svg>
  );
}
