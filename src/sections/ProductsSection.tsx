import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { productsSection, arjunGold } from '../data/content';

const ProductsSection: React.FC = () => {
  return (
    <section className="bg-warm-grey py-20 lg:py-28 overflow-hidden" id="products">
      <div className="container-premium">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <AnimatedSection>
            <span className="section-eyebrow">Our Products</span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 text-charcoal-900 mt-4 leading-tight2 tracking-tight max-w-2xl"
              style={{ fontWeight: 800 }}
            >
              {productsSection.heading}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100} className="mt-6 max-w-2xl">
            <p className="text-charcoal-500 leading-relaxed">
              {productsSection.intro}
            </p>
          </AnimatedSection>
        </div>

        {/* Arjun Gold — Campaign Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center bg-white">
          {/* Left — Product image */}
          <AnimatedSection
            className="lg:col-span-6 relative"
            direction="left"
          >
            <div className="relative overflow-hidden aspect-square lg:aspect-[4/5] max-h-[600px] bg-cream group">
              <img
                src={arjunGold.image}
                alt="Arjun Gold Portland Pozzolana Cement"
                className="w-full h-full object-contain p-12 lg:p-16 transition-transform duration-[900ms] group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Decorative number */}
              <span
                className="absolute top-6 left-6 font-display font-800 text-8xl text-charcoal-100 leading-none select-none pointer-events-none"
                aria-hidden="true"
                style={{ fontWeight: 800 }}
              >
                {arjunGold.number}
              </span>
              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          </AnimatedSection>

          {/* Right — Product info */}
          <div className="lg:col-span-6 lg:pl-16 xl:pl-20 py-10 lg:py-16 px-6 lg:px-0">
            <AnimatedSection delay={100}>
              <span className="section-eyebrow">{arjunGold.eyebrow}</span>
            </AnimatedSection>

            <AnimatedSection delay={200} className="mt-4">
              <h3
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 text-charcoal-900 leading-tight2 tracking-tight"
                style={{ fontWeight: 800 }}
              >
                {arjunGold.name}
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={250} className="mt-3">
              <p className="font-display font-300 text-lg text-brand-red tracking-wider" style={{ fontWeight: 300 }}>
                {arjunGold.tagline}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300} className="mt-2">
              <div className="w-12 h-0.5 bg-brand-red" />
            </AnimatedSection>

            <AnimatedSection delay={350} className="mt-6">
              <p className="text-charcoal-500 leading-relaxed max-w-md">
                {arjunGold.description}
              </p>
            </AnimatedSection>

            {/* Feature points */}
            <AnimatedSection delay={400} className="mt-8 space-y-3">
              {[
                'Premium Grey Cement (PPC)',
                'BIS Certified Quality Standards',
                'Application Friendly Formula',
                'Retail & Institutional Segment',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-brand-red shrink-0" />
                  <span className="text-sm text-charcoal-600">{point}</span>
                </div>
              ))}
            </AnimatedSection>

            <AnimatedSection delay={500} className="mt-10">
              <a href="/arjun" className="btn-primary">
                View Product Details
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
