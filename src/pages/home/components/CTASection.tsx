import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const WA_LINK =
  'https://wa.me/919000975046?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AProject%20Location%3A%20%0AService%20Required%3A%20%0ABudget%20(Optional)%3A%20%0AMessage%3A%20';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="relative py-12 md:py-18 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://static.readdy.ai/image/72ebb3450643617b8a5b38c5c017e687/703e3121af468cf7c421f57fc3171a57.jpeg"
          alt="Premium architectural interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/88 to-black/75"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} flex flex-col items-center text-center`}>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-white/40"></span>
            <span className="text-white/80 text-xs tracking-[0.22em] uppercase">Let&apos;s Build Together</span>
            <span className="w-8 h-px bg-white/40"></span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.08] mb-5 tracking-[-0.01em]">
            Ready to Get<br />
            <em className="not-italic font-semibold">Started?</em>
          </h2>

          {/* Subtext */}
          <p className="text-white/80 text-[15px] leading-relaxed mb-4 max-w-lg">
            Get a quick response on WhatsApp within minutes. Tell us your service, location, and budget — our architects will take it from there.
          </p>

          {/* Response badge */}
          <div className="flex items-center gap-2.5 mb-10 px-4 py-2.5 bg-green-500/15 border border-green-500/30 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>
            <span className="text-green-300 text-sm font-medium">Typically replies within 30 minutes</span>
          </div>

          {/* Primary WhatsApp CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#25D366] text-white text-sm font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-[#1ebe5d] hover:scale-[1.03] transition-all cursor-pointer whitespace-nowrap shadow-xl shadow-green-900/40 group mb-4 md:mb-5"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-whatsapp-fill text-lg"></i>
            </div>
            Get Instant Quote on WhatsApp
            <div className="w-4 h-4 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              <i className="ri-arrow-right-line text-sm"></i>
            </div>
          </a>

          {/* Secondary actions */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919000975046"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/25 text-white/75 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:border-white/50 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-sm"></i>
              </div>
              Call +91 90009 75046
            </a>
            <a
              href="tel:04049535040"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/60 text-sm font-medium tracking-[0.1em] uppercase rounded-full hover:border-white/45 hover:text-white/80 transition-all cursor-pointer whitespace-nowrap"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-phone-line text-sm"></i>
              </div>
              Landline: 040 4953 5046
            </a>
            <a
              href="mailto:contact@casaassociates.com"
              className="inline-flex items-center gap-2 text-white/45 text-sm hover:text-white/75 transition-colors cursor-pointer"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-mail-line text-sm"></i>
              </div>
              contact@casaassociates.com
            </a>
          </div>

          {/* How it works strip */}
          <div className="mt-16 pt-12 border-t border-white/10 w-full max-w-2xl">
            <p className="text-white/30 text-[10px] tracking-[0.22em] uppercase mb-8">How It Works</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Click the button', desc: 'Opens WhatsApp with a pre-filled message.' },
                { step: '02', title: 'Share your details', desc: 'Service, location, and budget — takes 30 seconds.' },
                { step: '03', title: 'Get a free quote', desc: 'Our architect responds within 30 minutes.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex flex-col items-center text-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/8 border border-white/12 rounded-full flex-shrink-0">
                    <span className="text-white/60 text-xs font-semibold">{step}</span>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium mb-1">{title}</p>
                    <p className="text-white/65 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
