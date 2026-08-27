import { EXPERIENCE_CATEGORIES } from "@/lib/config";
import {
  TrophyIcon,
  FilmIcon,
  LayersIcon,
  CameraIcon,
  NewsIcon,
  SparkleIcon,
} from "./icons";

const ICONS = [TrophyIcon, FilmIcon, LayersIcon, CameraIcon, NewsIcon, SparkleIcon];
const ACCENTS = [
  "from-primary to-primary-dark",
  "from-blue to-primary",
  "from-cyan to-blue",
  "from-primary-light to-primary",
  "from-blue to-cyan",
  "from-primary to-blue",
];

const LOOP = [...EXPERIENCE_CATEGORIES, ...EXPERIENCE_CATEGORIES];

export function GenreMarquee() {
  return (
    <section className="group relative overflow-hidden border-y border-white/8 bg-ink py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-28" />
      <div
        className="flex w-max items-center will-change-transform group-hover:[animation-play-state:paused] animate-marquee"
        style={{ animationDuration: "38s" }}
      >
        {LOOP.map((cat, i) => {
          const Icon = ICONS[i % EXPERIENCE_CATEGORIES.length];
          const accent = ACCENTS[i % EXPERIENCE_CATEGORIES.length];
          return (
            <div
              key={`${cat.title}-${i}`}
              className="card-glass mr-4 flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 sm:mr-5"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white ${accent}`}
              >
                <Icon className="h-4.5 w-4.5" />
              </span>
              <span className="whitespace-nowrap text-[14.5px] font-semibold text-white/85">
                {cat.title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
