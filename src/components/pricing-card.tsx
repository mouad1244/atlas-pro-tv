import Image from "next/image";
import type { Plan } from "@/lib/config";
import { waLink } from "@/lib/config";
import { CheckIcon, ShieldIcon } from "./icons";

function discountPercent(price: string, oldPrice: string) {
  const p = parseFloat(price.replace(",", "."));
  const o = parseFloat(oldPrice.replace(",", "."));
  return Math.round((1 - p / o) * 100);
}

export function PricingCard({ plan }: { plan: Plan }) {
  const discount = discountPercent(plan.price, plan.oldPrice);

  return (
    <div
      className={`group relative flex h-full flex-col rounded-[1.75rem] p-7 transition-all duration-300 ease-out sm:p-8 ${
        plan.featured
          ? "border border-primary/40 bg-gradient-to-b from-surface to-ink-soft shadow-[0_25px_60px_-20px_rgba(124,92,255,0.55)] hover:-translate-y-2 hover:shadow-[0_32px_70px_-16px_rgba(124,92,255,0.65)] lg:-translate-y-4 lg:hover:-translate-y-6"
          : "border border-black/6 bg-white shadow-[0_1px_2px_rgba(16,10,35,0.04)] hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-[0_24px_48px_-20px_rgba(16,10,35,0.18)]"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-light to-primary px-4 py-1.5 text-[12px] font-semibold text-white shadow-lg">
          {plan.badge}
        </span>
      )}

      <div className={plan.featured ? "text-white" : "text-ink"}>
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-[12.5px] font-semibold ${
            plan.featured ? "bg-white/10 text-primary-light" : "bg-ink text-white"
          }`}
        >
          {plan.screens} · {plan.duration}
        </span>
        <h3 className="mt-3 text-[1.4rem] font-semibold tracking-tight">
          {plan.name}
        </h3>

        <div className="mt-5 flex flex-wrap items-end gap-2.5">
          <span className="text-[2.75rem] font-semibold leading-none tracking-tight">
            {plan.price}€
          </span>
          <span
            className={`mb-1.5 text-[15px] line-through ${
              plan.featured ? "text-white/40" : "text-black/35"
            }`}
          >
            {plan.oldPrice}€
          </span>
          <span className="mb-1.5 inline-flex items-center rounded-full bg-amber/15 px-2 py-0.5 text-[12px] font-semibold text-amber">
            -{discount}%
          </span>
        </div>
        <p className={`mt-1.5 text-[13px] ${plan.featured ? "text-white/50" : "text-black/45"}`}>
          {plan.perMonth} · paiement unique
        </p>
      </div>

      <a
        href={waLink(
          `Bonjour, je souhaite souscrire à l'offre ${plan.name} (${plan.screens}, ${plan.duration}) à ${plan.price}€.`
        )}
        className={`mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[14.5px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
          plan.featured
            ? "bg-white text-ink shadow-[0_12px_28px_-10px_rgba(255,255,255,0.35)] hover:shadow-[0_16px_34px_-8px_rgba(255,255,255,0.5)]"
            : "bg-ink text-white shadow-[0_12px_28px_-14px_rgba(16,10,35,0.5)] hover:shadow-[0_16px_34px_-10px_rgba(16,10,35,0.6)]"
        }`}
      >
        S&apos;abonner maintenant
      </a>

      <div
        className={`mt-4 flex flex-col gap-3 border-t pt-4 ${
          plan.featured ? "border-white/10" : "border-black/8"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-2 text-[12px] ${
            plan.featured ? "text-white/45" : "text-black/45"
          }`}
        >
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

        <div
          className={`flex items-center gap-2 text-[12px] font-medium ${
            plan.featured ? "text-white/60" : "text-black/50"
          }`}
        >
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

      <ul className="mt-7 flex flex-1 flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-[14px] leading-snug">
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.featured ? "bg-primary/25 text-primary-light" : "bg-primary/10 text-primary-dark"
              }`}
            >
              <CheckIcon className="h-3 w-3" />
            </span>
            <span className={plan.featured ? "text-white/75" : "text-black/65"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
