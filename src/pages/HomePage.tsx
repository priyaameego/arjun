import React from 'react';
import ScrollFrameHero from '../components/ScrollFrameHero';
import TestimonialSlider from '../components/TestimonialSlider';
import JourneySection from '../sections/JourneySection';
import ProductsSection from '../sections/ProductsSection';
import VendorsSection from '../sections/VendorsSection';
import CertificationsSection from '../sections/CertificationsSection';

const HomePage: React.FC = () => {
  return (
    <main>
      {/* 1. Full-screen frame sequence hero */}
      <ScrollFrameHero />

      {/* 2. Our Journey — 26 years asymmetric editorial */}
      <JourneySection />

      {/* Subtle section transition */}
      <div className="h-px bg-charcoal-100" />

      {/* 3. Our Products — Arjun Gold campaign */}
      <ProductsSection />

      {/* 4. Our Vendors — dark industrial showcase */}
      <VendorsSection />

      {/* 5. Certified Products — credibility section */}
      <CertificationsSection />

      {/* 6. Testimonials */}
      <TestimonialSlider />
    </main>
  );
};

export default HomePage;
