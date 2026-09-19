import React from 'react';
import PageHero from '../components/PageHero';
import TestimonialSlider from '../components/TestimonialSlider';
import AnimatedSection from '../components/AnimatedSection';
import { aboutCompany, ventures, directors } from '../data/content';

const AboutPage: React.FC = () => {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        title="About Us"
        eyebrow="OUR STORY"
        image="https://arjuncement.com/images/11.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* 2. Welcome to our Company */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="lg:col-span-6">
              <AnimatedSection direction="left">
                <span className="section-eyebrow">Welcome</span>
                <h2
                  className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 text-charcoal-900 mt-4 leading-tight2 tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  {aboutCompany.heading}
                </h2>
                <div className="divider-red mt-6 mb-8" />
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <p className="text-charcoal-500 leading-relaxed mb-5">
                  {aboutCompany.paragraph1}
                </p>
                <p className="text-charcoal-500 leading-relaxed">
                  {aboutCompany.paragraph2}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={200} className="mt-8">
                <a href="/contact" className="btn-primary">
                  Get in Touch
                </a>
              </AnimatedSection>
            </div>

            {/* Image */}
            <AnimatedSection className="lg:col-span-6" direction="right">
              <div className="relative overflow-hidden aspect-[4/5] max-h-[560px] group">
                <img
                  src={aboutCompany.image}
                  alt="Arjun Cement company"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://arjuncement.com/images/cem1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-charcoal-900/10" />
                {/* Decorative number */}
                <span
                  className="absolute bottom-6 right-6 font-display font-800 text-8xl text-white/10 leading-none select-none pointer-events-none"
                  aria-hidden="true"
                  style={{ fontWeight: 800 }}
                >
                  01
                </span>
                <div className="absolute bottom-0 left-0 w-20 h-0.5 bg-brand-red" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. Other Ventures — RSA Group */}
      <section className="py-20 lg:py-28 bg-charcoal-900 overflow-hidden" id="ventures">
        <div className="container-premium">
          <AnimatedSection>
            <span className="section-eyebrow !text-brand-red">Other Ventures</span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 text-white mt-4 leading-tight2 tracking-tight"
              style={{ fontWeight: 800 }}
            >
              RSA Group
            </h2>
          </AnimatedSection>

          <div className="h-px bg-white/10 mt-10 mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {ventures.map((venture, i) => (
              <AnimatedSection key={venture.id} delay={i * 120} className="group">
                <a
                  href={venture.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-8 md:p-10 border-r border-white/8 md:last:border-r-0 transition-colors duration-400 hover:bg-white/5 h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="font-display font-800 text-5xl text-white/10 group-hover:text-brand-red/30 transition-colors duration-500 leading-none"
                      aria-hidden="true"
                      style={{ fontWeight: 800 }}
                    >
                      {venture.number}
                    </span>
                    <div className="w-6 h-0.5 bg-brand-red mt-3 group-hover:w-10 transition-all duration-400" />
                  </div>
                  <h3
                    className="font-display font-700 text-xl text-white mb-4 group-hover:text-brand-red transition-colors duration-400"
                    style={{ fontWeight: 700 }}
                  >
                    {venture.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-400">
                    {venture.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-white/30 group-hover:text-brand-red transition-colors duration-400 text-xs tracking-widest uppercase">
                    <span>Visit</span>
                    <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-400" />
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>

          <div className="h-px bg-white/10 mt-0" />
        </div>
      </section>

      {/* 4. Board of Directors */}
      <section className="py-20 lg:py-28 bg-warm-grey overflow-hidden" id="directors">
        <div className="container-premium">
          <AnimatedSection className="text-center mb-14">
            <span className="section-eyebrow">Team</span>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-800 text-charcoal-900 mt-4 leading-tight2 tracking-tight"
              style={{ fontWeight: 800 }}
            >
              Board of <span className="text-brand-red">Directors</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {directors.map((director, i) => (
              <AnimatedSection key={director.id} delay={i * 120} className="group">
                <div className="relative overflow-hidden">
                  {/* Portrait */}
                  <div className="aspect-[3/4] overflow-hidden bg-charcoal-200">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover object-top transition-transform duration-[900ms] group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&background=2C2C2C&color=fff&size=400`;
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                  </div>

                  {/* Info — inside overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Accent line — reveals on hover */}
                    <div className="w-0 group-hover:w-8 h-0.5 bg-brand-red transition-all duration-500 mb-3" />
                    <h3
                      className="font-display font-700 text-white text-lg md:text-xl leading-tight"
                      style={{ fontWeight: 700 }}
                    >
                      {director.name}
                    </h3>
                    <p className="text-white/60 text-xs tracking-[0.15em] uppercase mt-1">
                      {director.designation}
                    </p>
                  </div>

                  {/* Decorative number */}
                  <span
                    className="absolute top-4 right-4 font-display font-800 text-4xl text-white/10 group-hover:text-white/20 transition-colors duration-500 leading-none select-none pointer-events-none"
                    aria-hidden="true"
                    style={{ fontWeight: 800 }}
                  >
                    {director.number}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <TestimonialSlider />
    </main>
  );
};

export default AboutPage;
