import Image from "next/image";
import type { Plan } from "@/lib/config";
import { waLink } from "@/lib/config";
import { CheckIcon, GiftIcon, ShieldIcon } from "./icons";

function discountPercent(price: string, oldPrice: string) {
  const p = parseFloat(price.replace(",", "."));
  const o = parseFloat(oldPrice.replace(",", "."));
  return Math.round((1 - p / o) * 100);
}

export function PricingCard({ plan }: { plan: Plan }) {
  const discount = discountPercent(plan.price, plan.oldPrice);

  return (
    <div
      className={`group relative flex h-full flex-col rounded-[2rem] p-7 text-white transition-all duration-300 ease-out sm:p-8 ${
        plan.featured
          ? "border border-primary/40 bg-gradient-to-b from-surface to-ink-soft shadow-[0_25px_60px_-20px_rgba(124,92,255,0.55)] hover:-translate-y-2 hover:shadow-[0_34px_74px_-16px_rgba(76,110,245,0.55)] lg:-translate-y-4 lg:hover:-translate-y-6"
          : "card-glass hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_28px_56px_-20px_rgba(76,110,245,0.3)]"
      }`}
    >
      {plan.badge && (
        <span className="animate-badge-pulse absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-light via-primary to-cyan px-4 py-1.5 text-[12px] font-bold text-white shadow-lg">
          {plan.badge}
        </span>
      )}

      <div>
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[12.5px] font-semibold text-primary-light">
          {plan.screens} · {plan.duration}
        </span>

        {plan.bonusMonths && (
          <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gradient-to-r from-amber via-[#ffcf70] to-amber px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-ink shadow-[0_8px_20px_-8px_rgba(255,181,69,0.75)]">
            <GiftIcon className="h-3.5 w-3.5 shrink-0" />
            {plan.duration} + {plan.bonusMonths} mois offerts
          </div>
        )}

        <h3 className="mt-3 text-[1.4rem] font-semibold tracking-tight">
          {plan.name}
        </h3>

        <div className="mt-5 flex flex-wrap items-end gap-2.5">
          <span className="text-[2.9rem] font-bold leading-none tracking-tight">
            {plan.price}€
          </span>
          <span className="mb-1 text-[13px] font-medium text-white/40 line-through opacity-70">
            {plan.oldPrice}€
          </span>
          <span className="mb-1 inline-flex items-center rounded-full bg-amber/15 px-2 py-0.5 text-[11.5px] font-bold text-amber">
            -{discount}%
          </span>
        </div>
        <p className="mt-1.5 text-[13px] text-white/50">
          {plan.perMonth} · paiement unique
        </p>
      </div>

      <a
        href={waLink(
          `Bonjour, je souhaite souscrire à l'offre ${plan.name} (${plan.screens}, ${plan.duration}) à ${plan.price}€.`
        )}
        className="mt-7 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber via-[#ffcf70] to-amber px-6 py-3.5 text-[13.5px] font-bold uppercase tracking-wide text-ink shadow-[0_14px_30px_-10px_rgba(255,181,69,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-8px_rgba(255,181,69,0.75)] active:scale-[0.98] active:translate-y-0"
      >
        Profitez de l&apos;offre
      </a>

      <ul className="mt-7 flex flex-1 flex-col gap-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[14px] leading-relaxed">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-light/30 to-cyan/20 text-primary-light">
              <CheckIcon className="h-3 w-3" />
            </span>
            <span className="text-white/75">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center justify-between gap-2 text-[12px] text-white/45">
          <span className="flex items-center gap-1.5">
            <ShieldIcon className="h-3.5 w-3.5 shrink-0" />
            Paiement sécurisé
          </span>
          <span className="rounded bg-white/95 px-1.5 py-1">
            <Image
              src="/assets/payment-methods.png"
              alt="Visa, Mastercard, Amex, PayPal, Discover, Apple Pay, Google Pay"
              width={140}
              height={16}
              className="h-3 w-auto"
            />
          </span>
        </div>

        <div className="flex items-center gap-2 text-[12px] font-medium text-white/60">
          <Image
            src="/assets/badge-guarantee.png"
            alt="Garantie satisfaction 100%, 7 jours"
            width={22}
            height={22}
            className="h-[22px] w-[22px] shrink-0"
          />
          Garantie satisfaction 7 jours
        </div>
      </div>
    </div>
  );
}
