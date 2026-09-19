import React from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { productsSection, arjunGold, certifications } from '../data/content';

const ProductsPage: React.FC = () => {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        title="Our Range of Products"
        eyebrow="SECRET OF OUR SUCCESS"
        image="https://arjuncement.com/images/img_bg_3.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Our Range of Products' },
        ]}
      />

      {/* 2. Products intro */}
      <section className="py-16 lg:py-20 bg-warm-grey">
        <div className="container-premium">
          <AnimatedSection>
            <span className="section-eyebrow">Our Products</span>
            <h2
              className="text-4xl sm:text-5xl font-display font-800 text-charcoal-900 mt-4 mb-6 leading-tight2 tracking-tight"
              style={{ fontWeight: 800 }}
            >
              {productsSection.heading}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-charcoal-500 leading-relaxed max-w-2xl">
              {productsSection.introExtended}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Arjun Gold — Full campaign */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            {/* Product image — large editorial */}
            <AnimatedSection className="lg:col-span-5 relative" direction="left">
              <div className="relative bg-cream aspect-[3/4] max-h-[640px] overflow-hidden group">
                <img
                  src={arjunGold.image}
                  alt="Arjun Gold Portland Pozzolana Cement"
                  className="w-full h-full object-contain p-12 lg:p-16 transition-transform duration-[900ms] group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                {/* Overlaid large number */}
                <span
                  className="absolute top-4 left-4 font-display font-800 text-[10rem] text-charcoal-100/60 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                  style={{ fontWeight: 800 }}
                >
                  {arjunGold.number}
                </span>
                {/* Red bottom line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </AnimatedSection>

            {/* Product details */}
            <div className="lg:col-span-7 lg:pl-16 xl:pl-24 py-12 lg:py-0">
              <AnimatedSection delay={100}>
                <span className="section-eyebrow">{arjunGold.eyebrow}</span>
              </AnimatedSection>
              <AnimatedSection delay={200} className="mt-4">
                <h2
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-800 text-charcoal-900 leading-tight2 tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  {arjunGold.name}
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={250} className="mt-3">
                <p className="font-display font-300 text-xl text-brand-red" style={{ fontWeight: 300 }}>
                  {arjunGold.tagline}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={300} className="mt-4">
                <div className="w-16 h-0.5 bg-brand-red" />
              </AnimatedSection>
              <AnimatedSection delay={350} className="mt-8">
                <p className="text-charcoal-500 leading-relaxed max-w-lg">
                  {arjunGold.description}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400} className="mt-8 space-y-4">
                {[
                  { label: 'Product Type', value: 'Portland Pozzolana Cement (PPC)' },
                  { label: 'Grade', value: 'Premium Grey Cement' },
                  { label: 'Standards', value: 'Bureau of Indian Standards (BIS)' },
                  { label: 'Market', value: 'Retail & Institutional Segment' },
                ].map((spec) => (
                  <div key={spec.label} className="flex items-start gap-4 pb-4 border-b border-charcoal-100">
                    <span className="text-xs text-charcoal-400 uppercase tracking-[0.15em] w-32 shrink-0 pt-0.5" style={{ fontWeight: 500 }}>
                      {spec.label}
                    </span>
                    <span className="text-charcoal-700 text-sm font-500" style={{ fontWeight: 500 }}>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </AnimatedSection>
              <AnimatedSection delay={500} className="mt-10">
                <a href="/contact" className="btn-primary">
                  Enquire Now
                </a>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quality assurance strip */}
      <section className="bg-brand-red py-12 lg:py-14">
        <div className="container-premium">
          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-display font-800 text-white text-2xl sm:text-3xl" style={{ fontWeight: 800 }}>
                BIS Certified Quality
              </p>
              <p className="text-white/70 text-sm mt-1">
                Bureau of Indian Standards compliance — the mark of quality you can trust.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {certifications.slice(0, 3).map((cert) => (
                <div key={cert.id} className="h-12 w-12 flex items-center justify-center bg-white/10 p-1">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
