import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Pricing } from "@/components/pricing";
import { Features } from "@/components/features";
import { Experience } from "@/components/experience";
import { GenreMarquee } from "@/components/genre-marquee";
import { Devices } from "@/components/devices";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Pricing />
        <Features />
        <Experience />
        <GenreMarquee />
        <Devices />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
