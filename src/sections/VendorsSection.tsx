import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { vendors } from '../data/content';

const VendorsSection: React.FC = () => {
  return (
    <section
      className="relative py-20 lg:py-28 bg-charcoal-900 overflow-hidden"
      id="vendors"
    >
      {/* Background industrial image with heavy overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: 'url(https://arjuncement.com/images/building-3.jpg)' }}
        />
        <div className="absolute inset-0 bg-charcoal-900/80" />
      </div>

      {/* Fine grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/3" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/3" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/3" />
      </div>

      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <AnimatedSection>
            <span className="section-eyebrow !text-brand-red">Trusted Partners</span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 text-white mt-4 leading-tight2 tracking-tight"
              style={{ fontWeight: 800 }}
            >
              Our Vendors
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100} className="lg:max-w-xs">
            <p className="text-white/40 text-sm leading-relaxed">
              Proudly partnered with India's leading industrial and energy institutions.
            </p>
          </AnimatedSection>
        </div>

        {/* Top divider */}
        <div className="h-px bg-white/10 mb-12" />

        {/* Vendor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0">
          {vendors.map((vendor, i) => (
            <AnimatedSection
              key={vendor.id}
              delay={i * 80}
              className="relative group"
            >
              <div className="flex flex-col items-center justify-center py-10 px-6 border-r border-white/8 last:border-r-0 transition-all duration-500 hover:bg-white/5 cursor-default">
                <div className="h-16 flex items-center justify-center mb-4">
                  <img
                    src={vendor.logo}
                    alt={`${vendor.name} logo`}
                    className="max-h-full max-w-[120px] object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="font-display font-700 text-white/40 group-hover:text-white/80 text-base tracking-widest uppercase transition-colors duration-500">${vendor.name}</span>`;
                      }
                    }}
                  />
                </div>
                <span className="text-white/30 group-hover:text-white/60 text-xs tracking-[0.2em] uppercase font-500 transition-colors duration-500" style={{ fontWeight: 500 }}>
                  {vendor.name}
                </span>
                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-white/10 mt-0" />
      </div>
    </section>
  );
};

export default VendorsSection;
