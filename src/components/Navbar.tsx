import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, BRAND } from '../data/content';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isTransparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent'
            : 'bg-white shadow-[0_1px_0_rgba(0,0,0,0.08)]'
        }`}
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
              aria-label="Arjun Cement Home"
            >
              <div className="flex items-center h-full">
                <img src="/arjun.png" alt="Arjun Cement Logo" className={`h-11 md:h-12 w-auto transition-all duration-500 ${isTransparent ? 'brightness-0 invert' : ''}`} />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link transition-colors duration-300 ${
                    location.pathname === link.href ? 'active' : ''
                  } ${
                    isTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-charcoal-600 hover:text-charcoal-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`}
                className={`btn-primary !py-2.5 !px-5 !text-[0.72rem] transition-all duration-300 ${
                  isTransparent ? 'opacity-90 hover:opacity-100' : ''
                }`}
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`md:hidden p-2 transition-colors duration-300 ${
                isTransparent ? 'text-white' : 'text-charcoal-900'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white flex flex-col transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-black/5">
            <img src="/arjun.png" alt="Arjun Cement Logo" className="h-9 w-auto" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-charcoal-700"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 pt-8 pb-6 flex-1" role="navigation" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`py-4 text-xl font-display font-600 tracking-tight border-b border-black/5 transition-colors ${
                  location.pathname === link.href
                    ? 'text-brand-red'
                    : 'text-charcoal-800 hover:text-brand-red'
                }`}
                style={{ fontWeight: 600 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <div className="h-px bg-black/5 mb-6" />
            <p className="text-xs text-charcoal-400 uppercase tracking-widest mb-3">Contact</p>
            <a href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`} className="block text-charcoal-700 font-medium text-base mb-1">
              {BRAND.phones[0]}
            </a>
            <a href={`tel:${BRAND.phones[1].replace(/\s/g, '')}`} className="block text-charcoal-700 font-medium text-base">
              {BRAND.phones[1]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
