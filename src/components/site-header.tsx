"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS, SITE, waLink } from "@/lib/config";
import { CloseIcon, MenuIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-xl border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3.5">
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/assets/logo.png"
            alt={SITE.name}
            width={381}
            height={199}
            className="h-8 w-auto object-contain md:h-9"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14.5px] font-medium text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waLink("Bonjour, je souhaite un essai gratuit Atlas Pro TV.")}
            className="text-[14.5px] font-medium text-white/75 hover:text-white transition-colors"
          >
            Essai gratuit
          </a>
          <a
            href="#pricing"
            className="rounded-full bg-white px-5 py-2.5 text-[14.5px] font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Voir les tarifs
          </a>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white"
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/8 bg-ink/97 backdrop-blur-xl">
          <div className="container-page flex flex-col gap-1 py-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-white px-5 py-3 text-center text-[15px] font-semibold text-ink"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
