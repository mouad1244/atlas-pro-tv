import { TESTIMONIALS } from "@/lib/config";
import { StarIcon } from "./icons";

const LOOP = [...TESTIMONIALS, ...TESTIMONIALS];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary-dark">
            Témoignages clients
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-[2.4rem]">
            Ce que disent nos clients
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-black/55">
            Plus de 15 000 clients nous font confiance chaque jour en France
            et en Europe.
          </p>
        </div>
      </div>

      <div className="group relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-28" />

        <div
          className="flex w-max items-stretch gap-5 px-5 py-2 animate-marquee group-hover:[animation-play-state:paused] sm:gap-6 sm:px-8"
          style={{ animationDuration: "60s" }}
        >
          {LOOP.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="relative flex h-[302px] w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-black/6 bg-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_20px_44px_-18px_rgba(16,10,35,0.2)] sm:w-[340px]"
            >
              {/* Avatar banner */}
              <div className="relative h-20 shrink-0 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-ink-soft">
                <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
                <div className="pointer-events-none absolute inset-0 grain-noise" />
              </div>
              <span className="absolute left-6 top-[3.25rem] flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary-light to-primary text-[15px] font-semibold text-white shadow-md">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
                <p className="text-[14.5px] font-semibold text-ink">{t.name}</p>
                <p className="text-[12.5px] text-black/45">{t.role}</p>

                <div className="mt-3 flex items-center gap-1 text-amber">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <StarIcon key={star} className="h-3.5 w-3.5" />
                  ))}
                </div>

                <p className="mt-3 line-clamp-4 flex-1 text-[14px] leading-relaxed text-black/70">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page">
        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4 rounded-2xl border border-black/6 bg-surface-light px-6 py-4 text-center sm:gap-6">
          <div className="flex items-center gap-1 text-amber">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="h-4 w-4" />
            ))}
          </div>
          <span className="h-8 w-px bg-black/10" />
          <p className="text-[14px] text-black/60">
            <span className="font-semibold text-ink">4,8/5</span> sur{" "}
            <span className="font-semibold text-ink">500+ avis</span> vérifiés
          </p>
        </div>
      </div>
    </section>
  );
}
