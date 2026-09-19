import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/content';

interface SlideImageProps {
  src: string;
  alt: string;
  active: boolean;
}

const SlideImage: React.FC<SlideImageProps> = ({ src, alt, active }) => (
  <div className="absolute inset-0 overflow-hidden">
    <div
      className={`absolute inset-0 bg-cover bg-center ${active ? 'ken-burns' : ''}`}
      style={{ backgroundImage: `url(${src})` }}
      role="img"
      aria-label={alt}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
  </div>
);




const eyebrowVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.1, duration: 0.7, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.9,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.4 },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const SLIDE_DURATION = 6000;

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const total = heroSlides.length;

  const resetProgress = useCallback(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (SLIDE_DURATION / 100), 100));
    }, 100);
  }, []);

  const goTo = useCallback(
    (idx: number) => {
      setCurrent((idx + total) % total);
      resetProgress();
    },
    [total, resetProgress]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    resetProgress();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [current]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const slide = heroSlides[current];
  const slideNumber = String(current + 1).padStart(2, '0');
  const totalNumber = String(total).padStart(2, '0');

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-charcoal-900"
      aria-label="Hero slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide backgrounds */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== current}
        >
          <SlideImage src={s.image} alt={s.message} active={i === current} />
        </div>
      ))}

      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white/5" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/5" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-premium w-full">
          <div className="max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div key={current} className="space-y-6">
                {/* Eyebrow */}
                <motion.div
                  variants={eyebrowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center gap-4"
                >
                  <span className="section-eyebrow !text-brand-red">
                    ARJUN CEMENT
                  </span>
                  <span className="h-px w-12 bg-brand-red opacity-60" />
                  <span className="section-eyebrow !text-white/40">
                    EST. 1992
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-800 text-white leading-tight tracking-tight"
                  variants={headlineVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ fontWeight: 800, whiteSpace: 'pre-line', lineHeight: 1.1 }}
                >
                  {slide.message}
                </motion.h1>

                {/* CTA */}
                <motion.div
                  variants={ctaVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-wrap items-center gap-4 pt-4"
                >
                  <a href="/arjun" className="btn-primary">
                    Our Products
                  </a>
                  <a
                    href="/contact"
                    className="btn-outline text-white border-white/40 hover:bg-white hover:text-charcoal-900 text-sm"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Slide counter — right side */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-end gap-3" aria-hidden="true">
        <span className="font-display font-700 text-2xl text-white/80" style={{ fontWeight: 700 }}>
          {slideNumber}
        </span>
        <div className="w-px h-12 bg-white/20" />
        <span className="font-display font-300 text-lg text-white/30" style={{ fontWeight: 300 }}>
          {totalNumber}
        </span>
      </div>

      {/* Navigation arrows */}
      <div className="absolute bottom-10 right-6 md:right-10 flex gap-3">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/70 transition-all duration-300"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="w-10 h-10 border border-white/30 flex items-center justify-center text-white/60 hover:text-white hover:border-white/70 transition-all duration-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-500 h-0.5 ${
              i === current ? 'w-8 bg-brand-red' : 'w-3 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
        <div
          className="h-full bg-brand-red transition-none"
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;
