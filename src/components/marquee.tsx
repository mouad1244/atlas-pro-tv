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
        className={`flex w-max items-center group-hover:[animation-play-state:paused] ${
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
