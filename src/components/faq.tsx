"use client";

import { useState } from "react";
import { FAQS, waLink } from "@/lib/config";
import { ChevronDownIcon } from "./icons";
import { Reveal } from "./reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-surface-light py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-[13px] font-semibold text-primary-dark">
            Questions fréquentes
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-[2.4rem]">
            Vous avez des questions ?
          </h2>
        </Reveal>

        <Reveal
          className="mx-auto mt-14 max-w-3xl divide-y divide-black/8 rounded-2xl border border-black/8 bg-white"
          delay={100}
        >
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-primary/[0.03]"
                  aria-expanded={open}
                >
                  <span className="text-[15px] font-medium text-ink">{item.q}</span>
                  <ChevronDownIcon
                    className={`h-4.5 w-4.5 shrink-0 text-black/40 transition-transform duration-300 ${
                      open ? "rotate-180 text-primary-dark" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-black/55">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl bg-ink px-7 py-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-[15.5px] font-semibold text-white">
              Vous n&apos;avez pas trouvé votre réponse ?
            </h3>
            <p className="mt-1 text-[13.5px] text-white/55">
              Notre équipe est disponible 7j/7 pour vous accompagner.
            </p>
          </div>
          <a
            href={waLink("Bonjour, j'ai une question sur Atlas Pro TV.")}
            className="shrink-0 rounded-full bg-white px-6 py-3 text-[14px] font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            Contacter le support
          </a>
        </div>
      </div>
    </section>
  );
}
