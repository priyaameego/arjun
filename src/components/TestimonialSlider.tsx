import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/content';
import AnimatedSection from './AnimatedSection';

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="bg-warm-grey py-20 lg:py-28 overflow-hidden" id="testimonials">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left — Label */}
          <AnimatedSection className="lg:col-span-3" direction="left">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="text-3xl lg:text-4xl font-display font-800 text-charcoal-900 mt-4 leading-tight2" style={{ fontWeight: 800 }}>
              What Our<br />
              <span className="text-brand-red">Clients</span> Say
            </h2>
            <div className="divider-red mt-6 mb-8" />
            {/* Navigation */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:border-brand-red hover:text-brand-red transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 border border-charcoal-200 flex items-center justify-center text-charcoal-500 hover:border-brand-red hover:text-brand-red transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-0.5 transition-all duration-500 ${
                    i === current ? 'w-8 bg-brand-red' : 'w-3 bg-charcoal-200'
                  }`}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Testimonial card */}
          <AnimatedSection className="lg:col-span-9" delay={150}>
            <div className="relative bg-white p-8 md:p-12 lg:p-14">
              {/* Decorative quotation */}
              <span
                className="absolute top-6 right-8 text-[10rem] leading-none font-display font-800 text-charcoal-100 select-none pointer-events-none"
                aria-hidden="true"
                style={{ fontWeight: 800 }}
              >
                "
              </span>

              {/* Quote text */}
              <div
                key={current}
                className="relative z-10"
                style={{ animation: 'fadeUp 0.6s ease-out forwards' }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl font-display font-400 text-charcoal-800 leading-relaxed mb-8 max-w-2xl"
                   style={{ fontFamily: 'var(--font-display)' }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-charcoal-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=C0392B&color=fff&size=48`;
                      }}
                    />
                  </div>
                  <div>
                    <p className="font-display font-700 text-charcoal-900 text-sm tracking-wider uppercase" style={{ fontWeight: 700 }}>
                      {t.name}
                    </p>
                    <p className="text-xs text-charcoal-400 tracking-wide mt-0.5">Valued Customer</p>
                  </div>
                  <div className="ml-auto hidden sm:block">
                    <span className="font-display font-700 text-5xl text-charcoal-100" style={{ fontWeight: 700 }}>
                      {String(current + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
