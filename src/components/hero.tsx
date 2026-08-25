import Image from "next/image";
import { StarIcon, ZapIcon } from "./icons";
import { Countdown } from "./countdown";
import { CONTENT_ITEMS, DEVICE_ITEMS, Marquee } from "./marquee";
import { StatCounter } from "./stat-counter";

const STATS = [
  { value: "18 000+", label: "chaînes en direct" },
  { value: "40 000+", label: "films & séries VOD" },
  { value: "15 000+", label: "clients satisfaits" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink pt-20 pb-20 md:pt-24 md:pb-28">
      <Image
        src="/assets/hero-bg-mobile.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70 md:hidden"
      />
      <Image
        src="/assets/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover opacity-70 md:block"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/55 to-ink" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow animate-glow" />
      <div className="pointer-events-none absolute inset-0 grain-noise" />

      <div className="relative">
        <Marquee items={DEVICE_ITEMS} />
        <Marquee items={CONTENT_ITEMS} reverse />
      </div>

      <div className="container-page relative mt-14 flex flex-col items-center text-center md:mt-20">
        <div
          className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[13px] font-medium text-white/80 backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Offre de lancement — places limitées
        </div>

        <h1
          className="animate-fade-up mt-6 max-w-3xl text-[2.6rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-6xl"
          style={{ animationDelay: "90ms" }}
        >
          <span className="text-metal block text-2xl font-extrabold uppercase tracking-[0.28em] sm:text-3xl">
            Iron TV
          </span>
          <span className="mt-3 block">
            Une nouvelle génération
            <br />
            de <span className="text-gradient">divertissement</span>.
          </span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-xl text-[17px] leading-relaxed text-white/60"
          style={{ animationDelay: "180ms" }}
        >
          Plus de 18 000 chaînes en direct et 40 000 films &amp; séries en
          HD/4K, sur tous vos écrans. Activation en quelques minutes, sans
          engagement, avec un support francophone disponible 7j/7.
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          style={{ animationDelay: "270ms" }}
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-light via-primary to-blue px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(124,92,255,0.65)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Voir les forfaits
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Découvrir IRON TV
          </a>
        </div>

        <div
          className="animate-fade-up mt-7 inline-flex items-center gap-2.5 rounded-full border border-amber/25 bg-amber/10 px-4 py-2 text-[13px] font-medium text-amber"
          style={{ animationDelay: "360ms" }}
        >
          <ZapIcon className="h-3.5 w-3.5" />
          Offre se termine dans
          <Countdown className="flex items-center font-semibold text-white" />
        </div>

        <div
          className="animate-fade-up mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          style={{ animationDelay: "450ms" }}
        >
          <div className="flex -space-x-2.5">
            {["MK", "SB", "AL", "JD"].map((initials) => (
              <span
                key={initials}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-gradient-to-br from-primary-light to-primary text-[11px] font-semibold text-white"
              >
                {initials}
              </span>
            ))}
          </div>
          <div className="text-left text-[13.5px] text-white/60">
            <div className="flex items-center gap-1 text-amber">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
              <span className="ml-1.5 font-semibold text-white">4,8/5</span>
            </div>
            <p className="mt-0.5">+15 000 clients satisfaits en France & Europe</p>
          </div>
        </div>

        <div
          className="animate-fade-up mt-14 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-10"
          style={{ animationDelay: "540ms" }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="transition-transform duration-300 hover:-translate-y-0.5">
              <StatCounter
                value={stat.value}
                className="text-2xl font-semibold text-white sm:text-3xl"
              />
              <p className="mt-1 text-[12.5px] text-white/50 sm:text-[13px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
