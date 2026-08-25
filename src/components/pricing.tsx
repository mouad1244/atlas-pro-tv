import { PLANS } from "@/lib/config";
import { PricingCard } from "./pricing-card";
import { Countdown } from "./countdown";
import { ShieldIcon, ZapIcon, HeadsetIcon } from "./icons";
import { Reveal } from "./reveal";

const TRUST_ITEMS = [
  { icon: ZapIcon, label: "Activation en moins de 15 minutes" },
  { icon: ShieldIcon, label: "Paiement 100% sécurisé" },
  { icon: HeadsetIcon, label: "Support francophone 7j/7" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-surface-light py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary-dark">
            Tarifs &amp; abonnements
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-[2.6rem]">
            Choisissez votre formule Atlas Pro TV
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-black/55">
            Des abonnements officiels pensés pour la France et l&apos;Europe,
            avec un accès immédiat à plus de 18 000 chaînes et 40 000 films
            &amp; séries en HD/4K.
          </p>

          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-[13.5px] font-medium text-primary-dark">
            <span>🔥 Offre limitée, se termine dans</span>
            <Countdown className="flex items-center font-semibold text-ink" />
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-7">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.id} className="h-full" delay={100 + i * 120}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-black/8 pt-10 sm:flex-row sm:justify-center sm:gap-12">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-[13.5px] font-medium text-black/60">
              <item.icon className="h-4 w-4 text-primary-dark" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
