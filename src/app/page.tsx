/**
 * Homepage
 * Main landing page - CV Mandiri Multi Usaha
 */

import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialSlider from "@/components/home/TestimonialSlider";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsCounter />
      <ServicesOverview />
      <TestimonialSlider />
      <CTASection />
    </>
  );
}
