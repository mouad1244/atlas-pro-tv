import { ZapIcon, HeadsetIcon, TvIcon, LayersIcon, ShieldIcon } from "./icons";

const ITEMS = [
  { icon: ZapIcon, label: "Activation rapide" },
  { icon: HeadsetIcon, label: "Support francophone 7j/7" },
  { icon: TvIcon, label: "HD · Full HD · 4K" },
  { icon: LayersIcon, label: "Multi-appareils" },
  { icon: ShieldIcon, label: "Paiement sécurisé" },
];

export function TrustBar() {
  return (
    <section className="relative border-y border-white/8 bg-ink py-5">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-[13px] font-medium text-white/60">
            <item.icon className="h-4 w-4 shrink-0 text-primary-light" />
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
