import Image from "next/image";
import { EXPERIENCE_CATEGORIES } from "@/lib/config";
import {
  TrophyIcon,
  FilmIcon,
  LayersIcon,
  CameraIcon,
  NewsIcon,
  SparkleIcon,
} from "./icons";
import { Reveal } from "./reveal";

const ICONS = [TrophyIcon, FilmIcon, LayersIcon, CameraIcon, NewsIcon, SparkleIcon];
const ACCENTS = [
  "from-primary to-primary-dark",
  "from-blue to-primary",
  "from-cyan to-blue",
  "from-primary-light to-primary",
  "from-blue to-cyan",
  "from-primary to-blue",
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      <Image
        src="/assets/ambient-texture.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-50" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/75">
            Univers IRON TV
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-[2.4rem]">
            Une expérience de streaming premium
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/55">
            Sport, cinéma, séries, documentaires et information : tout votre
            divertissement réuni dans une seule expérience.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" delay={100}>
          {EXPERIENCE_CATEGORIES.map((cat, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={cat.title}
                className="card-glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_44px_-20px_rgba(76,110,245,0.45)]"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white transition-transform duration-300 group-hover:scale-110 ${ACCENTS[i]}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-white">
                  {cat.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                  {cat.desc}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
