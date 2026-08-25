import { STEPS } from "@/lib/config";
import { Reveal } from "./reveal";

export function HowItWorks() {
  return (
    <section className="relative bg-surface-light py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary-dark">
            Comment ça marche
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-[2.4rem]">
            En ligne en moins de 15 minutes
          </h2>
        </Reveal>

        <Reveal className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8" delay={100}>
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-black/12 to-transparent md:block" />
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 md:items-start md:text-left"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-[15px] font-semibold text-white transition-transform duration-300 group-hover:scale-110">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[17px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-xs text-[14.5px] leading-relaxed text-black/55">
                {step.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
