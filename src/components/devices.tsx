import Image from "next/image";
import { DEVICES, waLink } from "@/lib/config";
import { TvIcon, PhoneIcon, MonitorIcon, BoxIcon } from "./icons";
import { Reveal } from "./reveal";

const DEVICE_ICONS = [TvIcon, PhoneIcon, MonitorIcon, BoxIcon];
const ACCENTS = ["hover:border-primary/40", "hover:border-blue/50", "hover:border-cyan/40", "hover:border-primary/40"];

export function Devices() {
  return (
    <section id="devices" className="relative overflow-hidden bg-ink py-20 md:py-28">
      <Image
        src="/assets/ambient-texture.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-[13px] font-semibold text-white/75">
            Compatibilité
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-[2.4rem]">
            Regardez sur tous vos écrans
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/55">
            Une seule formule, tous vos appareils. Installation guidée fournie
            pour chaque plateforme.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={100}>
          {DEVICES.map((device, i) => {
            const Icon = DEVICE_ICONS[i];
            return (
              <div
                key={device.title}
                className={`group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:shadow-[0_16px_36px_-16px_rgba(76,110,245,0.4)] ${ACCENTS[i]}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/8 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-primary-light" />
                </span>
                <h3 className="mt-4 text-[15.5px] font-semibold text-white">
                  {device.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">
                  {device.desc}
                </p>
              </div>
            );
          })}
        </Reveal>

        <div className="mt-12 flex justify-center">
          <a
            href={waLink("Bonjour, j'ai besoin d'aide pour installer IRON TV.")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Besoin d&apos;aide pour l&apos;installation ?
          </a>
        </div>
      </div>
    </section>
  );
}
