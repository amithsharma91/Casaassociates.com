import { useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { testimonials } from '../../../mocks/testimonials';

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} mb-16`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-neutral-400"></span>
                <span className="text-neutral-500 text-xs tracking-[0.24em] uppercase">Client Voices</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-[-0.01em]">
                What Our Clients<br />
                <strong className="font-semibold">Say About Us</strong>
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end gap-2">
              <p className="text-neutral-500 text-sm max-w-xs leading-relaxed text-left md:text-right">
                Real experiences from homeowners, developers, and business owners who trusted us with their vision.
              </p>
              <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-full px-4 py-2">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-3.5 h-3.5 flex items-center justify-center">
                      <i className="ri-star-fill text-xs text-neutral-900"></i>
                    </div>
                  ))}
                </div>
                <span className="text-neutral-900 text-xs font-medium ml-1">4.9/5</span>
                <span className="text-neutral-400 text-xs">across 200+ clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid — 3 cols, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => {
            const isOpen = expanded === t.id;
            const isLong = t.quote.length > 160;
            return (
              <div
                key={t.id}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${(i % 6) + 1} card-hover bg-white rounded-2xl p-8 md:p-9 border border-neutral-200 flex flex-col`}
              >
                {/* Stars + project tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <div key={s} className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-star-fill text-xs text-neutral-900"></i>
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] tracking-[0.14em] text-neutral-400 uppercase">{t.role}</span>
                </div>

                {/* Quote mark */}
                <div className="font-serif text-7xl text-neutral-100 leading-none -mt-3 mb-2 select-none">&ldquo;</div>

                {/* Quote with read more */}
                <div className="flex-1 mb-6">
                  <p className="text-neutral-700 text-[14px] leading-[1.85]">
                    {isLong && !isOpen ? `${t.quote.slice(0, 155)}…` : t.quote}
                  </p>
                  {isLong && (
                    <button
                      onClick={() => setExpanded(isOpen ? null : t.id)}
                      className="mt-2 text-neutral-400 text-[11px] tracking-[0.12em] uppercase hover:text-neutral-700 transition-colors cursor-pointer"
                    >
                      {isOpen ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>

                {/* Project tag */}
                <div className="mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-neutral-50 border border-neutral-200 text-neutral-600 text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full">
                    <i className="ri-building-line text-[10px]"></i>
                    {t.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-neutral-100">
                  <div className="w-11 h-11 flex items-center justify-center bg-neutral-900 rounded-full flex-shrink-0">
                    <span className="text-white text-sm font-medium font-serif">{t.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-neutral-900 text-sm font-semibold leading-tight">{t.name}</div>
                    <div className="text-neutral-500 text-xs mt-0.5 truncate">{t.title}</div>
                  </div>
                  <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                    <i className="ri-google-fill text-base text-neutral-300"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-5 mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-white border border-neutral-200 rounded-2xl px-6 md:px-8 py-6`}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-neutral-900 rounded-full flex-shrink-0">
              <i className="ri-star-fill text-white text-base"></i>
            </div>
            <div>
              <div className="font-serif text-neutral-900 text-base md:text-lg font-semibold">Join 200+ Satisfied Clients</div>
              <div className="text-neutral-500 text-xs md:text-sm">Let us bring your vision to life with the same care and precision.</div>
            </div>
          </div>
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-neutral-900 text-white text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:bg-neutral-700 transition-all cursor-pointer whitespace-nowrap flex-shrink-0"
          >
            Start Your Project
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-arrow-right-line text-sm"></i>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
