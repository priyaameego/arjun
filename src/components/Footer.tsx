import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { BRAND, aboutCompany, footerLinks } from '../data/content';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-charcoal-900 text-white overflow-hidden" role="contentinfo">
      {/* Premium background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-red/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Red accent line */}
      <div className="h-0.5 w-full bg-brand-red/80" />

      <div className="container-premium py-20 lg:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Col 1 — About */}
          <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4">
            <div className="mb-8 inline-block overflow-hidden relative group">
              <img src="/arjun.png" alt="Arjun Cement Logo" className="h-16 md:h-20 w-auto filter brightness-0 invert opacity-90 transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-body max-w-sm">
              {aboutCompany.footerAbout}
            </p>
          </motion.div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Col 2 — Links */}
          <motion.div variants={itemVariants} className="md:col-span-3 lg:col-span-3">
            <h4 className="font-display text-white/90 text-lg mb-8 tracking-wide">Information</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 text-sm hover:text-white transition-colors duration-400 flex items-center gap-3 group w-fit"
                  >
                    <span className="w-0 h-px bg-brand-gold group-hover:w-4 transition-all duration-400 ease-out" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Contact Info */}
          <motion.div variants={itemVariants} className="md:col-span-4 lg:col-span-4">
            <h4 className="font-display text-white/90 text-lg mb-8 tracking-wide">Contact Info</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <MapPin size={18} className="text-brand-red/70 mt-0.5 shrink-0 group-hover:text-brand-red transition-colors duration-400" />
                <span className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-400">
                  {BRAND.addressLine1}<br />{BRAND.addressLine2}
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <Phone size={18} className="text-brand-red/70 mt-1 shrink-0 group-hover:text-brand-red transition-colors duration-400" />
                <div className="flex flex-col gap-2 mt-0.5">
                  <a href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`} className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-400">
                    {BRAND.phones[0]}
                  </a>
                  <a href={`tel:${BRAND.phones[1].replace(/\s/g, '')}`} className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-400">
                    {BRAND.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={18} className="text-brand-red/70 shrink-0 group-hover:text-brand-red transition-colors duration-400" />
                <a href={`mailto:${BRAND.email}`} className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-400 break-all">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Globe size={18} className="text-brand-red/70 shrink-0 group-hover:text-brand-red transition-colors duration-400" />
                <a href="https://arjuncement.com" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-brand-gold transition-colors duration-400">
                  {BRAND.website}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-xs tracking-widest uppercase font-body">
            © {year} Arjun Cement. All rights reserved.
          </p>
          <p className="text-white/20 text-xs tracking-widest uppercase font-body">
            R.D. Cement Industries Pvt. Ltd.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
