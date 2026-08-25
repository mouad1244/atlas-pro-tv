import Image from "next/image";
import { NAV_LINKS, SITE, waLink } from "@/lib/config";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-ink pt-16 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/50">
              {SITE.name} est un service IPTV pensé pour la France et
              l&apos;Europe : plus de 18 000 chaînes en direct et 40 000
              films &amp; séries en HD/4K.
            </p>
          </div>

          <div>
            <h3 className="text-[13.5px] font-semibold text-white">Liens rapides</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[13.5px] font-semibold text-white">Support</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={waLink("Bonjour, j'ai besoin d'aide avec IRON TV.")}
                  className="text-[14px] text-white/50 transition-colors hover:text-white"
                >
                  WhatsApp — support 7j/7
                </a>
              </li>
              <li className="text-[14px] text-white/50">France &amp; Europe</li>
            </ul>

            <h3 className="mt-6 text-[13.5px] font-semibold text-white">Paiement</h3>
            <div className="mt-3 inline-block rounded-lg bg-white/95 px-3 py-2">
              <Image
                src="/assets/payment-methods.png"
                alt="Visa, Mastercard, Amex, PayPal, Discover, Apple Pay, Google Pay"
                width={220}
                height={26}
                className="h-5 w-auto"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-[12.5px] text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
          <p>Site non affilié aux chaînes ou plateformes citées.</p>
        </div>
      </div>
    </footer>
  );
}
