import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { certifications, certificationText } from '../data/content';

const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="certifications">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left — editorial heading */}
          <div className="lg:col-span-4">
            <AnimatedSection direction="left">
              <span className="section-eyebrow">Recognition</span>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-display font-800 text-charcoal-900 mt-4 leading-tight2 tracking-tight"
                style={{ fontWeight: 800 }}
              >
                We Give You<br />
                <span className="text-brand-red">Certified</span><br />
                Products
              </h2>
              <div className="divider-red mt-6 mb-8" />
              <p className="text-charcoal-500 leading-relaxed text-sm max-w-xs">
                {certificationText.paragraph}
              </p>
            </AnimatedSection>
          </div>

          {/* Right — Certifications grid */}
          <div className="lg:col-span-8">
            {/* Large decorative text */}
            <AnimatedSection direction="right" className="mb-10 overflow-hidden">
              <span
                className="font-display font-800 text-[7rem] lg:text-[9rem] leading-none text-charcoal-50 select-none pointer-events-none block"
                aria-hidden="true"
                style={{ fontWeight: 800 }}
              >
                CERTIFIED
              </span>
            </AnimatedSection>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-0 border border-charcoal-100 -mt-12 relative z-10 bg-white">
              {certifications.map((cert, i) => (
                <AnimatedSection
                  key={cert.id}
                  delay={i * 100}
                  className="group relative"
                >
                  <div className="flex flex-col items-center justify-center p-6 sm:p-8 border-r border-charcoal-100 last:border-r-0 transition-colors duration-400 hover:bg-warm-grey cursor-default aspect-square sm:aspect-auto sm:h-36">
                    <div className="h-16 flex items-center justify-center">
                      <img
                        src={cert.logo}
                        alt={`${cert.name} certification`}
                        className="max-h-full max-w-[80px] sm:max-w-[100px] object-contain transition-transform duration-400 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span class="font-display font-700 text-charcoal-600 text-sm tracking-wider text-center">${cert.name}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-xs text-charcoal-400 mt-3 tracking-[0.12em] uppercase font-500 text-center" style={{ fontWeight: 500 }}>
                      {cert.name}
                    </span>
                    {/* Bottom accent on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
