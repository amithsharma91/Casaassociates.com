import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const WA_MSG = encodeURIComponent(
  'Hello,\n\nI\'m ready to start my project.\n\nPlease share details for:\n\nService: [mention service]\nLocation: [mention location]\nBudget: [mention budget]\n\nThank you.'
);

export default function ContactCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative bg-neutral-950 py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="font-serif text-neutral-950 font-bold text-[clamp(6rem,18vw,18rem)] leading-none tracking-[-0.04em] opacity-100 whitespace-nowrap">BUILD</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-neutral-700"></span>
              <span className="text-neutral-600 text-xs tracking-[0.25em] uppercase">Ready to Begin?</span>
            </div>
            <h2 className="font-serif text-white text-4xl md:text-5xl font-light leading-[1.08] mb-5 tracking-[-0.01em]">
              Ready to Build<br />
              Something <em className="not-italic font-semibold">Exceptional?</em>
            </h2>
            <p className="text-neutral-500 text-[15px] leading-relaxed mb-10">
              Message us on WhatsApp with your requirements and our architects will get back to you within 30 minutes. Let's discuss your project today.
            </p>

            {/* WhatsApp CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/919000975046?text=${WA_MSG}`}
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 md:px-10 py-4 border border-white text-white text-sm font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-white hover:text-neutral-900 transition-all cursor-pointer whitespace-nowrap group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-fill text-lg"></i>
                </div>
                Get Quote on WhatsApp
                <div className="w-4 h-4 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <i className="ri-arrow-right-line text-sm"></i>
                </div>
              </a>
              <a
                href="tel:+919000975046"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white/80 text-sm font-medium tracking-[0.14em] uppercase rounded-sm hover:border-white hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                +91 90009 75046
              </a>
              <a
                href="tel:04049535040"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/65 text-sm font-medium tracking-[0.14em] uppercase rounded-sm hover:border-white/50 hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-phone-line text-sm"></i>
                </div>
                040 4953 5046
              </a>
            </div>

            {/* Bottom links */}
            <div className="flex flex-wrap items-center gap-5 mt-10 pt-8 border-t border-neutral-900">
              <a
                href="mailto:contact@casaassociates.com"
                className="inline-flex items-center gap-2 text-neutral-500 text-xs tracking-[0.12em] uppercase hover:text-white transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-mail-line text-sm"></i>
                </div>
                contact@casaassociates.com
              </a>
              <span className="text-neutral-800">\u00b7</span>
              <span className="text-neutral-600 text-xs tracking-wide">Banjara Hills, Hyderabad 500034</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
