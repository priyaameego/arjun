import React from 'react';
import Breadcrumb from './Breadcrumb';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  breadcrumb: BreadcrumbItem[];
  image: string;
  subtitle?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  eyebrow,
  breadcrumb,
  image,
  subtitle,
}) => {
  return (
    <section
      className="relative w-full flex items-end bg-charcoal-900 overflow-hidden"
      style={{ minHeight: '480px', maxHeight: '600px', height: '55vh' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/4" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/4" />
      </div>

      {/* Content — positioned at bottom */}
      <div className="relative container-premium w-full pb-12 md:pb-16 pt-28 md:pt-32">
        {eyebrow && (
          <p className="section-eyebrow mb-4 opacity-0 animate-[fadeUp_0.7s_ease-out_0.1s_forwards]">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-800 text-white leading-tight2 tracking-tight mb-5 opacity-0 animate-[fadeUp_0.8s_ease-out_0.25s_forwards]"
          style={{ fontWeight: 800 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 max-w-xl text-base leading-relaxed mb-6 opacity-0 animate-[fadeUp_0.7s_ease-out_0.4s_forwards]">
            {subtitle}
          </p>
        )}
        <div className="opacity-0 animate-[fadeUp_0.7s_ease-out_0.5s_forwards]">
          <Breadcrumb items={breadcrumb} light />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
};

export default PageHero;
