import { FEATURES } from "@/lib/config";
import {
  ClockIcon,
  FilmIcon,
  HeadsetIcon,
  LayersIcon,
  ShieldIcon,
  TvIcon,
} from "./icons";
import { Reveal } from "./reveal";

const ICONS = [TvIcon, FilmIcon, LayersIcon, ClockIcon, ShieldIcon, HeadsetIcon];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-ink-soft py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-40" />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal className="lg:sticky lg:top-32">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary-light">
              Pourquoi Atlas Pro TV
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-[2.4rem] sm:leading-[1.15]">
              Une référence IPTV pensée pour la France
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/55">
              Une infrastructure stable, un catalogue riche et un support
              réactif : tout ce qu&apos;il faut pour ne plus jamais rater vos
              programmes préférés.
            </p>
          </Reveal>

          <Reveal className="grid gap-5 sm:grid-cols-2" delay={100}>
            {FEATURES.map((feature, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={feature.title}
                  className="card-glass group rounded-2xl p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white/[0.06] hover:shadow-[0_16px_36px_-20px_rgba(47,111,237,0.4)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary text-white shadow-[0_8px_20px_-8px_rgba(47,111,237,0.7)] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/55">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
