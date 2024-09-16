import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import SocialProofTestimonials from "@/components/landing/testimonials-section";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";
import CallToAction from "@/components/landing/hey-lifey";
import HowItWorksSection from "@/components/landing/how-it-works-section";
import FaqSection from "@/components/landing/faq-section";

export default async function Page() {
  return (
    <>
      <HeroSection />
      {/* <Companies /> */}
      <CallToAction />
      {/* <ClientSection /> */}
      <SphereMask />
      <HowItWorksSection />
      <PricingSection />
      <CallToActionSection />
      <FaqSection />
      {/* <BentoSection /> */}
      {/* <SocialProofTestimonials /> */}
      <Particles
        className="absolute inset-0 -z-10"
        quantity={50}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </>
  );
}
