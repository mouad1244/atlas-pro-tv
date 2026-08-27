export const DEVICE_ITEMS = [
  "Smart TV",
  "Android TV",
  "Fire TV",
  "Apple TV",
  "iPhone & iPad",
  "Android",
  "PC & Mac",
  "Box Android",
  "MAG & Formuler",
  "France · Belgique · Suisse",
];

export const CONTENT_ITEMS = [
  "Football en direct",
  "Basketball",
  "Tennis",
  "Sport en direct 24/7",
  "Cinéma & séries",
  "Chaînes info",
  "Divertissement",
  "Documentaires",
  "Musique",
  "Chaînes jeunesse",
];

const HERO_PHOTOS = ["1", "2", "3", "4", "5"].map(
  (n) => `/assets/hero-marquee/${n}.avif`
);

export function PhotoMarquee() {
  const loop = [...HERO_PHOTOS, ...HERO_PHOTOS];

  return (
    <div className="group relative overflow-hidden border-y border-white/8 bg-white/[0.03] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent" />
      <div
        className="flex w-max items-center will-change-transform group-hover:[animation-play-state:paused] animate-marquee"
        style={{ animationDuration: "42s" }}
      >
        {loop.map((src, i) => (
          <span
            key={`${src}-${i}`}
            className="mr-4 flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out hover:scale-110"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="group relative overflow-hidden border-y border-white/8 bg-white/[0.03] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent" />
      <div
        className={`flex w-max items-center will-change-transform group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: "42s" }}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-2 rounded-full px-6 py-1.5 text-[13px] font-medium whitespace-nowrap text-white/45 transition-all duration-300 ease-out hover:scale-110 hover:bg-white/5 hover:text-white hover:[text-shadow:0_0_18px_rgba(168,148,255,0.6)]"
          >
            <span className="h-1 w-1 rounded-full bg-primary-light" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
