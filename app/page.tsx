import React from "react";
import HeroHeader from "@/components/hero-header";
import TrustedCompanies from "@/components/trusted-companies";
import WeOffer from "@/components/we-offer";
import FeaturesSection from "@/components/features-section";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <HeroHeader
        logoSrc="/images/logo.png"
        illustrationSrc="/images/Rectangle 305.png"
        // do not pass functions from a Server Component to a Client Component
      />
      <TrustedCompanies />
      <WeOffer />
      <FeaturesSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
