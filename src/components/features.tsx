import { FEATURES } from "@/lib/config";
import {
  ClockIcon,
  FilmIcon,
  HeadsetIcon,
  LayersIcon,
  ShieldIcon,
  TvIcon,
} from "./icons";

const ICONS = [TvIcon, FilmIcon, LayersIcon, ClockIcon, ShieldIcon, HeadsetIcon];

export function Features() {
  return (
    <section id="features" className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary-dark">
              Pourquoi Atlas Pro TV
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-[2.4rem] sm:leading-[1.15]">
              Une référence IPTV pensée pour la France
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-black/55">
              Une infrastructure stable, un catalogue riche et un support
              réactif : tout ce qu&apos;il faut pour ne plus jamais rater vos
              programmes préférés.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {FEATURES.map((feature, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-black/6 bg-surface-light p-6 transition-colors hover:border-primary/25 hover:bg-primary/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-black/55">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
