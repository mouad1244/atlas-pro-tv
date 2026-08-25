import Image from "next/image";
import { DEVICES, waLink } from "@/lib/config";
import { MonitorIcon } from "./icons";
import { Reveal } from "./reveal";

const ICON_IMAGES = [
  "/assets/icon-tv.png",
  "/assets/icon-mobile.png",
  null,
  "/assets/icon-box.png",
];

export function Devices() {
  return (
    <section id="devices" className="relative overflow-hidden bg-ink py-20 md:py-28">
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
            const iconSrc = ICON_IMAGES[i];
            return (
              <div
                key={device.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/8 hover:shadow-[0_16px_36px_-16px_rgba(124,92,255,0.4)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/8 p-2 transition-transform duration-300 group-hover:scale-110">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <MonitorIcon className="h-6 w-6 text-primary-light" />
                  )}
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
            href={waLink("Bonjour, j'ai besoin d'aide pour installer Atlas Pro TV.")}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-[14px] font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Besoin d&apos;aide pour l&apos;installation ?
          </a>
        </div>
      </div>
    </section>
  );
}
