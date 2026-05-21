import { useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { featuredProject } from '../../../mocks/projects';

const FEATURES = [
  { icon: 'ri-ruler-2-line', label: 'Total Area', value: featuredProject.area },
  { icon: 'ri-building-line', label: 'Project Type', value: featuredProject.category },
  { icon: 'ri-checkbox-circle-line', label: 'Status', value: featuredProject.status },
  { icon: 'ri-map-pin-line', label: 'Location', value: featuredProject.location },
];

export default function FeaturedProject() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    setSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append('project', featuredProject.title);
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      await fetch('https://readdy.ai/api/form/d74j1sv5hic0eqh316bg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Section Label */}
        <div className="flex items-center gap-3 mb-14">
          <span className="w-8 h-px bg-neutral-400"></span>
          <span className="text-neutral-500 text-xs tracking-[0.22em] uppercase">Featured Work</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Image */}
          <div
            ref={leftRef}
            className={`animate-on-scroll-left ${leftVisible ? 'visible' : ''}`}
          >
            <div className="relative rounded-2xl overflow-hidden h-[380px] md:h-[500px]">
              <img
                src={featuredProject.imageUrl}
                alt={featuredProject.title}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              {/* Floating badge */}
              <div className="absolute top-6 left-6 bg-neutral-900/90 backdrop-blur-sm text-white text-xs px-4 py-2.5 rounded-full tracking-[0.15em] uppercase">
                {featuredProject.status}
              </div>
            </div>

            {/* Feature tiles */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {FEATURES.map((f) => (
                <div key={f.label} className="bg-white border border-neutral-200 rounded-xl px-5 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-neutral-100 rounded-lg flex-shrink-0">
                    <i className={`${f.icon} text-neutral-700 text-sm`}></i>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[10px] tracking-[0.15em] uppercase mb-0.5">{f.label}</div>
                    <div className="text-neutral-900 text-xs font-medium">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Details */}
          <div
            ref={rightRef}
            className={`animate-on-scroll-right ${rightVisible ? 'visible' : ''}`}
          >
            <span className="inline-block text-neutral-500 text-xs tracking-[0.18em] uppercase mb-4">{featuredProject.category}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-neutral-900 leading-[1.1] mb-6">
              {featuredProject.title}
            </h2>
            <div className="flex items-center gap-1.5 text-neutral-500 text-sm mb-7">
              <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-xs"></i>
              </div>
              <span>{featuredProject.location}</span>
            </div>
            <p className="text-neutral-600 text-[15px] leading-[1.8] mb-10">
              {featuredProject.description}
            </p>

            {/* Highlights */}
            <div className="mb-10">
              {[
                'Full architectural + structural design by in-house team',
                'Biophilic sky gardens on every third floor',
                'Double-height lobbies with imported stone cladding',
                'Vaastu-aligned unit planning throughout',
                'Energy-efficient glazing and solar-ready rooftop',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 py-3 border-b border-neutral-100 last:border-b-0">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-arrow-right-line text-neutral-400 text-xs"></i>
                  </div>
                  <span className="text-neutral-600 text-sm leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            {!showForm ? (
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 text-white text-sm font-medium tracking-[0.12em] uppercase rounded-full hover:bg-neutral-700 transition-all cursor-pointer whitespace-nowrap"
              >
                Enquire About This Project
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </button>
            ) : (
              <div className="bg-white border border-neutral-200 rounded-2xl p-6">
                <h4 className="font-serif text-xl text-neutral-900 mb-5">Enquire About This Project</h4>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-900 rounded-full mx-auto mb-3">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <p className="text-neutral-600 text-sm">Thank you! We&apos;ll be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-readdy-form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-medium text-neutral-500 mb-1.5 tracking-[0.12em] uppercase">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 bg-neutral-50 placeholder:text-neutral-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-neutral-500 mb-1.5 tracking-[0.12em] uppercase">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 bg-neutral-50 placeholder:text-neutral-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-neutral-500 mb-1.5 tracking-[0.12em] uppercase">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 bg-neutral-50 placeholder:text-neutral-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-neutral-500 mb-1.5 tracking-[0.12em] uppercase">
                        Message <span className="text-neutral-400 normal-case tracking-normal">({formData.message.length}/500)</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value.slice(0, 500) })}
                        placeholder="Tell us about your interest..."
                        rows={3}
                        maxLength={500}
                        className="w-full px-4 py-3 text-sm border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 bg-neutral-50 resize-none placeholder:text-neutral-400"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting || formData.message.length > 500}
                      className="w-full py-3.5 bg-neutral-900 text-white text-xs font-medium tracking-[0.12em] uppercase rounded-full hover:bg-neutral-700 transition-all cursor-pointer whitespace-nowrap disabled:opacity-60"
                    >
                      {submitting ? 'Sending...' : 'Send Enquiry'}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
