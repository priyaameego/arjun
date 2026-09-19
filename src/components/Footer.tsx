import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { BRAND, aboutCompany, footerLinks } from '../data/content';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-white" role="contentinfo">
      {/* Red accent line */}
      <div className="h-0.5 w-full bg-brand-red" />

      <div className="container-premium py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Col 1 — About */}
          <div>
            <div className="mb-6">
              <img src="/arjun.png" alt="Arjun Cement Logo" className="h-16 md:h-20 w-auto filter brightness-0 invert opacity-90" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-body max-w-xs">
              {aboutCompany.footerAbout}
            </p>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h4 className="section-eyebrow !text-white/40 mb-6">Information</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-brand-red group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact Info */}
          <div>
            <h4 className="section-eyebrow !text-white/40 mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  {BRAND.addressLine1}<br />{BRAND.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`} className="text-white/60 text-sm hover:text-white transition-colors">
                    {BRAND.phones[0]}
                  </a>
                  <a href={`tel:${BRAND.phones[1].replace(/\s/g, '')}`} className="text-white/60 text-sm hover:text-white transition-colors">
                    {BRAND.phones[1]}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="text-white/60 text-sm hover:text-white transition-colors break-all">
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={16} className="text-brand-red shrink-0" />
                <a href="https://arjuncement.com" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm hover:text-white transition-colors">
                  {BRAND.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {year} Arjun Cement. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            R.D. Cement Industries Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
