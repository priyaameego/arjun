import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import AnimatedSection from '../components/AnimatedSection';
import { BRAND } from '../data/content';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';

interface FormData {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', mobile: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.mobile.trim()) errs.mobile = 'Mobile number is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email address';
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', mobile: '', email: '', message: '' });
    }
  };

  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        title="Contact Us"
        eyebrow="GET IN TOUCH"
        image="https://arjuncement.com/images/03.jpg"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* 2. Contact Info + Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

            {/* Left — Get in touch + contact info */}
            <div className="lg:col-span-5">
              <AnimatedSection direction="left">
                <span className="section-eyebrow">Reach Out</span>
                <h2
                  className="text-4xl sm:text-5xl lg:text-5xl font-display font-800 text-charcoal-900 mt-4 leading-tight2 tracking-tight"
                  style={{ fontWeight: 800 }}
                >
                  Get in<br /><span className="text-brand-red">Touch</span>
                </h2>
                <div className="divider-red mt-6 mb-8" />
                <p className="text-charcoal-500 leading-relaxed max-w-sm">
                  We'd love to hear from you. Reach out for product inquiries, partnership opportunities, or any other questions.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={150} className="mt-10 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 pb-6 border-b border-charcoal-100">
                  <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-1.5" style={{ fontWeight: 500 }}>Address</p>
                    <p className="text-charcoal-700 font-500 leading-relaxed" style={{ fontWeight: 500 }}>
                      {BRAND.addressLine1}<br />{BRAND.addressLine2}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pb-6 border-b border-charcoal-100">
                  <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-1.5" style={{ fontWeight: 500 }}>Phone</p>
                    <a href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`} className="block text-charcoal-700 font-500 hover:text-brand-red transition-colors" style={{ fontWeight: 500 }}>
                      {BRAND.phones[0]}
                    </a>
                    <a href={`tel:${BRAND.phones[1].replace(/\s/g, '')}`} className="block text-charcoal-700 font-500 hover:text-brand-red transition-colors mt-0.5" style={{ fontWeight: 500 }}>
                      {BRAND.phones[1]}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pb-6 border-b border-charcoal-100">
                  <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-1.5" style={{ fontWeight: 500 }}>Email</p>
                    <a href={`mailto:${BRAND.email}`} className="text-charcoal-700 font-500 hover:text-brand-red transition-colors break-all" style={{ fontWeight: 500 }}>
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe size={16} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-1.5" style={{ fontWeight: 500 }}>Website</p>
                    <a href="https://arjuncement.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-700 font-500 hover:text-brand-red transition-colors" style={{ fontWeight: 500 }}>
                      {BRAND.website}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={100} direction="right">
                <div className="bg-warm-grey p-8 md:p-12">
                  <h3
                    className="font-display font-700 text-2xl text-charcoal-900 mb-8"
                    style={{ fontWeight: 700 }}
                  >
                    Send Us a Message
                  </h3>

                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="w-14 h-14 bg-brand-red flex items-center justify-center mx-auto mb-4">
                        <Send size={22} className="text-white" />
                      </div>
                      <h4 className="font-display font-700 text-xl text-charcoal-900 mb-2" style={{ fontWeight: 700 }}>
                        Message Sent!
                      </h4>
                      <p className="text-charcoal-500 text-sm">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-brand-red text-sm underline hover:no-underline"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-8">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-2" style={{ fontWeight: 500 }}>
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="input-premium"
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="text-brand-red text-xs mt-1.5" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Mobile */}
                      <div>
                        <label htmlFor="mobile" className="block text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-2" style={{ fontWeight: 500 }}>
                          Mobile No *
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="input-premium"
                          aria-required="true"
                          aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                        />
                        {errors.mobile && (
                          <p id="mobile-error" className="text-brand-red text-xs mt-1.5" role="alert">
                            {errors.mobile}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-2" style={{ fontWeight: 500 }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="input-premium"
                          aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-brand-red text-xs mt-1.5" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-xs text-charcoal-400 uppercase tracking-[0.18em] mb-2" style={{ fontWeight: 500 }}>
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you…"
                          rows={5}
                          className="input-premium"
                          aria-required="true"
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="text-brand-red text-xs mt-1.5" role="alert">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full justify-center gap-3"
                      >
                        <span>Send Message</span>
                        <Send size={15} />
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Map */}
      <section className="bg-charcoal-900" id="map" aria-label="Location map">
        <div className="relative">
          {/* Map header strip */}
          <div className="container-premium py-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-red" />
              <span className="text-white/60 text-sm">{BRAND.addressLine1}, {BRAND.addressLine2}</span>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('363/288/1 Hasanganj Bawali Campwell Road Lucknow 226017')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red text-xs tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2"
            >
              Open in Maps
              <span className="w-4 h-px bg-current" />
            </a>
          </div>

          {/* Map embed */}
          <div className="relative h-80 md:h-[480px] overflow-hidden">
            <iframe
              title="Arjun Cement Location — Lucknow"
              src="https://maps.google.com/maps?q=363%2F288%2F1+Hasanganj+Bawali+Campwell+Road+Lucknow+226017&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map showing Arjun Cement location in Lucknow"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
