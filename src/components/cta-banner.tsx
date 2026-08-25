import { waLink } from "@/lib/config";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <Reveal className="container-page relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-[2.5rem] sm:leading-[1.15]">
          Prêt à changer votre façon de regarder la TV ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-white/60">
          Rejoignez plus de 15 000 abonnés en France et en Europe. Activation
          immédiate, sans engagement.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-light via-primary to-primary-dark px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_18px_40px_-12px_rgba(124,92,255,0.65)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Choisir mon forfait
          </a>
          <a
            href={waLink("Bonjour, je souhaite tester Atlas Pro TV gratuitement.")}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Essai gratuit 24h
          </a>
        </div>
      </Reveal>
    </section>
  );
}
