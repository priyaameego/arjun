import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { journeyText } from '../data/content';

const JourneySection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden" id="journey">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

          {/* Left — Oversized number + image composition */}
          <div className="lg:col-span-5 relative">
            <AnimatedSection direction="left" className="relative">
              {/* Industrial image */}
              <div className="relative overflow-hidden aspect-[4/5] max-h-[520px]">
                <img
                  src="https://arjuncement.com/images/img_bg_4.jpg"
                  alt="Arjun Cement plant and operations"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://arjuncement.com/images/06.jpg';
                  }}
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-charcoal-900/10" />
                {/* Red accent corner */}
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-brand-red" />
              </div>

              {/* Oversized 26 — floats over image */}
              <div
                className="absolute -right-6 -bottom-8 lg:-right-12 pointer-events-none select-none"
                aria-hidden="true"
              >
                <span
                  className="display-number text-[10rem] sm:text-[12rem] lg:text-[14rem] text-charcoal-100 leading-none"
                  style={{ lineHeight: 0.85 }}
                >
                  26
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — Editorial text composition */}
          <div className="lg:col-span-7 lg:pl-16 xl:pl-24 pt-16 lg:pt-0 relative z-10">
            <AnimatedSection delay={100}>
              <span className="section-eyebrow">{journeyText.welcome}</span>
            </AnimatedSection>

            <AnimatedSection delay={200} className="mt-4">
              <div className="flex items-baseline gap-4">
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-800 text-charcoal-900 leading-tight2 tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  {journeyText.heading}
                </h2>
              </div>
            </AnimatedSection>

            {/* Years block */}
            <AnimatedSection delay={300} className="mt-6 lg:mt-8 flex items-center gap-6">
              <div className="flex items-end gap-2">
                <span
                  className="font-display font-800 text-5xl lg:text-6xl text-brand-red leading-none"
                  style={{ fontWeight: 800 }}
                >
                  {journeyText.years}
                </span>
                <div className="pb-1">
                  <span className="block font-display font-700 text-sm uppercase tracking-[0.2em] text-charcoal-900" style={{ fontWeight: 700 }}>
                    {journeyText.yearsLabel}
                  </span>
                  <span className="block font-body font-400 text-xs uppercase tracking-[0.2em] text-charcoal-400">
                    {journeyText.experience}
                  </span>
                </div>
              </div>
              {/* Animated accent line */}
              <div className="flex-1 h-px bg-gradient-to-r from-brand-red to-charcoal-100" />
            </AnimatedSection>

            <AnimatedSection delay={400} className="mt-8">
              <p className="text-base lg:text-lg text-charcoal-500 leading-relaxed max-w-xl font-body">
                {journeyText.paragraph}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500} className="mt-8 flex gap-3 items-center">
              <a href="/about" className="btn-primary">
                Our Story
              </a>
              <a href="/contact" className="btn-outline text-charcoal-800 border-charcoal-300 hover:bg-charcoal-900 hover:text-white hover:border-charcoal-900 text-sm">
                Contact Us
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
